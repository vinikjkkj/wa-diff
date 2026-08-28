__d(
  "isMessageMarketingEligibleForCESV2",
  [
    "getMessageMarketingCampaignType",
    "isMessengerMarketingMessageEnabledFromCampaign",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        r,
        a = o(
          "getMessageMarketingCampaignType",
        ).getMessageMarketingCampaignType(t),
        i = o(
          "isMessengerMarketingMessageEnabledFromCampaign",
        ).isMessengerMarketingMessageEnabledFromCampaign(t);
      if (
        a ===
          o("getMessageMarketingCampaignType").MessageMarketingCampaignType
            .NONE &&
        !i
      )
        return !1;
      var l =
          ((n = e.creative) == null ||
          (n = n.marketing_message_structured_spec) == null
            ? void 0
            : n.is_optimized_text) === !0,
        s =
          ((r = e.creative) == null ||
          (r = r.marketing_message_structured_spec) == null ||
          (r = r.asset_customization) == null
            ? void 0
            : r.body) !== null;
      return !(l && !s);
    }
    l.isMessageMarketingEligibleForCESV2 = e;
  },
  98,
);
