__d(
  "AeadAes128Gcm",
  ["Hpke", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = window.crypto || window.msCrypto,
      s = (function () {
        function t(t) {
          (t === void 0 && (t = e.subtle),
            (this.aead_id = o("Hpke").AeadID.AeadAes128GcmId),
            (this.nK = 16),
            (this.nN = 12),
            (this.nT = 16),
            (this.internalCryptoProvider = null),
            (this.internalCryptoProvider = t));
        }
        var r = t.prototype;
        return (
          (r.seal = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n, r) {
                var o = yield this.internalCryptoProvider.importKey(
                    "raw",
                    e,
                    { name: "AES-GCM" },
                    !0,
                    ["encrypt"],
                  ),
                  a = { name: "AES-GCM", iv: t, additionalData: n },
                  i = yield this.internalCryptoProvider.encrypt(a, o, r);
                return new Uint8Array(i);
              },
            );
            function t(t, n, r, o) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.open = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n, r) {
                var o = yield this.internalCryptoProvider.importKey(
                    "raw",
                    e,
                    { name: "AES-GCM" },
                    !0,
                    ["decrypt"],
                  ),
                  a = { name: "AES-GCM", iv: t, additionalData: n },
                  i = yield this.internalCryptoProvider.decrypt(a, o, r);
                return new Uint8Array(i);
              },
            );
            function t(t, n, r, o) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          t
        );
      })();
    l.AeadAes128Gcm = s;
  },
  98,
);
