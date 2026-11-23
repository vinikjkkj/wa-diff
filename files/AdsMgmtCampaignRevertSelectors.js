__d(
  "AdsMgmtCampaignRevertSelectors",
  [
    "AdsMgmtRevertDisabledUtils",
    "AdsPECampaignToolbarStateSelector",
    "AdsPEToolbarActionTypes",
    "adsCreateSelector",
    "adsMgmtCampaignSelectedIdsSelector",
    "adsPECrepeUnsupportedToolbarActionMessageSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("AdsPECampaignToolbarStateSelector"),
          o("adsMgmtCampaignSelectedIdsSelector")
            .adsMgmtCampaignSelectedIdsSelector,
          r("adsPECrepeUnsupportedToolbarActionMessageSelector"),
        ],
        function (t, n, a) {
          return o("AdsMgmtRevertDisabledUtils").isRevertDisabled(
            t,
            n,
            a({ toolbarAction: r("AdsPEToolbarActionTypes").DELETE }),
          );
        },
        { name: i.id + ".isCampaignRevertDisabledSelector" },
      ),
      s = r("adsCreateSelector")(
        [
          r("AdsPECampaignToolbarStateSelector"),
          o("adsMgmtCampaignSelectedIdsSelector")
            .adsMgmtCampaignSelectedIdsSelector,
          r("adsPECrepeUnsupportedToolbarActionMessageSelector"),
        ],
        function (t, n, a) {
          return o("AdsMgmtRevertDisabledUtils").getRevertDisabledReason(
            t,
            n,
            a({ toolbarAction: r("AdsPEToolbarActionTypes").DELETE }),
          );
        },
        { name: i.id + ".campaignRevertDisabledReasonSelector" },
      );
    ((l.isCampaignRevertDisabledSelector = e),
      (l.campaignRevertDisabledReasonSelector = s));
  },
  98,
);
