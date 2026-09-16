__d(
  "WAWebLazyPersistedQueue",
  [
    "JSResourceForInteraction",
    "QPLFlow",
    "WALogger",
    "WAWebJobsMigrationGating",
    "WAWebLazyLoadedRetriable",
    "WAWebPersistedQueueQpl",
    "asyncToGeneratorRuntime",
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
      u = null;
    function c(e) {
      return o("QPLFlow").QplSubspan.wrapInSubspan(
        e,
        "wait_ready",
        function () {
          var t =
            u != null
              ? u
              : o("QPLFlow")
                  .QplSubspan.wrapInSubspan(e, "bundle_fetch", s)
                  .then(
                    (function () {
                      var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* (t) {
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
                        },
                      );
                      return function (e) {
                        return t.apply(this, arguments);
                      };
                    })(),
                  );
          return ((u = t), t);
        },
      );
    }
    function d() {
      if (o("WAWebJobsMigrationGating").isPersistedQueuesEnabled()) {
        var t = o("QPLFlow").startQPLFlow(
          o("WAWebPersistedQueueQpl").PERSISTED_QUEUE_EVENT,
          {
            annotations: {
              bool: { isPQ: !0 },
              string: { operationType: "preload" },
            },
            timeoutInMs: o("WAWebPersistedQueueQpl").PERSISTED_QUEUE_TIMEOUT_MS,
          },
        );
        o("QPLFlow")
          .endWith(t, function () {
            return c(t);
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
    }
    function m(e) {
      return {
        ack: function (n, r) {
          return c(n).then(function () {
            return e.ack(r);
          });
        },
        add: function (n, r) {
          return c(n).then(function () {
            return e.add(r);
          });
        },
        read: function (n, r) {
          return c(n).then(function () {
            return e.read(r);
          });
        },
        subscribe: function (n) {
          return e.subscribe(n);
        },
      };
    }
    ((l.whenPersistedQueuesReady = c),
      (l.preloadPersistedQueues = d),
      (l.lazyPersistedQueue = m));
  },
  98,
);
