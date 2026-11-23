__d(
  "WAGetIdentityKeys",
  ["WAGetLocalPublicPrivateIdentityKeyApi"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e() {
      var e = await o(
          "WAGetLocalPublicPrivateIdentityKeyApi",
        ).getLocalPublicPrivateIdentityKey(),
        t = e.privateKey,
        n = e.serializedPubKey;
      return { identityPrivateKey: t, identityPublicKey: n };
    }
    l.getIdentityKeysInWorker = e;
  },
  98,
);
