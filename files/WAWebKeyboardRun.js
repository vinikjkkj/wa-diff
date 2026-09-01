__d(
  "WAWebKeyboardRun",
  [
    "fbt",
    "WALogger",
    "WAWebActions",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebCallCollection",
    "WAWebChatCollection",
    "WAWebChatPinBridge",
    "WAWebCmd",
    "WAWebCommandPaletteUtils",
    "WAWebComposeBoxActions",
    "WAWebComposeBoxPanelTypes",
    "WAWebConfirmPopup.react",
    "WAWebConnModel",
    "WAWebContactCollection",
    "WAWebDrawerManager",
    "WAWebDrawerManagerGlobalContext",
    "WAWebKeyboardTabUtils",
    "WAWebLockScreenResolver",
    "WAWebManageLabelFlowLoadable",
    "WAWebMeTabFlowLoadable",
    "WAWebModalManager",
    "WAWebMsgCollection",
    "WAWebMuteGetters",
    "WAWebMuteUtils",
    "WAWebNavBarTypes",
    "WAWebNewChatFlowLoadable",
    "WAWebNewGroupFlowLoadable",
    "WAWebNewsletterCollection",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebNoop",
    "WAWebPrivacyModeGating",
    "WAWebPrivacyModeToast",
    "WAWebProfilePicThumbCollection",
    "WAWebScreenLockDrawerLoadable",
    "WAWebSendLogsPopupLoadable",
    "WAWebSettingGatingUtils",
    "WAWebSettingsFlowLoadable",
    "WAWebSocketModel",
    "WAWebTextStatusCollection",
    "WAWebThemeContext",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsPrivacyMode",
    "WAWebUserPrefsScreenLock",
    "WAWebVoipCallsTabPanelManager",
    "WAWebVoipMicrophonePermissionDeniedGuideLoadable.react",
    "WAWebVoipMicrophoneToggle",
    "WAWebVoipPopoutModalManager",
    "WAWebVoipPopoutWindowState",
    "WAWebVoipSignalingEnums",
    "WAWebVoipStackInterface",
    "WAWebVoipVideoStateUtils",
    "WAWebWamEnumMuteEntryPoint",
    "asyncToGeneratorRuntime",
    "cr:13920",
    "cr:1923",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m,
      p,
      _,
      f = _ || (_ = o("react"));
    function g(e, t) {
      switch (e) {
        case o("WAWebActions").Action.OPEN_NTH_CHAT:
          return r("WAWebNoop");
        case o("WAWebActions").Action.CONTACT_US:
          return N;
        case o("WAWebActions").Action.GO_TO_NEXT_CHAT:
          return $;
        case o("WAWebActions").Action.GO_TO_PREV_CHAT:
          return P;
        case o("WAWebActions").Action.CLOSE_CHAT:
          return S;
        case o("WAWebActions").Action.LOGOUT:
          return R;
        case o("WAWebActions").Action.OPEN_NEW_CHAT:
          return C;
        case o("WAWebActions").Action.OPEN_NEW_GROUP:
          return b;
        case o("WAWebActions").Action.OPEN_PROFILE:
          return v;
        case o("WAWebActions").Action.OPEN_SETTINGS:
          return y;
        case o("WAWebActions").Action.SEARCH:
          return L;
        case o("WAWebActions").Action.SEARCH_IN_CHAT:
          return x;
        case o("WAWebActions").Action.TOGGLE_ARCHIVE:
          return E;
        case o("WAWebActions").Action.TOGGLE_MUTE:
          return k;
        case o("WAWebActions").Action.TOGGLE_PIN:
          return I;
        case o("WAWebActions").Action.TOGGLE_UNREAD:
          return T;
        case o("WAWebActions").Action.TOGGLE_THEME:
          return D;
        case o("WAWebActions").Action.OPEN_EMOJI_PANEL:
          return M;
        case o("WAWebActions").Action.OPEN_GIF_PANEL:
          return G;
        case o("WAWebActions").Action.OPEN_STICKER_PANEL:
          return z;
        case o("WAWebActions").Action.TOGGLE_STICKER_MAKER:
          return K;
        case o("WAWebActions").Action.TOGGLE_COMMAND_PALETTE:
          return Q;
        case o("WAWebActions").Action.LOCK_SCREEN:
          return X;
        case o("WAWebActions").Action.LABEL_CHAT:
          return Y;
        case o("WAWebActions").Action.ZOOM_IN:
          return J();
        case o("WAWebActions").Action.ZOOM_OUT:
          return Z();
        case o("WAWebActions").Action.ZOOM_RESET:
          return ee();
        case o("WAWebActions").Action.TOGGLE_PRIVACY_MODE:
          return se;
        case o("WAWebActions").Action.INCREASE_PTT_SPEED:
        case o("WAWebActions").Action.DECREASE_PTT_SPEED:
        case o("WAWebActions").Action.TOGGLE_BOLD:
        case o("WAWebActions").Action.TOGGLE_ITALIC:
        case o("WAWebActions").Action.TOGGLE_STRIKETHROUGH:
        case o("WAWebActions").Action.TOGGLE_CODE:
        case o("WAWebActions").Action.TOGGLE_INLINE_CODE:
        case o("WAWebActions").Action.TOGGLE_NUMBERED_LIST:
        case o("WAWebActions").Action.TOGGLE_BULLETED_LIST:
        case o("WAWebActions").Action.TOGGLE_QUOTE:
          return null;
        case o("WAWebActions").Action.OPEN_CHAT_INFO:
          return w();
        case o("WAWebActions").Action.BLOCK_CHAT:
          return A();
        case o("WAWebActions").Action.REPLY:
          return F();
        case o("WAWebActions").Action.REPLY_PRIVATE:
          return O();
        case o("WAWebActions").Action.FORWARD:
          return B();
        case o("WAWebActions").Action.STAR_MESSAGE:
          return W();
        case o("WAWebActions").Action.OPEN:
          return r("WAWebNoop")();
        case o("WAWebActions").Action.OPEN_ATTACHMENT_DROPDOWN:
          return j();
        case o("WAWebActions").Action.START_PTT_RECORDING:
          return U();
        case o("WAWebActions").Action.PAUSE_PTT_RECORDING:
          return V();
        case o("WAWebActions").Action.SEND_PTT:
          return H();
        case o("WAWebActions").Action.EDIT_LAST_MESSAGE:
          return void 0;
        case o("WAWebActions").Action.TOGGLE_CALL_CAMERA:
          return te();
        case o("WAWebActions").Action.TOGGLE_CALL_MUTE:
          return ne(t);
        case o("WAWebActions").Action.SHOW_CALL_REACTIONS:
          return oe();
        case o("WAWebActions").Action.TOGGLE_RAISE_HAND:
          return ae();
        case o("WAWebActions").Action.START_SCREEN_SHARE:
          return ie();
        case o("WAWebActions").Action.END_CALL:
          return le();
      }
    }
    function h(t, n) {
      var r = g(t, n);
      if (r)
        try {
          (r(),
            t !== o("WAWebActions").Action.TOGGLE_COMMAND_PALETTE &&
              o("WAWebCmd").Cmd.closeCommandPalette());
        } catch (n) {
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "keyboard:error occurred running action ",
                ".",
              ])),
            t,
          );
        }
    }
    function y() {
      var e,
        t,
        n =
          (e =
            (t = o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager(
              "left",
            )) == null
              ? void 0
              : t.existsDrawer()) != null
            ? e
            : !1;
      (n && o("WAWebDrawerManager").DrawerManager.closeDrawerLeft(),
        o("WAWebSettingGatingUtils").isMeTabEnabled()
          ? o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
              o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
                ? { descriptorType: "profile" }
                : f.jsx(o("WAWebMeTabFlowLoadable").MeTabFlowLoadable, {
                    onEnd: o("WAWebDrawerManager").closeDrawerLeft,
                  }),
              { disableRotateFocus: !0 },
            )
          : o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
              o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
                ? { descriptorType: "settings" }
                : f.jsx(o("WAWebSettingsFlowLoadable").SettingsFlowLoadable, {
                    onEnd: o("WAWebDrawerManager").closeDrawerLeft,
                  }),
            ));
    }
    function C() {
      var e,
        t,
        n =
          (e =
            (t = o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager(
              "left",
            )) == null
              ? void 0
              : t.existsDrawer()) != null
            ? e
            : !1;
      (n && o("WAWebDrawerManager").DrawerManager.closeDrawerLeft(),
        o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
          o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
            ? { descriptorType: "new_chat" }
            : f.jsx(o("WAWebNewChatFlowLoadable").NewChatFlowLoadable, {
                onEnd: o("WAWebDrawerManager").closeDrawerLeft,
              }),
          { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
        ));
    }
    function b() {
      var e,
        t,
        r =
          (e =
            (t = o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager(
              "left",
            )) == null
              ? void 0
              : t.existsDrawer()) != null
            ? e
            : !1;
      (r && o("WAWebDrawerManager").DrawerManager.closeDrawerLeft(),
        o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
          o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
            ? { descriptorType: "new_group", isSubFlow: !1 }
            : f.jsx(o("WAWebNewGroupFlowLoadable").NewGroupFlowLoadable, {
                onEnd: o("WAWebDrawerManager").closeDrawerLeft,
                onCreateGroup: (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      (yield e,
                        o(
                          "WAWebDrawerManager",
                        ).DrawerManager.closeDrawerLeft());
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              }),
        ));
    }
    function v() {
      var e,
        t,
        r =
          (e =
            (t = o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager(
              "left",
            )) == null
              ? void 0
              : t.existsDrawer()) != null
            ? e
            : !1;
      r && o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
      var a = o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
        i = o("WAWebTextStatusCollection").TextStatusCollection.assertGet(a),
        l = o(
          "WAWebProfilePicThumbCollection",
        ).ProfilePicThumbCollection.assertGet(a),
        s = o("WAWebContactCollection").ContactCollection.assertGet(a);
      (o("WAWebCmd").Cmd.closeActiveChat(),
        o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
          f.jsx(n("cr:1923"), {
            status: i,
            profilePicThumb: l,
            contact: s,
            conn: o("WAWebConnModel").Conn,
            onClose: o("WAWebDrawerManager").closeDrawerLeft,
            isInitialStep: !0,
          }),
          {
            focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
            transition: "pop-drawer-fast",
            focusOnUnMount: !0,
          },
        ),
        o("WAWebCmd").Cmd.setActiveNavBarItem(
          o("WAWebNavBarTypes").NavBarItems.Profile,
        ));
    }
    function S() {
      var e = o("WAWebChatCollection").ChatCollection.getActive();
      if (e) {
        o("WAWebCmd").Cmd.closeChat(e);
        return;
      }
      if (o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled()) {
        var t =
          r("WAWebNewsletterCollection") == null
            ? void 0
            : r("WAWebNewsletterCollection").getActive();
        if (t) {
          o("WAWebCmd").Cmd.closeChat(t);
          return;
        }
      }
      r("WAWebVoipCallsTabPanelManager").trigger("closeCallLogInfoPanel");
    }
    function R() {
      if (!o("WAWebMsgCollection").MsgCollection.hasUnsentMessages())
        return o("WAWebSocketModel").Socket.logout();
      o("WAWebModalManager").ModalManager.open(
        f.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          tsNavigationData: { surface: "unknown", viewName: "keyboard-run" },
          title: s._(/*BTDS*/ "Log out?"),
          onOK: function () {
            (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "Keyboard: user inputs logout",
                ])),
            ),
              o("WAWebSocketModel").Socket.logout());
          },
          okText: s._(/*BTDS*/ "Log out"),
          onCancel: o("WAWebModalManager").closeModalManager,
          cancelText: s._(/*BTDS*/ "Cancel"),
          children: s._(/*BTDS*/ "Some of your messages are still sending."),
        }),
      );
    }
    function L() {
      o("WAWebCmd").Cmd.focusChatSearch();
    }
    function E() {
      var e = o("WAWebChatCollection").ChatCollection.getActive();
      if (e) {
        var t = e.archive;
        o("WAWebCmd").Cmd.archiveChat(e, !t);
      }
    }
    function k() {
      var e = o("WAWebChatCollection").ChatCollection.getActive();
      if (e && o("WAWebMuteUtils").canMute(e.mute)) {
        var t = o("WAWebMuteGetters").getIsMuted(e.mute);
        o("WAWebCmd").Cmd.muteChatFromEntryPoint(
          e,
          !t,
          o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT.CONVERSATION_SCREEN,
        );
      }
    }
    function I() {
      var e = o("WAWebChatCollection").ChatCollection.getActive();
      if (
        e &&
        (e.pin != null ||
          o("WAWebChatCollection").ChatCollection.countWhere(function (e) {
            return !!e.pin;
          }) < o("WAWebChatPinBridge").getPinLimit(e.id))
      ) {
        var t = !!e.pin;
        o("WAWebCmd").Cmd.pinChat(e, !t);
      }
    }
    function T() {
      var e = o("WAWebChatCollection").ChatCollection.getActive();
      if (e) {
        var t = e.markedUnread;
        o("WAWebCmd").Cmd.markChatUnread(e, !t);
      }
    }
    function D() {}
    function x() {
      var e = o("WAWebChatCollection").ChatCollection.getActive();
      e && o("WAWebCmd").Cmd.chatSearch(e);
    }
    function $() {
      o("WAWebCmd").Cmd.focusNextChat(!0);
    }
    function P() {
      o("WAWebCmd").Cmd.focusPrevChat(!0);
    }
    function N() {
      o("WAWebModalManager").ModalManager.open(
        f.jsx(o("WAWebSendLogsPopupLoadable").SendLogsPopupLoadable, {}),
      );
    }
    function M() {
      o("WAWebCmd").Cmd.openComposeBoxExpressionPanel(
        o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.EMOJI,
      );
    }
    function w() {
      o("WAWebCmd").Cmd.openCurrentChatInfo();
    }
    function A() {
      o("WAWebCmd").Cmd.blockCurrentChat();
    }
    function F() {
      o("WAWebCmd").Cmd.replyCurrentMessageKeyboardShortcut();
    }
    function O() {
      o("WAWebCmd").Cmd.replyCurrentMessagePrivate();
    }
    function B() {
      o("WAWebCmd").Cmd.forwardCurrentMessage();
    }
    function W() {
      o("WAWebCmd").Cmd.starCurrentMessage();
    }
    function q() {}
    function U() {
      o("WAWebCmd").Cmd.startPttRecording();
    }
    function V() {
      o("WAWebCmd").Cmd.pausePttRecording();
    }
    function H() {
      o("WAWebCmd").Cmd.sendPttRecording();
    }
    function G() {
      o("WAWebCmd").Cmd.openComposeBoxExpressionPanel(
        o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.GIF,
      );
    }
    function z() {
      o("WAWebCmd").Cmd.openComposeBoxExpressionPanel(
        o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.STICKER,
      );
    }
    function j() {
      o("WAWebComposeBoxActions").ComposeBoxActions.hasText() ||
        o("WAWebCmd").Cmd.openAttachmentDropdown();
    }
    function K() {
      o("WAWebCmd").Cmd.toggleStickerMaker();
    }
    function Q() {
      o("WAWebCommandPaletteUtils").isCommandPaletteOpen()
        ? o("WAWebCmd").Cmd.closeCommandPalette()
        : o("WAWebCmd").Cmd.openCommandPalette();
    }
    function X() {
      o("WAWebUserPrefsScreenLock").getScreenLockEnabled()
        ? o("WAWebLockScreenResolver").lockScreenAndTriggerUnlockFlow()
        : o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
            f.jsx(o("WAWebScreenLockDrawerLoadable").ScreenLockDrawerLoadable, {
              onCancel: o("WAWebDrawerManager").closeDrawerLeft,
            }),
          );
    }
    function Y() {
      var e = o("WAWebChatCollection").ChatCollection.getActive();
      e &&
        o("WAWebModalManager").ModalManager.open(
          f.jsx(o("WAWebManageLabelFlowLoadable").ManageLabelFlowLoadable, {
            modelsToUpdate: [e],
            onClose: o("WAWebModalManager").closeModalManager,
            entryPoint: null,
          }),
        );
    }
    function J() {
      n("cr:13920") != null &&
        n("cr:13920").isHybridAppZoomingEnabled &&
        (o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "[scaling control] Requesting zoom in from keyboard shortcut",
            ])),
        ),
        n("cr:13920") == null || n("cr:13920").trigger("requestZoomIn"));
    }
    function Z() {
      n("cr:13920") != null &&
        n("cr:13920").isHybridAppZoomingEnabled &&
        (o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "[scaling control] Requesting zoom out from keyboard shortcut",
            ])),
        ),
        n("cr:13920") == null || n("cr:13920").trigger("requestZoomOut"));
    }
    function ee() {
      n("cr:13920") != null &&
        n("cr:13920").isHybridAppZoomingEnabled &&
        (o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "[scaling control] Requesting zoom reset from keyboard shortcut",
            ])),
        ),
        n("cr:13920") == null || n("cr:13920").trigger("requestZoomReset"));
    }
    function te() {
      var e = r("WAWebCallCollection").activeCall;
      e != null &&
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield o("WAWebVoipStackInterface").getVoipStackInterface();
          if ((t == null ? void 0 : t.type) === "web") {
            var n = !o("WAWebVoipVideoStateUtils").isVideoEnabled(
              e.selfVideoState,
            );
            yield t.setCallVideoMute(!n);
          }
        })();
    }
    function ne(e) {
      r("WAWebCallCollection").activeCall != null &&
        n("asyncToGeneratorRuntime")
          .asyncToGenerator(function* () {
            var t = (e == null ? void 0 : e.isDocPip) === !0,
              n = e == null ? void 0 : e.targetWindow,
              r = !1,
              a = yield o(
                "WAWebVoipMicrophoneToggle",
              ).toggleActiveCallMicrophone({
                onPermissionPrompt:
                  t && n != null
                    ? function () {
                        r = o(
                          "WAWebVoipPopoutWindowState",
                        ).focusMainWindowForMediaPrompt(
                          n,
                          "keyboard mute toggle",
                          "microphone",
                        );
                      }
                    : void 0,
                targetWindow: t ? null : n,
              });
            a === "permission_denied" && re(n, r);
          })()
          .catch(function (e) {
            o("WALogger")
              .ERROR(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "keyboard: microphone toggle failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("voip-keyboard-microphone-toggle-failed");
          });
    }
    function re(e, t) {
      var n =
        e == null || t
          ? o("WAWebModalManager").ModalManager
          : o("WAWebVoipPopoutModalManager").VoipPopoutModalManager;
      n.open(
        f.jsx(
          o("WAWebVoipMicrophonePermissionDeniedGuideLoadable.react")
            .WAWebVoipMicrophonePermissionDeniedGuideLoadable,
          {
            onConfirm: function () {
              return n.close();
            },
          },
        ),
      );
    }
    function oe() {
      var e = r("WAWebCallCollection").activeCall;
      e != null && o("WAWebCmd").Cmd.trigger("voip_show_reactions");
    }
    function ae() {
      var e = r("WAWebCallCollection").activeCall;
      e != null &&
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield o("WAWebVoipStackInterface").getVoipStackInterface();
          if ((t == null ? void 0 : t.type) === "web") {
            var n = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
              r = e.isHandRaisedForParticipant(n);
            yield t.raiseHand(!r);
          }
        })();
    }
    function ie() {
      var e = r("WAWebCallCollection").activeCall;
      e != null &&
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield o("WAWebVoipStackInterface").getVoipStackInterface();
          if ((t == null ? void 0 : t.type) === "web") {
            var n = e.isSelfScreenSharing();
            n ? yield t.stopScreenShare() : yield t.startScreenShare();
          }
        })();
    }
    function le() {
      var e = r("WAWebCallCollection").activeCall;
      e != null &&
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebVoipStackInterface").getVoipStackInterface();
          yield e == null
            ? void 0
            : e.endCall(o("WAWebVoipSignalingEnums").EndCallReason.Self, !0);
        })();
    }
    function se() {
      if (o("WAWebPrivacyModeGating").isPrivacyScreenEnabled()) {
        var e = o("WAWebUserPrefsPrivacyMode").isPrivacyScreenEnabled();
        (o("WAWebCmd").Cmd.trigger("toggle_privacy_mode"),
          o("WAWebPrivacyModeToast").showPrivacyModeToast(!e, function () {
            o("WAWebCmd").Cmd.trigger("toggle_privacy_mode");
          }));
      }
    }
    l.default = h;
  },
  226,
);
