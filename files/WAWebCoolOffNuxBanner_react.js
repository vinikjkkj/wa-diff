__d(
  "WAWebCoolOffNuxBanner.react",
  ["WDSBanner.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useState;
    function c(e) {
      var t = e.actionText,
        n = e.bannerTextTestid,
        o = e.icon,
        a = e.nuxManager,
        i = e.onClick,
        l = e.onDismiss,
        c = e.subtitle,
        d = e.theme,
        m = e.title,
        p = u(!0),
        _ = p[0],
        f = p[1];
      a.show();
      var g = function () {
          (a.dismiss(), l == null || l(), f(!1));
        },
        h = function () {
          (a.click(), i == null || i());
        };
      return s.jsx(s.Fragment, {
        children:
          _ &&
          s.jsx("div", {
            className: "x1380le5 x14mko6t xefnzgg x1uvdrpn",
            children: s.jsx(r("WDSBanner.react"), {
              type: "default",
              title: c != null ? m : void 0,
              body: c != null ? c : m,
              actionText: t,
              icon: o,
              onAction: i != null ? h : void 0,
              onDismiss: g,
              testid: void 0,
            }),
          }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
