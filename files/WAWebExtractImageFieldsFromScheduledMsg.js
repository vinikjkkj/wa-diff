__d(
  "WAWebExtractImageFieldsFromScheduledMsg",
  [
    "WALongInt",
    "WATimeUtils",
    "WAWebE2EProtoParserApi",
    "WAWebE2EProtoUtils",
    "WAWebMediaUrlAllowlist",
    "WAWebMsgType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = e.imageMessage;
      if (n == null) return null;
      var r = n.annotations,
        a = n.caption,
        i = n.directPath,
        l = n.fileEncSha256,
        s = n.fileLength,
        u = n.fileSha256,
        c = n.height,
        d = n.jpegThumbnail,
        m = n.mediaKey,
        p = n.mediaKeyTimestamp,
        _ = n.mimetype,
        f = n.qrUrl,
        g = n.scanLengths,
        h = n.scansSidecar,
        y = n.staticUrl,
        C = n.thumbnailDirectPath,
        b = n.thumbnailEncSha256,
        v = n.thumbnailSha256,
        S = n.url,
        R = n.viewOnce,
        L = n.width;
      return {
        type: o("WAWebMsgType").MSG_TYPE.IMAGE,
        kind: o("WAWebMsgType").MsgKind.Image,
        deprecatedMms3Url: o("WAWebE2EProtoParserApi").decodeUrl(S),
        directPath: i || "",
        staticUrl:
          (t = o("WAWebMediaUrlAllowlist").allowlistedMediaUrl(y)) != null
            ? t
            : "",
        qrUrl: f,
        mimetype: _ || "",
        caption: o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(a),
        filehash: o("WAWebE2EProtoParserApi").decodeBytes(u),
        encFilehash: o("WAWebE2EProtoParserApi").decodeBytes(l),
        size: s != null ? o("WALongInt").numberOrThrowIfTooLarge(s) : void 0,
        height: c || 0,
        width: L || 0,
        mediaKey: o("WAWebE2EProtoParserApi").decodeBytes(m),
        mediaKeyTimestamp:
          p != null
            ? o("WALongInt").numberOrThrowIfTooLarge(p)
            : o("WATimeUtils").unixTime(),
        body: o("WAWebE2EProtoParserApi").decodeBytes(d) || "",
        interactiveAnnotations: r,
        scanLengths: g,
        scansSidecar: h,
        isViewOnce: R === !0,
        thumbnailDirectPath: C,
        thumbnailSha256: o("WAWebE2EProtoParserApi").decodeBytes(v),
        thumbnailEncSha256: o("WAWebE2EProtoParserApi").decodeBytes(b),
      };
    }
    l.extractImageFieldsFromScheduledMsg = e;
  },
  98,
);
