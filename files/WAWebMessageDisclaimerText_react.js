__d(
  "WAWebMessageDisclaimerText.react",
  [
    "WAWebFlex.react",
    "WAWebMsgGetters",
    "WDSIconIcInfo.react",
    "isStringNullOrEmpty",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        container: { color: "xhslqc4", paddingBottom: "xxbrewl", $$css: !0 },
        icon: { display: "x3nfvp2", alignItems: "x6s0dn4", $$css: !0 },
        paddingTop8: { paddingTop: "x16ovd2e", $$css: !0 },
      };
    function c(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.msg,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = [o("WAWebMsgGetters").getBotMessageDisclaimerText]), (t[0] = a))
        : (a = t[0]);
      var i = o("useWAWebMsgValues").useMsgValues(n.id, a),
        l = i[0];
      if (r("isStringNullOrEmpty")(l)) return null;
      var c, d, m;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = [u.container, u.paddingTop8]),
          (d = s.jsx(r("WDSIconIcInfo.react"), {
            width: 16,
            height: 16,
            xstyle: u.icon,
          })),
          (m = { className: "x1n2onr6 x1f6kntn x1k4tb9n" }),
          (t[1] = c),
          (t[2] = d),
          (t[3] = m))
        : ((c = t[1]), (d = t[2]), (m = t[3]));
      var p;
      return (
        t[4] !== l
          ? ((p = s.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              columnGap: 8,
              xstyle: c,
              children: [
                d,
                s.jsx("span", babelHelpers.extends({}, m, { children: l })),
              ],
            })),
            (t[4] = l),
            (t[5] = p))
          : (p = t[5]),
        p
      );
    }
    l.default = c;
  },
  98,
);
