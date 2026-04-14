__d(
  "WAWebCommunityInfoSection.react",
  [
    "fbt",
    "WAWebChatCommunityUtils",
    "WAWebChatInfoDrawerSection.react",
    "WAWebCommunityCells.react",
    "WAWebCommunityHomeActionsSection.react",
    "WAWebCommunityHomeDescriptionSection.react",
    "WAWebCommunityInfoMembersSection.react",
    "WAWebCommunitySubgroupSwitcher.react",
    "WAWebModalManager",
    "WAWebPeopleIcon.react",
    "WAWebSettingsIcon.react",
    "WAWebUISpacing",
    "WDSIconIcGroupAdd.react",
    "react",
    "useWAWebCommunitySubgroups",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = [
        "callbacks",
        "isAdmin",
        "onAddMembersClick",
        "parentChat",
        "scrollToMemberList",
        "showFullDescription",
      ],
      u,
      c = u || (u = o("react"));
    function d(t) {
      var n = t.callbacks,
        a = t.isAdmin,
        i = t.onAddMembersClick,
        l = t.parentChat,
        u = t.scrollToMemberList,
        d = t.showFullDescription,
        m = babelHelpers.objectWithoutPropertiesLoose(t, e),
        p = r("useWAWebCommunitySubgroups")(l.groupMetadata),
        _ = p.subgroupCount,
        f = l
          ? c.jsx(r("WAWebCommunityHomeDescriptionSection.react"), {
              chat: l,
              showFullDescription: d,
            })
          : null,
        g,
        h;
      o("WAWebChatCommunityUtils").isIntegrityDeactivatedCommunity(l) ||
        (!o("WAWebChatCommunityUtils").isSuspendedCommunity(l) &&
          a &&
          (g = c.jsxs(
            o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection,
            {
              testid: void 0,
              xstyle: [
                o("WAWebUISpacing").uiMargin.vert10,
                o("WAWebUISpacing").uiPadding.all0,
              ],
              children: [
                c.jsx(o("WAWebCommunityCells.react").CommunityMenuButton, {
                  testid: void 0,
                  Icon: r("WDSIconIcGroupAdd.react"),
                  onClick: n.onManageCommunityGroupsClick,
                  title: s._(/*BTDS*/ "Manage groups"),
                }),
                c.jsx(o("WAWebCommunityCells.react").CommunityMenuButton, {
                  testid: void 0,
                  Icon: o("WAWebSettingsIcon.react").SettingsIcon,
                  iconHeight: 20,
                  onClick: n.onCommunitySettingsClick,
                  title: s._(/*BTDS*/ "Community settings"),
                }),
              ],
            },
          )),
        (h = c.jsx(
          o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection,
          {
            testid: void 0,
            xstyle: [
              o("WAWebUISpacing").uiMargin.vert10,
              o("WAWebUISpacing").uiPadding.all0,
            ],
            children: c.jsx(
              o("WAWebCommunityCells.react").CommunityMenuButton,
              {
                testid: void 0,
                Icon: o("WAWebPeopleIcon.react").PeopleIcon,
                onClick: function () {
                  o("WAWebModalManager").ModalManager.open(
                    c.jsx(r("WAWebCommunitySubgroupSwitcher.react"), {
                      parentChat: l,
                    }),
                  );
                },
                title: s._(
                  /*BTDS*/ '_j{"*":"View groups ({subgroup-count})"}',
                  [s._param("subgroup-count", _, [0])],
                ),
              },
            ),
          },
        )));
      var y = o("WAWebChatCommunityUtils").isSuspendedCommunity(l)
          ? null
          : c.jsx(
              r("WAWebCommunityInfoMembersSection.react"),
              babelHelpers.extends(
                {
                  parentChat: l,
                  onInviteMembersClick: n.onInviteMembersClick,
                  onAddMembersClick: i,
                  scrollToMemberList: u,
                },
                m,
              ),
            ),
        C = l
          ? c.jsx(r("WAWebCommunityHomeActionsSection.react"), {
              chat: l,
              onBack: n.onBack,
              onDeactivateCommunity: n.onDeactivateCommunity,
              onTransferOwnership: n.onTransferOwnership,
            })
          : null;
      return c.jsxs(c.Fragment, { children: [f, g, h, y, C] });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
