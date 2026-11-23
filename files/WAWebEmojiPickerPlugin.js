__d(
  "WAWebEmojiPickerPlugin",
  [
    "LexicalComposerContext",
    "WAWebEmoji",
    "WAWebEmoji.react",
    "WAWebEmojiKeywordToUnicode",
    "WAWebEmojiVariantCollection",
    "WAWebLexicalTypeAheadRow.react",
    "WAWebRecentEmojiCollection",
    "react",
    "stylex",
    "useWAWebLexicalTypeAhead",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useMemo,
      d = {
        marginInline5: {
          marginInlineStart: "xpcyujq",
          marginInlineEnd: "xf6vk7d",
          marginLeft: null,
          marginRight: null,
          $$css: !0,
        },
        padding5: {
          paddingTop: "x123j3cw",
          paddingInlineEnd: "x1gabggj",
          paddingBottom: "xs9asl8",
          paddingInlineStart: "xaso8d8",
          $$css: !0,
        },
      },
      m = ":",
      p = 2,
      _ = 50,
      f = 32,
      g = 10,
      h = f + g * 2,
      y = {
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
    function C(e) {
      return o("WAWebEmoji").EmojiUtil.getSkinToneBase(e)
        ? o("WAWebEmojiVariantCollection").EmojiVariantCollection.getVariant(e)
        : null;
    }
    function b() {
      var t = o("LexicalComposerContext").useLexicalComposerContext(),
        n = t[0],
        a = o("useWAWebLexicalTypeAhead").useTypeAhead(n, m, {
          minQueryLength: p,
          maxQueryLength: _,
          boundary: !0,
        }),
        i = a.leadOffset,
        l = a.omitQuery,
        s = a.query,
        g = a.replaceQuery,
        b = c(
          function () {
            return s == null
              ? []
              : o("WAWebEmojiKeywordToUnicode").emojiKeywordToUnicodeSearch(s);
          },
          [s],
        ),
        v = function (t) {
          (o("WAWebRecentEmojiCollection").RecentEmojiCollection.increment(t),
            g(t));
        },
        S = function () {
          l();
        },
        R = b.map(function (t, n) {
          return {
            renderFn: function (a) {
              var o = C(t),
                i = [d.marginInline5, d.padding5];
              return (
                a && i.push(y.focused),
                u.jsx(
                  "div",
                  babelHelpers.extends({}, (e || (e = r("stylex"))).props(i), {
                    children: u.jsx(
                      r("WAWebEmoji.react"),
                      {
                        element: "span",
                        emoji: o != null ? o : t,
                        size: "large",
                        "data-unicode": t,
                        "data-variant": o,
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
              var e = C(t);
              return v(e != null ? e : t);
            },
            skipKeyboardNav: !1,
            ariaLabel: t,
          };
        });
      return u.jsx(r("WAWebLexicalTypeAheadRow.react"), {
        items: R,
        itemWidth: h,
        itemHeight: f,
        leadOffset: i,
        onCancel: S,
      });
    }
    ((b.displayName = b.name + " [from " + i.id + "]"), (l.default = b));
  },
  98,
);
