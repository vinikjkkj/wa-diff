__d(
  "WAWebEmojiPanelContentEmojiSearchEmpty.react",
  [
    "fbt",
    "$InternalEnum",
    "WAWebEmptyState.react",
    "WAWebFbtCommon",
    "WAWebUISpacing",
    "bx",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = r("bx").getURL(r("bx")("9550")),
      m = n("$InternalEnum").Mirrored(["DEFAULT", "SHORTCUT_TIP"]),
      p = {
        emptySearchDefault: {
          fontSize: "x1f6kntn",
          color: "xhslqc4",
          $$css: !0,
        },
      };
    function _(t) {
      var n = t.emojiSearchEmptyType,
        a = n === void 0 ? m.DEFAULT : n;
      if (a === m.DEFAULT)
        return c.jsx(
          "div",
          babelHelpers.extends(
            {},
            (e || (e = r("stylex"))).props(
              p.emptySearchDefault,
              o("WAWebUISpacing").uiMargin.vert0,
              o("WAWebUISpacing").uiMargin.horiz14,
            ),
            { children: r("WAWebFbtCommon")("No results found") },
          ),
        );
      var i = c.jsx("div", {
        className:
          "x1n2onr6 x1okw0bk xja02kk x41k7rp xhsvlbd xod5an3 x6ikm8r x10wlt62 xuuw4wc x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xx42vgk xbogo7e x120ee7l x1vb5itz x1c9tyrk xeusxvb x1pahc9y x1ertn4p",
        style: { backgroundImage: "url(" + d + ")" },
        children: c.jsxs("div", {
          className: "x10l6tqk x1t2f1v xth0gu4 x1f6kntn x1epju1n",
          children: [":", s._(/*BTDS*/ "smile")],
        }),
      });
      return c.jsx(o("WAWebEmptyState.react").Empty, {
        icon: i,
        text: s._(
          /*BTDS*/ "Did you know? You can type : and a word to search emoji",
        ),
        theme: o("WAWebEmptyState.react").EmptyStateTheme.Compact,
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    var f = { EmojiSearchEmpty: _, EmojiSearchEmptyType: m };
    l.default = f;
  },
  226,
);
