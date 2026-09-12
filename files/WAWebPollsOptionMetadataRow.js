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
    "react-compiler-runtime",
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
      var n = t.addOptionMsg,
        a = t.associatedMsg,
        i = t.isCorrectOption,
        l = t.isCurrentLeader,
        s = t.isPollFromMe,
        u = t.links,
        m = t.name,
        f = t.trusted,
        g = t.voteCount,
        h = o("WAWebTextSizeUtils").getWAWebTextSizeStyles(),
        y = h.pollDetailsOptionTextSize,
        C = o("WAWebFormatConfigurationConversation").Conversation({
          links: u != null ? u : [],
          phoneNumbers: [],
          selectable: !0,
          trusted: f === !0,
          fromMe: s,
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
                msg: a,
                size: "small",
              }),
            }),
          c.jsxs(o("WAWebFlex.react").FlexColumn, {
            className: "xbelrpt",
            children: [
              c.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: m,
                selectable: !0,
                formatters: C,
                className: (e || (e = r("stylex")))(d.option, y),
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
                d.voteCount,
                o("WDSMargins.stylex").wdsMargins.marginStartAuto,
              ),
              {
                children:
                  i == null
                    ? c.jsx(p, { count: g, isCurrentLeader: l })
                    : c.jsx(_, { count: g, isCorrectOption: i }),
              },
            ),
          ),
        ],
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.count,
        r = e.isCurrentLeader,
        a;
      t[0] !== r
        ? ((a = r
            ? [
                o("WAWebTag.react").TagTheme.Primary,
                o("WAWebTag.react").TagIconName.STAR,
              ]
            : [o("WAWebTag.react").TagTheme.Secondary, null]),
          (t[0] = r),
          (t[1] = a))
        : (a = t[1]);
      var i = a,
        l = i[0],
        u = i[1],
        d;
      t[2] !== n
        ? ((d = s._(/*BTDS*/ '_j{"*":"{vote} votes","_1":"1 vote"}', [
            s._plural(n, "vote"),
          ])),
          (t[2] = n),
          (t[3] = d))
        : (d = t[3]);
      var m;
      return (
        t[4] !== u || t[5] !== d || t[6] !== l
          ? ((m = c.jsx(o("WAWebTag.react").Tag, {
              theme: l,
              icon: u,
              children: d,
            })),
            (t[4] = u),
            (t[5] = d),
            (t[6] = l),
            (t[7] = m))
          : (m = t[7]),
        m
      );
    }
    function _(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.count,
        r = e.isCorrectOption,
        a;
      t[0] !== r
        ? ((a = r
            ? [
                o("WAWebTag.react").TagTheme.Primary,
                o("WAWebTag.react").TagIconName.CHECK,
              ]
            : [
                o("WAWebTag.react").TagTheme.Secondary,
                o("WAWebTag.react").TagIconName.CLOSE,
              ]),
          (t[0] = r),
          (t[1] = a))
        : (a = t[1]);
      var i = a,
        l = i[0],
        s = i[1],
        u;
      return (
        t[2] !== n || t[3] !== s || t[4] !== l
          ? ((u = c.jsx(o("WAWebTag.react").Tag, {
              theme: l,
              icon: s,
              children: n,
            })),
            (t[2] = n),
            (t[3] = s),
            (t[4] = l),
            (t[5] = u))
          : (u = t[5]),
        u
      );
    }
    l.default = m;
  },
  226,
);
