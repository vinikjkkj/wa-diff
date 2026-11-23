__d(
  "WARequestKeysBatcher",
  ["WAResolvable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { delayMs: 50, maxSize: 100 };
    function s(t, n) {
      var r = n === void 0 ? e : n,
        a = r.delayMs,
        i = r.maxSize,
        l = null;
      function s(e) {
        return (l && l.args === e && (l = null), t(e));
      }
      return function (e) {
        var t = l;
        if (t != null) t.args.push(e);
        else {
          var n = [e],
            r = new (o("WAResolvable").Resolvable)(),
            u = r.promise.then(s),
            c = function () {
              return void r.resolve(n);
            },
            d = setTimeout(c, a);
          ((t = { args: n, batchPromise: u, run: c, timer: d }), (l = t));
        }
        var m = t,
          p = m.args,
          _ = m.batchPromise,
          f = p.length - 1;
        if (p.length >= i) {
          var g;
          (clearTimeout((g = l) == null ? void 0 : g.timer),
            t.run(),
            (l = null));
        }
        return _.then(function (e) {
          return e[f];
        });
      };
    }
    l.makeSimpleBatcher = s;
  },
  98,
);
