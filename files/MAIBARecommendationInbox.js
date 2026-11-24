__d(
  "MAIBARecommendationInbox",
  ["MAIBARecommendationInbox_fragment.graphql", "RelayHooks"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var r,
        a = o("RelayHooks").useFragment(
          e !== void 0
            ? e
            : (e = n("MAIBARecommendationInbox_fragment.graphql")),
          t,
        );
      return (
        (r = a.maiba_fab_recommendation_notifications) != null ? r : []
      ).map(function (e) {
        return {
          ad_account_id: e.ad_account_id,
          conversation_id: e.conversation_id,
          creation_time: e.creation_time,
          id: e.id,
          read_time: e.read_time,
          snippet: e.snippet,
          title: e.title,
          toast_id: e.toast_id,
        };
      });
    }
    function u(e, t) {
      var n = new Set(
        t
          .map(function (e) {
            return e.conversation_id;
          })
          .filter(Boolean),
      );
      return n.size === 0
        ? e
        : e.filter(function (e) {
            return !n.has(e.external_conversation_id);
          });
    }
    ((l.useMAIBARecommendationInboxData = s),
      (l.withoutRecommendationThreads = u));
  },
  98,
);
