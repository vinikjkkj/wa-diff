__d(
  "WAWebVoipBackgroundWarmConditions",
  [
    "Promise",
    "WAWebBackendEventBus",
    "WAWebBackendEventBusTypes",
    "WAWebNetworkType",
    "WAWebPonyfillsIdleCallback",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 3e4,
      u = new Set(["2g", "slow-2g"]);
    function c() {
      return o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd
        ? (e || (e = n("Promise"))).resolve()
        : new (e || (e = n("Promise")))(function (e) {
            o("WAWebBackendEventBus").BackendEventBus.onceOfflineDeliveryEnd(
              function () {
                return e();
              },
            );
          });
    }
    function d() {
      var e = !1,
        t = function () {
          e = !0;
        };
      return (
        o("WAWebBackendEventBus").BackendEventBus.onOfflineDeliveryStateReset(
          t,
        ),
        {
          didRestart: function () {
            return (
              e ||
              !o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd
            );
          },
          stop: function () {
            o("WAWebBackendEventBus").BackendEventBus.off(
              o("WAWebBackendEventBusTypes").BackendEvent
                .OFFLINE_DELIVERY_STATE_RESET,
              t,
            );
          },
        }
      );
    }
    function m(e) {
      return Date.now() - e <= s;
    }
    function p(t) {
      return new (e || (e = n("Promise")))(function (e) {
        var n = null,
          r =
            t == null
              ? null
              : self.setTimeout(function () {
                  (n != null &&
                    o("WAWebPonyfillsIdleCallback").cancelIdleCallback(n),
                    e());
                }, t);
        n = o("WAWebPonyfillsIdleCallback").requestIdleCallback(function () {
          (r != null && self.clearTimeout(r), e());
        });
      });
    }
    function _() {
      var e,
        t = navigator;
      return (
        ((e = t.connection) == null ? void 0 : e.saveData) === !0 ||
        u.has(o("WAWebNetworkType").getEffectiveNetworkType())
      );
    }
    ((l.waitForCurrentOfflineDeliveryEnd = c),
      (l.watchForOfflineDeliveryRestart = d),
      (l.didFireOnTime = m),
      (l.waitForIdleCallback = p),
      (l.isConstrainedNetwork = _));
  },
  98,
);
