__d(
  "WAWebOpenLastActiveCommunityAction",
  [
    "WALogger",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebChatCollection",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebDrawerManager",
    "WAWebGroupType",
    "WAWebMidDrawerEmptyState.react",
    "WAWebNavBarTypes",
    "WAWebSideNavButtonsActivityModel",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = function () {
        return (
          o("WAWebDrawerManager").DrawerManager.openDrawerMid(
            o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
              ? {
                  descriptorType: "mid_drawer_empty_state",
                  navBarItem: o("WAWebNavBarTypes").NavBarItems.Communities,
                }
              : u.jsx(o("WAWebMidDrawerEmptyState.react").MidDrawerEmptyState, {
                  type: o("WAWebNavBarTypes").NavBarItems.Communities,
                }),
            { transition: "none", disableRotateFocus: !0 },
          ),
          Promise.resolve(!1)
        );
      },
      d = async function () {
        var t = o("WAWebSideNavButtonsActivityModel").getLastActiveCommunity();
        if (t == null) return c();
        try {
          var n = o("WAWebChatCollection").ChatCollection.get(t);
          if (n == null || n.groupType == null) return c();
          switch (n.groupType) {
            case o("WAWebGroupType").GroupType.COMMUNITY:
            case o("WAWebGroupType").GroupType.LINKED_SUBGROUP:
            case o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP:
            case o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP:
              return (
                o("WAWebDrawerManager").DrawerManager.closeDrawerMid(),
                o("WAWebCmd").Cmd.openChatFromUnread({
                  chat: n,
                  chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                    .CommunitiesTab,
                })
              );
            case o("WAWebGroupType").GroupType.DEFAULT:
              return (
                o("WALogger")
                  .WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "openLastActiveCommunity: non-community group",
                      ])),
                  )
                  .sendLogs(
                    "open-last-active-community-error-not-a-community-group",
                  ),
                c()
              );
          }
        } catch (e) {
          return Promise.resolve(!1);
        }
      };
    l.openLastActiveCommunity = d;
  },
  98,
);
