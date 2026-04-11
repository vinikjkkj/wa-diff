__d(
  "WAWebBizCatalogPreviewContainer.react",
  [
    "WAWebExternalLink.react",
    "WAWebMediaLinkPreview.react",
    "WAWebMsgGetters",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.msg,
        a;
      if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
        var i;
        ((a = [
          (i = o("WAWebMsgGetters")).getThumbnail,
          i.getTitle,
          i.getDescription,
          i.getMatchedText,
          i.getIsSentByMe,
          i.getStar,
          i.getIsKept,
        ]),
          (t[0] = a));
      } else a = t[0];
      var l = o("useWAWebMsgValues").useMsgValues(n.id, a),
        u = l[0],
        c = l[1],
        d = l[2],
        m = l[3],
        p = l[4],
        _ = l[5],
        f = l[6],
        g;
      t[1] !== m
        ? ((g = function () {
            var e = m;
            o("WAWebExternalLink.react").openExternalLink(e);
          }),
          (t[1] = m),
          (t[2] = g))
        : (g = t[2]);
      var h = g,
        y;
      return (
        t[3] !== d ||
        t[4] !== h ||
        t[5] !== f ||
        t[6] !== p ||
        t[7] !== _ ||
        t[8] !== u ||
        t[9] !== c
          ? ((y = s.jsx(r("WAWebMediaLinkPreview.react"), {
              title: c,
              description: d,
              thumbnailJpeg: u,
              onClick: h,
              isSentByMe: p,
              star: _,
              kept: f,
              isLoading: !1,
            })),
            (t[3] = d),
            (t[4] = h),
            (t[5] = f),
            (t[6] = p),
            (t[7] = _),
            (t[8] = u),
            (t[9] = c),
            (t[10] = y))
          : (y = t[10]),
        y
      );
    }
    l.default = u;
  },
  98,
);
