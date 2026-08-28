__d(
  "adsUEditorCampaignIDsForSelectedCampaignGroupsSelector",
  ["adsCreateStoreSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
        function (e) {
          var t = e.campaignIDsForSelectedCampaignGroupsSelector;
          return t.getStores();
        },
        function (t) {
          var e = t.campaignIDsForSelectedCampaignGroupsSelector;
          return e();
        },
        {
          isGetStoresPure: !0,
          name:
            i.id + ".adsUEditorCampaignIDsForSelectedCampaignGroupsSelector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
