__d(
  "WAWebBizBroadcastsDialog.react",
  [
    "WAWebCloseRefreshedIcon.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WDSButton.react",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = { surface: "bb-imported-contact-wizard" },
      c = {
        body: { maxWidth: "x1kvbfxc", $$css: !0 },
        container: { marginInlineStart: "xm2jcoa", $$css: !0 },
      };
    function d(e) {
      var t = e.children,
        n = e.onClose,
        a = e.primaryAction,
        i = e.testid,
        l = i === void 0 ? "biz-broadcasts-dialog" : i,
        d = e.title;
      return s.jsxs(r("WAWebDrawer.react"), {
        testid: void 0,
        tsNavigationData: u,
        xstyle: c.container,
        children: [
          s.jsxs("header", {
            className:
              "x6s0dn4 x78zum5 x1q0g3np x2lah0s x8a3fw1 x1aj3ljl x1peatla x1nhvcw1 xexx8yu x18d9i69 x1iw51ew xde1mab",
            children: [
              s.jsx(r("WDSButton.react"), {
                size: "medium",
                variant: "borderless",
                Icon: o("WAWebCloseRefreshedIcon.react").CloseRefreshedIcon,
                onPress: n,
              }),
              d != null
                ? s.jsx("div", {
                    className: "x6s0dn4 x78zum5 x98rzlu",
                    children: s.jsx(r("WDSText.react"), {
                      type: "Body1",
                      colorName: "contentDefault",
                      children: d,
                    }),
                  })
                : null,
              a != null
                ? s.jsx("div", { className: "x2lah0s", children: a })
                : null,
            ],
          }),
          s.jsx("div", {
            className: "xw2csxc x1odjw0f xh8yej3",
            children: s.jsx("div", {
              className: "x78zum5 xl56j7k",
              children: s.jsx(r("WAWebDrawerBody.react"), {
                xstyle: c.body,
                children: t,
              }),
            }),
          }),
        ],
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
