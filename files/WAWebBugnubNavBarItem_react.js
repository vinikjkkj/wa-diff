__d(
  "WAWebBugnubNavBarItem.react",
  [
    "WAWebBugnubLoadable",
    "WAWebBugnubRefreshedIcon.react",
    "WAWebCurrentUser",
    "WAWebNavBarItem.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u() {
      var e = o("react-compiler-runtime").c(1),
        t = c,
        n;
      if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        var r = s.jsx(o("WAWebNavBarItem.react").NavBarItem, {
          testid: void 0,
          icon: s.jsx(
            o("WAWebBugnubRefreshedIcon.react").BugnubRefreshedIcon,
            {},
          ),
          title: "Report a bug (internal)",
          onClick: t,
          isActive: !1,
        });
        ((n = o("WAWebCurrentUser").isEmployee() ? r : null), (e[0] = n));
      } else n = e[0];
      return n;
    }
    function c() {
      r("WAWebBugnubLoadable")();
    }
    l.BugnubNavBarItem = u;
  },
  98,
);
