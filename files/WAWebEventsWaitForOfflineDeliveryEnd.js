__d(
  "WAWebEventsWaitForOfflineDeliveryEnd",
  [
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WAResolvable",
    "WAWebBackendEventBus",
    "WAWebEventsWaitForBbEvent",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 3e5;
    function c() {
      s == null &&
        ((s = r("WAWebEventsWaitForBbEvent")(
          o("WAWebBackendEventBus").BackendEventBus,
          "offline_delivery_end",
        )),
        o("WAWebBackendEventBus").BackendEventBus.on(
          "offline_delivery_state_reset",
          function () {
            s = r("WAWebEventsWaitForBbEvent")(
              o("WAWebBackendEventBus").BackendEventBus,
              "offline_delivery_end",
            );
          },
        ));
    }
    function d() {
      return o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd;
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (!o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd) {
            var n = t != null ? t : {},
              a = n.ignoreInit,
              i = a === void 0 ? !1 : a,
              l = new (o("WAResolvable").Resolvable)();
            if (i)
              o("WAWebBackendEventBus").BackendEventBus.onceOfflineDeliveryEnd(
                function () {
                  l.resolve();
                },
              );
            else {
              if (s == null)
                throw r("err")("waitForOfflineDeliveryEnd called before init");
              s.then(function () {
                l.resolve();
              });
            }
            try {
              yield o("WAPromiseTimeout").promiseTimeout(l.promise, u);
            } catch (t) {
              if (t instanceof o("WACustomError").TimeoutError) {
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[offline-resume] delivery promise timeout 5min",
                      ])),
                  )
                  .sendLogs("offline-resume-promise-unresolved", {
                    sampling: 0.01,
                  });
                return;
              }
              throw t;
            }
          }
        })),
        p.apply(this, arguments)
      );
    }
    ((l.initWaitForOfflineDeliveryEnd = c),
      (l.isOfflineDeliveryEnd = d),
      (l.waitForOfflineDeliveryEnd = m));
  },
  98,
);
