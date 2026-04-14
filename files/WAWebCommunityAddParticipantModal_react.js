__d(
  "WAWebCommunityAddParticipantModal.react",
  [
    "fbt",
    "WAWebAlertBellIcon.react",
    "WAWebCommunityGatingUtils",
    "WAWebConfirmPopup.react",
    "WAWebFlex.react",
    "WAWebPeopleIcon.react",
    "WAWebUISpacing",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = {
        border: {
          borderBottomWidth: "xso031l",
          borderBottomStyle: "x1q0q8m5",
          borderBottomColor: "x120ee7l",
          $$css: !0,
        },
        iconContainer: { width: "x1247r65", $$css: !0 },
        tealLighterColor: { color: "x1v5yvga", $$css: !0 },
      };
    function m(t) {
      var n = t.ref,
        r = babelHelpers.objectWithoutPropertiesLoose(t, e),
        a = r.contacts,
        i = r.onCancel,
        l = r.onOK,
        u = s._(
          /*BTDS*/ '_j{"*":"Add {number} people to community?","_1":"Add 1 person to community?"}',
          [s._plural(a.length, "number")],
        ),
        m = o("WAWebCommunityGatingUtils").communityGeneralChatV2Enabled()
          ? s._(
              /*BTDS*/ "They will be added to the community, and its announcement group.",
            )
          : s._(
              /*BTDS*/ "They will be added to the community, its announcement group, and its general member chat.",
            ),
        p = s._(
          /*BTDS*/ "They can join or request to join other groups in the community.",
        );
      return c.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
        cancelText: s._(/*BTDS*/ "Cancel"),
        okText: s._(/*BTDS*/ "Add"),
        onCancel: i,
        onOK: l,
        ref: n,
        title: u,
        children: [
          c.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: [d.border, o("WAWebUISpacing").uiPadding.bottom15],
            children: [
              c.jsx(o("WAWebFlex.react").FlexContainer, {
                align: "center",
                direction: "horizontal",
                grow: 0,
                justify: "center",
                shrink: 0,
                xstyle: d.iconContainer,
                children: c.jsx(o("WAWebAlertBellIcon.react").AlertBellIcon, {
                  iconXstyle: d.tealLighterColor,
                }),
              }),
              c.jsx(o("WAWebFlex.react").FlexItem, { grow: 1, children: m }),
            ],
          }),
          c.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: o("WAWebUISpacing").uiPadding.top15,
            children: [
              c.jsx(o("WAWebFlex.react").FlexContainer, {
                align: "center",
                direction: "horizontal",
                grow: 0,
                justify: "center",
                shrink: 0,
                xstyle: d.iconContainer,
                children: c.jsx(o("WAWebPeopleIcon.react").PeopleIcon, {
                  iconXstyle: d.tealLighterColor,
                }),
              }),
              c.jsx(o("WAWebFlex.react").FlexItem, { children: p }),
            ],
          }),
        ],
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    var p = m;
    l.CommunityAddParticipantModal = p;
  },
  226,
);
