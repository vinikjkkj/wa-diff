__d(
  "WAWebVoipCallLinkLocalPreview",
  ["WAWebLinkPreviewUtils", "WAWebLinkify", "WAWebProtobufsE2E.pb"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WAWebLinkify").findLink(e, !0);
      if (t == null) return null;
      var n = o("WAWebLinkPreviewUtils").genLinkPreview({
        url: t.url,
        linkDetails: {
          title: t.domain,
          description: t.url,
          richPreviewType: o("WAWebProtobufsE2E.pb")
            .Message$ExtendedTextMessage$PreviewType.NONE,
          doNotPlayInline: !0,
          isLoading: !1,
        },
      });
      return n.data;
    }
    l.buildCallLinkLocalPreview = e;
  },
  98,
);
