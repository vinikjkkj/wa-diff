__d(
  "AdsBrandSafetyContentTypeExclusionFBReelsNonPartnerPlugin",
  [
    "AdsAdditionalOptionsReadOnlyStrings",
    "AdsBrandSafetyExcludeContentType",
    "AdsBulkValueUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "fb_reels_non_partner_publishers",
      s = {
        type: "brand_safety_content_type",
        key: "FB_REELS_NON_PARTNER",
        isSetAtAccountLevel: function (n) {
          return (n == null ? void 0 : n.includes(e)) || !1;
        },
        isEnabled: function (t, n) {
          return !1;
        },
        isSelected: function (t, n, r) {
          return o("AdsBulkValueUtils").wrapValue(s.isSetAtAccountLevel(r));
        },
        hasUserSelectedValue: function (t, n, r) {
          return !1;
        },
        id: r("AdsBrandSafetyExcludeContentType").FB_REELS_NON_PARTNER,
        label: o("AdsAdditionalOptionsReadOnlyStrings")
          .BRAND_SAFETY_LABEL_CONTENT_TYPE_EXCLUSION_FOBRS
          .isFBReelsNonPartnerExcluded,
        isCampaignLevelEditSupported: !1,
      },
      u = s;
    l.default = u;
  },
  98,
);
