__d(
  "AdsEditorActionUtils",
  [
    "AdsCFNewAdgroupFBID",
    "AdsCFNewCampaignFBID",
    "AdsCFNewCampaignGroupFBID",
    "AdsUEditorHostIDs",
    "AdsUEditorUtils",
    "adsDraftIsAdsApplicationWithDrafts",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return !r("adsDraftIsAdsApplicationWithDrafts")(e.adsApplicationID) ||
        !o("AdsUEditorUtils").shouldHostHandleAction(
          e,
          r("AdsUEditorHostIDs").EDITING,
        )
        ? !0
        : Array.isArray(e.ids)
          ? e.ids.some(function (e) {
              return (
                e.includes(r("AdsCFNewCampaignFBID")) ||
                e.includes(r("AdsCFNewAdgroupFBID")) ||
                e.includes(r("AdsCFNewCampaignGroupFBID"))
              );
            })
          : !1;
    }
    l.isNotAMEditorAction = e;
  },
  98,
);
