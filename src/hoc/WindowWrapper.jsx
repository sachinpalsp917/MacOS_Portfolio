import useWindowStore from "#store/window";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { useLayoutEffect, useRef } from "react";

const WindowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const { focusWindow, windows } = useWindowStore();
    const { isOpen, zIndex } = windows[windowKey];
    const ref = useRef(null);

    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen) return;
      // Clear inline display so the element's CSS class (flex / block / etc.)
      // takes effect — hard-coding "block" here was overriding `display: flex`
      // on windows that need a flex layout (e.g. #photos).
      el.style.display = "";
      gsap.fromTo(
        el,
        { scale: 0.8, opacity: 0, y: 40 },
        { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
      );
    }, [isOpen]);

    useGSAP(() => {
      const el = ref.current;
      if (!el) return;

      // Drag-to-move is bound to the window header only (like a real macOS
      // titlebar). This keeps the body free for scrolling, clicks on content,
      // and — critically — the bottom-right resize handle without conflict.
      const header = el.querySelector("#window-header") ?? el;

      const [instance] = Draggable.create(el, {
        trigger: header,
        cursor: "grab",
        activeCursor: "grabbing",
        onPress: () => focusWindow(windowKey),
      });

      return () => instance.kill();
    }, []);

    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;
      // Empty string lets the CSS class decide (block, flex, grid, …).
      el.style.display = isOpen ? "" : "none";
    }, [isOpen]);

    return (
      <section
        id={windowKey}
        ref={ref}
        style={{ zIndex }}
        className="absoulute"
      >
        <Component {...props} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${
    Component.displayName || Component.name || "Component"
  })`;

  return Wrapped;
};

export default WindowWrapper;
