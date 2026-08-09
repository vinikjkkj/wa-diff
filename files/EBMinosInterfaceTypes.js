__d(
  "EBMinosInterfaceTypes",
  [
    "EBMinosMessageEncryptionVersion",
    "EBMinosMessageMetadataVersion",
    "EBMinosProcessMessages",
    "EBMinosTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    ((l.MESSAGE_METADATA_CURRENT_VERSION = o(
      "EBMinosMessageMetadataVersion",
    ).MESSAGE_METADATA_CURRENT_VERSION),
      (l.MinosMessageEncryptionVersion = o(
        "EBMinosMessageEncryptionVersion",
      ).MinosMessageEncryptionVersion),
      (l.MinosMessageMetadataVersion = o(
        "EBMinosMessageMetadataVersion",
      ).MinosMessageMetadataVersion),
      (l.castToSupplementalOpToken = (e =
        o("EBMinosTypes")).castToSupplementalOpToken),
      (l.convertArrayToMpsMessageTags = o(
        "EBMinosProcessMessages",
      ).convertArrayToMpsMessageTags),
      (l.processMinosMessages = o(
        "EBMinosProcessMessages",
      ).processMinosMessages),
      (l.unsafeCastToBackupFbid = e.unsafeCastToBackupFbid),
      (l.unsafeCastToBase64StringIntToEpochNumber =
        e.unsafeCastToBase64StringIntToEpochNumber),
      (l.unsafeCastToDecryptedMessage = e.unsafeCastToDecryptedMessage),
      (l.unsafeCastToDeviceId = e.unsafeCastToDeviceId),
      (l.unsafeCastToEncryptedMessage = e.unsafeCastToEncryptedMessage),
      (l.unsafeCastToEncryptedMessageSignature =
        e.unsafeCastToEncryptedMessageSignature),
      (l.unsafeCastToEpochCreationTime = e.unsafeCastToEpochCreationTime),
      (l.unsafeCastToEpochHead = e.unsafeCastToEpochHead),
      (l.unsafeCastToEpochSelfSig = e.unsafeCastToEpochSelfSig),
      (l.unsafeCastToMailboxAuthPK = e.unsafeCastToMailboxAuthPK),
      (l.unsafeCastToMailboxEncryptionPK = e.unsafeCastToMailboxEncryptionPK),
      (l.unsafeCastToMailboxFbId = e.unsafeCastToMailboxFbId),
      (l.unsafeCastToMailboxSigningPK = e.unsafeCastToMailboxSigningPK),
      (l.unsafeCastToMekFbId = e.unsafeCastToMekFbId),
      (l.unsafeCastToMekId = e.unsafeCastToMekId),
      (l.unsafeCastToMekMiThreadId = e.unsafeCastToMekMiThreadId),
      (l.unsafeCastToTransportSigningPK = e.unsafeCastToTransportSigningPK),
      (l.unsafeCastToUserFbId = e.unsafeCastToUserFbId),
      (l.userJidToUserFbId = e.userJidToUserFbId));
  },
  98,
);
