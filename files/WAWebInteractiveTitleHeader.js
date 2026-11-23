__d(
  "WAWebInteractiveTitleHeader",
  [
    "WABidi",
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "WAWebFormatHeaderFooter",
    "WAWebL10N",
    "WAWebMsgCasts",
    "WAWebMsgGetters",
    "WAWebMsgLinks",
    "WDSMargins.stylex",
    "react",
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
      var t = e.msgKey,
        n = o("useWAWebMsgValues").useMsgValues(
          t,
          o("WAWebMsgCasts").castToInteractiveMsg,
          [
            o("WAWebMsgGetters").getInteractiveHeader,
            o("WAWebMsgGetters").getSender,
          ],
        ),
        a = n[0],
        i = n[1],
        l = a != null ? a : {},
        m = l.subtitle,
        p = l.title,
        _ = r("useWAWebIsMsgTrusted")(t);
      return s.jsxs(o("WAWebFlex.react").FlexColumn, {
        xstyle: [
          o("WDSMargins.stylex").wdsMargins.marginEnd4,
          u.marginInlineStart6,
        ],
        children: [
          p != null
            ? s.jsx(
                o("WAWebEmojiText.react").EmojiText,
                babelHelpers.extends(
                  {},
                  d(p),
                  o("WAWebFormatHeaderFooter").enableHeaderAndFooterFormatting(
                    o("WAWebMsgLinks").getLinksFromText(p, i),
                    _,
                  ),
                  { text: p, xstyle: c.title, inferLinesDirection: !0 },
                ),
              )
            : null,
          m != null
            ? s.jsx(
                o("WAWebEmojiText.react").EmojiText,
                babelHelpers.extends({}, d(m), {
                  selectable: _,
                  text: m,
                  xstyle: c.subtitle,
                  inferLinesDirection: !0,
                }),
              )
            : null,
        ],
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
