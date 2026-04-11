__d(
  "WAWebBizBroadcastGenAISuggestionCard.react",
  [
    "WAWebBizBroadcastTextFormatUtils",
    "WAWebEmojiText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(19),
        n = e.isSelected,
        r = e.message,
        a = e.onSelect,
        i = e.tone,
        l;
      t[0] !== a
        ? ((l = function (t) {
            (t.key === "Enter" || t.key === " ") && (t.preventDefault(), a());
          }),
          (t[0] = a),
          (t[1] = l))
        : (l = t[1]);
      var u = l,
        c;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = { className: "x1ypdohk x78zum5 xdt5ytf x129bwdz xh8yej3" }),
          (t[2] = c))
        : (c = t[2]);
      var d;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = { className: "xhslqc4 x1nxh6w3 x1s688f xn80e1m" }), (t[3] = d))
        : (d = t[3]);
      var m;
      t[4] !== i
        ? ((m = s.jsx("div", babelHelpers.extends({}, d, { children: i }))),
          (t[4] = i),
          (t[5] = m))
        : (m = t[5]);
      var p;
      t[6] !== n
        ? ((p = {
            0: {
              className:
                "x1pyc6se x1mlb2bo x16pkwpw xqe4bef xlr9sxt xvvg52n xwd4zgb xq8v1ta x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x9f619 x14ug900 x1f6kntn x37zpob x16ovd2e x12xbjc7 x1iw51ew xde1mab x126k92a xh8yej3 x13faqbe",
            },
            1: {
              className:
                "xlr9sxt xvvg52n xwd4zgb xq8v1ta x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x9f619 x14ug900 x1f6kntn x37zpob x16ovd2e x12xbjc7 x1iw51ew xde1mab x126k92a xh8yej3 x13faqbe x1whkhu0 x3emv5x x1ydeqjr xyg86qh xamhcws x1alpsbp xlxy82 xyumdvf",
            },
          }[!!n << 0]),
          (t[6] = n),
          (t[7] = p))
        : (p = t[7]);
      var _;
      t[8] !== r
        ? ((_ = s.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: r,
            formatters: o("WAWebBizBroadcastTextFormatUtils")
              .AI_TEXT_FORMATTERS,
          })),
          (t[8] = r),
          (t[9] = _))
        : (_ = t[9]);
      var f;
      t[10] !== p || t[11] !== _
        ? ((f = s.jsx("div", babelHelpers.extends({}, p, { children: _ }))),
          (t[10] = p),
          (t[11] = _),
          (t[12] = f))
        : (f = t[12]);
      var g;
      return (
        t[13] !== u || t[14] !== n || t[15] !== a || t[16] !== m || t[17] !== f
          ? ((g = s.jsxs(
              "div",
              babelHelpers.extends({}, c, {
                "aria-selected": n,
                onClick: a,
                onKeyDown: u,
                role: "option",
                tabIndex: 0,
                children: [m, f],
              }),
            )),
            (t[13] = u),
            (t[14] = n),
            (t[15] = a),
            (t[16] = m),
            (t[17] = f),
            (t[18] = g))
          : (g = t[18]),
        g
      );
    }
    l.default = u;
  },
  98,
);
