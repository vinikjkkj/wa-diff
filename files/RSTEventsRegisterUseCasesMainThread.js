__d(
  "RSTEventsRegisterUseCasesMainThread",
  [
    "RSTClearExternalLoggingDataStoreMainThread",
    "RSTClearInteractionDataMainThread",
    "RSTDebugConsoleMainThread",
    "RSTIncidentLoggingMainThread",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      (o("RSTDebugConsoleMainThread").registerDebugConsole(),
        o("RSTIncidentLoggingMainThread").registerIncidentLogging(),
        o("RSTClearInteractionDataMainThread").registerClearInteractionData(),
        o(
          "RSTClearExternalLoggingDataStoreMainThread",
        ).registerClearExternalLoggingData());
    }
    l.default = e;
  },
  98,
);
