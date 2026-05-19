__d(
  "WAWebWaffleCompanionStateLifecycleWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumWaffleLifecycleErrorActionType",
    "WAWebWamEnumWaffleLifecycleErrorCodeType",
    "WAWebWamEnumWaffleLifecycleLinkStateType",
    "WAWebWamEnumWaffleLifecycleTraceActionType",
    "WAWebWamEnumWaffleLifecycleTraceSourceType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          WaffleCompanionStateLifecycle: [
            8248,
            {
              waffleLifecycleElapsedMs: [1, e.TYPES.INTEGER],
              waffleLifecycleErrorAction: [
                2,
                o("WAWebWamEnumWaffleLifecycleErrorActionType")
                  .WAFFLE_LIFECYCLE_ERROR_ACTION_TYPE,
              ],
              waffleLifecycleErrorCode: [
                3,
                o("WAWebWamEnumWaffleLifecycleErrorCodeType")
                  .WAFFLE_LIFECYCLE_ERROR_CODE_TYPE,
              ],
              waffleLifecycleHasAccessToken: [4, e.TYPES.BOOLEAN],
              waffleLifecycleHasExistingRow: [5, e.TYPES.BOOLEAN],
              waffleLifecycleLinkState: [
                6,
                o("WAWebWamEnumWaffleLifecycleLinkStateType")
                  .WAFFLE_LIFECYCLE_LINK_STATE_TYPE,
              ],
              waffleLifecycleRetryCount: [7, e.TYPES.INTEGER],
              waffleLifecycleTraceAction: [
                8,
                o("WAWebWamEnumWaffleLifecycleTraceActionType")
                  .WAFFLE_LIFECYCLE_TRACE_ACTION_TYPE,
              ],
              waffleLifecycleTraceSource: [
                9,
                o("WAWebWamEnumWaffleLifecycleTraceSourceType")
                  .WAFFLE_LIFECYCLE_TRACE_SOURCE_TYPE,
              ],
              waffleLifecycleUnlinkType: [10, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { WaffleCompanionStateLifecycle: [] },
      );
    l.WaffleCompanionStateLifecycleWamEvent = s;
  },
  98,
);
