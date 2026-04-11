__d(
  "WAWebChatlistHeaderV2.react",
  [
    "fbt",
    "WAWebActiveAccountInfoContext.react",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebBusinessProfileCollection",
    "WAWebChatlistHeaderDropdown.react",
    "WAWebCmd",
    "WAWebDrawerHeader.react",
    "WAWebDrawerManager",
    "WAWebFbtCommon",
    "WAWebMessageYourselfMetricUtils",
    "WAWebMobilePlatforms",
    "WAWebNewChatFlowLoadable",
    "WAWebNewChatMenuBarItem.react",
    "WAWebPrivacyModeIndicator.react",
    "WAWebSMBUserJourneyLogger",
    "WAWebTabOrder",
    "WAWebThemeContext",
    "WAWebUserPrefsMeUser",
    "WAWebWaWordmarkRefreshedIcon.react",
    "WAWebWamEnumEntryPoint",
    "WAWebWamEnumSmbFeatureNameEnum",
    "WAWebWamEnumSmbUserActionTypeEnum",
    "WAWebWamEnumSurfaceType",
    "WDSIconIcMoreVert.react",
    "WDSMenuBarItem.react",
    "cr:23046",
    "react",
    "useWAWebForceUpdate",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.memo,
      m = c.useMemo,
      p = c.useRef,
      _ = c.useState,
      f = {
        primaryFill: { fill: "xgz6z4f", $$css: !0 },
        primaryFillDark: { fill: "xd25hor", $$css: !0 },
        marginStart8: { marginInlineStart: "x150mmf0", $$css: !0 },
      };
    function g(e) {
      "use no forget";
      var t,
        a = e.headerRef,
        i = e.isMultiSelectMode,
        l = e.onSelectChatClick,
        c =
          (t =
            n("cr:23046") == null
              ? void 0
              : n("cr:23046").isWindowsHybridEnabled()) != null
            ? t
            : !1,
        d = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(),
        g = o("WAWebThemeContext").useIsDarkTheme(),
        h = o("WAWebActiveAccountInfoContext.react").useActiveAccountInfo(),
        y = m(function () {
          return o("WAWebUserPrefsMeUser").getMeUser();
        }, []),
        C = _(!0),
        b = C[0],
        v = C[1],
        S = m(
          function () {
            return o(
              "WAWebBusinessProfileCollection",
            ).BusinessProfileCollection.get(y);
          },
          [y],
        );
      o("useWAWebListener").useListener(S, "change:profileOptions", d);
      var R = function (t) {
          (t == null || t.preventDefault(),
            o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
              o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
                ? { descriptorType: "new_chat" }
                : u.jsx(o("WAWebNewChatFlowLoadable").NewChatFlowLoadable, {
                    onEnd: o("WAWebDrawerManager").closeDrawerLeft,
                  }),
            ),
            o(
              "WAWebMessageYourselfMetricUtils",
            ).UiMessageYourselfNewChatAction.startSession(),
            o(
              "WAWebMessageYourselfMetricUtils",
            ).UiMessageYourselfNewChatAction.newChatPressed(),
            o("WAWebMobilePlatforms").isSMB() &&
              o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
                featureName: o("WAWebWamEnumSmbFeatureNameEnum")
                  .SMB_FEATURE_NAME_ENUM.BUSINESS_TOOLS_HOME,
                userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                  .SMB_USER_ACTION_TYPE_ENUM.CLICK,
                surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHATLIST,
                entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME,
                userActionTarget: "new_chat_button",
              }));
        },
        L = u.jsx(
          r("WAWebNewChatMenuBarItem.react"),
          { chatListVisible: b, onNewChat: R },
          "btn-new-chat",
        ),
        E = u.jsx(r("WAWebChatlistHeaderDropdown.react"), {
          startMultiSelect: l,
          isMultiSelectMode: i,
          activeAccountInfo: h,
          updateActiveNavBarItem: e.updateActiveNavBarItem,
        }),
        k = u.jsx(
          r("WDSMenuBarItem.react"),
          {
            testid: void 0,
            icon: r("WDSIconIcMoreVert.react"),
            title: s._(/*BTDS*/ "Menu"),
            tabOrder:
              b === !0 ? o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER : void 0,
            disabled: !b,
            marginInlineXstyle: f.marginStart8,
            wdsMenuToRender: E,
          },
          "btn-menu",
        ),
        I = !c,
        T = !I && { title: s._(/*BTDS*/ "Chats") },
        D = p(null),
        x = function (t) {
          v(t);
        },
        $ = function (t) {
          var e,
            n = (e = a.current) == null ? void 0 : e.parentElement;
          t(n == null ? void 0 : n.getBoundingClientRect());
        };
      return (
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "chat_list_visibility_change",
          x,
        ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "get_chat_list_panel_offset",
          $,
        ),
        u.jsx("header", {
          "data-testid": void 0,
          ref: a,
          children: u.jsx(
            o("WAWebDrawerHeader.react").DrawerHeader,
            babelHelpers.extends({ ref: D }, T, {
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.TAB,
              menu: [
                u.jsx(
                  r("WAWebPrivacyModeIndicator.react"),
                  {},
                  "btn-privacy-mode",
                ),
                L,
                k,
              ],
              focusBackOrCancel: !0,
              children:
                I &&
                u.jsx(
                  o("WAWebWaWordmarkRefreshedIcon.react")
                    .WaWordmarkRefreshedIcon,
                  {
                    "aria-hidden": !1,
                    "aria-label": r("WAWebFbtCommon")("WhatsApp"),
                    innerStyles: {
                      primary: g ? f.primaryFillDark : f.primaryFill,
                    },
                  },
                ),
            }),
          ),
        })
      );
    }
    g.displayName = g.name + " [from " + i.id + "]";
    var h = d(g);
    l.WAWebChatlistHeaderV2 = h;
  },
  226,
);
