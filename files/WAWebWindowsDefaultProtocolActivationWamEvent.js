__d(
  "WAWebWindowsDefaultProtocolActivationWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumDefaultProtocolResultType",
    "WAWebWamEnumDefaultProtocolSchemeType",
    "WAWebWamEnumDefaultProtocolTargetType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        WindowsDefaultProtocolActivation: [
          8504,
          {
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
            tsTimestampMs: [4, o("WAWebWamCodegenUtils").TYPES.INTEGER],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { WindowsDefaultProtocolActivation: [] },
    );
    l.WindowsDefaultProtocolActivationWamEvent = e;
  },
  98,
);
