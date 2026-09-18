__d(
  "cometVirtualizationPinExclusion",
  ["FocusManager", "WeakRefApiUtils", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useCallback,
      u = o("WeakRefApiUtils").getNativeWeakSetOrFallback(),
      c = o("WeakRefApiUtils").getNativeWeakMapOrFallback(),
      d = new u(),
      m = new u(),
      p = new c();
    function _() {
      return f;
    }
    function f(e) {
      e != null && d.add(e);
    }
    function g() {
      return h;
    }
    function h(e) {
      e != null && m.add(e);
    }
    function y(e) {
      var t = o("react-compiler-runtime").c(2),
        n;
      return (
        t[0] !== e
          ? ((n = function (n) {
              n != null && p.set(n, e);
            }),
            (t[0] = e),
            (t[1] = n))
          : (n = t[1]),
        n
      );
    }
    function C(e) {
      if (e.localName !== "a") return !1;
      var t = e.getAttribute("href");
      return t != null && t !== "" && !t.startsWith("#");
    }
    function b(e) {
      for (
        var t = e instanceof Element ? e : null, n = !1, r = null;
        t != null;
      ) {
        var o;
        if (((r = r != null ? r : p.get(t)), (n = n || C(t)), d.has(t)))
          return { excluded: !0, reason: r != null ? r : "other" };
        if (n && m.has(t))
          return { excluded: !0, reason: r != null ? r : "other" };
        t = (o = t.parentElement) != null ? o : null;
      }
      return { excluded: !1, reason: r != null ? r : "other" };
    }
    function v(e) {
      return b(e).excluded;
    }
    function S(e) {
      return b(e).reason;
    }
    function R(e, t, n) {
      return (
        e === "focus" &&
        t instanceof Node &&
        n instanceof Node &&
        !n.contains(t)
      );
    }
    function L(e) {
      return e === "focus" && o("FocusManager").isFocusingWithoutUserIntent();
    }
    function E(e, t) {
      var n = window.setTimeout(function () {
        var n = b(e);
        n.excluded || t(n.reason);
      }, 0);
      return function () {
        return window.clearTimeout(n);
      };
    }
    ((l.usePinExclusionRef = _),
      (l.useLinkPinExclusionRef = g),
      (l.useInteractionPinReasonRef = y),
      (l.isInteractionExcludedFromPin = v),
      (l.getInteractionPinReason = S),
      (l.isPortalFocusExcludedFromPin = R),
      (l.isProgrammaticFocusExcludedFromPin = L),
      (l.schedulePinAfterPendingHydration = E));
  },
  98,
);
