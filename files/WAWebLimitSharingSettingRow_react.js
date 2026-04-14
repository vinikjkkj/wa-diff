__d(
  "WAWebLimitSharingSettingRow.react",
  [
    "fbt",
    "WAWebBotGroupGatingUtils",
    "WAWebChatGroupUtils",
    "WAWebChatInfoDrawerRow.react",
    "WAWebLimitSharingUIUtils",
    "WDSIconIcSecurity.react",
    "react",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { secondaryColor: { color: "xhslqc4", $$css: !0 } };
    function d(e) {
      var t = e.chat,
        n = e.onClick,
        a = e.testid,
        i = o("useWAWebModelValues").useModelValues(t, [
          "id",
          "limitSharing",
          "groupMetadata",
        ]),
        l =
          o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled() &&
          o("WAWebChatGroupUtils").isAIGroupOpen(i),
        d =
          o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled() &&
          o("WAWebChatGroupUtils").isAIGroupTee(i),
        m = o("WAWebLimitSharingUIUtils").isLimitSharingReceiverEnabled(i),
        p = m ? s._(/*BTDS*/ "On") : s._(/*BTDS*/ "Off"),
        _ = s._(/*BTDS*/ "Advanced chat privacy"),
        f = u.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed, {
          title: _,
        }),
        g = u.jsx(
          o("WAWebChatInfoDrawerRow.react").DrawerRowSecondaryTitleRefreshed,
          { title: p },
        ),
        h = { iconXstyle: c.secondaryColor, height: 24 },
        y = u.jsx(r("WDSIconIcSecurity.react"), babelHelpers.extends({}, h));
      return u.jsx(
        "div",
        babelHelpers.extends(
          {},
          { 0: {}, 1: { className: "xbyyjgo" } }[!!(l || d) << 0],
          {
            children: u.jsx(
              o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed,
              {
                icon: y,
                onClick: n,
                title: f,
                secondaryTitle: g,
                testid: void 0,
              },
            ),
          },
        ),
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
