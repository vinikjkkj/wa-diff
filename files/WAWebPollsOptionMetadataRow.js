__d(
  "WAWebPollsOptionMetadataRow",
  [
    "fbt",
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "WAWebFormatConfiguration",
    "WAWebPollOptionImage.react",
    "WAWebTag.react",
    "WAWebTextSizeUtils",
    "WAWebUISpacing",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        option: {
          fontWeight: "xo1l8bm",
          fontSize: "x1jchvi3",
          lineHeight: "xwn7fz2",
          wordBreak: "x13faqbe",
          $$css: !0,
        },
        voteCount: { minWidth: "x1pshirs", $$css: !0 },
      };
    function m(t) {
      var n = t.associatedMsg,
        a = t.isCorrectOption,
        i = t.isCurrentLeader,
        l = t.isPollFromMe,
        s = t.links,
        u = t.name,
        m = t.percentage,
        f = t.trusted,
        g = t.voteCount,
        h = o("WAWebTextSizeUtils").getWAWebTextSizeStyles(),
        y = h.pollDetailsOptionTextSize,
        C = h.pollDetailsTagTextSize,
        b = o("WAWebFormatConfiguration").Conversation({
          links: s != null ? s : [],
          phoneNumbers: [],
          selectable: !0,
          trusted: f === !0,
          fromMe: l,
        });
      return c.jsxs(o("WAWebFlex.react").FlexRow, {
        align: "center",
        paddingTop: 16,
        paddingBottom: 16,
        paddingEnd: 32,
        paddingStart: 32,
        columnGap: 12,
        children: [
          n &&
            c.jsx(o("WAWebFlex.react").FlexColumn, {
              alignSelf: "start",
              shrink: 0,
              children: c.jsx(r("WAWebPollOptionImage.react"), {
                msg: n,
                size: "small",
              }),
            }),
          c.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: u,
            selectable: !0,
            formatters: b,
            className: (e || (e = r("stylex")))(
              d.option,
              o("WAWebUISpacing").uiMargin.end6,
              y,
            ),
          }),
          c.jsx(
            "span",
            babelHelpers.extends(
              {},
              e.props(d.voteCount, o("WAWebUISpacing").uiMargin.startAuto),
              {
                children:
                  a == null
                    ? c.jsx(p, {
                        count: g,
                        isCurrentLeader: i,
                        fontSizeXStyle: C,
                      })
                    : c.jsx(_, {
                        count: g,
                        isCorrectOption: a,
                        fontSizeXStyle: C,
                      }),
              },
            ),
          ),
        ],
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(t) {
      var n = t.count,
        a = t.fontSizeXStyle,
        i = t.isCurrentLeader,
        l = i
          ? [
              o("WAWebTag.react").TagTheme.Primary,
              o("WAWebTag.react").TagIconName.STAR,
            ]
          : [o("WAWebTag.react").TagTheme.Secondary, null],
        u = l[0],
        d = l[1];
      return c.jsx(o("WAWebTag.react").Tag, {
        theme: u,
        icon: d,
        children: c.jsx(
          "span",
          babelHelpers.extends({}, (e || (e = r("stylex"))).props(a), {
            children: s._(/*BTDS*/ '_j{"*":"{vote} votes","_1":"1 vote"}', [
              s._plural(n, "vote"),
            ]),
          }),
        ),
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(t) {
      var n = t.count,
        a = t.fontSizeXStyle,
        i = t.isCorrectOption,
        l = i
          ? [
              o("WAWebTag.react").TagTheme.Primary,
              o("WAWebTag.react").TagIconName.CHECK,
            ]
          : [
              o("WAWebTag.react").TagTheme.Secondary,
              o("WAWebTag.react").TagIconName.CLOSE,
            ],
        s = l[0],
        u = l[1];
      return c.jsx(o("WAWebTag.react").Tag, {
        theme: s,
        icon: u,
        children: c.jsx(
          "span",
          babelHelpers.extends({}, (e || (e = r("stylex"))).props(a), {
            children: n,
          }),
        ),
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
