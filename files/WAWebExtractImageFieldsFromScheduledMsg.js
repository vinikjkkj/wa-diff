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
        f = n.scanLengths,
        g = n.scansSidecar,
        h = n.staticUrl,
        y = n.thumbnailDirectPath,
        C = n.thumbnailEncSha256,
        b = n.thumbnailSha256,
        v = n.url,
        S = n.viewOnce,
        R = n.width;
      return {
        type: o("WAWebMsgType").MSG_TYPE.IMAGE,
        kind: o("WAWebMsgType").MsgKind.Image,
        deprecatedMms3Url: o("WAWebE2EProtoParserApi").decodeUrl(v),
        directPath: i || "",
        staticUrl:
          (t = o("WAWebMediaUrlAllowlist").allowlistedMediaUrl(h)) != null
            ? t
            : "",
        mimetype: _ || "",
        caption: o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(a),
        filehash: o("WAWebE2EProtoParserApi").decodeBytes(u),
        encFilehash: o("WAWebE2EProtoParserApi").decodeBytes(l),
        size: s != null ? o("WALongInt").numberOrThrowIfTooLarge(s) : void 0,
        height: c || 0,
        width: R || 0,
        mediaKey: o("WAWebE2EProtoParserApi").decodeBytes(m),
        mediaKeyTimestamp:
          p != null
            ? o("WALongInt").numberOrThrowIfTooLarge(p)
            : o("WATimeUtils").unixTime(),
        body: o("WAWebE2EProtoParserApi").decodeBytes(d) || "",
        interactiveAnnotations: r,
        scanLengths: f,
        scansSidecar: g,
        isViewOnce: S === !0,
        thumbnailDirectPath: y,
        thumbnailSha256: o("WAWebE2EProtoParserApi").decodeBytes(b),
        thumbnailEncSha256: o("WAWebE2EProtoParserApi").decodeBytes(C),
      };
    }
    l.extractImageFieldsFromScheduledMsg = e;
  },
  98,
);
