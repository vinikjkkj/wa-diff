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
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function () {
        function t() {}
        var r = t.prototype;
        return (
          (r.createSenderKeyDistributionMsg = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n, r) {
                var a = yield e(n, r);
                if (!a.success && a.error === "errLoadSenderKeySession") {
                  var i = yield o("WASignalKeys").makeKeyPair();
                  (yield o("WAWebCryptoLibrary")
                    .getCryptoLibModule()
                    .rotateGroupSenderKey({ saveSenderKeySession: t }, n, r, i),
                    (a = yield e(n, r)));
                }
                if (a.success) {
                  var l = a.value.senderKeyStates.slice(-1);
                  if (l.length > 0)
                    return o("WAResultOrError").makeResult(
                      o("WASignalGroupCipher").createSenderKeyDistributionProto(
                        o(
                          "WASignalGroupSession",
                        ).convertFromRawToSenderKeyState(l[0]),
                      ),
                    );
                }
                return o("WAResultOrError").makeError("errGetSenderKeyProto");
              },
            );
            function t(t, n, r, o) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.getSessionAliceBaseKey = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = yield t(e);
                return n != null && n.aliceBaseKey
                  ? o("WAResultOrError").makeResult(
                      o("WASignalOther").toBuffer(n.aliceBaseKey),
                    )
                  : o("WAResultOrError").makeError("errSessionExists");
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.extractIdentityKey = function (n) {
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
          (r.verifySignature = function (t, n, r) {
            var e =
                o("WASignalSignatures").convertPublicKeyToSerializedPubKey(t),
              a = o("WASignalOther").ensureSize(r, 64);
            return o("WASignalSignatures").verifyMsgSignalVariant(e, n, a);
          }),
          (r.signMsg = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n) {
                var r = o("WASignalKeys").makeKeyPairFromArrayBuffers(e, t),
                  a = yield o("WASignalSignatures").signMsg(
                    r,
                    new Uint8Array(n),
                  );
                return o("WASignalOther").toBuffer(a);
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.makePreKey = function (t) {
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
          (r.makeSignedPreKey = function (t, n) {
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
          (r.makeKeyPair = function () {
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
