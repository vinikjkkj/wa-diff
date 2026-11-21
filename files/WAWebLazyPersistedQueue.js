__d(
  "WAWebLazyPersistedQueue",
  [
    "JSResourceForInteraction",
    "Promise",
    "QPLFlow",
    "WALogger",
    "WAWebBackendEventBus",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebJobsMigrationGating",
    "WAWebLazyLoadedRetriable",
    "WAWebPersistedQueueQpl",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = r("WAWebLazyLoadedRetriable")(function () {
        return r("JSResourceForInteraction")("WAWebPersistedQueues")
          .__setRef("WAWebLazyPersistedQueue")
          .load();
      }, "WAWebPersistedQueues"),
      c = 1e3,
      d = 6e4,
      m = null,
      p = 0,
      _ = !1,
      f = null,
      g = !1,
      h = !1;
    function y(e) {
      return o("QPLFlow").QplSubspan.wrapInSubspan(
        e,
        "wait_ready",
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return (
            !_ &&
              !o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd &&
              (yield o("QPLFlow").QplSubspan.wrapInSubspan(
                e,
                "wait_offline_delivery_end",
                v,
              )),
            (_ = !0),
            S(e)
          );
        }),
      );
    }
    function C(e) {
      return (
        g || ((g = !0), h && (m = null)),
        o("QPLFlow").QplSubspan.wrapInSubspan(e, "wait_ready", function () {
          return S(e);
        })
      );
    }
    function b() {
      return _ || o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd
        ? (s || (s = n("Promise"))).resolve()
        : v();
    }
    function v() {
      return (
        f == null &&
          (f = o("WAWebEventsWaitForOfflineDeliveryEnd")
            .waitForOfflineDeliveryEnd({ ignoreInit: !0 })
            .finally(function () {
              _ = !0;
            })),
        f
      );
    }
    function S(e) {
      if (m != null) return m;
      var t = R(e);
      return (
        (m = t),
        t.then(
          function () {
            p = 0;
          },
          function () {
            if (!g) {
              h = !0;
              return;
            }
            (p++,
              globalThis.setTimeout(
                function () {
                  m === t && (m = null);
                },
                Math.min(c * Math.pow(2, p - 1), d),
              ));
          },
        ),
        t
      );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("QPLFlow").QplSubspan.wrapInSubspan(
            e,
            "bundle_fetch",
            u,
          );
          return (
            yield o("QPLFlow").QplSubspan.wrapInSubspan(
              e,
              "db_open",
              function () {
                return t.ensurePersistedQueuesOpen(_);
              },
            ),
            t
          );
        })),
        L.apply(this, arguments)
      );
    }
    function E() {
      if (o("WAWebJobsMigrationGating").isPersistedQueuesEnabled()) {
        if (o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd) {
          k("immediate");
          return;
        }
        o("WAWebBackendEventBus").BackendEventBus.onceOfflineDeliveryEnd(
          function () {
            return k("offline_delivery_end");
          },
        );
      }
    }
    function k(t) {
      var n = o("QPLFlow").startQPLFlow(
        o("WAWebPersistedQueueQpl").PERSISTED_QUEUE_EVENT,
        {
          annotations: {
            bool: { isPQ: !0 },
            string: { operationType: "preload", preloadTrigger: t },
          },
          timeoutInMs: o("WAWebPersistedQueueQpl").PERSISTED_QUEUE_TIMEOUT_MS,
        },
      );
      o("QPLFlow")
        .endWith(n, function () {
          return y(n);
        })
        .catch(function (t) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[persisted-queues] preload failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .tags("messaging")
            .sendLogs("persisted-queues-preload-failed");
        });
    }
    ((l.whenPersistedQueuesReady = y),
      (l.whenPersistedQueuesReadyDuringResume = C),
      (l.whenPersistedQueuesMayOpen = b),
      (l.schedulePersistedQueuesPreload = E));
  },
  98,
);
