__d(
  "AdsMgmtCampaignGroupRevertSelectors",
  [
    "AdsMgmtRevertDisabledUtils",
    "AdsPECampaignGroupToolbarStateSelector",
    "AdsPEToolbarActionTypes",
    "adsCreateSelector",
    "adsMgmtCampaignGroupSelectedIdsSelector",
    "adsPECrepeUnsupportedToolbarActionMessageSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("AdsPECampaignGroupToolbarStateSelector"),
          o("adsMgmtCampaignGroupSelectedIdsSelector")
            .adsMgmtCampaignGroupSelectedIdsSelector,
          r("adsPECrepeUnsupportedToolbarActionMessageSelector"),
        ],
        function (t, n, a) {
          return o("AdsMgmtRevertDisabledUtils").isRevertDisabled(
            t,
            n,
            a({ toolbarAction: r("AdsPEToolbarActionTypes").DELETE }),
          );
        },
        { name: i.id + ".isCampaignGroupRevertDisabledSelector" },
      ),
      s = r("adsCreateSelector")(
        [
          r("AdsPECampaignGroupToolbarStateSelector"),
          o("adsMgmtCampaignGroupSelectedIdsSelector")
            .adsMgmtCampaignGroupSelectedIdsSelector,
          r("adsPECrepeUnsupportedToolbarActionMessageSelector"),
        ],
        function (t, n, a) {
          return o("AdsMgmtRevertDisabledUtils").getRevertDisabledReason(
            t,
            n,
            a({ toolbarAction: r("AdsPEToolbarActionTypes").DELETE }),
          );
        },
        { name: i.id + ".campaignGroupRevertDisabledReasonSelector" },
      );
    ((l.isCampaignGroupRevertDisabledSelector = e),
      (l.campaignGroupRevertDisabledReasonSelector = s));
  },
  98,
);
