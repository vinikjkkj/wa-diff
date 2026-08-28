__d(
  "adsUEditorSelectedCampaignGroupPlainObjectsSelector",
  ["adsCreateStoreSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
        function (e) {
          var t = e.selectedCampaignGroupPlainObjectsSelector;
          return t.getStores();
        },
        function (t) {
          var e = t.selectedCampaignGroupPlainObjectsSelector;
          return e();
        },
        {
          isGetStoresPure: !0,
          name: i.id + ".adsUEditorSelectedCampaignGroupPlainObjectsSelector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
