__d(
  "WAWebBizBroadcastGenAISuggestionCard.react",
  ["WAWebBizBroadcastTextFormatUtils", "WAWebEmojiText.react", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.isSelected,
        n = e.message,
        r = e.onSelect,
        a = e.tone,
        i = function (t) {
          (t.key === "Enter" || t.key === " ") && (t.preventDefault(), r());
        };
      return s.jsxs("div", {
        className: "x1ypdohk x78zum5 xdt5ytf x129bwdz xh8yej3",
        "aria-selected": t,
        onClick: r,
        onKeyDown: i,
        role: "option",
        tabIndex: 0,
        children: [
          s.jsx("div", {
            className: "xhslqc4 x1nxh6w3 x1s688f xn80e1m",
            children: a,
          }),
          s.jsx(
            "div",
            babelHelpers.extends(
              {},
              {
                0: {
                  className:
                    "x1pyc6se x1mlb2bo x16pkwpw xqe4bef xlr9sxt xvvg52n xwd4zgb xq8v1ta x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x9f619 x14ug900 x1f6kntn x37zpob x16ovd2e x12xbjc7 x1iw51ew xde1mab x126k92a xh8yej3 x13faqbe",
                },
                1: {
                  className:
                    "xlr9sxt xvvg52n xwd4zgb xq8v1ta x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x9f619 x14ug900 x1f6kntn x37zpob x16ovd2e x12xbjc7 x1iw51ew xde1mab x126k92a xh8yej3 x13faqbe x1whkhu0 x3emv5x x1ydeqjr xyg86qh xamhcws x1alpsbp xlxy82 xyumdvf",
                },
              }[!!t << 0],
              {
                children: s.jsx(o("WAWebEmojiText.react").EmojiText, {
                  text: n,
                  formatters: o("WAWebBizBroadcastTextFormatUtils")
                    .AI_TEXT_FORMATTERS,
                }),
              },
            ),
          ),
        ],
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
