__d(
  "WAWebVelocityAnimate",
  [
    "WAWebABProps",
    "WAWebThirdPartyMigrationGatingUtils",
    "WAWebWaapiAnimate",
    "asyncToGeneratorRuntime",
    "velocity-animate",
  ],
  function (t, n, r, o, a, i, l) {
    var e = { FINISH: "finish", STOP: "stop" },
      s = new Map();
    function u(e, t, n) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          for (
            var i = arguments.length, l = new Array(i > 3 ? i - 3 : 0), u = 3;
            u < i;
            u++
          )
            l[u - 3] = arguments[u];
          if (
            o(
              "WAWebThirdPartyMigrationGatingUtils",
            ).isVelocityAnimateMigrationEnabled()
          )
            return r("WAWebWaapiAnimate").apply(void 0, [t, n, a].concat(l));
          if (t) {
            if (typeof n == "string" && (n === e.FINISH || n === e.STOP))
              return r("velocity-animate").apply(void 0, [t, n, a].concat(l));
            d(t, function (e) {
              var t = s.get(e) || 0;
              s.set(e, t + 1);
            });
            var c = n,
              p = a;
            if (typeof a == "object" && typeof c == "object") {
              var _;
              typeof a.begin == "function" && (_ = a.begin);
              var f = function (t) {
                for (var e in c) {
                  var n = c[e];
                  Array.isArray(n) && o("velocity-animate").hook(t, e, n[1]);
                }
                _ != null && _(t);
              };
              o("WAWebABProps").getABPropConfigValue("web_memlab_fixes_3")
                ? (p = babelHelpers.extends({}, a, { begin: f }))
                : (a.begin = f);
            }
            var g = yield r("velocity-animate").apply(
              void 0,
              [t, n, p].concat(l),
            );
            return (
              d(g, function (e) {
                var t = (s.get(e) || 1) - 1;
                t === 0 ? (s.delete(e), m(e)) : s.set(e, t);
              }),
              g
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
        a = r("velocity-animate").Utilities.data(e),
        i = r("velocity-animate").State.delayedElements;
      Object.keys(i).forEach(function (t) {
        var n = i[t];
        t !== "count" && (n === e || !n) && delete i[t];
      });
      var l = (t = r("velocity-animate").State) == null ? void 0 : t.calls;
      if (l && Array.isArray(l))
        for (var s = 0; s < l.length; s++) {
          var u = l[s];
          if (u) {
            var c = u[0];
            if (Array.isArray(c))
              for (var d = 0; d < c.length; d++) {
                var m = c[d];
                if (m && m.element === e) {
                  l[s] = !1;
                  break;
                }
              }
          }
        }
      (a != null &&
        (n = a.velocity) != null &&
        n.tweensContainer &&
        (a.velocity.tweensContainer.element = null),
        o("WAWebABProps").getABPropConfigValue("web_memlab_fixes_4")
          ? r("velocity-animate").Utilities.removeData(e)
          : r("velocity-animate").Utilities.removeData(e, [
              "fxqueue",
              "velocity",
            ]));
    }
    l.default = u;
  },
  98,
);
