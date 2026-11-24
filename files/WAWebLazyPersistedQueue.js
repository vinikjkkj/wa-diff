__d(
  "WAWebLazyPersistedQueue",
  [
    "JSResourceForInteraction",
    "QPLFlow",
    "WALogger",
    "WAWebBackendEventBus",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebJobsMigrationGating",
    "WAWebLazyLoadedRetriable",
    "WAWebPersistedQueueQpl",
    "cr:22501",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("WAWebLazyLoadedRetriable")(function () {
        return r("JSResourceForInteraction")("WAWebPersistedQueues")
          .__setRef("WAWebLazyPersistedQueue")
          .load();
      }, "WAWebPersistedQueues"),
      u = 1e3,
      c = 6e4,
      d = null,
      m = 0,
      p = !1,
      _ = null,
      f = !1,
      g = !1;
    function h(e) {
      return o("QPLFlow").QplSubspan.wrapInSubspan(
        e,
        "wait_ready",
        async function () {
          return (
            !p &&
              !o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd &&
              (await o("QPLFlow").QplSubspan.wrapInSubspan(
                e,
                "wait_offline_delivery_end",
                b,
              )),
            (p = !0),
            v(e)
          );
        },
      );
    }
    function y(e) {
      return (
        f || ((f = !0), g && (d = null)),
        o("QPLFlow").QplSubspan.wrapInSubspan(e, "wait_ready", function () {
          return v(e);
        })
      );
    }
    function C() {
      return p || o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd
        ? Promise.resolve()
        : b();
    }
    function b() {
      return (
        _ == null &&
          (_ = o("WAWebEventsWaitForOfflineDeliveryEnd")
            .waitForOfflineDeliveryEnd({ ignoreInit: !0 })
            .finally(function () {
              p = !0;
            })),
        _
      );
    }
    function v(e) {
      if (d != null) return d;
      var t = S(e);
      return (
        (d = t),
        t.then(
          function () {
            m = 0;
          },
          function () {
            if (!f) {
              g = !0;
              return;
            }
            (m++,
              globalThis.setTimeout(
                function () {
                  d === t && (d = null);
                },
                Math.min(u * Math.pow(2, m - 1), c),
              ));
          },
        ),
        t
      );
    }
    async function S(e) {
      var t = await o("QPLFlow").QplSubspan.wrapInSubspan(e, "bundle_fetch", R);
      return (
        await o("QPLFlow").QplSubspan.wrapInSubspan(e, "db_open", function () {
          return t.ensurePersistedQueuesOpen(p);
        }),
        t
      );
    }
    function R() {
      return n("cr:22501") != null ? n("cr:22501").loadPersistedQueues() : s();
    }
    function L() {
      if (o("WAWebJobsMigrationGating").isPersistedQueuesEnabled()) {
        if (o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd) {
          E("immediate");
          return;
        }
        o("WAWebBackendEventBus").BackendEventBus.onceOfflineDeliveryEnd(
          function () {
            return E("offline_delivery_end");
          },
        );
      }
    }
    function E(t) {
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
          return h(n);
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
    ((l.whenPersistedQueuesReady = h),
      (l.whenPersistedQueuesReadyDuringResume = y),
      (l.whenPersistedQueuesMayOpen = C),
      (l.schedulePersistedQueuesPreload = L));
  },
  98,
);
