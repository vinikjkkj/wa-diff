__d(
  "WAWebAddressingModeMismatchWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumAddressingMode",
    "WAWebWamEnumIqResponseType",
    "WAWebWamEnumMismatchOriginType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        AddressingModeMismatch: [
          4750,
          {
            iqResponse: [1, o("WAWebWamEnumIqResponseType").IQ_RESPONSE_TYPE],
            localAddressingMode: [
              2,
              o("WAWebWamEnumAddressingMode").ADDRESSING_MODE,
            ],
            mismatchOrigin: [
              6,
              o("WAWebWamEnumMismatchOriginType").MISMATCH_ORIGIN_TYPE,
            ],
            notificationTag: [3, o("WAWebWamCodegenUtils").TYPES.STRING],
            serverAddressingMode: [
              5,
              o("WAWebWamEnumAddressingMode").ADDRESSING_MODE,
            ],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { AddressingModeMismatch: [] },
    );
    l.AddressingModeMismatchWamEvent = e;
  },
  98,
);
