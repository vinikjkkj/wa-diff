__d(
  "MAWDataSyncQueue",
  ["WALogger", "getErrorSafe", "throttle"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 2e3,
      c = 3e3,
      d = function () {
        return ((_ = !1), y({ isUnloading: !0 }));
      },
      m = [],
      p = [],
      _ = !1,
      f = [],
      g = function () {
        var e,
          t = m.splice(0, m.length);
        (e = p).push.apply(e, t);
      },
      h = function (n) {
        var t = p.splice(0, u);
        if (t.length !== 0)
          return Promise.all(
            f.map(function (r, a) {
              return r(t, n).catch(function (t) {
                o("WALogger").ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Unhandled exception caught in middleware ",
                      " sync: ",
                      "",
                    ])),
                  a,
                  t,
                );
              });
            }),
          ).then(function () {
            return h(n);
          });
      },
      y = async function (t) {
        if (!_) {
          ((_ = !0), g());
          try {
            await h(t);
          } catch (t) {
            var e,
              n = r("getErrorSafe")(t);
            throw (
              o("WALogger").ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[MAWIndexedDbMiddleware] error handling queue batch: ",
                    "",
                  ])),
                (e = n == null ? void 0 : n.message) != null ? e : n.toString(),
              ),
              t
            );
          } finally {
            ((_ = !1), m.length > 0 && C());
          }
        }
      },
      C = r("throttle")(y, c),
      b = function (t, n) {
        (m.push({ type: t, value: n }), C());
      },
      v = function (t) {
        f.some(function (e) {
          return e === t;
        }) || f.push(t);
      },
      S = function () {
        f = [];
      },
      R = function () {
        ((m = []), (p = []));
      };
    ((l.forceFlushDataSyncQueue = d),
      (l.addSyncItem = b),
      (l.registerDataSyncCallback = v),
      (l.clearDataSyncCallbacks = S),
      (l.clearDataSyncQueue_FOR_TESTING_ONLY = R));
  },
  98,
);
