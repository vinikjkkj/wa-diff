__d(
  "adsUEditorSelectedCampaignGroupsSelector",
  ["adsCreateStoreSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
        function (e) {
          var t = e.selectedCampaignGroupsSelector;
          return t.getStores();
        },
        function (t) {
          var e = t.selectedCampaignGroupsSelector;
          return e();
        },
        {
          isGetStoresPure: !0,
          name: i.id + ".adsUEditorSelectedCampaignGroupsSelector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
