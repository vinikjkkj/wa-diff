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
    "useWAWebAppTracker",
    "useWAWebEventTargetValue",
    "useWAWebIsNewsletterUiEnabled",
    "useWAWebNewsletterStatusUnread",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.activeNavBarItem,
        a = e.updateActiveNavBarItem,
        i = r("useWAWebIsNewsletterUiEnabled")();
      r("useWAWebAppTracker")(
        o("WAWebAppTracker").AppTrackerType.ChannelsTab,
        t === o("WAWebNavBarTypes").NavBarItems.Newsletters,
      );
      var l = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (t !== o("WAWebNavBarTypes").NavBarItems.Newsletters) {
              var e =
                yield o(
                  "WAWebDrawerManager",
                ).DrawerManager.closeDrawerLeftAsync();
              e &&
                (a(o("WAWebNavBarTypes").NavBarItems.Newsletters),
                o("WAWebOpenNewsletterTab").openNewsletterTab(),
                o("WAWebUserPrefsNewsletter").setNewsletterTabLastSeenTimestamp(
                  o("WATimeUtils").unixTime(),
                ),
                r("WAWebNewsletterCollection").trigger("newsletter_tab_close"),
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
        })(),
        c =
          t === o("WAWebNavBarTypes").NavBarItems.Newsletters
            ? u.jsx(o("WAWebNewsletterTabIcon.react").NewsletterTabIcon, {
                directional: !0,
              })
            : u.jsx(r("WDSIconWdsIcChannels.react"), { directional: !0 }),
        d = r("useWAWebEventTargetValue")(
          r("WAWebNewsletterCollection"),
          "add change remove newsletter_tab_close",
          function () {
            return r(
              "WAWebNewsletterCollection",
            ).hasAnyUnreadSinceGivenTimestamp(
              o("WAWebUserPrefsNewsletter").getNewsletterTabLastSeenTimestamp(),
            );
          },
        ),
        m = o(
          "useWAWebNewsletterStatusUnread",
        ).useWAWebNewsletterStatusUnread(),
        p = r("useWAWebEventTargetValue")(
          r("WAWebNewsletterTabPulseState"),
          "pulseChange",
          function () {
            return r("WAWebNewsletterTabPulseState").getIsPulsing();
          },
        ),
        _ =
          d || m
            ? u.jsx(r("WAWebUnreadActivityIndicator.react"), { pulse: p })
            : null,
        f = s._(/*BTDS*/ "Channels"),
        g = u.jsx(o("WAWebNavBarItem.react").NavBarItem, {
          icon: c,
          inlineActivityIndicator: _,
          inlineActivityIndicatorType: o("WAWebNavBarItem.react")
            .InlineActivityIndicatorType.Dot,
          title: f,
          testid: void 0,
          isActive: t === o("WAWebNavBarTypes").NavBarItems.Newsletters,
          onClick: l,
          tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_NEWSLETTERS,
          shouldHoldInteractionManually: !0,
        });
      return i && g;
    }
    ((c.displayName = c.name + " [from " + i.id + "]"),
      (l.NewslettersNavBarItem = c));
  },
  226,
);
