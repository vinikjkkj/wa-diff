__d(
  "WAWebPinnedChatsMaxAlertWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumPremiumStatusType"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        PinnedChatsMaxAlert: [
          7606,
          {
            addToListSelected: [1, o("WAWebWamCodegenUtils").TYPES.BOOLEAN],
            premiumStatus: [
              2,
              o("WAWebWamEnumPremiumStatusType").PREMIUM_STATUS_TYPE,
            ],
            subscribeSelected: [3, o("WAWebWamCodegenUtils").TYPES.BOOLEAN],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { PinnedChatsMaxAlert: [] },
    );
    l.PinnedChatsMaxAlertWamEvent = e;
  },
  98,
);
