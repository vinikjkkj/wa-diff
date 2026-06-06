__d(
  "WAWebCryptoLibraryUtilsApi",
  [
    "WACryptoPrimitives",
    "WALogger",
    "WAResultOrError",
    "WASignalCipher",
    "WASignalGroupCipher",
    "WASignalGroupSession",
    "WASignalKeys",
    "WASignalOther",
    "WASignalSessions",
    "WASignalSignatures",
    "WASignalWhisperTextProtocol.pb",
    "WATimeUtils",
    "WAWebCryptoLibrary",
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function () {
        function t() {}
        var n = t.prototype;
        return (
          (n.createSenderKeyDistributionMsg = async function (t, n, r, a) {
            var e = await t(r, a);
            if (!e.success && e.error === "errLoadSenderKeySession") {
              var i = await o("WASignalKeys").makeKeyPair();
              (await o("WAWebCryptoLibrary")
                .getCryptoLibModule()
                .rotateGroupSenderKey({ saveSenderKeySession: n }, r, a, i),
                (e = await t(r, a)));
            }
            if (e.success) {
              var l = e.value.senderKeyStates.slice(-1);
              if (l.length > 0)
                return o("WAResultOrError").makeResult(
                  o("WASignalGroupCipher").createSenderKeyDistributionProto(
                    o("WASignalGroupSession").convertFromRawToSenderKeyState(
                      l[0],
                    ),
                  ),
                );
            }
            return o("WAResultOrError").makeError("errGetSenderKeyProto");
          }),
          (n.getSessionAliceBaseKey = async function (t, n) {
            var e = await n(t);
            return e != null && e.aliceBaseKey
              ? o("WAResultOrError").makeResult(
                  o("WASignalOther").toBuffer(e.aliceBaseKey),
                )
              : o("WAResultOrError").makeError("errSessionExists");
          }),
          (n.extractIdentityKey = function (n) {
            var t = o("WASignalCipher").readContent(
              n,
              o("WASignalSessions").FORMAT_VERSION,
              0,
            );
            if (!t.success) return t;
            try {
              var r = o("decodeProtobuf").decodeProtobuf(
                  o("WASignalWhisperTextProtocol.pb").PreKeySignalMessageSpec,
                  t.value,
                ),
                a = r.baseKey,
                i = r.identityKey,
                l = r.message,
                s = r.registrationId,
                u = r.signedPreKeyId;
              return s == null ||
                u == null ||
                a == null ||
                i == null ||
                l == null
                ? o("WAResultOrError").makeError(
                    "errSignalDeserializePkInvalidProtoFormat",
                  )
                : (o("WASignalOther").ensureSize(new Uint8Array(i), 33),
                  o("WAResultOrError").makeResult(i));
            } catch (t) {
              return (
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "extractIdentityKey: parse proto failed",
                    ])),
                ),
                o("WAResultOrError").makeError(
                  "errSignalDeserializePkKeyBadFormat",
                )
              );
            }
          }),
          (n.verifySignature = function (t, n, r) {
            var e =
                o("WASignalSignatures").convertPublicKeyToSerializedPubKey(t),
              a = o("WASignalOther").ensureSize(r, 64);
            return o("WASignalSignatures").verifyMsgSignalVariant(e, n, a);
          }),
          (n.signMsg = async function (t, n, r) {
            var e = o("WASignalKeys").makeKeyPairFromArrayBuffers(t, n),
              a = await o("WASignalSignatures").signMsg(e, new Uint8Array(r));
            return o("WASignalOther").toBuffer(a);
          }),
          (n.makePreKey = function (t) {
            var e = o("WASignalKeys").makePreKeys(t, 1),
              n = e[0].plainObject,
              r = n.id,
              a = n.keyPair;
            return {
              preKeyId: r,
              privKey: o("WASignalOther").toBuffer(a.privateKey),
              pubKey: o("WASignalOther").toBuffer(a.publicKey),
            };
          }),
          (n.makeSignedPreKey = function (t, n) {
            var e = o("WASignalKeys").makeKeyPairFromArrayBuffers(
                t.pubKey,
                t.privKey,
              ),
              r = o("WASignalSignatures").makeSignedPreKey(
                n,
                o("WATimeUtils").unixTimeMs(),
                e,
              );
            return {
              preKeyId: r.id,
              signature: o("WASignalOther").toBuffer(r.signature),
              pubKey: o("WASignalOther").toBuffer(r.keyPair.publicKey),
              privKey: o("WASignalOther").toBuffer(r.keyPair.privateKey),
            };
          }),
          (n.makeKeyPair = function () {
            var e = o("WASignalKeys").makeKeyPair(),
              t = e.privateKey,
              n = e.publicKey;
            return {
              privKey: o("WASignalOther").toBuffer(t),
              pubKey: o("WASignalOther").toBuffer(n),
            };
          }),
          t
        );
      })();
    ((s.prototype.verify = o("WACryptoPrimitives").verify),
      (s.prototype.makeRegistrationId = o("WASignalOther").makeRegistrationId),
      (s.prototype.makeSenderKeyId = o("WASignalOther").makeSenderKeyId));
    var u = new s(),
      c = u;
    l.default = c;
  },
  98,
);
