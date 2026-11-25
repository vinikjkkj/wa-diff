__d(
  "LSSecureKeyReturningSprocs",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Set([
      "decryptMessageProtobufsV2",
      "decryptVirtualDeviceSecretsForDeviceAdditionV2",
      "deriveEncryptionKeysV2",
      "generateInitialDeviceSetupPayload",
      "generateInitialEpochSetupPayload",
      "generateInitialVirtualDeviceSetupPayload",
      "onboardFromExistingDeviceFinish",
      "onboardFromExistingDeviceRegister",
      "prepareOpenEpoch",
      "prepareOpenEpochV2",
      "rotateDeviceKeysFinish",
      "rotateDeviceKeysRegister",
      "rotateDeviceKeysStart",
      "serializeAttachmentBackupPayload",
      "serializeBackupPayloadV2",
      "storeAuthoritativeClientState",
      "taskSerializerAcsIssueNextSync",
      "validateLocalEpochs",
    ]);
    function l(t) {
      return e.has(t);
    }
    i.isSecureKeyReturningStoredProcedure = l;
  },
  66,
);
