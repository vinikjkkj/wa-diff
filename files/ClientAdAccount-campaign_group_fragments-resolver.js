__d(
  "ClientAdAccount-campaign_group_fragments-resolver",
  ["AdsCampaignGroupDraftFragmentStore", "AdsDML", "AdsDMLUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("AdsDMLUtils").storeToQuery({
      dataGetter: function (t, n) {
        return n.getFragmentsInDraftFor(t);
      },
      store: r("AdsCampaignGroupDraftFragmentStore"),
    });
    function s(t) {
      return o("AdsDML").subscribeQueryLive(e, t.account_id);
    }
    l.campaign_group_fragments = s;
  },
  98,
);
