__d(
  "AdsCreativeFlexSpecUtils",
  ["AdsCreativeFlexTypes", "AdsCreativeMediaSourcingSpecTypes.flow"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if ((e == null ? void 0 : e.toLowerCase()) === "opt_in")
        return o("AdsCreativeMediaSourcingSpecTypes.flow")
          .RelatedMediaOptInStatusSpecType.OPT_IN;
      if ((e == null ? void 0 : e.toLowerCase()) === "opt_out")
        return o("AdsCreativeMediaSourcingSpecTypes.flow")
          .RelatedMediaOptInStatusSpecType.OPT_OUT;
      if (
        (e == null ? void 0 : e.toLowerCase()) ===
        "opt_in_as_inferred_da_intro_card"
      )
        return o("AdsCreativeMediaSourcingSpecTypes.flow")
          .RelatedMediaOptInStatusSpecType.OPT_IN_AS_INFERRED_DA_INTRO_CARD;
    }
    function s(e) {
      if (e == null) return null;
      switch (e.toLowerCase()) {
        case "ad_context":
          return "ad_context";
        case "ads_llama":
          return "ads_llama";
        case "creative_graph":
          return "creative_graph";
        case "piggyback":
          return "piggyback";
        case "same_account_media_search":
          return "same_account_media_search";
        case "video_thumbnail":
          return "video_thumbnail";
        case "website_media":
          return "website_media";
        case "organic_content":
          return "organic_content";
        default:
          return null;
      }
    }
    function u(e) {
      if (e != null)
        return e ===
          o("AdsCreativeMediaSourcingSpecTypes.flow")
            .RelatedMediaOptInStatusSpecType.OPT_IN
          ? o("AdsCreativeFlexTypes").RelatedMediaSelection.OPT_IN
          : e ===
              o("AdsCreativeMediaSourcingSpecTypes.flow")
                .RelatedMediaOptInStatusSpecType.OPT_OUT
            ? o("AdsCreativeFlexTypes").RelatedMediaSelection.OPT_OUT
            : e ===
                o("AdsCreativeMediaSourcingSpecTypes.flow")
                  .RelatedMediaOptInStatusSpecType
                  .OPT_IN_AS_INFERRED_DA_INTRO_CARD
              ? o("AdsCreativeFlexTypes").RelatedMediaSelection
                  .OPT_IN_AS_INFERRED_DA_INTRO_CARD
              : void 0;
    }
    function c(e) {
      return e === o("AdsCreativeFlexTypes").RelatedMediaSelection.OPT_IN ||
        e ===
          o("AdsCreativeFlexTypes").RelatedMediaSelection.OPT_IN_AS_DEFAULT_ON
        ? o("AdsCreativeMediaSourcingSpecTypes.flow")
            .RelatedMediaOptInStatusSpecType.OPT_IN
        : e === o("AdsCreativeFlexTypes").RelatedMediaSelection.OPT_OUT
          ? o("AdsCreativeMediaSourcingSpecTypes.flow")
              .RelatedMediaOptInStatusSpecType.OPT_OUT
          : e ===
              o("AdsCreativeFlexTypes").RelatedMediaSelection
                .OPT_IN_AS_INFERRED_DA_INTRO_CARD
            ? o("AdsCreativeMediaSourcingSpecTypes.flow")
                .RelatedMediaOptInStatusSpecType
                .OPT_IN_AS_INFERRED_DA_INTRO_CARD
            : e === o("AdsCreativeFlexTypes").RelatedMediaSelection.UNDEFINED
              ? void 0
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    ((l.convertSpecStringToRelatedMediaSelection = e),
      (l.convertSpecStringToRetrieverSource = s),
      (l.convertOptInStatusSpecToRelatedMediaSelection = u),
      (l.convertRelatedMediaSelectionToOptInStatusSpec = c));
  },
  98,
);
