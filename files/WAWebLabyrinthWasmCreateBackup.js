__d(
  "WAWebLabyrinthWasmCreateBackup",
  [
    "WALongInt",
    "WAResultOrError",
    "WAWebEBLabyrinthWaWasmReactorSingleton",
    "WAWebLabyrinthOpaqueTypes",
    "WAWebLabyrinthWaWasm.pb",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("WAWebLabyrinthOpaqueTypes").makeRecoveryCode(
      "2AACDEFHJKLMNPQRSTUVWXYZ012345678901XXXX",
    );
    function s(e) {
      var t = e.error,
        n = e.success;
      if (t != null) return o("WAResultOrError").makeError("wasm-error");
      if (n == null) return o("WAResultOrError").makeError("missing-output");
      var r = o("WAWebLabyrinthOpaqueTypes").parseEpochAnonId(
        n.epoch0.epochAnonId,
      );
      return r.success
        ? o("WAResultOrError").makeResult(u(n, r.value))
        : o("WAResultOrError").makeError("wasm-error");
    }
    function u(e, t) {
      var n,
        r = e.device,
        a = e.epoch0,
        i = e.mailboxRootKey,
        l = e.virtualDevice,
        s = l.encryptedSecretValues;
      return {
        device: {
          publicKey: (n = o(
            "WAWebLabyrinthOpaqueTypes",
          )).makeDeviceKeyPublicKey(r.publicKey),
          epochAuthPublicKey: n.makeEpochStorageAuthPublicKey(
            r.epochAuthPublicKey,
          ),
          epochAuthPublicKeySig: n.makeEpochStorageAuthKeySignature(
            r.epochAuthPublicKeySig,
          ),
          epochStoragePublicKey: n.makeEpochStoragePublicKey(
            r.epochStoragePublicKey,
          ),
          epochStoragePublicKeySig: n.makeEpochStorageKeySignature(
            r.epochStoragePublicKeySig,
          ),
          epochStoragePrivateKey: n.makeEpochStoragePrivateKey(
            r.epochStoragePrivateKey,
          ),
          epochAuthPrivateKey: n.makeEpochStorageAuthPrivateKey(
            r.epochAuthPrivateKey,
          ),
          supportedEncryptionVersions: r.supportedEncryptionVersions.map(
            n.makeEncryptionVersion,
          ),
          encryptionVersionSignature: n.makeEncryptionVersionSignature(
            r.encryptionVersionSignature,
          ),
          clientVersion: n.makeClientVersion(r.clientVersion),
          ocmfClientState: n.makeOrfClientState(r.ocmfClientState),
          deviceEpochHmac: n.makeDeviceEpochHmac(r.deviceEpochHmac),
        },
        virtualDevice: {
          vdId: n.makeVirtualDeviceId(l.vdId),
          vdPublicKey: n.makeDeviceKeyPublicKey(l.vdPublicKey),
          vdEpochStoragePublicKey: n.makeEpochStoragePublicKey(
            l.vdEpochStoragePublicKey,
          ),
          vdEpochStoragePublicKeySig: n.makeEpochStorageKeySignature(
            l.vdEpochStoragePublicKeySig,
          ),
          encryptedSecretValues: {
            encryptedDevicePrivateKey: n.makeEncryptedVirtualDevicePrivateKey(
              s.encryptedDevicePrivateKey,
            ),
            encryptedEpochAnonId: n.makeEncryptedVirtualDeviceEpochAnonId(
              s.encryptedEpochAnonId,
            ),
            encryptedEpochRootKey: n.makeEncryptedVirtualDeviceEpochRootKey(
              s.encryptedEpochRootKey,
            ),
            encryptedEpochStoragePrivateKey:
              n.makeEncryptedVirtualDeviceEpochStoragePrivateKey(
                s.encryptedEpochStoragePrivateKey,
              ),
            encryptedMailboxRootKeyBlob:
              n.makeEncryptedVirtualDeviceMailboxRootSalt(
                s.encryptedMailboxRootKeyBlob,
              ),
            encryptedObliviousValidationTokenBlob:
              n.makeEncryptedObliviousValidationToken(
                s.encryptedObliviousValidationTokenBlob,
              ),
            encryptedOcmfClientState:
              n.makeEncryptedVirtualDeviceOrfClientState(
                s.encryptedOcmfClientState,
              ),
          },
          deviceEpochHmac: n.makeDeviceEpochHmac(l.deviceEpochHmac),
          ocmfRotationToken: n.makeEvolveToken(l.ocmfRotationToken),
        },
        epoch0: {
          epochAnonId: t,
          epochRootKey: n.makeEpochRootKey(a.epochRootKey),
          epochRootKeyFingerprint: n.makeEpochRootKeyFingerprint(
            a.epochRootKeyFingerprint,
          ),
        },
        mailboxRootKey: n.makeMailboxRootSalt(i),
      };
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          return yield o(
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
                userId: o("WALongInt").decimalStringToLongInt(t),
              },
            },
          );
        })),
        d.apply(this, arguments)
      );
    }
    l.createBackupWasm = c;
  },
  98,
);
