__d(
  "WAWebAppUI",
  [
    "fbt",
    "WANullthrows",
    "WAWebAppMutex",
    "WAWebAppScreen",
    "WAWebConflict.react",
    "WAWebConnModel",
    "WAWebContextMenuManager.react",
    "WAWebDeprecated.react",
    "WAWebEmojiAssetLoaderCompletionTracker",
    "WAWebErrorBoundary.react",
    "WAWebErrorBoundaryPopup.react",
    "WAWebFavicon.react",
    "WAWebFbtCommon",
    "WAWebLinkDeviceScreen.react",
    "WAWebLockScreenLoadable",
    "WAWebLogoutLoadingScreen.react",
    "WAWebModalManagerImplWrapper.react",
    "WAWebNativeCameraQRLinkedDeviceUtils",
    "WAWebNoop",
    "WAWebOffline.react",
    "WAWebProxied.react",
    "WAWebServiceUnavailable.react",
    "WAWebSmbLearnMore.react",
    "WAWebSocketModel",
    "WAWebStartup.react",
    "WAWebTempBanScreen.react",
    "WAWebToastManagerImplLoadable",
    "WAWebTos.react",
    "WAWebVoipUiDocPipPortalContainer.react",
    "WAWebVoipUiPopoutWindowPortalContainer.react",
    "cr:169",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.Main,
        a = e.animate,
        i = e.contextMenuRef,
        l = e.handleReadyForMainScreen,
        c = e.mdReloadPageOnTakeOver,
        d = e.mdReloadPageWithUnsupportedTakeOver,
        m = e.screen,
        p = e.state,
        _ = m;
      switch (m) {
        case o("WAWebAppScreen").AppScreen.ANOTHER_SESSION: {
          var f, g;
          return (
            p.takingOver
              ? ((f = r("WAWebNoop")), (g = s._(/*BTDS*/ "Connecting\u2026")))
              : ((f = function () {
                  c();
                }),
                (g = s._(/*BTDS*/ "Use here"))),
            {
              appScreenUI: [
                {
                  ui: u.jsx(o("WAWebFavicon.react").ErrorFavicon, {
                    children: u.jsx(r("WAWebConflict.react"), {
                      cancelText: r("WAWebFbtCommon")("Close"),
                      onCancel: window.open.bind(
                        window,
                        "https://www.whatsapp.com/",
                        "_self",
                      ),
                      okText: g,
                      onOK: f,
                      children: s._(
                        /*BTDS*/ 'WhatsApp is open in another window. Click "Use here" to use WhatsApp in this window.',
                      ),
                    }),
                  }),
                  errorBoundaryName: _,
                },
              ],
              requiresBackendCheck: !1,
            }
          );
        }
        case o("WAWebAppScreen").AppScreen.UNSUPPORTED_TAKEOVER:
          return {
            appScreenUI: [
              {
                ui: u.jsx(o("WAWebFavicon.react").ErrorFavicon, {
                  children: u.jsx(r("WAWebConflict.react"), {
                    okText: s._(/*BTDS*/ "Refresh"),
                    onOK: d,
                    children: s._(
                      /*BTDS*/ "There is already another active WhatsApp Web tab in this browser. WhatsApp Web does not support multiple active tabs in this browser. Please use the existing tab or close it and refresh this tab.",
                    ),
                  }),
                }),
                errorBoundaryName: _,
              },
            ],
            requiresBackendCheck: !1,
          };
        case o("WAWebAppScreen").AppScreen.CALL_TAKEOVER_PREVENTION:
          return {
            appScreenUI: [
              {
                ui: u.jsx(o("WAWebFavicon.react").ErrorFavicon, {
                  children: u.jsx(r("WAWebConflict.react"), {
                    cancelText: r("WAWebFbtCommon")("Close"),
                    onCancel: window.open.bind(
                      window,
                      "https://www.whatsapp.com/",
                      "_self",
                    ),
                    okText: s._(/*BTDS*/ "Notify other tab"),
                    onOK: function () {
                      r("WAWebAppMutex").requestFocusOnOtherTab();
                    },
                    children: s._(
                      /*BTDS*/ 'You are currently in a call in another window or tab. Click "Notify Other Tab" to send a notification that will bring that window to the front.',
                    ),
                  }),
                }),
                errorBoundaryName: _,
              },
            ],
            requiresBackendCheck: !1,
          };
        case o("WAWebAppScreen").AppScreen.SERVICE_UNAVAILABLE:
          return {
            appScreenUI: [
              {
                ui: u.jsx(o("WAWebFavicon.react").ErrorFavicon, {
                  children: u.jsx(r("WAWebServiceUnavailable.react"), {}),
                }),
                errorBoundaryName: _,
              },
            ],
            requiresBackendCheck: !1,
          };
        case o("WAWebAppScreen").AppScreen.TEMP_BAN:
          return {
            appScreenUI: [
              {
                ui: u.jsx(r("WAWebTempBanScreen.react"), {
                  banData: p.temporaryBan,
                }),
                errorBoundaryName: _,
              },
            ],
            requiresBackendCheck: !0,
          };
        case o("WAWebAppScreen").AppScreen.QR:
          return {
            appScreenUI: [
              {
                ui: u.jsx(o("WAWebFavicon.react").DefaultFavicon, {
                  children:
                    o(
                      "WAWebNativeCameraQRLinkedDeviceUtils",
                    ).isNativeCameraQRLinkedDeviceTest() &&
                    u.jsx(
                      o("WAWebToastManagerImplLoadable")
                        .ToastManagerImplLoadable,
                      {},
                    ),
                }),
                errorBoundaryName: "root-toast-manager",
              },
              {
                ui: u.jsx(
                  o("WAWebModalManagerImplWrapper.react")
                    .ModalManagerImplWrapper,
                  { type: o("WAWebModalManagerImplWrapper.react").ModalType },
                  "modal-manager",
                ),
                errorBoundaryName: "qr-screen-modal-manager",
              },
              {
                ui: u.jsx(o("WAWebFavicon.react").DefaultFavicon, {
                  children: n("cr:169")
                    ? u.jsx(n("cr:169"), { apiCmd: p.apiCmd })
                    : u.jsx(
                        r("WAWebLinkDeviceScreen.react"),
                        { apiCmd: p.apiCmd },
                        "qr-code",
                      ),
                }),
                errorBoundaryName: n("cr:169")
                  ? "windows-link-screen-wrapper"
                  : "link-device-screen",
              },
            ],
            requiresBackendCheck: !0,
          };
        case o("WAWebAppScreen").AppScreen.STARTUP:
        case o("WAWebAppScreen").AppScreen.SYNCING:
          return {
            appScreenUI: [
              {
                ui: u.jsx(o("WAWebFavicon.react").DefaultFavicon, {
                  children: u.jsx(r("WAWebStartup.react"), {
                    initialLoadState: p.initialLoadState,
                    onReady: l,
                  }),
                }),
                errorBoundaryName: _,
              },
            ],
            requiresBackendCheck: !0,
          };
        case o("WAWebAppScreen").AppScreen.OFFLINE:
          return {
            appScreenUI: [
              {
                ui: u.jsx(o("WAWebFavicon.react").ErrorFavicon, {
                  children: u.jsx(r("WAWebOffline.react"), {}),
                }),
                errorBoundaryName: _,
              },
            ],
            requiresBackendCheck: !0,
          };
        case o("WAWebAppScreen").AppScreen.PROXYBLOCK:
          return {
            appScreenUI: [
              {
                ui: u.jsx(o("WAWebFavicon.react").ErrorFavicon, {
                  children: u.jsx(r("WAWebProxied.react"), {}),
                }),
                errorBoundaryName: _,
              },
            ],
            requiresBackendCheck: !0,
          };
        case o("WAWebAppScreen").AppScreen.CONFLICT:
          return {
            appScreenUI: [
              {
                ui: u.jsx(o("WAWebFavicon.react").ErrorFavicon, {
                  children: u.jsx(r("WAWebConflict.react"), {
                    cancelText: s._(/*BTDS*/ "Log out"),
                    onCancel: function () {
                      return o("WAWebSocketModel").Socket.logout();
                    },
                    okText: s._(/*BTDS*/ "Use here"),
                    onOK: function () {
                      return o("WAWebSocketModel").Socket.takeover();
                    },
                    children: s._(
                      /*BTDS*/ 'WhatsApp is open on another computer or browser. Click "Use here" to use WhatsApp in this window.',
                    ),
                  }),
                }),
                errorBoundaryName: _,
              },
            ],
            requiresBackendCheck: !0,
          };
        case o("WAWebAppScreen").AppScreen.TOS_BLOCK:
          return {
            appScreenUI: [
              {
                ui: u.jsx(o("WAWebFavicon.react").ErrorFavicon, {
                  children: u.jsx(r("WAWebTos.react"), {
                    description: s._(
                      /*BTDS*/ 'WhatsApp is updating our Terms and Privacy Policy to reflect new features and comply with the new European Union data protection laws. Open WhatsApp on your phone to read our Terms and Privacy Policy and learn more about the choices you have. If you have accepted the Terms and Privacy Policy, click "Log in" to continue using WhatsApp.',
                    ),
                  }),
                }),
                errorBoundaryName: _,
              },
            ],
            requiresBackendCheck: !0,
          };
        case o("WAWebAppScreen").AppScreen.SMB_TOS_BLOCK:
          return {
            appScreenUI: [
              {
                ui: u.jsx(o("WAWebFavicon.react").ErrorFavicon, {
                  children: u.jsx(r("WAWebTos.react"), {
                    description: s._(
                      /*BTDS*/ "We are updating our WhatsApp Business Terms of Service. Agree to our new Terms on your phone to continue using WhatsApp Business. If you have accepted the Terms of Service, click Log in to continue using WhatsApp Business.",
                    ),
                    children: u.jsx(r("WAWebSmbLearnMore.react"), {}),
                  }),
                }),
                errorBoundaryName: _,
              },
            ],
            requiresBackendCheck: !0,
          };
        case o("WAWebAppScreen").AppScreen.DEPRECATED_VERSION:
          return {
            appScreenUI: [
              {
                ui: u.jsx(o("WAWebFavicon.react").ErrorFavicon, {
                  children: u.jsx(r("WAWebDeprecated.react"), {}),
                }),
                errorBoundaryName: _,
              },
            ],
            requiresBackendCheck: !0,
          };
        case o("WAWebAppScreen").AppScreen.LOGOUT:
          return {
            appScreenUI: [
              {
                ui: u.jsxs(o("WAWebFavicon.react").DefaultFavicon, {
                  children: [
                    u.jsx(
                      o("WAWebModalManagerImplWrapper.react")
                        .ModalManagerImplWrapper,
                      {
                        type: o("WAWebModalManagerImplWrapper.react").ModalType,
                      },
                      "modal-manager",
                    ),
                    u.jsx(r("WAWebLogoutLoadingScreen.react"), {}, "logout"),
                  ],
                }),
                errorBoundaryName: _,
              },
            ],
            requiresBackendCheck: !0,
          };
        case o("WAWebAppScreen").AppScreen.SCREEN_LOCK:
          return {
            appScreenUI: [
              {
                ui: u.jsx(o("WAWebLockScreenLoadable").LockScreenLoadable, {}),
                errorBoundaryName: _,
              },
            ],
            requiresBackendCheck: !0,
          };
        case o("WAWebAppScreen").AppScreen.MAIN: {
          var h,
            y,
            C = r("WANullthrows")(t),
            b = C.MainComponent;
          return {
            appScreenUI: [
              {
                ui: u.jsx(
                  o("WAWebToastManagerImplLoadable").ToastManagerImplLoadable,
                  {},
                ),
                errorBoundaryName: "root-toast-manager",
              },
              {
                ui: u.jsx(
                  (h = o("WAWebModalManagerImplWrapper.react"))
                    .ModalManagerImplWrapper,
                  { contextMenuRef: i, type: h.ModalType },
                  "main-modal-manager",
                ),
                errorBoundaryName: "main-modal-manager",
              },
              {
                ui: u.jsx(
                  h.ModalManagerImplWrapper,
                  { contextMenuRef: i, type: h.MediaType },
                  "media-modal-manager",
                ),
                errorBoundaryName: "media-modal-manager",
              },
              {
                ui: u.jsx(
                  h.ModalManagerImplWrapper,
                  { type: h.AlertType },
                  "alert-modal-manager",
                ),
                errorBoundaryName: "alert-modal-manager",
              },
              {
                ui: u.jsx(
                  h.ModalManagerImplWrapper,
                  { contextMenuRef: i, type: h.SupportType },
                  "support-modal-manager",
                ),
                errorBoundaryName: "support-modal-manager",
              },
              {
                ui: u.jsx(
                  "div",
                  { id: "expressions-panel-container" },
                  "expressions-panel-container",
                ),
                errorBoundaryName: "expressions-panel-container",
              },
              {
                ui: u.jsx(
                  (y = o("WAWebContextMenuManager.react")).ContextMenuManager,
                  { ref: i, type: y.Type.MENU },
                  "context-menu-manager",
                ),
                errorBoundaryName: "context-menu-manager",
              },
              {
                ui: u.jsx(
                  y.ContextMenuManager,
                  { type: y.Type.TOOLTIP },
                  "tooltip-manager",
                ),
                errorBoundaryName: "tooltip-manager",
              },
              {
                ui: u.jsx(
                  o("WAWebVoipUiPopoutWindowPortalContainer.react")
                    .WAWebVoipUiPopoutWindowPortalContainer,
                  {},
                  "voip-popout-portal-container",
                ),
                errorBoundaryName: "voip-popout-portal-container",
              },
              {
                ui: u.jsx(
                  o("WAWebVoipUiDocPipPortalContainer.react")
                    .WAWebVoipUiDocPipPortalContainer,
                  {},
                  "voip-document-picture-in-picture-portal-container",
                ),
                errorBoundaryName:
                  "voip-document-picture-in-picture-portal-container",
              },
              {
                ui: u.jsx(
                  o("WAWebEmojiAssetLoaderCompletionTracker")
                    .InitialEmojisCompletionContext.Provider,
                  {
                    value: o("WAWebEmojiAssetLoaderCompletionTracker")
                      .emojiCompletionTracker,
                    children: u.jsx(
                      o("WAWebErrorBoundary.react").ErrorBoundary,
                      {
                        name: "app-wrapper-main-component",
                        type: "fatal",
                        fallback: o("WAWebErrorBoundaryPopup.react")
                          .errorBoundaryPopupFallback,
                        sendLogs: !0,
                        children: u.jsx(b, {
                          conn: o("WAWebConnModel").Conn,
                          animate: a,
                        }),
                      },
                    ),
                  },
                  "main",
                ),
                errorBoundaryName: "app-wrapper-main-component",
              },
            ],
            requiresBackendCheck: !0,
          };
        }
      }
    }
    l.getAppUI = c;
  },
  226,
);
