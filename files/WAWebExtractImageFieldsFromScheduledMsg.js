__d(
  "WAWebExtractImageFieldsFromScheduledMsg",
  [
    "WALongInt",
    "WATimeUtils",
    "WAWebE2EProtoParserApi",
    "WAWebE2EProtoUtils",
    "WAWebMsgType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.imageMessage;
      if (t == null) return null;
      var n = t.annotations,
        r = t.caption,
        a = t.directPath,
        i = t.fileEncSha256,
        l = t.fileLength,
        s = t.fileSha256,
        u = t.height,
        c = t.jpegThumbnail,
        d = t.mediaKey,
        m = t.mediaKeyTimestamp,
        p = t.mimetype,
        _ = t.scanLengths,
        f = t.scansSidecar,
        g = t.staticUrl,
        h = t.thumbnailDirectPath,
        y = t.thumbnailEncSha256,
        C = t.thumbnailSha256,
        b = t.url,
        v = t.viewOnce,
        S = t.width;
      return {
        type: o("WAWebMsgType").MSG_TYPE.IMAGE,
        kind: o("WAWebMsgType").MsgKind.Image,
        deprecatedMms3Url: o("WAWebE2EProtoParserApi").decodeUrl(b),
        directPath: a || "",
        staticUrl: g || "",
        mimetype: p || "",
        caption: o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(r),
        filehash: o("WAWebE2EProtoParserApi").decodeBytes(s),
        encFilehash: o("WAWebE2EProtoParserApi").decodeBytes(i),
        size: l != null ? o("WALongInt").numberOrThrowIfTooLarge(l) : void 0,
        height: u || 0,
        width: S || 0,
        mediaKey: o("WAWebE2EProtoParserApi").decodeBytes(d),
        mediaKeyTimestamp:
          m != null
            ? o("WALongInt").numberOrThrowIfTooLarge(m)
            : o("WATimeUtils").unixTime(),
        body: o("WAWebE2EProtoParserApi").decodeBytes(c) || "",
        interactiveAnnotations: n,
        scanLengths: _,
        scansSidecar: f,
        isViewOnce: v === !0,
        thumbnailDirectPath: h,
        thumbnailSha256: o("WAWebE2EProtoParserApi").decodeBytes(C),
        thumbnailEncSha256: o("WAWebE2EProtoParserApi").decodeBytes(y),
      };
    }
    l.extractImageFieldsFromScheduledMsg = e;
  },
  98,
);
