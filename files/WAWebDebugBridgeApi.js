__d(
  "WAWebDebugBridgeApi",
  ["WAWebDownloadWebLogs", "WAWebLoggerDebugInfo", "vulture"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      createDownloadDataForMdWebLogs: function () {
        (r("vulture")("VoL30IRtG6U2NZ7cYOoqWT9Grso="),
          o("WAWebDownloadWebLogs").createDownloadDataForMdWebLogs());
      },
      getWebLogs: function () {
        return (
          r("vulture")("TdEQxEM-pMKqE8HaVWnAc5vmmO8="),
          o("WAWebDownloadWebLogs").getWebLogs()
        );
      },
      getDebugInfo: function (t) {
        return o("WAWebLoggerDebugInfo").getDebugInfo(t != null ? t : void 0);
      },
    };
    l.DebugBridgeApi = e;
  },
  98,
);
