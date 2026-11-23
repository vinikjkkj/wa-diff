__d(
  "WAWebAppUI",
  [
    "fbt",
    "WAWebAppMutex",
    "WAWebAppScreenTypes",
    "WAWebBizBroadcastProDownloadProgressHost.react",
    "WAWebBizBroadcastProReminderHost.react",
    "WAWebConflict.react",
    "WAWebConnModel",
    "WAWebContextMenuManager.react",
    "WAWebEmojiAssetLoaderCompletionTracker",
    "WAWebErrorBoundary.react",
    "WAWebErrorBoundaryPopup.react",
    "WAWebFavicon.react",
    "WAWebFbtCommon",
    "WAWebInactiveTabConflict.react",
    "WAWebInactiveTabRedirectOnMount.react",
    "WAWebLinkDeviceScreen.react",
    "WAWebLockScreenLoadable",
    "WAWebLogoutLoadingScreen.react",
    "WAWebModal.react",
    "WAWebModalManagerImplWrapper.react",
    "WAWebNativeCameraQRLinkedDeviceUtils",
    "WAWebProxied.react",
    "WAWebSocketModel",
    "WAWebStartup.react",
    "WAWebTempBanScreen.react",
    "WAWebToastManagerImplLoadable",
    "WAWebVoipUiDocPipPortalContainer.react",
    "WAWebVoipUiPopoutWindowPortalContainer.react",
    "cr:11133",
    "cr:8094",
    "nullthrows",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      return u.jsx(o("WAWebModal.react").Modal, {
        title: s._(/*BTDS*/ ""),
        cover: !0,
        children: s._(/*BTDS*/ ""),
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d() {
      return u.jsx(o("WAWebModal.react").Modal, {
        title: s._(/*BTDS*/ ""),
        cover: !0,
        children: s._(/*BTDS*/ ""),
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = e.Main,
        a = e.animate,
        i = e.contextMenuRef,
        l = e.handleReadyForMainScreen,
        m = e.mdReloadPageOnTakeOver,
        p = e.screen,
        _ = e.state,
        f = p;
      switch (p) {
        case o("WAWebAppScreenTypes").AppScreen.ANOTHER_SESSION:
          return {
            appScreenUI: [
              {
                ui: u.jsxs(o("WAWebFavicon.react").ErrorFavicon, {
                  children: [
                    u.jsx(r("WAWebInactiveTabRedirectOnMount.react"), {}),
                    u.jsx(r("WAWebInactiveTabConflict.react"), {
                      takingOver: _.takingOver,
                      onUseHere: m,
                    }),
                  ],
                }),
                errorBoundaryName: f,
              },
            ],
            requiresBackendCheck: !1,
          };
        case o("WAWebAppScreenTypes").AppScreen.CALL_TAKEOVER_PREVENTION: {
          var g = function () {
            window.open("https://www.whatsapp.com/", "_self");
          };
          return {
            appScreenUI: [
              {
                ui: u.jsx(o("WAWebFavicon.react").ErrorFavicon, {
                  children: u.jsx(r("WAWebConflict.react"), {
                    cancelText: r("WAWebFbtCommon")("Close"),
                    onCancel: g,
                    okText: s._(/*BTDS*/ ""),
                    onOK: function () {
                      r("WAWebAppMutex").requestFocusOnOtherTab();
                    },
                    children: s._(/*BTDS*/ ""),
                  }),
                }),
                errorBoundaryName: f,
              },
            ],
            requiresBackendCheck: !1,
          };
        }
        case o("WAWebAppScreenTypes").AppScreen.SERVICE_UNAVAILABLE:
          return {
            appScreenUI: [
              {
                ui: u.jsx(o("WAWebFavicon.react").ErrorFavicon, {
                  children: u.jsx(c, {}),
                }),
                errorBoundaryName: f,
              },
            ],
            requiresBackendCheck: !1,
          };
        case o("WAWebAppScreenTypes").AppScreen.TEMP_BAN:
          return {
            appScreenUI: [
              {
                ui: u.jsx(r("WAWebTempBanScreen.react"), {
                  banData: _.temporaryBan,
                }),
                errorBoundaryName: f,
              },
            ],
            requiresBackendCheck: !0,
          };
        case o("WAWebAppScreenTypes").AppScreen.QR:
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
                  children: n("cr:8094")
                    ? u.jsx(n("cr:8094"), { apiCmd: _.apiCmd })
                    : u.jsx(
                        r("WAWebLinkDeviceScreen.react"),
                        { apiCmd: _.apiCmd },
                        "qr-code",
                      ),
                }),
                errorBoundaryName: n("cr:8094")
                  ? "windows-link-screen-wrapper"
                  : "link-device-screen",
              },
            ],
            requiresBackendCheck: !0,
          };
        case o("WAWebAppScreenTypes").AppScreen.STARTUP:
        case o("WAWebAppScreenTypes").AppScreen.SYNCING:
          return n("cr:11133") != null && n("cr:11133")()
            ? { appScreenUI: [], requiresBackendCheck: !0 }
            : {
                appScreenUI: [
                  {
                    ui: u.jsx(o("WAWebFavicon.react").DefaultFavicon, {
                      children: u.jsx(r("WAWebStartup.react"), {
                        initialLoadState: _.initialLoadState,
                        onReady: l,
                      }),
                    }),
                    errorBoundaryName: f,
                  },
                ],
                requiresBackendCheck: !0,
              };
        case o("WAWebAppScreenTypes").AppScreen.OFFLINE:
          return {
            appScreenUI: [
              {
                ui: u.jsx(o("WAWebFavicon.react").ErrorFavicon, {
                  children: u.jsx(d, {}),
                }),
                errorBoundaryName: f,
              },
            ],
            requiresBackendCheck: !0,
          };
        case o("WAWebAppScreenTypes").AppScreen.PROXYBLOCK:
          return {
            appScreenUI: [
              {
                ui: u.jsx(o("WAWebFavicon.react").ErrorFavicon, {
                  children: u.jsx(r("WAWebProxied.react"), {}),
                }),
                errorBoundaryName: f,
              },
            ],
            requiresBackendCheck: !0,
          };
        case o("WAWebAppScreenTypes").AppScreen.CONFLICT:
          return {
            appScreenUI: [
              {
                ui: u.jsx(o("WAWebFavicon.react").ErrorFavicon, {
                  children: u.jsx(r("WAWebConflict.react"), {
                    cancelText: s._(/*BTDS*/ ""),
                    onCancel: function () {
                      return o("WAWebSocketModel").Socket.logout();
                    },
                    okText: s._(/*BTDS*/ ""),
                    onOK: function () {
                      return o("WAWebSocketModel").Socket.takeover();
                    },
                    children: s._(/*BTDS*/ ""),
                  }),
                }),
                errorBoundaryName: f,
              },
            ],
            requiresBackendCheck: !0,
          };
        case o("WAWebAppScreenTypes").AppScreen.TOS_BLOCK:
          return { appScreenUI: [], requiresBackendCheck: !0 };
        case o("WAWebAppScreenTypes").AppScreen.SMB_TOS_BLOCK:
          return { appScreenUI: [], requiresBackendCheck: !0 };
        case o("WAWebAppScreenTypes").AppScreen.LOGOUT:
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
                errorBoundaryName: f,
              },
            ],
            requiresBackendCheck: !0,
          };
        case o("WAWebAppScreenTypes").AppScreen.SCREEN_LOCK:
          return {
            appScreenUI: [
              {
                ui: u.jsx(o("WAWebLockScreenLoadable").LockScreenLoadable, {}),
                errorBoundaryName: f,
              },
            ],
            requiresBackendCheck: !0,
          };
        case o("WAWebAppScreenTypes").AppScreen.MAIN: {
          var h,
            y,
            C = r("nullthrows")(t),
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
                  r("WAWebBizBroadcastProDownloadProgressHost.react"),
                  {},
                  "bb-pro-download-progress-host",
                ),
                errorBoundaryName: "bb-pro-download-progress-host",
              },
              {
                ui: u.jsx(
                  r("WAWebBizBroadcastProReminderHost.react"),
                  {},
                  "bb-pro-reminder-host",
                ),
                errorBoundaryName: "bb-pro-reminder-host",
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
                  { contextMenuRef: i, type: h.SupportType },
                  "support-modal-manager",
                ),
                errorBoundaryName: "support-modal-manager",
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
    l.getAppUI = m;
  },
  226,
);
