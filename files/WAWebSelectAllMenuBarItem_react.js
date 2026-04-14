__d(
  "WAWebSelectAllMenuBarItem.react",
  ["fbt", "WAWebSelectAllIcon.react", "WDSMenuBarItem.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.onClick,
        n = e.ref;
      return u.jsx(r("WDSMenuBarItem.react"), {
        ref: n,
        testid: void 0,
        icon: o("WAWebSelectAllIcon.react").SelectAllIcon,
        title: s._(/*BTDS*/ "Select all toggle"),
        onClick: t,
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
