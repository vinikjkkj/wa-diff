__d(
  "CometRootDeferredShared",
  [
    "CometBootloaderErrorLoggerUtil",
    "CometBootloaderLoggerUtil",
    "CometOfflineTracing",
    "CometVirtualCursorStatus",
    "ErrorGuard",
    "FBLogger",
    "JSScheduler",
    "RunComet",
    "SimplePageLoadLogger",
    "WebStorageMonster",
    "cr:1201738",
    "cr:1332233",
    "cr:1516609",
    "cr:17080",
    "cr:1813330",
    "cr:22915",
    "cr:2718",
    "getErrorSafe",
    "gkx",
    "setCometDeferredCookies",
    "vc-tracker",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(t) {
      var a = t.blLoggingCavalryFields,
        i = t.deferredCookies,
        l = t.networkStatusToast,
        u = l === void 0 ? n("cr:17080") : l;
      if (
        ((s || (s = r("ErrorGuard"))).applyWithGuard(
          function () {
            return o("CometBootloaderLoggerUtil").initLogging(a);
          },
          null,
          [],
        ),
        s.applyWithGuard(
          function () {
            return o("CometBootloaderErrorLoggerUtil").initLogging(a);
          },
          null,
          [],
        ),
        s.applyWithGuard(
          function () {
            return o("CometVirtualCursorStatus").initLogging();
          },
          null,
          [],
        ),
        u != null &&
          !r("gkx")("11394") &&
          (s || (s = r("ErrorGuard"))).applyWithGuard(
            function () {
              return u.subscribe();
            },
            null,
            [],
          ),
        s.applyWithGuard(
          function () {
            return o("CometOfflineTracing").initialize();
          },
          null,
          [],
        ),
        s.applyWithGuard(
          function () {
            return o("SimplePageLoadLogger").logPageNavigationType();
          },
          null,
          [],
        ),
        (e || (e = o("JSScheduler"))).scheduleSpeculativeCallback(function () {
          r("WebStorageMonster").schedule();
        }),
        n("cr:1201738") &&
          r("vc-tracker").VisualCompletionTraceObserver.subscribe(function (e) {
            e.interactionType === "INITIAL_LOAD" &&
              n("cr:1201738")
                .init("comet.idle")
                .catch(function (e) {
                  r("FBLogger")("comet_infra")
                    .catching(r("getErrorSafe")(e))
                    .warn("Failed to initialize JsSelfProfilerIdleTraceRunner");
                });
          }),
        o("setCometDeferredCookies").setCometDeferredCookies(i),
        n("cr:1332233") &&
          (s || (s = r("ErrorGuard"))).applyWithGuard(
            function () {
              return n("cr:1332233")();
            },
            null,
            [],
          ),
        n("cr:1516609") != null &&
          (s || (s = r("ErrorGuard"))).applyWithGuard(
            function () {
              return n("cr:1516609").initSignalCollection();
            },
            null,
            [],
          ),
        n("cr:1813330") &&
          (s || (s = r("ErrorGuard"))).applyWithGuard(
            function () {
              return n("cr:1813330").init();
            },
            null,
            [],
          ),
        n("cr:2718") &&
          (s || (s = r("ErrorGuard"))).applyWithGuard(
            function () {
              return n("cr:2718").init();
            },
            null,
            [],
          ),
        n("cr:22915"))
      )
        var c = o("RunComet").onAfterLoad(function () {
          (s || (s = r("ErrorGuard"))).applyWithGuard(
            function () {
              (n("cr:22915") == null || n("cr:22915").startRSTFromMainThread(),
                c.remove());
            },
            null,
            [],
          );
        });
    }
    l.initDeferred = u;
  },
  98,
);
