__d(
  "AeadAes128Gcm",
  ["Hpke"],
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
        var n = t.prototype;
        return (
          (n.seal = async function (t, n, r, o) {
            var e = await this.internalCryptoProvider.importKey(
                "raw",
                t,
                { name: "AES-GCM" },
                !0,
                ["encrypt"],
              ),
              a = { name: "AES-GCM", iv: n, additionalData: r },
              i = await this.internalCryptoProvider.encrypt(a, e, o);
            return new Uint8Array(i);
          }),
          (n.open = async function (t, n, r, o) {
            var e = await this.internalCryptoProvider.importKey(
                "raw",
                t,
                { name: "AES-GCM" },
                !0,
                ["decrypt"],
              ),
              a = { name: "AES-GCM", iv: n, additionalData: r },
              i = await this.internalCryptoProvider.decrypt(a, e, o);
            return new Uint8Array(i);
          }),
          t
        );
      })();
    l.AeadAes128Gcm = s;
  },
  98,
);
