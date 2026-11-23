__d(
  "PaymentLabyrinthDecrypt",
  ["PaymentLabyrinthDerive", "PaymentLabyrinthEnvelope"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return self.crypto.subtle.importKey(
        "raw",
        e,
        { length: 256, name: "AES-GCM" },
        !1,
        ["decrypt"],
      );
    }
    async function s(t) {
      var n = t.epochRootKey,
        r = t.serializedEnvelope,
        a = o("PaymentLabyrinthEnvelope").parseEnvelope(r),
        i = a.ciphertext,
        l = a.epochFbid,
        s = a.iv,
        u = a.version,
        c = await o("PaymentLabyrinthDerive").deriveEncryptionKey(n),
        d = await e(c);
      return self.crypto.subtle.decrypt(
        {
          additionalData: o(
            "PaymentLabyrinthEnvelope",
          ).createAdditionalAuthenticatedData(l, u),
          iv: new Uint8Array(s),
          name: "AES-GCM",
          tagLength: 128,
        },
        d,
        i,
      );
    }
    l.decrypt = s;
  },
  98,
);
