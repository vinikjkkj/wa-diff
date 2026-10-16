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
      c = null;
    function d(e) {
      return o("QPLFlow").QplSubspan.wrapInSubspan(
        e,
        "wait_ready",
        function () {
          var t = c != null ? c : p(e);
          return ((c = t), t);
        },
      );
    }
    function m() {
      return c != null ||
        o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd
        ? (s || (s = n("Promise"))).resolve()
        : o("WAWebEventsWaitForOfflineDeliveryEnd").waitForOfflineDeliveryEnd({
            ignoreInit: !0,
          });
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd ||
            (yield o("QPLFlow").QplSubspan.wrapInSubspan(
              e,
              "wait_offline_delivery_end",
              function () {
                return o(
                  "WAWebEventsWaitForOfflineDeliveryEnd",
                ).waitForOfflineDeliveryEnd({ ignoreInit: !0 });
              },
            ));
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
                return t.ensurePersistedQueuesOpen();
              },
            ),
            t
          );
        })),
        _.apply(this, arguments)
      );
    }
    function f() {
      if (o("WAWebJobsMigrationGating").isPersistedQueuesEnabled()) {
        if (o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd) {
          g("immediate");
          return;
        }
        o("WAWebBackendEventBus").BackendEventBus.onceOfflineDeliveryEnd(
          function () {
            return g("offline_delivery_end");
          },
        );
      }
    }
    function g(t) {
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
          return d(n);
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
    function h(e) {
      return {
        ack: function (n, r) {
          return d(n).then(function () {
            return e.ack(r);
          });
        },
        add: function (n, r) {
          return d(n).then(function () {
            return e.add(r);
          });
        },
        read: function (n, r) {
          return d(n).then(function () {
            return e.read(r);
          });
        },
        subscribe: function (n) {
          return e.subscribe(n);
        },
      };
    }
    ((l.whenPersistedQueuesReady = d),
      (l.whenPersistedQueuesMayOpen = m),
      (l.schedulePersistedQueuesPreload = f),
      (l.lazyPersistedQueue = h));
  },
  98,
);
