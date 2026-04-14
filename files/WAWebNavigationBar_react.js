__d(
  "WAWebNavigationBar.react",
  [
    "WAWebABProps",
    "WAWebActiveAccountInfoContext.react",
    "WAWebBetaNavBarItem.react",
    "WAWebBizAdCreationNavBarItem.react",
    "WAWebBizToolsNavBarItem.react",
    "WAWebBotGating",
    "WAWebBugnubNavBarItem.react",
    "WAWebCallsNavBarItemLoadable.react",
    "WAWebChatCollection",
    "WAWebChatLockUtils",
    "WAWebChatsNavBarItem.react",
    "WAWebCommunitiesNavBarItem.react",
    "WAWebCurrentUser",
    "WAWebCustomerManagerNavBarItem.react",
    "WAWebDrawerManager",
    "WAWebEnvironment",
    "WAWebFeedbackNavBarItem.react",
    "WAWebFlex.react",
    "WAWebFrontendChatGetters",
    "WAWebKeyboardHotKeys.react",
    "WAWebMeTabNavBarItem.react",
    "WAWebMediaHubNavBarItem.react",
    "WAWebMetaBotNavBarItem.react",
    "WAWebMobilePlatforms",
    "WAWebNewslettersNavBarItem.react",
    "WAWebProfileNavBarItem.react",
    "WAWebSettingGatingUtils",
    "WAWebSettingsNavBarItem.react",
    "WAWebStatusGatingUtils",
    "WAWebStatusNavBarItem.react",
    "WAWebTabOrder",
    "WAWebUISpacing",
    "WAWebUpdatesNavBarItem.react",
    "WAWebUseArrowKeyNavigation",
    "WAWebWindowsArchivedChatsNavBarItem.react",
    "WAWebWindowsLockedChatsNavBarItem.react",
    "cr:13381",
    "cr:21012",
    "cr:21280",
    "cr:2226",
    "react",
    "useMergeRefs",
    "useWAWebChatLockSettings",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.memo,
      p = d.useState,
      _ = (e = n("cr:2226")) == null ? void 0 : e.WAWebAppRatingNavBarItem,
      f =
        (s = n("cr:13381")) == null ? void 0 : s.WAWebWindowsFeedbackNavBarItem,
      g = {
        header: {
          zIndex: "x12xzxwr",
          position: "x1n2onr6",
          boxSizing: "x9f619",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          minWidth: "xq3y45c",
          width: "xbyj736",
          height: "x5yr21d",
          backgroundColor: "x1h3rtpe",
          $$css: !0,
        },
        fullWidth: { width: "xh8yej3", $$css: !0 },
        fullHeight: { height: "x5yr21d", $$css: !0 },
        wrapper: { ":hover_cursor": "x1277o0a", $$css: !0 },
      };
    function h() {
      return c.jsx("hr", {
        className:
          "xh8yej3 xjm9jq1 x178xt8z x13fuv20 xx42vgk x18oe1m7 x1sy0etr xstzfhl",
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      var t = e.activeNavBarItem,
        a = e.headerRef,
        i = e.updateActiveNavBarItem,
        l = o("WAWebUseArrowKeyNavigation").useArrowKeyNavigation({
          prefix: "navbar",
        }),
        s = l.down,
        u = l.focusItemIndex,
        d = l.onFocus,
        m = l.ref,
        y = l.up,
        C = o("WAWebActiveAccountInfoContext.react").useActiveAccountInfo(),
        b = function () {
          u(0);
        },
        v = { up: y, down: s, escape: b },
        S = r("useMergeRefs")(a, m),
        R = r("WAWebEnvironment").isWindows === !0,
        L = function () {
          return (
            R &&
            o("WAWebChatCollection").ChatCollection.some(function (e) {
              return (
                e.archive &&
                o("WAWebFrontendChatGetters").getShouldAppearInList(e)
              );
            })
          );
        },
        E = function () {
          return R && o("WAWebChatLockUtils").shouldShowChatLockEntryPoints();
        },
        k = p(L()),
        I = k[0],
        T = k[1],
        D = p(E()),
        x = D[0],
        $ = D[1],
        P = o("useWAWebChatLockSettings").useChatLockSettings(),
        N = P.hideLockedChats,
        M = o("WAWebStatusGatingUtils").isUpdatesTabInNavigationBarEnabled();
      (o("useWAWebListener").useListener(
        o("WAWebChatCollection").ChatCollection,
        "change:archive",
        function (e) {
          if (R)
            if (e.archive === !0) T(!0);
            else {
              var t = L();
              (t || o("WAWebDrawerManager").DrawerManager.closeDrawerLeft(),
                T(t));
            }
        },
      ),
        o("useWAWebListener").useListener(
          o("WAWebChatCollection").ChatCollection,
          "change:isLocked",
          function (e) {
            if (R)
              if (e.isLocked === !0) $(!0);
              else {
                var t = E();
                (t || o("WAWebDrawerManager").DrawerManager.closeDrawerLeft(),
                  $(t));
              }
          },
        ));
      var w = { activeNavBarItem: t, updateActiveNavBarItem: i },
        A =
          I &&
          c.createElement(
            r("WAWebWindowsArchivedChatsNavBarItem.react"),
            babelHelpers.extends({}, w, { key: "navbar-item-archived-chats" }),
          ),
        F =
          x &&
          !N &&
          c.createElement(
            r("WAWebWindowsLockedChatsNavBarItem.react"),
            babelHelpers.extends({}, w, { key: "navbar-item-locked-chats" }),
          ),
        O =
          o("WAWebBotGating").isBotShortcutEntryPointEnabled() &&
          c.createElement(
            o("WAWebMetaBotNavBarItem.react").MetaBotNavBarItem,
            babelHelpers.extends({}, w, { key: "navbar-item-metabot" }),
          ),
        B = c.jsx(r("WAWebMediaHubNavBarItem.react"), {}),
        W =
          o("WAWebMobilePlatforms").isSMB() &&
          c.createElement(
            o("WAWebBizToolsNavBarItem.react").BizToolsNavBarItem,
            babelHelpers.extends({}, w, {
              key: "navbar-item-biz-tools",
              activeAccountInfo: C,
            }),
          ),
        q =
          o("WAWebMobilePlatforms").isSMB() &&
          c.jsx(
            o("WAWebBizAdCreationNavBarItem.react").BizAdCreationNavBarItem,
            { activeNavBarItem: w.activeNavBarItem },
            "navbar-item-ads-creation",
          ),
        U =
          o("WAWebMobilePlatforms").isSMB() &&
          c.createElement(
            r("WAWebCustomerManagerNavBarItem.react"),
            babelHelpers.extends({}, w, {
              key: "navbar-item-customer-manager",
            }),
          ),
        V = [A, F, O, W, q, U];
      V.some(Boolean) && V.unshift(c.jsx(h, {}, "separator"));
      var H = f != null ? c.jsx(f, {}) : null,
        G =
          o("WAWebCurrentUser").isEmployee() &&
          c.jsx(o("WAWebBugnubNavBarItem.react").BugnubNavBarItem, {}),
        z =
          _ &&
          o("WAWebABProps").getABPropConfigValue(
            "web_rating_and_review_enabled",
          ) &&
          !o("WAWebABProps").getABPropConfigValue(
            "web_rating_and_review_contextual_prompt_enabled",
          )
            ? c.jsx(_, {})
            : null,
        j = H || G || z ? c.jsxs(c.Fragment, { children: [G, z, H] }) : null,
        K;
      return c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        ref: S,
        "data-testid": void 0,
        component: "header",
        tabIndex: 0,
        "data-tab": o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER,
        handlers: v,
        onFocus: d,
        xstyle: [
          g.header,
          o("WAWebUISpacing").uiPadding.horiz12,
          o("WAWebUISpacing").uiPadding.vert10,
        ],
        children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
          xstyle: [g.fullWidth, g.fullHeight],
          children: [
            c.jsx(o("WAWebFlex.react").FlexItem, {
              grow: 1,
              xstyle: g.fullWidth,
              children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
                xstyle: g.wrapper,
                children: [
                  c.jsx(
                    o("WAWebChatsNavBarItem.react").ChatsNavBarItem,
                    babelHelpers.extends({}, w),
                  ),
                  c.jsx(
                    o("WAWebCallsNavBarItemLoadable.react")
                      .CallsNavBarItemLoadable,
                    babelHelpers.extends({}, w),
                  ),
                  M
                    ? c.jsx(
                        o("WAWebUpdatesNavBarItem.react").UpdatesNavBarItem,
                        babelHelpers.extends({}, w),
                      )
                    : c.jsxs(c.Fragment, {
                        children: [
                          c.jsx(
                            o("WAWebStatusNavBarItem.react").StatusNavBarItem,
                            babelHelpers.extends({}, w),
                          ),
                          c.jsx(
                            o("WAWebNewslettersNavBarItem.react")
                              .NewslettersNavBarItem,
                            babelHelpers.extends({}, w),
                          ),
                        ],
                      }),
                  c.jsx(
                    o("WAWebCommunitiesNavBarItem.react").CommunitiesNavBarItem,
                    babelHelpers.extends({}, w),
                  ),
                  n("cr:21280")
                    ? c.jsx(n("cr:21280"), babelHelpers.extends({}, w))
                    : null,
                  V,
                ],
              }),
            }),
            c.jsx(o("WAWebFlex.react").FlexItem, {
              grow: 0,
              xstyle: g.fullWidth,
              children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
                xstyle: g.wrapper,
                children: [
                  c.jsx(
                    o("WAWebFeedbackNavBarItem.react").FeedbackNavBarItem,
                    {},
                  ),
                  j,
                  B,
                  c.jsx(
                    o("WAWebBetaNavBarItem.react").BetaNavBarItem,
                    babelHelpers.extends({}, w),
                  ),
                  j == null ? null : c.jsx(h, {}),
                  o("WAWebSettingGatingUtils").isMeTabEnabled()
                    ? c.jsx(
                        o("WAWebMeTabNavBarItem.react").MeTabNavBarItem,
                        babelHelpers.extends({}, w),
                      )
                    : c.jsxs(c.Fragment, {
                        children: [
                          c.jsx(
                            o("WAWebSettingsNavBarItem.react")
                              .SettingsNavBarItem,
                            babelHelpers.extends({}, w),
                          ),
                          c.jsx(
                            o("WAWebProfileNavBarItem.react").ProfileNavBarItem,
                            babelHelpers.extends({}, w),
                          ),
                        ],
                      }),
                ],
              }),
            }),
            K,
          ],
        }),
      });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    var C = m(y);
    l.NavigationBar = C;
  },
  98,
);
