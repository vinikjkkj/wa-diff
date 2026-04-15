__d(
  "WAWebConversationBackground.react",
  ["WAWebThemeContext", "WAWebWallpaper", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useContext;
    function c(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.showDoodle,
        r = e.wallpaper,
        a = u(o("WAWebThemeContext").ThemeContext),
        i = a.theme,
        l = n;
      if (l && o("WAWebWallpaper").colorExistsInTheme(r, i)) {
        var c;
        t[0] !== i || t[1] !== r
          ? ((c = o("WAWebWallpaper").getDoodleOpacity(r, i)),
            (t[0] = i),
            (t[1] = r),
            (t[2] = c))
          : (c = t[2]);
        var d;
        t[3] !== c
          ? ((d = { opacity: c }), (t[3] = c), (t[4] = d))
          : (d = t[4]);
        var m = d,
          p = o("WAWebWallpaper").getDoodleAssetName(r, i),
          _;
        if (t[5] !== p) {
          var f;
          ((_ = ((f = {}), (f[p] = !0), f)), (t[5] = p), (t[6] = _));
        } else _ = t[6];
        var g = _,
          h = "conversation-background-" + r,
          y;
        t[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((y =
              "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x182nak8 x1wwuglj x1vs56c6"),
            (t[7] = y))
          : (y = t[7]);
        var C;
        return (
          t[8] !== g || t[9] !== h || t[10] !== m
            ? ((C = s.jsx(
                "div",
                babelHelpers.extends({ className: y }, g, {
                  style: m,
                  "data-testid": void 0,
                }),
              )),
              (t[8] = g),
              (t[9] = h),
              (t[10] = m),
              (t[11] = C))
            : (C = t[11]),
          C
        );
      }
      return null;
    }
    l.default = c;
  },
  98,
);
