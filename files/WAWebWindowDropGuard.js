__d(
  "WAWebWindowDropGuard",
  ["WAWebDragAndDropGatingUtils"],
  function (t, n, r, o, a, i, l) {
    var e = new Set(["email", "search", "tel", "text", "url"]);
    function s() {
      var e = function (t) {
        u(t) && t.preventDefault();
      };
      return (
        window.addEventListener("dragover", e),
        window.addEventListener("drop", e),
        function () {
          (window.removeEventListener("dragover", e),
            window.removeEventListener("drop", e));
        }
      );
    }
    function u(e) {
      return !(
        c(e.dataTransfer) &&
        d(e.target) &&
        o("WAWebDragAndDropGatingUtils").isDragAndDropCapabilityEnabled(
          o("WAWebDragAndDropGatingUtils").DragAndDropCapability
            .DropFromBrowser,
        )
      );
    }
    function c(e) {
      if (e == null) return !1;
      var t = Array.from(e.types);
      return t.includes("text/plain") && !t.includes("Files");
    }
    function d(t) {
      var n = p(t);
      return n instanceof HTMLInputElement
        ? e.has(n.type) && !n.readOnly && !n.disabled
        : n instanceof HTMLTextAreaElement
          ? !n.readOnly && !n.disabled
          : m(n);
    }
    function m(e) {
      var t,
        n = e == null ? void 0 : e.closest("[contenteditable]");
      return n instanceof HTMLElement
        ? (function (e) {
            return e === "" || e === "true" || e === "plaintext-only"
              ? !0
              : e === "false"
                ? !1
                : m(n.parentElement);
          })(
            (t = n.getAttribute("contenteditable")) == null
              ? void 0
              : t.toLowerCase(),
          )
        : !1;
    }
    function p(e) {
      return e instanceof Element
        ? e
        : e instanceof Node
          ? e.parentElement
          : null;
    }
    ((l.registerWindowDragGuard = s), (l.shouldBlockWindowDrag = u));
  },
  98,
);
