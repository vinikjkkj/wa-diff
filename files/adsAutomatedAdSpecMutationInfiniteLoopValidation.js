__d(
  "adsAutomatedAdSpecMutationInfiniteLoopValidation",
  ["memoizeOneWithArgs"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map(),
      s = 10,
      u = null;
    function c() {
      u == null &&
        (u = window.setTimeout(function () {
          ((u = null), e.clear());
        }, 0));
    }
    function d(e, t, n, r) {
      var o = []
        .concat(t != null ? t : [], n != null ? n : [], r != null ? r : [])
        .sort()
        .join("_");
      return e + ":" + o;
    }
    function m(t, n, o, a) {
      var i,
        l = r("memoizeOneWithArgs")(d)(t, n, o, a),
        u = ((i = e.get(l)) != null ? i : 0) + 1;
      return u > s ? !0 : (e.set(l, u), c(), !1);
    }
    l.checkHasInfiniteLoops = m;
  },
  98,
);
