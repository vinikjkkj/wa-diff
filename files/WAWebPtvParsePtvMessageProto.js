__d(
  "WAWebPtvParsePtvMessageProto",
  [
    "WALongInt",
    "WATimeUtils",
    "WAWebE2EProtoParserApi",
    "WAWebE2EProtoUtils",
    "WAWebMediaMessageGetValidatedProperties",
    "WAWebMediaUrlAllowlist",
    "WAWebMsgType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = e.baseMessage,
        r = e.messageProtobuf,
        a = e.msgContext,
        i = r.ptvMessage;
      if (i != null) {
        var l = i.accessibilityLabel,
          s = i.annotations,
          u = i.caption,
          c = i.contextInfo,
          d = i.directPath,
          m = i.gifAttribution,
          p = i.gifPlayback,
          _ = i.height,
          f = i.jpegThumbnail,
          g = i.mediaKeyTimestamp,
          h = i.mimetype,
          y = i.seconds,
          C = i.staticUrl,
          b = i.streamingSidecar,
          v = i.thumbnailDirectPath,
          S = i.thumbnailEncSha256,
          R = i.thumbnailSha256,
          L = i.viewOnce,
          E = i.width,
          k = o(
            "WAWebMediaMessageGetValidatedProperties",
          ).getValidatedMediaMessageProperties(
            i,
            n,
            a,
            o("WAWebMsgType").MSG_TYPE.PTV,
          ),
          I = k.fileEncSha256,
          T = k.fileLength,
          D = k.fileSha256,
          x = k.mediaKey,
          $ = k.url,
          P = babelHelpers.extends({}, n, {
            type: o("WAWebMsgType").MSG_TYPE.PTV,
            kind: o("WAWebMsgType").MsgKind.Ptv,
            deprecatedMms3Url: o("WAWebE2EProtoParserApi").decodeUrl($),
            directPath: d,
            staticUrl:
              (t = o("WAWebMediaUrlAllowlist").allowlistedMediaUrl(C)) != null
                ? t
                : "",
            mimetype: h,
            caption:
              o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(u),
            filehash: o("WAWebE2EProtoParserApi").decodeBytes(D),
            encFilehash: o("WAWebE2EProtoParserApi").decodeBytes(I),
            size: o("WALongInt").numberOrThrowIfTooLarge(T || 0),
            height: _,
            width: E,
            mediaKey: o("WAWebE2EProtoParserApi").decodeBytes(x),
            mediaKeyTimestamp:
              g != null
                ? o("WALongInt").numberOrThrowIfTooLarge(g)
                : o("WATimeUtils").unixTime(),
            duration: "" + (y || 0),
            body: o("WAWebE2EProtoParserApi").decodeBytes(f) || "",
            interactiveAnnotations: s,
            isViewOnce: L === !0,
            thumbnailDirectPath: v,
            thumbnailSha256: o("WAWebE2EProtoParserApi").decodeBytes(R),
            thumbnailEncSha256: o("WAWebE2EProtoParserApi").decodeBytes(S),
            isGif: p,
            gifAttribution: m,
            accessibilityLabel: l,
            streamingSidecar: b,
          });
        return (
          o("WAWebE2EProtoParserApi").validateRequiredMediaProperties(P, i),
          { msgData: P, contextInfo: c }
        );
      }
    }
    l.default = e;
  },
  98,
);
