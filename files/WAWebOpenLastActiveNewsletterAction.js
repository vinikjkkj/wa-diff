__d(
  "WAWebOpenLastActiveNewsletterAction",
  [
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebCmd",
    "WAWebDrawerManager",
    "WAWebMidDrawerEmptyState.react",
    "WAWebNavBarTypes",
    "WAWebNewsletterCollection",
    "WAWebSideNavButtonsActivityModel",
    "WAWebStatusGatingUtils",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = function () {
        var e = o("WAWebStatusGatingUtils").isUpdatesTabInNavigationBarEnabled()
          ? o("WAWebNavBarTypes").NavBarItems.Updates
          : o("WAWebNavBarTypes").NavBarItems.Newsletters;
        o("WAWebDrawerManager").DrawerManager.openDrawerMid(
          o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
            ? { descriptorType: "mid_drawer_empty_state", navBarItem: e }
            : s.jsx(o("WAWebMidDrawerEmptyState.react").MidDrawerEmptyState, {
                type: e,
              }),
          { transition: "none", disableRotateFocus: !0 },
        );
      },
      c = async function () {
        var e = o("WAWebSideNavButtonsActivityModel").getLastActiveNewsletter();
        if (e == null) return (u(), Promise.resolve(!1));
        try {
          var t = r("WAWebNewsletterCollection").get(e);
          return t == null
            ? (u(), Promise.resolve(!1))
            : (o("WAWebDrawerManager").DrawerManager.closeDrawerMid(),
              o("WAWebCmd").Cmd.openChatFromUnread({
                chat: t,
                chatEntryPoint: o(
                  "WAWebSideNavButtonsActivityModel",
                ).getLastActiveNewsletterEntryPoint(),
              }));
        } catch (e) {
          return Promise.resolve(!1);
        }
      };
    l.openLastActiveNewsletter = c;
  },
  98,
);
