__d(
  "WAWebPollsOptionMetadataRow",
  [
    "fbt",
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "WAWebFormatConfigurationConversation",
    "WAWebPollAddedByLabel",
    "WAWebPollOptionImage.react",
    "WAWebTag.react",
    "WAWebTextSizeUtils",
    "WDSMargins.stylex",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = { marginInlineEnd6: { marginInlineEnd: "xbelrpt", $$css: !0 } },
      m = {
        option: {
          fontWeight: "xo1l8bm",
          fontSize: "x1jchvi3",
          lineHeight: "xwn7fz2",
          wordBreak: "x13faqbe",
          $$css: !0,
        },
        voteCount: { minWidth: "x1pshirs", $$css: !0 },
      };
    function p(t) {
      var n = t.addOptionMsg,
        a = t.associatedMsg,
        i = t.isCorrectOption,
        l = t.isCurrentLeader,
        s = t.isPollFromMe,
        u = t.links,
        p = t.messageHasSpoiler,
        g = t.name,
        h = t.spoilerRevealContext,
        y = t.trusted,
        C = t.voteCount,
        b = o("WAWebTextSizeUtils").getWAWebTextSizeStyles(),
        v = b.pollDetailsOptionTextSize,
        S = o("WAWebFormatConfigurationConversation").Conversation({
          links: u != null ? u : [],
          phoneNumbers: [],
          selectable: !0,
          trusted: y === !0,
          fromMe: s,
          messageHasSpoiler: p,
          spoilerRevealContext: h,
        });
      return c.jsxs(o("WAWebFlex.react").FlexRow, {
        align: "center",
        paddingTop: 16,
        paddingBottom: 16,
        paddingEnd: 32,
        paddingStart: 32,
        columnGap: 12,
        children: [
          a &&
            c.jsx(o("WAWebFlex.react").FlexColumn, {
              alignSelf: "start",
              shrink: 0,
              children: c.jsx(r("WAWebPollOptionImage.react"), {
                msgKey: a.id,
                size: "small",
              }),
            }),
          c.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: d.marginInlineEnd6,
            children: [
              c.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: g,
                selectable: !0,
                formatters: S,
                className: (e || (e = r("stylex")))(m.option, v),
              }),
              n != null &&
                c.jsx(r("WAWebPollAddedByLabel"), { addOptionMsg: n }),
            ],
          }),
          c.jsx(
            "span",
            babelHelpers.extends(
              {},
              e.props(
                m.voteCount,
                o("WDSMargins.stylex").wdsMargins.marginStartAuto,
              ),
              {
                children:
                  i == null
                    ? c.jsx(_, { count: C, isCurrentLeader: l })
                    : c.jsx(f, { count: C, isCorrectOption: i }),
              },
            ),
          ),
        ],
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      var t = e.count,
        n = e.isCurrentLeader,
        r = n
          ? [
              o("WAWebTag.react").TagTheme.Primary,
              o("WAWebTag.react").TagIconName.STAR,
            ]
          : [o("WAWebTag.react").TagTheme.Secondary, null],
        a = r[0],
        i = r[1];
      return c.jsx(o("WAWebTag.react").Tag, {
        theme: a,
        icon: i,
        children: s._(/*BTDS*/ "", [s._plural(t, "vote")]),
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = e.count,
        n = e.isCorrectOption,
        r = n
          ? [
              o("WAWebTag.react").TagTheme.Primary,
              o("WAWebTag.react").TagIconName.CHECK,
            ]
          : [
              o("WAWebTag.react").TagTheme.Secondary,
              o("WAWebTag.react").TagIconName.CLOSE,
            ],
        a = r[0],
        i = r[1];
      return c.jsx(o("WAWebTag.react").Tag, { theme: a, icon: i, children: t });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
