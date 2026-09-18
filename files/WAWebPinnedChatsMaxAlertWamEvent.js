__d(
  "WAWebPinnedChatsMaxAlertWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumPremiumStatusType"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          PinnedChatsMaxAlert: [
            7606,
            {
              addToListSelected: [1, e.TYPES.BOOLEAN],
              dedupKey: [4, e.TYPES.INTEGER],
              premiumStatus: [
                2,
                o("WAWebWamEnumPremiumStatusType").PREMIUM_STATUS_TYPE,
              ],
              subscribeSelected: [3, e.TYPES.BOOLEAN],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { PinnedChatsMaxAlert: [] },
      );
    l.PinnedChatsMaxAlertWamEvent = s;
  },
  98,
);
