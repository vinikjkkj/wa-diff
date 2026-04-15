__d(
  "WAWebPipFullscreenToggleButton.react",
  [
    "fbt",
    "WAWebSvgButton.react",
    "WAWebVideoExitFullscreenIcon.react",
    "WAWebVideoFullscreenIcon.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        button: {
          position: "x10l6tqk",
          top: "xfr5jun",
          insetInlineStart: "x1r4y97",
          left: null,
          right: null,
          zIndex: "x11uqc5h",
          cursor: "x1ypdohk",
          $$css: !0,
        },
        static: { position: "x1uhb9sk", $$css: !0 },
        fullscreen: {
          top: "xjqd8mg",
          insetInlineStart: "xfwv6vp",
          left: null,
          right: null,
          $$css: !0,
        },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.isFullscreenMode,
        a = e.isStatic,
        i = e.onClick,
        l = e.ref,
        d = n
          ? o("WAWebVideoExitFullscreenIcon.react").VideoExitFullscreenIcon
          : o("WAWebVideoFullscreenIcon.react").VideoFullscreenIcon,
        m;
      t[0] !== n
        ? ((m = n
            ? s._(/*BTDS*/ "Exit full screen")
            : s._(/*BTDS*/ "Full screen")),
          (t[0] = n),
          (t[1] = m))
        : (m = t[1]);
      var p = m,
        _ = n && c.fullscreen,
        f = a && c.static,
        g;
      t[2] !== _ || t[3] !== f
        ? ((g = [c.button, _, f]), (t[2] = _), (t[3] = f), (t[4] = g))
        : (g = t[4]);
      var h;
      return (
        t[5] !== d || t[6] !== p || t[7] !== i || t[8] !== l || t[9] !== g
          ? ((h = u.jsx(r("WAWebSvgButton.react"), {
              tabIndex: 0,
              ref: l,
              xstyle: g,
              onClick: i,
              "aria-label": p,
              Icon: d,
              displayInline: !0,
            })),
            (t[5] = d),
            (t[6] = p),
            (t[7] = i),
            (t[8] = l),
            (t[9] = g),
            (t[10] = h))
          : (h = t[10]),
        h
      );
    }
    l.default = d;
  },
  226,
);
