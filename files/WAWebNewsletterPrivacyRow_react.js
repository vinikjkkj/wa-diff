__d(
  "WAWebNewsletterPrivacyRow.react",
  ["WAWebChatInfoDrawerRow.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.icon,
        r = e.onClick,
        a = e.text,
        i;
      t[0] !== e.title
        ? ((i = s.jsx(
            o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed,
            { title: e.title },
          )),
          (t[0] = e.title),
          (t[1] = i))
        : (i = t[1]);
      var l = i,
        u;
      t[2] !== a
        ? ((u = s.jsx(
            o("WAWebChatInfoDrawerRow.react").DrawerRowSecondaryTitleRefreshed,
            { title: a },
          )),
          (t[2] = a),
          (t[3] = u))
        : (u = t[3]);
      var c = u,
        d;
      return (
        t[4] !== n || t[5] !== r || t[6] !== c || t[7] !== l
          ? ((d = s.jsx(
              o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed,
              { onClick: r, icon: n, title: l, secondaryTitle: c },
            )),
            (t[4] = n),
            (t[5] = r),
            (t[6] = c),
            (t[7] = l),
            (t[8] = d))
          : (d = t[8]),
        d
      );
    }
    l.default = u;
  },
  98,
);
