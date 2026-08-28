__d(
  "AdsEditingCampaignGroupEditorContext",
  [
    "AdsEditingCampaignGroupContext",
    "AdsUEditorContextFactory",
    "adsMgmtCampaignGroupSelectedIdsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("AdsUEditorContextFactory").getForIDsSelector(
        r("AdsEditingCampaignGroupContext"),
        o("adsMgmtCampaignGroupSelectedIdsSelector")
          .adsMgmtCampaignGroupSelectedIdsSelector,
        i.id,
      ),
      s = e;
    l.default = s;
  },
  98,
);
