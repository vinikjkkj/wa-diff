__d(
  "WAWebWindowsLoginOfflineDelivery.v2645",
  [
    "WAComms",
    "WACustomError",
    "WALogger",
    "WAPromiseDelays",
    "WAPromiseTimeout",
    "WAResolvable",
    "WAWebBackendEventBus",
    "WAWebBackendEventBusTypes",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebWindowsBackgroundRun",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 5,
      d = 1e3,
      m = 1e4,
      p = !1,
      _ = null;
    function f() {
      p ||
        ((p = !0),
        o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd &&
          (_ = o("WAWebWindowsBackgroundRun").getWindowsLoginCount()),
        o("WAWebBackendEventBus").BackendEventBus.onOfflineDeliveryEnd(
          function () {
            _ = o("WAWebWindowsBackgroundRun").getWindowsLoginCount();
          },
        ));
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          t === void 0 && (t = 0);
          var n = function () {
            return (
              _ === o("WAWebWindowsBackgroundRun").getWindowsLoginCount() &&
              o("WAWebWindowsBackgroundRun").getWindowsLoginCount() >= t
            );
          };
          if (!n()) {
            var r = new (o("WAResolvable").Resolvable)(),
              a = function () {
                n() && r.resolve();
              };
            o("WAWebBackendEventBus").BackendEventBus.onOfflineDeliveryEnd(a);
            try {
              yield o("WAPromiseTimeout").promiseTimeout(
                r.promise,
                o("WAWebEventsWaitForOfflineDeliveryEnd")
                  .OFFLINE_RESUME_WAIT_TIMEOUT,
              );
            } catch (t) {
              if (!(t instanceof o("WACustomError").TimeoutError)) throw t;
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "WindowsLoginOfflineDelivery: offline delivery end not seen in time",
                  ])),
              );
            } finally {
              o("WAWebBackendEventBus").BackendEventBus.off(
                o("WAWebBackendEventBusTypes").BackendEvent
                  .OFFLINE_DELIVERY_END,
                a,
              );
            }
          }
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          e === void 0 && (e = c);
          var t = o("WAComms").getComms();
          if (!(t == null || !t.isSocketConnected())) {
            try {
              if (yield o("WAPromiseTimeout").promiseTimeout(t.sendPing(), m))
                return;
            } catch (e) {
              if (!(e instanceof o("WACustomError").TimeoutError)) throw e;
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "WindowsLoginOfflineDelivery: ping answer timed out",
                  ])),
              );
              return;
            }
            if (e <= 1) {
              o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "WindowsLoginOfflineDelivery: no ping answer",
                  ])),
              );
              return;
            }
            (yield o("WAPromiseDelays").delayMs(d), yield y(e - 1));
          }
        })),
        C.apply(this, arguments)
      );
    }
    ((l.startTrackingWindowsLoginOfflineDelivery_v2645 = f),
      (l.waitForLatestLoginOfflineDeliveryEnd_v2645 = g),
      (l.waitForPingAnswer_v2645 = y));
  },
  98,
);
