__d(
  "WAWebInteractiveTitleHeader",
  [
    "WABidi",
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "WAWebFormatHeaderFooter",
    "WAWebL10N",
    "WAWebMsgLinks",
    "WAWebMsgModelPropUtils",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        title: {
          fontSize: "x6prxxf",
          fontWeight: "xk50ysn",
          overflowWrap: "x1mzt3pk",
          whiteSpace: "x126k92a",
          width: "xh8yej3",
          $$css: !0,
        },
        subtitle: { color: "xhslqc4", $$css: !0 },
      };
    function c(e) {
      var t = o("WABidi").dir(e),
        n = t === "rtl";
      return { direction: t, dirMismatch: n !== r("WAWebL10N").isRTL() };
    }
    function d(e) {
      var t = o("react-compiler-runtime").c(17),
        n = e.msg,
        r;
      if (t[0] !== n.interactiveHeader) {
        var a;
        ((r = (a = n.interactiveHeader) != null ? a : {}),
          (t[0] = n.interactiveHeader),
          (t[1] = r));
      } else r = t[1];
      var i = r,
        l = i.subtitle,
        d = i.title,
        m,
        p,
        _,
        f;
      t[2] !== n || t[3] !== d
        ? ((f = o("WAWebMsgModelPropUtils").isTrusted(n.unsafe())),
          (m = o("WAWebFlex.react").FlexColumn),
          t[8] === Symbol.for("react.memo_cache_sentinel")
            ? ((p = [
                o("WAWebUISpacing").uiMargin.end4,
                o("WAWebUISpacing").uiMargin.start6,
              ]),
              (t[8] = p))
            : (p = t[8]),
          (_ =
            d != null
              ? s.jsx(
                  o("WAWebEmojiText.react").EmojiText,
                  babelHelpers.extends(
                    {},
                    c(d),
                    o(
                      "WAWebFormatHeaderFooter",
                    ).enableHeaderAndFooterFormatting(
                      o("WAWebMsgLinks").getHeaderLinks(n.unsafe()),
                      f,
                    ),
                    { text: d, xstyle: u.title, inferLinesDirection: !0 },
                  ),
                )
              : null),
          (t[2] = n),
          (t[3] = d),
          (t[4] = m),
          (t[5] = p),
          (t[6] = _),
          (t[7] = f))
        : ((m = t[4]), (p = t[5]), (_ = t[6]), (f = t[7]));
      var g;
      t[9] !== l || t[10] !== f
        ? ((g =
            l != null
              ? s.jsx(
                  o("WAWebEmojiText.react").EmojiText,
                  babelHelpers.extends({}, c(l), {
                    selectable: f,
                    text: l,
                    xstyle: u.subtitle,
                    inferLinesDirection: !0,
                  }),
                )
              : null),
          (t[9] = l),
          (t[10] = f),
          (t[11] = g))
        : (g = t[11]);
      var h;
      return (
        t[12] !== m || t[13] !== p || t[14] !== _ || t[15] !== g
          ? ((h = s.jsxs(m, { xstyle: p, children: [_, g] })),
            (t[12] = m),
            (t[13] = p),
            (t[14] = _),
            (t[15] = g),
            (t[16] = h))
          : (h = t[16]),
        h
      );
    }
    l.default = d;
  },
  98,
);
