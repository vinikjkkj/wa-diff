__d(
  "combineLatestWith",
  ["relay-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return o("relay-runtime").Observable.create(function (e) {
        var n = new Set(t),
          r = new Set(t),
          o = t.map(function () {}),
          a = t.map(function (t, a) {
            return t.subscribe({
              complete: function () {
                (r.delete(t), r.size === 0 && e.complete());
              },
              error: e.error,
              next: function (i) {
                ((o[a] = i), n.delete(t), n.size === 0 && e.next(o));
              },
            });
          });
        return function () {
          a.forEach(function (e) {
            return e.unsubscribe();
          });
        };
      });
    }
    l.default = e;
  },
  98,
);
