__d(
  "WAWebLabyrinthDebugCreateBackupController",
  [
    "WABase64",
    "WALogger",
    "WAResultOrError",
    "WAWebCreateLabyrinthBackupJob",
    "WAWebLabyrinthCanonicalUserFbid",
    "WAWebLabyrinthDebugDeviceStateStore",
    "WAWebLabyrinthEncodeEpochAnonId",
    "WAWebLabyrinthLocalDeviceId",
    "WAWebLabyrinthOpaqueTypes",
    "WAWebLabyrinthWasmCreateBackup",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g = 1;
    function h() {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield o("WAWebLabyrinthWasmCreateBackup").createBackupWasm(
            o("WAWebLabyrinthCanonicalUserFbid").getWaCanonicalUserFbid(),
          );
          if (!t.success)
            return (
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[Debug][Labyrinth] createBackupWasm failed",
                  ])),
              ),
              t
            );
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[Debug][Labyrinth] createBackupWasm success",
              ])),
          );
          var n = v();
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[Debug][Labyrinth] start nativeCreateLabyrinthBackup GQL request",
              ])),
          );
          try {
            var a = yield o(
                "WAWebCreateLabyrinthBackupJob",
              ).createLabyrinthBackup(S(t.value, n)),
              i = a.wa_labyrinth_create_backup;
            e: {
              var l = i;
              if (
                ((typeof l == "object" && l !== null) ||
                  typeof l == "function") &&
                l.__typename === "WALabyrinthCreateBackupData"
              ) {
                var _,
                  f,
                  g,
                  h,
                  y,
                  b = l;
                (o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[Debug][Labyrinth] nativeCreateLabyrinthBackup GQL request success",
                    ])),
                ),
                  yield C(t.value, {
                    backupId: (_ = b.backup_id) != null ? _ : null,
                    ebDeviceId: (f = b.device_id) != null ? f : null,
                    epochId: (g = b.epoch_id) != null ? g : null,
                    localDeviceId: n.deviceId,
                    waLabyrinthAccountId: (h = b.mailbox_id) != null ? h : null,
                    vdDeviceId: (y = b.vd_device_id) != null ? y : null,
                  }));
                break e;
              }
              if (
                ((typeof l == "object" && l !== null) ||
                  typeof l == "function") &&
                l.__typename === "WALabyrinthCreateBackupError"
              ) {
                var R = l;
                o("WALogger").ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[Debug][Labyrinth] nativeCreateLabyrinthBackup GQL request failed",
                    ])),
                );
                break e;
              }
              {
                o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[Debug][Labyrinth] native create backup GQL response",
                    ])),
                );
                break e;
              }
            }
            return o("WAResultOrError").makeResult(i);
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[Debug][Labyrinth] nativeCreateLabyrinthBackup GQL request failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e)),
              e
            );
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t.backupId,
            r = t.ebDeviceId,
            a = t.epochId,
            i = t.localDeviceId,
            l = t.vdDeviceId,
            s = t.waLabyrinthAccountId;
          if (n == null || r == null || a == null || l == null) {
            o("WALogger").ERROR(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[Debug][Labyrinth] create backup response is missing an id; nothing persisted",
                ])),
            );
            return;
          }
          var u = yield o(
            "WAWebLabyrinthDebugDeviceStateStore",
          ).saveLabyrinthDebugBackup({
            activeEpoch: {
              epochAnonId: e.epoch0.epochAnonId,
              epochRootKey: e.epoch0.epochRootKey,
              serverEpochId: a,
            },
            backupId: n,
            device: {
              ebDeviceId: r,
              epochStorageAuthPrivateKey: e.device.epochAuthPrivateKey,
              epochStoragePrivateKey: e.device.epochStoragePrivateKey,
              localDeviceId: i,
              mailboxRootSalt: e.mailboxRootKey,
              orfClientState: e.device.ocmfClientState,
            },
            virtualDevice: { vdDeviceId: l },
            waLabyrinthAccountId: s,
          });
          u.success ||
            o("WALogger")
              .ERROR(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[Debug][Labyrinth] failed to persist the created backup",
                  ])),
              )
              .catching(u.error.error);
        })),
        b.apply(this, arguments)
      );
    }
    function v() {
      var e = o("WAWebLabyrinthLocalDeviceId").getLiveDeviceId();
      if (e == null)
        throw r("err")(
          "Debug.labyrinthCreateBackupNativeWasm requires a live WA Web device id",
        );
      return { deviceId: e, familyDeviceId: e, deviceRegistrationId: e };
    }
    function S(e, t) {
      var n,
        r = e.device,
        a = e.epoch0,
        i = e.mailboxRootKey,
        l = e.virtualDevice,
        s = l.encryptedSecretValues;
      return {
        device: {
          public_key: (n = o("WABase64")).encodeB64(r.publicKey),
          epoch_auth_public_key: n.encodeB64(r.epochAuthPublicKey),
          epoch_auth_public_key_sig: n.encodeB64(r.epochAuthPublicKeySig),
          epoch_storage_public_key: n.encodeB64(r.epochStoragePublicKey),
          epoch_storage_public_key_sig: n.encodeB64(r.epochStoragePublicKeySig),
          supported_encryption_versions: r.supportedEncryptionVersions,
          encryption_version_signature: n.encodeB64(
            r.encryptionVersionSignature,
          ),
          client_version: r.clientVersion,
          device_registration_id: t.deviceRegistrationId,
          device_id: t.deviceId,
          family_device_id: t.familyDeviceId,
          device_epoch_hmac: n.encodeB64(r.deviceEpochHmac),
        },
        virtual_device: {
          vd_id: n.encodeB64(l.vdId),
          vd_public_key: n.encodeB64(l.vdPublicKey),
          vd_epoch_storage_public_key: n.encodeB64(l.vdEpochStoragePublicKey),
          vd_epoch_storage_public_key_sig: n.encodeB64(
            l.vdEpochStoragePublicKeySig,
          ),
          encrypted_secret_values: o(
            "WAWebLabyrinthOpaqueTypes",
          ).makeEncryptedSecretValuesJson(
            JSON.stringify({
              encrypted_device_private_key: n.encodeB64(
                s.encryptedDevicePrivateKey,
              ),
              encrypted_epoch_anon_id: n.encodeB64(s.encryptedEpochAnonId),
              encrypted_epoch_root_key: n.encodeB64(s.encryptedEpochRootKey),
              encrypted_epoch_storage_private_key: n.encodeB64(
                s.encryptedEpochStoragePrivateKey,
              ),
              encrypted_mailbox_root_key_blob: n.encodeB64(
                s.encryptedMailboxRootKeyBlob,
              ),
              encrypted_oblivious_validation_token_blob: n.encodeB64(
                s.encryptedObliviousValidationTokenBlob,
              ),
              encrypted_ocmf_client_state: n.encodeB64(
                s.encryptedOcmfClientState,
              ),
            }),
          ),
          device_epoch_hmac: n.encodeB64(l.deviceEpochHmac),
          ocmf_rotation_token: n.encodeB64(l.ocmfRotationToken),
          vd_type: g,
        },
        epoch_0: {
          epoch_anon_id: o(
            "WAWebLabyrinthEncodeEpochAnonId",
          ).encodeLabyrinthEpochAnonId(a.epochAnonId),
          epoch_root_key_fingerprint: n.encodeB64(a.epochRootKeyFingerprint),
        },
        mailbox_root_key: n.encodeB64(i),
      };
    }
    l.createLabyrinthDebugBackup = h;
  },
  98,
);
