__d(
  "WAWebNuxBannerText.react",
  ["WAWebActionLinkButterbar.react", "WAWebTabOrder", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.actionText,
        n = e.subtitle,
        a =
          t != null
            ? s.jsx(r("WAWebActionLinkButterbar.react"), {
                dataTab: o("WAWebTabOrder").TAB_ORDER.BUTTER_BAR,
                inline: !0,
                children: t,
              })
            : null;
      return s.jsxs(s.Fragment, { children: [n, " ", a] });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
