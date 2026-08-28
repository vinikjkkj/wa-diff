__d(
  "isMessageMarketingWABARestricted",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e == null
        ? !1
        : e.marketingMessagesRestrictionStatus ===
            "COMMON_CAMPAIGN_MARKETING_MESSAGE_ACCOUNT_BANNED" ||
            e.marketingMessagesRestrictionStatus ===
              "COMMON_CAMPAIGN_MARKETING_MESSAGE_ACCOUNT_RESTRICTED";
    }
    i.default = e;
  },
  66,
);
