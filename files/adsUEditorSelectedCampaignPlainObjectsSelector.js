__d(
  "adsUEditorSelectedCampaignPlainObjectsSelector",
  ["adsCreateStoreSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
        function (e) {
          var t = e.selectedCampaignPlainObjectsSelector;
          return t.getStores();
        },
        function (t) {
          var e = t.selectedCampaignPlainObjectsSelector;
          return e();
        },
        {
          isGetStoresPure: !0,
          name: i.id + ".adsUEditorSelectedCampaignPlainObjectsSelector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
