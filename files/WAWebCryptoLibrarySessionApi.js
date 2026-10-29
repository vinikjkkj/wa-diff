__d(
  "WAWebCryptoLibrarySessionApi",
  ["WAWebCryptoLibrary"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return o("WAWebCryptoLibrary")
        .getRemoteRegId(e, t)
        .then(function (e) {
          return e == null ? void 0 : e.regId;
        });
    }
    function s(e, t, n) {
      return o("WAWebCryptoLibrary").createSignalSession({
        deviceId: t,
        sessionInfo: u(e),
        sessionScope: n,
      });
    }
    function u(e) {
      var t = e.kyberKey;
      return {
        identity: new Uint8Array(e.identityKey),
        oneTimeKey:
          e.preKey != null
            ? {
                id: e.preKey.keyId,
                publicKey: new Uint8Array(e.preKey.publicKey),
              }
            : null,
        regId: e.registrationId,
        signedKey: {
          id: e.signedPreKey.keyId,
          publicKey: new Uint8Array(e.signedPreKey.publicKey),
          signature: new Uint8Array(e.signedPreKey.signature),
        },
        kyberKey:
          t != null
            ? {
                id: t.keyId,
                publicKey: new Uint8Array(t.publicKey),
                signature: new Uint8Array(t.signature),
              }
            : null,
      };
    }
    function c(e, t, n) {
      return o("WAWebCryptoLibrary").processSenderKeyDistributionMsg(e, t, n);
    }
    ((l.getRemoteRegId = e),
      (l.createSignalSession = s),
      (l.toRawInitialSessionInfo = u),
      (l.createGroupSenderSignalSession = c));
  },
  98,
);
