__d(
  "isMarketingMessagesIneligibleDueToActivationStatus",
  [
    "AdsMessageMarketingCompatibleSettingsPluginType",
    "findMessageMarketingIncompatibleSettingFields",
    "getUpstreamSettingsFromEligibilityInformation",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (r("gkx")("9659")) {
        if (
          e.messageMarketingActivationStatus === !0 ||
          e.messageMarketingActivationStatus === void 0
        )
          return !1;
      } else if (e.messageMarketingActivationStatus !== null) return !1;
      var t = o(
          "getUpstreamSettingsFromEligibilityInformation",
        ).getUpstreamSettingsFromEligibilityInformation(e),
        n = o(
          "findMessageMarketingIncompatibleSettingFields",
        ).findMessageMarketingIncompatibleSettingFields(
          t,
          o("AdsMessageMarketingCompatibleSettingsPluginType")
            .AdsMessageMarketingCompatibleSettingsChannelType.WHATSAPP,
        );
      return (
        !n.includes("objective") &&
        !n.includes("promotedObjectType") &&
        !n.includes("specialAdCategories") &&
        r("gkx")("6359")
      );
    }
    l.default = e;
  },
  98,
);
