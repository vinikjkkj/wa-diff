__d(
  "WAWebMainWrapper",
  [
    "FBLogger",
    "WALogger",
    "WAWebABProps",
    "WAWebBackendWorkerClient",
    "WAWebEmojiAssetLoader",
    "WAWebEmojiSetup",
    "WAWebExecApiCmd",
    "WAWebFeatureDetectionSwSupport",
    "WAWebKaleidoscopeWasmFeatureSupport",
    "WAWebMain.react",
    "WAWebMediaWorkerProxy",
    "WAWebNoop",
    "WAWebNotificationBackend",
    "WAWebPrefetchLoadables",
    "WAWebProfilePicThumbCollection",
    "WAWebSWBus",
    "WAWebSWBusActions",
    "WAWebUserPrefsGeneral",
    "WAWebWamLoginReporter",
    "cr:13598",
    "cr:37102",
    "cr:8432",
    "cr:8752",
    "cr:8753",
    "getErrorSafe",
    "gkx",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      if (!r("gkx")("26258")) {
        window.Store = n("cr:8753");
        try {
          ((window.Debug = Object.assign(n("cr:8752"), window.Debug)),
            n("cr:8752") == null || n("cr:8752").initialize());
        } catch (t) {
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Failed to initialize WAWebDebug",
              ])),
          );
        }
      }
      (o("WAWebWamLoginReporter").initialize(),
        r("WAWebFeatureDetectionSwSupport").supported &&
          o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.on(
            "change:tag",
            function (e) {
              var t = navigator.serviceWorker;
              t != null &&
                t.controller &&
                !e.tag &&
                r("WAWebSWBus")
                  .request(t.controller, r("WAWebSWBusActions").REMOVE_PP, e.id)
                  .catch(r("WAWebNoop"));
            },
          ),
        o("WAWebUserPrefsGeneral").initDailyStatsStartTime(),
        r("WAWebEmojiSetup")(
          o("WAWebEmojiAssetLoader").getEmojiTypeFromPlatform(t),
        ),
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_disable_prefetch_loadables",
        ) || r("WAWebPrefetchLoadables")(),
        o("WAWebABProps").getABPropConfigValue(
          "web_use_kaleidoscope_media_check_enabled",
        ) &&
          o("WAWebKaleidoscopeWasmFeatureSupport")
            .checkKaleidoscopeWasmFeatureSupport()
            .then(function (e) {
              e &&
                o("WAWebMediaWorkerProxy").prewarmMediaWasmWorker(
                  "kaleidoscopeClassify",
                );
            }),
        o("WAWebBackendWorkerClient").startBackendWorker(),
        u(),
        c());
      var a = n("WAWebMain.react");
      return {
        MainComponent: a.MainComponent,
        hasPendingActions: a.hasPendingActions,
        notificationBackend: n("WAWebNotificationBackend"),
        execApiCmd: r("WAWebExecApiCmd"),
      };
    }
    function u() {
      if (!(n("cr:13598") == null || !r("justknobx")._("4085"))) {
        var e = r("justknobx")._("3988");
        window.setTimeout(function () {
          try {
            (n("cr:37102") == null || n("cr:37102").run(),
              n("cr:13598") == null || n("cr:13598").init("wa.idle"));
          } catch (e) {
            r("FBLogger")("JSSelfProfiler")
              .catching(r("getErrorSafe")(e))
              .warn("failed to initialize JSSP idle trace runner");
          }
        }, e);
      }
    }
    function c() {
      if (n("cr:8432") != null)
        try {
          n("cr:8432").initDataTrackingInCrashReports();
        } catch (e) {
          r("FBLogger")("log-for-crash")
            .catching(r("getErrorSafe")(e))
            .warn(
              "failed to initialize WA web crash diagnostics data tracking",
            );
        }
    }
    l.default = s;
  },
  98,
);
