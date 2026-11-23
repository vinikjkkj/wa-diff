__d(
  "PaymentLabyrinthDerive",
  ["XPlatReactCrypto", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "payment/vault/v1",
      s = 32,
      u = new Uint8Array(10).buffer;
    async function c(t) {
      if (t.byteLength !== s)
        throw r("err")("Payment Labyrinth epoch root key must be 32 bytes");
      var n = await o("XPlatReactCrypto").subtleImportKey(
          "raw",
          t,
          "HKDF",
          !1,
          ["deriveBits"],
        ),
        a = await o("XPlatReactCrypto").subtleDeriveBits(
          {
            hash: "SHA-256",
            info: new TextEncoder().encode(e).buffer,
            name: "HKDF",
            salt: u,
          },
          n,
          s * 8,
        );
      if (a.byteLength !== s)
        throw r("err")("Unable to derive a 32-byte Payment Labyrinth key");
      return a;
    }
    l.deriveEncryptionKey = c;
  },
  98,
);
