__d(
  "WAWebMexCreateLabyrinthBackupJob",
  [
    "WAWebLabyrinthDebugStateCache",
    "WAWebMexClient",
    "WAWebMexCreateLabyrinthBackupJobMutation.graphql",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebMexCreateLabyrinthBackupJobMutation.graphql"));
    function u(e, t) {
      var n = e.device,
        r = e.epoch0,
        o = e.mailboxRootKey,
        a = e.virtualDevice,
        i = a.encryptedSecretValues;
      return {
        device: {
          public_key: n.publicKey,
          epoch_auth_public_key: n.epochAuthPublicKey,
          epoch_auth_public_key_sig: n.epochAuthPublicKeySig,
          epoch_storage_public_key: n.epochStoragePublicKey,
          epoch_storage_public_key_sig: n.epochStoragePublicKeySig,
          supported_encryption_versions: n.supportedEncryptionVersions,
          encryption_version_signature: n.encryptionVersionSignature,
          client_version: n.clientVersion,
          device_registration_id: t.deviceRegistrationId,
          ocmf_client_state: n.ocmfClientState,
          device_id: t.deviceId,
          family_device_id: t.familyDeviceId,
        },
        virtual_device: {
          vd_id: a.vdId,
          vd_public_key: a.vdPublicKey,
          vd_epoch_storage_public_key: a.vdEpochStoragePublicKey,
          vd_epoch_storage_public_key_sig: a.vdEpochStoragePublicKeySig,
          encrypted_secret_values: JSON.stringify({
            encrypted_device_private_key: i.encryptedDevicePrivateKey,
            encrypted_epoch_anon_id: i.encryptedEpochAnonId,
            encrypted_epoch_root_key: i.encryptedEpochRootKey,
            encrypted_epoch_storage_private_key:
              i.encryptedEpochStoragePrivateKey,
            encrypted_mailbox_root_key_blob: i.encryptedMailboxRootKeyBlob,
            encrypted_oblivious_validation_token_blob:
              i.encryptedObliviousValidationTokenBlob,
            encrypted_ocmf_client_state: i.encryptedOcmfClientState,
            encrypted_orf_client_state_v2: i.encryptedOrfClientStateV2,
          }),
          device_epoch_hmac: a.deviceEpochHmac,
          ocmf_rotation_token: a.ocmfRotationToken,
          vd_type: "OFFLINE",
        },
        epoch_0: {
          epoch_anon_id: r.epochAnonId,
          epoch_data: r.epochData,
          wrapped_root_key_for_self: r.wrappedRootKeyForSelf,
          epoch_signature: r.epochSignature,
          epoch_root_key_fingerprint: r.epochRootKeyFingerprint,
        },
        mailbox_root_key: o,
      };
    }
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = u(e, t),
            r = { input: n },
            a = yield o("WAWebMexClient").fetchQuery(s, r);
          return (m(e, a), a);
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      var n = t.xwa2_labyrinth_create_backup;
      (n == null ? void 0 : n.__typename) === "XWA2LabyrinthCreateBackupData" &&
        o("WAWebLabyrinthDebugStateCache").setLabyrinthDebugKeyMaterialCache({
          backupId: n.backup_id,
          ebDeviceId: n.device_id,
          epochAnonId: e.epoch0.epochAnonId,
          epochId: n.epoch_id,
          epochRootKey: e.epoch0.epochRootKey,
          mailboxRootKey: e.mailboxRootKey,
          orfClientState: e.device.ocmfClientState,
        });
    }
    l.mexCreateLabyrinthBackup = c;
  },
  98,
);
