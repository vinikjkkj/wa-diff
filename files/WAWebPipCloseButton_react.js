__d(
  "WAWebPipCloseButton.react",
  ["WAWebFbtCommon", "WAWebSvgButton.react", "WAWebVideoXIcon.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        closeBtn: {
          position: "x10l6tqk",
          top: "xfr5jun",
          insetInlineEnd: "x9q68il",
          left: null,
          right: null,
          zIndex: "x11uqc5h",
          cursor: "x1ypdohk",
          $$css: !0,
        },
        closeBtnNew: {
          top: "x1atx4j1",
          insetInlineEnd: "x1f889gz",
          left: null,
          right: null,
          $$css: !0,
        },
        static: { position: "x1uhb9sk", $$css: !0 },
        fullscreen: {
          top: "xuivejd",
          insetInlineEnd: "x2ss2xj",
          left: null,
          right: null,
          $$css: !0,
        },
      };
    function c(e) {
      var t = e.isFullscreenMode,
        n = e.isStatic,
        a = e.onClick,
        i = e.ref,
        l = 16,
        c = t ? 34 : l;
      return s.jsx(r("WAWebSvgButton.react"), {
        tabIndex: 0,
        ref: i,
        xstyle: [u.closeBtn, t && u.fullscreen, u.closeBtnNew, n && u.static],
        onClick: a,
        "aria-label": r("WAWebFbtCommon")("Close"),
        Icon: o("WAWebVideoXIcon.react").VideoXIcon,
        displayInline: !0,
        height: c,
        width: c,
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
