__d(
  "WAWebBotUnifiedResponseMutationUtils",
  ["WALogger", "WALongInt"],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      var t,
        n =
          e == null ||
          (t = e.botMetadata) == null ||
          (t = t.unifiedResponseMutation) == null
            ? void 0
            : t.mediaDetailsMetadataList;
      if (!(n == null || n.length === 0)) {
        var r = [];
        for (var o of n) {
          var a = c(o);
          a != null && r.push(a);
        }
        return r.length > 0 ? r : void 0;
      }
    }
    function c(t) {
      if (t != null) {
        var n = t.id;
        if (n == null) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[unified-response-mutation] dropping mediaDetailsMetadata with no id",
                ])),
            )
            .sendLogs("unified-response-mutation-media-missing-id");
          return;
        }
        var r = d(t.highResMedia),
          a = d(t.previewMedia);
        if (!(r == null && a == null))
          return { id: n, highResMedia: r, previewMedia: a };
      }
    }
    function d(e) {
      var t;
      if (e != null) {
        var n = e.directPath,
          r = e.fileEncSha256,
          a = e.fileSha256,
          i = e.mediaKey;
        if (n == null || i == null || r == null || a == null) {
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[unified-response-mutation] dropping media missing required download fields",
                ])),
            )
            .sendLogs(
              "unified-response-mutation-media-missing-download-fields",
            );
          return;
        }
        return {
          directPath: n,
          mediaKey: i,
          fileEncSha256: r,
          fileSha256: a,
          mediaKeyTimestamp: o("WALongInt").maybeNumberOrThrowIfTooLarge(
            e.mediaKeyTimestamp,
          ),
          mimetype: (t = e.mimetype) != null ? t : void 0,
        };
      }
    }
    function m(e) {
      if (e.length !== 0) return { mediaDetailsMetadataList: e.map(p) };
    }
    function p(e) {
      return {
        id: e.id,
        highResMedia: e.highResMedia != null ? _(e.highResMedia) : void 0,
        previewMedia: e.previewMedia != null ? _(e.previewMedia) : void 0,
      };
    }
    function _(e) {
      var t, n;
      return {
        directPath: e.directPath,
        mediaKey: e.mediaKey,
        fileEncSha256: e.fileEncSha256,
        fileSha256: e.fileSha256,
        mediaKeyTimestamp: (t = e.mediaKeyTimestamp) != null ? t : void 0,
        mimetype: (n = e.mimetype) != null ? n : void 0,
      };
    }
    ((l.parseUnifiedResponseMutationMediaList = u),
      (l.parseMediaDetailsMetadata = c),
      (l.parseBotMediaMetadata = d),
      (l.generateUnifiedResponseMutation = m),
      (l.generateMediaDetailsMetadata = p),
      (l.generateBotMediaMetadata = _));
  },
  98,
);
