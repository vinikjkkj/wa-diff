__d(
  "WAWebLabyrinthWasmCreateBackup",
  [
    "WABase64",
    "WALongInt",
    "WAResultOrError",
    "WAWebEBLabyrinthWaWasmReactorSingleton",
    "WAWebLabyrinthCanonicalUserFbid",
    "WAWebLabyrinthWaWasm.pb",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "2AACDEFHJKLMNPQRSTUVWXYZ012345678901XXXX";
    function s(e) {
      return e.error != null
        ? o("WAResultOrError").makeError("wasm-error")
        : e.device == null ||
            e.virtualDevice == null ||
            e.epoch0 == null ||
            e.mailboxRootKey == null
          ? o("WAResultOrError").makeError("missing-output")
          : o("WAResultOrError").makeResult(e);
    }
    function u(e) {
      var t = e.device,
        n = e.virtualDevice,
        r = e.epoch0,
        a = e.mailboxRootKey,
        i = n == null ? void 0 : n.encryptedSecretValues,
        l = r == null ? void 0 : r.epochRootKey;
      return t == null ||
        n == null ||
        r == null ||
        a == null ||
        i == null ||
        l == null
        ? null
        : {
            device: {
              publicKey: o("WABase64").encodeB64(t.publicKey),
              epochAuthPublicKey: o("WABase64").encodeB64(t.epochAuthPublicKey),
              epochAuthPublicKeySig: o("WABase64").encodeB64(
                t.epochAuthPublicKeySig,
              ),
              epochStoragePublicKey: o("WABase64").encodeB64(
                t.epochStoragePublicKey,
              ),
              epochStoragePublicKeySig: o("WABase64").encodeB64(
                t.epochStoragePublicKeySig,
              ),
              epochStoragePrivateKey: o("WABase64").encodeB64(
                t.epochStoragePrivateKey,
              ),
              supportedEncryptionVersions: t.supportedEncryptionVersions,
              encryptionVersionSignature: o("WABase64").encodeB64(
                t.encryptionVersionSignature,
              ),
              clientVersion: t.clientVersion,
              ocmfClientState: o("WABase64").encodeB64(t.ocmfClientState),
            },
            virtualDevice: {
              vdId: o("WABase64").encodeB64(n.vdId),
              vdPublicKey: o("WABase64").encodeB64(n.vdPublicKey),
              vdEpochStoragePublicKey: o("WABase64").encodeB64(
                n.vdEpochStoragePublicKey,
              ),
              vdEpochStoragePublicKeySig: o("WABase64").encodeB64(
                n.vdEpochStoragePublicKeySig,
              ),
              encryptedSecretValues: {
                encryptedDevicePrivateKey: o("WABase64").encodeB64(
                  i.encryptedDevicePrivateKey,
                ),
                encryptedEpochAnonId: o("WABase64").encodeB64(
                  i.encryptedEpochAnonId,
                ),
                encryptedEpochRootKey: o("WABase64").encodeB64(
                  i.encryptedEpochRootKey,
                ),
                encryptedEpochStoragePrivateKey: o("WABase64").encodeB64(
                  i.encryptedEpochStoragePrivateKey,
                ),
                encryptedMailboxRootKeyBlob: o("WABase64").encodeB64(
                  i.encryptedMailboxRootKeyBlob,
                ),
                encryptedObliviousValidationTokenBlob: o("WABase64").encodeB64(
                  i.encryptedObliviousValidationTokenBlob,
                ),
                encryptedOcmfClientState: o("WABase64").encodeB64(
                  i.encryptedOcmfClientState,
                ),
                encryptedOrfClientStateV2:
                  i.encryptedOrfClientStateV2 != null
                    ? o("WABase64").encodeB64(i.encryptedOrfClientStateV2)
                    : null,
              },
              deviceEpochHmac: o("WABase64").encodeB64(n.deviceEpochHmac),
              ocmfRotationToken: o("WABase64").encodeB64(n.ocmfRotationToken),
            },
            epoch0: {
              epochAnonId: o("WABase64").encodeB64(r.epochAnonId),
              epochData: o("WABase64").encodeB64(r.epochData),
              epochFbid: o("WALongInt").longIntToDecimalString(r.epochFbid),
              epochRootKey: o("WABase64").encodeB64(l),
              wrappedRootKeyForSelf: o("WABase64").encodeB64(
                r.wrappedRootKeyForSelf,
              ),
              epochSignature: o("WABase64").encodeB64(r.epochSignature),
              epochRootKeyFingerprint: o("WABase64").encodeB64(
                r.epochRootKeyFingerprint,
              ),
            },
            mailboxRootKey: o("WABase64").encodeB64(a),
          };
    }
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield o(
            "WAWebEBLabyrinthWaWasmReactorSingleton",
          ).labyrinthWaCommand(
            {
              InputSpec: o("WAWebLabyrinthWaWasm.pb").LabyrinthWaCommandSpec,
              ResultSpec: o("WAWebLabyrinthWaWasm.pb").CreateBackupOutputSpec,
              validateResult: s,
            },
            {
              createBackupInput: {
                recoveryCode: e,
                userId: o("WALongInt").decimalStringToLongInt(
                  o("WAWebLabyrinthCanonicalUserFbid").getWaCanonicalUserFbid(),
                ),
              },
            },
          );
          if (!t.success) return t;
          var n = u(t.value);
          return n == null
            ? o("WAResultOrError").makeError("missing-output")
            : o("WAResultOrError").makeResult(n);
        })),
        d.apply(this, arguments)
      );
    }
    l.createBackupWasm = c;
  },
  98,
);
