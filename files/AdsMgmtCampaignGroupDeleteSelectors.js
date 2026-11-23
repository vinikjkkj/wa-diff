__d(
  "AdsMgmtCampaignGroupDeleteSelectors",
  [
    "AdsMgmtDeleteDisabledUtils",
    "AdsPECampaignGroupToolbarStateSelector",
    "AdsPEToolbarActionTypes",
    "adsCreateSelector",
    "adsMgmtCampaignGroupSelectedIdsSelector",
    "adsMgmtPublishDisabledReasonSelector",
    "adsPECrepeUnsupportedToolbarActionMessageSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("AdsPECampaignGroupToolbarStateSelector"),
          r("adsMgmtPublishDisabledReasonSelector"),
          r("adsPECrepeUnsupportedToolbarActionMessageSelector"),
        ],
        function (t, n, a) {
          return o("AdsMgmtDeleteDisabledUtils").getIsDeleteDisabledCombined(
            t,
            n,
            a({ toolbarAction: r("AdsPEToolbarActionTypes").DELETE }),
          );
        },
        { name: i.id + ".isCampaignGroupDeleteDisabledSelector" },
      ),
      s = r("adsCreateSelector")(
        [
          r("AdsPECampaignGroupToolbarStateSelector"),
          r("adsMgmtPublishDisabledReasonSelector"),
          o("adsMgmtCampaignGroupSelectedIdsSelector")
            .adsMgmtCampaignGroupSelectedIdsSelector,
          r("adsPECrepeUnsupportedToolbarActionMessageSelector"),
        ],
        function (t, n, a, i) {
          return o("AdsMgmtDeleteDisabledUtils").getDeleteDisabledReason(
            t,
            n,
            a,
            i({ toolbarAction: r("AdsPEToolbarActionTypes").DELETE }),
          );
        },
        { name: i.id + ".campaignGroupDeleteDisabledReasonSelector" },
      );
    ((l.isCampaignGroupDeleteDisabledSelector = e),
      (l.campaignGroupDeleteDisabledReasonSelector = s));
  },
  98,
);
