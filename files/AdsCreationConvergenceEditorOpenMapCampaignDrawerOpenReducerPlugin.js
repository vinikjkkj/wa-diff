__d(
  "AdsCreationConvergenceEditorOpenMapCampaignDrawerOpenReducerPlugin",
  [
    "AdsEditingAdgroupEditorContext",
    "AdsEditingCampaignEditorContext",
    "adsUEditorSelectedCampaignGroupIDsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          if (n.objectLevel === "campaign") return t;
          var e = null,
            a = null,
            i = null;
          switch (n.objectLevel) {
            case "ad_set":
              ((e = o(
                "adsUEditorSelectedCampaignGroupIDsSelector",
              ).adsUEditorSelectedCampaignGroupIDsSelector(
                r("AdsEditingCampaignEditorContext"),
              )),
                (a = n.ids));
              break;
            case "ad":
              ((e = o(
                "adsUEditorSelectedCampaignGroupIDsSelector",
              ).adsUEditorSelectedCampaignGroupIDsSelector(
                r("AdsEditingAdgroupEditorContext"),
              )),
                (i = n.ids));
              break;
          }
          var l = e != null ? e : [];
          return (
            (a = a != null ? a : []),
            (i = i != null ? i : []),
            {
              campaignGroupIDsWithUnseenChildren:
                t.campaignGroupIDsWithUnseenChildren.subtract(l),
              campaignIDsThatAreUnseen: t.campaignIDsThatAreUnseen.subtract(a),
              adgroupIDsThatAreUnseen: t.adgroupIDsThatAreUnseen.subtract(i),
            }
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
