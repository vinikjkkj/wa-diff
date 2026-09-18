__d(
  "WAWebPrivacyTipActionWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumPrivacyTipActionType"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        PrivacyTipAction: [
          4794,
          {
            dedupKey: [2, o("WAWebWamCodegenUtils").TYPES.INTEGER],
            privacyTipActionType: [
              1,
              o("WAWebWamEnumPrivacyTipActionType").PRIVACY_TIP_ACTION_TYPE,
            ],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { PrivacyTipAction: [] },
    );
    l.PrivacyTipActionWamEvent = e;
  },
  98,
);
