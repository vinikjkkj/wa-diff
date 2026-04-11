__d(
  "WAWebGroupSupportSecurityDrawerSection.react",
  [
    "fbt",
    "WAWebChatInfoDrawerRow.react",
    "WDSIconIcLock.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.onClick,
        a;
      if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
        var i = s._(/*BTDS*/ "Security");
        ((a = u.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed, {
          title: i,
        })),
          (t[0] = a));
      } else a = t[0];
      var l = a,
        c;
      if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
        var d = s._(
          /*BTDS*/ "Click to learn how messages and calls are secured.",
        );
        ((c = u.jsx(
          o("WAWebChatInfoDrawerRow.react").DrawerRowSecondaryTitleRefreshed,
          { title: d },
        )),
          (t[1] = c));
      } else c = t[1];
      var m = c,
        p;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = u.jsx(r("WDSIconIcLock.react"), {})), (t[2] = p))
        : (p = t[2]);
      var _ = p,
        f;
      return (
        t[3] !== n
          ? ((f = u.jsx(
              o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed,
              { icon: _, onClick: n, title: l, secondaryTitle: m },
            )),
            (t[3] = n),
            (t[4] = f))
          : (f = t[4]),
        f
      );
    }
    l.default = c;
  },
  226,
);
