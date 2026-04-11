__d(
  "WAWebPtvParsePtvMessageProto",
  [
    "WALongInt",
    "WATimeUtils",
    "WAWebE2EProtoParserApi",
    "WAWebE2EProtoUtils",
    "WAWebMediaMessageGetValidatedProperties",
    "WAWebMsgType",
    "WAWebPtvGatingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.baseMessage,
        n = e.messageProtobuf,
        r = e.msgContext,
        a = n.ptvMessage;
      if (a != null) {
        if (!o("WAWebPtvGatingUtils").isPtvReceivingEnabled())
          return {
            msgData: babelHelpers.extends({}, t, {
              type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
              kind: o("WAWebMsgType").MsgKind.Unknown,
              futureproofType: o("WAWebMsgType").MSG_TYPE.PTV,
            }),
            contextInfo: a == null ? void 0 : a.contextInfo,
          };
        var i = a.accessibilityLabel,
          l = a.annotations,
          s = a.caption,
          u = a.contextInfo,
          c = a.directPath,
          d = a.gifAttribution,
          m = a.gifPlayback,
          p = a.height,
          _ = a.jpegThumbnail,
          f = a.mediaKeyTimestamp,
          g = a.mimetype,
          h = a.seconds,
          y = a.staticUrl,
          C = a.streamingSidecar,
          b = a.thumbnailDirectPath,
          v = a.thumbnailEncSha256,
          S = a.thumbnailSha256,
          R = a.viewOnce,
          L = a.width,
          E = o(
            "WAWebMediaMessageGetValidatedProperties",
          ).getValidatedMediaMessageProperties(
            a,
            t,
            r,
            o("WAWebMsgType").MSG_TYPE.PTV,
          ),
          k = E.fileEncSha256,
          I = E.fileLength,
          T = E.fileSha256,
          D = E.mediaKey,
          x = E.url,
          $ = babelHelpers.extends({}, t, {
            type: o("WAWebMsgType").MSG_TYPE.PTV,
            kind: o("WAWebMsgType").MsgKind.Ptv,
            deprecatedMms3Url: o("WAWebE2EProtoParserApi").decodeUrl(x),
            directPath: c,
            staticUrl: y || "",
            mimetype: g,
            caption:
              o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(s),
            filehash: o("WAWebE2EProtoParserApi").decodeBytes(T),
            encFilehash: o("WAWebE2EProtoParserApi").decodeBytes(k),
            size: o("WALongInt").numberOrThrowIfTooLarge(I || 0),
            height: p,
            width: L,
            mediaKey: o("WAWebE2EProtoParserApi").decodeBytes(D),
            mediaKeyTimestamp:
              f != null
                ? o("WALongInt").numberOrThrowIfTooLarge(f)
                : o("WATimeUtils").unixTime(),
            duration: "" + (h || 0),
            body: o("WAWebE2EProtoParserApi").decodeBytes(_) || "",
            interactiveAnnotations: l,
            isViewOnce: R === !0,
            thumbnailDirectPath: b,
            thumbnailSha256: o("WAWebE2EProtoParserApi").decodeBytes(S),
            thumbnailEncSha256: o("WAWebE2EProtoParserApi").decodeBytes(v),
            isGif: m,
            gifAttribution: d,
            accessibilityLabel: i,
            streamingSidecar: C,
          });
        return (
          o("WAWebE2EProtoParserApi").validateRequiredMediaProperties($, a),
          { msgData: $, contextInfo: u }
        );
      }
    }
    l.default = e;
  },
  98,
);
