__d(
  "WAWebViewOnceNux.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebText.react",
    "WAWebWdsIllViewOncePhotoIcon.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        graphic: {
          marginBottom: "xod5an3",
          paddingTop: "x1h678fw",
          paddingInlineEnd: "xcldk2z",
          paddingBottom: "xv6tirj",
          paddingInlineStart: "x1phvje8",
          $$css: !0,
        },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(17),
        n = e.onOkClick,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = { surface: "unknown", viewName: "view-once-nux-media" }),
          (t[0] = a))
        : (a = t[0]);
      var i;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = s._(/*BTDS*/ "Learn more")), (t[1] = i))
        : (i = t[1]);
      var l;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = u.jsx(r("WAWebFlexItem.react"), {
            xstyle: c.graphic,
            align: "center",
            children: u.jsx(
              o("WAWebWdsIllViewOncePhotoIcon.react").WdsIllViewOncePhotoIcon,
              { width: 195 },
            ),
          })),
          (t[2] = l))
        : (l = t[2]);
      var d;
      t[3] !== e.isPhoto
        ? ((d = e.isPhoto
            ? s._(/*BTDS*/ "This photo is set to view once")
            : s._(/*BTDS*/ "This video is set to view once")),
          (t[3] = e.isPhoto),
          (t[4] = d))
        : (d = t[4]);
      var p;
      t[5] !== d
        ? ((p = u.jsx(o("WAWebText.react").WAWebTextLarge, { children: d })),
          (t[5] = d),
          (t[6] = p))
        : (p = t[6]);
      var _;
      t[7] !== e.isPhoto
        ? ((_ = e.isPhoto
            ? s._(
                /*BTDS*/ "For more privacy, this photo will disappear after you close it.",
              )
            : s._(
                /*BTDS*/ "For more privacy, this video will disappear after you close it.",
              )),
          (t[7] = e.isPhoto),
          (t[8] = _))
        : (_ = t[8]);
      var f;
      t[9] !== _
        ? ((f = u.jsx(o("WAWebText.react").WAWebTextMuted, { children: _ })),
          (t[9] = _),
          (t[10] = f))
        : (f = t[10]);
      var g;
      t[11] !== p || t[12] !== f
        ? ((g = u.jsxs(o("WAWebFlex.react").FlexColumn, {
            children: [l, p, f],
          })),
          (t[11] = p),
          (t[12] = f),
          (t[13] = g))
        : (g = t[13]);
      var h;
      return (
        t[14] !== n || t[15] !== g
          ? ((h = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: a,
              onOK: n,
              cancelText: i,
              onCancel: m,
              children: g,
            })),
            (t[14] = n),
            (t[15] = g),
            (t[16] = h))
          : (h = t[16]),
        h
      );
    }
    function m() {
      o("WAWebExternalLink.react").openExternalLink(
        o("WAWebFaqUrl").getViewOnceFaqUrl(),
      );
    }
    l.default = d;
  },
  226,
);
