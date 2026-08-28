__d(
  "adsUEditorCampaignGroupPublishStatusSelector",
  ["adsCreateStoreSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
      function (e) {
        var t = e.campaignGroupPublishStatusSelector;
        return t.getStores();
      },
      function (t) {
        var e = t.campaignGroupPublishStatusSelector;
        return e();
      },
      {
        isGetStoresPure: !0,
        name: i.id + ".adsUEditorCampaignGroupPublishStatusSelector",
      },
    );
    l.adsUEditorCampaignGroupPublishStatusSelector = e;
  },
  98,
);
