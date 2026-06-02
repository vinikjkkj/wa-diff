__d(
  "WAWebCryptoLibrarySenderkeySessionConversionApi",
  [
    "invariant",
    "WAByteArray",
    "WAPromiseReduce",
    "WASignalGroupSession",
    "WASignalOther",
    "WAWebCryptoLibrarySignalGroupUtilsApi",
  ],
  function (t, n, r, o, a, i, l, s) {
    async function e(e) {
      var t = e.sessions,
        n = await o("WAPromiseReduce").promiseReduce(
          t,
          async function (e, t, n) {
            var r = await u(t);
            return e == null
              ? o("WASignalGroupSession").makeNewSenderKeySession(r)
              : o("WASignalGroupSession").updateSessionWithNewSenderKeyState(
                  e,
                  r,
                );
          },
          null,
        );
      return (n != null || s(0, 72944), n);
    }
    async function u(e) {
      for (
        var t =
            e.signatureKey.pubKey !== void 0
              ? new Uint8Array(e.signatureKey.pubKey)
              : new Uint8Array(e.signatureKey),
          n = e.signatureKey.privKey
            ? o("WASignalOther").ensureSize(
                new Uint8Array(e.signatureKey.privKey),
                32,
              )
            : void 0,
          r = o("WASignalGroupSession").makeSenderKeyChainKey(
            e.chainKey.counter,
            o("WASignalOther").ensureSize(new Uint8Array(e.chainKey.key), 32),
          ),
          a = e.keyId,
          i = [],
          l = async function (n) {
            if (e.messageKeys[n]) {
              var t = e.messageKeys[n],
                r = await o("WASignalOther")
                  .hkdf(new Uint8Array(t), null, "WhisperGroup", 50)
                  .then(function (e) {
                    return o("WASignalGroupSession").makeSenderKeyMsgKey(n, e);
                  });
              i.push(r);
            }
          },
          s = 0;
        s < e.messageKeys.length;
        s++
      )
        await l(s);
      var u = i,
        c = o("WASignalGroupSession").makeSenderKeyState(t, n, r, a, u);
      return c;
    }
    function c(e) {
      var t = [],
        n = o(
          "WAWebCryptoLibrarySignalGroupUtilsApi",
        ).makeLibsignalSenderKeyChainKey(
          e.senderKeyChainKey.nextMsgIndex,
          o("WAByteArray").uint8ArrayToBuffer(e.senderKeyChainKey.chainKey),
        ),
        r = e.senderKeyId,
        a = e.senderSigningKeyPrivate,
        i =
          a != null
            ? o(
                "WAWebCryptoLibrarySignalGroupUtilsApi",
              ).makeLibsignalSenderKeySignatureKey(
                o("WAByteArray").uint8ArrayToBuffer(e.senderSigningKeyPublic),
                o("WAByteArray").uint8ArrayToBuffer(a),
              )
            : o(
                "WAWebCryptoLibrarySignalGroupUtilsApi",
              ).makeLibsignalSenderKeySignatureKey(
                o("WAByteArray").uint8ArrayToBuffer(e.senderSigningKeyPublic),
              ),
        l = o(
          "WAWebCryptoLibrarySignalGroupUtilsApi",
        ).makeLibsignalSenderKeyState(i, n, r, t);
      return l;
    }
    function d(e) {
      var t = e.senderKeyStates,
        n = t.map(function (e) {
          return c(e);
        });
      return o(
        "WAWebCryptoLibrarySignalGroupUtilsApi",
      ).makeNewLibsignalSenderKeySession(n);
    }
    ((l.toCryptoManagerSenderKeySession = e), (l.toSignalSenderKeySession = d));
  },
  98,
);
