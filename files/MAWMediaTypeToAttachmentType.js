__d(
  "MAWMediaTypeToAttachmentType",
  ["MAWDbMedia"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Map([
        [(e = o("MAWDbMedia")).MEDIA_TYPE.IMAGE, 8],
        [e.MEDIA_TYPE.VIDEO, 10],
        [e.MEDIA_TYPE.GIF, 6],
        [e.MEDIA_TYPE.STICKER, 4],
        [e.MEDIA_TYPE.PTT, 11],
        [e.MEDIA_TYPE.DOCUMENT_FILE, 9],
      ]);
    l.MEDIA_TYPE_TO_ATTACHMENT_TYPE = s;
  },
  98,
);
