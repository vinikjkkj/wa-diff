__d(
  "AdsPerfInteractionPFRHubUtils",
  [
    "AdsAdObjectUtils",
    "AdsEditingCampaignEditorContext",
    "AdsInteractionTriggerEmitterUtils",
    "AdsObjectTypes",
    "AdsPerfInteractionsController",
    "AdsUEditorCampaignPreflightRecommendationHubStateSelector",
    "getCampaignStructureTreeFromId",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        ((e = {}),
        (e[r("AdsObjectTypes").CAMPAIGN_GROUP] = "campaign"),
        (e[r("AdsObjectTypes").CAMPAIGN] = "ad_set"),
        (e[r("AdsObjectTypes").ADGROUP] = "ad"),
        e);
    function u() {
      var e = o("AdsInteractionTriggerEmitterUtils").getSelectedObjectType();
      if (e == null) return !1;
      var t = o("AdsInteractionTriggerEmitterUtils").getSelectedObjectIDs(e);
      if (t.length === 0) return !1;
      var n = s[e],
        a =
          n != null ? o("AdsAdObjectUtils").getCampaignGroupID(n, t[0]) : null,
        i = o(
          "AdsUEditorCampaignPreflightRecommendationHubStateSelector",
        ).AdsUEditorCampaignPreflightRecommendationHubStateSelector(
          r("getCampaignStructureTreeFromId")(a != null ? a : ""),
        )(r("AdsEditingCampaignEditorContext")),
        l = i.shouldShowPFRHub;
      return l;
    }
    function c(e) {
      var t = u();
      t &&
        r("AdsPerfInteractionsController").startInteraction(
          "am.editor.initial_load_recommendation_hub",
          e,
        );
    }
    ((l.getShouldShowPFRHub = u), (l.startPFRInteraction = c));
  },
  98,
);
