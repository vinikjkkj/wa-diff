__d(
  "RSTEventsRegisterUseCasesInWorker",
  [
    "RSTDebugConsoleInWorker",
    "RSTInjectAdsManagerAnnotationsWebWorker",
    "RSTTracesManagerInWorker",
    "RSTUpdateBackgroundInfoInWorker",
    "RSTUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      (o("RSTDebugConsoleInWorker").registerDebugConsole(),
        o("RSTTracesManagerInWorker").registerTracesManager(),
        o("RSTUpdateBackgroundInfoInWorker").registerUpdateBackgroundInfo(),
        o("RSTUtils").isInWebWorker() &&
          o(
            "RSTInjectAdsManagerAnnotationsWebWorker",
          ).registerAdsManagerAnnotationsInjector());
    }
    l.default = e;
  },
  98,
);
