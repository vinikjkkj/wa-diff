__d(
  "WAWebTsExternalWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumTsExternalEventSource"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          TsExternal: [
            4574,
            {
              relativeTimestampMs: [1, e.TYPES.INTEGER],
              tsDuration: [2, e.TYPES.INTEGER],
              tsExternalEventSource: [
                3,
                o("WAWebWamEnumTsExternalEventSource").TS_EXTERNAL_EVENT_SOURCE,
              ],
              tsSessionId: [4, e.TYPES.INTEGER],
              tsTimestampMs: [5, e.TYPES.INTEGER],
              unifiedSessionId: [6, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { TsExternal: [] },
      );
    l.TsExternalWamEvent = s;
  },
  98,
);
