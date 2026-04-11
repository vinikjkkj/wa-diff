__d(
  "WAWebCrashLogWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumCrashApplicationState",
    "WAWebWamEnumCrashType",
    "WAWebWamEnumIphoneProcessNonGlobal",
    "WAWebWamEnumProductArea",
    "WAWebWamEnumSubfunnelType",
    "WAWebWamEnumTsSurface",
    "WAWebWamEnumUfadReportType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          CrashLog: [
            494,
            {
              activeSubfunnelId: [20, e.TYPES.STRING],
              activeSubfunnelType: [
                21,
                o("WAWebWamEnumSubfunnelType").SUBFUNNEL_TYPE,
              ],
              appContext: [32, e.TYPES.STRING],
              appContextBitfield: [33, e.TYPES.INTEGER],
              callTestBucketIdList: [34, e.TYPES.STRING],
              chatSessionId: [22, e.TYPES.STRING],
              crashApplicationState: [
                23,
                o("WAWebWamEnumCrashApplicationState").CRASH_APPLICATION_STATE,
              ],
              crashContext: [3, e.TYPES.STRING],
              crashCount: [5, e.TYPES.INTEGER],
              crashLogProductArea: [
                28,
                o("WAWebWamEnumProductArea").PRODUCT_AREA,
              ],
              crashLogSasEnabled: [36, e.TYPES.BOOLEAN],
              crashLogTimeSpentViewName: [27, e.TYPES.STRING],
              crashReason: [2, e.TYPES.STRING],
              crashTimeout: [24, e.TYPES.INTEGER],
              crashType: [6, o("WAWebWamEnumCrashType").CRASH_TYPE],
              iphoneProcessNonGlobal: [
                30,
                o("WAWebWamEnumIphoneProcessNonGlobal")
                  .IPHONE_PROCESS_NON_GLOBAL,
              ],
              iphoneTimeSpentSurfaceId: [
                26,
                o("WAWebWamEnumTsSurface").TS_SURFACE,
              ],
              lowPowerModeEnabled: [31, e.TYPES.BOOLEAN],
              peripheralConnected: [19, e.TYPES.STRING],
              processIdentifier: [18, e.TYPES.INTEGER],
              runningTasks: [16, e.TYPES.STRING],
              traceIdInt: [35, e.TYPES.INTEGER],
              ufadReportType: [
                29,
                o("WAWebWamEnumUfadReportType").UFAD_REPORT_TYPE,
              ],
              unifiedSessionId: [25, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { CrashLog: [] },
      );
    l.CrashLogWamEvent = s;
  },
  98,
);
