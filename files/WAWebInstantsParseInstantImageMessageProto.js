__d(
  "WAWebInstantsParseInstantImageMessageProto",
  [
    "WALogger",
    "WALongInt",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebBizAiHomeChat",
    "WAWebE2EProtoParserApi",
    "WAWebE2EProtoUtils",
    "WAWebMediaMessageGetValidatedProperties",
    "WAWebMediaUrlAllowlist",
    "WAWebMsgType",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      var n,
        r,
        a = t.baseMessage,
        i = t.messageProtobuf,
        l = t.msgContext,
        s = i.instantImageMessage;
      if (s != null) {
        var c = (n = a.id) == null ? void 0 : n.remote;
        if (!(c != null && !u(c))) {
          if (s.viewOnce === !0) {
            var d;
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "parseInstantImageMessageProto: view-once Instant, id: ",
                    ", msgContext: ",
                    "",
                  ])),
                String((d = a.id) == null ? void 0 : d.id),
                l,
              )
              .sendLogs("instant-image-view-once");
            return;
          }
          if (
            o("WAWebABProps").getABPropConfigValue("instants_receiver_enabled")
          ) {
            var m = s.caption,
              p = s.contextInfo,
              _ = s.directPath,
              f = s.height,
              g = s.jpegThumbnail,
              h = s.mediaKeyTimestamp,
              y = s.mimetype,
              C = s.scanLengths,
              b = s.scansSidecar,
              v = s.staticUrl,
              S = s.thumbnailDirectPath,
              R = s.thumbnailEncSha256,
              L = s.thumbnailSha256,
              E = s.width,
              k = o(
                "WAWebMediaMessageGetValidatedProperties",
              ).getValidatedMediaMessageProperties(
                s,
                a,
                l,
                o("WAWebMsgType").MSG_TYPE.INSTANT_IMAGE,
              ),
              I = k.fileEncSha256,
              T = k.fileLength,
              D = k.fileSha256,
              x = k.mediaKey,
              $ = k.url,
              P = babelHelpers.extends({}, a, {
                type: o("WAWebMsgType").MSG_TYPE.INSTANT_IMAGE,
                kind: o("WAWebMsgType").MsgKind.InstantImage,
                deprecatedMms3Url: o("WAWebE2EProtoParserApi").decodeUrl($),
                directPath: _ || "",
                staticUrl:
                  (r = o("WAWebMediaUrlAllowlist").allowlistedMediaUrl(v)) !=
                  null
                    ? r
                    : "",
                mimetype: y || "",
                caption:
                  o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(m),
                filehash: o("WAWebE2EProtoParserApi").decodeBytes(D),
                encFilehash: o("WAWebE2EProtoParserApi").decodeBytes(I),
                size: T,
                height: f || 0,
                width: E || 0,
                mediaKey: o("WAWebE2EProtoParserApi").decodeBytes(x),
                mediaKeyTimestamp:
                  h != null
                    ? o("WALongInt").numberOrThrowIfTooLarge(h)
                    : o("WATimeUtils").unixTime(),
                body: o("WAWebE2EProtoParserApi").decodeBytes(g) || "",
                scanLengths: C,
                scansSidecar: b,
                thumbnailDirectPath: S,
                thumbnailSha256: o("WAWebE2EProtoParserApi").decodeBytes(L),
                thumbnailEncSha256: o("WAWebE2EProtoParserApi").decodeBytes(R),
              });
            return (
              o("WAWebE2EProtoParserApi").validateRequiredMediaProperties(P, s),
              { msgData: P, contextInfo: p }
            );
          }
        }
      }
    }
    function u(e) {
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
