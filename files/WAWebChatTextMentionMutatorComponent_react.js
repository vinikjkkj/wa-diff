__d(
  "WAWebChatTextMentionMutatorComponent.react",
  [
    "WAWebABProps",
    "WAWebChatContactUtils",
    "WAWebContactGetters",
    "WAWebElevatedPushNamesFlag",
    "WAWebFrontendContactGetters",
    "WAWebMentionMutatorComponentBase.react",
    "react",
    "useWAWebContactValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.contact,
        n = e.lastMessage,
        a = e.onClick,
        i = e.selectable,
        l = e.theme,
        u = o("useWAWebContactValues").useContactValues(e.contact.id, [
          o("WAWebContactGetters").getId,
          o("WAWebFrontendContactGetters").getDisplayName,
          o("WAWebContactGetters").getNotifyName,
        ]),
        c = u[0],
        d = u[1],
        m = u[2],
        p,
        _;
      return (
        o("WAWebElevatedPushNamesFlag").pushNameCanBeUsed(t) &&
        o("WAWebABProps").getABPropConfigValue(
          "elevated_push_names_v2_m2_enabled",
        )
          ? ((p = o("WAWebChatContactUtils")
              .getFormattedNotifyName(m, !1)
              .toString()),
            (_ = o("WAWebChatContactUtils")
              .getAccessibleNotifyName(m)
              .toString()))
          : (p = d),
        s.jsx(r("WAWebMentionMutatorComponentBase.react"), {
          text: p,
          jid: c.toString(),
          onClick: a,
          theme: l,
          selectable: i,
          ariaLabel: _,
          lastMessage: n,
        })
      );
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
