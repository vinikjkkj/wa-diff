__d(
  "acquireMAIBAPlatformSubscription",
  ["FBLogger", "RelayFBSubscription", "exponentialBackoff", "relay-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("RelayFBSubscription").addFBisms(
        o("relay-runtime").requestSubscription,
      ),
      s = new WeakMap();
    function u(t, n, o) {
      var a = s.get(t);
      a == null && ((a = new Map()), s.set(t, a));
      var i = a,
        l = i.get(n);
      if (l == null) {
        var u = {
            count: 0,
            disposable: { dispose: function () {} },
            resubscribe: r("exponentialBackoff")(function () {
              u.disposable = d();
            }),
          },
          c = function (t) {
            if (i.get(n) === u) {
              var e = r("FBLogger")("axp_maiba_platform");
              ((t != null ? e.catching(t) : e).warn(
                "Platform chat subscription for surface %s ended; resubscribing",
                n,
              ),
                u.disposable.dispose(),
                u.resubscribe());
            }
          },
          d = function () {
            return e(
              t,
              babelHelpers.extends({}, o, {
                onCompleted: function () {
                  (o.onCompleted == null || o.onCompleted(), c(null));
                },
                onError: function (t) {
                  (o.onError == null || o.onError(t), c(t));
                },
              }),
            );
          };
        (i.set(n, u), (u.disposable = d()), (l = u));
      }
      var m = l;
      m.count++;
      var p = !1;
      return function () {
        p ||
          ((p = !0),
          m.count--,
          !(m.count > 0) &&
            (i.get(n) === m && i.delete(n),
            m.resubscribe.reset(),
            m.disposable.dispose()));
      };
    }
    l.default = u;
  },
  98,
);
