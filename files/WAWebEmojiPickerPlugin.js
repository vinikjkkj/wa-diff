__d(
  "WAWebEmojiPickerPlugin",
  [
    "LexicalComposerContext",
    "WAWebEmoji",
    "WAWebEmoji.react",
    "WAWebEmojiKeywordToUnicode",
    "WAWebEmojiVariantCollection",
    "WAWebLexicalTypeAheadRow.react",
    "WAWebUISpacing",
    "react",
    "stylex",
    "useWAWebLexicalTypeAhead",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useMemo,
      d = ":",
      m = 2,
      p = 50,
      _ = 32,
      f = 10,
      g = _ + f * 2,
      h = {
        focused: {
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          boxShadow: "x1r02ubn",
          backgroundColor: "x1abdmlv",
          $$css: !0,
        },
      };
    function y(e) {
      return o("WAWebEmoji").EmojiUtil.getSkinToneBase(e)
        ? o("WAWebEmojiVariantCollection").EmojiVariantCollection.getVariant(e)
        : null;
    }
    function C() {
      var t = o("LexicalComposerContext").useLexicalComposerContext(),
        n = t[0],
        a = o("useWAWebLexicalTypeAhead").useTypeAhead(n, d, {
          minQueryLength: m,
          maxQueryLength: p,
          boundary: !0,
        }),
        i = a.leadOffset,
        l = a.omitQuery,
        s = a.query,
        f = a.replaceQuery,
        C = c(
          function () {
            return s == null
              ? []
              : o("WAWebEmojiKeywordToUnicode").emojiKeywordToUnicodeSearch(s);
          },
          [s],
        ),
        b = function (t) {
          f(t);
        },
        v = function () {
          l();
        },
        S = C.map(function (t, n) {
          return {
            renderFn: function (i) {
              var a = y(t),
                l = [
                  o("WAWebUISpacing").uiMargin.horiz5,
                  o("WAWebUISpacing").uiPadding.all5,
                ];
              return (
                i && l.push(h.focused),
                u.jsx(
                  "div",
                  babelHelpers.extends({}, (e || (e = r("stylex"))).props(l), {
                    children: u.jsx(
                      r("WAWebEmoji.react"),
                      {
                        element: "span",
                        emoji: a != null ? a : t,
                        size: "large",
                        "data-unicode": t,
                        "data-variant": a,
                        tabIndex: -1,
                        "data-emoji-index": n,
                      },
                      t,
                    ),
                  }),
                )
              );
            },
            onSelect: function () {
              var e = y(t);
              return b(e != null ? e : t);
            },
            skipKeyboardNav: !1,
            ariaLabel: t,
          };
        });
      return u.jsx(r("WAWebLexicalTypeAheadRow.react"), {
        items: S,
        itemWidth: g,
        itemHeight: _,
        leadOffset: i,
        onCancel: v,
      });
    }
    ((C.displayName = C.name + " [from " + i.id + "]"), (l.default = C));
  },
  98,
);
