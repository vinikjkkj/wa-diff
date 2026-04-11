__d(
  "WAWebStickersParseStickerMessageProto",
  [
    "WABase64Sanitize",
    "WALongInt",
    "WATimeUtils",
    "WAWebE2EProtoParserApi",
    "WAWebMediaMessageGetValidatedProperties",
    "WAWebMsgType",
    "WAWebStickerPremiumStatus",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n,
        a = e.baseMessage,
        i = e.messageProtobuf,
        l = e.msgContext,
        s = i == null ? void 0 : i.lottieStickerMessage,
        u = s == null || (t = s.message) == null ? void 0 : t.stickerMessage,
        c = i == null ? void 0 : i.stickerMessage;
      if ((u != null && (c = u), c != null)) {
        var d = o(
            "WAWebMediaMessageGetValidatedProperties",
          ).getValidatedMediaMessageProperties(
            c,
            a,
            l,
            o("WAWebMsgType").MSG_TYPE.STICKER,
          ),
          m = d.fileEncSha256,
          p = d.fileLength,
          _ = d.fileSha256,
          f = d.mediaKey,
          g = d.url,
          h = babelHelpers.extends({}, a, {
            type: o("WAWebMsgType").MSG_TYPE.STICKER,
            kind: o("WAWebMsgType").MsgKind.Sticker,
            deprecatedMms3Url: o("WAWebE2EProtoParserApi").decodeUrl(g),
            directPath: c.directPath || "",
            mimetype: c.mimetype || "",
            filehash: o("WAWebE2EProtoParserApi").decodeBytes(_),
            encFilehash: o("WAWebE2EProtoParserApi").decodeBytes(m),
            mediaKey: r("WABase64Sanitize")(
              o("WAWebE2EProtoParserApi").decodeBytes(f),
            ),
            mediaKeyTimestamp:
              c.mediaKeyTimestamp != null
                ? o("WALongInt").numberOrThrowIfTooLarge(c.mediaKeyTimestamp)
                : o("WATimeUtils").unixTime(),
            size: p,
            height: c.height || 0,
            width: c.width || 0,
            firstFrameLength: c.firstFrameLength,
            firstFrameSidecar: c.firstFrameSidecar,
            isAnimated: c.isAnimated,
            isLottie: c.isLottie,
            stickerPremiumStatus:
              (n = o("WAWebStickerPremiumStatus").StickerPremiumStatus.cast(
                c.premium,
              )) != null
                ? n
                : o("WAWebStickerPremiumStatus").StickerPremiumStatus.NONE,
            stickerSentTs: o("WALongInt").maybeNumberOrThrowIfTooLarge(
              c.stickerSentTs,
            ),
            isAvatar: c.isAvatar,
          });
        return (
          o("WAWebE2EProtoParserApi").validateRequiredMediaProperties(h, c),
          { msgData: h, contextInfo: c.contextInfo }
        );
      }
    }
    l.default = e;
  },
  98,
);
