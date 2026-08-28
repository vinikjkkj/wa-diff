__d(
  "AdsCampaignDraftFragmentsInstreamVideosDefaultOptInDuplicationTriggerReducerPlugin",
  ["AdsDraftFragmentStoreStateUtils", "AdsInstreamVideoDefaultOptInStoreUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = t.copyCompletedCampaignIDs.filter(function (e) {
              return o("AdsDraftFragmentStoreStateUtils").hasDraft(n, e);
            }),
            r = o("AdsDraftFragmentStoreStateUtils").getAll(n, e.toArray()),
            a = o(
              "AdsInstreamVideoDefaultOptInStoreUtils",
            ).getDefaultOptedInNewCampaignIDs(t.defaultOptedInCampaignIDs, r);
          return t.merge({ defaultOptedInCampaignIDs: a });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
