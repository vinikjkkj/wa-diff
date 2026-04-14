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
      var t,
        n = e.msg,
        r = (t = n.interactiveHeader) != null ? t : {},
        a = r.subtitle,
        i = r.title,
        l = o("WAWebMsgModelPropUtils").isTrusted(n.unsafe());
      return s.jsxs(o("WAWebFlex.react").FlexColumn, {
        xstyle: [
          o("WAWebUISpacing").uiMargin.end4,
          o("WAWebUISpacing").uiMargin.start6,
        ],
        children: [
          i != null
            ? s.jsx(
                o("WAWebEmojiText.react").EmojiText,
                babelHelpers.extends(
                  {},
                  c(i),
                  o("WAWebFormatHeaderFooter").enableHeaderAndFooterFormatting(
                    o("WAWebMsgLinks").getHeaderLinks(n.unsafe()),
                    l,
                  ),
                  { text: i, xstyle: u.title, inferLinesDirection: !0 },
                ),
              )
            : null,
          a != null
            ? s.jsx(
                o("WAWebEmojiText.react").EmojiText,
                babelHelpers.extends({}, c(a), {
                  selectable: l,
                  text: a,
                  xstyle: u.subtitle,
                  inferLinesDirection: !0,
                }),
              )
            : null,
        ],
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
