__d(
  "warmMAIBAR23ContextBundle",
  [
    "MAIBARelayEnvironment",
    "RelayModern",
    "warmMAIBAR23ContextBundleMutation.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0 ? e : (e = n("warmMAIBAR23ContextBundleMutation.graphql")),
      u = new Set();
    function c(e) {
      var t = o("MAIBARelayEnvironment").MAIBARelayEnvironment;
      if (!(e == null || t == null || u.has(e))) {
        var n = e;
        (u.add(n),
          o("RelayModern").commitMutation(t, {
            mutation: s,
            variables: { input: { ad_account_id: n } },
            onError: function () {
              u.delete(n);
            },
          }));
      }
    }
    l.default = c;
  },
  98,
);
