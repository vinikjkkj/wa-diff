__d(
  "LSDatabaseSingleton",
  [
    "CurrentUser",
    "ExecutionEnvironment",
    "FBLogger",
    "GetLsDatabaseDeferredForDisplay",
    "LSPersistedDbGating",
    "LSPlatformLsInitLog",
    "MessengerBroadcastLogHistoryFactory",
    "MessengerLogHistory",
    "Promise",
    "QPLUserFlow",
    "asyncToGeneratorRuntime",
    "cr:1005",
    "cr:10191",
    "cr:1027",
    "cr:3411",
    "getErrorSafe",
    "gkx",
    "ifRequireable",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    (o("LSPersistedDbGating").anyTablesPersisted &&
      o("MessengerLogHistory").setLogHistoryFactory(
        new (r("MessengerBroadcastLogHistoryFactory"))(),
      ),
      n("cr:1027") == null || n("cr:1027").overwriteSamplingRate(),
      n("cr:10191") == null || n("cr:10191").overwriteSamplingRate(),
      o("LSPlatformLsInitLog").start());
    var u = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = r("gkx")("26383");
          (o("LSPlatformLsInitLog").addPoint("get_ls_database_start", {
            bool: {
              is_pdb: o("LSPersistedDbGating").anyTablesPersisted,
              loadDbEarlierEnabled: e,
            },
          }),
            r("ifRequireable")("InteractionTracing", function (t) {
              t.getPendingInteractions().forEach(function (t) {
                t.addAnnotationBoolean("loadDbEarlierEnabled", e);
              });
            }));
          var t = yield n("cr:1005") != null
            ? n("cr:1005").get()
            : o("GetLsDatabaseDeferredForDisplay").get();
          if (
            (o("LSPlatformLsInitLog").addPoint("get_ls_database_end"),
            o("LSPlatformLsInitLog").addPoint("db_created"),
            r("CurrentUser").isWorkUser() &&
              r("QPLUserFlow").addPoint(
                r("qpl")._(1036588047, "310"),
                "db_created",
              ),
            n("cr:3411") !== null)
          )
            try {
              n("cr:3411").registerDb(t);
            } catch (e) {
              r("FBLogger")("messenger_browser_clients")
                .catching(r("getErrorSafe")(e))
                .mustfix("LSPlatformDevtools failed to register db.");
            }
          return t;
        });
        return function () {
          return e.apply(this, arguments);
        };
      })(),
      c = (s || (s = r("ExecutionEnvironment"))).isInBrowser
        ? u().then(function (e) {
            return ((c = e), e);
          })
        : new (e || (e = n("Promise")))(function () {
            r("FBLogger")("messenger_browser_clients").warn(
              "ExecutionEnvironment.isInBrowser returned false, returning never ending promise",
            );
          }),
      d = function () {
        return c;
      },
      m = (e || (e = n("Promise"))).resolve(c);
    ((l.getLSDatabaseSingletonPromiseOrValue = d), (l.LSDatabaseSingleton = m));
  },
  98,
);
