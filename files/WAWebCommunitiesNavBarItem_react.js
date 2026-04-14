__d(
  "WAWebCommunitiesNavBarItem.react",
  [
    "fbt",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebAppTracker",
    "WAWebCommunityActivityCollection",
    "WAWebCommunityDailyUtils",
    "WAWebCommunityFlow.react",
    "WAWebCommunityRefreshed32Icon.react",
    "WAWebCommunityRefreshedFilled32Icon.react",
    "WAWebDrawerManager",
    "WAWebInteractionTracePolicy",
    "WAWebKeyboardTabUtils",
    "WAWebNavBarItem.react",
    "WAWebNavBarLogEvents",
    "WAWebNavBarTypes",
    "WAWebOpenLastActiveCommunityAction",
    "WAWebSideNavButtonsActivityModel",
    "WAWebUnreadActivityIndicator.react",
    "WAWebWamEnumWebcNavbarItemLabel",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebAppTracker",
    "useWAWebEventTargetValue",
    "useWAWebNavigateToRouterPage",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        dotIndicatorPosition: {
          insetInlineStart: "x1pe450p",
          left: null,
          right: null,
          bottom: "x1oozmrk",
          $$css: !0,
        },
        paddingAll4: {
          paddingTop: "x1tiyuxx",
          paddingInlineEnd: "x1uc92m",
          paddingBottom: "x1nbhmlj",
          paddingInlineStart: "x181vq82",
          $$css: !0,
        },
      };
    function d(e) {
      var t = e.activeNavBarItem,
        a = e.updateActiveNavBarItem;
      r("useWAWebAppTracker")(
        o("WAWebAppTracker").AppTrackerType.CommunitiesTab,
        t === o("WAWebNavBarTypes").NavBarItems.Communities,
      );
      var i = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = yield o(
              "WAWebDrawerManager",
            ).DrawerManager.openDrawerLeftAsync(
              o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
                ? { descriptorType: "community_flow" }
                : u.jsx(o("WAWebCommunityFlow.react").CommunityFlow, {}),
              {
                focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                transition: "pop-drawer-fast",
                focusOnUnMount: !0,
              },
            );
            e &&
              (a(o("WAWebNavBarTypes").NavBarItems.Communities),
              o("WAWebCommunityDailyUtils").incrementCommunityTabEvent(
                o("WAWebCommunityDailyUtils").CommunityDailyTabMetricsType
                  .TAB_VIEWS,
              ),
              o("WAWebNavBarLogEvents").logNavBarEvent(
                o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL
                  .COMMUNITIES,
              ),
              o("WAWebSideNavButtonsActivityModel").setLastActiveButton(
                o("WAWebNavBarTypes").NavBarItems.Communities,
              ),
              o(
                "WAWebOpenLastActiveCommunityAction",
              ).openLastActiveCommunity());
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        l = r("useWAWebNavigateToRouterPage")(
          o("WAWebNavBarTypes").NavBarItems.Chats,
          {
            onNavigationTransitioning: function () {
              (a(o("WAWebNavBarTypes").NavBarItems.Communities),
                o("WAWebCommunityDailyUtils").incrementCommunityTabEvent(
                  o("WAWebCommunityDailyUtils").CommunityDailyTabMetricsType
                    .TAB_VIEWS,
                ),
                o("WAWebNavBarLogEvents").logNavBarEvent(
                  o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL
                    .COMMUNITIES,
                ),
                o("WAWebSideNavButtonsActivityModel").setLastActiveButton(
                  o("WAWebNavBarTypes").NavBarItems.Communities,
                ),
                o(
                  "WAWebOpenLastActiveCommunityAction",
                ).openLastActiveCommunity());
            },
          },
        ),
        d = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (t !== o("WAWebNavBarTypes").NavBarItems.Communities) {
              if (l != null) {
                l();
                return;
              }
              return i();
            }
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        m =
          t === o("WAWebNavBarTypes").NavBarItems.Communities
            ? u.jsx(
                o("WAWebCommunityRefreshedFilled32Icon.react")
                  .CommunityRefreshedFilled32Icon,
                {},
              )
            : u.jsx(
                o("WAWebCommunityRefreshed32Icon.react")
                  .CommunityRefreshed32Icon,
                {},
              ),
        p = r("useWAWebEventTargetValue")(
          r("WAWebCommunityActivityCollection"),
          "add change remove community_tab_view",
          function () {
            return r("WAWebCommunityActivityCollection").shouldShowTabBadge();
          },
        ),
        _ = p ? u.jsx(r("WAWebUnreadActivityIndicator.react"), {}) : null,
        f = s._(/*BTDS*/ "Communities"),
        g = u.jsx(o("WAWebNavBarItem.react").NavBarItem, {
          icon: m,
          inlineActivityIndicator: _,
          inlineActivityIndicatorType: o("WAWebNavBarItem.react")
            .InlineActivityIndicatorType.Dot,
          title: f,
          testid: void 0,
          isActive: t === o("WAWebNavBarTypes").NavBarItems.Communities,
          onClick: d,
          spacingXstyle: c.paddingAll4,
          dotIndicatorPositionXstyle: c.dotIndicatorPosition,
          tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_COMMUNITIES,
        });
      return g;
    }
    ((d.displayName = d.name + " [from " + i.id + "]"),
      (l.CommunitiesNavBarItem = d));
  },
  226,
);
