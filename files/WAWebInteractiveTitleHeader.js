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
    "WDSMargins.stylex",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = { marginInlineStart6: { marginInlineStart: "xdzw4kq", $$css: !0 } },
      c = {
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
    function d(e) {
      var t = o("WABidi").dir(e),
        n = t === "rtl";
      return { direction: t, dirMismatch: n !== r("WAWebL10N").isRTL() };
    }
    function m(e) {
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
        m = i.title,
        p,
        _,
        f,
        g;
      t[2] !== n || t[3] !== m
        ? ((g = o("WAWebMsgModelPropUtils").isTrusted(n.unsafe())),
          (p = o("WAWebFlex.react").FlexColumn),
          t[8] === Symbol.for("react.memo_cache_sentinel")
            ? ((_ = [
                o("WDSMargins.stylex").wdsMargins.marginEnd4,
                u.marginInlineStart6,
              ]),
              (t[8] = _))
            : (_ = t[8]),
          (f =
            m != null
              ? s.jsx(
                  o("WAWebEmojiText.react").EmojiText,
                  babelHelpers.extends(
                    {},
                    d(m),
                    o(
                      "WAWebFormatHeaderFooter",
                    ).enableHeaderAndFooterFormatting(
                      o("WAWebMsgLinks").getHeaderLinks(n.unsafe()),
                      g,
                    ),
                    { text: m, xstyle: c.title, inferLinesDirection: !0 },
                  ),
                )
              : null),
          (t[2] = n),
          (t[3] = m),
          (t[4] = p),
          (t[5] = _),
          (t[6] = f),
          (t[7] = g))
        : ((p = t[4]), (_ = t[5]), (f = t[6]), (g = t[7]));
      var h;
      t[9] !== l || t[10] !== g
        ? ((h =
            l != null
              ? s.jsx(
                  o("WAWebEmojiText.react").EmojiText,
                  babelHelpers.extends({}, d(l), {
                    selectable: g,
                    text: l,
                    xstyle: c.subtitle,
                    inferLinesDirection: !0,
                  }),
                )
              : null),
          (t[9] = l),
          (t[10] = g),
          (t[11] = h))
        : (h = t[11]);
      var y;
      return (
        t[12] !== p || t[13] !== _ || t[14] !== f || t[15] !== h
          ? ((y = s.jsxs(p, { xstyle: _, children: [f, h] })),
            (t[12] = p),
            (t[13] = _),
            (t[14] = f),
            (t[15] = h),
            (t[16] = y))
          : (y = t[16]),
        y
      );
    }
    l.default = m;
  },
  98,
);
