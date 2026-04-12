__d(
  "WAWebStatusNavBarItem.react",
  [
    "fbt",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebAppTracker",
    "WAWebDrawerManager",
    "WAWebInteractionTracePolicy",
    "WAWebMidDrawerEmptyState.react",
    "WAWebNavBarItem.react",
    "WAWebNavBarLogEvents",
    "WAWebNavBarTypes",
    "WAWebStatusFilledRefreshedIcon.react",
    "WAWebStatusNavigateTo",
    "WAWebStatusRefreshedIcon.react",
    "WAWebUnreadActivityIndicator.react",
    "WAWebWamEnumWebcNavbarItemLabel",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebAppTracker",
    "useWAWebStatusActivityIndicator",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.activeNavBarItem,
        a = e.updateActiveNavBarItem,
        i = o(
          "useWAWebStatusActivityIndicator",
        ).useWAWebStatusActivityIndicator(),
        l = i.clearUnreadActivity,
        c = i.hasUnread;
      r("useWAWebAppTracker")(
        o("WAWebAppTracker").AppTrackerType.StatusTab,
        t === o("WAWebNavBarTypes").NavBarItems.Status,
      );
      var d = c ? u.jsx(r("WAWebUnreadActivityIndicator.react"), {}) : null,
        m = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (t !== o("WAWebNavBarTypes").NavBarItems.Status) {
              var e =
                yield o(
                  "WAWebDrawerManager",
                ).DrawerManager.closeDrawerLeftAsync();
              e &&
                (a(o("WAWebNavBarTypes").NavBarItems.Status),
                o("WAWebStatusNavigateTo").navigateToStatus(l),
                o("WAWebNavBarLogEvents").logNavBarEvent(
                  o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL
                    .STATUS,
                ),
                o("WAWebDrawerManager").DrawerManager.openDrawerMid(
                  o(
                    "WAWebAdaptiveLayoutGatingUtils",
                  ).shouldUseDrawerDescriptor()
                    ? {
                        descriptorType: "mid_drawer_empty_state",
                        navBarItem: o("WAWebNavBarTypes").NavBarItems.Status,
                      }
                    : u.jsx(
                        o("WAWebMidDrawerEmptyState.react").MidDrawerEmptyState,
                        { type: o("WAWebNavBarTypes").NavBarItems.Status },
                      ),
                  { transition: "none", disableRotateFocus: !0 },
                ));
            }
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        p =
          t === o("WAWebNavBarTypes").NavBarItems.Status
            ? u.jsx(
                o("WAWebStatusFilledRefreshedIcon.react")
                  .StatusFilledRefreshedIcon,
                {},
              )
            : u.jsx(
                o("WAWebStatusRefreshedIcon.react").StatusRefreshedIcon,
                {},
              ),
        _ = s._(/*BTDS*/ "Status"),
        f = c ? s._(/*BTDS*/ "Updates in Status") : s._(/*BTDS*/ "Status"),
        g = u.jsx(o("WAWebNavBarItem.react").NavBarItem, {
          icon: p,
          ariaLabel: f,
          inlineActivityIndicator: d,
          inlineActivityIndicatorType: o("WAWebNavBarItem.react")
            .InlineActivityIndicatorType.Dot,
          title: _,
          testid: void 0,
          isActive: t === o("WAWebNavBarTypes").NavBarItems.Status,
          onClick: m,
          tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_STATUS,
        });
      return g;
    }
    ((c.displayName = c.name + " [from " + i.id + "]"),
      (l.StatusNavBarItem = c));
  },
  226,
);
