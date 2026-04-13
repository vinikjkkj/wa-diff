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
      var n = o("react-compiler-runtime").c(13),
        a = t.count,
        i = t.fontSizeXStyle,
        l = t.isCurrentLeader,
        u;
      n[0] !== l
        ? ((u = l
            ? [
                o("WAWebTag.react").TagTheme.Primary,
                o("WAWebTag.react").TagIconName.STAR,
              ]
            : [o("WAWebTag.react").TagTheme.Secondary, null]),
          (n[0] = l),
          (n[1] = u))
        : (u = n[1]);
      var d = u,
        m = d[0],
        p = d[1],
        _;
      n[2] !== i
        ? ((_ = (e || (e = r("stylex"))).props(i)), (n[2] = i), (n[3] = _))
        : (_ = n[3]);
      var f;
      n[4] !== a
        ? ((f = s._(/*BTDS*/ '_j{"*":"{vote} votes","_1":"1 vote"}', [
            s._plural(a, "vote"),
          ])),
          (n[4] = a),
          (n[5] = f))
        : (f = n[5]);
      var g;
      n[6] !== _ || n[7] !== f
        ? ((g = c.jsx("span", babelHelpers.extends({}, _, { children: f }))),
          (n[6] = _),
          (n[7] = f),
          (n[8] = g))
        : (g = n[8]);
      var h;
      return (
        n[9] !== p || n[10] !== g || n[11] !== m
          ? ((h = c.jsx(o("WAWebTag.react").Tag, {
              theme: m,
              icon: p,
              children: g,
            })),
            (n[9] = p),
            (n[10] = g),
            (n[11] = m),
            (n[12] = h))
          : (h = n[12]),
        h
      );
    }
    function _(t) {
      var n = o("react-compiler-runtime").c(11),
        a = t.count,
        i = t.fontSizeXStyle,
        l = t.isCorrectOption,
        s;
      n[0] !== l
        ? ((s = l
            ? [
                o("WAWebTag.react").TagTheme.Primary,
                o("WAWebTag.react").TagIconName.CHECK,
              ]
            : [
                o("WAWebTag.react").TagTheme.Secondary,
                o("WAWebTag.react").TagIconName.CLOSE,
              ]),
          (n[0] = l),
          (n[1] = s))
        : (s = n[1]);
      var u = s,
        d = u[0],
        m = u[1],
        p;
      n[2] !== i
        ? ((p = (e || (e = r("stylex"))).props(i)), (n[2] = i), (n[3] = p))
        : (p = n[3]);
      var _;
      n[4] !== a || n[5] !== p
        ? ((_ = c.jsx("span", babelHelpers.extends({}, p, { children: a }))),
          (n[4] = a),
          (n[5] = p),
          (n[6] = _))
        : (_ = n[6]);
      var f;
      return (
        n[7] !== m || n[8] !== _ || n[9] !== d
          ? ((f = c.jsx(o("WAWebTag.react").Tag, {
              theme: d,
              icon: m,
              children: _,
            })),
            (n[7] = m),
            (n[8] = _),
            (n[9] = d),
            (n[10] = f))
          : (f = n[10]),
        f
      );
    }
    l.default = m;
  },
  226,
);
