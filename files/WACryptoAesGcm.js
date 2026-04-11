__d(
  "WACryptoAesGcm",
  ["WABinary", "WACryptoDependencies", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r, o) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a) {
            a === void 0 && (a = 16);
            var i = { name: "AES-GCM", iv: m(t), tagLength: a * 8 };
            return (
              r != null && (i.additionalData = m(r)),
              o("WACryptoDependencies")
                .getCrypto()
                .subtle.encrypt(i, yield d(e), n)
            );
          },
        )),
        s.apply(this, arguments)
      );
    }
    function u(e, t, n, r, o) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a) {
            a === void 0 && (a = 16);
            var i = { name: "AES-GCM", iv: m(t), tagLength: a * 8 };
            return (
              r != null && (i.additionalData = m(r)),
              o("WACryptoDependencies")
                .getCrypto()
                .subtle.decrypt(i, yield d(e), n)
            );
          },
        )),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return o("WACryptoDependencies")
        .getCrypto()
        .subtle.importKey("raw", e, "AES-GCM", !1, ["encrypt", "decrypt"]);
    }
    function m(e) {
      if (e instanceof Uint8Array) return e;
      if (typeof e == "string") {
        var t = new (o("WABinary").Binary)();
        return (t.writeString(e), t.readByteArrayView());
      }
      return new Uint8Array(e);
    }
    ((l.gcmEncrypt = e), (l.gcmDecrypt = u));
  },
  98,
);
