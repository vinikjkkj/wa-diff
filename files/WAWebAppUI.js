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
        d = e.screen,
        m = e.state,
        p = d;
      switch (d) {
        case o("WAWebAppScreen").AppScreen.ANOTHER_SESSION: {
          var _, f;
          m.takingOver
            ? ((_ = r("WAWebNoop")), (f = s._(/*BTDS*/ "Connecting\u2026")))
            : ((_ = function () {
                c();
              }),
              (f = s._(/*BTDS*/ "Use here")));
          var g = window.open.bind(
            window,
            "https://www.whatsapp.com/",
            "_self",
          );
          return {
            appScreenUI: [
              {
                ui: u.jsx(o("WAWebFavicon.react").ErrorFavicon, {
                  children: u.jsx(r("WAWebConflict.react"), {
                    cancelText: r("WAWebFbtCommon")("Close"),
                    onCancel: g,
                    okText: f,
                    onOK: _,
                    children: s._(
                      /*BTDS*/ 'WhatsApp is open in another window. Click "Use here" to use WhatsApp in this window.',
                    ),
                  }),
                }),
                errorBoundaryName: p,
              },
            ],
            requiresBackendCheck: !1,
          };
        }
        case o("WAWebAppScreen").AppScreen.CALL_TAKEOVER_PREVENTION: {
          var h = window.open.bind(
            window,
            "https://www.whatsapp.com/",
            "_self",
          );
          return {
            appScreenUI: [
              {
                ui: u.jsx(o("WAWebFavicon.react").ErrorFavicon, {
                  children: u.jsx(r("WAWebConflict.react"), {
                    cancelText: r("WAWebFbtCommon")("Close"),
                    onCancel: h,
                    okText: s._(/*BTDS*/ "Notify other tab"),
                    onOK: function () {
                      r("WAWebAppMutex").requestFocusOnOtherTab();
                    },
                    children: s._(
                      /*BTDS*/ 'You are currently in a call in another window or tab. Click "Notify Other Tab" to send a notification that will bring that window to the front.',
                    ),
                  }),
                }),
                errorBoundaryName: p,
              },
            ],
            requiresBackendCheck: !1,
          };
        }
        case o("WAWebAppScreen").AppScreen.SERVICE_UNAVAILABLE:
          return {
            appScreenUI: [
              {
                ui: u.jsx(o("WAWebFavicon.react").ErrorFavicon, {
                  children: u.jsx(r("WAWebServiceUnavailable.react"), {}),
                }),
                errorBoundaryName: p,
              },
            ],
            requiresBackendCheck: !1,
          };
        case o("WAWebAppScreen").AppScreen.TEMP_BAN:
          return {
            appScreenUI: [
              {
                ui: u.jsx(r("WAWebTempBanScreen.react"), {
                  banData: m.temporaryBan,
                }),
                errorBoundaryName: p,
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
                    ? u.jsx(n("cr:169"), { apiCmd: m.apiCmd })
                    : u.jsx(
                        r("WAWebLinkDeviceScreen.react"),
                        { apiCmd: m.apiCmd },
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
                    initialLoadState: m.initialLoadState,
                    onReady: l,
                  }),
                }),
                errorBoundaryName: p,
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
                errorBoundaryName: p,
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
                errorBoundaryName: p,
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
                errorBoundaryName: p,
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
                errorBoundaryName: p,
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
                errorBoundaryName: p,
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
                errorBoundaryName: p,
              },
            ],
            requiresBackendCheck: !0,
          };
        case o("WAWebAppScreen").AppScreen.SCREEN_LOCK:
          return {
            appScreenUI: [
              {
                ui: u.jsx(o("WAWebLockScreenLoadable").LockScreenLoadable, {}),
                errorBoundaryName: p,
              },
            ],
            requiresBackendCheck: !0,
          };
        case o("WAWebAppScreen").AppScreen.MAIN: {
          var y,
            C,
            b = r("WANullthrows")(t),
            v = b.MainComponent;
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
                  (y = o("WAWebModalManagerImplWrapper.react"))
                    .ModalManagerImplWrapper,
                  { contextMenuRef: i, type: y.ModalType },
                  "main-modal-manager",
                ),
                errorBoundaryName: "main-modal-manager",
              },
              {
                ui: u.jsx(
                  y.ModalManagerImplWrapper,
                  { contextMenuRef: i, type: y.MediaType },
                  "media-modal-manager",
                ),
                errorBoundaryName: "media-modal-manager",
              },
              {
                ui: u.jsx(
                  y.ModalManagerImplWrapper,
                  { contextMenuRef: i, type: y.SupportType },
                  "support-modal-manager",
                ),
                errorBoundaryName: "support-modal-manager",
              },
              {
                ui: u.jsx(
                  y.ModalManagerImplWrapper,
                  { type: y.AlertType },
                  "alert-modal-manager",
                ),
                errorBoundaryName: "alert-modal-manager",
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
                  (C = o("WAWebContextMenuManager.react")).ContextMenuManager,
                  { ref: i, type: C.Type.MENU },
                  "context-menu-manager",
                ),
                errorBoundaryName: "context-menu-manager",
              },
              {
                ui: u.jsx(
                  C.ContextMenuManager,
                  { type: C.Type.TOOLTIP },
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
                        children: u.jsx(v, {
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
