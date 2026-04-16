__d(
  "WAWebBizBroadcastMarketingMessagesEligibilityQuickPromotionFilter",
  [
    "WAWebBizBroadcastMarketingMessagesEligibilityModel",
    "WAWebCommonQPSurfacesTypes",
    "WAWebMobilePlatforms",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
        reason:
          "filtersRuleValidator:bizBroadcastMarketingMessagesEligibility: not an SMB account",
      },
      s = {
        reason:
          "filtersRuleValidator:bizBroadcastMarketingMessagesEligibility: marketing messages not eligible",
      },
      u = {
        name: "whatsapp_smb_biz_broadcast_marketing_messages_eligibility",
        filter: function (n, r, a) {
          return o("WAWebMobilePlatforms").isSMB()
            ? o(
                "WAWebBizBroadcastMarketingMessagesEligibilityModel",
              ).isMarketingMessagesEligible()
              ? o("WAWebCommonQPSurfacesTypes").RESULT_TRUE
              : s
            : e;
        },
      };
    l.bizBroadcastMarketingMessagesEligibilityFilter = u;
  },
  98,
);
