__d(
  "WAPromiseCallSync",
  ["Promise"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e;
    function l(t, r) {
      try {
        for (
          var o = arguments.length, a = new Array(o > 2 ? o - 2 : 0), i = 2;
          i < o;
          i++
        )
          a[i - 2] = arguments[i];
        return (e || (e = n("Promise"))).resolve(t.apply(r, a));
      } catch (t) {
        return (e || (e = n("Promise"))).reject(t);
      }
    }
    i.promiseCallSync = l;
  },
  66,
);
