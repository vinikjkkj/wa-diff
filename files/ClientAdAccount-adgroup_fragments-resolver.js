__d(
  "ClientAdAccount-adgroup_fragments-resolver",
  ["AdsAdgroupDraftFragmentStore", "AdsDML", "AdsDMLUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("AdsDMLUtils").storeToQuery({
      dataGetter: function (t, n) {
        return n.getFragmentsInDraftFor(t);
      },
      store: r("AdsAdgroupDraftFragmentStore"),
    });
    function s(t) {
      return o("AdsDML").subscribeQueryLive(e, t.account_id);
    }
    l.adgroup_fragments = s;
  },
  98,
);
