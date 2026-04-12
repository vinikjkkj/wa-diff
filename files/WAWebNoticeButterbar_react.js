__d(
  "WAWebNoticeButterbar.react",
  ["WDSBanner.react", "WDSIconIcLock.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.banner,
        n = e.shouldShow;
      if (!n || !(t != null && t.text)) return null;
      var o = t.text;
      return s.jsx("div", {
        className: "x1380le5 x14mko6t xefnzgg x1uvdrpn",
        children: s.jsx(r("WDSBanner.react"), {
          type: "default",
          body: o,
          icon: r("WDSIconIcLock.react"),
        }),
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
