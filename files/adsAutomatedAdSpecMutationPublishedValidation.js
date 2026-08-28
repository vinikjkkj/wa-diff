__d(
  "adsAutomatedAdSpecMutationPublishedValidation",
  [
    "AdsAdgroupDraftFragmentStore",
    "AdsCampaignDraftFragmentStore",
    "AdsCampaignGroupDraftFragmentStore",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return (
        e == null ||
        e.every(function (e) {
          return t.hasDraft(e);
        })
      );
    }
    function s(t, n, o) {
      return (
        e(t, r("AdsCampaignGroupDraftFragmentStore")) &&
        e(n, r("AdsCampaignDraftFragmentStore")) &&
        e(o, r("AdsAdgroupDraftFragmentStore"))
      );
    }
    l.checkAllAdObjectsHaveDraft = s;
  },
  98,
);
