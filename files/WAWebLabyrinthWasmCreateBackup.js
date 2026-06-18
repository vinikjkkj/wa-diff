__d(
  "WAWebLabyrinthWasmCreateBackup",
  [
    "EBLabyrinthWaWasmReactorSingleton",
    "WABase64",
    "WALongInt",
    "WAResultOrError",
    "WAWebLabyrinthDebugStateCache",
    "WAWebLabyrinthWaWasm.pb",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "2AACDEFHJKLMNPQRSTUVWXYZ012345678901XXXX",
      s = "12345";
    function u(e) {
      return e.error != null
        ? o("WAResultOrError").makeError("wasm-error")
        : e.device == null ||
            e.virtualDevice == null ||
            e.epoch0 == null ||
            e.mailboxRootKey == null
          ? o("WAResultOrError").makeError("missing-output")
          : o("WAResultOrError").makeResult(e);
    }
    function c(e) {
      var t,
        n = (t = e.virtualDevice) == null ? void 0 : t.encryptedSecretValues;
      return n == null
        ? "{}"
        : JSON.stringify({
            encrypted_device_private_key: o("WABase64").encodeB64(
              n.encryptedDevicePrivateKey,
            ),
            encrypted_epoch_anon_id: o("WABase64").encodeB64(
              n.encryptedEpochAnonId,
            ),
            encrypted_epoch_root_key: o("WABase64").encodeB64(
              n.encryptedEpochRootKey,
            ),
            encrypted_epoch_storage_private_key: o("WABase64").encodeB64(
              n.encryptedEpochStoragePrivateKey,
            ),
            encrypted_mailbox_root_key_blob: o("WABase64").encodeB64(
              n.encryptedMailboxRootKeyBlob,
            ),
            encrypted_oblivious_validation_token_blob: o("WABase64").encodeB64(
              n.encryptedObliviousValidationTokenBlob,
            ),
            encrypted_ocmf_client_state: o("WABase64").encodeB64(
              n.encryptedOcmfClientState,
            ),
            encrypted_orf_client_state_v2:
              n.encryptedOrfClientStateV2 != null
                ? o("WABase64").encodeB64(n.encryptedOrfClientStateV2)
                : null,
          });
    }
    function d(e) {
      var t = e.device,
        n = e.virtualDevice,
        r = e.epoch0,
        a = e.mailboxRootKey;
      return t == null || n == null || r == null || a == null
        ? null
        : {
            device: {
              public_key: o("WABase64").encodeB64(t.publicKey),
              epoch_auth_public_key: o("WABase64").encodeB64(
                t.epochAuthPublicKey,
              ),
              epoch_auth_public_key_sig: o("WABase64").encodeB64(
                t.epochAuthPublicKeySig,
              ),
              epoch_storage_public_key: o("WABase64").encodeB64(
                t.epochStoragePublicKey,
              ),
              epoch_storage_public_key_sig: o("WABase64").encodeB64(
                t.epochStoragePublicKeySig,
              ),
              supported_encryption_versions: t.supportedEncryptionVersions,
              encryption_version_signature: o("WABase64").encodeB64(
                t.encryptionVersionSignature,
              ),
              client_version: t.clientVersion,
              device_registration_id: null,
              ocmf_client_state: o("WABase64").encodeB64(t.ocmfClientState),
              device_id: null,
              family_device_id: null,
            },
            virtual_device: {
              vd_id: o("WABase64").encodeB64(n.vdId),
              vd_public_key: o("WABase64").encodeB64(n.vdPublicKey),
              vd_epoch_storage_public_key: o("WABase64").encodeB64(
                n.vdEpochStoragePublicKey,
              ),
              vd_epoch_storage_public_key_sig: o("WABase64").encodeB64(
                n.vdEpochStoragePublicKeySig,
              ),
              encrypted_secret_values: c(e),
              device_epoch_hmac: o("WABase64").encodeB64(n.deviceEpochHmac),
              ocmf_rotation_token: o("WABase64").encodeB64(n.ocmfRotationToken),
              vd_type: "OFFLINE",
            },
            epoch_0: {
              epoch_anon_id: o("WABase64").encodeB64(r.epochAnonId),
              epoch_data: o("WABase64").encodeB64(r.epochData),
              wrapped_root_key_for_self: o("WABase64").encodeB64(
                r.wrappedRootKeyForSelf,
              ),
              epoch_signature: o("WABase64").encodeB64(r.epochSignature),
              epoch_root_key_fingerprint: o("WABase64").encodeB64(
                r.epochRootKeyFingerprint,
              ),
            },
            mailbox_root_key: o("WABase64").encodeB64(a),
          };
    }
    function m(e) {
      var t = e.device,
        n = e.virtualDevice,
        r = e.epoch0,
        a = e.mailboxRootKey,
        i = n == null ? void 0 : n.encryptedSecretValues,
        l = r == null ? void 0 : r.epochRootKey;
      t == null ||
        n == null ||
        r == null ||
        a == null ||
        i == null ||
        l == null ||
        o("WAWebLabyrinthDebugStateCache").setLabyrinthDebugKeyMaterialCache({
          epochAnonId: o("WABase64").encodeB64(r.epochAnonId),
          epochRootKey: o("WABase64").encodeB64(l),
          mailboxRootKey: o("WABase64").encodeB64(a),
          orfClientState: o("WABase64").encodeB64(t.ocmfClientState),
        });
    }
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield o(
            "EBLabyrinthWaWasmReactorSingleton",
          ).labyrinthWaCommand(
            {
              InputSpec: o("WAWebLabyrinthWaWasm.pb").LabyrinthWaCommandSpec,
              ResultSpec: o("WAWebLabyrinthWaWasm.pb").CreateBackupOutputSpec,
              validateResult: u,
            },
            {
              createBackupInput: {
                recoveryCode: e,
                userId: o("WALongInt").decimalStringToLongInt(s),
              },
            },
          );
          if (!t.success) return t;
          m(t.value);
          var n = d(t.value);
          return n == null
            ? o("WAResultOrError").makeError("missing-output")
            : o("WAResultOrError").makeResult(n);
        })),
        _.apply(this, arguments)
      );
    }
    l.createBackupWasm = p;
  },
  98,
);
