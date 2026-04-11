__d(
  "WAWebVelocityAnimate",
  ["asyncToGeneratorRuntime", "lodash", "velocity-animate"],
  function (t, n, r, o, a, i, l) {
    var e = { FINISH: "finish", STOP: "stop" },
      s = new Map();
    function u(e, t, n) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          if (t) {
            for (
              var i = arguments.length, l = new Array(i > 3 ? i - 3 : 0), u = 3;
              u < i;
              u++
            )
              l[u - 3] = arguments[u];
            if (typeof n == "string" && (n === e.FINISH || n === e.STOP))
              return r("velocity-animate").apply(void 0, [t, n, a].concat(l));
            d(t, function (e) {
              var t = s.get(e) || 0;
              s.set(e, t + 1);
            });
            var c = n;
            if (typeof a == "object" && typeof c == "object") {
              var p;
              (typeof a.begin == "function" && (p = a.begin),
                (a.begin = function (e) {
                  for (var t in c) {
                    var n = c[t];
                    Array.isArray(n) && o("velocity-animate").hook(e, t, n[1]);
                  }
                  p != null && p(e);
                }));
            }
            var _ = yield r("velocity-animate").apply(
              void 0,
              [t, n, a].concat(l),
            );
            return (
              d(_, function (e) {
                var t = (s.get(e) || 1) - 1;
                t === 0 ? (s.delete(e), m(e)) : s.set(e, t);
              }),
              _
            );
          }
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      Array.isArray(e)
        ? e.forEach(function (e) {
            t(e);
          })
        : t(e);
    }
    function m(e) {
      var t,
        n,
        o = r("velocity-animate").Utilities.data(e),
        a = r("velocity-animate").State.delayedElements;
      r("lodash").forOwn(a, function (t, n) {
        n !== "count" && (t === e || !t) && delete a[n];
      });
      var i = (t = r("velocity-animate").State) == null ? void 0 : t.calls;
      if (i && Array.isArray(i))
        for (var l = 0; l < i.length; l++) {
          var s = i[l];
          if (s) {
            var u = s[0];
            if (Array.isArray(u))
              for (var c = 0; c < u.length; c++) {
                var d = u[c];
                if (d && d.element === e) {
                  i[l] = !1;
                  break;
                }
              }
          }
        }
      (o != null &&
        (n = o.velocity) != null &&
        n.tweensContainer &&
        (o.velocity.tweensContainer.element = null),
        r("velocity-animate").Utilities.removeData(e, ["fxqueue", "velocity"]));
    }
    l.default = u;
  },
  98,
);
