__d(
  "cometVirtualizationPinExclusion",
  ["WeakRefApiUtils", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useCallback,
      u = o("WeakRefApiUtils").getNativeWeakSetOrFallback(),
      c = new u();
    function d() {
      return m;
    }
    function m(e) {
      e != null && c.add(e);
    }
    function p(e) {
      for (var t = e instanceof Element ? e : null; t != null; ) {
        var n;
        if (c.has(t)) return !0;
        t = (n = t.parentElement) != null ? n : null;
      }
      return !1;
    }
    ((l.usePinExclusionRef = d), (l.isInteractionExcludedFromPin = p));
  },
  98,
);
