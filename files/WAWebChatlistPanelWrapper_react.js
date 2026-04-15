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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(22),
        n = e.chatlistHeaderRef,
        a = e.chatlistPanelRef,
        i = e.handleActiveNavBarItemUpdate,
        l = e.leftDrawerStyle,
        u = e.leftPaneClassName,
        c = e.resizeHandle,
        m;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = [o("WAWebSettingsGetters").getShowArchiveV2]), (t[0] = m))
        : (m = t[0]);
      var p = o("useWAWebSettingsValues").useSettingsValues(m),
        _ = p[0],
        f = d(!1),
        g = f[0],
        h = f[1],
        y = o("useWAWebChatLockSettings").useChatLockSettings(),
        C;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = function () {
            return h(!0);
          }),
          (t[1] = C))
        : (C = t[1]);
      var b = C,
        v;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = function () {
            return h(!1);
          }),
          (t[2] = v))
        : (v = t[2]);
      var S = v,
        R;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = o("WAWebBotGating").isMetaAISearchExperienceEnabled()),
          (t[3] = R))
        : (R = t[3]);
      var L = R,
        E;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = o("WAWebUsernameGatingUtils").usernameGlobalSearchEnabled()),
          (t[4] = E))
        : (E = t[4]);
      var k = E,
        I;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = o("WAWebABProps").getABPropConfigValue(
            "web_phone_number_global_search",
          )),
          (t[5] = I))
        : (I = t[5]);
      var T = I,
        D = o(
          "WAWebAppRootInteractionContext.react",
        ).useInteractionWithAppRootContext(
          r("WAWebInteractionTracePolicy").NAVIGATION_CHATS_OPEN_CHAT,
          !1,
          !0,
        ),
        x = D.startInteraction,
        $ = g ? "inMultiSelectMode" : "inNonSelectableMode",
        P = g
          ? o("WAWebMultiSelectEntryPointConstants").MultiSelectEntryPoint
              .ChatListHeaderDropdown
          : null,
        N;
      t[6] !== y.hideLockedChats ||
      t[7] !== a ||
      t[8] !== g ||
      t[9] !== _ ||
      t[10] !== x ||
      t[11] !== $ ||
      t[12] !== P
        ? ((N = s.jsx(
            o("WAWebChatlistPanelFunctional.react").ChatlistPanelFunctional,
            {
              chatlistPanelRef: a,
              showArchiveV2: _,
              mode: r("WAWebChatlistPanelMode").Chatlist,
              selectable: g,
              endMultiSelect: S,
              multiSelectEntryPoint: P,
              hideLockedChats: y.hideLockedChats,
              startChatInteraction: x,
              aiSearchExperienceEnabled: L,
              unknownContactUsernameSearchEnabled: k,
              unknownContactPhoneSearchEnabled: T,
            },
            $,
          )),
          (t[6] = y.hideLockedChats),
          (t[7] = a),
          (t[8] = g),
          (t[9] = _),
          (t[10] = x),
          (t[11] = $),
          (t[12] = P),
          (t[13] = N))
        : (N = t[13]);
      var M = N,
        w;
      return (
        t[14] !== n ||
        t[15] !== M ||
        t[16] !== i ||
        t[17] !== g ||
        t[18] !== l ||
        t[19] !== u ||
        t[20] !== c
          ? ((w = s.jsx(o("hero-tracing").HeroPagelet, {
              name: "Chat List Panel",
              children: function (t, a) {
                return s.jsxs(s.Fragment, {
                  children: [
                    s.jsxs("div", {
                      className: u,
                      style: l,
                      ref: t,
                      children: [
                        r("WAWebSettingsModel") &&
                          s.jsx(
                            o("WAWebChatlistHeaderV2.react")
                              .WAWebChatlistHeaderV2,
                            {
                              headerRef: n,
                              onSelectChatClick: b,
                              isMultiSelectMode: g,
                              updateActiveNavBarItem: i,
                            },
                          ),
                        M,
                        c,
                      ],
                    }),
                    s.jsx(a, {}),
                  ],
                });
              },
            })),
            (t[14] = n),
            (t[15] = M),
            (t[16] = i),
            (t[17] = g),
            (t[18] = l),
            (t[19] = u),
            (t[20] = c),
            (t[21] = w))
          : (w = t[21]),
        w
      );
    }
    l.default = m;
  },
  98,
);
