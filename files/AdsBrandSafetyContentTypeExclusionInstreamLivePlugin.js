__d(
  "AdsBrandSafetyContentTypeExclusionInstreamLivePlugin",
  [
    "AdsAdditionalOptionsReadOnlyStrings",
    "AdsBrandSafetyContentFilterLevelConstants",
    "AdsBrandSafetyExcludeContentType",
    "AdsBulkValueUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "instream_live",
      s = {
        type: "brand_safety_content_type",
        key: "INSTREAM_LIVE",
        isSetAtAccountLevel: function (n) {
          return (n == null ? void 0 : n.includes(e)) || !1;
        },
        isEnabled: function (t, n) {
          var e =
            n == null
              ? null
              : o("AdsBulkValueUtils").getUniformValueOrDefault(
                  n.levelFacebook.value,
                  null,
                );
          return (
            !s.isSetAtAccountLevel(t) &&
            e !==
              o("AdsBrandSafetyContentFilterLevelConstants")
                .ADS_BRAND_SAFETY_CONTENT_FILTER_LEVEL.FACEBOOK_STRICT
          );
        },
        isSelected: function (t, n, r) {
          var e,
            a =
              (n == null || (e = n.levelFacebook.value) == null
                ? void 0
                : e.getValues()) || [];
          return o("AdsBulkValueUtils").aggregate(
            t.map(function (e, t) {
              return (
                s.isSetAtAccountLevel(r) ||
                a[t] ===
                  o("AdsBrandSafetyContentFilterLevelConstants")
                    .ADS_BRAND_SAFETY_CONTENT_FILTER_LEVEL.FACEBOOK_STRICT ||
                !!(
                  e.spec.excluded_brand_safety_content_types &&
                  e.spec.excluded_brand_safety_content_types.includes(s.key)
                )
              );
            }),
          );
        },
        hasUserSelectedValue: function (t, n, r) {
          var e;
          if (s.isSetAtAccountLevel(r)) return !1;
          var a = s.isSelected(t, n, r).getValues(),
            i =
              (n == null || (e = n.levelFacebook.value) == null
                ? void 0
                : e.getValues()) || [];
          return a.some(function (e, t) {
            if (
              e === !0 &&
              i[t] !==
                o("AdsBrandSafetyContentFilterLevelConstants")
                  .ADS_BRAND_SAFETY_CONTENT_FILTER_LEVEL.FACEBOOK_STRICT
            )
              return !0;
          });
        },
        id: r("AdsBrandSafetyExcludeContentType").INSTREAM_LIVE,
        label: o("AdsAdditionalOptionsReadOnlyStrings")
          .BRAND_SAFETY_LABEL_CONTENT_TYPE_EXCLUSION_FOBRS.liveIsExcluded,
        isCampaignLevelEditSupported: !0,
      },
      u = s;
    l.default = u;
  },
  98,
);
