__d(
  "CometPasswordReauthenticationMutation",
  ["CometPasswordReauthenticationMutation.graphql", "CometRelay"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("CometPasswordReauthenticationMutation.graphql"));
    function u(e, t, n) {
      var r = { input: { password: { sensitive_string_value: t } } };
      o("CometRelay").commitMutation(e, {
        mutation: s,
        onCompleted: n,
        onError: function (t) {
          alert(t.source.exception.message);
        },
        variables: r,
      });
    }
    l.cometPasswordReauthenticationAction = u;
  },
  98,
);
