__d(
  "Query-selected_ad_account-resolver",
  ["AdsDML"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("AdsDML")
      .Query({ name: i.id, liveResolverDMLQuery: !0 })
      .Derived(function (e) {
        return e.data.L4SelectedAccount(function (e) {
          return { id: e.account_id };
        });
      });
    function s() {
      return o("AdsDML").subscribeQueryLive(e);
    }
    l.selected_ad_account = s;
  },
  98,
);
