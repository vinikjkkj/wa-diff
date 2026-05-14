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
        a,
        i = e.baseMessage,
        l = e.messageProtobuf,
        s = e.msgContext,
        u = l == null ? void 0 : l.lottieStickerMessage,
        c = u == null || (t = u.message) == null ? void 0 : t.stickerMessage,
        d = l == null ? void 0 : l.stickerMessage;
      if ((c != null && (d = c), d != null)) {
        var m = o(
            "WAWebMediaMessageGetValidatedProperties",
          ).getValidatedMediaMessageProperties(
            d,
            i,
            s,
            o("WAWebMsgType").MSG_TYPE.STICKER,
          ),
          p = m.fileEncSha256,
          _ = m.fileLength,
          f = m.fileSha256,
          g = m.mediaKey,
          h = m.url,
          y = babelHelpers.extends({}, i, {
            type: o("WAWebMsgType").MSG_TYPE.STICKER,
            kind: o("WAWebMsgType").MsgKind.Sticker,
            deprecatedMms3Url: o("WAWebE2EProtoParserApi").decodeUrl(h),
            directPath: d.directPath || "",
            mimetype: d.mimetype || "",
            filehash: o("WAWebE2EProtoParserApi").decodeBytes(f),
            encFilehash: o("WAWebE2EProtoParserApi").decodeBytes(p),
            mediaKey: r("WABase64Sanitize")(
              o("WAWebE2EProtoParserApi").decodeBytes(g),
            ),
            mediaKeyTimestamp:
              d.mediaKeyTimestamp != null
                ? o("WALongInt").numberOrThrowIfTooLarge(d.mediaKeyTimestamp)
                : o("WATimeUtils").unixTime(),
            size: _,
            height: d.height || 0,
            width: d.width || 0,
            firstFrameLength: d.firstFrameLength,
            firstFrameSidecar: d.firstFrameSidecar,
            isAnimated: d.isAnimated,
            isLottie: d.isLottie,
            stickerPremiumStatus:
              (n = o("WAWebStickerPremiumStatus").StickerPremiumStatus.cast(
                d.premium,
              )) != null
                ? n
                : o("WAWebStickerPremiumStatus").StickerPremiumStatus.NONE,
            stickerSentTs: o("WALongInt").maybeNumberOrThrowIfTooLarge(
              d.stickerSentTs,
            ),
            isAvatar: d.isAvatar,
            emojis:
              (a = d.emojis) == null ? void 0 : a.split(" ").filter(Boolean),
          });
        return (
          o("WAWebE2EProtoParserApi").validateRequiredMediaProperties(y, d),
          { msgData: y, contextInfo: d.contextInfo }
        );
      }
    }
    l.default = e;
  },
  98,
);
