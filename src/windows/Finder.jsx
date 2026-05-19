import { WindowControls } from "#components";
import { locations } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import useLocationStore from "#store/location";
import useWindowStore from "#store/window";
import clsx from "clsx";
import { Search } from "lucide-react";
import { useMemo } from "react";

// ── Random non-overlapping layout for Finder items ──────────────────────────
// Each Finder icon is roughly 160w × 120h (image + label). We scatter items
// inside a virtual canvas, retrying up to 60 times per item to avoid overlap.
// If a slot can't be found, fall back to a tidy column.
const CANVAS = { w: 540, h: 380, itemW: 160, itemH: 120, gap: 12 };

function randomLayout(items) {
  const placed = [];
  for (const item of items) {
    let pos = null;
    for (let i = 0; i < 60; i++) {
      const x = Math.floor(Math.random() * Math.max(1, CANVAS.w - CANVAS.itemW));
      const y = Math.floor(Math.random() * Math.max(1, CANVAS.h - CANVAS.itemH));
      const overlaps = placed.some(
        (p) =>
          Math.abs(x - p.x) < CANVAS.itemW + CANVAS.gap &&
          Math.abs(y - p.y) < CANVAS.itemH + CANVAS.gap
      );
      if (!overlaps) {
        pos = { x, y };
        break;
      }
    }
    if (!pos) {
      // Fallback: stack vertically along the left edge
      pos = { x: 10, y: placed.length * (CANVAS.itemH + CANVAS.gap) };
    }
    placed.push({ id: item.id, ...pos });
  }
  return placed;
}

const Finder = () => {
  const { openWindow } = useWindowStore();
  const { activeLocation, setActiveLocation } = useLocationStore();

  // Compute random positions once per active location. New random scatter
  // every time the user navigates into a different folder; stable while
  // they're inside the same folder.
  const positions = useMemo(() => {
    const items = activeLocation?.children ?? [];
    const layout = randomLayout(items);
    const byId = new Map(layout.map((p) => [p.id, p]));
    return byId;
  }, [activeLocation?.id]);

  const openItem = (item) => {
    if (item.fileType === "pdf") return openWindow("resume");
    if (item.kind === "folder") return setActiveLocation(item);
    if (["fig", "url"].includes(item.fileType) && item.href)
      return window.open(item.href, "_blank");
    openWindow(`${item.fileType}${item.kind}`, item);
  };

  const renderList = (name, items) => (
    <div>
      <h3>{name}</h3>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => setActiveLocation(item)}
            className={clsx(
              item.id === activeLocation.id ? "active" : "not-active"
            )}
          >
            <img src={item.icon} alt={item.name} className="w-4" />
            <p className="text-sm font-medium truncate">{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <div id="window-header">
        <WindowControls target="finder" />
        <Search className="icon" />
      </div>

      <div className="bg-white flex h-full">
        <div className="sidebar">
          {renderList("Favourites", Object.values(locations))}
          {renderList("Work", locations.work.children)}
        </div>

        <ul className="content">
          {activeLocation?.children.map((item) => {
            const p = positions.get(item.id);
            return (
              <li
                key={item.id}
                style={p ? { left: `${p.x}px`, top: `${p.y}px` } : undefined}
                onClick={() => openItem(item)}
              >
                <img src={item.icon} alt={item.name} />
                <p>{item.name}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;
