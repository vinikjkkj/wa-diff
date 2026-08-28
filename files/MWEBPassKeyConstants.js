__d(
  "MWEBPassKeyConstants",
  ["MWEBCryptoUtil"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "MetaPasskeyStaticPrfInputV1",
      s = 5,
      u = 32;
    function c(e) {
      var t;
      return {
        root_rotatable_scope: (t = o("MWEBCryptoUtil")).toBase64String(
          btoa("v=1"),
        ),
        root_scope: t.toBase64String(btoa("ROOT_SCOPE")),
        root_stored_scope: t.toBase64String(btoa("type=FACEBOOK;uid=" + e)),
        use_case_scope: t.toBase64String(btoa("ENCRYPTED_BACKUP")),
      };
    }
    function d(e) {
      return babelHelpers.extends({}, c(e), { salt: null });
    }
    function m(e) {
      var t = new Uint8Array(u);
      crypto.getRandomValues(t);
      var n = o("MWEBCryptoUtil").toBase64String(
        btoa(String.fromCharCode.apply(String, Array.from(t))),
      );
      return babelHelpers.extends({}, c(e), { salt: n });
    }
    ((l.META_PASSKEY_STATIC_PRF_INPUT_V1 = e),
      (l.PASSKEY_DATA_VERSION = s),
      (l.getDefaultDerivationSpec = d),
      (l.generateDerivationSpec = m));
  },
  98,
);
