__d(
  "WAWebNativeFlowQuotedMsgThumbnailIcon",
  ["WAWebMediaMsgPreview.react", "WAWebProtobufsE2E.pb", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.msg;
      if (
        t.headerType !==
        o("WAWebProtobufsE2E.pb").Message$ButtonsMessage$HeaderType.IMAGE
      )
        return null;
      var n = t.mediaData;
      return n.preview == null && n.fullPreviewData == null
        ? null
        : s.jsx("div", {
            className: "xk1v102",
            children: s.jsx(o("WAWebMediaMsgPreview.react").MediaMsgPreview, {
              mediaData: n,
            }),
          });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
