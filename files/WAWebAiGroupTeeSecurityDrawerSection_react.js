__d(
  "WAWebAiGroupTeeSecurityDrawerSection.react",
  ["fbt", "WAWebChatInfoDrawerRow.react", "WDSIconIcLock.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.onClick,
        n = s._(/*BTDS*/ "Security"),
        a = u.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed, {
          title: n,
        }),
        i = s._(
          /*BTDS*/ "A group member added Meta AI to this chat. It's secured with Private Processing, so Meta and WhatsApp can't access the chat.",
        ),
        l = u.jsx(
          o("WAWebChatInfoDrawerRow.react").DrawerRowSecondaryTitleRefreshed,
          { title: i },
        ),
        c = u.jsx(r("WDSIconIcLock.react"), {});
      return u.jsx(
        o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed,
        { icon: c, onClick: t, title: a, secondaryTitle: l },
      );
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
