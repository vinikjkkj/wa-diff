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
    "useWAWebNavBarPrefetch",
    "useWAWebStatusActivityIndicator",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(21),
        a = e.activeNavBarItem,
        i = e.updateActiveNavBarItem,
        l = o(
          "useWAWebStatusActivityIndicator",
        ).useWAWebStatusActivityIndicator(),
        c = l.clearUnreadActivity,
        p = l.hasUnread,
        _ = r("useCometRouterDispatcher")(),
        f = r("useWAWebNavBarPrefetch")(
          o("WAWebNavBarTypes").NavBarItems.Updates,
        ),
        g = f.onMouseEnter;
      r("useWAWebAppTracker")(
        o("WAWebAppTracker").AppTrackerType.UpdatesTab,
        a === o("WAWebNavBarTypes").NavBarItems.Updates,
      );
      var h = r("useWAWebEventTargetValue")(
          r("WAWebNewsletterCollection"),
          "add change remove updates_tab_close",
          m,
        ),
        y = r("useWAWebEventTargetValue")(
          r("WAWebNewsletterTabPulseState"),
          "pulseChange",
          d,
        ),
        C = p || h,
        b;
      t[0] !== h || t[1] !== C || t[2] !== y
        ? ((b = C
            ? u.jsx(r("WAWebUnreadActivityIndicator.react"), { pulse: y && h })
            : null),
          (t[0] = h),
          (t[1] = C),
          (t[2] = y),
          (t[3] = b))
        : (b = t[3]);
      var v = b,
        S;
      t[4] !== a || t[5] !== c || t[6] !== _ || t[7] !== i
        ? ((S = (function () {
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
          (t[8] = S))
        : (S = t[8]);
      var R = S,
        L;
      t[9] !== a
        ? ((L =
            a === o("WAWebNavBarTypes").NavBarItems.Updates
              ? u.jsx(r("WDSIconWdsIcUpdatesFilled.react"), {})
              : u.jsx(r("WDSIconWdsIcUpdates.react"), {})),
          (t[9] = a),
          (t[10] = L))
        : (L = t[10]);
      var E = L,
        k;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = s._(/*BTDS*/ "Updates")), (t[11] = k))
        : (k = t[11]);
      var I = k,
        T;
      t[12] !== C
        ? ((T = C ? s._(/*BTDS*/ "Unread Updates") : s._(/*BTDS*/ "Updates")),
          (t[12] = C),
          (t[13] = T))
        : (T = t[13]);
      var D = T,
        x = a === o("WAWebNavBarTypes").NavBarItems.Updates,
        $;
      t[14] !== D ||
      t[15] !== R ||
      t[16] !== g ||
      t[17] !== x ||
      t[18] !== v ||
      t[19] !== E
        ? (($ = u.jsx(o("WAWebNavBarItem.react").NavBarItem, {
            icon: E,
            ariaLabel: D,
            inlineActivityIndicator: v,
            inlineActivityIndicatorType: o("WAWebNavBarItem.react")
              .InlineActivityIndicatorType.Dot,
            title: I,
            testid: void 0,
            isActive: x,
            onClick: R,
            tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_UPDATES,
            onMouseEnter: g,
          })),
          (t[14] = D),
          (t[15] = R),
          (t[16] = g),
          (t[17] = x),
          (t[18] = v),
          (t[19] = E),
          (t[20] = $))
        : ($ = t[20]);
      var P = $;
      return P;
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
