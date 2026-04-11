__d(
  "WAWebEmojiGridPicker.react",
  [
    "WAWebDropdownItem.react",
    "WAWebEmojiText.react",
    "WAWebFormatConfiguration",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.action,
        n = e.base,
        r = e.children,
        a = e.unicode;
      return s.jsxs("div", {
        className: "x78zum5 xdt5ytf x6s0dn4 xl56j7k",
        children: [
          s.jsx("span", {
            className:
              "x1pju0fl xscbp6u xcytdqz x2b8uid xso031l x1q0q8m5 x1joekfr",
            children: s.jsx(
              o("WAWebDropdownItem.react").DropdownItem,
              {
                type: "emoji-grid",
                testid: void 0,
                action: function (r) {
                  return t(r, a, n);
                },
                children: s.jsx(o("WAWebEmojiText.react").EmojiText, {
                  text: n,
                  formatters: o("WAWebFormatConfiguration").LargeEmojiOnly(),
                  tabIndex: "-1",
                }),
              },
              "base",
            ),
          }),
          s.jsx("div", {
            className: "x78zum5 x1a02dak xl56j7k x1e03a83",
            children: r,
          }),
        ],
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
