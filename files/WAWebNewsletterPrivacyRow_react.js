__d(
  "WAWebNewsletterPrivacyRow.react",
  ["WAWebChatInfoDrawerRow.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.icon,
        n = e.onClick,
        r = e.text,
        a = s.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed, {
          title: e.title,
        }),
        i = s.jsx(
          o("WAWebChatInfoDrawerRow.react").DrawerRowSecondaryTitleRefreshed,
          { title: r },
        );
      return s.jsx(
        o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed,
        { onClick: n, icon: t, title: a, secondaryTitle: i },
      );
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
