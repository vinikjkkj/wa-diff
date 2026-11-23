__d(
  "AdPreferencesHideAdvertiserMutation",
  ["AdPreferencesHideAdvertiserMutation.graphql"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("AdPreferencesHideAdvertiserMutation.graphql"));
    function u(e, t, n) {
      return [
        s,
        { variables: { input: { client_token: n, is_undo: t, page_id: e } } },
      ];
    }
    l.makeMutation = u;
  },
  98,
);
