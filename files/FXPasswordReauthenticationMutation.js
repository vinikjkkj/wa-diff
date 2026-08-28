__d(
  "FXPasswordReauthenticationMutation",
  ["CometRelay", "FXPasswordReauthenticationMutation.graphql"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("FXPasswordReauthenticationMutation.graphql"));
    function u(e, t, n, r, a, i, l) {
      var u = {
        input: {
          account_id: n,
          account_type: r,
          category_name: a,
          password: { sensitive_string_value: t },
        },
      };
      o("CometRelay").commitMutation(e, {
        mutation: s,
        onCompleted: i,
        onError: l,
        variables: u,
      });
    }
    l.default = u;
  },
  98,
);
