__d(
  "WAWebInteractiveTitleHeader",
  [
    "WABidi",
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "WAWebFormatHeaderFooter",
    "WAWebL10N",
    "WAWebMsgGetters",
    "WAWebMsgLinks",
    "WDSMargins.stylex",
    "react",
    "react-compiler-runtime",
    "useWAWebIsMsgTrusted",
    "useWAWebMsgValues",
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
      var t = o("WABidi").bidiDir(e),
        n = t === "rtl";
      return { direction: t, dirMismatch: n !== r("WAWebL10N").isRTL() };
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.msgKey,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = [
            o("WAWebMsgGetters").getInteractiveHeader,
            o("WAWebMsgGetters").getSender,
          ]),
          (t[0] = a))
        : (a = t[0]);
      var i = o("useWAWebMsgValues").useMsgValues(n, a),
        l = i[0],
        m = i[1],
        p;
      t[1] !== l
        ? ((p = l != null ? l : {}), (t[1] = l), (t[2] = p))
        : (p = t[2]);
      var _ = p,
        f = _.subtitle,
        g = _.title,
        h = r("useWAWebIsMsgTrusted")(n),
        y;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = [
            o("WDSMargins.stylex").wdsMargins.marginEnd4,
            u.marginInlineStart6,
          ]),
          (t[3] = y))
        : (y = t[3]);
      var C;
      t[4] !== m || t[5] !== g || t[6] !== h
        ? ((C =
            g != null
              ? s.jsx(
                  o("WAWebEmojiText.react").EmojiText,
                  babelHelpers.extends(
                    {},
                    d(g),
                    o(
                      "WAWebFormatHeaderFooter",
                    ).enableHeaderAndFooterFormatting(
                      o("WAWebMsgLinks").getLinksFromText(g, m),
                      h,
                    ),
                    { text: g, xstyle: c.title, inferLinesDirection: !0 },
                  ),
                )
              : null),
          (t[4] = m),
          (t[5] = g),
          (t[6] = h),
          (t[7] = C))
        : (C = t[7]);
      var b;
      t[8] !== f || t[9] !== h
        ? ((b =
            f != null
              ? s.jsx(
                  o("WAWebEmojiText.react").EmojiText,
                  babelHelpers.extends({}, d(f), {
                    selectable: h,
                    text: f,
                    xstyle: c.subtitle,
                    inferLinesDirection: !0,
                  }),
                )
              : null),
          (t[8] = f),
          (t[9] = h),
          (t[10] = b))
        : (b = t[10]);
      var v;
      return (
        t[11] !== C || t[12] !== b
          ? ((v = s.jsxs(o("WAWebFlex.react").FlexColumn, {
              xstyle: y,
              children: [C, b],
            })),
            (t[11] = C),
            (t[12] = b),
            (t[13] = v))
          : (v = t[13]),
        v
      );
    }
    l.default = m;
  },
  98,
);
