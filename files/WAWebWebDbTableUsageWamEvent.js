__d(
  "WAWebWebDbTableUsageWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumWebScenarioCode",
    "WAWebWamEnumWebTableLogReasonCode",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          WebDbTableUsage: [
            5074,
            {
              offlineSessionId: [1, e.TYPES.STRING],
              webScenario: [
                2,
                o("WAWebWamEnumWebScenarioCode").WEB_SCENARIO_CODE,
              ],
              webTable: [3, e.TYPES.STRING],
              webTableLogReason: [
                4,
                o("WAWebWamEnumWebTableLogReasonCode")
                  .WEB_TABLE_LOG_REASON_CODE,
              ],
              webTableReadCount: [5, e.TYPES.INTEGER],
              webTableWriteCount: [6, e.TYPES.INTEGER],
            },
            [1, 1, 100],
            "regular",
          ],
        },
        { WebDbTableUsage: [] },
      );
    l.WebDbTableUsageWamEvent = s;
  },
  98,
);
