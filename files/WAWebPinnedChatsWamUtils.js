__d(
  "WAWebPinnedChatsWamUtils",
  [
    "WAWebAuraGating",
    "WAWebPinnedChatsMaxAlertWamEvent",
    "WAWebWamEnumPinnedChatsPremiumStatusType",
    "WAWebWamEnumPremiumStatusType",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return r("WAWebAuraGating").isPinnedChatsBenefitActive()
        ? o("WAWebWamEnumPinnedChatsPremiumStatusType")
            .PINNED_CHATS_PREMIUM_STATUS_TYPE.ACTIVE
        : r("WAWebAuraGating").isPinnedChatsEnabled()
          ? o("WAWebWamEnumPinnedChatsPremiumStatusType")
              .PINNED_CHATS_PREMIUM_STATUS_TYPE.ENABLED
          : o("WAWebWamEnumPinnedChatsPremiumStatusType")
              .PINNED_CHATS_PREMIUM_STATUS_TYPE.DISABLED;
    }
    function s() {
      var e = (function () {
        return r("WAWebAuraGating").isPinnedChatsBenefitActive()
          ? o("WAWebWamEnumPremiumStatusType").PREMIUM_STATUS_TYPE.ACTIVE
          : r("WAWebAuraGating").isPinnedChatsEnabled()
            ? o("WAWebWamEnumPremiumStatusType").PREMIUM_STATUS_TYPE.ENABLED
            : o("WAWebWamEnumPremiumStatusType").PREMIUM_STATUS_TYPE.DISABLED;
      })();
      new (o("WAWebPinnedChatsMaxAlertWamEvent").PinnedChatsMaxAlertWamEvent)({
        premiumStatus: e,
      }).commit();
    }
    ((l.getPinnedChatsPremiumStatus = e), (l.logPinnedChatsMaxAlert = s));
  },
  98,
);
