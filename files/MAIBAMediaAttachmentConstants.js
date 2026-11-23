__d(
  "MAIBAMediaAttachmentConstants",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = ["image/jpeg", "image/png", "image/webp"],
      l = ["application/pdf"],
      s = ["video/mp4", "video/quicktime"],
      u = 40960,
      c = 10,
      d = n("$InternalEnum").Mirrored([
        "IMAGE_HASH",
        "VIDEO_ID",
        "UPLOADED_VIDEO_ID",
      ]);
    ((i.ALLOWED_IMAGE_TYPES = e),
      (i.ALLOWED_DOCUMENT_TYPES = l),
      (i.ALLOWED_VIDEO_TYPES = s),
      (i.MAX_FILE_SIZE_KB = u),
      (i.MAX_ATTACHMENTS = c),
      (i.MaibaInternalAttachmentKind = d));
  },
  66,
);
