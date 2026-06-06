__d(
  "WAWebStartBackendLoginListeners",
  [
    "WALogger",
    "WAWebBackendEventBus",
    "WAWebCoreActionsODS",
    "WAWebJestE2ELogUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      (o("WAWebCoreActionsODS").logPageLoadErrorStorageInit(),
        o("WAWebJestE2ELogUtils").maybeLogToJestE2eJSConsole(
          "logging out due to storage initialization error",
        ),
        o("WAWebBackendEventBus").BackendEventBus.triggerLogout());
    }
    function u() {
      o("WAWebBackendEventBus").BackendEventBus.onStorageInitializationError(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "storage initialization error on logged-out route, triggering logout",
              ])),
          ),
            s());
        }),
      );
    }
    ((l.handleStorageInitError = s), (l.setupStartBackendLoginListeners = u));
  },
  98,
);
