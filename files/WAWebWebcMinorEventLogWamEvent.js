__d(
  "WAWebWebcMinorEventLogWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumLogType"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          WebcMinorEventLog: [
            5440,
            {
              additionalDebugContext: [1, e.TYPES.STRING],
              logContext: [2, e.TYPES.STRING],
              logCount: [3, e.TYPES.INTEGER],
              logReason: [4, e.TYPES.STRING],
              logType: [5, o("WAWebWamEnumLogType").LOG_TYPE],
            },
            [1, 1, 100],
            "regular",
          ],
        },
        { WebcMinorEventLog: [] },
      );
    l.WebcMinorEventLogWamEvent = s;
  },
  98,
);
