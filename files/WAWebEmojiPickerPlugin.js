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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(17),
        n = o("LexicalComposerContext").useLexicalComposerContext(),
        a = n[0],
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = { minQueryLength: p, maxQueryLength: _, boundary: !0 }),
          (t[0] = i))
        : (i = t[0]);
      var l = o("useWAWebLexicalTypeAhead").useTypeAhead(a, m, i),
        s = l.leadOffset,
        c = l.omitQuery,
        g = l.query,
        b = l.replaceQuery,
        v;
      e: {
        if (g == null) {
          var S;
          (t[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((S = []), (t[1] = S))
            : (S = t[1]),
            (v = S));
          break e;
        }
        var R;
        (t[2] !== g
          ? ((R = o("WAWebEmojiKeywordToUnicode").emojiKeywordToUnicodeSearch(
              g,
            )),
            (t[2] = g),
            (t[3] = R))
          : (R = t[3]),
          (v = R));
      }
      var L = v,
        E;
      t[4] !== b
        ? ((E = function (t) {
            (o("WAWebRecentEmojiCollection").RecentEmojiCollection.increment(t),
              b(t));
          }),
          (t[4] = b),
          (t[5] = E))
        : (E = t[5]);
      var k = E,
        I;
      t[6] !== c
        ? ((I = function () {
            c();
          }),
          (t[6] = c),
          (t[7] = I))
        : (I = t[7]);
      var T = I,
        D;
      if (t[8] !== L || t[9] !== k) {
        var x;
        (t[11] !== k
          ? ((x = function (n, o) {
              return {
                renderFn: function (a) {
                  var t = C(n),
                    i = [d.marginInline5, d.padding5];
                  return (
                    a && i.push(y.focused),
                    u.jsx(
                      "div",
                      babelHelpers.extends(
                        {},
                        (e || (e = r("stylex"))).props(i),
                        {
                          children: u.jsx(
                            r("WAWebEmoji.react"),
                            {
                              element: "span",
                              emoji: t != null ? t : n,
                              size: "large",
                              "data-unicode": n,
                              "data-variant": t,
                              tabIndex: -1,
                              "data-emoji-index": o,
                            },
                            n,
                          ),
                        },
                      ),
                    )
                  );
                },
                onSelect: function () {
                  var e = C(n);
                  return k(e != null ? e : n);
                },
                skipKeyboardNav: !1,
                ariaLabel: n,
              };
            }),
            (t[11] = k),
            (t[12] = x))
          : (x = t[12]),
          (D = L.map(x)),
          (t[8] = L),
          (t[9] = k),
          (t[10] = D));
      } else D = t[10];
      var $ = D,
        P;
      return (
        t[13] !== T || t[14] !== $ || t[15] !== s
          ? ((P = u.jsx(r("WAWebLexicalTypeAheadRow.react"), {
              items: $,
              itemWidth: h,
              itemHeight: f,
              leadOffset: s,
              onCancel: T,
            })),
            (t[13] = T),
            (t[14] = $),
            (t[15] = s),
            (t[16] = P))
          : (P = t[16]),
        P
      );
    }
    l.default = b;
  },
  98,
);
