__d(
  "WAWebResetLastActiveSideNavStateAction",
  [
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebChatGetters",
    "WAWebDrawerManager",
    "WAWebGroupType",
    "WAWebMidDrawerEmptyState.react",
    "WAWebNavBarTypes",
    "WAWebSideNavButtonsActivityModel",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = function () {
        o("WAWebDrawerManager").DrawerManager.openDrawerMid(
          o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
            ? {
                descriptorType: "mid_drawer_empty_state",
                navBarItem: o("WAWebNavBarTypes").NavBarItems.Communities,
              }
            : s.jsx(o("WAWebMidDrawerEmptyState.react").MidDrawerEmptyState, {
                type: o("WAWebNavBarTypes").NavBarItems.Communities,
              }),
          { transition: "none" },
        );
      },
      c = function () {
        o("WAWebDrawerManager").DrawerManager.openDrawerMid(
          o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
            ? {
                descriptorType: "mid_drawer_empty_state",
                navBarItem: o("WAWebNavBarTypes").NavBarItems.Updates,
              }
            : s.jsx(o("WAWebMidDrawerEmptyState.react").MidDrawerEmptyState, {
                type: o("WAWebNavBarTypes").NavBarItems.Updates,
              }),
          { transition: "none" },
        );
      },
      d = function () {
        o("WAWebDrawerManager").DrawerManager.openDrawerMid(
          o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
            ? {
                descriptorType: "mid_drawer_empty_state",
                navBarItem: o("WAWebNavBarTypes").NavBarItems.Newsletters,
              }
            : s.jsx(o("WAWebMidDrawerEmptyState.react").MidDrawerEmptyState, {
                type: o("WAWebNavBarTypes").NavBarItems.Newsletters,
              }),
          { transition: "none" },
        );
      },
      m = function (t) {
        var e = o("WAWebSideNavButtonsActivityModel").getLastActiveButton();
        if (e != null)
          switch (e) {
            case o("WAWebNavBarTypes").NavBarItems.Chats:
              o("WAWebSideNavButtonsActivityModel").setLastActiveChat(null);
              break;
            case o("WAWebNavBarTypes").NavBarItems.Newsletters:
              o("WAWebChatGetters").getIsNewsletter(t) &&
                (o("WAWebSideNavButtonsActivityModel").setLastActiveNewsletter(
                  null,
                ),
                d());
              break;
            case o("WAWebNavBarTypes").NavBarItems.Communities:
              if (t.groupType != null)
                switch (t.groupType) {
                  case o("WAWebGroupType").GroupType.COMMUNITY:
                  case o("WAWebGroupType").GroupType.LINKED_SUBGROUP:
                  case o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP:
                  case o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP:
                    (o(
                      "WAWebSideNavButtonsActivityModel",
                    ).setLastActiveCommunity(null),
                      u());
                    break;
                  case o("WAWebGroupType").GroupType.DEFAULT:
                    o("WAWebSideNavButtonsActivityModel").setLastActiveChat(
                      null,
                    );
                    break;
                }
              break;
            case o("WAWebNavBarTypes").NavBarItems.Updates:
              o("WAWebChatGetters").getIsNewsletter(t) &&
                (o("WAWebSideNavButtonsActivityModel").setLastActiveNewsletter(
                  null,
                ),
                c());
              break;
            case o("WAWebNavBarTypes").NavBarItems.Archived:
            case o("WAWebNavBarTypes").NavBarItems.Beta:
            case o("WAWebNavBarTypes").NavBarItems.BizTools:
            case o("WAWebNavBarTypes").NavBarItems.AdCreation:
            case o("WAWebNavBarTypes").NavBarItems.Calls:
            case o("WAWebNavBarTypes").NavBarItems.Contacts:
            case o("WAWebNavBarTypes").NavBarItems.Orders:
            case o("WAWebNavBarTypes").NavBarItems.Labels:
            case o("WAWebNavBarTypes").NavBarItems.LockedChats:
            case o("WAWebNavBarTypes").NavBarItems.Starred:
            case o("WAWebNavBarTypes").NavBarItems.Settings:
            case o("WAWebNavBarTypes").NavBarItems.Profile:
            case o("WAWebNavBarTypes").NavBarItems.Status:
            case o("WAWebNavBarTypes").NavBarItems.MediaHub:
            case o("WAWebNavBarTypes").NavBarItems.MetaAI:
            case o("WAWebNavBarTypes").NavBarItems.MeTab:
            case o("WAWebNavBarTypes").NavBarItems.CustomerManager:
              break;
          }
      };
    l.resetLastActiveSideNavStateForChat = m;
  },
  98,
);
