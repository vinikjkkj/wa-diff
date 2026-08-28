__d(
  "adsUEditorSelectedCampaignsSelector",
  ["adsCreateStoreSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
        function (e) {
          var t = e.selectedCampaignsSelector;
          return t.getStores();
        },
        function (t) {
          var e = t.selectedCampaignsSelector;
          return e();
        },
        {
          isGetStoresPure: !0,
          name: i.id + ".adsUEditorSelectedCampaignsSelector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
