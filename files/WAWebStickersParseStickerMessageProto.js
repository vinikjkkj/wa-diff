__d(
  "WAWebStickersParseStickerMessageProto",
  [
    "WABase64Sanitize",
    "WALogger",
    "WALongInt",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebE2EProtoParserApi",
    "WAWebMediaMessageGetValidatedProperties",
    "WAWebMsgType",
    "WAWebStickerPngThumbnailValidation",
    "WAWebStickerPremiumStatus",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      var t,
        n,
        a,
        i = e.baseMessage,
        l = e.messageProtobuf,
        s = e.msgContext,
        c = l == null ? void 0 : l.lottieStickerMessage,
        d = c == null || (t = c.message) == null ? void 0 : t.stickerMessage,
        m = l == null ? void 0 : l.stickerMessage;
      if ((d != null && (m = d), m != null)) {
        var p = o(
            "WAWebMediaMessageGetValidatedProperties",
          ).getValidatedMediaMessageProperties(
            m,
            i,
            s,
            o("WAWebMsgType").MSG_TYPE.STICKER,
          ),
          _ = p.fileEncSha256,
          f = p.fileLength,
          g = p.fileSha256,
          h = p.mediaKey,
          y = p.url,
          C = babelHelpers.extends({}, i, {
            type: o("WAWebMsgType").MSG_TYPE.STICKER,
            kind: o("WAWebMsgType").MsgKind.Sticker,
            deprecatedMms3Url: o("WAWebE2EProtoParserApi").decodeUrl(y),
            directPath: m.directPath || "",
            mimetype: m.mimetype || "",
            filehash: o("WAWebE2EProtoParserApi").decodeBytes(g),
            encFilehash: o("WAWebE2EProtoParserApi").decodeBytes(_),
            mediaKey: r("WABase64Sanitize")(
              o("WAWebE2EProtoParserApi").decodeBytes(h),
            ),
            mediaKeyTimestamp:
              m.mediaKeyTimestamp != null
                ? o("WALongInt").numberOrThrowIfTooLarge(m.mediaKeyTimestamp)
                : o("WATimeUtils").unixTime(),
            size: f,
            height: m.height || 0,
            width: m.width || 0,
            firstFrameLength: m.firstFrameLength,
            firstFrameSidecar: m.firstFrameSidecar,
            isAnimated: m.isAnimated,
            isLottie: m.isLottie,
            stickerPremiumStatus:
              (n = o("WAWebStickerPremiumStatus").StickerPremiumStatus.cast(
                m.premium,
              )) != null
                ? n
                : o("WAWebStickerPremiumStatus").StickerPremiumStatus.NONE,
            stickerSentTs: o("WALongInt").maybeNumberOrThrowIfTooLarge(
              m.stickerSentTs,
            ),
            isAvatar: m.isAvatar,
            emojis:
              (a = m.emojis) == null ? void 0 : a.split(" ").filter(Boolean),
            mediaPngThumbnail: u(m.pngThumbnail),
          });
        return (
          o("WAWebE2EProtoParserApi").validateRequiredMediaProperties(C, m),
          { msgData: C, contextInfo: m.contextInfo }
        );
      }
    }
    function u(t) {
      if (!(t == null || t.byteLength === 0)) {
        if (
          !o("WAWebStickerPngThumbnailValidation").isRenderablePngThumbnail(t)
        ) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[sticker] dropping unusable png thumbnail",
                ])),
            )
            .sendLogs("sticker-png-thumbnail-rejected", { sampling: 0.01 });
          return;
        }
        if (
          o("WAWebABProps").getABPropConfigValue(
            "enable_sticker_thumbnails_in_chat_list",
          )
        )
          return o("WAWebE2EProtoParserApi").decodeBytes(t);
      }
    }
    l.default = s;
  },
  98,
);
