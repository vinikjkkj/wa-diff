__d(
  "WAWebLabyrinthEnrollmentGQLFields",
  ["WABase64"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n = e.enrollment,
        r = e.localDeviceId;
      return {
        base_epoch_id: e.activeEpochId,
        device_epoch_hmac: (t = o("WABase64")).encodeB64(n.deviceEpochHmac),
        device_id: r,
        device_public_key: t.encodeB64(n.devicePublicKey),
        device_registration_id: r,
        encryption_version_data: {
          client_version: n.clientVersion,
          supported_encryption_versions: n.supportedEncryptionVersions,
          version_sig: t.encodeB64(n.encryptionVersionSignature),
        },
        epoch_auth_public_key: t.encodeB64(n.epochAuthPublicKey),
        epoch_auth_public_key_sig: t.encodeB64(n.epochAuthPublicKeySig),
        epoch_root_key_fingerprint: t.encodeB64(n.epochRootKeyFingerprint),
        epoch_storage_public_key: t.encodeB64(n.epochStoragePublicKey),
        epoch_storage_public_key_sig: t.encodeB64(n.epochStoragePublicKeySig),
        orf_rotation_token: t.encodeB64(n.orfRotationToken),
      };
    }
    l.enrollmentToGQLFields = e;
  },
  98,
);
