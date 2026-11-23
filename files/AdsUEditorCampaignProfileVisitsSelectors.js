__d(
  "AdsUEditorCampaignProfileVisitsSelectors",
  [
    "AdsInstagramProfileUtils",
    "AdsPromotedObjectTypes",
    "AdsUnifiedProfileVisitUtils",
    "adsCreateSelector",
    "adsGetUniformValueSelector",
    "adsUEditorCampaignDerivedPromotedObjectTypeSelector",
    "adsUEditorCampaignDestinationTypeSelector",
    "adsUEditorODAXTranslatedObjectivesForSelectedCampaignsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("adsCreateSelector")(
        [
          (e = r("adsGetUniformValueSelector"))(
            r("adsUEditorODAXTranslatedObjectivesForSelectedCampaignsSelector"),
          ),
          e(
            r("adsUEditorCampaignDerivedPromotedObjectTypeSelector"),
            r("AdsPromotedObjectTypes").NONE,
          ),
          o("adsUEditorCampaignDestinationTypeSelector")
            .adsUEditorCampaignDestinationTypeSelector,
        ],
        function (t, n, r) {
          return (
            o(
              "AdsInstagramProfileUtils",
            ).getIsInstagramProfileConversionUnderTrafficObjective(t, n) ||
            (o(
              "AdsUnifiedProfileVisitUtils",
            ).getIsUnifiedProfileVisitsConversionUnderODAXObjective(t, n) &&
              o(
                "AdsUnifiedProfileVisitUtils",
              ).getUnifiedProfileVisitsDestinationContainsIG(r))
          );
        },
        { name: i.id },
      ),
      u = r("adsCreateSelector")(
        [
          e(
            r("adsUEditorODAXTranslatedObjectivesForSelectedCampaignsSelector"),
          ),
          e(
            r("adsUEditorCampaignDerivedPromotedObjectTypeSelector"),
            r("AdsPromotedObjectTypes").NONE,
          ),
          o("adsUEditorCampaignDestinationTypeSelector")
            .adsUEditorCampaignDestinationTypeSelector,
        ],
        function (t, n, r) {
          return (
            o(
              "AdsUnifiedProfileVisitUtils",
            ).getIsUnifiedProfileVisitsConversionUnderODAXObjective(t, n) &&
            o(
              "AdsUnifiedProfileVisitUtils",
            ).getUnifiedProfileVisitsDestinationContainsFB(r)
          );
        },
        { name: i.id },
      );
    ((l.isCampaignWithInstagramProfileVisitDestinationSelector = s),
      (l.isCampaignWithFacebookPageVisitDestinationSelector = u));
  },
  98,
);
