__d(
  "adsUEditorSelectedRawCampaignsSelector",
  ["adsCreateStoreSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
        function (e) {
          var t = e.selectedRawCampaignsSelector;
          return t.getStores();
        },
        function (t) {
          var e = t.selectedRawCampaignsSelector;
          return e();
        },
        {
          isGetStoresPure: !0,
          name: i.id + ".adsUEditorSelectedRawCampaignsSelector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
