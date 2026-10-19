__d(
  "WAWebStickersGenerateStickerMessageProto",
  [
    "invariant",
    "WALogger",
    "WATypeUtils",
    "WAWebABProps",
    "WAWebE2EProtoUtils",
    "WAWebMsgType",
    "WAWebSoundStickerGating",
    "WAWebStickerMimeUtils",
    "WAWebWid",
    "err",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e;
    function u(t) {
      var n,
        a = t.contextInfo,
        i = t.json,
        l = t.mediaMetadata,
        u = t.msgContext;
      if (
        (l != null || s(0, 66810),
        l.mimetype != null &&
          !o("WAWebStickerMimeUtils")
            .getValidStickerMimeTypes()
            .has(l.mimetype))
      )
        throw (
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "invalid sticker mimetype: ",
                "",
              ])),
            l.mimetype,
          ),
          r("err")("invalid sticker mimetype")
        );
      var d = {
        url: l.url,
        mimetype: l.mimetype,
        directPath: l.directPath,
        fileSha256: o("WAWebE2EProtoUtils").encodeBytes(l.filehash),
        fileEncSha256: o("WAWebE2EProtoUtils").encodeBytes(l.encFilehash),
        mediaKey: o("WAWebE2EProtoUtils").encodeBytes(l.mediaKey),
        mediaKeyTimestamp: o("WATypeUtils").isNumber(l.mediaKeyTimestamp)
          ? l.mediaKeyTimestamp
          : void 0,
        fileLength: o("WATypeUtils").isNumber(i.size) ? i.size : void 0,
        height: i.height,
        width: i.width,
        firstFrameLength: l.firstFrameLength,
        firstFrameSidecar: i.firstFrameSidecar || void 0,
        isAnimated: l.isAnimated,
        isAiSticker:
          (i.isAiSticker === !0 || l.isAiSticker === !0) &&
          o("WAWebABProps").getABPropConfigValue(
            "web_ai_sticker_emission_enabled",
          )
            ? !0
            : void 0,
        isLottie: l.isLottie,
        premium:
          l.stickerPremiumStatus != null ? l.stickerPremiumStatus : void 0,
        stickerSentTs: i.stickerSentTs,
        emojis: (n = i.emojis) == null ? void 0 : n.join(" "),
        contextInfo: a,
        audioMessage: c(i.stickerAudio, u),
      };
      return (
        o("WAWebE2EProtoUtils").validateOutgoingRequiredMediaProperties(
          o("WAWebMsgType").MSG_TYPE.STICKER,
          d,
          r("WAWebWid").isNewsletter(i.to),
        ),
        { stickerMessage: d }
      );
    }
    function c(e, t) {
      var n, r;
      if (
        !(
          e == null ||
          t === "quoted" ||
          !o("WAWebSoundStickerGating").isSoundStickerCreationEnabled()
        )
      )
        return {
          url: d(e.deprecatedMms3Url),
          directPath: d(e.directPath),
          mediaKey: o("WAWebE2EProtoUtils").encodeBytes(e.mediaKey),
          mediaKeyTimestamp: (n = e.mediaKeyTimestamp) != null ? n : void 0,
          fileSha256: o("WAWebE2EProtoUtils").encodeBytes(e.filehash),
          fileEncSha256: o("WAWebE2EProtoUtils").encodeBytes(e.encFilehash),
          fileLength: e.size > 0 ? e.size : void 0,
          seconds: (r = e.duration) != null ? r : void 0,
          mimetype: d(e.mimetype),
        };
    }
    function d(e) {
      return e != null && e !== "" ? e : void 0;
    }
    l.default = u;
  },
  98,
);
