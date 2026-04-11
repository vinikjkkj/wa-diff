__d(
  "WAWebWebcMemoryStatWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumWebcRuntimeEnvCode",
    "WAWebWamEnumWebcScenarioType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          WebcMemoryStat: [
            1188,
            {
              appContext: [26, e.TYPES.STRING],
              appContextBitfield: [27, e.TYPES.INTEGER],
              chatCollectionSize: [17, e.TYPES.INTEGER],
              chatDbSize: [18, e.TYPES.INTEGER],
              contactCollectionSize: [19, e.TYPES.INTEGER],
              contactDbSize: [20, e.TYPES.INTEGER],
              isForeground: [13, e.TYPES.BOOLEAN],
              jsHeapSizeLimit: [9, e.TYPES.INTEGER],
              messageCollectionSize: [24, e.TYPES.INTEGER],
              messageDbSize: [25, e.TYPES.INTEGER],
              peakUsedJsHeapSize: [14, e.TYPES.INTEGER],
              scenario: [
                15,
                o("WAWebWamEnumWebcScenarioType").WEBC_SCENARIO_TYPE,
              ],
              totalJsHeapSize: [10, e.TYPES.INTEGER],
              uptime: [6, e.TYPES.NUMBER],
              usedJsHeapSize: [11, e.TYPES.INTEGER],
              usedJsHeapSizeDelta: [16, e.TYPES.INTEGER],
              webcRuntimeEnv: [
                23,
                o("WAWebWamEnumWebcRuntimeEnvCode").WEBC_RUNTIME_ENV_CODE,
              ],
            },
            [1, 1, 10],
            "regular",
          ],
        },
        { WebcMemoryStat: [] },
      );
    l.WebcMemoryStatWamEvent = s;
  },
  98,
);
