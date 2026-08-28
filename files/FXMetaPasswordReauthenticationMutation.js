__d(
  "FXMetaPasswordReauthenticationMutation",
  ["CometRelay", "FXMetaPasswordReauthenticationMutation.graphql"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("FXMetaPasswordReauthenticationMutation.graphql"));
    function u(e, t, n, r, a) {
      var i = {
        input: { category_name: e, password: { sensitive_string_value: n } },
      };
      o("CometRelay").commitMutation(t, {
        mutation: s,
        onCompleted: r,
        onError: a,
        variables: i,
      });
    }
    l.default = u;
  },
  98,
);
