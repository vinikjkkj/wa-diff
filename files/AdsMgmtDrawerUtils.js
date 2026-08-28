__d(
  "AdsMgmtDrawerUtils",
  [
    "AdsPECreateStartDuplicatingActionFlux",
    "AdsPEFluxCampaignSplitAudienceOpenActionFlux",
    "AdsPETagOpenSelectorActionFlux",
    "AdsPEUploadShowPreviewActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      switch ((t === void 0 && (t = !1), e)) {
        case o("AdsPETagOpenSelectorActionFlux").actionType:
        case o("AdsPEFluxCampaignSplitAudienceOpenActionFlux").actionType:
        case o("AdsPEUploadShowPreviewActionFlux").actionType:
          return !0;
        case o("AdsPECreateStartDuplicatingActionFlux").actionType:
          return !t;
      }
      return !1;
    }
    l.drawerShouldCloseFromAction = e;
  },
  98,
);
