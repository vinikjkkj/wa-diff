__d(
  "WAWebPipelineColumnHeader.react",
  ["WAWebLeadStageNames", "WDSIconIcMoreVert.react", "WDSText.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = { separator: { marginInlineStart: "x1e9n31h", $$css: !0 } };
    function c(e) {
      var t = e.count,
        n = e.stage;
      return s.jsxs("div", {
        className: "x78zum5 x6s0dn4 x1qughib x1p57kb1 xvpt6g3 xdx6fka xvtqlqk",
        "data-testid": void 0,
        children: [
          s.jsxs("div", {
            className: "x78zum5 x6s0dn4 x1s70e7g",
            children: [
              s.jsx(r("WDSText.react"), {
                type: "Body1Emphasized",
                colorName: "contentDefault",
                children: o("WAWebLeadStageNames").getLeadStageName(n),
              }),
              s.jsx(r("WDSText.react"), {
                type: "Body1Emphasized",
                colorName: "contentDefault",
                xstyle: u.separator,
                children: " \xB7 ",
              }),
              s.jsx(r("WDSText.react"), {
                type: "Body1Emphasized",
                colorName: "contentDefault",
                children: String(t),
              }),
            ],
          }),
          s.jsx("div", {
            className: "xuzhngd xt0e3qv",
            children: s.jsx(r("WDSIconIcMoreVert.react"), {}),
          }),
        ],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
