__d(
  "MAWCastToMsgrServerMediaType",
  ["EncryptedBackupsUploadEntity", "WALogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(t, n) {
      if ((n === void 0 && (n = !1), n && t === "image")) return "xma";
      switch (t) {
        case "image":
        case "video":
        case "gif":
        case "sticker":
          return t;
        case "document":
          return "file";
        case "ptt":
          return "audio";
        case "xma-image":
          return "xma";
        case "preview":
          return "preview";
        default:
          return (
            o("WALogger").ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "invalid mediaType: ",
                  " for castToMsgrServerMediaType method",
                ])),
              t,
            ),
            null
          );
      }
    }
    function c(e) {
      switch (e) {
        case o("EncryptedBackupsUploadEntity").AttachmentContextMediaType.IMAGE:
          return "image";
        case o("EncryptedBackupsUploadEntity").AttachmentContextMediaType.VIDEO:
          return "video";
        case o("EncryptedBackupsUploadEntity").AttachmentContextMediaType.GIF:
          return "gif";
        case o("EncryptedBackupsUploadEntity").AttachmentContextMediaType
          .STICKER:
          return "sticker";
        case o("EncryptedBackupsUploadEntity").AttachmentContextMediaType
          .DOCUMENT:
          return "file";
        case o("EncryptedBackupsUploadEntity").AttachmentContextMediaType.PTT:
          return "audio";
        case o("EncryptedBackupsUploadEntity").AttachmentContextMediaType.XMA:
          return "xma";
        case o("EncryptedBackupsUploadEntity").AttachmentContextMediaType
          .MESSENGER_PREVIEW:
          return "preview";
        default:
          return (
            o("WALogger").ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "invalid attachment mediaType: ",
                  " for castMediaAttachmentTypeToServerMediaType method",
                ])),
              e,
            ),
            null
          );
      }
    }
    ((l.castToMsgrServerMediaType = u),
      (l.castMediaAttachmentTypeToServerMediaType = c));
  },
  98,
);
