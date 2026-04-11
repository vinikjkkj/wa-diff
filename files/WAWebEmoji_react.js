__d(
  "WAWebEmoji.react",
  [
    "WALogger",
    "WAWebAssetLoader",
    "WAWebAssetLoaderSingleton",
    "WAWebClassnames",
    "WAWebEmoji",
    "WAWebEmojiAssetLoaderCompletionTracker",
    "WAWebImg.react",
    "WDSFocusStateStyles",
    "react",
    "stylex",
    "useWAWebFocusState",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useContext,
      _ = m.useEffect;
    function f(t) {
      var n = p(
          o("WAWebEmojiAssetLoaderCompletionTracker")
            .InitialEmojisCompletionContext,
        ),
        a = r("useWAWebFocusState")(),
        i = a[0],
        l = a[1];
      _(
        function () {
          var r = o("WAWebEmoji").EmojiUtil.getGlyphId(t.emoji);
          r != null &&
            (n.incrementLoadingEmojisCount(),
            o("WAWebAssetLoaderSingleton")
              .AssetLoader.loadEmoji(
                r,
                o("WAWebAssetLoader").LOAD_PRIORITY.LAZY_LOAD_EMOJI,
              )
              .catch(function (n) {
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAWebEmoji] load failed glyph=",
                      " emoji=",
                      " err=",
                      "",
                    ])),
                  r,
                  t.emoji,
                  String(n),
                );
              })
              .finally(function () {
                n.decrementLoadingEmojisCount();
              }));
        },
        [n, t.emoji],
      );
      var c = t.DEPRECATED_className,
        m = t.element,
        f = t.emoji,
        g = t.onLoad,
        h = t.selectable,
        y = t.selected,
        C = t.size,
        b = t.src,
        v = t.tabIndex,
        S = t.xstyle,
        R = o("WAWebEmoji").EmojiUtil.getGlyphId(f);
      if (R == null) {
        var L = Array.from(f)
          .map(function (e) {
            var t;
            return (t = e.codePointAt(0)) == null ? void 0 : t.toString(16);
          })
          .join(" ");
        return (
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[WAWebEmoji] no glyph, skip render. codePoints=",
                "",
              ])),
            L,
          ),
          null
        );
      }
      var E, k;
      b ||
        ((E = o("WAWebEmoji").EmojiUtil.getStyle(R, C)),
        (k = o("WAWebEmoji").EmojiUtil.getCssClasses(R, C)));
      var I = o("WAWebClassnames").classnamesConvertMeToStylexPlease(c, k),
        T = [
          S,
          y === !0 || l === !0
            ? o("WDSFocusStateStyles").WDSFocusStateStyles
                .genericFocusPersistent
            : void 0,
        ];
      return m === "span"
        ? d.jsx("span", {
            role: "button",
            ref: i,
            id: t["data-emoji-index"],
            "data-testid": void 0,
            "data-emoji": f,
            className: I + " " + (u || (u = r("stylex")))(T),
            "aria-label": f,
            style: E,
            onLoad: g,
            tabIndex: v,
            "data-unicode": t["data-unicode"],
            "data-variant": t["data-variant"],
            "data-emoji-index": t["data-emoji-index"],
          })
        : d.jsx(r("WAWebImg.react"), {
            ref: i,
            alt: f,
            className: I + " " + (u || (u = r("stylex")))(T),
            draggable: !1,
            onLoad: g,
            plainText: f,
            selectable: h,
            style: E,
            src: b,
            onClick: t.onClick,
            testid: void 0,
          });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  98,
);
