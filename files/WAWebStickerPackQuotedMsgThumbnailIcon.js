__d(
  "WAWebStickerPackQuotedMsgThumbnailIcon",
  ["WAWebMediaMsgPreview.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.msg,
        r = n.mediaData,
        a = r.fullPreviewData,
        i = r.preview,
        l = i != null || a != null;
      if (!l) return null;
      var u;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = { className: "xk1v102" }), (t[0] = u))
        : (u = t[0]);
      var c;
      return (
        t[1] !== n.mediaData
          ? ((c = s.jsx(
              "div",
              babelHelpers.extends({}, u, {
                children: s.jsx(
                  o("WAWebMediaMsgPreview.react").MediaMsgPreview,
                  { mediaData: n.mediaData },
                ),
              }),
            )),
            (t[1] = n.mediaData),
            (t[2] = c))
          : (c = t[2]),
        c
      );
    }
    l.default = u;
  },
  98,
);
