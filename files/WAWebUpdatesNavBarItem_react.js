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
    "react-compiler-runtime",
    "useCometRouterDispatcher",
    "useWAWebAppTracker",
    "useWAWebEventTargetValue",
    "useWAWebStatusActivityIndicator",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(20),
        a = e.activeNavBarItem,
        i = e.updateActiveNavBarItem,
        l = o(
          "useWAWebStatusActivityIndicator",
        ).useWAWebStatusActivityIndicator(),
        c = l.clearUnreadActivity,
        p = l.hasUnread;
      r("useWAWebAppTracker")(
        o("WAWebAppTracker").AppTrackerType.UpdatesTab,
        a === o("WAWebNavBarTypes").NavBarItems.Updates,
      );
      var _ = r("useCometRouterDispatcher")(),
        f = r("useWAWebEventTargetValue")(
          r("WAWebNewsletterCollection"),
          "add change remove updates_tab_close",
          m,
        ),
        g = r("useWAWebEventTargetValue")(
          r("WAWebNewsletterTabPulseState"),
          "pulseChange",
          d,
        ),
        h = p || f,
        y;
      t[0] !== f || t[1] !== h || t[2] !== g
        ? ((y = h
            ? u.jsx(r("WAWebUnreadActivityIndicator.react"), { pulse: g && f })
            : null),
          (t[0] = f),
          (t[1] = h),
          (t[2] = g),
          (t[3] = y))
        : (y = t[3]);
      var C = y,
        b;
      t[4] !== a || t[5] !== c || t[6] !== _ || t[7] !== i
        ? ((b = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (a !== o("WAWebNavBarTypes").NavBarItems.Updates) {
                var e =
                  yield o(
                    "WAWebDrawerManager",
                  ).DrawerManager.closeDrawerLeftAsync();
                e &&
                  (i(o("WAWebNavBarTypes").NavBarItems.Updates),
                  o(
                    "WAWebUserPrefsNewsletter",
                  ).setNewsletterTabLastSeenTimestamp(
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
                  o("WAWebOpenUpdatesTab").openUpdatesTab(c, _),
                  o(
                    "WAWebOpenLastActiveNewsletterAction",
                  ).openLastActiveNewsletter());
              }
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (t[4] = a),
          (t[5] = c),
          (t[6] = _),
          (t[7] = i),
          (t[8] = b))
        : (b = t[8]);
      var v = b,
        S;
      t[9] !== a
        ? ((S =
            a === o("WAWebNavBarTypes").NavBarItems.Updates
              ? u.jsx(r("WDSIconWdsIcUpdatesFilled.react"), {})
              : u.jsx(r("WDSIconWdsIcUpdates.react"), {})),
          (t[9] = a),
          (t[10] = S))
        : (S = t[10]);
      var R = S,
        L;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = s._(/*BTDS*/ "Updates")), (t[11] = L))
        : (L = t[11]);
      var E = L,
        k;
      t[12] !== h
        ? ((k = h ? s._(/*BTDS*/ "Unread Updates") : s._(/*BTDS*/ "Updates")),
          (t[12] = h),
          (t[13] = k))
        : (k = t[13]);
      var I = k,
        T = a === o("WAWebNavBarTypes").NavBarItems.Updates,
        D;
      t[14] !== I || t[15] !== v || t[16] !== T || t[17] !== C || t[18] !== R
        ? ((D = u.jsx(o("WAWebNavBarItem.react").NavBarItem, {
            icon: R,
            ariaLabel: I,
            inlineActivityIndicator: C,
            inlineActivityIndicatorType: o("WAWebNavBarItem.react")
              .InlineActivityIndicatorType.Dot,
            title: E,
            testid: void 0,
            isActive: T,
            onClick: v,
            tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_UPDATES,
          })),
          (t[14] = I),
          (t[15] = v),
          (t[16] = T),
          (t[17] = C),
          (t[18] = R),
          (t[19] = D))
        : (D = t[19]);
      var x = D;
      return x;
    }
    function d() {
      return r("WAWebNewsletterTabPulseState").getIsPulsing();
    }
    function m() {
      return r("WAWebNewsletterCollection").hasAnyUnreadSinceGivenTimestamp(
        o("WAWebUserPrefsNewsletter").getNewsletterTabLastSeenTimestamp(),
      );
    }
    l.UpdatesNavBarItem = c;
  },
  226,
);
