__d(
  "WAWebStickersParseStickerMessageProto",
  [
    "WABase64Sanitize",
    "WALogger",
    "WALongInt",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebAssociationProtoUtils",
    "WAWebE2EProtoParserApi",
    "WAWebMediaMessageGetValidatedProperties",
    "WAWebMessageAssociation.flow",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "WAWebStickerPngThumbnailValidation",
    "WAWebStickerPremiumStatus",
    "WAWebStickersParseStickerAudio",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      var t,
        n,
        a,
        i = e.baseMessage,
        l = e.messageAssociation,
        s = e.messageProtobuf,
        c = e.msgContext,
        d = s == null ? void 0 : s.lottieStickerMessage,
        m = d == null || (t = d.message) == null ? void 0 : t.stickerMessage,
        p = s == null ? void 0 : s.stickerMessage;
      if ((m != null && (p = m), p != null)) {
        var _ = o(
            "WAWebMediaMessageGetValidatedProperties",
          ).getValidatedMediaMessageProperties(
            p,
            i,
            c,
            o("WAWebMsgType").MSG_TYPE.STICKER,
          ),
          f = _.fileEncSha256,
          g = _.fileLength,
          h = _.fileSha256,
          y = _.mediaKey,
          C = _.url,
          b = babelHelpers.extends({}, i, {
            type: o("WAWebMsgType").MSG_TYPE.STICKER,
            kind: o("WAWebMsgType").MsgKind.Sticker,
            deprecatedMms3Url: o("WAWebE2EProtoParserApi").decodeUrl(C),
            directPath: p.directPath || "",
            mimetype: p.mimetype || "",
            filehash: o("WAWebE2EProtoParserApi").decodeBytes(h),
            encFilehash: o("WAWebE2EProtoParserApi").decodeBytes(f),
            mediaKey: r("WABase64Sanitize")(
              o("WAWebE2EProtoParserApi").decodeBytes(y),
            ),
            mediaKeyTimestamp:
              p.mediaKeyTimestamp != null
                ? o("WALongInt").numberOrThrowIfTooLarge(p.mediaKeyTimestamp)
                : o("WATimeUtils").unixTime(),
            size: g,
            height: p.height || 0,
            width: p.width || 0,
            firstFrameLength: p.firstFrameLength,
            firstFrameSidecar: p.firstFrameSidecar,
            isAnimated: p.isAnimated,
            isAiSticker: p.isAiSticker,
            isLottie: p.isLottie,
            stickerPremiumStatus:
              (n = o("WAWebStickerPremiumStatus").StickerPremiumStatus.cast(
                p.premium,
              )) != null
                ? n
                : o("WAWebStickerPremiumStatus").StickerPremiumStatus.NONE,
            stickerSentTs: o("WALongInt").maybeNumberOrThrowIfTooLarge(
              p.stickerSentTs,
            ),
            isAvatar: p.isAvatar,
            emojis:
              (a = p.emojis) == null ? void 0 : a.split(" ").filter(Boolean),
            mediaPngThumbnail: u(p.pngThumbnail),
            stickerAudio: r("WAWebStickersParseStickerAudio")({
              audioMessage: p.audioMessage,
              baseMessage: i,
              msgContext: c,
            }),
          });
        if (
          (o("WAWebE2EProtoParserApi").validateRequiredMediaProperties(b, p),
          l != null &&
            l.associationType ===
              o("WAWebProtobufsE2E.pb").MessageAssociation$AssociationType
                .STICKER_ANNOTATION)
        ) {
          var v = o(
              "WAWebAssociationProtoUtils",
            ).getValidatedAssociationFieldsFromProto({
              baseMessage: i,
              messageAssociation: l,
              msgContext: c,
            }),
            S = v.associationParentMsgKey,
            R = v.associationType,
            L = v.viewMode;
          if (
            R ===
            o("WAWebMessageAssociation.flow").MessageAssociationType
              .STICKER_ANNOTATION
          ) {
            var E = babelHelpers.extends({}, b, {
              kind: o("WAWebMsgType").MsgKind.AssociatedSticker,
              parentMsgKey: S,
              associationType: R,
              viewMode: L,
            });
            return { msgData: E, contextInfo: p.contextInfo };
          }
        }
        return { msgData: b, contextInfo: p.contextInfo };
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
