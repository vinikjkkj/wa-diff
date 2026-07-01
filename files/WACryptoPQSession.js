__d(
  "WACryptoPQSession",
  [
    "WACryptoLibraryConfig",
    "WAResultOrError",
    "WASignalKeys",
    "WASignalOther",
    "WASignalPQXDH",
    "WASignalSignatures",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 64;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          if (
            o("WACryptoLibraryConfig").getCryptoLibraryConfig()
              .isPq1on1MessageEnabled !== !0
          )
            return o("WAResultOrError").makeError("errSignalInvalidKey");
          var r = n.kyberKey;
          if (r == null)
            return o("WAResultOrError").makeError("errSignalInvalidKey");
          var a = o("WASignalKeys").castToSerializedPubKey(
              n.signedKey.publicKey,
            ),
            i = n.oneTimeKey,
            l = {
              regId: o("WASignalOther").castRegistrationId(n.regId),
              identity: o("WASignalKeys").castToSerializedPubKey(n.identity),
              signedKey: {
                id: o("WASignalKeys").castToSignedPreKeyId(n.signedKey.id),
                publicKey: a,
                signature: o("WASignalOther").ensureSize(
                  n.signedKey.signature,
                  e,
                ),
              },
              oneTimeKey:
                i != null
                  ? {
                      id: o("WASignalKeys").castToPreKeyId(i.id),
                      publicKey: o("WASignalKeys").castToSerializedPubKey(
                        i.publicKey,
                      ),
                    }
                  : null,
              ratchetKey: a,
            },
            s = o("WASignalSignatures").verifyMsgSignalVariant(
              l.identity,
              l.signedKey.publicKey,
              l.signedKey.signature,
            );
          if (!s) return o("WAResultOrError").makeError("errSignalInvalidKey");
          var u = o("WASignalOther").ensureSize(r.signature, e),
            c = o("WASignalSignatures").verifyMsgSignalVariant(
              l.identity,
              r.publicKey,
              u,
            );
          if (!c) return o("WAResultOrError").makeError("errSignalInvalidKey");
          var d = yield o("WASignalPQXDH").initiateSessionOutgoingPQ(
              t,
              l,
              o("WASignalKeys").makeKeyPair(),
              r.publicKey,
              r.id,
            ),
            m = d.kemCiphertext,
            p = d.session;
          return o("WAResultOrError").makeResult({
            session: p,
            kemCiphertext: m,
            kyberPreKeyId: r.id,
          });
        })),
        u.apply(this, arguments)
      );
    }
    l.createOutgoingSessionPQ = s;
  },
  98,
);
