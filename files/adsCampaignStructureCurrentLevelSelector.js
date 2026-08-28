__d(
  "adsCampaignStructureCurrentLevelSelector",
  ["AdsEditorCampaignStructureStore", "adsCreateStoreSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
        [r("AdsEditorCampaignStructureStore")],
        function () {
          return r("AdsEditorCampaignStructureStore").getState().currentLevel;
        },
        { name: i.id },
      ),
      s = e;
    l.default = s;
  },
  98,
);
