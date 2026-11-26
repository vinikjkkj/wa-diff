__d(
  "WAWebInstantsParseInstantImageMessageProto",
  [
    "WALogger",
    "WALongInt",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebE2EProtoParserApi",
    "WAWebE2EProtoUtils",
    "WAWebInstantsExpiry",
    "WAWebMediaMessageGetValidatedProperties",
    "WAWebMediaUrlAllowlist",
    "WAWebMsgType",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      var n,
        r,
        a,
        i = t.baseMessage,
        l = t.messageProtobuf,
        s = t.msgContext,
        c = l.instantImageMessage;
      if (c != null) {
        var d = (n = i.id) == null ? void 0 : n.remote;
        if (!(d != null && !u(d))) {
          if (c.viewOnce === !0) {
            var m;
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "parseInstantImageMessageProto: view-once Instant, id: ",
                    ", msgContext: ",
                    "",
                  ])),
                String((m = i.id) == null ? void 0 : m.id),
                s,
              )
              .sendLogs("instant-image-view-once");
            return;
          }
          if (
            o("WAWebABProps").getABPropConfigValue("instants_receiver_enabled")
          ) {
            var p = c.caption,
              _ = c.contextInfo,
              f = c.directPath,
              g = c.height,
              h = c.jpegThumbnail,
              y = c.mediaKeyTimestamp,
              C = c.mimetype,
              b = c.scanLengths,
              v = c.scansSidecar,
              S = c.staticUrl,
              R = c.thumbnailDirectPath,
              L = c.thumbnailEncSha256,
              E = c.thumbnailSha256,
              k = c.width,
              I = o(
                "WAWebMediaMessageGetValidatedProperties",
              ).getValidatedMediaMessageProperties(
                c,
                i,
                s,
                o("WAWebMsgType").MSG_TYPE.INSTANT_IMAGE,
              ),
              T = I.fileEncSha256,
              D = I.fileLength,
              x = I.fileSha256,
              $ = I.mediaKey,
              P = I.url,
              N = babelHelpers.extends({}, i, {
                type: o("WAWebMsgType").MSG_TYPE.INSTANT_IMAGE,
                expiredTimestamp:
                  (r = o("WAWebInstantsExpiry").getInstantExpiryStamp(
                    o("WAWebMsgType").MSG_TYPE.INSTANT_IMAGE,
                    i,
                    _,
                  )) != null
                    ? r
                    : void 0,
                kind: o("WAWebMsgType").MsgKind.InstantImage,
                deprecatedMms3Url: o("WAWebE2EProtoParserApi").decodeUrl(P),
                directPath: f || "",
                staticUrl:
                  (a = o("WAWebMediaUrlAllowlist").allowlistedMediaUrl(S)) !=
                  null
                    ? a
                    : "",
                mimetype: C || "",
                caption:
                  o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(p),
                filehash: o("WAWebE2EProtoParserApi").decodeBytes(x),
                encFilehash: o("WAWebE2EProtoParserApi").decodeBytes(T),
                size: D,
                height: g || 0,
                width: k || 0,
                mediaKey: o("WAWebE2EProtoParserApi").decodeBytes($),
                mediaKeyTimestamp:
                  y != null
                    ? o("WALongInt").numberOrThrowIfTooLarge(y)
                    : o("WATimeUtils").unixTime(),
                body: o("WAWebE2EProtoParserApi").decodeBytes(h) || "",
                scanLengths: b,
                scansSidecar: v,
                thumbnailDirectPath: R,
                thumbnailSha256: o("WAWebE2EProtoParserApi").decodeBytes(E),
                thumbnailEncSha256: o("WAWebE2EProtoParserApi").decodeBytes(L),
              });
            return (
              o("WAWebE2EProtoParserApi").validateRequiredMediaProperties(N, c),
              { msgData: N, contextInfo: _ }
            );
          }
        }
      }
    }
    function u(e) {
      return (
        e.isGroup() || (e.isRegularUser() && !e.isHosted() && !e.isAiHub())
      );
    }
    l.default = s;
  },
  98,
);
