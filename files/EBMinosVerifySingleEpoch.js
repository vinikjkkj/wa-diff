__d(
  "EBMinosVerifySingleEpoch",
  ["EBAPIMinosVerifySingleEpoch"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e, t, n, r, a, i, l, s) {
      var u = await o("EBAPIMinosVerifySingleEpoch").minosVerifySingleEpoch({
        minosEpochAnonId: e,
        minosMailboxAuthPublicKey: a,
        minosMailboxEncryptionPublicKey: r,
        minosMailboxSigningPublicKey: n,
        previousEpochHead: i,
        qplFlow: s,
        selfEpochSignature: l,
        userId: t,
      });
      return Promise.resolve([u]);
    }
    async function s(e, t, n, r, a, i, l, s, u) {
      var c = await o(
        "EBAPIMinosVerifySingleEpoch",
      ).minosVerifySingleEpochWithEpochHead({
        epochHead: s,
        minosEpochAnonId: e,
        minosMailboxAuthPublicKey: a,
        minosMailboxEncryptionPublicKey: r,
        minosMailboxSigningPublicKey: n,
        previousEpochHead: i,
        qplFlow: u,
        selfEpochSignature: l,
        userId: t,
      });
      return [c];
    }
    ((l.minosVerifySingleEpoch = e), (l.minosVerifySingleEpochV2 = s));
  },
  98,
);
