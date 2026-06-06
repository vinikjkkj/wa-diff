__d(
  "WACryptoAesGcm",
  ["WABinary", "WACryptoDependencies"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e, t, n, r, a) {
      a === void 0 && (a = 16);
      var i = { name: "AES-GCM", iv: c(t), tagLength: a * 8 };
      return (
        r != null && (i.additionalData = c(r)),
        o("WACryptoDependencies")
          .getCrypto()
          .subtle.encrypt(i, await u(e), n)
      );
    }
    async function s(e, t, n, r, a) {
      a === void 0 && (a = 16);
      var i = { name: "AES-GCM", iv: c(t), tagLength: a * 8 };
      return (
        r != null && (i.additionalData = c(r)),
        o("WACryptoDependencies")
          .getCrypto()
          .subtle.decrypt(i, await u(e), n)
      );
    }
    function u(e) {
      return o("WACryptoDependencies")
        .getCrypto()
        .subtle.importKey("raw", e, "AES-GCM", !1, ["encrypt", "decrypt"]);
    }
    function c(e) {
      if (e instanceof Uint8Array) return e;
      if (typeof e == "string") {
        var t = new (o("WABinary").Binary)();
        return (t.writeString(e), t.readByteArrayView());
      }
      return new Uint8Array(e);
    }
    ((l.gcmEncrypt = e), (l.gcmDecrypt = s));
  },
  98,
);
