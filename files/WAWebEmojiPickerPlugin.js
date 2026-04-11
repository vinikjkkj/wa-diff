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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(17),
        n = o("LexicalComposerContext").useLexicalComposerContext(),
        a = n[0],
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = { minQueryLength: m, maxQueryLength: p, boundary: !0 }),
          (t[0] = i))
        : (i = t[0]);
      var l = o("useWAWebLexicalTypeAhead").useTypeAhead(a, d, i),
        s = l.leadOffset,
        c = l.omitQuery,
        f = l.query,
        C = l.replaceQuery,
        b;
      e: {
        if (f == null) {
          var v;
          (t[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((v = []), (t[1] = v))
            : (v = t[1]),
            (b = v));
          break e;
        }
        var S;
        (t[2] !== f
          ? ((S = o("WAWebEmojiKeywordToUnicode").emojiKeywordToUnicodeSearch(
              f,
            )),
            (t[2] = f),
            (t[3] = S))
          : (S = t[3]),
          (b = S));
      }
      var R = b,
        L;
      t[4] !== C
        ? ((L = function (t) {
            C(t);
          }),
          (t[4] = C),
          (t[5] = L))
        : (L = t[5]);
      var E = L,
        k;
      t[6] !== c
        ? ((k = function () {
            c();
          }),
          (t[6] = c),
          (t[7] = k))
        : (k = t[7]);
      var I = k,
        T;
      if (t[8] !== R || t[9] !== E) {
        var D;
        (t[11] !== E
          ? ((D = function (n, a) {
              return {
                renderFn: function (i) {
                  var t = y(n),
                    l = [
                      o("WAWebUISpacing").uiMargin.horiz5,
                      o("WAWebUISpacing").uiPadding.all5,
                    ];
                  return (
                    i && l.push(h.focused),
                    u.jsx(
                      "div",
                      babelHelpers.extends(
                        {},
                        (e || (e = r("stylex"))).props(l),
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
                              "data-emoji-index": a,
                            },
                            n,
                          ),
                        },
                      ),
                    )
                  );
                },
                onSelect: function () {
                  var e = y(n);
                  return E(e != null ? e : n);
                },
                skipKeyboardNav: !1,
                ariaLabel: n,
              };
            }),
            (t[11] = E),
            (t[12] = D))
          : (D = t[12]),
          (T = R.map(D)),
          (t[8] = R),
          (t[9] = E),
          (t[10] = T));
      } else T = t[10];
      var x = T,
        $;
      return (
        t[13] !== I || t[14] !== x || t[15] !== s
          ? (($ = u.jsx(r("WAWebLexicalTypeAheadRow.react"), {
              items: x,
              itemWidth: g,
              itemHeight: _,
              leadOffset: s,
              onCancel: I,
            })),
            (t[13] = I),
            (t[14] = x),
            (t[15] = s),
            (t[16] = $))
          : ($ = t[16]),
        $
      );
    }
    l.default = C;
  },
  98,
);
