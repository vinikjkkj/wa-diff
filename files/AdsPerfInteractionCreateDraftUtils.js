__d(
  "AdsPerfInteractionCreateDraftUtils",
  [
    "AdsInteractionTriggerTrackedKeys",
    "AdsPerfInteractionLogDataUtil",
    "AdsPerfInteractionsController",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var o = r("AdsPerfInteractionsController").startInteraction(
        "am.draft.create_draft",
        e,
        {
          overrideTrackingSurface: t,
          triggerContext: {
            key: r("AdsInteractionTriggerTrackedKeys").AM_DRAFT_CREATE_DRAFT,
            source: String(n),
          },
        },
      );
      return (
        r("gkx")("16004") &&
          r("AdsPerfInteractionsController").startInteraction(
            "am.advantage_plus.l3_catalog_card",
            e,
            {
              overrideTrackingSurface: t,
              triggerContext: {
                key: r("AdsInteractionTriggerTrackedKeys")
                  .AM_ADVANTAGE_PLUS_L3_CATALOG_CARD,
                source: String(n),
              },
            },
          ),
        o
      );
    }
    function s(e, t) {
      var n = 0,
        r = 0,
        a = 0;
      for (var i of t) {
        if (
          (i.adgroup.length > 0 && (n += i.adgroup.length * i.campaign.length),
          i.campaign.length > 0)
        ) {
          var l = i.campaign.filter(function (e) {
            return e.id == null;
          });
          r += l.length;
        }
        i.campaignGroup.id == null && (a += 1);
      }
      o(
        "AdsPerfInteractionLogDataUtil",
      ).addHeroTracingInteractionCustomMetadata(e, {
        fragment_intent_adgroup_count: n,
        fragment_intent_campaign_count: r,
        fragment_intent_campaign_group_count: a,
      });
    }
    ((l.logCreateDraftInteractionStart = e),
      (l.annotateCreateDraftInteractionFragmentCount = s));
  },
  98,
);
