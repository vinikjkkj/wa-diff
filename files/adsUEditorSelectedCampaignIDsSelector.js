__d(
  "adsUEditorSelectedCampaignIDsSelector",
  ["adsCreateStoreSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
        function (e) {
          var t = e.selectedCampaignIDsSelector;
          return t.getStores();
        },
        function (t) {
          var e = t.selectedCampaignIDsSelector;
          return e();
        },
        { isGetStoresPure: !0, name: i.id + ".selector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
