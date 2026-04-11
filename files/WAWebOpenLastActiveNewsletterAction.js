__d(
  "WAWebOpenLastActiveNewsletterAction",
  [
    "Promise",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebCmd",
    "WAWebDrawerManager",
    "WAWebMidDrawerEmptyState.react",
    "WAWebNavBarTypes",
    "WAWebNewsletterCollection",
    "WAWebSideNavButtonsActivityModel",
    "WAWebStatusGatingUtils",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = function () {
        var e = o("WAWebStatusGatingUtils").isUpdatesTabInNavigationBarEnabled()
          ? o("WAWebNavBarTypes").NavBarItems.Updates
          : o("WAWebNavBarTypes").NavBarItems.Newsletters;
        o("WAWebDrawerManager").DrawerManager.openDrawerMid(
          o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
            ? { descriptorType: "mid_drawer_empty_state", navBarItem: e }
            : u.jsx(o("WAWebMidDrawerEmptyState.react").MidDrawerEmptyState, {
                type: e,
              }),
          { transition: "none", disableRotateFocus: !0 },
        );
      },
      d = (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = o(
            "WAWebSideNavButtonsActivityModel",
          ).getLastActiveNewsletter();
          if (t == null) return (c(), (e || (e = n("Promise"))).resolve(!1));
          try {
            var a = r("WAWebNewsletterCollection").get(t);
            return a == null
              ? (c(), (e || (e = n("Promise"))).resolve(!1))
              : (o("WAWebDrawerManager").DrawerManager.closeDrawerMid(),
                o("WAWebCmd").Cmd.openChatFromUnread({
                  chat: a,
                  chatEntryPoint: o(
                    "WAWebSideNavButtonsActivityModel",
                  ).getLastActiveNewsletterEntryPoint(),
                }));
          } catch (t) {
            return (e || (e = n("Promise"))).resolve(!1);
          }
        });
        return function () {
          return t.apply(this, arguments);
        };
      })();
    l.openLastActiveNewsletter = d;
  },
  98,
);
