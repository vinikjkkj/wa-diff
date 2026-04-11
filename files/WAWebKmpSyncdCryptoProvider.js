__d(
  "WAWebKmpSyncdCryptoProvider",
  ["WAWebKmpCryptoProviderCommons", "wa-kmp-syncd-engine-crypto-api"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = Array.from({ length: 256 }, function (e, t) {
      return t.toString(16).padStart(2, "0");
    });
    function s(t) {
      for (var n = "", r = 0; r < t.length; r++) n += e[t[r]];
      return n;
    }
    var u = new (o(
      "wa-kmp-syncd-engine-crypto-api",
    ).JsKmpSyncdCryptoProviderImpl)({
      createCipherText: function (t, n, r, a) {
        return new (o("wa-kmp-syncd-engine-crypto-api").KmpCryptoResult)(
          o("WAWebKmpCryptoProviderCommons").createCipherText(t.name, n, r, a),
        );
      },
      mac: function (t, n, r) {
        return new (o("wa-kmp-syncd-engine-crypto-api").KmpCryptoResult)(
          o("WAWebKmpCryptoProviderCommons").mac(t.name, n, r),
        );
      },
      generateRandomBytes: o("WAWebKmpCryptoProviderCommons")
        .generateRandomBytes,
      bytesToHexString: s,
    });
    l.default = u;
  },
  98,
);
