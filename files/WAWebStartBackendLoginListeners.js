__d(
  "WAWebStartBackendLoginListeners",
  [
    "WALogger",
    "WAWebBackendEventBus",
    "WAWebCoreActionsODS",
    "WAWebJestE2ELogUtils",
    "WAWebODS",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      (o("WAWebCoreActionsODS").logPageLoadError(),
        r("WAWebODS").incr("web.page_load.error.storage_init"),
        o("WAWebJestE2ELogUtils").maybeLogToJestE2eJSConsole(
          "logging out due to storage initialization error",
        ),
        o("WAWebBackendEventBus").BackendEventBus.triggerLogout());
    }
    function u() {
      o("WAWebBackendEventBus").BackendEventBus.onStorageInitializationError(
        async function () {
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "storage initialization error on logged-out route, triggering logout",
              ])),
          ),
            s());
        },
      );
    }
    ((l.handleStorageInitError = s), (l.setupStartBackendLoginListeners = u));
  },
  98,
);
