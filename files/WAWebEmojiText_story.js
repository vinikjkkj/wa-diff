__d(
  "WAWebEmojiText.story",
  [
    "WAWebButton.react",
    "WAWebEmojiText.react",
    "WAWebFormatConfigurationConversation",
    "WAWebL10N",
    "WAWebShowroomUtils",
    "react",
    "react-compiler-runtime",
    "useWAWebSelect",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useState,
      m = o("WAWebFormatConfigurationConversation").Conversation({
        parseInlineCode: !0,
        parseLists: !0,
        parseQuotes: !0,
      });
    function p(e) {
      var t = o("react-compiler-runtime").c(27),
        n = e.chunks,
        r = e.speed,
        a = d(!0),
        i = a[0],
        l = a[1],
        u = d(0),
        p = u[0],
        _ = u[1],
        f = p >= n.length,
        g,
        h;
      (t[0] !== p || t[1] !== f || t[2] !== i || t[3] !== r
        ? ((g = function () {
            if (!(i || f)) {
              var e = self.setTimeout(
                function () {
                  return _(p + 1);
                },
                (r != null ? r : 1) * 1e3,
              );
              return function () {
                return self.clearTimeout(e);
              };
            }
          }),
          (h = [p, f, i, r]),
          (t[0] = p),
          (t[1] = f),
          (t[2] = i),
          (t[3] = r),
          (t[4] = g),
          (t[5] = h))
        : ((g = t[4]), (h = t[5])),
        c(g, h));
      var y;
      t[6] !== p || t[7] !== i
        ? ((y = function () {
            (i && p === 0 && _(1), l(!i));
          }),
          (t[6] = p),
          (t[7] = i),
          (t[8] = y))
        : (y = t[8]);
      var C = y,
        b;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = function () {
            (_(0), l(!0));
          }),
          (t[9] = b))
        : (b = t[9]);
      var v = b,
        S;
      if (p > 0) {
        var R;
        t[10] !== n || t[11] !== p
          ? ((R = n.slice(0, p).join("")),
            (t[10] = n),
            (t[11] = p),
            (t[12] = R))
          : (R = t[12]);
        var L = R,
          E = f ? L.length : L.length - n[p - 1].length,
          k;
        (t[13] !== E || t[14] !== L
          ? ((k = s.jsx(
              o("WAWebEmojiText.react").EmojiText,
              { text: L, lastBotEditBodyLength: E, formatters: m },
              E,
            )),
            (t[13] = E),
            (t[14] = L),
            (t[15] = k))
          : (k = t[15]),
          (S = k));
      }
      var I;
      i ? (p === 0 ? (I = "Start") : (I = "Resume")) : (I = "Pause");
      var T;
      t[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = {
            className:
              "x1sy10c2 x3aesyq xieb3on xqsn43r x1cnzs8 x1xnnf8n xx6bls6 x106a9eq x12peec7 x16qb05n xi7iut8 x1dm3dyd x1pv694p x1o2sk6j x126k92a",
          }),
          (t[16] = T))
        : (T = t[16]);
      var D;
      t[17] !== C || t[18] !== f || t[19] !== I
        ? ((D = s.jsx(o("WAWebButton.react").WAWebButtonSimplified, {
            onClick: C,
            disabled: f,
            children: I,
          })),
          (t[17] = C),
          (t[18] = f),
          (t[19] = I),
          (t[20] = D))
        : (D = t[20]);
      var x;
      t[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = s.jsx(o("WAWebButton.react").WAWebButtonSimplified, {
            onClick: v,
            children: "Reset",
          })),
          (t[21] = x))
        : (x = t[21]);
      var $;
      t[22] !== D
        ? (($ = s.jsxs("div", { children: [D, x] })), (t[22] = D), (t[23] = $))
        : ($ = t[23]);
      var P;
      return (
        t[24] !== S || t[25] !== $
          ? ((P = s.jsxs(
              "div",
              babelHelpers.extends({}, T, { children: [$, S] }),
            )),
            (t[24] = S),
            (t[25] = $),
            (t[26] = P))
          : (P = t[26]),
        P
      );
    }
    var _ = "{SPLIT}";
    function f(e) {
      return [].concat(e.split(_), ["\n\n===END==="]);
    }
    function g() {
      var e = o("react-compiler-runtime").c(24),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = [1, 2, 5, 10]), (e[0] = t))
        : (t = e[0]);
      var n = o("useWAWebSelect").useSelect("Animation speed (in seconds)", t),
        r = n[0],
        a = n[1],
        i;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = { className: "x1sy10c2 x3aesyq xieb3on xqsn43r" }), (e[1] = i))
        : (i = e[1]);
      var l;
      e[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = s.jsx("h2", { children: "Example: Single line" })), (e[2] = l))
        : (l = e[2]);
      var u;
      e[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = f(
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
              _ +
              "Sed non ligula at est consectetur *venenatis. " +
              _ +
              "Vestibulum* ut varius nunc. `Nullam sollicitudin orci quis lacus eleifend, " +
              _ +
              "in commodo odio pharetra`. Fusce posuere nisi et tincidunt tristique. " +
              _ +
              "Aliquam a nisl condimentum, blandit quam nec, sagittis arcu.",
          )),
          (e[3] = u))
        : (u = e[3]);
      var c;
      e[4] !== r
        ? ((c = s.jsxs("div", {
            children: [l, s.jsx(p, { speed: r, chunks: u })],
          })),
          (e[4] = r),
          (e[5] = c))
        : (c = e[5]);
      var d;
      e[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = s.jsx("h2", { children: "Example: Multilines" })), (e[6] = d))
        : (d = e[6]);
      var m;
      e[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = f(
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
              _ +
              "\n\nSed non ligula at est consectetur venenatis." +
              _ +
              "\n\nVestibulum ut varius nunc. Nullam sollicitudin orci quis lacus eleifend, in commodo odio pharetra." +
              _ +
              "\n\nFusce posuere nisi et tincidunt tristique." +
              _ +
              "\n\n```\nAliquam a nisl condimentum, blandit quam nec, sagittis arcu.\nAliquam a nisl condimentum, blandit quam nec, sagittis arcu." +
              _ +
              "\nAliquam a nisl condimentum, blandit quam nec, sagittis arcu.\nAliquam a nisl condimentum, blandit quam nec, sagittis arcu.\n```",
          )),
          (e[7] = m))
        : (m = e[7]);
      var g;
      e[8] !== r
        ? ((g = s.jsxs("div", {
            children: [d, s.jsx(p, { speed: r, chunks: m })],
          })),
          (e[8] = r),
          (e[9] = g))
        : (g = e[9]);
      var h;
      e[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = s.jsx("h2", { children: "Example: Lists" })), (e[10] = h))
        : (h = e[10]);
      var y;
      e[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = f(
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit:" +
              _ +
              "\n\n* Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
              _ +
              "\n* Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
              _ +
              "\n* Urna nec tincidunt augue. Praesent eleifend neque eu enim." +
              _ +
              "\n* Etiam porta sem malesuada magna mollis euismod." +
              _ +
              "\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit:" +
              _ +
              "\n\n1. Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
              _ +
              "\n2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
              _ +
              "\n3. Urna nec tincidunt augue. Praesent eleifend neque eu enim." +
              _ +
              "\n4. Etiam porta sem malesuada magna mollis euismod.",
          )),
          (e[11] = y))
        : (y = e[11]);
      var C;
      e[12] !== r
        ? ((C = s.jsxs("div", {
            children: [h, s.jsx(p, { speed: r, chunks: y })],
          })),
          (e[12] = r),
          (e[13] = C))
        : (C = e[13]);
      var b;
      e[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = s.jsx("h2", { children: "Example: List (partial items)" })),
          (e[14] = b))
        : (b = e[14]);
      var v;
      e[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = f(
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit:" +
              _ +
              "\n\n* Donec ullamcorper, `felis a pretium" +
              _ +
              " commodo`, nulla nibh vehicula odio.\n* Nulla varius eu enim et malesuada " +
              _ +
              "*fames ac turpis* egestas.\n* Vestibulum ante ipsum ```primis in" +
              _ +
              " faucibus orci``` luctu nibh.\n* Cum sociis" +
              _ +
              " natoque penatibus et magnisdis" +
              _ +
              " parturient montes, nascetur" +
              _ +
              " ridiculus mus. dis parturient" +
              _ +
              " montes, nascetur ridiculus mus.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit:" +
              _ +
              "\n\n1. Donec ullamcorper, `felis a pretium" +
              _ +
              " commodo`, nulla nibh vehicula odio.\n2. Nulla varius eu enim et malesuada " +
              _ +
              "*fames ac turpis* egestas.\n3. Vestibulum ante ipsum ```primis in" +
              _ +
              " faucibus orci``` luctu nibh.\n5. Cum sociis" +
              _ +
              " natoque penatibus et magnisdis" +
              _ +
              " parturient montes, nascetur" +
              _ +
              " ridiculus mus. dis parturient" +
              _ +
              " montes, nascetur ridiculus mus.",
          )),
          (e[15] = v))
        : (v = e[15]);
      var S;
      e[16] !== r
        ? ((S = s.jsxs("div", {
            children: [b, s.jsx(p, { speed: r, chunks: v })],
          })),
          (e[16] = r),
          (e[17] = S))
        : (S = e[17]);
      var R;
      return (
        e[18] !== a || e[19] !== C || e[20] !== S || e[21] !== c || e[22] !== g
          ? ((R = s.jsxs(
              "div",
              babelHelpers.extends({}, i, { children: [a, c, g, C, S] }),
            )),
            (e[18] = a),
            (e[19] = C),
            (e[20] = S),
            (e[21] = c),
            (e[22] = g),
            (e[23] = R))
          : (R = e[23]),
        R
      );
    }
    function h() {
      var e = {
          formatters: m,
          direction: r("WAWebL10N").LR("ltr", "rtl"),
          inferLinesDirection: !0,
        },
        t =
          "*LTR direction*\nLTR \u05D0\u05B8\u05D4\u05B7\u05D1\u05B0\u05EA\u05B8\u05BC \u05D0\u05B5\u05EA\nLTR \u05D0\u05B8\u05D4\u05B7\u05D1\u05B0\u05EA\u05B8\u05BC \u05D0\u05B5\u05EA \u05D0\u05B8\u05D4\u05B7\u05D1\u05B0\u05EA\u05B8\u05BC \u05D0\u05B5\u05EA \u05D0\u05B8\u05D4\u05B7\u05D1\u05B0\u05EA\u05B8\u05BC \u05D0\u05B5\u05EA \u05D0\u05B8\u05D4\u05B7\u05D1\u05B0\u05EA\u05B8\u05BC \u05D0\u05B5\u05EA \u05D0\u05B8\u05D4\u05B7\u05D1\u05B0\u05EA\u05B8\u05BC \u05D0\u05B5\u05EA\n\n*RTL direction*\n\u05D0\u05B8\u05D4\u05B7\u05D1\u05B0\u05EA\u05B8\u05BC \u05D0\u05B5\u05EA RTL\n\u05D0\u05B8\u05D4\u05B7\u05D1\u05B0\u05EA\u05B8\u05BC \u05D0\u05B5\u05EA \u05D0\u05B8\u05D4\u05B7\u05D1\u05B0\u05EA\u05B8\u05BC \u05D0\u05B5\u05EA \u05D0\u05B8\u05D4\u05B7\u05D1\u05B0\u05EA\u05B8\u05BC \u05D0\u05B5\u05EA \u05D0\u05B8\u05D4\u05B7\u05D1\u05B0\u05EA\u05B8\u05BC \u05D0\u05B5\u05EA RTL",
        n =
          "----------------------------\n*RTL direction*\n\u05D0\u05B8\u05D4\u05B7\u05D1\u05B0\u05EA\u05B8\u05BC \u05D0\u05B5\u05EA *RTL*\n*\u05D0\u05B8\u05D4\u05B7\u05D1\u05B0\u05EA\u05B8\u05BC \u05D0\u05B5\u05EA* RTL\n*\u05D0\u05B8\u05D4\u05B7\u05D1\u05B0\u05EA\u05B8\u05BC \u05D0\u05B5\u05EA* *RTL*\n_\u05D0\u05B8\u05D4\u05B7\u05D1\u05B0\u05EA\u05B8\u05BC \u05D0\u05B5\u05EA_ *RTL*\n~\u05D0\u05B8\u05D4\u05B7\u05D1\u05B0\u05EA\u05B8\u05BC \u05D0\u05B5\u05EA~ *RTL*\n`\u05D0\u05B8\u05D4\u05B7\u05D1\u05B0\u05EA\u05B8\u05BC \u05D0\u05B5\u05EA` *RTL*\n~_*\u05D0\u05B8\u05D4\u05B7\u05D1\u05B0\u05EA\u05B8\u05BC \u05D0\u05B5\u05EA*_~ RTL (nested formats)\n```\u05D0\u05B8\u05D4\u05B7\u05D1\u05B0\u05EA\u05B8\u05BC \u05D0\u05B5\u05EA``` RTL (monospace)\n\n*LTR direction*\nltr \u05D0\u05B8\u05D4\u05B7\u05D1\u05B0\u05EA\u05B8\u05BC \u05D0\u05B5\u05EA\n*ltr* \u05D0\u05B8\u05D4\u05B7\u05D1\u05B0\u05EA\u05B8\u05BC \u05D0\u05B5\u05EA\n*ltr* *\u05D0\u05B8\u05D4\u05B7\u05D1\u05B0\u05EA\u05B8\u05BC \u05D0\u05B5\u05EA*\n_ltr_ \u05D0\u05B8\u05D4\u05B7\u05D1\u05B0\u05EA\u05B8\u05BC \u05D0\u05B5\u05EA\n~ltr~ \u05D0\u05B8\u05D4\u05B7\u05D1\u05B0\u05EA\u05B8\u05BC \u05D0\u05B5\u05EA\n`ltr` \u05D0\u05B8\u05D4\u05B7\u05D1\u05B0\u05EA\u05B8\u05BC \u05D0\u05B5\u05EA\n~_*ltr*_~ \u05D0\u05B8\u05D4\u05B7\u05D1\u05B0\u05EA\u05B8\u05BC \u05D0\u05B5\u05EA (nested formats)\n```ltr``` \u05D0\u05B8\u05D4\u05B7\u05D1\u05B0\u05EA\u05B8\u05BC \u05D0\u05B5\u05EA (monospace)\n\n*Bulleted list*\n* test - LTR\n* \u05D0\u05B8\u05D4\u05B7\u05D1\u05B0\u05EA\u05B8\u05BC \u05D0\u05B5\u05EA RTL\n\n*Numbered List*\n1. test - LTR\n2. \u05D0\u05B8\u05D4\u05B7\u05D1\u05B0\u05EA\u05B8\u05BC \u05D0\u05B5\u05EA RTL\n\n*Block quote*\n> LTR\n> \u05D0\u05B8\u05D4\u05B7\u05D1\u05B0\u05EA\u05B8\u05BC \u05D0\u05B5\u05EA RTL\n\n*Emoji*\n\u2764\uFE0F";
      return s.jsxs("div", {
        className: "x1sy10c2 x3aesyq xieb3on xqsn43r",
        children: [
          s.jsxs("div", {
            children: [
              s.jsx("h2", { children: "Plain text" }),
              s.jsx("div", {
                className:
                  "x1sy10c2 x3aesyq xieb3on xqsn43r x1cnzs8 x1xnnf8n xx6bls6 x106a9eq x12peec7 x16qb05n xi7iut8 x1dm3dyd x1pv694p x1o2sk6j x126k92a",
                children: s.jsx(
                  o("WAWebEmojiText.react").EmojiText,
                  babelHelpers.extends({}, e, { text: t }),
                ),
              }),
            ],
          }),
          s.jsxs("div", {
            children: [
              s.jsx("h2", { children: "Formatted text" }),
              s.jsx("div", {
                className:
                  "x1sy10c2 x3aesyq xieb3on xqsn43r x1cnzs8 x1xnnf8n xx6bls6 x106a9eq x12peec7 x16qb05n xi7iut8 x1dm3dyd x1pv694p x1o2sk6j x126k92a",
                children: s.jsx(
                  o("WAWebEmojiText.react").EmojiText,
                  babelHelpers.extends({}, e, { text: n }),
                ),
              }),
            ],
          }),
        ],
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    var y = {
      storyName: "WAWebEmojiText",
      component: o("WAWebEmojiText.react").EmojiText,
      description: "",
      examples: [
        {
          example: g,
          title: "Bot Animated Text",
          templateStyle: babelHelpers.extends(
            {},
            o("WAWebShowroomUtils").widePreview,
            { minWidth: 560 },
          ),
        },
        {
          example: h,
          title: "RTL Text",
          templateStyle: babelHelpers.extends(
            {},
            o("WAWebShowroomUtils").widePreview,
            { minWidth: 560 },
          ),
        },
      ],
    };
    l.default = y;
  },
  98,
);
