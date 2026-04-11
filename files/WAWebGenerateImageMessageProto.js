__d(
  "WAWebGenerateImageMessageProto",
  [
    "WATypeUtils",
    "WAWebE2EProtoUtils",
    "WAWebMediaGatingUtils",
    "WAWebWid",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.contextInfo,
        n = e.json,
        a = e.mediaMetadata;
      if (a == null)
        throw r("err")(
          "generateImageMessageProto: generating image protobuf without mediaMetadata",
        );
      var i = n.mimetype || a.mimetype,
        l = {};
      (r("WAWebWid").isStatus(n.to) &&
        (l = {
          thumbnailDirectPath: a.thumbnailDirectPath,
          thumbnailSha256: o("WAWebE2EProtoUtils").encodeBytes(
            a.thumbnailSha256,
          ),
          thumbnailEncSha256: o("WAWebE2EProtoUtils").encodeBytes(
            a.thumbnailEncSha256,
          ),
        }),
        o("WAWebMediaGatingUtils").isThumbnailGenerationForMsgOnServerEnabled(
          n,
        ) &&
          (l = {
            thumbnailDirectPath: a.thumbnailDirectPath,
            thumbnailSha256: o("WAWebE2EProtoUtils").encodeBytes(
              a.thumbnailSha256,
            ),
          }));
      var s = babelHelpers.extends(
        {
          url: a.url,
          mimetype: i,
          caption: n.caption,
          directPath: a.directPath,
          fileSha256: o("WAWebE2EProtoUtils").encodeBytes(a.filehash),
          fileEncSha256: o("WAWebE2EProtoUtils").encodeBytes(a.encFilehash),
          height: a.height,
          width: a.width,
          fileLength: o("WATypeUtils").isNumber(n.size) ? n.size : void 0,
          mediaKey: o("WAWebE2EProtoUtils").encodeBytes(a.mediaKey),
          mediaKeyTimestamp: o("WATypeUtils").isNumber(a.mediaKeyTimestamp)
            ? a.mediaKeyTimestamp
            : void 0,
          jpegThumbnail: n.isViewOnce
            ? void 0
            : o("WAWebE2EProtoUtils").encodeBytes(n.body),
          contextInfo: t,
          viewOnce: n.isViewOnce,
        },
        l,
      );
      return (
        o("WAWebE2EProtoUtils").validateOutgoingRequiredMediaProperties(
          n.type,
          s,
          r("WAWebWid").isNewsletter(n.to),
        ),
        { imageMessage: s }
      );
    }
    l.default = e;
  },
  98,
);
