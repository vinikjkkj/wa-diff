__d(
  "WAWebParseStickerPackMessageProto",
  [
    "WALongInt",
    "WATimeUtils",
    "WAWebE2EProtoParserApi",
    "WAWebHandleMsgError",
    "WAWebMediaMessageGetValidatedProperties",
    "WAWebMsgType",
    "WAWebWamEnumE2eFailureReason",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 60,
      s = 3,
      u = e * s;
    function c(t) {
      var n,
        a,
        i,
        l = t.baseMessage,
        s = t.messageProtobuf,
        c = t.msgContext,
        d = s.stickerPackMessage;
      if (d == null) return null;
      if (r("justknobx")._("7544")) {
        var m,
          p = (m = d.stickers) != null ? m : [],
          _ = p.reduce(function (e, t) {
            var n, r;
            return (
              e +
              ((n = (r = t.emojis) == null ? void 0 : r.length) != null ? n : 0)
            );
          }, 0);
        if (p.length > e || _ > u)
          throw new (o("WAWebHandleMsgError").MessageValidationError)(
            "sticker_pack_over_limit",
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .INVALID_PROTOCOL_BUFFER,
          );
      }
      var f = d.caption,
        g = o(
          "WAWebMediaMessageGetValidatedProperties",
        ).getValidatedMediaMessageProperties(
          d,
          l,
          c,
          o("WAWebMsgType").MSG_TYPE.STICKER_PACK,
        ),
        h = g.fileEncSha256,
        y = g.fileSha256,
        C = g.mediaKey,
        b = g.url,
        v = [];
      (n = d.stickers) == null ||
        n.forEach(function (e) {
          v.push({
            fileName: e.fileName,
            emojis: e.emojis,
            isLottie: e.isLottie,
            mimetype: e.mimetype,
            isAnimated: e.isAnimated,
            accessibilityLabel: e.accessibilityLabel,
          });
        });
      var S = babelHelpers.extends({}, l, {
        type: o("WAWebMsgType").MSG_TYPE.STICKER_PACK,
        kind: o("WAWebMsgType").MsgKind.StickerPack,
        caption: f,
        deprecatedMms3Url: o("WAWebE2EProtoParserApi").decodeUrl(b),
        description: d.packDescription,
        isCaptionByUser: f != null,
        filename: d.name,
        filehash: o("WAWebE2EProtoParserApi").decodeBytes(y),
        encFilehash: o("WAWebE2EProtoParserApi").decodeBytes(h),
        mediaKey: o("WAWebE2EProtoParserApi").decodeBytes(C),
        directPath: d.directPath,
        stickerPackId: d.stickerPackId,
        thumbnailDirectPath: d.thumbnailDirectPath,
        thumbnailSha256: o("WAWebE2EProtoParserApi").decodeBytes(
          d.thumbnailSha256,
        ),
        thumbnailEncSha256: o("WAWebE2EProtoParserApi").decodeBytes(
          d.thumbnailEncSha256,
        ),
        mediaKeyTimestamp:
          d.mediaKeyTimestamp != null
            ? o("WALongInt").numberOrThrowIfTooLarge(d.mediaKeyTimestamp)
            : o("WATimeUtils").unixTime(),
        stickers: v,
        stickerPackPublisher: d.publisher,
        stickerPackSize: o("WALongInt").numberOrThrowIfTooLarge(
          (a = d.stickerPackSize) != null ? a : 0,
        ),
        trayIconFileName: d.trayIconFileName,
        size: o("WALongInt").numberOrThrowIfTooLarge(
          (i = d.fileLength) != null ? i : 0,
        ),
      });
      return { msgData: S, contextInfo: null };
    }
    l.default = c;
  },
  98,
);
