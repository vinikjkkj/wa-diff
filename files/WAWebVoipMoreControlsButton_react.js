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
        i = t.chat,
        l = t.isAnyPeerScreenSharing,
        u = t.isCallActiveInPopoutWindow,
        d = u === void 0 ? !1 : u,
        C = t.isCallRinging,
        b = C === void 0 ? !1 : C,
        v = t.isConnectedLonely,
        S = v === void 0 ? !1 : v,
        R = t.isGroupCall,
        L = R === void 0 ? !1 : R,
        E = t.isLinkedGroupCall,
        k = t.isSelfHandRaised,
        I = k === void 0 ? !1 : k,
        T = t.isSelfScreenSharing,
        D = t.isVideoCall,
        x = t.isVideoMuted,
        $ = t.onRaiseHandToggle,
        P = t.onReactionSelect,
        N = t.onRingParticipant,
        M = t.onSendMessage,
        w = t.onVideoMuteToggle,
        A = t.participantStates,
        F = t.participantsWithoutSelf,
        O = t.showSendMessage,
        B = t.tooltipAnchorRef,
        W = t.tooltipOwnerDocument,
        q = p(r("WAWebVoipUiPopoutWindowContext")),
        U = p(r("WAWebVoipFullScreenContext")),
        V = r("useWAWebVoipModalManager")(),
        H = V.closeModal,
        G = V.openModal,
        z = c.createRef(),
        j =
          o("WAWebVoipFullScreenHooks").useShouldShowFullScreenToggle() &&
          !d &&
          !b,
        K = o("WAWebPopoverContext.react").useWAWebPopoverControllerRef(),
        Q = o("WAWebPopoverContext.react").useWAWebPopoverControllerRef(),
        X =
          o("useWAWebABPropConfigValue").useABPropConfigValue(
            "web_calling_raise_hands_enabled",
          ) === !0,
        Y = f(y.CLOSED),
        J = Y[0],
        Z = Y[1],
        ee = m(
          function (e) {
            if ((e === void 0 && (e = !1), !e)) {
              var t;
              (t = K.current) == null || t.hidePopover();
            }
            Z(y.CLOSED);
          },
          [K],
        ),
        te = m(
          function (e) {
            if ((e === void 0 && (e = !1), !e)) {
              var t;
              (t = Q.current) == null || t.hidePopover();
            }
            Z(y.CLOSED);
          },
          [Q],
        ),
        ne = function () {
          if (
            (o("WAWebVoipActivityTracker").trackUiActivity(
              o("WAWebVoipActivityTracker").VoipUiActivity
                .CONTROL_PANEL_MORE_OPTIONS_CLICK,
            ),
            J === y.CLOSED)
          ) {
            var e;
            (Z(y.STACKED_TRAYS), (e = K.current) == null || e.showPopover());
          } else (ee(), te());
        },
        re = function (t) {
          if (t === o("WAWebSendReactionsTray.react").MORE_REACTIONS) {
            var e;
            ((e = K.current) == null || e.hidePopover(),
              self.setTimeout(function () {
                var e;
                (Z(y.EMOJI_PICKER), (e = Q.current) == null || e.showPopover());
              }, h));
          } else (P == null || P(t), ee());
        },
        oe = function (t) {
          (P == null || P(t), te());
        },
        ae = m(
          function () {
            ee(!0);
          },
          [ee],
        ),
        ie = m(
          function () {
            te(!0);
          },
          [te],
        ),
        le = r("useWAWebEventTargetValue")(
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
        ),
        se = function () {
          (ee(),
            o("WAWebVoipScreenShareHelpers").handlePressScreenShare({
              isSelfScreenSharing: T,
              isAnyPeerScreenSharing: l,
              isVideoCall: D,
              isVideoMuted: x,
              onVideoMuteToggle: w,
              openModal: G,
              closeModal: H,
            }));
        },
        ue = function () {
          (o("WAWebVoipActivityTracker").trackUiActivity(
            o("WAWebVoipActivityTracker").VoipUiActivity
              .CONTROL_PANEL_SEND_MESSAGE_CLICK,
          ),
            ee(),
            M());
        },
        ce = function () {
          (ee(), $ == null || $());
        },
        de = function () {
          (ee(), U.enterFullScreen());
        },
        me = function () {
          var e =
            i != null
              ? i
              : o("WAWebChatCollection").ChatCollection.getLatestChatForWid(
                  o("WAWebUserPrefsMeUser").getMeUser(),
                );
          e != null &&
            (o("WAWebVoipActivityTracker").trackUiActivity(
              o("WAWebVoipActivityTracker").VoipUiActivity
                .CONTROL_PANEL_ADD_PEOPLE_CLICK,
            ),
            ee(),
            G(
              c.jsx(r("WAWebVoipNewGroupCallContactPicker.react"), {
                chat: e,
                isAddingToExistingCall: !0,
                isVideoCall: D,
                onClose: H,
              }),
              { blockClose: !0, skipDarkTheme: !0 },
            ));
        },
        pe = f(function () {
          return new (r("WAWebEventEmitter"))();
        }),
        _e = pe[0];
      _(
        function () {
          _e.trigger("update", {
            participantStates: A,
            participantsWithoutSelf: F,
          });
        },
        [A, F, _e],
      );
      var fe = function () {
          (o("WAWebVoipActivityTracker").trackUiActivity(
            o("WAWebVoipActivityTracker").VoipUiActivity
              .CONTROL_PANEL_PARTICIPANT_DRAWER_TOGGLE,
          ),
            ee(),
            F != null &&
              A != null &&
              N != null &&
              G(
                c.jsx(r("WAWebVoipParticipantsModal.react"), {
                  call: r("WAWebCallCollection").activeCall,
                  onClose: H,
                  onRingParticipant: N,
                  initialParticipantStates: A,
                  initialParticipantsWithoutSelf: F,
                  participantDataEmitter: _e,
                }),
                { skipDarkTheme: !0 },
              ));
        },
        ge = s._(/*BTDS*/ "More options"),
        he = I ? s._(/*BTDS*/ "Lower hand") : s._(/*BTDS*/ "Raise hand");
      return c.jsxs(c.Fragment, {
        children: [
          c.jsx(r("WDSTooltip.react"), {
            label: ge,
            ownerAnchorRef: B,
            ownerDocument: W,
            delayTooltipMs: o("WAWebVoipRaiseHandButton.react")
              .CALL_CONTROL_TOOLTIP_DELAY_MS,
            children: c.jsx(r("WDSButton.react"), {
              ref: z,
              variant: "borderless",
              "aria-label": ge,
              "aria-expanded": J !== y.CLOSED,
              onPress: ne,
              Icon: r("WDSIconIcMoreVert.react"),
              size: "small",
              xstyle: g.moreButton,
            }),
          }),
          c.jsx(o("WAWebDropdownV2.react").DropdownV2, {
            popoverPortal: (n = q.popoverPortalEl) != null ? n : void 0,
            position: o("WAWebDropdownV2.react").PopoverPosition.Top,
            alignment: o("WAWebDropdownV2.react").PopoverAlignment.End,
            controllerRef: K,
            target: z,
            initHandling: "controllable",
            onClose: ae,
            xstyle: g.transparentDropdownContainer,
            children: c.jsxs("div", {
              className: "x78zum5 xdt5ytf x1qjc9v5",
              children: [
                !b &&
                  !S &&
                  c.jsx(
                    "div",
                    babelHelpers.extends(
                      {},
                      (e || (e = r("stylex"))).props(
                        o("WDSThemes").WDSDarkTheme,
                      ),
                      {
                        children: c.jsx(
                          o("WAWebSendReactionsTray.react").SendReactionsTray,
                          {
                            isInlineMode: !0,
                            isParentMsgSentByMe: !1,
                            selectedCallback: re,
                            reactions: o("WAWebDefaultReactions")
                              .DEFAULT_REACTIONS,
                            showMoreOption: !0,
                          },
                        ),
                      },
                    ),
                  ),
                !b && !S && c.jsx("div", { className: "xiryn5a" }),
                c.jsx(
                  "div",
                  babelHelpers.extends(
                    {},
                    (e || (e = r("stylex"))).props(
                      o("WDSThemes").WDSDarkTheme,
                      g.optionsMenuContainer,
                    ),
                    {
                      children: c.jsxs(o("WAWebMenu.react").WAWebMenu, {
                        children: [
                          X &&
                            L &&
                            !b &&
                            !S &&
                            c.jsx(
                              o("WAWebMenuItems.react").SelectMenuItemGroup,
                              {
                                onSelect: ce,
                                children: c.jsx(
                                  o("WAWebMenuItems.react").SelectMenuItem,
                                  {
                                    optionId: "raise-hand",
                                    primary: he,
                                    detailLeft: c.jsx(
                                      o("WAWebVoipRaiseHandButton.react")
                                        .RaiseHandIcon,
                                      { isRaised: I },
                                    ),
                                    ariaLabel: he,
                                  },
                                ),
                              },
                            ),
                          o("WAWebVoipGatingUtils").isGroupCallingEnabled() &&
                          !E &&
                          !S
                            ? c.jsx(
                                o("WAWebMenuItems.react").SelectMenuItemGroup,
                                {
                                  onSelect: me,
                                  children: c.jsx(
                                    o("WAWebMenuItems.react").SelectMenuItem,
                                    {
                                      optionId: "add-people",
                                      primary: s._(/*BTDS*/ "Add people"),
                                      detailLeft: c.jsx(
                                        r("WDSIconIcPersonAdd.react"),
                                        {},
                                      ),
                                      ariaLabel: s._(/*BTDS*/ "Add people"),
                                    },
                                  ),
                                },
                              )
                            : null,
                          L &&
                          o("WAWebVoipGatingUtils").isGroupCallingEnabled() &&
                          F != null &&
                          A != null &&
                          N != null
                            ? c.jsx(r("WDSTooltip.react"), {
                                label: s._(/*BTDS*/ "Participants"),
                                ownerAnchorRef: B,
                                ownerDocument: W,
                                delayTooltipMs: o(
                                  "WAWebVoipRaiseHandButton.react",
                                ).CALL_CONTROL_TOOLTIP_DELAY_MS,
                                children: c.jsx(
                                  o("WAWebMenuItems.react").SelectMenuItemGroup,
                                  {
                                    onSelect: fe,
                                    children: c.jsx(
                                      o("WAWebMenuItems.react").SelectMenuItem,
                                      {
                                        optionId: "participants",
                                        primary: s._(/*BTDS*/ "Participants"),
                                        detailLeft: c.jsx(
                                          r("WDSIconIcGroup.react"),
                                          {},
                                        ),
                                        ariaLabel: s._(/*BTDS*/ "Participants"),
                                      },
                                    ),
                                  },
                                ),
                              })
                            : null,
                          !b &&
                            !S &&
                            c.jsx(
                              o("WAWebMenuItems.react").SelectMenuItemGroup,
                              {
                                onSelect: se,
                                children: c.jsx(
                                  o("WAWebMenuItems.react").SelectMenuItem,
                                  {
                                    optionId: "share-screen",
                                    primary: o(
                                      "WAWebVoipScreenShareHelpers",
                                    ).getScreenShareLabel(T),
                                    detailLeft: c.jsx(
                                      o("WAWebVoipScreenShareHelpers")
                                        .ScreenShareIcon,
                                      {
                                        isSelfScreenSharing: T,
                                        isAnyPeerScreenSharing: l,
                                      },
                                    ),
                                    disabled: l && !le,
                                    middlecontainerXStyle: [
                                      l && !le && g.disabledDropdownItem,
                                    ],
                                    ariaLabel: o(
                                      "WAWebVoipScreenShareHelpers",
                                    ).getScreenShareLabel(T),
                                  },
                                ),
                              },
                            ),
                          O && !S
                            ? c.jsx(
                                o("WAWebMenuItems.react").SelectMenuItemGroup,
                                {
                                  onSelect: ue,
                                  children: c.jsx(
                                    o("WAWebMenuItems.react").SelectMenuItem,
                                    {
                                      optionId: "send-message",
                                      primary: s._(/*BTDS*/ "Send message"),
                                      detailLeft: c.jsx(
                                        r("WDSIconWdsIcChat.react"),
                                        {},
                                      ),
                                      ariaLabel: s._(/*BTDS*/ "Send message"),
                                    },
                                  ),
                                },
                              )
                            : null,
                          j
                            ? c.jsx(
                                o("WAWebMenuItems.react").SelectMenuItemGroup,
                                {
                                  onSelect: de,
                                  children: c.jsx(
                                    o("WAWebMenuItems.react").SelectMenuItem,
                                    {
                                      optionId: "dev-full-screen",
                                      primary: s._(
                                        /*BTDS*/ "Full screen (DEV)",
                                      ),
                                      detailLeft: c.jsx(
                                        r("WDSIconIcFullscreen.react"),
                                        {},
                                      ),
                                      ariaLabel: s._(
                                        /*BTDS*/ "Full screen (DEV)",
                                      ),
                                    },
                                  ),
                                },
                              )
                            : null,
                        ],
                      }),
                    },
                  ),
                ),
              ],
            }),
          }),
          c.jsx(o("WAWebDropdownV2.react").DropdownV2, {
            popoverPortal: (a = q.popoverPortalEl) != null ? a : void 0,
            position: o("WAWebDropdownV2.react").PopoverPosition.Top,
            alignment: o("WAWebDropdownV2.react").PopoverAlignment.End,
            controllerRef: Q,
            target: z,
            initHandling: "controllable",
            onClose: ie,
            minWidth: o("WAWebDropdown.react").REACTIONS_PANEL_WIDTH,
            xstyle: g.transparentDropdownContainer,
            children: c.jsx("div", {
              className: "dark color-refresh",
              children: c.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  e.props(o("WDSThemes").WDSDarkTheme, g.emojiPickerContainer),
                  {
                    children: c.jsx(r("WAWebEmojiPanel.react"), {
                      displayLocation: o("WAWebPanelsDisplayLocation")
                        .DisplayLocation.Reactions,
                      onEmoji: oe,
                      width: o("WAWebDropdown.react").REACTIONS_PANEL_WIDTH,
                    }),
                  },
                ),
              ),
            }),
          }),
        ],
      });
    }
    ((C.displayName = C.name + " [from " + i.id + "]"), (l.default = C));
  },
  226,
);
