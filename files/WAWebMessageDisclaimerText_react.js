__d(
  "WAWebMessageDisclaimerText.react",
  [
    "WAWebFlex.react",
    "WAWebMsgGetters",
    "WDSIconIcInfo.react",
    "isStringNullOrEmpty",
    "react",
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
      var t = e.msg,
        n = o("useWAWebMsgValues").useMsgValues(t.id, [
          o("WAWebMsgGetters").getBotMessageDisclaimerText,
        ]),
        a = n[0];
      return r("isStringNullOrEmpty")(a)
        ? null
        : s.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            columnGap: 8,
            xstyle: [u.container, u.paddingTop8],
            children: [
              s.jsx(r("WDSIconIcInfo.react"), {
                width: 16,
                height: 16,
                xstyle: u.icon,
              }),
              s.jsx("span", {
                className: "x1n2onr6 x1f6kntn x1k4tb9n",
                children: a,
              }),
            ],
          });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
