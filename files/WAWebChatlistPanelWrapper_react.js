__d(
  "WAWebChatlistPanelWrapper.react",
  [
    "WAWebABProps",
    "WAWebAppRootInteractionContext.react",
    "WAWebBotGating",
    "WAWebChatlistHeaderV2.react",
    "WAWebChatlistPanelFunctional.react",
    "WAWebChatlistPanelMode",
    "WAWebInteractionTracePolicy",
    "WAWebMultiSelectEntryPointConstants",
    "WAWebSettingsGetters",
    "WAWebSettingsModel",
    "WAWebUsernameGatingUtils",
    "hero-tracing",
    "react",
    "useWAWebChatLockSettings",
    "useWAWebSettingsValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useState;
    function m(e) {
      var t = e.chatlistHeaderRef,
        n = e.chatlistPanelRef,
        a = e.handleActiveNavBarItemUpdate,
        i = e.leftDrawerStyle,
        l = e.leftPaneClassName,
        u = e.resizeHandle,
        m = o("useWAWebSettingsValues").useSettingsValues([
          o("WAWebSettingsGetters").getShowArchiveV2,
        ]),
        p = m[0],
        _ = d(!1),
        f = _[0],
        g = _[1],
        h = o("useWAWebChatLockSettings").useChatLockSettings(),
        y = c(function () {
          return g(!0);
        }, []),
        C = c(function () {
          return g(!1);
        }, []),
        b = o("WAWebBotGating").isMetaAISearchExperienceEnabled(),
        v = o("WAWebUsernameGatingUtils").usernameGlobalSearchEnabled(),
        S = o("WAWebABProps").getABPropConfigValue(
          "web_phone_number_global_search",
        ),
        R = o(
          "WAWebAppRootInteractionContext.react",
        ).useInteractionWithAppRootContext(
          r("WAWebInteractionTracePolicy").NAVIGATION_CHATS_OPEN_CHAT,
          !1,
          !0,
        ),
        L = R.startInteraction,
        E = s.jsx(
          o("WAWebChatlistPanelFunctional.react").ChatlistPanelFunctional,
          {
            chatlistPanelRef: n,
            showArchiveV2: p,
            mode: r("WAWebChatlistPanelMode").Chatlist,
            selectable: f,
            endMultiSelect: C,
            multiSelectEntryPoint: f
              ? o("WAWebMultiSelectEntryPointConstants").MultiSelectEntryPoint
                  .ChatListHeaderDropdown
              : null,
            hideLockedChats: h.hideLockedChats,
            startChatInteraction: L,
            aiSearchExperienceEnabled: b,
            unknownContactUsernameSearchEnabled: v,
            unknownContactPhoneSearchEnabled: S,
          },
          f ? "inMultiSelectMode" : "inNonSelectableMode",
        );
      return s.jsx(o("hero-tracing").HeroPagelet, {
        name: "Chat List Panel",
        children: function (n, c) {
          return s.jsxs(s.Fragment, {
            children: [
              s.jsxs("div", {
                className: l,
                style: i,
                ref: n,
                children: [
                  r("WAWebSettingsModel") &&
                    s.jsx(
                      o("WAWebChatlistHeaderV2.react").WAWebChatlistHeaderV2,
                      {
                        headerRef: t,
                        onSelectChatClick: y,
                        isMultiSelectMode: f,
                        updateActiveNavBarItem: a,
                      },
                    ),
                  E,
                  u,
                ],
              }),
              s.jsx(c, {}),
            ],
          });
        },
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
