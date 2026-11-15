__d(
  "WAWebLabyrinthWasmAddDevice",
  [
    "WALongInt",
    "WAResultOrError",
    "WAWebEBLabyrinthWaWasmReactorSingleton",
    "WAWebLabyrinthOpaqueTypes",
    "WAWebLabyrinthWaWasm.pb",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t,
              n = o("WALongInt").decimalStringToLongInt(
                e.virtualDeviceBaseEpochId,
              ),
              a = o("WALongInt").decimalStringToLongInt(e.activeEpochId);
            return yield o(
              "WAWebEBLabyrinthWaWasmReactorSingleton",
            ).labyrinthWaCommand(
              {
                InputSpec: o("WAWebLabyrinthWaWasm.pb").LabyrinthWaCommandSpec,
                ResultSpec: o("WAWebLabyrinthWaWasm.pb")
                  .PrepareAddDeviceOutputSpec,
                validateResult: u,
              },
              {
                prepareAddDeviceInput: {
                  recoveryCode: e.recoveryCode,
                  userId: o("WALongInt").decimalStringToLongInt(
                    e.waCanonicalUserFbid,
                  ),
                  encryptedSecretValuesJson: e.encryptedSecretValuesJson,
                  virtualDeviceBaseEpochId: n,
                  activeEpochId: a,
                  syncEpochs: ((t = e.syncEpochs) != null ? t : []).map(
                    function (e) {
                      return {
                        epochId: o("WALongInt").decimalStringToLongInt(
                          e.epochId,
                        ),
                        epochAnonId: e.epochAnonId,
                        encryptedEpochKey: e.encryptedEpochKey,
                        senderAuthPubKey: e.senderAuthPubKey,
                        nextEpochId:
                          e.nextEpochId == null
                            ? null
                            : o("WALongInt").decimalStringToLongInt(
                                e.nextEpochId,
                              ),
                      };
                    },
                  ),
                },
              },
            );
          } catch (e) {
            return o("WAResultOrError").makeError({
              error: r("getErrorSafe")(e),
              kind: "exception",
            });
          }
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      var t = e.error,
        n = e.success;
      return t != null
        ? o("WAResultOrError").makeError({
            error: t,
            kind: "wasm-output-error",
          })
        : n == null
          ? o("WAResultOrError").makeError({ kind: "missing-output" })
          : c(n);
    }
    function c(e) {
      if (e.supportedEncryptionVersions.length === 0)
        return o("WAResultOrError").makeError({ kind: "missing-output" });
      var t = o("WAWebLabyrinthOpaqueTypes").parseEpochAnonId(
        e.currentEpoch.epochAnonId,
      );
      return t.success
        ? o("WAResultOrError").makeResult({
            localState: d(e, t.value),
            enrollment: m(e),
          })
        : o("WAResultOrError").makeError({
            error: t.error.message,
            kind: "wasm-output-error",
          });
    }
    function d(e, t) {
      var n,
        r = e.currentEpoch,
        a = e.deviceKeys,
        i = e.mailboxRootSalt;
      return {
        devicePublicKey: (n = o(
          "WAWebLabyrinthOpaqueTypes",
        )).makeDeviceKeyPublicKey(a.devicePublicKey),
        epochStoragePublicKey: n.makeEpochStoragePublicKey(
          a.epochStoragePublicKey,
        ),
        epochStoragePrivateKey: n.makeEpochStoragePrivateKey(
          a.epochStoragePrivateKey,
        ),
        orfClientState: n.makeOrfClientState(a.orfClientState),
        currentEpoch: {
          serverEpochId: n.makeEpochId(
            o("WALongInt").longIntToDecimalString(r.serverEpochId),
          ),
          epochAnonId: t,
          epochRootKey: n.makeEpochRootKey(r.epochRootKey),
        },
        mailboxRootSalt: n.makeMailboxRootSalt(i),
      };
    }
    function m(e) {
      var t,
        n = e.clientVersion,
        r = e.deviceEpochHmac,
        a = e.deviceKeys,
        i = e.encryptionVersionSignature,
        l = e.epochRootKeyFingerprint,
        s = e.orfRotationToken,
        u = e.supportedEncryptionVersions;
      return {
        devicePublicKey: (t = o(
          "WAWebLabyrinthOpaqueTypes",
        )).makeDeviceKeyPublicKey(a.devicePublicKey),
        epochAuthPublicKey: t.makeEpochStorageAuthPublicKey(
          a.epochAuthPublicKey,
        ),
        epochAuthPublicKeySig: t.makeEpochStorageAuthKeySignature(
          a.epochAuthPublicKeySig,
        ),
        epochStoragePublicKey: t.makeEpochStoragePublicKey(
          a.epochStoragePublicKey,
        ),
        epochStoragePublicKeySig: t.makeEpochStorageKeySignature(
          a.epochStoragePublicKeySig,
        ),
        orfRotationToken: t.makeEvolveToken(s),
        deviceEpochHmac: t.makeDeviceEpochHmac(r),
        epochRootKeyFingerprint: t.makeEpochRootKeyFingerprint(l),
        supportedEncryptionVersions: u.map(t.makeEncryptionVersion),
        encryptionVersionSignature: t.makeEncryptionVersionSignature(i),
        clientVersion: t.makeClientVersion(n),
      };
    }
    ((l.prepareAddDeviceWasm = e), (l.validatePreparedAddDevice = c));
  },
  98,
);
