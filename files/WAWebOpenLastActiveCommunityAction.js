__d(
  "WAWebOpenLastActiveCommunityAction",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = function () {
        return (
          o("WAWebDrawerManager").DrawerManager.openDrawerMid(
            o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
              ? {
                  descriptorType: "mid_drawer_empty_state",
                  navBarItem: o("WAWebNavBarTypes").NavBarItems.Communities,
                }
              : c.jsx(o("WAWebMidDrawerEmptyState.react").MidDrawerEmptyState, {
                  type: o("WAWebNavBarTypes").NavBarItems.Communities,
                }),
            { transition: "none", disableRotateFocus: !0 },
          ),
          (s || (s = n("Promise"))).resolve(!1)
        );
      },
      m = (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = o(
            "WAWebSideNavButtonsActivityModel",
          ).getLastActiveCommunity();
          if (t == null) return d();
          try {
            var r = o("WAWebChatCollection").ChatCollection.get(t);
            if (r == null || r.groupType == null) return d();
            switch (r.groupType) {
              case o("WAWebGroupType").GroupType.COMMUNITY:
              case o("WAWebGroupType").GroupType.LINKED_SUBGROUP:
              case o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP:
              case o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP:
                return (
                  o("WAWebDrawerManager").DrawerManager.closeDrawerMid(),
                  o("WAWebCmd").Cmd.openChatFromUnread({
                    chat: r,
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
                  d()
                );
            }
          } catch (e) {
            return (s || (s = n("Promise"))).resolve(!1);
          }
        });
        return function () {
          return t.apply(this, arguments);
        };
      })();
    l.openLastActiveCommunity = m;
  },
  98,
);
