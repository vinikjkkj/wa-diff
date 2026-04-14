__d(
  "WAWebBizToolsTopCard.react",
  [
    "WAWebBizToolsTopCardIcon.react",
    "WAWebButton.react",
    "WAWebFlex.react",
    "WAWebText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = 48,
      c = { marginBottom16: { marginBottom: "x1ua1l7f", $$css: !0 } };
    function d() {
      return s.jsx(r("WAWebBizToolsTopCardIcon.react"), {
        height: u,
        width: u,
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = e.promotion,
        n = t.promotion.promotion.data,
        r = n.primaryAction,
        a = n.textElementValue,
        i = n.titleElementValue;
      if (r == null) return null;
      var l = r.deepLink,
        u = r.text,
        m = r.universalLink,
        p = l != null ? l : m;
      if (p == null || p === "") return null;
      var _ = t.image,
        f = _ != null ? _ : s.jsx(d, {}),
        g = function () {
          t.primaryActionClick();
        };
      return s.jsxs("div", {
        className:
          "x1p57kb1 xvtqlqk xvpt6g3 xdx6fka x1380le5 xyxtwap x7vsco6 x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xx42vgk xbogo7e x120ee7l x1vb5itz x6nvzda x4i4b9w xhl9efl xj65ea0",
        children: [
          s.jsxs(o("WAWebFlex.react").FlexRow, {
            children: [
              s.jsx("div", { className: "x2lah0s x1useyqa", children: f }),
              s.jsxs("div", {
                className: "xlese2p",
                children: [
                  s.jsx(o("WAWebText.react").WAWebTextTitle, {
                    weight: "semibold",
                    children: i,
                  }),
                  s.jsx(o("WAWebText.react").WAWebTextMuted, {
                    color: "secondary",
                    xstyle: c.marginBottom16,
                    children: a,
                  }),
                ],
              }),
            ],
          }),
          s.jsx(o("WAWebFlex.react").FlexRow, {
            justify: "end",
            children: s.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
              onClick: g,
              children: u,
            }),
          }),
        ],
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
