__d(
  "WAWebMetaAILanding.react",
  [
    "WAWebBotFrontendUtils",
    "WAWebComposeBox.react",
    "WAWebMetaAIGreeting.react",
    "WAWebMetaAIProfileIcon.react",
    "WAWebNoop",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useState,
      m = "x1d5rdki-B";
    function p() {
      var e = d(null),
        t = e[0],
        n = e[1];
      return (
        c(function () {
          o("WAWebBotFrontendUtils")
            .getMetaAiChat()
            .then(function (e) {
              e != null && n(e);
            });
        }, []),
        s.jsx("section", {
          "data-testid": void 0,
          className:
            "x78zum5 xdt5ytf x6s0dn4 xl56j7k xh8yej3 x5yr21d xexx8yu x18d9i69 xb0esv5 xyo0t3i x9f619 x1280gxy x67bb7w",
          children: s.jsxs("div", {
            className: "x78zum5 xdt5ytf x6s0dn4 xrlsmeg xh8yej3",
            children: [
              s.jsxs("div", {
                className:
                  "x78zum5 xdt5ytf x6s0dn4 xtl7yxs xegkacw x1lfcbla x1u6ievf x1k0bccz",
                children: [
                  s.jsx(r("WAWebMetaAIProfileIcon.react"), {}),
                  s.jsx("div", {
                    className: "x1ci5j9l",
                    children: s.jsx(r("WAWebMetaAIGreeting.react"), {}),
                  }),
                ],
              }),
              s.jsx("div", {
                className: "x1q9ymp4 xh8yej3",
                children:
                  t != null &&
                  s.jsx(o("WAWebComposeBox.react").ComposeBox, {
                    chat: t,
                    onPageUpDown: r("WAWebNoop"),
                    onComposeHeightChange: r("WAWebNoop"),
                  }),
              }),
            ],
          }),
        })
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
