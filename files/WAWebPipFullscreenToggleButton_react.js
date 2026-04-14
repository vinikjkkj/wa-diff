__d(
  "WAWebPipFullscreenToggleButton.react",
  [
    "fbt",
    "WAWebSvgButton.react",
    "WAWebVideoExitFullscreenIcon.react",
    "WAWebVideoFullscreenIcon.react",
    "react",
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
      var t = e.isFullscreenMode,
        n = e.isStatic,
        a = e.onClick,
        i = e.ref,
        l = t
          ? o("WAWebVideoExitFullscreenIcon.react").VideoExitFullscreenIcon
          : o("WAWebVideoFullscreenIcon.react").VideoFullscreenIcon,
        d = t ? s._(/*BTDS*/ "Exit full screen") : s._(/*BTDS*/ "Full screen");
      return u.jsx(r("WAWebSvgButton.react"), {
        tabIndex: 0,
        ref: i,
        xstyle: [c.button, t && c.fullscreen, n && c.static],
        onClick: a,
        "aria-label": d,
        Icon: l,
        displayInline: !0,
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
