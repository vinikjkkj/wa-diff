__d(
  "WAWebInteractiveQuotedMsgThumbnailIcon",
  [
    "WAWebMediaMsgPreview.react",
    "WAWebQuotedMsgQuotedMedia.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.msg,
        r;
      t[0] !== n.interactiveHeader
        ? ((r = n.interactiveHeader || {}),
          (t[0] = n.interactiveHeader),
          (t[1] = r))
        : (r = t[1]);
      var a = r,
        i = a.mediaType,
        l = a.thumbnail;
      if (i == null) return null;
      var u;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = { className: "xk1v102" }), (t[2] = u))
        : (u = t[2]);
      var c;
      t[3] !== l
        ? ((c =
            l != null &&
            s.jsx(o("WAWebQuotedMsgQuotedMedia.react").Base64BackgroundImage, {
              source: l,
            })),
          (t[3] = l),
          (t[4] = c))
        : (c = t[4]);
      var d;
      return (
        t[5] !== n.mediaData || t[6] !== c
          ? ((d = s.jsx(
              "div",
              babelHelpers.extends({}, u, {
                children: s.jsx(
                  o("WAWebMediaMsgPreview.react").MediaMsgPreview,
                  { mediaData: n.mediaData, fallbackPreview: c },
                ),
              }),
            )),
            (t[5] = n.mediaData),
            (t[6] = c),
            (t[7] = d))
          : (d = t[7]),
        d
      );
    }
    l.default = u;
  },
  98,
);
