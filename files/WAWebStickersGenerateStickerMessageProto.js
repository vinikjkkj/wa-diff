__d(
  "WAWebStickersGenerateStickerMessageProto",
  [
    "invariant",
    "WALogger",
    "WATypeUtils",
    "WAWebE2EProtoUtils",
    "WAWebMsgType",
    "WAWebStickerMimeUtils",
    "WAWebWid",
    "err",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e;
    function u(t) {
      var n = t.contextInfo,
        a = t.json,
        i = t.mediaMetadata;
      if (
        (i != null || s(0, 66810),
        i.mimetype != null &&
          !o("WAWebStickerMimeUtils")
            .getValidStickerMimeTypes()
            .has(i.mimetype))
      )
        throw (
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "invalid sticker mimetype: ",
                "",
              ])),
            i.mimetype,
          ),
          r("err")("invalid sticker mimetype")
        );
      var l = {
        url: i.url,
        mimetype: i.mimetype,
        directPath: i.directPath,
        fileSha256: o("WAWebE2EProtoUtils").encodeBytes(i.filehash),
        fileEncSha256: o("WAWebE2EProtoUtils").encodeBytes(i.encFilehash),
        mediaKey: o("WAWebE2EProtoUtils").encodeBytes(i.mediaKey),
        mediaKeyTimestamp: o("WATypeUtils").isNumber(i.mediaKeyTimestamp)
          ? i.mediaKeyTimestamp
          : void 0,
        fileLength: o("WATypeUtils").isNumber(a.size) ? a.size : void 0,
        height: a.height,
        width: a.width,
        firstFrameLength: i.firstFrameLength,
        firstFrameSidecar: a.firstFrameSidecar || void 0,
        isAnimated: i.isAnimated,
        isLottie: i.isLottie,
        premium:
          i.stickerPremiumStatus != null ? i.stickerPremiumStatus : void 0,
        stickerSentTs: a.stickerSentTs,
        contextInfo: n,
      };
      return (
        o("WAWebE2EProtoUtils").validateOutgoingRequiredMediaProperties(
          o("WAWebMsgType").MSG_TYPE.STICKER,
          l,
          r("WAWebWid").isNewsletter(a.to),
        ),
        { stickerMessage: l }
      );
    }
    l.default = u;
  },
  98,
);
