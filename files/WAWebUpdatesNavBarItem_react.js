__d(
  "WAWebUpdatesNavBarItem.react",
  [
    "fbt",
    "WATimeUtils",
    "WAWebAppTracker",
    "WAWebDrawerManager",
    "WAWebInteractionTracePolicy",
    "WAWebNavBarItem.react",
    "WAWebNavBarLogEvents",
    "WAWebNavBarTypes",
    "WAWebNewsletterCollection",
    "WAWebNewsletterTabPulseState",
    "WAWebOpenLastActiveNewsletterAction",
    "WAWebOpenUpdatesTab",
    "WAWebSideNavButtonsActivityModel",
    "WAWebUnreadActivityIndicator.react",
    "WAWebUserPrefsNewsletter",
    "WAWebWamEnumWebcNavbarItemLabel",
    "WDSIconWdsIcUpdates.react",
    "WDSIconWdsIcUpdatesFilled.react",
    "asyncToGeneratorRuntime",
    "react",
    "useCometRouterDispatcher",
    "useWAWebAppTracker",
    "useWAWebEventTargetValue",
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
        o("WAWebAppTracker").AppTrackerType.UpdatesTab,
        t === o("WAWebNavBarTypes").NavBarItems.Updates,
      );
      var d = r("useCometRouterDispatcher")(),
        m = r("useWAWebEventTargetValue")(
          r("WAWebNewsletterCollection"),
          "add change remove updates_tab_close",
          function () {
            return r(
              "WAWebNewsletterCollection",
            ).hasAnyUnreadSinceGivenTimestamp(
              o("WAWebUserPrefsNewsletter").getNewsletterTabLastSeenTimestamp(),
            );
          },
        ),
        p = r("useWAWebEventTargetValue")(
          r("WAWebNewsletterTabPulseState"),
          "pulseChange",
          function () {
            return r("WAWebNewsletterTabPulseState").getIsPulsing();
          },
        ),
        _ = c || m,
        f = _
          ? u.jsx(r("WAWebUnreadActivityIndicator.react"), { pulse: p && m })
          : null,
        g = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (t !== o("WAWebNavBarTypes").NavBarItems.Updates) {
              var e =
                yield o(
                  "WAWebDrawerManager",
                ).DrawerManager.closeDrawerLeftAsync();
              e &&
                (a(o("WAWebNavBarTypes").NavBarItems.Updates),
                o("WAWebUserPrefsNewsletter").setNewsletterTabLastSeenTimestamp(
                  o("WATimeUtils").unixTime(),
                ),
                r("WAWebNewsletterCollection").trigger("updates_tab_close"),
                o("WAWebNavBarLogEvents").logNavBarEvent(
                  o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL
                    .UPDATES,
                ),
                o("WAWebSideNavButtonsActivityModel").setLastActiveButton(
                  o("WAWebNavBarTypes").NavBarItems.Updates,
                ),
                r("WAWebNewsletterTabPulseState").cancelPulse(),
                o("WAWebOpenUpdatesTab").openUpdatesTab(l, d),
                o(
                  "WAWebOpenLastActiveNewsletterAction",
                ).openLastActiveNewsletter());
            }
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        h =
          t === o("WAWebNavBarTypes").NavBarItems.Updates
            ? u.jsx(r("WDSIconWdsIcUpdatesFilled.react"), {})
            : u.jsx(r("WDSIconWdsIcUpdates.react"), {}),
        y = s._(/*BTDS*/ "Updates"),
        C = _ ? s._(/*BTDS*/ "Unread Updates") : s._(/*BTDS*/ "Updates"),
        b = u.jsx(o("WAWebNavBarItem.react").NavBarItem, {
          icon: h,
          ariaLabel: C,
          inlineActivityIndicator: f,
          inlineActivityIndicatorType: o("WAWebNavBarItem.react")
            .InlineActivityIndicatorType.Dot,
          title: y,
          testid: void 0,
          isActive: t === o("WAWebNavBarTypes").NavBarItems.Updates,
          onClick: g,
          tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_UPDATES,
        });
      return b;
    }
    ((c.displayName = c.name + " [from " + i.id + "]"),
      (l.UpdatesNavBarItem = c));
  },
  226,
);
