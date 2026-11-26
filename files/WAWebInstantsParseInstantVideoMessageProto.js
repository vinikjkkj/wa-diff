__d(
  "WAWebInstantsParseInstantVideoMessageProto",
  [
    "WALogger",
    "WALongInt",
    "WATimeUtils",
    "WAWebAck",
    "WAWebE2EProtoParserApi",
    "WAWebE2EProtoUtils",
    "WAWebInstantMsgTypes",
    "WAWebInstantsExpiry",
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
        a,
        i = t.baseMessage,
        l = t.editAttr,
        s = t.messageProtobuf,
        d = t.msgContext,
        m = s.instantVideoMessage;
      if (m != null) {
        var p = (n = i.id) == null ? void 0 : n.remote;
        if (!(p != null && !c(p))) {
          var _ = u(m, l);
          if (_ != null) {
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "parseInstantVideoMessageProto: invalid video Zap, reason: ",
                    ", msgContext: ",
                    "",
                  ])),
                _,
                d,
              )
              .sendLogs("instant-video-invalid");
            return;
          }
          if (
            o("WAWebInstantMsgTypes").isInstantTypeReceiverEnabled(
              o("WAWebMsgType").MSG_TYPE.INSTANT_VIDEO,
            )
          ) {
            var f = m.caption,
              g = m.contextInfo,
              h = m.directPath,
              y = m.height,
              C = m.jpegThumbnail,
              b = m.mediaKeyTimestamp,
              v = m.mimetype,
              S = m.seconds,
              R = m.staticUrl,
              L = m.thumbnailDirectPath,
              E = m.thumbnailEncSha256,
              k = m.thumbnailSha256,
              I = m.width,
              T = o(
                "WAWebMediaMessageGetValidatedProperties",
              ).getValidatedMediaMessageProperties(
                m,
                i,
                d,
                o("WAWebMsgType").MSG_TYPE.INSTANT_VIDEO,
              ),
              D = T.fileEncSha256,
              x = T.fileLength,
              $ = T.fileSha256,
              P = T.mediaKey,
              N = T.url,
              M = babelHelpers.extends({}, i, {
                type: o("WAWebMsgType").MSG_TYPE.INSTANT_VIDEO,
                expiredTimestamp:
                  (r = o("WAWebInstantsExpiry").getInstantExpiryStamp(
                    o("WAWebMsgType").MSG_TYPE.INSTANT_VIDEO,
                    i,
                    g,
                  )) != null
                    ? r
                    : void 0,
                kind: o("WAWebMsgType").MsgKind.InstantVideo,
                deprecatedMms3Url: o("WAWebE2EProtoParserApi").decodeUrl(N),
                directPath: h || "",
                staticUrl:
                  (a = o("WAWebMediaUrlAllowlist").allowlistedMediaUrl(R)) !=
                  null
                    ? a
                    : "",
                mimetype: v || "",
                caption:
                  o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(f),
                filehash: o("WAWebE2EProtoParserApi").decodeBytes($),
                encFilehash: o("WAWebE2EProtoParserApi").decodeBytes(D),
                size: x,
                height: y || 0,
                width: I || 0,
                mediaKey: o("WAWebE2EProtoParserApi").decodeBytes(P),
                mediaKeyTimestamp:
                  b != null
                    ? o("WALongInt").numberOrThrowIfTooLarge(b)
                    : o("WATimeUtils").unixTime(),
                duration: "" + (S || 0),
                body: o("WAWebE2EProtoParserApi").decodeBytes(C) || "",
                thumbnailDirectPath: L,
                thumbnailSha256: o("WAWebE2EProtoParserApi").decodeBytes(k),
                thumbnailEncSha256: o("WAWebE2EProtoParserApi").decodeBytes(E),
              });
            return (
              o("WAWebE2EProtoParserApi").validateRequiredMediaProperties(M, m),
              { msgData: M, contextInfo: g }
            );
          }
        }
      }
    }
    function u(e, t) {
      var n, r, a, i, l;
      return t === o("WAWebAck").EDIT_ATTR.MESSAGE_EDIT
        ? "edit"
        : e.viewOnce === !0
          ? "view-once"
          : e.gifPlayback === !0
            ? "gif"
            : ((n = (r = e.processedVideos) == null ? void 0 : r.length) != null
                  ? n
                  : 0) > 0 ||
                ((a = e.metadataUrl) != null ? a : "") !== "" ||
                ((i = e.dashManifestUrl) != null ? i : "") !== "" ||
                e.motionPhotoPresentationOffsetMs != null
              ? "forbidden-field"
              : ((l = e.contextInfo) == null ? void 0 : l.pairedMediaType) ===
                  o("WAWebProtobufsE2E.pb").ContextInfo$PairedMediaType
                    .MOTION_PHOTO_PARENT
                ? "motion-photo"
                : null;
    }
    function c(e) {
      return (
        e.isGroup() || (e.isRegularUser() && !e.isHosted() && !e.isAiHub())
      );
    }
    l.default = s;
  },
  98,
);
