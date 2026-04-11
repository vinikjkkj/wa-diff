__d(
  "WAWebCryptoLibrarySignalGroupUtilsApi",
  [],
  function (t, n, r, o, a, i) {
    var e = "v1";
    function l(e, t, n, r) {
      return {
        signatureKey: e,
        chainKey: t,
        keyId: n,
        messageKeys: r == null ? [] : r,
      };
    }
    function s(t) {
      return { sessions: t, version: e };
    }
    function u(e) {
      return e;
    }
    function c(e, t) {
      return { counter: e, key: t };
    }
    function d(e, t) {
      return t != null ? { pubKey: e, privKey: t } : e;
    }
    ((i.makeLibsignalSenderKeyState = l),
      (i.makeNewLibsignalSenderKeySession = s),
      (i.makeLibsignalSenderKeyMsgKey = u),
      (i.makeLibsignalSenderKeyChainKey = c),
      (i.makeLibsignalSenderKeySignatureKey = d));
  },
  66,
);
