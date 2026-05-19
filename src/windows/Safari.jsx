import { WindowControls } from "#components";
import { projectUpdates } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  ExternalLink,
  PanelLeft,
  Plus,
  Search,
  Share,
  ShieldHalf,
} from "lucide-react";

// Show newest first. "in-progress" entries float to the very top regardless
// of date, so the visitor always sees what's currently cooking.
const sortUpdates = (a, b) => {
  if (a.status === "in-progress" && b.status !== "in-progress") return -1;
  if (b.status === "in-progress" && a.status !== "in-progress") return 1;
  return b.date.localeCompare(a.date);
};

const STATUS_STYLES = {
  shipped: { dot: "bg-emerald-500", label: "Shipped", chip: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  "in-progress": { dot: "bg-amber-500", label: "In progress", chip: "bg-amber-50 text-amber-700 border-amber-200" },
  planned: { dot: "bg-sky-500", label: "Planned", chip: "bg-sky-50 text-sky-700 border-sky-200" },
};

const formatDate = (iso) => {
  // Accept "YYYY-MM" or "YYYY-MM-DD"; render as "May 2026" / "May 14, 2026"
  const parts = iso.split("-");
  const year = parts[0];
  const monthIdx = parseInt(parts[1], 10) - 1;
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  const month = months[monthIdx] ?? "";
  if (parts.length === 3) return `${month} ${parseInt(parts[2], 10)}, ${year}`;
  return `${month} ${year}`;
};

const Safari = () => {
  const entries = [...projectUpdates].sort(sortUpdates);

  return (
    <>
      <div id="window-header">
        <WindowControls target="safari" />
        <PanelLeft className="ml-10 icon" />
        <div className="flex items-center gap-1 ml-5">
          <ChevronLeft className="icon" />
          <ChevronRight className="icon" />
        </div>

        <div className="flex-1 flex-center gap-3">
          <ShieldHalf className="icon" />
          <div className="search">
            <Search className="icon" />
            <input
              type="text"
              value="portfolio://changelog"
              readOnly
              tabIndex={-1}
              onKeyDown={(e) => e.preventDefault()}
              onPaste={(e) => e.preventDefault()}
              className="flex-1 cursor-default select-none"
              aria-label="Address bar (read-only)"
            />
          </div>
        </div>

        <div className="flex items-center gap-5">
          <Share className="icon opacity-40" />
          <Plus className="icon opacity-40" />
          <Copy className="icon opacity-40" />
        </div>
      </div>

      <div className="h-[70vh] overflow-y-auto bg-white">
        <div className="max-w-3xl mx-auto px-8 py-8">
          <header className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Changelog</h2>
            <p className="text-sm text-gray-500 mt-1">
              A running log of what I&rsquo;m shipping and what&rsquo;s currently
              on the bench. Newest on top.
            </p>
          </header>

          <ol className="relative border-l border-gray-200 ml-3">
            {entries.map((entry) => {
              const style = STATUS_STYLES[entry.status] ?? STATUS_STYLES.shipped;
              return (
                <li key={entry.id} className="mb-8 ml-6 last:mb-0">
                  <span
                    className={`absolute -left-[7px] mt-1.5 w-3.5 h-3.5 rounded-full border-2 border-white shadow ${style.dot}`}
                    aria-hidden
                  />

                  <div className="flex items-baseline gap-3 mb-1">
                    <time className="text-xs font-mono uppercase tracking-wide text-gray-500">
                      {formatDate(entry.date)}
                    </time>
                    <span
                      className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border ${style.chip}`}
                    >
                      {style.label}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-gray-900 leading-snug">
                    {entry.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                    {entry.summary}
                  </p>

                  {entry.tags && entry.tags.length > 0 ? (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {entry.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] px-2 py-0.5 rounded-md bg-gray-100 text-gray-600 border border-gray-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  {entry.link ? (
                    <div className="mt-3">
                      <a
                        href={entry.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-600 hover:text-blue-800"
                      >
                        {entry.linkLabel ?? "View"} <ExternalLink size={12} />
                      </a>
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ol>

          <footer className="mt-10 pt-4 border-t border-gray-100 text-[11px] text-gray-400 text-center">
            Updated whenever I ship something worth writing down.
          </footer>
        </div>
      </div>
    </>
  );
};

const SafariWindow = WindowWrapper(Safari, "safari");

export default SafariWindow;
