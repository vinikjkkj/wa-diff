__d(
  "WAWebInteractiveQuotedMsgThumbnailIcon",
  ["WAWebMediaMsgPreview.react", "WAWebQuotedMsgQuotedMedia.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.msg,
        n = t.interactiveHeader || {},
        r = n.mediaType,
        a = n.thumbnail;
      return r == null
        ? null
        : s.jsx("div", {
            className: "xk1v102",
            children: s.jsx(o("WAWebMediaMsgPreview.react").MediaMsgPreview, {
              mediaData: t.mediaData,
              fallbackPreview:
                a != null &&
                s.jsx(
                  o("WAWebQuotedMsgQuotedMedia.react").Base64BackgroundImage,
                  { source: a },
                ),
            }),
          });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
