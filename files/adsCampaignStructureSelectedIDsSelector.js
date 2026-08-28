__d(
  "adsCampaignStructureSelectedIDsSelector",
  ["AdsEditorCampaignStructureStore", "adsCreateStoreSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
        [r("AdsEditorCampaignStructureStore")],
        function () {
          return r("AdsEditorCampaignStructureStore").getState().selectedIDs;
        },
        { name: i.id + ".adsCampaignStructureSelectedIDsSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
