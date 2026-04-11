__d(
  "WAWebGenerateDocumentMessageProto",
  ["WATypeUtils", "WAWebE2EProtoUtils", "WAWebMsgType", "WAWebWid"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.contextInfo,
        n = e.json,
        a = e.mediaMetadata,
        i = a === void 0 ? {} : a,
        l = n.mimetype || i.mimetype,
        s = void 0,
        u = void 0;
      n.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
        ((u = n.caption), (s = i.filename));
      var c = {
        url: i.url,
        mimetype: l,
        title: s,
        caption: u,
        directPath: i.directPath,
        fileSha256: o("WAWebE2EProtoUtils").encodeBytes(i.filehash),
        fileEncSha256: o("WAWebE2EProtoUtils").encodeBytes(i.encFilehash),
        fileName: i.filename,
        fileLength: o("WATypeUtils").isNumber(n.size) ? n.size : void 0,
        mediaKey: o("WAWebE2EProtoUtils").encodeBytes(i.mediaKey),
        mediaKeyTimestamp: o("WATypeUtils").isNumber(i.mediaKeyTimestamp)
          ? i.mediaKeyTimestamp
          : void 0,
        jpegThumbnail: o("WAWebE2EProtoUtils").encodeBytes(n.body),
        contextInfo: t,
        contactVcard: n.isVcardOverMmsDocument,
        thumbnailDirectPath: i.thumbnailDirectPath,
        thumbnailSha256: o("WAWebE2EProtoUtils").encodeBytes(i.thumbnailSha256),
        thumbnailEncSha256: o("WAWebE2EProtoUtils").encodeBytes(
          i.thumbnailEncSha256,
        ),
        thumbnailHeight: i.thumbnailHeight,
        thumbnailWidth: i.thumbnailWidth,
      };
      return (
        Number.isFinite(n.pageCount) &&
          !Number.isNaN(n.pageCount) &&
          (c.pageCount = n.pageCount),
        o("WAWebE2EProtoUtils").validateOutgoingRequiredMediaProperties(
          n.type,
          c,
          r("WAWebWid").isNewsletter(n.to),
        ),
        { documentMessage: c }
      );
    }
    l.default = e;
  },
  98,
);
