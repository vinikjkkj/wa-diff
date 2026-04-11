__d(
  "WAWebNewslettersNavBarItem.react",
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
    "WAWebNewsletterTabIcon.react",
    "WAWebNewsletterTabPulseState",
    "WAWebOpenLastActiveNewsletterAction",
    "WAWebOpenNewsletterTab",
    "WAWebSideNavButtonsActivityModel",
    "WAWebUnreadActivityIndicator.react",
    "WAWebUserPrefsNewsletter",
    "WAWebWamEnumWebcNavbarItemLabel",
    "WDSIconWdsIcChannels.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebAppTracker",
    "useWAWebEventTargetValue",
    "useWAWebIsNewsletterUiEnabled",
    "useWAWebNewsletterStatusUnread",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(15),
        a = e.activeNavBarItem,
        i = e.updateActiveNavBarItem,
        l = r("useWAWebIsNewsletterUiEnabled")();
      r("useWAWebAppTracker")(
        o("WAWebAppTracker").AppTrackerType.ChannelsTab,
        a === o("WAWebNavBarTypes").NavBarItems.Newsletters,
      );
      var c;
      t[0] !== a || t[1] !== i
        ? ((c = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (a !== o("WAWebNavBarTypes").NavBarItems.Newsletters) {
                var e =
                  yield o(
                    "WAWebDrawerManager",
                  ).DrawerManager.closeDrawerLeftAsync();
                e &&
                  (i(o("WAWebNavBarTypes").NavBarItems.Newsletters),
                  o("WAWebOpenNewsletterTab").openNewsletterTab(),
                  o(
                    "WAWebUserPrefsNewsletter",
                  ).setNewsletterTabLastSeenTimestamp(
                    o("WATimeUtils").unixTime(),
                  ),
                  r("WAWebNewsletterCollection").trigger(
                    "newsletter_tab_close",
                  ),
                  o("WAWebNavBarLogEvents").logNavBarEvent(
                    o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL
                      .NEWSLETTERS,
                  ),
                  o("WAWebSideNavButtonsActivityModel").setLastActiveButton(
                    o("WAWebNavBarTypes").NavBarItems.Newsletters,
                  ),
                  r("WAWebNewsletterTabPulseState").cancelPulse(),
                  o(
                    "WAWebOpenLastActiveNewsletterAction",
                  ).openLastActiveNewsletter());
              }
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (t[0] = a),
          (t[1] = i),
          (t[2] = c))
        : (c = t[2]);
      var p = c,
        _;
      t[3] !== a
        ? ((_ =
            a === o("WAWebNavBarTypes").NavBarItems.Newsletters
              ? u.jsx(o("WAWebNewsletterTabIcon.react").NewsletterTabIcon, {
                  directional: !0,
                })
              : u.jsx(r("WDSIconWdsIcChannels.react"), { directional: !0 })),
          (t[3] = a),
          (t[4] = _))
        : (_ = t[4]);
      var f = _,
        g = r("useWAWebEventTargetValue")(
          r("WAWebNewsletterCollection"),
          "add change remove newsletter_tab_close",
          m,
        ),
        h = o(
          "useWAWebNewsletterStatusUnread",
        ).useWAWebNewsletterStatusUnread(),
        y = r("useWAWebEventTargetValue")(
          r("WAWebNewsletterTabPulseState"),
          "pulseChange",
          d,
        ),
        C;
      t[5] !== g || t[6] !== h || t[7] !== y
        ? ((C =
            g || h
              ? u.jsx(r("WAWebUnreadActivityIndicator.react"), { pulse: y })
              : null),
          (t[5] = g),
          (t[6] = h),
          (t[7] = y),
          (t[8] = C))
        : (C = t[8]);
      var b = C,
        v;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = s._(/*BTDS*/ "Channels")), (t[9] = v))
        : (v = t[9]);
      var S = v,
        R = a === o("WAWebNavBarTypes").NavBarItems.Newsletters,
        L;
      t[10] !== p || t[11] !== f || t[12] !== b || t[13] !== R
        ? ((L = u.jsx(o("WAWebNavBarItem.react").NavBarItem, {
            icon: f,
            inlineActivityIndicator: b,
            inlineActivityIndicatorType: o("WAWebNavBarItem.react")
              .InlineActivityIndicatorType.Dot,
            title: S,
            testid: void 0,
            isActive: R,
            onClick: p,
            tracePolicy: r("WAWebInteractionTracePolicy")
              .NAVIGATION_NEWSLETTERS,
            shouldHoldInteractionManually: !0,
          })),
          (t[10] = p),
          (t[11] = f),
          (t[12] = b),
          (t[13] = R),
          (t[14] = L))
        : (L = t[14]);
      var E = L;
      return l && E;
    }
    function d() {
      return r("WAWebNewsletterTabPulseState").getIsPulsing();
    }
    function m() {
      return r("WAWebNewsletterCollection").hasAnyUnreadSinceGivenTimestamp(
        o("WAWebUserPrefsNewsletter").getNewsletterTabLastSeenTimestamp(),
      );
    }
    l.NewslettersNavBarItem = c;
  },
  226,
);
