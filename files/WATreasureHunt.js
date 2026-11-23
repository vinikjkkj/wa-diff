__d(
  "WATreasureHunt",
  ["Promise", "WAResultOrError"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new (e || (e = n("Promise")))(function () {});
    function u(t, r, a, i) {
      var l = 0,
        u = 0,
        c = !1,
        d = null,
        m = null;
      return p();
      function p() {
        var o = l++,
          i = t(o).then(_, f);
        if (l < r) {
          var s = new (e || (e = n("Promise")))(function (e) {
            ((d = setTimeout(e, a)), (m = e));
          }).then(p);
          return e.race([i, s]);
        } else return i;
      }
      function _(e) {
        return c
          ? (i == null || i(e), s)
          : ((c = !0),
            d != null && (clearTimeout(d), (d = null)),
            o("WAResultOrError").makeResult(e));
      }
      function f() {
        if (c) return s;
        if ((u++, u === r))
          return (e || (e = n("Promise"))).resolve(
            o("WAResultOrError").makeError("max-hunters"),
          );
        var t = m;
        return (
          t != null &&
            u === l &&
            (d != null && (clearTimeout(d), (d = null)), t()),
          s
        );
      }
    }
    l.treasureHunt = u;
  },
  98,
);
