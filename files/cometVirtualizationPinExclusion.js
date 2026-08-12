__d(
  "cometVirtualizationPinExclusion",
  ["FocusManager", "WeakRefApiUtils", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useCallback,
      u = o("WeakRefApiUtils").getNativeWeakSetOrFallback(),
      c = new u(),
      d = new u();
    function m() {
      return p;
    }
    function p(e) {
      e != null && c.add(e);
    }
    function _() {
      return f;
    }
    function f(e) {
      e != null && d.add(e);
    }
    function g(e) {
      if (e.localName !== "a") return !1;
      var t = e.getAttribute("href");
      return t != null && t !== "" && !t.startsWith("#");
    }
    function h(e) {
      for (var t = e instanceof Element ? e : null, n = !1; t != null; ) {
        var r;
        if (((n = n || g(t)), c.has(t) || (n && d.has(t)))) return !0;
        t = (r = t.parentElement) != null ? r : null;
      }
      return !1;
    }
    function y(e, t, n) {
      return (
        e === "focus" &&
        t instanceof Node &&
        n instanceof Node &&
        !n.contains(t)
      );
    }
    function C(e) {
      return e === "focus" && o("FocusManager").isFocusingWithoutUserIntent();
    }
    function b(e, t) {
      var n = window.setTimeout(function () {
        h(e) || t();
      }, 0);
      return function () {
        return window.clearTimeout(n);
      };
    }
    ((l.usePinExclusionRef = m),
      (l.useLinkPinExclusionRef = _),
      (l.isInteractionExcludedFromPin = h),
      (l.isPortalFocusExcludedFromPin = y),
      (l.isProgrammaticFocusExcludedFromPin = C),
      (l.schedulePinAfterPendingHydration = b));
  },
  98,
);
