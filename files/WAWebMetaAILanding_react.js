__d(
  "WAWebMetaAILanding.react",
  [
    "WAWebBotFrontendUtils",
    "WAWebComposeBox.react",
    "WAWebMetaAIGreeting.react",
    "WAWebMetaAIProfileIcon.react",
    "WAWebNoop",
    "react",
    "react-compiler-runtime",
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
      var e = o("react-compiler-runtime").c(10),
        t = d(null),
        n = t[0],
        a = t[1],
        i,
        l;
      (e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = function () {
            o("WAWebBotFrontendUtils")
              .getMetaAiChat()
              .then(function (e) {
                e != null && a(e);
              });
          }),
          (l = []),
          (e[0] = i),
          (e[1] = l))
        : ((i = e[0]), (l = e[1])),
        c(i, l));
      var u, m, p, _;
      e[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = {
            className:
              "x78zum5 xdt5ytf x6s0dn4 xl56j7k xh8yej3 x5yr21d xexx8yu x18d9i69 xb0esv5 xyo0t3i x9f619 x1280gxy x67bb7w",
          }),
          (m = { className: "x78zum5 xdt5ytf x6s0dn4 xrlsmeg xh8yej3" }),
          (p = s.jsxs("div", {
            className:
              "x78zum5 xdt5ytf x6s0dn4 xtl7yxs xegkacw x1lfcbla x1u6ievf x1k0bccz",
            children: [
              s.jsx(r("WAWebMetaAIProfileIcon.react"), {}),
              s.jsx("div", {
                className: "x1ci5j9l",
                children: s.jsx(r("WAWebMetaAIGreeting.react"), {}),
              }),
            ],
          })),
          (_ = { className: "x1q9ymp4 xh8yej3" }),
          (e[2] = u),
          (e[3] = m),
          (e[4] = p),
          (e[5] = _))
        : ((u = e[2]), (m = e[3]), (p = e[4]), (_ = e[5]));
      var f;
      e[6] !== n
        ? ((f =
            n != null &&
            s.jsx(o("WAWebComposeBox.react").ComposeBox, {
              chat: n,
              onPageUpDown: r("WAWebNoop"),
              onComposeHeightChange: r("WAWebNoop"),
            })),
          (e[6] = n),
          (e[7] = f))
        : (f = e[7]);
      var g;
      return (
        e[8] !== f
          ? ((g = s.jsx(
              "section",
              babelHelpers.extends({ "data-testid": void 0 }, u, {
                children: s.jsxs(
                  "div",
                  babelHelpers.extends({}, m, {
                    children: [
                      p,
                      s.jsx(
                        "div",
                        babelHelpers.extends({}, _, { children: f }),
                      ),
                    ],
                  }),
                ),
              }),
            )),
            (e[8] = f),
            (e[9] = g))
          : (g = e[9]),
        g
      );
    }
    l.default = p;
  },
  98,
);
