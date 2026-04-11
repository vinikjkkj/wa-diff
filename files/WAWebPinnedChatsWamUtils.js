__d(
  "WAWebPinnedChatsWamUtils",
  [
    "WAWebPinnedChatsMaxAlertWamEvent",
    "WAWebWamEnumPinnedChatsPremiumStatusType",
    "WAWebWamEnumPremiumStatusType",
    "cr:12224",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return n("cr:12224") != null && n("cr:12224").isPinnedChatsBenefitActive()
        ? o("WAWebWamEnumPinnedChatsPremiumStatusType")
            .PINNED_CHATS_PREMIUM_STATUS_TYPE.ACTIVE
        : n("cr:12224") != null && n("cr:12224").isPinnedChatsEnabled()
          ? o("WAWebWamEnumPinnedChatsPremiumStatusType")
              .PINNED_CHATS_PREMIUM_STATUS_TYPE.ENABLED
          : o("WAWebWamEnumPinnedChatsPremiumStatusType")
              .PINNED_CHATS_PREMIUM_STATUS_TYPE.DISABLED;
    }
    function s() {
      var e = (function () {
        return n("cr:12224") != null &&
          n("cr:12224").isPinnedChatsBenefitActive()
          ? o("WAWebWamEnumPremiumStatusType").PREMIUM_STATUS_TYPE.ACTIVE
          : n("cr:12224") != null && n("cr:12224").isPinnedChatsEnabled()
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
