__d(
  "WAWebLazyPersistedQueue",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebJobsMigrationGating",
    "WAWebLazyLoadedRetriable",
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
    function c() {
      return (
        u == null &&
          (u = s().then(
            (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  return (yield e.ensurePersistedQueuesOpen(), e);
                },
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
          )),
        u
      );
    }
    function d() {
      o("WAWebJobsMigrationGating").isPersistedQueuesEnabled() &&
        c().catch(function (t) {
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
    function m(e) {
      return {
        ack: function (n) {
          return c().then(function () {
            return e.ack(n);
          });
        },
        add: function (n) {
          return c().then(function () {
            return e.add(n);
          });
        },
        read: function (n) {
          return c().then(function () {
            return e.read(n);
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
