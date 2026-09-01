__d(
  "WAWebSyncdRequestBuilderUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return l(e.reverse(), function (e) {
        return e.index;
      }).reverse();
    }
    function l(e, t) {
      var n = new Set();
      return e.filter(function (e) {
        var r = t(e);
        return n.has(r) ? !1 : (n.add(r), !0);
      });
    }
    i.compactPatch = e;
  },
  66,
);
