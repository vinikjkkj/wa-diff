__d(
  "WAWebPrekeysDepletionWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumMessageType",
    "WAWebWamEnumPrekeysFetchContext",
    "WAWebWamEnumSizeBucket",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        PrekeysDepletion: [
          3014,
          {
            dedupKey: [4, o("WAWebWamCodegenUtils").TYPES.INTEGER],
            deviceSizeBucket: [3, o("WAWebWamEnumSizeBucket").SIZE_BUCKET],
            messageType: [2, o("WAWebWamEnumMessageType").MESSAGE_TYPE],
            prekeysFetchReason: [
              1,
              o("WAWebWamEnumPrekeysFetchContext").PREKEYS_FETCH_CONTEXT,
            ],
          },
          [1, 20, 20],
          "regular",
        ],
      },
      { PrekeysDepletion: [] },
    );
    l.PrekeysDepletionWamEvent = e;
  },
  98,
);
