__d(
  "AdsExperimentsPostPublishDraftClosedModalReducerPlugin",
  [
    "AdsDataAtom",
    "AdsExperimentsPostPublishModalDisplayProvider",
    "adsBootloadedNavigateToCampaignGroupEditorAction",
    "adsBootloadedSelectCampaignGroupAction",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        reduce: function (n, o) {
          var t = r("AdsExperimentsPostPublishModalDisplayProvider")(),
            a = t.campaignGroupID;
          return a != null
            ? ((e || (e = r("AdsDataAtom"))).addPostDispatchCallback(
                function () {
                  (r("adsBootloadedSelectCampaignGroupAction")(a),
                    r("adsBootloadedNavigateToCampaignGroupEditorAction")());
                },
              ),
              { campaignGroupID: null })
            : n;
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
