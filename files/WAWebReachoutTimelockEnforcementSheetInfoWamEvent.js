__d(
  "WAWebReachoutTimelockEnforcementSheetInfoWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumReachoutTimelockAction",
    "WAWebWamEnumReachoutTimelockEventSource",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        ReachoutTimelockEnforcementSheetInfo: [
          5582,
          {
            reachoutTimelockAction: [
              3,
              o("WAWebWamEnumReachoutTimelockAction").REACHOUT_TIMELOCK_ACTION,
            ],
            reachoutTimelockEventSource: [
              4,
              o("WAWebWamEnumReachoutTimelockEventSource")
                .REACHOUT_TIMELOCK_EVENT_SOURCE,
            ],
            timeSinceEnforcemeentEndAndSheetSeenMs: [
              1,
              o("WAWebWamCodegenUtils").TYPES.TIMER,
            ],
            wasSheetSeenForFirstTime: [
              2,
              o("WAWebWamCodegenUtils").TYPES.BOOLEAN,
            ],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      {
        ReachoutTimelockEnforcementSheetInfo: [
          [
            [],
            [],
            [
              [
                function (e) {
                  return e.getValue("wasSheetSeenForFirstTime") !== !1;
                },
                "was_sheet_seen_for_first_time != False",
              ],
            ],
          ],
        ],
      },
    );
    l.ReachoutTimelockEnforcementSheetInfoWamEvent = e;
  },
  98,
);
