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
    function s(e, t, n, r) {
      var a,
        i,
        l,
        s = {
          identity: new Uint8Array(e.identityKey),
          oneTimeKey: e.preKey && {
            id: (a = e.preKey) == null ? void 0 : a.keyId,
            publicKey:
              ((i = e.preKey) == null ? void 0 : i.publicKey) &&
              new Uint8Array((l = e.preKey) == null ? void 0 : l.publicKey),
          },
          regId: e.registrationId,
          signedKey: {
            id: e.signedPreKey.keyId,
            publicKey: new Uint8Array(e.signedPreKey.publicKey),
            signature: new Uint8Array(e.signedPreKey.signature),
          },
        };
      return o("WAWebCryptoLibrary").createSignalSession(t, s, n, r);
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
