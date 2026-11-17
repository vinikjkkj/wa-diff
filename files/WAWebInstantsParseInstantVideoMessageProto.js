__d(
  "WAWebInstantsParseInstantVideoMessageProto",
  [
    "WALogger",
    "WALongInt",
    "WATimeUtils",
    "WAWebAck",
    "WAWebBizAiHomeChat",
    "WAWebE2EProtoParserApi",
    "WAWebE2EProtoUtils",
    "WAWebInstantMsgTypes",
    "WAWebMediaMessageGetValidatedProperties",
    "WAWebMediaUrlAllowlist",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      var n,
        r,
        a = t.baseMessage,
        i = t.editAttr,
        l = t.messageProtobuf,
        s = t.msgContext,
        d = l.instantVideoMessage;
      if (d != null) {
        var m = (n = a.id) == null ? void 0 : n.remote;
        if (!(m != null && !c(m))) {
          var p = u(d, i);
          if (p != null) {
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "parseInstantVideoMessageProto: invalid video Zap, reason: ",
                    ", msgContext: ",
                    "",
                  ])),
                p,
                s,
              )
              .sendLogs("instant-video-invalid");
            return;
          }
          if (
            o("WAWebInstantMsgTypes").isInstantTypeReceiverEnabled(
              o("WAWebMsgType").MSG_TYPE.INSTANT_VIDEO,
            )
          ) {
            var _ = d.caption,
              f = d.contextInfo,
              g = d.directPath,
              h = d.height,
              y = d.jpegThumbnail,
              C = d.mediaKeyTimestamp,
              b = d.mimetype,
              v = d.seconds,
              S = d.staticUrl,
              R = d.thumbnailDirectPath,
              L = d.thumbnailEncSha256,
              E = d.thumbnailSha256,
              k = d.width,
              I = o(
                "WAWebMediaMessageGetValidatedProperties",
              ).getValidatedMediaMessageProperties(
                d,
                a,
                s,
                o("WAWebMsgType").MSG_TYPE.INSTANT_VIDEO,
              ),
              T = I.fileEncSha256,
              D = I.fileLength,
              x = I.fileSha256,
              $ = I.mediaKey,
              P = I.url,
              N = babelHelpers.extends({}, a, {
                type: o("WAWebMsgType").MSG_TYPE.INSTANT_VIDEO,
                kind: o("WAWebMsgType").MsgKind.InstantVideo,
                deprecatedMms3Url: o("WAWebE2EProtoParserApi").decodeUrl(P),
                directPath: g || "",
                staticUrl:
                  (r = o("WAWebMediaUrlAllowlist").allowlistedMediaUrl(S)) !=
                  null
                    ? r
                    : "",
                mimetype: b || "",
                caption:
                  o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(_),
                filehash: o("WAWebE2EProtoParserApi").decodeBytes(x),
                encFilehash: o("WAWebE2EProtoParserApi").decodeBytes(T),
                size: D,
                height: h || 0,
                width: k || 0,
                mediaKey: o("WAWebE2EProtoParserApi").decodeBytes($),
                mediaKeyTimestamp:
                  C != null
                    ? o("WALongInt").numberOrThrowIfTooLarge(C)
                    : o("WATimeUtils").unixTime(),
                duration: "" + (v || 0),
                body: o("WAWebE2EProtoParserApi").decodeBytes(y) || "",
                thumbnailDirectPath: R,
                thumbnailSha256: o("WAWebE2EProtoParserApi").decodeBytes(E),
                thumbnailEncSha256: o("WAWebE2EProtoParserApi").decodeBytes(L),
              });
            return (
              o("WAWebE2EProtoParserApi").validateRequiredMediaProperties(N, d),
              { msgData: N, contextInfo: f }
            );
          }
        }
      }
    }
    function u(e, t) {
      var n, r, a;
      return t === o("WAWebAck").EDIT_ATTR.MESSAGE_EDIT
        ? "edit"
        : e.viewOnce === !0
          ? "view-once"
          : e.gifPlayback === !0
            ? "gif"
            : ((n = (r = e.processedVideos) == null ? void 0 : r.length) != null
                  ? n
                  : 0) > 0 ||
                e.metadataUrl != null ||
                e.dashManifestUrl != null ||
                e.motionPhotoPresentationOffsetMs != null
              ? "forbidden-field"
              : ((a = e.contextInfo) == null ? void 0 : a.pairedMediaType) ===
                  o("WAWebProtobufsE2E.pb").ContextInfo$PairedMediaType
                    .MOTION_PHOTO_PARENT
                ? "motion-photo"
                : null;
    }
    function c(e) {
      return (
        e.isGroup() ||
        (e.isRegularUser() &&
          !e.isHosted() &&
          !o("WAWebBizAiHomeChat").isBizAiHomeChat(e))
      );
    }
    l.default = s;
  },
  98,
);
