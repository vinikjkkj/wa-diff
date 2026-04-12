__d(
  "WAWebContactInfoMessagesSection.react",
  [
    "fbt",
    "WAWebChatInfoDrawerRow.react",
    "WAWebChatInfoDrawerSection.react",
    "WAWebStarRefreshedIcon.react",
    "WAWebUISpacing",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { secondaryColor: { color: "xhslqc4", $$css: !0 } };
    function d(e) {
      var t = e.onStarred,
        n = s._(/*BTDS*/ "Starred messages"),
        r = u.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed, {
          title: n,
        }),
        a = u.jsx(o("WAWebStarRefreshedIcon.react").StarRefreshedIcon, {
          iconXstyle: c.secondaryColor,
        });
      return u.jsx(
        o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection,
        {
          titleTestId: "section-starred-messages",
          xstyle: o("WAWebUISpacing").uiPadding.horiz0,
          children: u.jsx(
            o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed,
            { icon: a, onClick: t, testid: void 0, title: r },
          ),
        },
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
