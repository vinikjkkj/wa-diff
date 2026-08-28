__d(
  "MWEBPasskeyPrfCache",
  [
    "FBLogger",
    "MWEBCryptoUtil",
    "MWEBPassKeyConstants",
    "MWEBPassKeyUtil",
    "WebStorage",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "passkey_account_level_encryption_key",
      u = "passkey_credential_id";
    function c(t) {
      try {
        var n;
        (n = (e || (e = r("WebStorage"))).getSessionStorage()) == null ||
          n.setItem(s, o("MWEBCryptoUtil").arrayBufferToBase64(t));
      } catch (e) {
        r("FBLogger")("wmi_eb").warn(
          "PassKey cache write failed: %s",
          String(e),
        );
      }
    }
    function d() {
      try {
        var t,
          n =
            (t = (e || (e = r("WebStorage"))).getSessionStorage()) == null
              ? void 0
              : t.getItem(s);
        if (n != null) return o("MWEBCryptoUtil").base64ToArrayBuffer(n);
      } catch (e) {
        r("FBLogger")("wmi_eb").warn(
          "PassKey cache read failed: %s",
          String(e),
        );
      }
      return null;
    }
    function m() {
      try {
        var t = (e || (e = r("WebStorage"))).getSessionStorage();
        (t == null || t.removeItem(s), t == null || t.removeItem(u));
      } catch (e) {
        r("FBLogger")("wmi_eb").warn(
          "PassKey cache clear failed: %s",
          String(e),
        );
      }
    }
    function p(t) {
      try {
        var n;
        (n = (e || (e = r("WebStorage"))).getSessionStorage()) == null ||
          n.setItem(u, t);
      } catch (e) {
        r("FBLogger")("wmi_eb").warn(
          "PassKey credential ID cache write failed: %s",
          String(e),
        );
      }
    }
    function _() {
      try {
        var t;
        return (t = (e || (e = r("WebStorage"))).getSessionStorage()) == null
          ? void 0
          : t.getItem(u);
      } catch (e) {
        r("FBLogger")("wmi_eb").warn(
          "PassKey credential ID cache read failed: %s",
          String(e),
        );
      }
      return null;
    }
    function f(e, t, n) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (e != null) {
            var r = yield o("MWEBPassKeyUtil").deriveAccountLevelEncryptionKey(
              e,
              o("MWEBPassKeyConstants").getDefaultDerivationSpec(t),
            );
            (c(r), n != null && p(o("MWEBCryptoUtil").arrayBufferToBase64(n)));
          }
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      if (typeof e != "object" || e == null) return null;
      var t = e.prf;
      if (typeof t != "object" || t == null) return null;
      var n = t.results;
      if (typeof n != "object" || n == null) return null;
      var r = n.first;
      return r instanceof ArrayBuffer ? r : null;
    }
    ((l.cacheAccountLevelEncryptionKey = c),
      (l.getCachedAccountLevelEncryptionKey = d),
      (l.clearCachedAccountLevelEncryptionKey = m),
      (l.cacheCredentialId = p),
      (l.getCachedCredentialId = _),
      (l.cacheFromPrfOutput = f),
      (l.extractPrfOutput = h));
  },
  98,
);
