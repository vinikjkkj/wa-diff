__d(
  "WAWebWindowsDefaultProtocolActivationWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumDefaultProtocolResultType",
    "WAWebWamEnumDefaultProtocolSchemeType",
    "WAWebWamEnumDefaultProtocolTargetType",
    "WAWebWamEnumWindowsActivationAppStateType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          WindowsDefaultProtocolActivation: [
            8504,
            {
              dedupKey: [5, e.TYPES.INTEGER],
              defaultProtocolResult: [
                1,
                o("WAWebWamEnumDefaultProtocolResultType")
                  .DEFAULT_PROTOCOL_RESULT_TYPE,
              ],
              defaultProtocolScheme: [
                2,
                o("WAWebWamEnumDefaultProtocolSchemeType")
                  .DEFAULT_PROTOCOL_SCHEME_TYPE,
              ],
              defaultProtocolTarget: [
                3,
                o("WAWebWamEnumDefaultProtocolTargetType")
                  .DEFAULT_PROTOCOL_TARGET_TYPE,
              ],
              tsTimestampMs: [4, e.TYPES.INTEGER],
              windowsActivationAppState: [
                6,
                o("WAWebWamEnumWindowsActivationAppStateType")
                  .WINDOWS_ACTIVATION_APP_STATE_TYPE,
              ],
              windowsActivationSource: [7, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { WindowsDefaultProtocolActivation: [] },
      );
    l.WindowsDefaultProtocolActivationWamEvent = s;
  },
  98,
);
