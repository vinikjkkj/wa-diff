__d(
  "WAWebVoipCallControls.react",
  [
    "fbt",
    "WAWebCallCollection",
    "WAWebFlex.react",
    "WAWebNoop",
    "WAWebVoipActivityTracker",
    "WAWebVoipCameraDeviceSelector.react",
    "WAWebVoipFullScreenContext",
    "WAWebVoipGatingUtils",
    "WAWebVoipLobbyUtils",
    "WAWebVoipMicDeviceSelector.react",
    "WAWebVoipMoreControlsButton.react",
    "WAWebVoipNewGroupCallContactPicker.react",
    "WAWebVoipRaiseHandButton.react",
    "WAWebVoipReactionButton.react",
    "WAWebVoipScreenShareHelpers",
    "WAWebVoipUiManager",
    "WAWebVoipUiPopoutWindowContext",
    "WAWebVoipUiPopoutWindowPortalContainer.react",
    "WDSButton.react",
    "WDSIconIcCallEndFilled.react",
    "WDSIconIcCallFilled.react",
    "WDSIconIcFullscreenExit.react",
    "WDSIconIcGridView.react",
    "WDSIconIcGroup.react",
    "WDSIconIcPersonAdd.react",
    "WDSIconIcVideoCallingGrid.react",
    "WDSIconIcVideocamFilled.react",
    "WDSIconWdsIcPipLeftBottomToTopRight.react",
    "WDSThemes",
    "WDSTooltip.react",
    "react",
    "useWAWebABPropConfigValue",
    "useWAWebEventTargetValue",
    "useWAWebVoipModalManager",
    "useWAWebVoipWindowPopoutTooltipProps",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useContext;
    function d(e) {
      return e === "accept"
        ? s._(/*BTDS*/ "Accept")
        : e === "decline"
          ? s._(/*BTDS*/ "Decline")
          : e === "join"
            ? s._(/*BTDS*/ "Join")
            : e === "ignore"
              ? s._(/*BTDS*/ "Ignore")
              : e === "end"
                ? s._(/*BTDS*/ "End")
                : e === "leave"
                  ? s._(/*BTDS*/ "Leave")
                  : e === "cancel"
                    ? s._(/*BTDS*/ "Cancel")
                    : e === "notNow"
                      ? s._(/*BTDS*/ "Not now")
                      : (function () {
                          throw Error(
                            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                              e,
                          );
                        })();
    }
    var m = {
        positiveButton: { labelKey: "accept", shouldShow: !0 },
        negativeButton: { labelKey: "decline", shouldShow: !0 },
      },
      p = {
        acceptButton: { backgroundColor: "x1qe8gl4", $$css: !0 },
        callButtonMedium: {
          height: "x1vqgdyp",
          minWidth: "xxsxjwm",
          $$css: !0,
        },
        callButtonSmall: { height: "x10w6t97", minWidth: "x4m7ku4", $$css: !0 },
        notNowButtonMedium: {
          height: "x1vqgdyp",
          minWidth: "xktpd3l",
          $$css: !0,
        },
        notNowButtonSmall: {
          height: "x10w6t97",
          minWidth: "x450l9j",
          $$css: !0,
        },
        centreControlButton: {
          width: "x1useyqa",
          height: "xsdox4t",
          borderStartStartRadius: "xlr9sxt",
          borderStartEndRadius: "xvvg52n",
          borderEndEndRadius: "xwd4zgb",
          borderEndStartRadius: "xq8v1ta",
          $$css: !0,
        },
        callControlsRow: {
          height: "xsdox4t",
          paddingInlineStart: "x12w63v0",
          paddingInlineEnd: "x1nzty39",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        callControlsRowPopout: {
          height: "xnnlda6",
          paddingInlineStart: "x12w63v0",
          paddingInlineEnd: "x1nzty39",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        popOutButton: { height: "x10w6t97", $$css: !0 },
        controlsGroup: { columnGap: "x1s70e7g", $$css: !0 },
        centreControlsGroup: { columnGap: "x1trrmfo", $$css: !0 },
        leftControlsGroup: { minWidth: "xeuugli", $$css: !0 },
        spacer: {
          flexGrow: "x1iyjqo2",
          flexShrink: "xs83m0k",
          flexBasis: "x1r8uery",
          minWidth: "xnokg69",
          $$css: !0,
        },
        buttonWrapper: {
          flexShrink: "x2lah0s",
          minWidth: "xeuugli",
          $$css: !0,
        },
      };
    function _(e) {
      var t = e.buttonCustomizations,
        n = t === void 0 ? m : t,
        a = e.hasCameraAvailable,
        i = e.isMuted,
        l = e.isVideoCall,
        _ = e.isVideoMuted,
        f = e.moreButton,
        g = e.onMuteToggle,
        h = e.onNegativeButtonClick,
        y = e.onPositiveButtonClick,
        C = e.onVideoMuteToggle,
        b = c(r("WAWebVoipUiPopoutWindowContext")),
        v = b.isContextInPopoutWindow && !b.isDocPip,
        S = n.negativeButton,
        R = n.positiveButton,
        L = d(R.labelKey),
        E = d(S.labelKey),
        k = S.showLabel !== !1,
        I = S.styleType === "borderless",
        T = S.styleType === "media";
      return u.jsxs(o("WAWebFlex.react").FlexRow, {
        align: "center",
        justify: "start",
        grow: 1,
        role: "toolbar",
        "aria-label": s._(/*BTDS*/ "Call controls"),
        xstyle: v ? p.callControlsRowPopout : p.callControlsRow,
        children: [
          u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            grow: 0,
            shrink: 1,
            basis: "auto",
            xstyle: [p.controlsGroup, p.leftControlsGroup],
            children: [
              l &&
                u.jsx(o("WAWebFlex.react").FlexItem, {
                  children: u.jsx(r("WAWebVoipCameraDeviceSelector.react"), {
                    isMuted: _,
                    hasCameraAvailable: a,
                    isVideoCall: l,
                    onMainClick: function () {
                      C();
                    },
                  }),
                }),
              u.jsx(o("WAWebFlex.react").FlexItem, {
                children: u.jsx(r("WAWebVoipMicDeviceSelector.react"), {
                  isMuted: i,
                  onMainClick: function () {
                    g();
                  },
                }),
              }),
            ],
          }),
          u.jsx(o("WAWebFlex.react").FlexItem, { xstyle: p.spacer }),
          u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            grow: 0,
            shrink: 0,
            basis: "auto",
            xstyle: p.controlsGroup,
            children: [
              f != null &&
                !v &&
                u.jsx(o("WAWebFlex.react").FlexItem, {
                  xstyle: p.buttonWrapper,
                  children: f,
                }),
              S.shouldShow &&
                u.jsx(o("WAWebFlex.react").FlexItem, {
                  xstyle: p.buttonWrapper,
                  children: I
                    ? u.jsx(r("WDSButton.react"), {
                        testid: void 0,
                        type: "default",
                        variant: "borderless",
                        onPress: function () {
                          h();
                        },
                        size: v ? "medium" : "small",
                        xstyle: v ? p.notNowButtonMedium : p.notNowButtonSmall,
                        label: E,
                        "aria-label": E,
                      })
                    : T
                      ? u.jsx(r("WDSButton.react"), {
                          testid: void 0,
                          type: "media",
                          onPress: function () {
                            h();
                          },
                          size: v ? "medium" : "small",
                          xstyle: v ? p.callButtonMedium : p.callButtonSmall,
                          label: E,
                          "aria-label": E,
                        })
                      : u.jsx(r("WDSButton.react"), {
                          testid: void 0,
                          type: "destructive",
                          variant: "filled",
                          onPress: function () {
                            h();
                          },
                          Icon: r("WDSIconIcCallEndFilled.react"),
                          size: v ? "medium" : "small",
                          xstyle: [
                            o("WDSThemes").WDSLightTheme,
                            v ? p.callButtonMedium : p.callButtonSmall,
                          ],
                          label: k ? E : void 0,
                          "aria-label": E,
                        }),
                }),
              R.shouldShow &&
                u.jsx(o("WAWebFlex.react").FlexItem, {
                  xstyle: p.buttonWrapper,
                  children: u.jsx(r("WDSButton.react"), {
                    testid: void 0,
                    type: "default",
                    onPress: function () {
                      y();
                    },
                    Icon: r(
                      l
                        ? "WDSIconIcVideocamFilled.react"
                        : "WDSIconIcCallFilled.react",
                    ),
                    size: v ? "medium" : "small",
                    xstyle: [
                      o("WDSThemes").WDSLightTheme,
                      v ? p.callButtonMedium : p.callButtonSmall,
                      p.acceptButton,
                    ],
                    label: L,
                    "aria-label": L,
                  }),
                }),
            ],
          }),
        ],
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e, t) {
      return e
        ? s._(/*BTDS*/ "Layout cannot be changed while screen sharing")
        : t === "grid"
          ? s._(/*BTDS*/ "Switch to speaker view")
          : s._(/*BTDS*/ "Switch to grid view");
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      var t = e.chat,
        n = e.connectedParticipantsCount,
        a = n === void 0 ? 0 : n,
        i = e.hasCameraAvailable,
        l = e.isAnyPeerScreenSharing,
        d = e.isCallActive,
        m = e.isCallLink,
        _ = m === void 0 ? !1 : m,
        g = e.isCallOutgoing,
        b = g === void 0 ? !1 : g,
        v = e.isConnectedLonely,
        S = v === void 0 ? !1 : v,
        R = e.isGroupCall,
        L = e.isLinkedGroupCall,
        E = e.isMuted,
        k = e.isSelfHandRaised,
        I = e.isSelfScreenSharing,
        T = e.isVideoCall,
        D = e.isVideoMuted,
        x = e.layoutMode,
        $ = e.onEnd,
        P = e.onLayoutModeToggle,
        N = e.onMuteToggle,
        M = e.onRaiseHandToggle,
        w = e.onReactionSelect,
        A = e.onRingParticipant,
        F = e.onSendMessage,
        O = e.onToggleParticipantDrawer,
        B = e.onVideoMuteToggle,
        W = e.participantStates,
        q = e.participantsWithoutSelf,
        U = e.ringingMoreButton,
        V = e.selfReaction,
        H = e.showSendMessage,
        G = e.showVideoToggle,
        z = G === void 0 ? !0 : G,
        j = c(r("WAWebVoipUiPopoutWindowContext")),
        K = j.isContextInPopoutWindow && !j.isDocPip,
        Q = c(r("WAWebVoipFullScreenContext")),
        X = r("useWAWebEventTargetValue")(
          o("WAWebVoipUiPopoutWindowPortalContainer.react")
            .WAWebVoipUiPopoutWindowEventEmitter,
          "setPopoutWindowProps",
          o("WAWebVoipUiPopoutWindowPortalContainer.react")
            .getIsCallActiveInPopoutWindow,
        ),
        Y =
          o("useWAWebABPropConfigValue").useABPropConfigValue(
            "web_calling_raise_hands_enabled",
          ) === !0,
        J = r("useWAWebVoipWindowPopoutTooltipProps")(),
        Z = J.tooltipAnchorRef,
        ee = J.tooltipOwnerDocument,
        te = I || l,
        ne = d && K && R && T && x != null && P != null && a > 2,
        re = Q.isFullScreen;
      return u.jsxs(o("WAWebFlex.react").FlexRow, {
        align: "center",
        justify: "all",
        grow: 1,
        role: "toolbar",
        "aria-label": s._(/*BTDS*/ "Call controls"),
        xstyle: K ? p.callControlsRowPopout : p.callControlsRow,
        children: [
          u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "start",
            grow: K ? 1 : 0,
            basis: K ? 0 : "auto",
            xstyle: [p.controlsGroup, p.leftControlsGroup],
            children: [
              z &&
                u.jsx(o("WAWebFlex.react").FlexItem, {
                  children: u.jsx(r("WAWebVoipCameraDeviceSelector.react"), {
                    isDisabled: (!d && !b) || I || (!T && _),
                    disableMainButton: b && !d,
                    hasCameraAvailable: i,
                    isMuted: D,
                    isVideoCall: T,
                    onMainClick: function () {
                      B();
                    },
                  }),
                }),
              u.jsx(o("WAWebFlex.react").FlexItem, {
                children: u.jsx(r("WAWebVoipMicDeviceSelector.react"), {
                  isMuted: E,
                  onMainClick: function () {
                    N();
                  },
                }),
              }),
            ],
          }),
          K
            ? u.jsxs(o("WAWebFlex.react").FlexRow, {
                align: "center",
                justify: "center",
                xstyle: p.centreControlsGroup,
                children: [
                  Y && R
                    ? u.jsx(o("WAWebFlex.react").FlexItem, {
                        children: u.jsx(
                          o("WAWebVoipRaiseHandButton.react")
                            .WAWebVoipRaiseHandButton,
                          {
                            isDisabled: !d || S,
                            isSelfHandRaised: k != null ? k : !1,
                            onRaiseHandToggle: M != null ? M : r("WAWebNoop"),
                            tooltipAnchorRef: Z,
                            tooltipOwnerDocument: ee,
                          },
                        ),
                      })
                    : null,
                  u.jsx(o("WAWebFlex.react").FlexItem, {
                    children: u.jsx(r("WAWebVoipReactionButton.react"), {
                      isDisabled: !d || S,
                      onReactionSelect: w,
                      selfReaction: V,
                    }),
                  }),
                  u.jsx(o("WAWebFlex.react").FlexItem, {
                    children: u.jsx(h, {
                      isDisabled: !d || S,
                      isSelfScreenSharing: I,
                      isAnyPeerScreenSharing: l,
                      isVideoCall: T,
                      isVideoMuted: D,
                      onVideoMuteToggle: B,
                      tooltipAnchorRef: Z,
                      tooltipOwnerDocument: ee,
                    }),
                  }),
                  R &&
                  o("WAWebVoipGatingUtils").isGroupCallingEnabled() &&
                  q != null &&
                  W != null &&
                  A != null
                    ? u.jsx(o("WAWebFlex.react").FlexItem, {
                        children: u.jsx(y, {
                          disabled: S,
                          onToggleParticipantDrawer: O,
                          tooltipAnchorRef: Z,
                          tooltipOwnerDocument: ee,
                        }),
                      })
                    : null,
                  t != null &&
                  o("WAWebVoipGatingUtils").isGroupCallingEnabled() &&
                  !R
                    ? u.jsx(o("WAWebFlex.react").FlexItem, {
                        children: u.jsx(C, {
                          chat: t,
                          isVideoCall: T,
                          tooltipAnchorRef: Z,
                          tooltipOwnerDocument: ee,
                        }),
                      })
                    : null,
                  re
                    ? u.jsx(o("WAWebFlex.react").FlexItem, {
                        children: u.jsx(r("WDSTooltip.react"), {
                          label: s._(/*BTDS*/ "Exit full screen (DEV)"),
                          ownerAnchorRef: Z,
                          ownerDocument: ee,
                          delayTooltipMs: o("WAWebVoipRaiseHandButton.react")
                            .CALL_CONTROL_TOOLTIP_DELAY_MS,
                          children: u.jsx(r("WDSButton.react"), {
                            testid: void 0,
                            variant: "borderless",
                            onPress: Q.exitFullScreen,
                            Icon: r("WDSIconIcFullscreenExit.react"),
                            size: "medium",
                            xstyle: p.centreControlButton,
                            "aria-label": s._(
                              /*BTDS*/ "Exit full screen (DEV)",
                            ),
                          }),
                        }),
                      })
                    : null,
                ],
              })
            : null,
          u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "end",
            shrink: 0,
            grow: K ? 1 : 0,
            basis: K ? 0 : "auto",
            xstyle: p.controlsGroup,
            children: [
              !j.isContextInPopoutWindow &&
                u.jsx(o("WAWebFlex.react").FlexItem, {
                  children: u.jsx(r("WDSTooltip.react"), {
                    label: s._(/*BTDS*/ "Move to new window"),
                    ownerAnchorRef: Z,
                    ownerDocument: ee,
                    delayTooltipMs: o("WAWebVoipRaiseHandButton.react")
                      .CALL_CONTROL_TOOLTIP_DELAY_MS,
                    children: u.jsx(r("WDSButton.react"), {
                      testid: void 0,
                      variant: "borderless",
                      onPress: o("WAWebVoipUiManager").openVoipUiPopoutWindow,
                      disabled: X,
                      Icon: r("WDSIconWdsIcPipLeftBottomToTopRight.react"),
                      size: "small",
                      xstyle: p.popOutButton,
                      "aria-label": s._(/*BTDS*/ "Move to new window"),
                    }),
                  }),
                }),
              U != null && !K ? U : null,
              d && !K
                ? u.jsx(r("WAWebVoipMoreControlsButton.react"), {
                    chat: t,
                    isAnyPeerScreenSharing: l,
                    isCallActiveInPopoutWindow: X,
                    isConnectedLonely: S,
                    isGroupCall: R,
                    isLinkedGroupCall: L,
                    isSelfHandRaised: k,
                    isSelfScreenSharing: I,
                    isVideoCall: T,
                    isVideoMuted: D,
                    onRaiseHandToggle: M,
                    onReactionSelect: w,
                    onRingParticipant: A,
                    onSendMessage: F,
                    onVideoMuteToggle: B,
                    participantStates: W,
                    participantsWithoutSelf: q,
                    showSendMessage: H,
                    tooltipAnchorRef: Z,
                    tooltipOwnerDocument: ee,
                  })
                : null,
              ne
                ? u.jsx(o("WAWebFlex.react").FlexItem, {
                    children: u.jsx(r("WDSTooltip.react"), {
                      label: f(te, x),
                      ownerAnchorRef: Z,
                      ownerDocument: ee,
                      delayTooltipMs: o("WAWebVoipRaiseHandButton.react")
                        .CALL_CONTROL_TOOLTIP_DELAY_MS,
                      children: u.jsx(r("WDSButton.react"), {
                        testid: void 0,
                        variant: "borderless",
                        onPress: P,
                        disabled: te,
                        Icon: r(
                          x === "grid"
                            ? "WDSIconIcVideoCallingGrid.react"
                            : "WDSIconIcGridView.react",
                        ),
                        size: K ? "medium" : "small",
                        xstyle: K ? p.centreControlButton : void 0,
                        "aria-label":
                          x === "grid"
                            ? s._(/*BTDS*/ "Switch to speaker view")
                            : s._(/*BTDS*/ "Switch to grid view"),
                      }),
                    }),
                  })
                : null,
              u.jsx(o("WAWebFlex.react").FlexItem, {
                children: u.jsx(r("WDSTooltip.react"), {
                  label: s._(/*BTDS*/ "End call"),
                  ownerAnchorRef: Z,
                  ownerDocument: ee,
                  delayTooltipMs: o("WAWebVoipRaiseHandButton.react")
                    .CALL_CONTROL_TOOLTIP_DELAY_MS,
                  children: u.jsx(r("WDSButton.react"), {
                    testid: void 0,
                    type: "destructive",
                    variant: "filled",
                    onPress: function () {
                      $();
                    },
                    Icon: r("WDSIconIcCallEndFilled.react"),
                    size: K ? "medium" : "small",
                    xstyle: [
                      o("WDSThemes").WDSLightTheme,
                      K ? p.callButtonMedium : p.callButtonSmall,
                    ],
                    "aria-label": s._(/*BTDS*/ "End call"),
                  }),
                }),
              }),
            ],
          }),
        ],
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      var t = e.isAnyPeerScreenSharing,
        n = e.isDisabled,
        a = n === void 0 ? !1 : n,
        i = e.isSelfScreenSharing,
        l = e.isVideoCall,
        s = e.isVideoMuted,
        c = e.onVideoMuteToggle,
        d = e.tooltipAnchorRef,
        m = e.tooltipOwnerDocument,
        _ = r("useWAWebVoipModalManager")(),
        f = _.closeModal,
        g = _.openModal,
        h = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          "change:screenShareStates",
          function () {
            var e, t;
            return (e =
              (t = r("WAWebCallCollection").activeCall) == null
                ? void 0
                : t.isSelfScreenShareRejected()) != null
              ? e
              : !1;
          },
        );
      return u.jsx(r("WDSTooltip.react"), {
        label: o("WAWebVoipScreenShareHelpers").getScreenShareLabel(i),
        ownerAnchorRef: d,
        ownerDocument: m,
        delayTooltipMs: o("WAWebVoipRaiseHandButton.react")
          .CALL_CONTROL_TOOLTIP_DELAY_MS,
        children: u.jsx(r("WDSButton.react"), {
          variant: i ? "filled" : "borderless",
          type: i ? "destructive" : "default",
          "aria-label": o("WAWebVoipScreenShareHelpers").getScreenShareLabel(i),
          "aria-pressed": i,
          disabled: a || (t && !h),
          onPress: function () {
            o("WAWebVoipScreenShareHelpers").handlePressScreenShare({
              isSelfScreenSharing: i,
              isAnyPeerScreenSharing: t,
              isVideoCall: l,
              isVideoMuted: s,
              onVideoMuteToggle: c,
              openModal: g,
              closeModal: f,
            });
          },
          Icon: o("WAWebVoipScreenShareHelpers").getScreenShareIcon(i, t),
          size: "medium",
          xstyle: [i && o("WDSThemes").WDSDarkTheme, p.centreControlButton],
        }),
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      var t = e.disabled,
        n = e.onToggleParticipantDrawer,
        a = e.tooltipAnchorRef,
        i = e.tooltipOwnerDocument,
        l = s._(/*BTDS*/ "Participants");
      return u.jsx(r("WDSTooltip.react"), {
        label: l,
        ownerAnchorRef: a,
        ownerDocument: i,
        delayTooltipMs: o("WAWebVoipRaiseHandButton.react")
          .CALL_CONTROL_TOOLTIP_DELAY_MS,
        children: u.jsx(r("WDSButton.react"), {
          variant: "borderless",
          type: "default",
          "aria-label": l,
          disabled: t,
          onPress: n,
          Icon: r("WDSIconIcGroup.react"),
          size: "medium",
          xstyle: p.centreControlButton,
        }),
      });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      var t = e.chat,
        n = e.disabled,
        a = n === void 0 ? !1 : n,
        i = e.isVideoCall,
        l = e.tooltipAnchorRef,
        c = e.tooltipOwnerDocument,
        d = r("useWAWebVoipModalManager")(),
        m = d.closeModal,
        _ = d.openModal,
        f = s._(/*BTDS*/ "Add people");
      return u.jsx(r("WDSTooltip.react"), {
        label: f,
        ownerAnchorRef: l,
        ownerDocument: c,
        delayTooltipMs: o("WAWebVoipRaiseHandButton.react")
          .CALL_CONTROL_TOOLTIP_DELAY_MS,
        children: u.jsx(r("WDSButton.react"), {
          variant: "borderless",
          "aria-label": f,
          disabled: a,
          onPress: function () {
            (o("WAWebVoipActivityTracker").trackUiActivity(
              o("WAWebVoipActivityTracker").VoipUiActivity
                .CONTROL_PANEL_ADD_PEOPLE_CLICK,
            ),
              _(
                u.jsx(r("WAWebVoipNewGroupCallContactPicker.react"), {
                  chat: t,
                  isAddingToExistingCall: !0,
                  isVideoCall: i,
                  onClose: m,
                }),
                { blockClose: !0, skipDarkTheme: !0 },
              ));
          },
          Icon: r("WDSIconIcPersonAdd.react"),
          size: "medium",
          xstyle: p.centreControlButton,
        }),
      });
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      var t = e.buttonCustomizations,
        n = t === void 0 ? m : t,
        a = e.callState,
        i = e.chat,
        l = e.connectedParticipantsCount,
        s = l === void 0 ? 0 : l,
        d = e.hasCameraAvailable,
        p = e.isAnyPeerScreenSharing,
        f = e.isCallActive,
        h = e.isCallLink,
        y = h === void 0 ? !1 : h,
        C = e.isCallOutgoing,
        b = C === void 0 ? !1 : C,
        v = e.isCallRinging,
        S = e.isConnectedLonely,
        R = S === void 0 ? !1 : S,
        L = e.isGroupCall,
        E = L === void 0 ? !1 : L,
        k = e.isInLobby,
        I = k === void 0 ? !1 : k,
        T = e.isLinkedGroupCall,
        D = T === void 0 ? !1 : T,
        x = e.isMuted,
        $ = e.isSelfHandRaised,
        P = $ === void 0 ? !1 : $,
        N = e.isSelfScreenSharing,
        M = e.isVideoCall,
        w = e.isVideoMuted,
        A = e.layoutMode,
        F = e.onAccept,
        O = e.onEnd,
        B = e.onLayoutModeToggle,
        W = e.onMuteToggle,
        q = e.onRaiseHandToggle,
        U = e.onReactionSelect,
        V = e.onReject,
        H = e.onRingParticipant,
        G = e.onSendMessage,
        z = e.onToggleParticipantDrawer,
        j = e.onVideoMuteToggle,
        K = e.participantStates,
        Q = e.participantsWithoutSelf,
        X = e.selfReaction,
        Y = e.showSendMessage,
        J = e.showVideoToggle,
        Z = J === void 0 ? !0 : J,
        ee = I
          ? o("WAWebVoipLobbyUtils").getLobbyNegativeButtonHandler(b, O, V, a)
          : V,
        te = r("useWAWebVoipWindowPopoutTooltipProps")(),
        ne = te.tooltipAnchorRef,
        re = te.tooltipOwnerDocument,
        oe = b && !I,
        ae = oe
          ? u.jsx(r("WAWebVoipMoreControlsButton.react"), {
              chat: i,
              isCallRinging: !0,
              isConnectedLonely: R,
              isGroupCall: E,
              isLinkedGroupCall: D,
              isSelfHandRaised: P,
              isSelfScreenSharing: N,
              isAnyPeerScreenSharing: p,
              isVideoCall: M,
              isVideoMuted: w,
              onRaiseHandToggle: q,
              onReactionSelect: U,
              onRingParticipant: H,
              onSendMessage: G,
              onVideoMuteToggle: j,
              participantStates: K,
              participantsWithoutSelf: Q,
              showSendMessage: !1,
              tooltipAnchorRef: ne,
              tooltipOwnerDocument: re,
            })
          : null,
        ie = c(r("WAWebVoipUiPopoutWindowContext")),
        le = ie.isContextInPopoutWindow && !ie.isDocPip,
        se = v && b && le;
      return (v || I) && !se
        ? u.jsx(_, {
            buttonCustomizations: n,
            hasCameraAvailable: d,
            isMuted: x,
            isVideoCall: M,
            isVideoMuted: w,
            moreButton: ae,
            onPositiveButtonClick: F,
            onMuteToggle: W,
            onNegativeButtonClick: ee,
            onVideoMuteToggle: j,
          })
        : u.jsx(g, {
            chat: i,
            connectedParticipantsCount: s,
            hasCameraAvailable: d,
            isCallActive: f,
            isCallOutgoing: b,
            isConnectedLonely: R,
            isMuted: x,
            isSelfHandRaised: P,
            isVideoCall: M,
            isVideoMuted: w,
            isSelfScreenSharing: N,
            isAnyPeerScreenSharing: p,
            isCallLink: y,
            isLinkedGroupCall: D,
            showVideoToggle: Z,
            layoutMode: A,
            onEnd: O,
            onLayoutModeToggle: B,
            onMuteToggle: W,
            onRaiseHandToggle: q,
            onReactionSelect: U,
            onRingParticipant: H,
            onSendMessage: G,
            onToggleParticipantDrawer: z,
            onVideoMuteToggle: j,
            participantStates: K,
            participantsWithoutSelf: Q,
            ringingMoreButton: ae,
            selfReaction: X,
            isGroupCall: E,
            showSendMessage: Y,
          });
    }
    ((b.displayName = b.name + " [from " + i.id + "]"), (l.default = b));
  },
  226,
);
