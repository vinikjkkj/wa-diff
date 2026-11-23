__d(
  "AdsMgmtCampaignDeleteSelectors",
  [
    "AdsMgmtDeleteDisabledUtils",
    "AdsPECampaignToolbarStateSelector",
    "AdsPEToolbarActionTypes",
    "adsCreateSelector",
    "adsMgmtCampaignSelectedIdsSelector",
    "adsMgmtPublishDisabledReasonSelector",
    "adsPECrepeUnsupportedToolbarActionMessageSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("AdsPECampaignToolbarStateSelector"),
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
        { name: i.id + ".isCampaignDeleteDisabledSelector" },
      ),
      s = r("adsCreateSelector")(
        [
          r("AdsPECampaignToolbarStateSelector"),
          r("adsMgmtPublishDisabledReasonSelector"),
          o("adsMgmtCampaignSelectedIdsSelector")
            .adsMgmtCampaignSelectedIdsSelector,
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
        { name: i.id + ".campaignDeleteDisabledReasonSelector" },
      );
    ((l.isCampaignDeleteDisabledSelector = e),
      (l.campaignDeleteDisabledReasonSelector = s));
  },
  98,
);
