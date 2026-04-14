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
    "useWAWebNavBarPrefetch",
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
        c = i.hasUnread,
        d = r("useCometRouterDispatcher")(),
        m = r("useWAWebNavBarPrefetch")(
          o("WAWebNavBarTypes").NavBarItems.Updates,
        ),
        p = m.onMouseEnter;
      r("useWAWebAppTracker")(
        o("WAWebAppTracker").AppTrackerType.UpdatesTab,
        t === o("WAWebNavBarTypes").NavBarItems.Updates,
      );
      var _ = r("useWAWebEventTargetValue")(
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
        f = r("useWAWebEventTargetValue")(
          r("WAWebNewsletterTabPulseState"),
          "pulseChange",
          function () {
            return r("WAWebNewsletterTabPulseState").getIsPulsing();
          },
        ),
        g = c || _,
        h = g
          ? u.jsx(r("WAWebUnreadActivityIndicator.react"), { pulse: f && _ })
          : null,
        y = (function () {
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
        C =
          t === o("WAWebNavBarTypes").NavBarItems.Updates
            ? u.jsx(r("WDSIconWdsIcUpdatesFilled.react"), {})
            : u.jsx(r("WDSIconWdsIcUpdates.react"), {}),
        b = s._(/*BTDS*/ "Updates"),
        v = g ? s._(/*BTDS*/ "Unread Updates") : s._(/*BTDS*/ "Updates"),
        S = u.jsx(o("WAWebNavBarItem.react").NavBarItem, {
          icon: C,
          ariaLabel: v,
          inlineActivityIndicator: h,
          inlineActivityIndicatorType: o("WAWebNavBarItem.react")
            .InlineActivityIndicatorType.Dot,
          title: b,
          testid: void 0,
          isActive: t === o("WAWebNavBarTypes").NavBarItems.Updates,
          onClick: y,
          tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_UPDATES,
          onMouseEnter: p,
        });
      return S;
    }
    ((c.displayName = c.name + " [from " + i.id + "]"),
      (l.UpdatesNavBarItem = c));
  },
  226,
);
