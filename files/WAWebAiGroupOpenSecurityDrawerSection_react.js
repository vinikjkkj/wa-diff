__d(
  "WAWebAiGroupOpenSecurityDrawerSection.react",
  ["fbt", "WAWebChatInfoDrawerRow.react", "WAWebErrorIcon.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.onClick,
        n = s._(/*BTDS*/ "Security"),
        r = u.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed, {
          title: n,
        }),
        a = s._(
          /*BTDS*/ "A group member added Meta AI to this chat. Meta can read new messages.",
        ),
        i = u.jsx(
          o("WAWebChatInfoDrawerRow.react").DrawerRowSecondaryTitleRefreshed,
          { title: a },
        ),
        l = u.jsx(o("WAWebErrorIcon.react").ErrorIcon, {});
      return u.jsx(
        o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed,
        { icon: l, onClick: t, title: r, secondaryTitle: i },
      );
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
