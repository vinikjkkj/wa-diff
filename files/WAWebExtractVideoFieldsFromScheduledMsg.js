__d(
  "WAWebExtractVideoFieldsFromScheduledMsg",
  [
    "WALongInt",
    "WATimeUtils",
    "WAWebE2EProtoParserApi",
    "WAWebE2EProtoUtils",
    "WAWebMsgType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.videoMessage;
      if (t == null) return null;
      var n = t.accessibilityLabel,
        r = t.annotations,
        a = t.caption,
        i = t.directPath,
        l = t.fileEncSha256,
        s = t.fileLength,
        u = t.fileSha256,
        c = t.gifAttribution,
        d = t.gifPlayback,
        m = t.height,
        p = t.interactiveAnnotations,
        _ = t.jpegThumbnail,
        f = t.mediaKey,
        g = t.mediaKeyTimestamp,
        h = t.mimetype,
        y = t.seconds,
        C = t.staticUrl,
        b = t.streamingSidecar,
        v = t.thumbnailDirectPath,
        S = t.thumbnailEncSha256,
        R = t.thumbnailSha256,
        L = t.url,
        E = t.viewOnce,
        k = t.width;
      return {
        type: o("WAWebMsgType").MSG_TYPE.VIDEO,
        kind: o("WAWebMsgType").MsgKind.Video,
        deprecatedMms3Url: o("WAWebE2EProtoParserApi").decodeUrl(L),
        directPath: i || "",
        staticUrl: C || "",
        mimetype: h || "",
        caption: o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(a),
        filehash: o("WAWebE2EProtoParserApi").decodeBytes(u),
        encFilehash: o("WAWebE2EProtoParserApi").decodeBytes(l),
        size: s != null ? o("WALongInt").numberOrThrowIfTooLarge(s) : void 0,
        height: m || 0,
        width: k || 0,
        mediaKey: o("WAWebE2EProtoParserApi").decodeBytes(f),
        mediaKeyTimestamp:
          g != null
            ? o("WALongInt").numberOrThrowIfTooLarge(g)
            : o("WATimeUtils").unixTime(),
        duration: "" + (y || 0),
        body: o("WAWebE2EProtoParserApi").decodeBytes(_) || "",
        interactiveAnnotations: p != null && p.length > 0 ? p : r,
        isViewOnce: E === !0,
        thumbnailDirectPath: v,
        thumbnailSha256: o("WAWebE2EProtoParserApi").decodeBytes(R),
        thumbnailEncSha256: o("WAWebE2EProtoParserApi").decodeBytes(S),
        isGif: d,
        gifAttribution: c,
        accessibilityLabel: n,
        streamingSidecar: b,
      };
    }
    l.extractVideoFieldsFromScheduledMsg = e;
  },
  98,
);
