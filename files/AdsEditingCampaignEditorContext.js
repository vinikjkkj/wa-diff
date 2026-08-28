__d(
  "AdsEditingCampaignEditorContext",
  [
    "AdsEditingCampaignContext",
    "AdsUEditorContextFactory",
    "adsMgmtCampaignSelectedIdsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("AdsUEditorContextFactory").getForIDsSelector(
        r("AdsEditingCampaignContext"),
        o("adsMgmtCampaignSelectedIdsSelector")
          .adsMgmtCampaignSelectedIdsSelector,
        i.id,
      ),
      s = e;
    l.default = s;
  },
  98,
);
