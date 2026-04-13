__d(
  "WAWebVoipMoreControlsButton.react",
  [
    "fbt",
    "WAWebCallCollection",
    "WAWebChatCollection",
    "WAWebDefaultReactions",
    "WAWebDropdown.react",
    "WAWebDropdownV2.react",
    "WAWebEmojiPanel.react",
    "WAWebEventEmitter",
    "WAWebMenu.react",
    "WAWebMenuItems.react",
    "WAWebPanelsDisplayLocation",
    "WAWebPopoverContext.react",
    "WAWebSendReactionsTray.react",
    "WAWebUserPrefsMeUser",
    "WAWebVoipActivityTracker",
    "WAWebVoipFullScreenContext",
    "WAWebVoipFullScreenHooks",
    "WAWebVoipGatingUtils",
    "WAWebVoipNewGroupCallContactPicker.react",
    "WAWebVoipParticipantsModal.react",
    "WAWebVoipRaiseHandButton.react",
    "WAWebVoipScreenShareHelpers",
    "WAWebVoipUiPopoutWindowContext",
    "WDSButton.react",
    "WDSIconIcFullscreen.react",
    "WDSIconIcGroup.react",
    "WDSIconIcMoreVert.react",
    "WDSIconIcPersonAdd.react",
    "WDSIconWdsIcChat.react",
    "WDSThemes",
    "WDSTooltip.react",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebABPropConfigValue",
    "useWAWebEventTargetValue",
    "useWAWebVoipModalManager",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useContext,
      _ = d.useEffect,
      f = d.useState,
      g = {
        moreButton: { height: "x10w6t97", $$css: !0 },
        disabledDropdownItem: {
          cursor: "x1h6gzvc",
          opacity: "xbyyjgo",
          $$css: !0,
        },
        transparentDropdownContainer: {
          backgroundColor: "xjbqb8w",
          boxShadow: "x1gnnqk1",
          borderStartStartRadius: "x1bczwif",
          borderStartEndRadius: "x17un8ov",
          borderEndEndRadius: "x1e7945m",
          borderEndStartRadius: "x11o6v7j",
          overflowX: "x1plvlek",
          overflowY: "xryxfnj",
          $$css: !0,
        },
        emojiPickerContainer: {
          backgroundColor: "x16w0wmm",
          borderStartStartRadius: "x6nvzda",
          borderStartEndRadius: "x4i4b9w",
          borderEndEndRadius: "xhl9efl",
          borderEndStartRadius: "xj65ea0",
          boxShadow: "xgfgw2k",
          $$css: !0,
        },
        optionsMenuContainer: {
          backgroundColor: "x16w0wmm",
          borderStartStartRadius: "x6nvzda",
          borderStartEndRadius: "x4i4b9w",
          borderEndEndRadius: "xhl9efl",
          borderEndStartRadius: "xj65ea0",
          boxShadow: "xgfgw2k",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          alignItems: "x1qjc9v5",
          color: "x14ug900",
          $$css: !0,
        },
      },
      h = 150,
      y = {
        CLOSED: "closed",
        STACKED_TRAYS: "stacked_trays",
        EMOJI_PICKER: "emoji_picker",
      };
    function C(t) {
      var n,
        a,
        i = o("react-compiler-runtime").c(140),
        l = t.chat,
        u = t.isAnyPeerScreenSharing,
        d = t.isCallActiveInPopoutWindow,
        m = t.isCallRinging,
        C = t.isConnectedLonely,
        S = t.isGroupCall,
        R = t.isLinkedGroupCall,
        L = t.isSelfHandRaised,
        E = t.isSelfScreenSharing,
        k = t.isVideoCall,
        I = t.isVideoMuted,
        T = t.onRaiseHandToggle,
        D = t.onReactionSelect,
        x = t.onRingParticipant,
        $ = t.onSendMessage,
        P = t.onVideoMuteToggle,
        N = t.participantStates,
        M = t.participantsWithoutSelf,
        w = t.showSendMessage,
        A = t.tooltipAnchorRef,
        F = t.tooltipOwnerDocument,
        O = d === void 0 ? !1 : d,
        B = m === void 0 ? !1 : m,
        W = C === void 0 ? !1 : C,
        q = S === void 0 ? !1 : S,
        U = L === void 0 ? !1 : L,
        V = p(r("WAWebVoipUiPopoutWindowContext")),
        H = p(r("WAWebVoipFullScreenContext")),
        G = r("useWAWebVoipModalManager")(),
        z = G.closeModal,
        j = G.openModal,
        K;
      i[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((K = c.createRef()), (i[0] = K))
        : (K = i[0]);
      var Q = K,
        X =
          o("WAWebVoipFullScreenHooks").useShouldShowFullScreenToggle() &&
          !O &&
          !B,
        Y = o("WAWebPopoverContext.react").useWAWebPopoverControllerRef(),
        J = o("WAWebPopoverContext.react").useWAWebPopoverControllerRef(),
        Z =
          o("useWAWebABPropConfigValue").useABPropConfigValue(
            "web_calling_raise_hands_enabled",
          ) === !0,
        ee = f(y.CLOSED),
        te = ee[0],
        ne = ee[1],
        re;
      i[1] !== Y
        ? ((re = function (t) {
            var e = t === void 0 ? !1 : t;
            if (!e) {
              var n;
              (n = Y.current) == null || n.hidePopover();
            }
            ne(y.CLOSED);
          }),
          (i[1] = Y),
          (i[2] = re))
        : (re = i[2]);
      var oe = re,
        ae;
      i[3] !== J
        ? ((ae = function (t) {
            var e = t === void 0 ? !1 : t;
            if (!e) {
              var n;
              (n = J.current) == null || n.hidePopover();
            }
            ne(y.CLOSED);
          }),
          (i[3] = J),
          (i[4] = ae))
        : (ae = i[4]);
      var ie = ae,
        le;
      i[5] !== te || i[6] !== ie || i[7] !== oe || i[8] !== Y
        ? ((le = function () {
            if (
              (o("WAWebVoipActivityTracker").trackUiActivity(
                o("WAWebVoipActivityTracker").VoipUiActivity
                  .CONTROL_PANEL_MORE_OPTIONS_CLICK,
              ),
              te === y.CLOSED)
            ) {
              var e;
              (ne(y.STACKED_TRAYS), (e = Y.current) == null || e.showPopover());
            } else (oe(), ie());
          }),
          (i[5] = te),
          (i[6] = ie),
          (i[7] = oe),
          (i[8] = Y),
          (i[9] = le))
        : (le = i[9]);
      var se = le,
        ue;
      i[10] !== oe || i[11] !== J || i[12] !== D || i[13] !== Y
        ? ((ue = function (t) {
            if (t === o("WAWebSendReactionsTray.react").MORE_REACTIONS) {
              var e;
              ((e = Y.current) == null || e.hidePopover(),
                self.setTimeout(function () {
                  var e;
                  (ne(y.EMOJI_PICKER),
                    (e = J.current) == null || e.showPopover());
                }, h));
            } else (D == null || D(t), oe());
          }),
          (i[10] = oe),
          (i[11] = J),
          (i[12] = D),
          (i[13] = Y),
          (i[14] = ue))
        : (ue = i[14]);
      var ce = ue,
        de;
      i[15] !== ie || i[16] !== D
        ? ((de = function (t) {
            (D == null || D(t), ie());
          }),
          (i[15] = ie),
          (i[16] = D),
          (i[17] = de))
        : (de = i[17]);
      var me = de,
        pe;
      i[18] !== oe
        ? ((pe = function () {
            oe(!0);
          }),
          (i[18] = oe),
          (i[19] = pe))
        : (pe = i[19]);
      var _e = pe,
        fe;
      i[20] !== ie
        ? ((fe = function () {
            ie(!0);
          }),
          (i[20] = ie),
          (i[21] = fe))
        : (fe = i[21]);
      var ge = fe,
        he = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          "change:screenShareStates",
          v,
        ),
        ye;
      i[22] !== z ||
      i[23] !== oe ||
      i[24] !== u ||
      i[25] !== E ||
      i[26] !== k ||
      i[27] !== I ||
      i[28] !== P ||
      i[29] !== j
        ? ((ye = function () {
            (oe(),
              o("WAWebVoipScreenShareHelpers").handlePressScreenShare({
                isSelfScreenSharing: E,
                isAnyPeerScreenSharing: u,
                isVideoCall: k,
                isVideoMuted: I,
                onVideoMuteToggle: P,
                openModal: j,
                closeModal: z,
              }));
          }),
          (i[22] = z),
          (i[23] = oe),
          (i[24] = u),
          (i[25] = E),
          (i[26] = k),
          (i[27] = I),
          (i[28] = P),
          (i[29] = j),
          (i[30] = ye))
        : (ye = i[30]);
      var Ce = ye,
        be;
      i[31] !== oe || i[32] !== $
        ? ((be = function () {
            (o("WAWebVoipActivityTracker").trackUiActivity(
              o("WAWebVoipActivityTracker").VoipUiActivity
                .CONTROL_PANEL_SEND_MESSAGE_CLICK,
            ),
              oe(),
              $());
          }),
          (i[31] = oe),
          (i[32] = $),
          (i[33] = be))
        : (be = i[33]);
      var ve = be,
        Se;
      i[34] !== oe || i[35] !== T
        ? ((Se = function () {
            (oe(), T == null || T());
          }),
          (i[34] = oe),
          (i[35] = T),
          (i[36] = Se))
        : (Se = i[36]);
      var Re = Se,
        Le;
      i[37] !== oe || i[38] !== H
        ? ((Le = function () {
            (oe(), H.enterFullScreen());
          }),
          (i[37] = oe),
          (i[38] = H),
          (i[39] = Le))
        : (Le = i[39]);
      var Ee = Le,
        ke;
      i[40] !== l || i[41] !== z || i[42] !== oe || i[43] !== k || i[44] !== j
        ? ((ke = function () {
            var e =
              l != null
                ? l
                : o("WAWebChatCollection").ChatCollection.getLatestChatForWid(
                    o("WAWebUserPrefsMeUser").getMeUser(),
                  );
            e != null &&
              (o("WAWebVoipActivityTracker").trackUiActivity(
                o("WAWebVoipActivityTracker").VoipUiActivity
                  .CONTROL_PANEL_ADD_PEOPLE_CLICK,
              ),
              oe(),
              j(
                c.jsx(r("WAWebVoipNewGroupCallContactPicker.react"), {
                  chat: e,
                  isAddingToExistingCall: !0,
                  isVideoCall: k,
                  onClose: z,
                }),
                { blockClose: !0, skipDarkTheme: !0 },
              ));
          }),
          (i[40] = l),
          (i[41] = z),
          (i[42] = oe),
          (i[43] = k),
          (i[44] = j),
          (i[45] = ke))
        : (ke = i[45]);
      var Ie = ke,
        Te = f(b),
        De = Te[0],
        xe,
        $e;
      (i[46] !== De || i[47] !== N || i[48] !== M
        ? ((xe = function () {
            De.trigger("update", {
              participantStates: N,
              participantsWithoutSelf: M,
            });
          }),
          ($e = [N, M, De]),
          (i[46] = De),
          (i[47] = N),
          (i[48] = M),
          (i[49] = xe),
          (i[50] = $e))
        : ((xe = i[49]), ($e = i[50])),
        _(xe, $e));
      var Pe;
      i[51] !== z ||
      i[52] !== oe ||
      i[53] !== x ||
      i[54] !== j ||
      i[55] !== De ||
      i[56] !== N ||
      i[57] !== M
        ? ((Pe = function () {
            (o("WAWebVoipActivityTracker").trackUiActivity(
              o("WAWebVoipActivityTracker").VoipUiActivity
                .CONTROL_PANEL_PARTICIPANT_DRAWER_TOGGLE,
            ),
              oe(),
              M != null &&
                N != null &&
                x != null &&
                j(
                  c.jsx(r("WAWebVoipParticipantsModal.react"), {
                    call: r("WAWebCallCollection").activeCall,
                    onClose: z,
                    onRingParticipant: x,
                    initialParticipantStates: N,
                    initialParticipantsWithoutSelf: M,
                    participantDataEmitter: De,
                  }),
                  { skipDarkTheme: !0 },
                ));
          }),
          (i[51] = z),
          (i[52] = oe),
          (i[53] = x),
          (i[54] = j),
          (i[55] = De),
          (i[56] = N),
          (i[57] = M),
          (i[58] = Pe))
        : (Pe = i[58]);
      var Ne = Pe,
        Me;
      i[59] === Symbol.for("react.memo_cache_sentinel")
        ? ((Me = s._(/*BTDS*/ "More options")), (i[59] = Me))
        : (Me = i[59]);
      var we = Me,
        Ae;
      i[60] !== U
        ? ((Ae = U ? s._(/*BTDS*/ "Lower hand") : s._(/*BTDS*/ "Raise hand")),
          (i[60] = U),
          (i[61] = Ae))
        : (Ae = i[61]);
      var Fe = Ae,
        Oe = te !== y.CLOSED,
        Be;
      i[62] !== se || i[63] !== Oe
        ? ((Be = c.jsx(r("WDSButton.react"), {
            ref: Q,
            variant: "borderless",
            "aria-label": we,
            "aria-expanded": Oe,
            onPress: se,
            Icon: r("WDSIconIcMoreVert.react"),
            size: "small",
            xstyle: g.moreButton,
          })),
          (i[62] = se),
          (i[63] = Oe),
          (i[64] = Be))
        : (Be = i[64]);
      var We;
      i[65] !== Be || i[66] !== A || i[67] !== F
        ? ((We = c.jsx(r("WDSTooltip.react"), {
            label: we,
            ownerAnchorRef: A,
            ownerDocument: F,
            delayTooltipMs: o("WAWebVoipRaiseHandButton.react")
              .CALL_CONTROL_TOOLTIP_DELAY_MS,
            children: Be,
          })),
          (i[65] = Be),
          (i[66] = A),
          (i[67] = F),
          (i[68] = We))
        : (We = i[68]);
      var qe = (n = V.popoverPortalEl) != null ? n : void 0,
        Ue;
      i[69] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ue = { className: "x78zum5 xdt5ytf x1qjc9v5" }), (i[69] = Ue))
        : (Ue = i[69]);
      var Ve;
      i[70] !== ce || i[71] !== B || i[72] !== W
        ? ((Ve =
            !B &&
            !W &&
            c.jsx(
              "div",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props(o("WDSThemes").WDSDarkTheme),
                {
                  children: c.jsx(
                    o("WAWebSendReactionsTray.react").SendReactionsTray,
                    {
                      isInlineMode: !0,
                      isParentMsgSentByMe: !1,
                      selectedCallback: ce,
                      reactions: o("WAWebDefaultReactions").DEFAULT_REACTIONS,
                      showMoreOption: !0,
                    },
                  ),
                },
              ),
            )),
          (i[70] = ce),
          (i[71] = B),
          (i[72] = W),
          (i[73] = Ve))
        : (Ve = i[73]);
      var He;
      i[74] !== B || i[75] !== W
        ? ((He = !B && !W && c.jsx("div", { className: "xiryn5a" })),
          (i[74] = B),
          (i[75] = W),
          (i[76] = He))
        : (He = i[76]);
      var Ge;
      i[77] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ge = (e || (e = r("stylex"))).props(
            o("WDSThemes").WDSDarkTheme,
            g.optionsMenuContainer,
          )),
          (i[77] = Ge))
        : (Ge = i[77]);
      var ze;
      i[78] !== Re ||
      i[79] !== B ||
      i[80] !== W ||
      i[81] !== q ||
      i[82] !== Z ||
      i[83] !== U ||
      i[84] !== Fe
        ? ((ze =
            Z &&
            q &&
            !B &&
            !W &&
            c.jsx(o("WAWebMenuItems.react").SelectMenuItemGroup, {
              onSelect: Re,
              children: c.jsx(o("WAWebMenuItems.react").SelectMenuItem, {
                optionId: "raise-hand",
                primary: Fe,
                detailLeft: c.jsx(
                  o("WAWebVoipRaiseHandButton.react").RaiseHandIcon,
                  { isRaised: U },
                ),
                ariaLabel: Fe,
              }),
            })),
          (i[78] = Re),
          (i[79] = B),
          (i[80] = W),
          (i[81] = q),
          (i[82] = Z),
          (i[83] = U),
          (i[84] = Fe),
          (i[85] = ze))
        : (ze = i[85]);
      var je;
      i[86] !== Ie || i[87] !== W || i[88] !== R
        ? ((je =
            o("WAWebVoipGatingUtils").isGroupCallingEnabled() && !R && !W
              ? c.jsx(o("WAWebMenuItems.react").SelectMenuItemGroup, {
                  onSelect: Ie,
                  children: c.jsx(o("WAWebMenuItems.react").SelectMenuItem, {
                    optionId: "add-people",
                    primary: s._(/*BTDS*/ "Add people"),
                    detailLeft: c.jsx(r("WDSIconIcPersonAdd.react"), {}),
                    ariaLabel: s._(/*BTDS*/ "Add people"),
                  }),
                })
              : null),
          (i[86] = Ie),
          (i[87] = W),
          (i[88] = R),
          (i[89] = je))
        : (je = i[89]);
      var Ke;
      i[90] !== Ne ||
      i[91] !== q ||
      i[92] !== x ||
      i[93] !== N ||
      i[94] !== M ||
      i[95] !== A ||
      i[96] !== F
        ? ((Ke =
            q &&
            o("WAWebVoipGatingUtils").isGroupCallingEnabled() &&
            M != null &&
            N != null &&
            x != null
              ? c.jsx(r("WDSTooltip.react"), {
                  label: s._(/*BTDS*/ "Participants"),
                  ownerAnchorRef: A,
                  ownerDocument: F,
                  delayTooltipMs: o("WAWebVoipRaiseHandButton.react")
                    .CALL_CONTROL_TOOLTIP_DELAY_MS,
                  children: c.jsx(
                    o("WAWebMenuItems.react").SelectMenuItemGroup,
                    {
                      onSelect: Ne,
                      children: c.jsx(
                        o("WAWebMenuItems.react").SelectMenuItem,
                        {
                          optionId: "participants",
                          primary: s._(/*BTDS*/ "Participants"),
                          detailLeft: c.jsx(r("WDSIconIcGroup.react"), {}),
                          ariaLabel: s._(/*BTDS*/ "Participants"),
                        },
                      ),
                    },
                  ),
                })
              : null),
          (i[90] = Ne),
          (i[91] = q),
          (i[92] = x),
          (i[93] = N),
          (i[94] = M),
          (i[95] = A),
          (i[96] = F),
          (i[97] = Ke))
        : (Ke = i[97]);
      var Qe;
      i[98] !== Ce ||
      i[99] !== u ||
      i[100] !== B ||
      i[101] !== W ||
      i[102] !== he ||
      i[103] !== E
        ? ((Qe =
            !B &&
            !W &&
            c.jsx(o("WAWebMenuItems.react").SelectMenuItemGroup, {
              onSelect: Ce,
              children: c.jsx(o("WAWebMenuItems.react").SelectMenuItem, {
                optionId: "share-screen",
                primary: o("WAWebVoipScreenShareHelpers").getScreenShareLabel(
                  E,
                ),
                detailLeft: c.jsx(
                  o("WAWebVoipScreenShareHelpers").ScreenShareIcon,
                  { isSelfScreenSharing: E, isAnyPeerScreenSharing: u },
                ),
                disabled: u && !he,
                middlecontainerXStyle: [u && !he && g.disabledDropdownItem],
                ariaLabel: o("WAWebVoipScreenShareHelpers").getScreenShareLabel(
                  E,
                ),
              }),
            })),
          (i[98] = Ce),
          (i[99] = u),
          (i[100] = B),
          (i[101] = W),
          (i[102] = he),
          (i[103] = E),
          (i[104] = Qe))
        : (Qe = i[104]);
      var Xe;
      i[105] !== ve || i[106] !== W || i[107] !== w
        ? ((Xe =
            w && !W
              ? c.jsx(o("WAWebMenuItems.react").SelectMenuItemGroup, {
                  onSelect: ve,
                  children: c.jsx(o("WAWebMenuItems.react").SelectMenuItem, {
                    optionId: "send-message",
                    primary: s._(/*BTDS*/ "Send message"),
                    detailLeft: c.jsx(r("WDSIconWdsIcChat.react"), {}),
                    ariaLabel: s._(/*BTDS*/ "Send message"),
                  }),
                })
              : null),
          (i[105] = ve),
          (i[106] = W),
          (i[107] = w),
          (i[108] = Xe))
        : (Xe = i[108]);
      var Ye;
      i[109] !== Ee || i[110] !== X
        ? ((Ye = X
            ? c.jsx(o("WAWebMenuItems.react").SelectMenuItemGroup, {
                onSelect: Ee,
                children: c.jsx(o("WAWebMenuItems.react").SelectMenuItem, {
                  optionId: "dev-full-screen",
                  primary: s._(/*BTDS*/ "Full screen (DEV)"),
                  detailLeft: c.jsx(r("WDSIconIcFullscreen.react"), {}),
                  ariaLabel: s._(/*BTDS*/ "Full screen (DEV)"),
                }),
              })
            : null),
          (i[109] = Ee),
          (i[110] = X),
          (i[111] = Ye))
        : (Ye = i[111]);
      var Je;
      i[112] !== ze ||
      i[113] !== je ||
      i[114] !== Ke ||
      i[115] !== Qe ||
      i[116] !== Xe ||
      i[117] !== Ye
        ? ((Je = c.jsx(
            "div",
            babelHelpers.extends({}, Ge, {
              children: c.jsxs(o("WAWebMenu.react").WAWebMenu, {
                children: [ze, je, Ke, Qe, Xe, Ye],
              }),
            }),
          )),
          (i[112] = ze),
          (i[113] = je),
          (i[114] = Ke),
          (i[115] = Qe),
          (i[116] = Xe),
          (i[117] = Ye),
          (i[118] = Je))
        : (Je = i[118]);
      var Ze;
      i[119] !== Ve || i[120] !== He || i[121] !== Je
        ? ((Ze = c.jsxs(
            "div",
            babelHelpers.extends({}, Ue, { children: [Ve, He, Je] }),
          )),
          (i[119] = Ve),
          (i[120] = He),
          (i[121] = Je),
          (i[122] = Ze))
        : (Ze = i[122]);
      var et;
      i[123] !== _e || i[124] !== Y || i[125] !== qe || i[126] !== Ze
        ? ((et = c.jsx(o("WAWebDropdownV2.react").DropdownV2, {
            popoverPortal: qe,
            position: o("WAWebDropdownV2.react").PopoverPosition.Top,
            alignment: o("WAWebDropdownV2.react").PopoverAlignment.End,
            controllerRef: Y,
            target: Q,
            initHandling: "controllable",
            onClose: _e,
            xstyle: g.transparentDropdownContainer,
            children: Ze,
          })),
          (i[123] = _e),
          (i[124] = Y),
          (i[125] = qe),
          (i[126] = Ze),
          (i[127] = et))
        : (et = i[127]);
      var tt = (a = V.popoverPortalEl) != null ? a : void 0,
        nt;
      i[128] === Symbol.for("react.memo_cache_sentinel")
        ? ((nt = (e || (e = r("stylex"))).props(
            o("WDSThemes").WDSDarkTheme,
            g.emojiPickerContainer,
          )),
          (i[128] = nt))
        : (nt = i[128]);
      var rt;
      i[129] !== me
        ? ((rt = c.jsx("div", {
            className: "dark color-refresh",
            children: c.jsx(
              "div",
              babelHelpers.extends({}, nt, {
                children: c.jsx(r("WAWebEmojiPanel.react"), {
                  displayLocation: o("WAWebPanelsDisplayLocation")
                    .DisplayLocation.Reactions,
                  onEmoji: me,
                  width: o("WAWebDropdown.react").REACTIONS_PANEL_WIDTH,
                }),
              }),
            ),
          })),
          (i[129] = me),
          (i[130] = rt))
        : (rt = i[130]);
      var ot;
      i[131] !== J || i[132] !== ge || i[133] !== tt || i[134] !== rt
        ? ((ot = c.jsx(o("WAWebDropdownV2.react").DropdownV2, {
            popoverPortal: tt,
            position: o("WAWebDropdownV2.react").PopoverPosition.Top,
            alignment: o("WAWebDropdownV2.react").PopoverAlignment.End,
            controllerRef: J,
            target: Q,
            initHandling: "controllable",
            onClose: ge,
            minWidth: o("WAWebDropdown.react").REACTIONS_PANEL_WIDTH,
            xstyle: g.transparentDropdownContainer,
            children: rt,
          })),
          (i[131] = J),
          (i[132] = ge),
          (i[133] = tt),
          (i[134] = rt),
          (i[135] = ot))
        : (ot = i[135]);
      var at;
      return (
        i[136] !== We || i[137] !== et || i[138] !== ot
          ? ((at = c.jsxs(c.Fragment, { children: [We, et, ot] })),
            (i[136] = We),
            (i[137] = et),
            (i[138] = ot),
            (i[139] = at))
          : (at = i[139]),
        at
      );
    }
    function b() {
      return new (r("WAWebEventEmitter"))();
    }
    function v() {
      var e, t;
      return (e =
        (t = r("WAWebCallCollection").activeCall) == null
          ? void 0
          : t.isSelfScreenShareRejected()) != null
        ? e
        : !1;
    }
    l.default = C;
  },
  226,
);
