__d(
  "WAWebBlockQuote.story",
  [
    "WAWebEmojiText.react",
    "WAWebFormatConfigurationConversation",
    "WAWebShowroomUtils",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = o("WAWebFormatConfigurationConversation").Conversation({
        parseInlineCode: !0,
        parseLists: !0,
        parseQuotes: !0,
      }),
      c = [
        [
          "A2",
          "> This quote line is long enough that it has to wrap onto a second and a third line, so the bar must run all the way down",
        ],
        ["A3", "> Looooooooooooooooooooooooooooooooooooooooooooooooooooong"],
        ["A4", "> *bold* _italic_ ~strike~ `code`\n> _~*all three*~_"],
        ["B1", "> one\n> two\n> three"],
        ["B2", "> one\n> \n> three"],
        ["B3", "> one\nplain\n> two"],
        ["B7", "Intro\n> one\n> two\nMiddle\n> three\nOutro"],
        [
          "C1",
          "> \u05E9\u05DC\u05D5\u05DD \u05E2\u05D5\u05DC\u05DD\n> \u05D6\u05D5 \u05E9\u05D5\u05E8\u05D4 \u05E9\u05E0\u05D9\u05D9\u05D4 \u05D1\u05E6\u05D9\u05D8\u05D5\u05D8\n> \u05D5\u05E9\u05D5\u05E8\u05D4 \u05E9\u05DC\u05D9\u05E9\u05D9\u05EA",
        ],
        [
          "C2",
          "> \u0645\u0631\u062D\u0628\u0627 \u0628\u0627\u0644\u0639\u0627\u0644\u0645\n> \u0647\u0630\u0627 \u0647\u0648 \u0627\u0644\u0633\u0637\u0631 \u0627\u0644\u062B\u0627\u0646\u064A\n> \u0648\u0627\u0644\u0633\u0637\u0631 \u0627\u0644\u062B\u0627\u0644\u062B",
        ],
        [
          "C3",
          "> \u05E9\u05D5\u05E8\u05D4 \u05E8\u05D0\u05E9\u05D5\u05E0\u05D4 \u05D1\u05E2\u05D1\u05E8\u05D9\u05EA\n> English second line\n> \u05E9\u05D5\u05E8\u05D4 \u05E9\u05DC\u05D9\u05E9\u05D9\u05EA",
        ],
        [
          "C4",
          "> \u0627\u0644\u0633\u0637\u0631 \u0627\u0644\u0623\u0648\u0644 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629\n> English second line\n> \u0627\u0644\u0633\u0637\u0631 \u0627\u0644\u062B\u0627\u0644\u062B",
        ],
        [
          "C5",
          "> English first line\n> \u0633\u0637\u0631 \u0639\u0631\u0628\u064A \u0641\u064A \u0627\u0644\u0645\u0646\u062A\u0635\u0641\n> Back to English",
        ],
        ["C6", "> First English line\n> Second English line"],
        [
          "C7",
          "> 123\n> \u05E9\u05D5\u05E8\u05D4 \u05D1\u05E2\u05D1\u05E8\u05D9\u05EA",
        ],
        [
          "C8",
          "> Hello \u05E9\u05DC\u05D5\u05DD world\n> \u05E9\u05DC\u05D5\u05DD Hello \u05E2\u05D5\u05DC\u05DD",
        ],
      ];
    function d() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = s.jsx(p, { direction: "ltr" })), (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function m() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = s.jsx(p, { direction: "rtl" })), (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.direction,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = {
            className:
              "xrvj5dj xhgrwch xgpatz3 x40hh3e xw7yly9 x1ys307a x1yztbdb xyqm7xq",
          }),
          (t[0] = r))
        : (r = t[0]);
      var a;
      t[1] !== n
        ? ((a = c.map(function (e) {
            var t = e[0],
              r = e[1];
            return s.jsxs(
              "div",
              {
                className:
                  "xz9dl7a xpdmqnj xsag5q8 x1g0dm76 x12peec7 xyi3aci xwf5gio x1p453bz x1suzm8a x126k92a x1mzt3pk",
                children: [
                  s.jsx("div", { className: "x117nqv4 x12nagc", children: t }),
                  s.jsx(o("WAWebEmojiText.react").EmojiText, {
                    direction: n,
                    formatters: u,
                    inferLinesDirection: !0,
                    text: r,
                  }),
                ],
              },
              t,
            );
          })),
          (t[1] = n),
          (t[2] = a))
        : (a = t[2]);
      var i;
      return (
        t[3] !== a
          ? ((i = s.jsx("div", babelHelpers.extends({}, r, { children: a }))),
            (t[3] = a),
            (t[4] = i))
          : (i = t[4]),
        i
      );
    }
    var _ = {
      storyName: "WAWebBlockQuote",
      component: o("WAWebEmojiText.react").EmojiText,
      description:
        "Block quote cases from the test matrix. Load with ?expanded_formatting_multiline_quotes=true to see multi-line quotes.",
      examples: [
        {
          example: d,
          title: "Left-to-right container",
          templateStyle: babelHelpers.extends(
            {},
            o("WAWebShowroomUtils").widePreview,
            { minWidth: 780 },
          ),
        },
        {
          example: m,
          title: "Right-to-left text direction in a left-to-right UI",
          templateStyle: babelHelpers.extends(
            {},
            o("WAWebShowroomUtils").widePreview,
            { minWidth: 780 },
          ),
        },
      ],
    };
    l.default = _;
  },
  98,
);
