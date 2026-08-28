__d(
  "adsUEditorSelectedCampaignGroupIDsSelector",
  ["AdsDMLQueryHandler_DerivedDataBase", "adsCreateStoreSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
        function (e) {
          var t = e.selectedCampaignGroupIDsSelector;
          return t.getStores();
        },
        function (t) {
          var e = t.selectedCampaignGroupIDsSelector;
          return e();
        },
        {
          isGetStoresPure: !0,
          name: i.id + ".adsUEditorSelectedCampaignGroupIDsSelector",
        },
      ),
      s = o("AdsDMLQueryHandler_DerivedDataBase").modularLoader(function (t) {
        return e.getStores(t);
      }, e);
    ((l.adsUEditorSelectedCampaignGroupIDsSelector = e),
      (l.dmlAdsUEditorSelectedCampaignGroupIDsSelector = s));
  },
  98,
);
