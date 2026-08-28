__d(
  "adsUEditorCampaignPlainObjectSelector",
  ["adsCreateStoreSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
        function (e) {
          var t = e.campaignPlainObjectSelector;
          return t.getStores();
        },
        function (t) {
          var e = t.campaignID,
            n = t.campaignPlainObjectSelector;
          return n(e);
        },
        { isGetStoresPure: !0, name: i.id + ".selector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
