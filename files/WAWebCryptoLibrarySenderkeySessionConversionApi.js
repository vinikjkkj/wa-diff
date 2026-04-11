__d(
  "WAWebCryptoLibrarySenderkeySessionConversionApi",
  [
    "invariant",
    "WAByteArray",
    "WAPromiseReduce",
    "WASignalGroupSession",
    "WASignalOther",
    "WAWebCryptoLibrarySignalGroupUtilsApi",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.sessions,
            r = yield o("WAPromiseReduce").promiseReduce(
              t,
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e, t, n) {
                    var r = yield c(t);
                    return e == null
                      ? o("WASignalGroupSession").makeNewSenderKeySession(r)
                      : o(
                          "WASignalGroupSession",
                        ).updateSessionWithNewSenderKeyState(e, r);
                  },
                );
                return function (t, n, r) {
                  return e.apply(this, arguments);
                };
              })(),
              null,
            );
          return (r != null || s(0, 72944), r);
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                o("WASignalOther").ensureSize(
                  new Uint8Array(e.chainKey.key),
                  32,
                ),
              ),
              a = e.keyId,
              i = [],
              l = function* (n) {
                if (e.messageKeys[n]) {
                  var t = e.messageKeys[n],
                    r = yield o("WASignalOther")
                      .hkdf(new Uint8Array(t), null, "WhisperGroup", 50)
                      .then(function (e) {
                        return o("WASignalGroupSession").makeSenderKeyMsgKey(
                          n,
                          e,
                        );
                      });
                  i.push(r);
                }
              },
              s = 0;
            s < e.messageKeys.length;
            s++
          )
            yield* l(s);
          var u = i,
            c = o("WASignalGroupSession").makeSenderKeyState(t, n, r, a, u);
          return c;
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
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
    function p(e) {
      var t = e.senderKeyStates,
        n = t.map(function (e) {
          return m(e);
        });
      return o(
        "WAWebCryptoLibrarySignalGroupUtilsApi",
      ).makeNewLibsignalSenderKeySession(n);
    }
    ((l.toCryptoManagerSenderKeySession = e), (l.toSignalSenderKeySession = p));
  },
  98,
);
