__d(
  "WAWebChatInfoChatThemeRow.react",
  ["fbt", "WAWebChatInfoDrawerRow.react", "WDSIconIcPalette.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.onClick;
      return u.jsx(
        o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed,
        {
          testid: void 0,
          icon: u.jsx(r("WDSIconIcPalette.react"), {}),
          onClick: t,
          title: u.jsx(
            o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed,
            { title: s._(/*BTDS*/ "Chat theme") },
          ),
        },
      );
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
