__d(
  "adsMgmtCampaignStructurePanelOpenSelector",
  ["AdsMgmtOpenTrayStore", "adsCreateStoreSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
        [o("AdsMgmtOpenTrayStore").AdsMgmtOpenTrayStore],
        function () {
          return o(
            "AdsMgmtOpenTrayStore",
          ).AdsMgmtOpenTrayStore.getIsCampaignStructurePanelOpen();
        },
        { name: i.id + ".adsMgmtCampaignStructurePanelOpenSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
