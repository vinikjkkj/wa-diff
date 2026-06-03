__d(
  "WAWebKeyboardRun",
  [
    "fbt",
    "WALogger",
    "WAWebActions",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebBizManageLabelModal.react",
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
    "WAWebMeTabFlowLoadable",
    "WAWebModalManager",
    "WAWebMsgCollection",
    "WAWebMuteGetters",
    "WAWebNavBarTypes",
    "WAWebNewChatFlowLoadable",
    "WAWebNewGroupFlowLoadable",
    "WAWebNewsletterCollection",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebNoop",
    "WAWebPrivacyModeGating",
    "WAWebPrivacyModeToast",
    "WAWebProfilePicThumbCollection",
    "WAWebScreenLockDrawer.react",
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
    "WAWebVoipSignalingEnums",
    "WAWebVoipStackInterface",
    "WAWebVoipVideoStateUtils",
    "WAWebWamEnumMuteEntryPoint",
    "asyncToGeneratorRuntime",
    "cr:13920",
    "cr:1923",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m,
      p,
      _ = p || (p = o("react"));
    function f(e) {
      switch (e) {
        case o("WAWebActions").Action.OPEN_NTH_CHAT:
          return r("WAWebNoop");
        case o("WAWebActions").Action.CONTACT_US:
          return P;
        case o("WAWebActions").Action.GO_TO_NEXT_CHAT:
          return x;
        case o("WAWebActions").Action.GO_TO_PREV_CHAT:
          return $;
        case o("WAWebActions").Action.CLOSE_CHAT:
          return v;
        case o("WAWebActions").Action.LOGOUT:
          return S;
        case o("WAWebActions").Action.OPEN_NEW_CHAT:
          return y;
        case o("WAWebActions").Action.OPEN_NEW_GROUP:
          return C;
        case o("WAWebActions").Action.OPEN_PROFILE:
          return b;
        case o("WAWebActions").Action.OPEN_SETTINGS:
          return h;
        case o("WAWebActions").Action.SEARCH:
          return R;
        case o("WAWebActions").Action.SEARCH_IN_CHAT:
          return D;
        case o("WAWebActions").Action.TOGGLE_ARCHIVE:
          return L;
        case o("WAWebActions").Action.TOGGLE_MUTE:
          return E;
        case o("WAWebActions").Action.TOGGLE_PIN:
          return k;
        case o("WAWebActions").Action.TOGGLE_UNREAD:
          return I;
        case o("WAWebActions").Action.TOGGLE_THEME:
          return T;
        case o("WAWebActions").Action.OPEN_EMOJI_PANEL:
          return N;
        case o("WAWebActions").Action.OPEN_GIF_PANEL:
          return H;
        case o("WAWebActions").Action.OPEN_STICKER_PANEL:
          return G;
        case o("WAWebActions").Action.TOGGLE_STICKER_MAKER:
          return j;
        case o("WAWebActions").Action.TOGGLE_COMMAND_PALETTE:
          return K;
        case o("WAWebActions").Action.LOCK_SCREEN:
          return Q;
        case o("WAWebActions").Action.LABEL_CHAT:
          return X;
        case o("WAWebActions").Action.ZOOM_IN:
          return Y();
        case o("WAWebActions").Action.ZOOM_OUT:
          return J();
        case o("WAWebActions").Action.ZOOM_RESET:
          return Z();
        case o("WAWebActions").Action.TOGGLE_PRIVACY_MODE:
          return ie;
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
          return M();
        case o("WAWebActions").Action.BLOCK_CHAT:
          return w();
        case o("WAWebActions").Action.REPLY:
          return A();
        case o("WAWebActions").Action.REPLY_PRIVATE:
          return F();
        case o("WAWebActions").Action.FORWARD:
          return O();
        case o("WAWebActions").Action.STAR_MESSAGE:
          return B();
        case o("WAWebActions").Action.OPEN:
          return r("WAWebNoop")();
        case o("WAWebActions").Action.OPEN_ATTACHMENT_DROPDOWN:
          return z();
        case o("WAWebActions").Action.START_PTT_RECORDING:
          return q();
        case o("WAWebActions").Action.PAUSE_PTT_RECORDING:
          return U();
        case o("WAWebActions").Action.SEND_PTT:
          return V();
        case o("WAWebActions").Action.EDIT_LAST_MESSAGE:
          return void 0;
        case o("WAWebActions").Action.TOGGLE_CALL_CAMERA:
          return ee();
        case o("WAWebActions").Action.TOGGLE_CALL_MUTE:
          return te();
        case o("WAWebActions").Action.SHOW_CALL_REACTIONS:
          return ne();
        case o("WAWebActions").Action.TOGGLE_RAISE_HAND:
          return re();
        case o("WAWebActions").Action.START_SCREEN_SHARE:
          return oe();
        case o("WAWebActions").Action.END_CALL:
          return ae();
      }
    }
    function g(t) {
      var n = f(t);
      if (n)
        try {
          (n(),
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
    function h() {
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
                : _.jsx(o("WAWebMeTabFlowLoadable").MeTabFlowLoadable, {
                    onEnd: o("WAWebDrawerManager").closeDrawerLeft,
                  }),
            )
          : o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
              o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
                ? { descriptorType: "settings" }
                : _.jsx(o("WAWebSettingsFlowLoadable").SettingsFlowLoadable, {
                    onEnd: o("WAWebDrawerManager").closeDrawerLeft,
                  }),
            ));
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
        o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
          o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
            ? { descriptorType: "new_chat" }
            : _.jsx(o("WAWebNewChatFlowLoadable").NewChatFlowLoadable, {
                onEnd: o("WAWebDrawerManager").closeDrawerLeft,
              }),
          { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
        ));
    }
    function C() {
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
            : _.jsx(o("WAWebNewGroupFlowLoadable").NewGroupFlowLoadable, {
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
      r && o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
      var a = o("WAWebUserPrefsMeUser").getMeUser(),
        i = o("WAWebTextStatusCollection").TextStatusCollection.assertGet(a),
        l = o(
          "WAWebProfilePicThumbCollection",
        ).ProfilePicThumbCollection.assertGet(a),
        s = o("WAWebContactCollection").ContactCollection.assertGet(a);
      (o("WAWebCmd").Cmd.closeActiveChat(),
        o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
          _.jsx(n("cr:1923"), {
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
    function v() {
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
    function S() {
      if (!o("WAWebMsgCollection").MsgCollection.hasUnsentMessages())
        return o("WAWebSocketModel").Socket.logout();
      o("WAWebModalManager").ModalManager.open(
        _.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
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
    function R() {
      o("WAWebCmd").Cmd.focusChatSearch();
    }
    function L() {
      var e = o("WAWebChatCollection").ChatCollection.getActive();
      if (e && e.canArchive()) {
        var t = e.archive;
        o("WAWebCmd").Cmd.archiveChat(e, !t);
      }
    }
    function E() {
      var e = o("WAWebChatCollection").ChatCollection.getActive();
      if (e && e.mute.canMute()) {
        var t = o("WAWebMuteGetters").getIsMuted(e.mute);
        o("WAWebCmd").Cmd.muteChatFromEntryPoint(
          e,
          !t,
          o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT.CONVERSATION_SCREEN,
        );
      }
    }
    function k() {
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
    function I() {
      var e = o("WAWebChatCollection").ChatCollection.getActive();
      if (e) {
        var t = e.markedUnread;
        o("WAWebCmd").Cmd.markChatUnread(e, !t);
      }
    }
    function T() {}
    function D() {
      var e = o("WAWebChatCollection").ChatCollection.getActive();
      e && o("WAWebCmd").Cmd.chatSearch(e);
    }
    function x() {
      o("WAWebCmd").Cmd.focusNextChat(!0);
    }
    function $() {
      o("WAWebCmd").Cmd.focusPrevChat(!0);
    }
    function P() {
      o("WAWebModalManager").ModalManager.open(
        _.jsx(o("WAWebSendLogsPopupLoadable").SendLogsPopupLoadable, {}),
      );
    }
    function N() {
      o("WAWebCmd").Cmd.openComposeBoxExpressionPanel(
        o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.EMOJI,
      );
    }
    function M() {
      o("WAWebCmd").Cmd.openCurrentChatInfo();
    }
    function w() {
      o("WAWebCmd").Cmd.blockCurrentChat();
    }
    function A() {
      o("WAWebCmd").Cmd.replyCurrentMessageKeyboardShortcut();
    }
    function F() {
      o("WAWebCmd").Cmd.replyCurrentMessagePrivate();
    }
    function O() {
      o("WAWebCmd").Cmd.forwardCurrentMessage();
    }
    function B() {
      o("WAWebCmd").Cmd.starCurrentMessage();
    }
    function W() {}
    function q() {
      o("WAWebCmd").Cmd.startPttRecording();
    }
    function U() {
      o("WAWebCmd").Cmd.pausePttRecording();
    }
    function V() {
      o("WAWebCmd").Cmd.sendPttRecording();
    }
    function H() {
      o("WAWebCmd").Cmd.openComposeBoxExpressionPanel(
        o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.GIF,
      );
    }
    function G() {
      o("WAWebCmd").Cmd.openComposeBoxExpressionPanel(
        o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.STICKER,
      );
    }
    function z() {
      o("WAWebComposeBoxActions").ComposeBoxActions.hasText() ||
        o("WAWebCmd").Cmd.openAttachmentDropdown();
    }
    function j() {
      o("WAWebCmd").Cmd.toggleStickerMaker();
    }
    function K() {
      o("WAWebCommandPaletteUtils").isCommandPaletteOpen()
        ? o("WAWebCmd").Cmd.closeCommandPalette()
        : o("WAWebCmd").Cmd.openCommandPalette();
    }
    function Q() {
      o("WAWebUserPrefsScreenLock").getScreenLockEnabled()
        ? o("WAWebLockScreenResolver").lockScreenAndTriggerUnlockFlow()
        : o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
            _.jsx(r("WAWebScreenLockDrawer.react"), {
              onCancel: o("WAWebDrawerManager").closeDrawerLeft,
            }),
          );
    }
    function X() {
      var e = o("WAWebChatCollection").ChatCollection.getActive();
      e &&
        o("WAWebModalManager").ModalManager.open(
          _.jsx(r("WAWebBizManageLabelModal.react"), {
            modelsToUpdate: [e],
            onCancel: o("WAWebModalManager").closeModalManager,
            onLabelUpdateComplete: o("WAWebModalManager").closeModalManager,
            entryPoint: null,
          }),
        );
    }
    function Y() {
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
    function J() {
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
    function Z() {
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
    function ee() {
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
    function te() {
      var e = r("WAWebCallCollection").activeCall;
      e != null &&
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield o("WAWebVoipStackInterface").getVoipStackInterface();
          if ((t == null ? void 0 : t.type) === "web") {
            var n = e.selfMicMuted;
            yield t.setCallMute(!n);
          }
        })();
    }
    function ne() {
      var e = r("WAWebCallCollection").activeCall;
      e != null && o("WAWebCmd").Cmd.trigger("voip_show_reactions");
    }
    function re() {
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
    function oe() {
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
    function ae() {
      var e = r("WAWebCallCollection").activeCall;
      e != null &&
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebVoipStackInterface").getVoipStackInterface();
          yield e == null
            ? void 0
            : e.endCall(o("WAWebVoipSignalingEnums").EndCallReason.Self, !0);
        })();
    }
    function ie() {
      if (o("WAWebPrivacyModeGating").isPrivacyScreenEnabled()) {
        var e = o("WAWebUserPrefsPrivacyMode").isPrivacyScreenEnabled();
        (o("WAWebCmd").Cmd.trigger("toggle_privacy_mode"),
          o("WAWebPrivacyModeToast").showPrivacyModeToast(!e, function () {
            o("WAWebCmd").Cmd.trigger("toggle_privacy_mode");
          }));
      }
    }
    l.default = g;
  },
  226,
);
