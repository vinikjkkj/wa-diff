__d(
  "WAWebNativeFlowQuotedMsgThumbnailIcon",
  [
    "WAWebMediaMsgPreview.react",
    "WAWebProtobufsE2E.pb",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.msg;
      if (
        n.headerType !==
        o("WAWebProtobufsE2E.pb").Message$ButtonsMessage$HeaderType.IMAGE
      )
        return null;
      var r = n.mediaData;
      if (r.preview == null && r.fullPreviewData == null) return null;
      var a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = { className: "xk1v102" }), (t[0] = a))
        : (a = t[0]);
      var i;
      return (
        t[1] !== r
          ? ((i = s.jsx(
              "div",
              babelHelpers.extends({}, a, {
                children: s.jsx(
                  o("WAWebMediaMsgPreview.react").MediaMsgPreview,
                  { mediaData: r },
                ),
              }),
            )),
            (t[1] = r),
            (t[2] = i))
          : (i = t[2]),
        i
      );
    }
    l.default = u;
  },
  98,
);
