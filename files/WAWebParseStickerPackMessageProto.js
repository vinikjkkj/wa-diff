__d(
  "WAWebParseStickerPackMessageProto",
  [
    "WALongInt",
    "WATimeUtils",
    "WAWebE2EProtoParserApi",
    "WAWebMediaMessageGetValidatedProperties",
    "WAWebMsgType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n,
        r,
        a = e.baseMessage,
        i = e.messageProtobuf,
        l = e.msgContext,
        s = i.stickerPackMessage;
      if (s == null) return null;
      var u = s.caption,
        c = o(
          "WAWebMediaMessageGetValidatedProperties",
        ).getValidatedMediaMessageProperties(
          s,
          a,
          l,
          o("WAWebMsgType").MSG_TYPE.STICKER_PACK,
        ),
        d = c.fileEncSha256,
        m = c.fileSha256,
        p = c.mediaKey,
        _ = c.url,
        f = [];
      (t = s.stickers) == null ||
        t.forEach(function (e) {
          f.push({
            fileName: e.fileName,
            emojis: e.emojis,
            isLottie: e.isLottie,
            mimetype: e.mimetype,
            isAnimated: e.isAnimated,
            accessibilityLabel: e.accessibilityLabel,
          });
        });
      var g = babelHelpers.extends({}, a, {
        type: o("WAWebMsgType").MSG_TYPE.STICKER_PACK,
        kind: o("WAWebMsgType").MsgKind.StickerPack,
        caption: u,
        deprecatedMms3Url: o("WAWebE2EProtoParserApi").decodeUrl(_),
        description: s.packDescription,
        isCaptionByUser: u != null,
        filename: s.name,
        filehash: o("WAWebE2EProtoParserApi").decodeBytes(m),
        encFilehash: o("WAWebE2EProtoParserApi").decodeBytes(d),
        mediaKey: o("WAWebE2EProtoParserApi").decodeBytes(p),
        directPath: s.directPath,
        stickerPackId: s.stickerPackId,
        thumbnailDirectPath: s.thumbnailDirectPath,
        thumbnailSha256: o("WAWebE2EProtoParserApi").decodeBytes(
          s.thumbnailSha256,
        ),
        thumbnailEncSha256: o("WAWebE2EProtoParserApi").decodeBytes(
          s.thumbnailEncSha256,
        ),
        mediaKeyTimestamp:
          s.mediaKeyTimestamp != null
            ? o("WALongInt").numberOrThrowIfTooLarge(s.mediaKeyTimestamp)
            : o("WATimeUtils").unixTime(),
        stickers: f,
        stickerPackPublisher: s.publisher,
        stickerPackSize: o("WALongInt").numberOrThrowIfTooLarge(
          (n = s.stickerPackSize) != null ? n : 0,
        ),
        trayIconFileName: s.trayIconFileName,
        size: o("WALongInt").numberOrThrowIfTooLarge(
          (r = s.fileLength) != null ? r : 0,
        ),
      });
      return { msgData: g, contextInfo: null };
    }
    l.default = e;
  },
  98,
);
