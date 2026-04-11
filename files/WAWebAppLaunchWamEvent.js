__d(
  "WAWebAppLaunchWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumAppLaunchDestinationType",
    "WAWebWamEnumAppLaunchType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          AppLaunch: [
            1094,
            {
              appContext: [22, e.TYPES.STRING],
              appContextBitfield: [23, e.TYPES.INTEGER],
              appLaunchCpuT: [2, e.TYPES.TIMER],
              appLaunchDestination: [
                7,
                o("WAWebWamEnumAppLaunchDestinationType")
                  .APP_LAUNCH_DESTINATION_TYPE,
              ],
              appLaunchMainPreT: [3, e.TYPES.TIMER],
              appLaunchMainRunT: [4, e.TYPES.TIMER],
              appLaunchT: [1, e.TYPES.TIMER],
              appLaunchTypeT: [
                5,
                o("WAWebWamEnumAppLaunchType").APP_LAUNCH_TYPE,
              ],
              dbBgThreadReadsDurationT: [17, e.TYPES.TIMER],
              dbBgThreadWritesDurationT: [18, e.TYPES.TIMER],
              dbMainThreadCount: [10, e.TYPES.INTEGER],
              dbMainThreadReadsDurationT: [19, e.TYPES.TIMER],
              dbMainThreadWritesDurationT: [20, e.TYPES.TIMER],
              dbReadsCount: [8, e.TYPES.INTEGER],
              dbWritesCount: [9, e.TYPES.INTEGER],
              lowPowerModeEnabled: [12, e.TYPES.BOOLEAN],
              peripheralConnected: [16, e.TYPES.STRING],
              processIdentifier: [15, e.TYPES.INTEGER],
              traceIdInt: [24, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { AppLaunch: [] },
      );
    l.AppLaunchWamEvent = s;
  },
  98,
);
