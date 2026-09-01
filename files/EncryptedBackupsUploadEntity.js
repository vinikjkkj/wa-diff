__d(
  "EncryptedBackupsUploadEntity",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e instanceof ArrayBuffer ? new Uint8Array(e) : e;
    }
    var l = n("$InternalEnum").Mirrored([
        "NEEDS_BACKUP",
        "COMPLETED",
        "NEEDS_BACKUP_RETRY",
        "PERMANENT_FAILURE",
        "EXPIRED",
        "THREAD_DELETED",
        "DELETION_PURGED",
        "MESSAGE_DELETED",
        "UPLOADING",
      ]),
      s = n("$InternalEnum")({
        INVALID: "-1",
        IMAGE: "0",
        PTT: "1",
        DOCUMENT: "3",
        VIDEO: "4",
        GIF: "5",
        STICKER: "6",
        XMA: "22",
        MESSENGER_PREVIEW: "25",
      });
    ((i.toEbBackupMessageBytes = e),
      (i.EbUploadStatus = l),
      (i.AttachmentContextMediaType = s));
  },
  66,
);
