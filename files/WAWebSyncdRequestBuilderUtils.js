__d(
  "WAWebSyncdRequestBuilderUtils",
  ["WAWebKmpKotlinUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return c(e.reverse(), function (e) {
        return e.index;
      }).reverse();
    }
    function s(e) {
      return o("WAWebKmpKotlinUtils").asKtList(
        u(o("WAWebKmpKotlinUtils").asArray(e)),
      );
    }
    function u(e) {
      return c(e.slice().reverse(), function (e) {
        return e.encodedIndex;
      }).reverse();
    }
    function c(e, t) {
      var n = new Set();
      return e.filter(function (e) {
        var r = t(e);
        return n.has(r) ? !1 : (n.add(r), !0);
      });
    }
    ((l.compactPatch = e),
      (l.compactKmpPatch = s),
      (l.compactKmpPatchArray = u));
  },
  98,
);
