__d(
  "WAWebPageVisibilityRecency",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = globalThis.document,
      l = !1,
      s = -1,
      u = -1,
      c = -1;
    function d() {
      var t = self.performance;
      l ||
        e == null ||
        t == null ||
        ((l = !0),
        e.visibilityState === "visible" ? (s = t.now()) : (u = t.now()),
        e.addEventListener("visibilitychange", g));
    }
    function m() {
      try {
        var e = self.performance.now();
        return {
          atMs: e,
          hiddenForMs: y(e),
          msSinceVisible: h(e),
          visibility: C(),
        };
      } catch (e) {
        return {
          atMs: -1,
          hiddenForMs: -1,
          msSinceVisible: -1,
          visibility: "hidden",
        };
      }
    }
    function p() {
      return h(self.performance.now());
    }
    function _() {
      return c;
    }
    function f(e) {
      return s < 0 || c < 0 ? !1 : self.performance.now() - s <= e;
    }
    function g() {
      if (e != null) {
        var t = self.performance.now();
        e.visibilityState === "visible"
          ? (u >= 0 && (c = t - u), (s = t))
          : (u = t);
      }
    }
    function h(e) {
      return s < 0 ? -1 : e - s;
    }
    function y(t) {
      return (e == null ? void 0 : e.visibilityState) === "visible"
        ? 0
        : l
          ? u > s
            ? t - u
            : 0
          : -1;
    }
    function C() {
      return (e == null ? void 0 : e.visibilityState) !== "visible"
        ? "hidden"
        : e.hasFocus()
          ? "visible_focused"
          : "visible_unfocused";
    }
    ((i.startPageVisibilityRecencyTracking = d),
      (i.snapshotPageVisibility = m),
      (i.getMsSinceDocumentVisible = p),
      (i.getLastHiddenDurationMs = _),
      (i.wasDocumentHiddenWithinMs = f));
  },
  66,
);
