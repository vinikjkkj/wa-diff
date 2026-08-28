__d(
  "AdsCopyCopyCompletedDataReducerPlugin",
  [
    "AdsCampaignDraftFragmentStore",
    "AdsInstreamVideoDefaultOptInStoreUtils",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        a = r("immutable").Set(),
        i = (n = o(
          "AdsInstreamVideoDefaultOptInStoreUtils",
        )).getCopyCompletedCampaignIDs(e.responses),
        l = n.getDefaultOptedInOriginalCampaignIDs(e.responses);
      a = n.getDefaultOptedInCampaignGroupIDs(e.responses);
      var s = i.filter(function (e) {
          return r("AdsCampaignDraftFragmentStore").hasDraft(e);
        }),
        u = r("AdsCampaignDraftFragmentStore").getAll(s.toArray()),
        c = n.getDefaultOptedInNewCampaignIDs(l, u);
      return {
        copyCompletedCampaignIDs: i,
        defaultOptedInCampaignIDs: c,
        defaultOptedInCampaignGroupIDs: a,
      };
    }
    var s = {
        reduce: function (n, r) {
          var t = e(r, n);
          return n.merge(t);
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
