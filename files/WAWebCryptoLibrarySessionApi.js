__d(
  "WAWebCryptoLibrarySessionApi",
  ["WAWebCryptoLibrary"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebCryptoLibrary")
        .getRemoteRegId(e)
        .then(function (e) {
          return e == null ? void 0 : e.regId;
        });
    }
    function s(e, t, n) {
      var r = e.kyberKey,
        a = {
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
            r != null
              ? {
                  id: r.keyId,
                  publicKey: new Uint8Array(r.publicKey),
                  signature: new Uint8Array(r.signature),
                }
              : null,
        };
      return o("WAWebCryptoLibrary").createSignalSession({
        deviceId: t,
        sessionInfo: a,
        sessionScope: n,
      });
    }
    function u(e, t, n) {
      return o("WAWebCryptoLibrary").processSenderKeyDistributionMsg(e, t, n);
    }
    ((l.getRemoteRegId = e),
      (l.createSignalSession = s),
      (l.createGroupSenderSignalSession = u));
  },
  98,
);
