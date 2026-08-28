__d(
  "adsUEditorInjectEditingCampaignGroupContext",
  ["AdsEditingCampaignGroupEditorContext", "adsCreateStoreSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return r("adsCreateStoreSelector")(
        e.getStores(r("AdsEditingCampaignGroupEditorContext")),
        function () {
          return e(r("AdsEditingCampaignGroupEditorContext"));
        },
        { name: i.id },
      );
    }
    l.default = e;
  },
  98,
);
