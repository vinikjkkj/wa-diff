__d(
  "WAMemoizeCache",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = [];
    function l() {
      e.forEach(function (e) {
        return e.clear();
      });
    }
    function s() {
      var t = new Map();
      return (e.push(t), t);
    }
    function u(e, t) {
      var n;
      return function () {
        n || (n = s());
        var r = t.apply(void 0, arguments),
          o = n.get(r);
        return (
          o == null && ((o = e.apply(void 0, arguments)), n.set(r, o)),
          o
        );
      };
    }
    ((i.clearAllMemoizeCache = l),
      (i.MemoizeCache = s),
      (i.memoizeWithArgs = u));
  },
  66,
);
