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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(18),
        a = e.activeNavBarItem,
        i = e.updateActiveNavBarItem;
      r("useWAWebAppTracker")(
        o("WAWebAppTracker").AppTrackerType.CommunitiesTab,
        a === o("WAWebNavBarTypes").NavBarItems.Communities,
      );
      var l;
      t[0] !== i
        ? ((l = (function () {
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
                (i(o("WAWebNavBarTypes").NavBarItems.Communities),
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
          })()),
          (t[0] = i),
          (t[1] = l))
        : (l = t[1]);
      var d = l,
        p;
      t[2] !== i
        ? ((p = {
            onNavigationTransitioning: function () {
              (i(o("WAWebNavBarTypes").NavBarItems.Communities),
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
          }),
          (t[2] = i),
          (t[3] = p))
        : (p = t[3]);
      var _ = r("useWAWebNavigateToRouterPage")(
          o("WAWebNavBarTypes").NavBarItems.Chats,
          p,
        ),
        f;
      t[4] !== a || t[5] !== d || t[6] !== _
        ? ((f = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (a !== o("WAWebNavBarTypes").NavBarItems.Communities) {
                if (_ != null) {
                  _();
                  return;
                }
                return d();
              }
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (t[4] = a),
          (t[5] = d),
          (t[6] = _),
          (t[7] = f))
        : (f = t[7]);
      var g = f,
        h;
      t[8] !== a
        ? ((h =
            a === o("WAWebNavBarTypes").NavBarItems.Communities
              ? u.jsx(
                  o("WAWebCommunityRefreshedFilled32Icon.react")
                    .CommunityRefreshedFilled32Icon,
                  {},
                )
              : u.jsx(
                  o("WAWebCommunityRefreshed32Icon.react")
                    .CommunityRefreshed32Icon,
                  {},
                )),
          (t[8] = a),
          (t[9] = h))
        : (h = t[9]);
      var y = h,
        C = r("useWAWebEventTargetValue")(
          r("WAWebCommunityActivityCollection"),
          "add change remove community_tab_view",
          m,
        ),
        b;
      t[10] !== C
        ? ((b = C ? u.jsx(r("WAWebUnreadActivityIndicator.react"), {}) : null),
          (t[10] = C),
          (t[11] = b))
        : (b = t[11]);
      var v = b,
        S;
      t[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = s._(/*BTDS*/ "Communities")), (t[12] = S))
        : (S = t[12]);
      var R = S,
        L = a === o("WAWebNavBarTypes").NavBarItems.Communities,
        E;
      t[13] !== y || t[14] !== v || t[15] !== g || t[16] !== L
        ? ((E = u.jsx(o("WAWebNavBarItem.react").NavBarItem, {
            icon: y,
            inlineActivityIndicator: v,
            inlineActivityIndicatorType: o("WAWebNavBarItem.react")
              .InlineActivityIndicatorType.Dot,
            title: R,
            testid: void 0,
            isActive: L,
            onClick: g,
            spacingXstyle: c.paddingAll4,
            dotIndicatorPositionXstyle: c.dotIndicatorPosition,
            tracePolicy: r("WAWebInteractionTracePolicy")
              .NAVIGATION_COMMUNITIES,
          })),
          (t[13] = y),
          (t[14] = v),
          (t[15] = g),
          (t[16] = L),
          (t[17] = E))
        : (E = t[17]);
      var k = E;
      return k;
    }
    function m() {
      return r("WAWebCommunityActivityCollection").shouldShowTabBadge();
    }
    l.CommunitiesNavBarItem = d;
  },
  226,
);
