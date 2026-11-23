__d(
  "PaymentLabyrinthEncrypt",
  ["PaymentLabyrinthDerive", "PaymentLabyrinthEnvelope"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return self.crypto.subtle.importKey(
        "raw",
        e,
        { length: 256, name: "AES-GCM" },
        !1,
        ["encrypt"],
      );
    }
    async function s(t) {
      var n,
        r = t.epochFbid,
        a = t.epochRootKey,
        i = t.plaintext,
        l = await o("PaymentLabyrinthDerive").deriveEncryptionKey(a),
        s = await e(l),
        u = new Uint8Array((n = o("PaymentLabyrinthEnvelope")).IV_LENGTH_BYTES);
      self.crypto.getRandomValues(u);
      var c = await self.crypto.subtle.encrypt(
        {
          additionalData: n.createAdditionalAuthenticatedData(
            r,
            n.ENVELOPE_VERSION,
          ),
          iv: u,
          name: "AES-GCM",
          tagLength: 128,
        },
        s,
        i,
      );
      return n.serializeEnvelope(r, u.buffer, c);
    }
    l.encrypt = s;
  },
  98,
);
