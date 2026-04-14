__d(
  "WAWebConversationBackground.react",
  ["WAWebThemeContext", "WAWebWallpaper", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useContext;
    function c(e) {
      var t = e.showDoodle,
        n = e.wallpaper,
        r = u(o("WAWebThemeContext").ThemeContext),
        a = r.theme,
        i = t;
      if (i && o("WAWebWallpaper").colorExistsInTheme(n, a)) {
        var l,
          c = { opacity: o("WAWebWallpaper").getDoodleOpacity(n, a) },
          d = o("WAWebWallpaper").getDoodleAssetName(n, a),
          m = ((l = {}), (l[d] = !0), l),
          p = "conversation-background-" + n;
        return s.jsx(
          "div",
          babelHelpers.extends(
            {
              className:
                "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x182nak8 x1wwuglj x1vs56c6",
            },
            m,
            { style: c, "data-testid": void 0 },
          ),
        );
      }
      return null;
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
