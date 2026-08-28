__d(
  "PaymentsCometGetServerEncryptionKey",
  ["CometRelay", "PaymentsCometGetServerEncryptionKeyMutation.graphql"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("PaymentsCometGetServerEncryptionKeyMutation.graphql"));
    function u(e, t, n, r) {
      var a = {
        mutation: s,
        onCompleted: t,
        onError: n,
        variables: { input: e },
      };
      return o("CometRelay").commitMutation(r, a);
    }
    l.commitGetServerEncryptionKeyMutation = u;
  },
  98,
);
