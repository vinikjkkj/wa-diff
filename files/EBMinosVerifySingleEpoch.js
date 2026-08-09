__d(
  "EBMinosVerifySingleEpoch",
  ["EBAPIMinosVerifySingleEpoch", "Promise", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t, n, r, o, a, i, l) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, r, a, i, l, s, u, c) {
            var d = yield o(
              "EBAPIMinosVerifySingleEpoch",
            ).minosVerifySingleEpoch({
              minosEpochAnonId: t,
              minosMailboxAuthPublicKey: l,
              minosMailboxEncryptionPublicKey: i,
              minosMailboxSigningPublicKey: a,
              previousEpochHead: s,
              qplFlow: c,
              selfEpochSignature: u,
              userId: r,
            });
            return (e || (e = n("Promise"))).resolve([d]);
          },
        )),
        u.apply(this, arguments)
      );
    }
    l.minosVerifySingleEpoch = s;
  },
  98,
);
