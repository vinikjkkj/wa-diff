__d(
  "WAWebConversation.react",
  [
    "WAAsyncSleep",
    "WAWebABProps",
    "WAWebAppContext.react",
    "WAWebBusinessProfileCollection",
    "WAWebCAPIGroupAboutModal.react",
    "WAWebChatGetters",
    "WAWebChatLockWAMUtils",
    "WAWebChatPreferenceCollection",
    "WAWebCmd",
    "WAWebConversationPanelWrapper.react",
    "WAWebConversationPreloadGatingUtils",
    "WAWebDataSharing3pdLidCollection",
    "WAWebDesktopUpsellEvents",
    "WAWebGetChatLockEntryPoint",
    "WAWebIntroPanel.react",
    "WAWebIntroPanelV2.react",
    "WAWebMaybeGeneratePerCustomerDataSharingSystemMessageAction",
    "WAWebMidDrawerEmptyState.react",
    "WAWebMobilePlatforms",
    "WAWebModalManager",
    "WAWebNavBarTypes",
    "WAWebNux",
    "WAWebQueryGroupAction",
    "WAWebSmbDataSharingOptInModalDialog",
    "WAWebStreamModel",
    "WAWebWamEnumLandingSurface",
    "WAWebWamEnumSmbDataSharingConsentScreenEntryPoint",
    "asyncToGeneratorRuntime",
    "cr:11804",
    "cr:12474",
    "react",
    "useWAWebChatLockRestriction",
    "useWAWebCmdChatEvents",
    "useWAWebConversationPreloading",
    "useWAWebListener",
    "useWAWebNux",
    "useWAWebPrevious",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.memo,
      d = u.unstable_Activity,
      m = u.useCallback,
      p = u.useEffect,
      _ = u.useImperativeHandle,
      f = u.useRef,
      g = u.useState;
    function h(e) {
      var t = e.animate,
        a = e.ref,
        i = f(),
        l = o("useWAWebCmdChatEvents").useCmdChatEvents(),
        u = l.chat,
        c = l.chatEntryPointRef,
        h = l.focusContext,
        y = l.msgCollection,
        C = l.notifyChatRenderedRef,
        b = l.threadId,
        v = l.updateOpenedChatInfoRef,
        S = o("WAWebAppContext.react").useAppContext(),
        R = S.activeNavBarItem,
        L = m(
          function (e) {
            return C.current(e);
          },
          [C],
        ),
        E = m(
          function (e) {
            return v.current(e);
          },
          [v],
        ),
        k = g(null),
        I = k[0],
        T = k[1];
      o("useWAWebChatLockRestriction").useChatLockRestriction({
        id: u != null ? "locked-thread-" + u.id.toString() : "chat-homescreen",
        condition: u != null ? u : "bypass",
        entryPoint: o("WAWebGetChatLockEntryPoint").getChatLockEntryPoint(
          c.current,
        ),
        landingSurface: o("WAWebWamEnumLandingSurface").LANDING_SURFACE.THREAD,
        unlockEntryPoint: o(
          "WAWebChatLockWAMUtils",
        ).actionEntryPointToUnlockEntryPoint(
          o("WAWebGetChatLockEntryPoint").getChatLockEntryPoint(c.current),
        ),
      });
      var D = g(t),
        x = D[0],
        $ = D[1],
        P = r("useWAWebPrevious")(x);
      (P !== !1 && x !== !1 && $(!1),
        _(a, function () {
          return {
            containsDOMNode: function (t) {
              return i.current ? i.current.containsDOMNode(t) : !1;
            },
          };
        }));
      var N = function () {
          o("WAWebStreamModel").Stream.markUnavailable(15 * 1e3);
        },
        M = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            (yield o("WAAsyncSleep").asyncSleep(500),
              !(window.document && !document.hasFocus()) &&
                (o("WAWebStreamModel").Stream.markAvailable(),
                u != null &&
                  o("WAWebChatGetters").getIsUser(u) &&
                  u.presence.subscribe()));
          });
          return function () {
            return e.apply(this, arguments);
          };
        })();
      (o("useWAWebListener").useListener(window, "focus", M),
        o("useWAWebListener").useListener(window, "blur", N),
        o("useWAWebListener").useListener(
          r("WAWebChatPreferenceCollection"),
          "wallpaper_drawer_open",
          function (e) {
            (!o("WAWebABProps").getABPropConfigValue(
              "use_per_chat_wallpaper",
            ) ||
              e) &&
              T("wallpaper");
          },
        ),
        o("useWAWebListener").useListener(
          r("WAWebChatPreferenceCollection"),
          "wallpaper_drawer_close",
          function (e) {
            (!o("WAWebABProps").getABPropConfigValue(
              "use_per_chat_wallpaper",
            ) ||
              e) &&
              T(null);
          },
        ),
        o("useWAWebListener").useListener(
          r("WAWebChatPreferenceCollection"),
          "chat_theme_drawer_open",
          function (e) {
            e && T("theme");
          },
        ),
        o("useWAWebListener").useListener(
          r("WAWebChatPreferenceCollection"),
          "chat_theme_drawer_close",
          function (e) {
            e && T(null);
          },
        ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "open_chat",
          function (e) {
            var t = e.chat;
            (n("cr:11804") == null ||
              n("cr:11804").maybePreloadWebTPIframeForPDFs(t, {
                source: "chatOpen",
              }),
              o("WAWebMobilePlatforms").isSMB() &&
                r(
                  "WAWebSmbDataSharingOptInModalDialog",
                ).maybeShowChatEntryDataSharingDialog(
                  t,
                  function () {
                    if (t.accountLid != null) {
                      var e = t.accountLid.toString();
                      o(
                        "WAWebMaybeGeneratePerCustomerDataSharingSystemMessageAction",
                      ).maybeGeneratePerCustomerDataSharingSystemMessage({
                        accountLid: e,
                        perCustomerDataSharingState: o(
                          "WAWebDataSharing3pdLidCollection",
                        ).DataSharing3pdLidCollection.isDataSharingEnabled(e),
                      });
                    }
                  },
                  o("WAWebWamEnumSmbDataSharingConsentScreenEntryPoint")
                    .SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT.CTWA_CHAT,
                ));
          },
        ));
      var w = r("useWAWebNux")(o("WAWebNux").NUX.CAPI_GROUP_ABOUT_MODAL),
        A = w[0],
        F = w[1];
      (p(
        function () {
          u &&
            (u.contact.isBusiness &&
              !u.id.isBot() &&
              o(
                "WAWebBusinessProfileCollection",
              ).BusinessProfileCollection.find(u.id),
            u.groupMetadata &&
              o("WAWebQueryGroupAction").maybeQueryGroupDevice(
                u.groupMetadata,
              ));
        },
        [u],
      ),
        p(
          function () {
            var e;
            (u == null || (e = u.groupMetadata) == null
              ? void 0
              : e.hasCapi) === !0 &&
              A &&
              (o("WAWebModalManager").ModalManager.open(
                s.jsx(
                  o("WAWebCAPIGroupAboutModal.react").CAPIGroupAboutModal,
                  {},
                ),
              ),
              F());
          },
          [u, A, F],
        ));
      var O = (u && y) || I != null;
      (p(
        function () {
          o("WAWebDesktopUpsellEvents").WAWebDesktopUpsellEvents.trigger(
            "conversation_panel_ui_change",
            { conversationPanelVisible: !!O },
          );
        },
        [O],
      ),
        p(function () {
          n("cr:12474") == null || n("cr:12474").restoreRefreshState();
        }, []));
      var B = o(
          "WAWebConversationPreloadGatingUtils",
        ).isConversationPreloadEnabled(),
        W = o("WAWebMobilePlatforms").isSMB() === !1,
        q =
          R === o("WAWebNavBarTypes").NavBarItems.Chats
            ? s.jsx(r("WAWebIntroPanelV2.react"), {})
            : s.jsx(o("WAWebMidDrawerEmptyState.react").MidDrawerEmptyState, {
                type: R,
              }),
        U = r("useWAWebConversationPreloading")(B ? u : null),
        V = U.warmedChat,
        H = U.warmedFocusCtx,
        G = U.warmedMsgCollection,
        z = {
          chat: u,
          chatEntryPoint: c.current,
          groupMetadata: u == null ? void 0 : u.groupMetadata,
          chatPreference: r("WAWebChatPreferenceCollection").assertGet(
            "defaultPreference",
          ),
          focusCtx: h,
          msgCollection: y,
          threadId: b,
          notifyChatRendered: L,
          updateOpenedChatInfo: E,
          showPreview: I,
        },
        j = u == null ? void 0 : u.id.toString();
      return B && W
        ? s.jsxs(s.Fragment, {
            children: [
              s.jsx(d, { mode: O ? "hidden" : "visible", children: q }),
              O &&
                s.jsx(
                  d,
                  {
                    mode: "visible",
                    children: s.createElement(
                      r("WAWebConversationPanelWrapper.react"),
                      babelHelpers.extends({}, z, { key: j, ref: i }),
                    ),
                  },
                  j,
                ),
              V &&
                s.jsx(
                  d,
                  {
                    mode: "hidden",
                    children: s.jsx(
                      r("WAWebConversationPanelWrapper.react"),
                      {
                        ref: O ? void 0 : i,
                        chat: V,
                        msgCollection: G,
                        chatEntryPoint: z.chatEntryPoint,
                        chatPreference: r(
                          "WAWebChatPreferenceCollection",
                        ).assertGet("defaultPreference"),
                        focusCtx: H,
                        groupMetadata: V.groupMetadata,
                        showPreview: z.showPreview,
                        threadId: void 0,
                        notifyChatRendered: L,
                        updateOpenedChatInfo: E,
                      },
                      V.id.toString(),
                    ),
                  },
                  V.id.toString(),
                ),
            ],
          })
        : O
          ? s.createElement(
              r("WAWebConversationPanelWrapper.react"),
              babelHelpers.extends({}, z, { key: j, ref: i }),
            )
          : W
            ? q
            : R !== o("WAWebNavBarTypes").NavBarItems.Chats
              ? s.jsx(o("WAWebMidDrawerEmptyState.react").MidDrawerEmptyState, {
                  type: R,
                })
              : s.jsx(r("WAWebIntroPanel.react"), { animate: x, ref: i });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    var y = c(h);
    l.WAWebConversation = y;
  },
  98,
);
