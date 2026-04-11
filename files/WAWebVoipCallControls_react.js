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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(45),
        n = e.buttonCustomizations,
        a = e.hasCameraAvailable,
        i = e.isMuted,
        l = e.isVideoCall,
        _ = e.isVideoMuted,
        f = e.moreButton,
        g = e.onMuteToggle,
        h = e.onNegativeButtonClick,
        y = e.onPositiveButtonClick,
        C = e.onVideoMuteToggle,
        b = n === void 0 ? m : n,
        v = c(r("WAWebVoipUiPopoutWindowContext")),
        S = v.isContextInPopoutWindow && !v.isDocPip,
        R = b.negativeButton,
        L = b.positiveButton,
        E;
      t[0] !== L.labelKey
        ? ((E = d(L.labelKey)), (t[0] = L.labelKey), (t[1] = E))
        : (E = t[1]);
      var k = E,
        I;
      t[2] !== R.labelKey
        ? ((I = d(R.labelKey)), (t[2] = R.labelKey), (t[3] = I))
        : (I = t[3]);
      var T = I,
        D = R.showLabel !== !1,
        x = R.styleType === "borderless",
        $ = R.styleType === "media",
        P;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = s._(/*BTDS*/ "Call controls")), (t[4] = P))
        : (P = t[4]);
      var N = S ? p.callControlsRowPopout : p.callControlsRow,
        M;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = [p.controlsGroup, p.leftControlsGroup]), (t[5] = M))
        : (M = t[5]);
      var w;
      t[6] !== a || t[7] !== l || t[8] !== _ || t[9] !== C
        ? ((w =
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
            })),
          (t[6] = a),
          (t[7] = l),
          (t[8] = _),
          (t[9] = C),
          (t[10] = w))
        : (w = t[10]);
      var A;
      t[11] !== g
        ? ((A = function () {
            g();
          }),
          (t[11] = g),
          (t[12] = A))
        : (A = t[12]);
      var F;
      t[13] !== i || t[14] !== A
        ? ((F = u.jsx(o("WAWebFlex.react").FlexItem, {
            children: u.jsx(r("WAWebVoipMicDeviceSelector.react"), {
              isMuted: i,
              onMainClick: A,
            }),
          })),
          (t[13] = i),
          (t[14] = A),
          (t[15] = F))
        : (F = t[15]);
      var O;
      t[16] !== w || t[17] !== F
        ? ((O = u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            grow: 0,
            shrink: 1,
            basis: "auto",
            xstyle: M,
            children: [w, F],
          })),
          (t[16] = w),
          (t[17] = F),
          (t[18] = O))
        : (O = t[18]);
      var B;
      t[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = u.jsx(o("WAWebFlex.react").FlexItem, { xstyle: p.spacer })),
          (t[19] = B))
        : (B = t[19]);
      var W;
      t[20] !== f || t[21] !== S
        ? ((W =
            f != null &&
            !S &&
            u.jsx(o("WAWebFlex.react").FlexItem, {
              xstyle: p.buttonWrapper,
              children: f,
            })),
          (t[20] = f),
          (t[21] = S),
          (t[22] = W))
        : (W = t[22]);
      var q;
      t[23] !== x ||
      t[24] !== $ ||
      t[25] !== R.shouldShow ||
      t[26] !== T ||
      t[27] !== h ||
      t[28] !== D ||
      t[29] !== S
        ? ((q =
            R.shouldShow &&
            u.jsx(o("WAWebFlex.react").FlexItem, {
              xstyle: p.buttonWrapper,
              children: x
                ? u.jsx(r("WDSButton.react"), {
                    testid: void 0,
                    type: "default",
                    variant: "borderless",
                    onPress: function () {
                      h();
                    },
                    size: S ? "medium" : "small",
                    xstyle: S ? p.notNowButtonMedium : p.notNowButtonSmall,
                    label: T,
                    "aria-label": T,
                  })
                : $
                  ? u.jsx(r("WDSButton.react"), {
                      testid: void 0,
                      type: "media",
                      onPress: function () {
                        h();
                      },
                      size: S ? "medium" : "small",
                      xstyle: S ? p.callButtonMedium : p.callButtonSmall,
                      label: T,
                      "aria-label": T,
                    })
                  : u.jsx(r("WDSButton.react"), {
                      testid: void 0,
                      type: "destructive",
                      variant: "filled",
                      onPress: function () {
                        h();
                      },
                      Icon: r("WDSIconIcCallEndFilled.react"),
                      size: S ? "medium" : "small",
                      xstyle: [
                        o("WDSThemes").WDSLightTheme,
                        S ? p.callButtonMedium : p.callButtonSmall,
                      ],
                      label: D ? T : void 0,
                      "aria-label": T,
                    }),
            })),
          (t[23] = x),
          (t[24] = $),
          (t[25] = R.shouldShow),
          (t[26] = T),
          (t[27] = h),
          (t[28] = D),
          (t[29] = S),
          (t[30] = q))
        : (q = t[30]);
      var U;
      t[31] !== l ||
      t[32] !== y ||
      t[33] !== L.shouldShow ||
      t[34] !== k ||
      t[35] !== S
        ? ((U =
            L.shouldShow &&
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
                size: S ? "medium" : "small",
                xstyle: [
                  o("WDSThemes").WDSLightTheme,
                  S ? p.callButtonMedium : p.callButtonSmall,
                  p.acceptButton,
                ],
                label: k,
                "aria-label": k,
              }),
            })),
          (t[31] = l),
          (t[32] = y),
          (t[33] = L.shouldShow),
          (t[34] = k),
          (t[35] = S),
          (t[36] = U))
        : (U = t[36]);
      var V;
      t[37] !== W || t[38] !== q || t[39] !== U
        ? ((V = u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            grow: 0,
            shrink: 0,
            basis: "auto",
            xstyle: p.controlsGroup,
            children: [W, q, U],
          })),
          (t[37] = W),
          (t[38] = q),
          (t[39] = U),
          (t[40] = V))
        : (V = t[40]);
      var H;
      return (
        t[41] !== O || t[42] !== V || t[43] !== N
          ? ((H = u.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              justify: "start",
              grow: 1,
              role: "toolbar",
              "aria-label": P,
              xstyle: N,
              children: [O, B, V],
            })),
            (t[41] = O),
            (t[42] = V),
            (t[43] = N),
            (t[44] = H))
          : (H = t[44]),
        H
      );
    }
    function f(e, t) {
      return e
        ? s._(/*BTDS*/ "Layout cannot be changed while screen sharing")
        : t === "grid"
          ? s._(/*BTDS*/ "Switch to speaker view")
          : s._(/*BTDS*/ "Switch to grid view");
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      var t = o("react-compiler-runtime").c(109),
        n = e.chat,
        a = e.connectedParticipantsCount,
        i = e.hasCameraAvailable,
        l = e.isAnyPeerScreenSharing,
        d = e.isCallActive,
        m = e.isCallLink,
        _ = e.isCallOutgoing,
        g = e.isConnectedLonely,
        y = e.isGroupCall,
        v = e.isLinkedGroupCall,
        S = e.isMuted,
        R = e.isSelfHandRaised,
        L = e.isSelfScreenSharing,
        E = e.isVideoCall,
        k = e.isVideoMuted,
        I = e.layoutMode,
        T = e.onEnd,
        D = e.onLayoutModeToggle,
        x = e.onMuteToggle,
        $ = e.onRaiseHandToggle,
        P = e.onReactionSelect,
        N = e.onRingParticipant,
        M = e.onSendMessage,
        w = e.onToggleParticipantDrawer,
        A = e.onVideoMuteToggle,
        F = e.participantStates,
        O = e.participantsWithoutSelf,
        B = e.ringingMoreButton,
        W = e.selfReaction,
        q = e.showSendMessage,
        U = e.showVideoToggle,
        V = a === void 0 ? 0 : a,
        H = m === void 0 ? !1 : m,
        G = _ === void 0 ? !1 : _,
        z = g === void 0 ? !1 : g,
        j = U === void 0 ? !0 : U,
        K = c(r("WAWebVoipUiPopoutWindowContext")),
        Q = K.isContextInPopoutWindow && !K.isDocPip,
        X = c(r("WAWebVoipFullScreenContext")),
        Y = r("useWAWebEventTargetValue")(
          o("WAWebVoipUiPopoutWindowPortalContainer.react")
            .WAWebVoipUiPopoutWindowEventEmitter,
          "setPopoutWindowProps",
          o("WAWebVoipUiPopoutWindowPortalContainer.react")
            .getIsCallActiveInPopoutWindow,
        ),
        J =
          o("useWAWebABPropConfigValue").useABPropConfigValue(
            "web_calling_raise_hands_enabled",
          ) === !0,
        Z = r("useWAWebVoipWindowPopoutTooltipProps")(),
        ee = Z.tooltipAnchorRef,
        te = Z.tooltipOwnerDocument,
        ne = L || l,
        re = d && Q && y && E && I != null && D != null && V > 2,
        oe = X.isFullScreen,
        ae;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((ae = s._(/*BTDS*/ "Call controls")), (t[0] = ae))
        : (ae = t[0]);
      var ie = Q ? p.callControlsRowPopout : p.callControlsRow,
        le = Q ? 1 : 0,
        se = Q ? 0 : "auto",
        ue;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((ue = [p.controlsGroup, p.leftControlsGroup]), (t[1] = ue))
        : (ue = t[1]);
      var ce;
      t[2] !== i ||
      t[3] !== d ||
      t[4] !== H ||
      t[5] !== G ||
      t[6] !== L ||
      t[7] !== E ||
      t[8] !== k ||
      t[9] !== A ||
      t[10] !== j
        ? ((ce =
            j &&
            u.jsx(o("WAWebFlex.react").FlexItem, {
              children: u.jsx(r("WAWebVoipCameraDeviceSelector.react"), {
                isDisabled: (!d && !G) || L || (!E && H),
                disableMainButton: G && !d,
                hasCameraAvailable: i,
                isMuted: k,
                isVideoCall: E,
                onMainClick: function () {
                  A();
                },
              }),
            })),
          (t[2] = i),
          (t[3] = d),
          (t[4] = H),
          (t[5] = G),
          (t[6] = L),
          (t[7] = E),
          (t[8] = k),
          (t[9] = A),
          (t[10] = j),
          (t[11] = ce))
        : (ce = t[11]);
      var de;
      t[12] !== x
        ? ((de = function () {
            x();
          }),
          (t[12] = x),
          (t[13] = de))
        : (de = t[13]);
      var me;
      t[14] !== S || t[15] !== de
        ? ((me = u.jsx(o("WAWebFlex.react").FlexItem, {
            children: u.jsx(r("WAWebVoipMicDeviceSelector.react"), {
              isMuted: S,
              onMainClick: de,
            }),
          })),
          (t[14] = S),
          (t[15] = de),
          (t[16] = me))
        : (me = t[16]);
      var pe;
      t[17] !== ce || t[18] !== me || t[19] !== le || t[20] !== se
        ? ((pe = u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "start",
            grow: le,
            basis: se,
            xstyle: ue,
            children: [ce, me],
          })),
          (t[17] = ce),
          (t[18] = me),
          (t[19] = le),
          (t[20] = se),
          (t[21] = pe))
        : (pe = t[21]);
      var _e;
      t[22] !== n ||
      t[23] !== X.exitFullScreen ||
      t[24] !== l ||
      t[25] !== d ||
      t[26] !== z ||
      t[27] !== y ||
      t[28] !== J ||
      t[29] !== R ||
      t[30] !== L ||
      t[31] !== E ||
      t[32] !== k ||
      t[33] !== $ ||
      t[34] !== P ||
      t[35] !== N ||
      t[36] !== w ||
      t[37] !== A ||
      t[38] !== F ||
      t[39] !== O ||
      t[40] !== W ||
      t[41] !== oe ||
      t[42] !== ee ||
      t[43] !== te ||
      t[44] !== Q
        ? ((_e = Q
            ? u.jsxs(o("WAWebFlex.react").FlexRow, {
                justify: "center",
                xstyle: p.centreControlsGroup,
                children: [
                  J && y
                    ? u.jsx(o("WAWebFlex.react").FlexItem, {
                        children: u.jsx(
                          o("WAWebVoipRaiseHandButton.react")
                            .WAWebVoipRaiseHandButton,
                          {
                            isDisabled: !d || z,
                            isSelfHandRaised: R != null ? R : !1,
                            onRaiseHandToggle: $ != null ? $ : r("WAWebNoop"),
                            tooltipAnchorRef: ee,
                            tooltipOwnerDocument: te,
                          },
                        ),
                      })
                    : null,
                  u.jsx(o("WAWebFlex.react").FlexItem, {
                    children: u.jsx(r("WAWebVoipReactionButton.react"), {
                      isDisabled: !d || z,
                      onReactionSelect: P,
                      selfReaction: W,
                    }),
                  }),
                  u.jsx(o("WAWebFlex.react").FlexItem, {
                    children: u.jsx(h, {
                      isDisabled: !d || z,
                      isSelfScreenSharing: L,
                      isAnyPeerScreenSharing: l,
                      isVideoCall: E,
                      isVideoMuted: k,
                      onVideoMuteToggle: A,
                      tooltipAnchorRef: ee,
                      tooltipOwnerDocument: te,
                    }),
                  }),
                  y &&
                  o("WAWebVoipGatingUtils").isGroupCallingEnabled() &&
                  O != null &&
                  F != null &&
                  N != null
                    ? u.jsx(o("WAWebFlex.react").FlexItem, {
                        children: u.jsx(C, {
                          disabled: z,
                          onToggleParticipantDrawer: w,
                          tooltipAnchorRef: ee,
                          tooltipOwnerDocument: te,
                        }),
                      })
                    : null,
                  n != null &&
                  o("WAWebVoipGatingUtils").isGroupCallingEnabled() &&
                  !y
                    ? u.jsx(o("WAWebFlex.react").FlexItem, {
                        children: u.jsx(b, {
                          chat: n,
                          isVideoCall: E,
                          tooltipAnchorRef: ee,
                          tooltipOwnerDocument: te,
                        }),
                      })
                    : null,
                  oe
                    ? u.jsx(o("WAWebFlex.react").FlexItem, {
                        children: u.jsx(r("WDSTooltip.react"), {
                          label: s._(/*BTDS*/ "Exit full screen (DEV)"),
                          ownerAnchorRef: ee,
                          ownerDocument: te,
                          delayTooltipMs: o("WAWebVoipRaiseHandButton.react")
                            .CALL_CONTROL_TOOLTIP_DELAY_MS,
                          children: u.jsx(r("WDSButton.react"), {
                            testid: void 0,
                            variant: "borderless",
                            onPress: X.exitFullScreen,
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
            : null),
          (t[22] = n),
          (t[23] = X.exitFullScreen),
          (t[24] = l),
          (t[25] = d),
          (t[26] = z),
          (t[27] = y),
          (t[28] = J),
          (t[29] = R),
          (t[30] = L),
          (t[31] = E),
          (t[32] = k),
          (t[33] = $),
          (t[34] = P),
          (t[35] = N),
          (t[36] = w),
          (t[37] = A),
          (t[38] = F),
          (t[39] = O),
          (t[40] = W),
          (t[41] = oe),
          (t[42] = ee),
          (t[43] = te),
          (t[44] = Q),
          (t[45] = _e))
        : (_e = t[45]);
      var fe = Q ? 1 : 0,
        ge = Q ? 0 : "auto",
        he;
      t[46] !== Y ||
      t[47] !== K.isContextInPopoutWindow ||
      t[48] !== ee ||
      t[49] !== te
        ? ((he =
            !K.isContextInPopoutWindow &&
            u.jsx(o("WAWebFlex.react").FlexItem, {
              children: u.jsx(r("WDSTooltip.react"), {
                label: s._(/*BTDS*/ "Move to new window"),
                ownerAnchorRef: ee,
                ownerDocument: te,
                delayTooltipMs: o("WAWebVoipRaiseHandButton.react")
                  .CALL_CONTROL_TOOLTIP_DELAY_MS,
                children: u.jsx(r("WDSButton.react"), {
                  testid: void 0,
                  variant: "borderless",
                  onPress: o("WAWebVoipUiManager").openVoipUiPopoutWindow,
                  disabled: Y,
                  Icon: r("WDSIconWdsIcPipLeftBottomToTopRight.react"),
                  size: "small",
                  xstyle: p.popOutButton,
                  "aria-label": s._(/*BTDS*/ "Move to new window"),
                }),
              }),
            })),
          (t[46] = Y),
          (t[47] = K.isContextInPopoutWindow),
          (t[48] = ee),
          (t[49] = te),
          (t[50] = he))
        : (he = t[50]);
      var ye = B != null && !Q ? B : null,
        Ce;
      t[51] !== n ||
      t[52] !== l ||
      t[53] !== d ||
      t[54] !== Y ||
      t[55] !== z ||
      t[56] !== y ||
      t[57] !== v ||
      t[58] !== R ||
      t[59] !== L ||
      t[60] !== E ||
      t[61] !== k ||
      t[62] !== $ ||
      t[63] !== P ||
      t[64] !== N ||
      t[65] !== M ||
      t[66] !== A ||
      t[67] !== F ||
      t[68] !== O ||
      t[69] !== q ||
      t[70] !== ee ||
      t[71] !== te ||
      t[72] !== Q
        ? ((Ce =
            d && !Q
              ? u.jsx(r("WAWebVoipMoreControlsButton.react"), {
                  chat: n,
                  isAnyPeerScreenSharing: l,
                  isCallActiveInPopoutWindow: Y,
                  isConnectedLonely: z,
                  isGroupCall: y,
                  isLinkedGroupCall: v,
                  isSelfHandRaised: R,
                  isSelfScreenSharing: L,
                  isVideoCall: E,
                  isVideoMuted: k,
                  onRaiseHandToggle: $,
                  onReactionSelect: P,
                  onRingParticipant: N,
                  onSendMessage: M,
                  onVideoMuteToggle: A,
                  participantStates: F,
                  participantsWithoutSelf: O,
                  showSendMessage: q,
                  tooltipAnchorRef: ee,
                  tooltipOwnerDocument: te,
                })
              : null),
          (t[51] = n),
          (t[52] = l),
          (t[53] = d),
          (t[54] = Y),
          (t[55] = z),
          (t[56] = y),
          (t[57] = v),
          (t[58] = R),
          (t[59] = L),
          (t[60] = E),
          (t[61] = k),
          (t[62] = $),
          (t[63] = P),
          (t[64] = N),
          (t[65] = M),
          (t[66] = A),
          (t[67] = F),
          (t[68] = O),
          (t[69] = q),
          (t[70] = ee),
          (t[71] = te),
          (t[72] = Q),
          (t[73] = Ce))
        : (Ce = t[73]);
      var be;
      t[74] !== ne ||
      t[75] !== I ||
      t[76] !== D ||
      t[77] !== re ||
      t[78] !== ee ||
      t[79] !== te ||
      t[80] !== Q
        ? ((be = re
            ? u.jsx(o("WAWebFlex.react").FlexItem, {
                children: u.jsx(r("WDSTooltip.react"), {
                  label: f(ne, I),
                  ownerAnchorRef: ee,
                  ownerDocument: te,
                  delayTooltipMs: o("WAWebVoipRaiseHandButton.react")
                    .CALL_CONTROL_TOOLTIP_DELAY_MS,
                  children: u.jsx(r("WDSButton.react"), {
                    testid: void 0,
                    variant: "borderless",
                    onPress: D,
                    disabled: ne,
                    Icon: r(
                      I === "grid"
                        ? "WDSIconIcVideoCallingGrid.react"
                        : "WDSIconIcGridView.react",
                    ),
                    size: Q ? "medium" : "small",
                    xstyle: Q ? p.centreControlButton : void 0,
                    "aria-label":
                      I === "grid"
                        ? s._(/*BTDS*/ "Switch to speaker view")
                        : s._(/*BTDS*/ "Switch to grid view"),
                  }),
                }),
              })
            : null),
          (t[74] = ne),
          (t[75] = I),
          (t[76] = D),
          (t[77] = re),
          (t[78] = ee),
          (t[79] = te),
          (t[80] = Q),
          (t[81] = be))
        : (be = t[81]);
      var ve;
      t[82] === Symbol.for("react.memo_cache_sentinel")
        ? ((ve = s._(/*BTDS*/ "End call")), (t[82] = ve))
        : (ve = t[82]);
      var Se;
      t[83] !== T
        ? ((Se = function () {
            T();
          }),
          (t[83] = T),
          (t[84] = Se))
        : (Se = t[84]);
      var Re = Q ? "medium" : "small",
        Le = Q ? p.callButtonMedium : p.callButtonSmall,
        Ee;
      t[85] !== Le
        ? ((Ee = [o("WDSThemes").WDSLightTheme, Le]),
          (t[85] = Le),
          (t[86] = Ee))
        : (Ee = t[86]);
      var ke;
      t[87] === Symbol.for("react.memo_cache_sentinel")
        ? ((ke = s._(/*BTDS*/ "End call")), (t[87] = ke))
        : (ke = t[87]);
      var Ie;
      t[88] !== Se || t[89] !== Re || t[90] !== Ee
        ? ((Ie = u.jsx(r("WDSButton.react"), {
            testid: void 0,
            type: "destructive",
            variant: "filled",
            onPress: Se,
            Icon: r("WDSIconIcCallEndFilled.react"),
            size: Re,
            xstyle: Ee,
            "aria-label": ke,
          })),
          (t[88] = Se),
          (t[89] = Re),
          (t[90] = Ee),
          (t[91] = Ie))
        : (Ie = t[91]);
      var Te;
      t[92] !== Ie || t[93] !== ee || t[94] !== te
        ? ((Te = u.jsx(o("WAWebFlex.react").FlexItem, {
            children: u.jsx(r("WDSTooltip.react"), {
              label: ve,
              ownerAnchorRef: ee,
              ownerDocument: te,
              delayTooltipMs: o("WAWebVoipRaiseHandButton.react")
                .CALL_CONTROL_TOOLTIP_DELAY_MS,
              children: Ie,
            }),
          })),
          (t[92] = Ie),
          (t[93] = ee),
          (t[94] = te),
          (t[95] = Te))
        : (Te = t[95]);
      var De;
      t[96] !== fe ||
      t[97] !== ge ||
      t[98] !== he ||
      t[99] !== ye ||
      t[100] !== Ce ||
      t[101] !== be ||
      t[102] !== Te
        ? ((De = u.jsxs(o("WAWebFlex.react").FlexRow, {
            justify: "end",
            shrink: 0,
            grow: fe,
            basis: ge,
            xstyle: p.controlsGroup,
            children: [he, ye, Ce, be, Te],
          })),
          (t[96] = fe),
          (t[97] = ge),
          (t[98] = he),
          (t[99] = ye),
          (t[100] = Ce),
          (t[101] = be),
          (t[102] = Te),
          (t[103] = De))
        : (De = t[103]);
      var xe;
      return (
        t[104] !== pe || t[105] !== _e || t[106] !== De || t[107] !== ie
          ? ((xe = u.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              justify: "all",
              grow: 1,
              role: "toolbar",
              "aria-label": ae,
              xstyle: ie,
              children: [pe, _e, De],
            })),
            (t[104] = pe),
            (t[105] = _e),
            (t[106] = De),
            (t[107] = ie),
            (t[108] = xe))
          : (xe = t[108]),
        xe
      );
    }
    function h(e) {
      var t = o("react-compiler-runtime").c(31),
        n = e.isAnyPeerScreenSharing,
        a = e.isDisabled,
        i = e.isSelfScreenSharing,
        l = e.isVideoCall,
        s = e.isVideoMuted,
        c = e.onVideoMuteToggle,
        d = e.tooltipAnchorRef,
        m = e.tooltipOwnerDocument,
        _ = a === void 0 ? !1 : a,
        f = r("useWAWebVoipModalManager")(),
        g = f.closeModal,
        h = f.openModal,
        C = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          "change:screenShareStates",
          y,
        ),
        b;
      t[0] !== i
        ? ((b = o("WAWebVoipScreenShareHelpers").getScreenShareLabel(i)),
          (t[0] = i),
          (t[1] = b))
        : (b = t[1]);
      var v = i ? "filled" : "borderless",
        S = i ? "destructive" : "default",
        R;
      t[2] !== i
        ? ((R = o("WAWebVoipScreenShareHelpers").getScreenShareLabel(i)),
          (t[2] = i),
          (t[3] = R))
        : (R = t[3]);
      var L = _ || (n && !C),
        E;
      t[4] !== g ||
      t[5] !== n ||
      t[6] !== i ||
      t[7] !== l ||
      t[8] !== s ||
      t[9] !== c ||
      t[10] !== h
        ? ((E = function () {
            o("WAWebVoipScreenShareHelpers").handlePressScreenShare({
              isSelfScreenSharing: i,
              isAnyPeerScreenSharing: n,
              isVideoCall: l,
              isVideoMuted: s,
              onVideoMuteToggle: c,
              openModal: h,
              closeModal: g,
            });
          }),
          (t[4] = g),
          (t[5] = n),
          (t[6] = i),
          (t[7] = l),
          (t[8] = s),
          (t[9] = c),
          (t[10] = h),
          (t[11] = E))
        : (E = t[11]);
      var k;
      t[12] !== n || t[13] !== i
        ? ((k = o("WAWebVoipScreenShareHelpers").getScreenShareIcon(i, n)),
          (t[12] = n),
          (t[13] = i),
          (t[14] = k))
        : (k = t[14]);
      var I = i && o("WDSThemes").WDSDarkTheme,
        T;
      t[15] !== I
        ? ((T = [I, p.centreControlButton]), (t[15] = I), (t[16] = T))
        : (T = t[16]);
      var D;
      t[17] !== i ||
      t[18] !== T ||
      t[19] !== v ||
      t[20] !== S ||
      t[21] !== R ||
      t[22] !== L ||
      t[23] !== E ||
      t[24] !== k
        ? ((D = u.jsx(r("WDSButton.react"), {
            variant: v,
            type: S,
            "aria-label": R,
            "aria-pressed": i,
            disabled: L,
            onPress: E,
            Icon: k,
            size: "medium",
            xstyle: T,
          })),
          (t[17] = i),
          (t[18] = T),
          (t[19] = v),
          (t[20] = S),
          (t[21] = R),
          (t[22] = L),
          (t[23] = E),
          (t[24] = k),
          (t[25] = D))
        : (D = t[25]);
      var x;
      return (
        t[26] !== D || t[27] !== b || t[28] !== d || t[29] !== m
          ? ((x = u.jsx(r("WDSTooltip.react"), {
              label: b,
              ownerAnchorRef: d,
              ownerDocument: m,
              delayTooltipMs: o("WAWebVoipRaiseHandButton.react")
                .CALL_CONTROL_TOOLTIP_DELAY_MS,
              children: D,
            })),
            (t[26] = D),
            (t[27] = b),
            (t[28] = d),
            (t[29] = m),
            (t[30] = x))
          : (x = t[30]),
        x
      );
    }
    function y() {
      var e, t;
      return (e =
        (t = r("WAWebCallCollection").activeCall) == null
          ? void 0
          : t.isSelfScreenShareRejected()) != null
        ? e
        : !1;
    }
    function C(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.disabled,
        a = e.onToggleParticipantDrawer,
        i = e.tooltipAnchorRef,
        l = e.tooltipOwnerDocument,
        c;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = s._(/*BTDS*/ "Participants")), (t[0] = c))
        : (c = t[0]);
      var d = c,
        m;
      t[1] !== n || t[2] !== a
        ? ((m = u.jsx(r("WDSButton.react"), {
            variant: "borderless",
            type: "default",
            "aria-label": d,
            disabled: n,
            onPress: a,
            Icon: r("WDSIconIcGroup.react"),
            size: "medium",
            xstyle: p.centreControlButton,
          })),
          (t[1] = n),
          (t[2] = a),
          (t[3] = m))
        : (m = t[3]);
      var _;
      return (
        t[4] !== m || t[5] !== i || t[6] !== l
          ? ((_ = u.jsx(r("WDSTooltip.react"), {
              label: d,
              ownerAnchorRef: i,
              ownerDocument: l,
              delayTooltipMs: o("WAWebVoipRaiseHandButton.react")
                .CALL_CONTROL_TOOLTIP_DELAY_MS,
              children: m,
            })),
            (t[4] = m),
            (t[5] = i),
            (t[6] = l),
            (t[7] = _))
          : (_ = t[7]),
        _
      );
    }
    function b(e) {
      var t = o("react-compiler-runtime").c(13),
        n = e.chat,
        a = e.disabled,
        i = e.isVideoCall,
        l = e.tooltipAnchorRef,
        c = e.tooltipOwnerDocument,
        d = a === void 0 ? !1 : a,
        m = r("useWAWebVoipModalManager")(),
        _ = m.closeModal,
        f = m.openModal,
        g;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = s._(/*BTDS*/ "Add people")), (t[0] = g))
        : (g = t[0]);
      var h = g,
        y;
      t[1] !== n || t[2] !== _ || t[3] !== i || t[4] !== f
        ? ((y = function () {
            (o("WAWebVoipActivityTracker").trackUiActivity(
              o("WAWebVoipActivityTracker").VoipUiActivity
                .CONTROL_PANEL_ADD_PEOPLE_CLICK,
            ),
              f(
                u.jsx(r("WAWebVoipNewGroupCallContactPicker.react"), {
                  chat: n,
                  isAddingToExistingCall: !0,
                  isVideoCall: i,
                  onClose: _,
                }),
                { blockClose: !0, skipDarkTheme: !0 },
              ));
          }),
          (t[1] = n),
          (t[2] = _),
          (t[3] = i),
          (t[4] = f),
          (t[5] = y))
        : (y = t[5]);
      var C;
      t[6] !== d || t[7] !== y
        ? ((C = u.jsx(r("WDSButton.react"), {
            variant: "borderless",
            "aria-label": h,
            disabled: d,
            onPress: y,
            Icon: r("WDSIconIcPersonAdd.react"),
            size: "medium",
            xstyle: p.centreControlButton,
          })),
          (t[6] = d),
          (t[7] = y),
          (t[8] = C))
        : (C = t[8]);
      var b;
      return (
        t[9] !== C || t[10] !== l || t[11] !== c
          ? ((b = u.jsx(r("WDSTooltip.react"), {
              label: h,
              ownerAnchorRef: l,
              ownerDocument: c,
              delayTooltipMs: o("WAWebVoipRaiseHandButton.react")
                .CALL_CONTROL_TOOLTIP_DELAY_MS,
              children: C,
            })),
            (t[9] = C),
            (t[10] = l),
            (t[11] = c),
            (t[12] = b))
          : (b = t[12]),
        b
      );
    }
    function v(e) {
      var t = o("react-compiler-runtime").c(69),
        n = e.buttonCustomizations,
        a = e.callState,
        i = e.chat,
        l = e.connectedParticipantsCount,
        s = e.hasCameraAvailable,
        d = e.isAnyPeerScreenSharing,
        p = e.isCallActive,
        f = e.isCallLink,
        h = e.isCallOutgoing,
        y = e.isCallRinging,
        C = e.isConnectedLonely,
        b = e.isGroupCall,
        v = e.isInLobby,
        S = e.isLinkedGroupCall,
        R = e.isMuted,
        L = e.isSelfHandRaised,
        E = e.isSelfScreenSharing,
        k = e.isVideoCall,
        I = e.isVideoMuted,
        T = e.layoutMode,
        D = e.onAccept,
        x = e.onEnd,
        $ = e.onLayoutModeToggle,
        P = e.onMuteToggle,
        N = e.onRaiseHandToggle,
        M = e.onReactionSelect,
        w = e.onReject,
        A = e.onRingParticipant,
        F = e.onSendMessage,
        O = e.onToggleParticipantDrawer,
        B = e.onVideoMuteToggle,
        W = e.participantStates,
        q = e.participantsWithoutSelf,
        U = e.selfReaction,
        V = e.showSendMessage,
        H = e.showVideoToggle,
        G = n === void 0 ? m : n,
        z = l === void 0 ? 0 : l,
        j = f === void 0 ? !1 : f,
        K = h === void 0 ? !1 : h,
        Q = C === void 0 ? !1 : C,
        X = b === void 0 ? !1 : b,
        Y = v === void 0 ? !1 : v,
        J = S === void 0 ? !1 : S,
        Z = L === void 0 ? !1 : L,
        ee = H === void 0 ? !0 : H,
        te;
      t[0] !== a || t[1] !== K || t[2] !== Y || t[3] !== x || t[4] !== w
        ? ((te = Y
            ? o("WAWebVoipLobbyUtils").getLobbyNegativeButtonHandler(K, x, w, a)
            : w),
          (t[0] = a),
          (t[1] = K),
          (t[2] = Y),
          (t[3] = x),
          (t[4] = w),
          (t[5] = te))
        : (te = t[5]);
      var ne = te,
        re = r("useWAWebVoipWindowPopoutTooltipProps")(),
        oe = re.tooltipAnchorRef,
        ae = re.tooltipOwnerDocument,
        ie = K && !Y,
        le;
      t[6] !== i ||
      t[7] !== d ||
      t[8] !== Q ||
      t[9] !== X ||
      t[10] !== J ||
      t[11] !== Z ||
      t[12] !== E ||
      t[13] !== k ||
      t[14] !== I ||
      t[15] !== N ||
      t[16] !== M ||
      t[17] !== A ||
      t[18] !== F ||
      t[19] !== B ||
      t[20] !== W ||
      t[21] !== q ||
      t[22] !== ie ||
      t[23] !== oe ||
      t[24] !== ae
        ? ((le = ie
            ? u.jsx(r("WAWebVoipMoreControlsButton.react"), {
                chat: i,
                isCallRinging: !0,
                isConnectedLonely: Q,
                isGroupCall: X,
                isLinkedGroupCall: J,
                isSelfHandRaised: Z,
                isSelfScreenSharing: E,
                isAnyPeerScreenSharing: d,
                isVideoCall: k,
                isVideoMuted: I,
                onRaiseHandToggle: N,
                onReactionSelect: M,
                onRingParticipant: A,
                onSendMessage: F,
                onVideoMuteToggle: B,
                participantStates: W,
                participantsWithoutSelf: q,
                showSendMessage: !1,
                tooltipAnchorRef: oe,
                tooltipOwnerDocument: ae,
              })
            : null),
          (t[6] = i),
          (t[7] = d),
          (t[8] = Q),
          (t[9] = X),
          (t[10] = J),
          (t[11] = Z),
          (t[12] = E),
          (t[13] = k),
          (t[14] = I),
          (t[15] = N),
          (t[16] = M),
          (t[17] = A),
          (t[18] = F),
          (t[19] = B),
          (t[20] = W),
          (t[21] = q),
          (t[22] = ie),
          (t[23] = oe),
          (t[24] = ae),
          (t[25] = le))
        : (le = t[25]);
      var se = le,
        ue = c(r("WAWebVoipUiPopoutWindowContext")),
        ce = ue.isContextInPopoutWindow && !ue.isDocPip,
        de = y && K && ce;
      if ((y || Y) && !de) {
        var me;
        return (
          t[26] !== G ||
          t[27] !== s ||
          t[28] !== R ||
          t[29] !== k ||
          t[30] !== I ||
          t[31] !== ne ||
          t[32] !== D ||
          t[33] !== P ||
          t[34] !== B ||
          t[35] !== se
            ? ((me = u.jsx(_, {
                buttonCustomizations: G,
                hasCameraAvailable: s,
                isMuted: R,
                isVideoCall: k,
                isVideoMuted: I,
                moreButton: se,
                onPositiveButtonClick: D,
                onMuteToggle: P,
                onNegativeButtonClick: ne,
                onVideoMuteToggle: B,
              })),
              (t[26] = G),
              (t[27] = s),
              (t[28] = R),
              (t[29] = k),
              (t[30] = I),
              (t[31] = ne),
              (t[32] = D),
              (t[33] = P),
              (t[34] = B),
              (t[35] = se),
              (t[36] = me))
            : (me = t[36]),
          me
        );
      }
      var pe;
      return (
        t[37] !== i ||
        t[38] !== z ||
        t[39] !== s ||
        t[40] !== d ||
        t[41] !== p ||
        t[42] !== j ||
        t[43] !== K ||
        t[44] !== Q ||
        t[45] !== X ||
        t[46] !== J ||
        t[47] !== R ||
        t[48] !== Z ||
        t[49] !== E ||
        t[50] !== k ||
        t[51] !== I ||
        t[52] !== T ||
        t[53] !== x ||
        t[54] !== $ ||
        t[55] !== P ||
        t[56] !== N ||
        t[57] !== M ||
        t[58] !== A ||
        t[59] !== F ||
        t[60] !== O ||
        t[61] !== B ||
        t[62] !== W ||
        t[63] !== q ||
        t[64] !== se ||
        t[65] !== U ||
        t[66] !== V ||
        t[67] !== ee
          ? ((pe = u.jsx(g, {
              chat: i,
              connectedParticipantsCount: z,
              hasCameraAvailable: s,
              isCallActive: p,
              isCallOutgoing: K,
              isConnectedLonely: Q,
              isMuted: R,
              isSelfHandRaised: Z,
              isVideoCall: k,
              isVideoMuted: I,
              isSelfScreenSharing: E,
              isAnyPeerScreenSharing: d,
              isCallLink: j,
              isLinkedGroupCall: J,
              showVideoToggle: ee,
              layoutMode: T,
              onEnd: x,
              onLayoutModeToggle: $,
              onMuteToggle: P,
              onRaiseHandToggle: N,
              onReactionSelect: M,
              onRingParticipant: A,
              onSendMessage: F,
              onToggleParticipantDrawer: O,
              onVideoMuteToggle: B,
              participantStates: W,
              participantsWithoutSelf: q,
              ringingMoreButton: se,
              selfReaction: U,
              isGroupCall: X,
              showSendMessage: V,
            })),
            (t[37] = i),
            (t[38] = z),
            (t[39] = s),
            (t[40] = d),
            (t[41] = p),
            (t[42] = j),
            (t[43] = K),
            (t[44] = Q),
            (t[45] = X),
            (t[46] = J),
            (t[47] = R),
            (t[48] = Z),
            (t[49] = E),
            (t[50] = k),
            (t[51] = I),
            (t[52] = T),
            (t[53] = x),
            (t[54] = $),
            (t[55] = P),
            (t[56] = N),
            (t[57] = M),
            (t[58] = A),
            (t[59] = F),
            (t[60] = O),
            (t[61] = B),
            (t[62] = W),
            (t[63] = q),
            (t[64] = se),
            (t[65] = U),
            (t[66] = V),
            (t[67] = ee),
            (t[68] = pe))
          : (pe = t[68]),
        pe
      );
    }
    l.default = v;
  },
  226,
);
