__d(
  "WAWebSingleCallLegacyDropdownContent.react",
  [
    "fbt",
    "WAWebActionMenuItem.react",
    "WAWebAddUserIcon.react",
    "WAWebCalendarFilledRefreshedIcon.react",
    "WAWebCallCollection",
    "WAWebCallDropdownMenuItems.react",
    "WAWebContactImage.react",
    "WAWebEnvironment",
    "WAWebFlex.react",
    "WAWebFrontendChatGetters",
    "WAWebFrontendContactGetters",
    "WAWebModalManager",
    "WAWebText.react",
    "WAWebUserSubtitle.react",
    "WAWebVoipCallsTabScheduleCallModal.react",
    "WAWebVoipCreateCallLinksPopupLoadable.react",
    "WAWebVoipNewGroupCallContactPicker.react",
    "WAWebWamEnumSubSurface",
    "WDSIconIcCallFilled.react",
    "WDSIconIcLink.react",
    "WDSIconIcVideocamFilled.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useEffect,
      d = {
        dropdownContainer: {
          width: "xj6ak53",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        contactTextContainer: {
          minWidth: "xeuugli",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        callButtonsRow: {
          width: "xh8yej3",
          rowGap: "x1qvou4u",
          columnGap: "x1s70e7g",
          marginTop: "x1380le5",
          marginBottom: "xat24cr",
          $$css: !0,
        },
        callButtonWrapper: { flex: "x1cqoux5", minWidth: "xeuugli", $$css: !0 },
        callButtonMenuItemIcon: {
          color: "x1pse0pq",
          height: "xxk0z11",
          width: "xvy4d1p",
          $$css: !0,
        },
        actionsContainer: { width: "xh8yej3", $$css: !0 },
        actionItemIcon: { color: "xhslqc4", $$css: !0 },
        paddingAll8: {
          paddingTop: "x16ovd2e",
          paddingInlineEnd: "x1nzty39",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "x12w63v0",
          $$css: !0,
        },
        paddingStart12: { paddingInlineStart: "x1iw51ew", $$css: !0 },
      };
    function m(e) {
      var t = o("react-compiler-runtime").c(56),
        n = e.chat,
        a = e.enableWebGroupCalling,
        i = e.handleCall,
        l = e.isCallingDisabled,
        m = e.logger,
        p = e.onActionTaken,
        _ = e.onClose,
        f = n.contact,
        g;
      t[0] !== f
        ? ((g = o("WAWebFrontendContactGetters").getFormattedUser(f)),
          (t[0] = f),
          (t[1] = g))
        : (g = t[1]);
      var h = g,
        y;
      t[2] !== n
        ? ((y = o("WAWebFrontendChatGetters").getPresence(n)),
          (t[2] = n),
          (t[3] = y))
        : (y = t[3]);
      var C = y,
        b,
        v;
      (t[4] !== m
        ? ((b = function () {
            var e = r("WAWebCallCollection").activeCall;
            (e != null &&
              e.shouldShowPostCallSurvey === !0 &&
              r("WAWebCallCollection").setActiveCall(null),
              m.clickCallDropdown(
                o("WAWebWamEnumSubSurface").SUB_SURFACE.CHAT_HEADER,
              ));
          }),
          (v = [m]),
          (t[4] = m),
          (t[5] = b),
          (t[6] = v))
        : ((b = t[5]), (v = t[6])),
        c(b, v));
      var S;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = [d.paddingAll8, d.dropdownContainer]), (t[7] = S))
        : (S = t[7]);
      var R;
      t[8] !== f
        ? ((R = u.jsx(r("WAWebContactImage.react"), {
            contact: f,
            size: 40,
            loadPicture: !0,
          })),
          (t[8] = f),
          (t[9] = R))
        : (R = t[9]);
      var L;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = [d.paddingStart12, d.contactTextContainer]), (t[10] = L))
        : (L = t[10]);
      var E;
      t[11] !== h
        ? ((E = u.jsx(o("WAWebFlex.react").FlexItem, {
            children: u.jsx(o("WAWebText.react").WAWebTextTitle, {
              textWrap: "ellipsis",
              children: h,
            }),
          })),
          (t[11] = h),
          (t[12] = E))
        : (E = t[12]);
      var k;
      t[13] !== n.id || t[14] !== f || t[15] !== C
        ? ((k = u.jsx(o("WAWebFlex.react").FlexItem, {
            children: u.jsx(r("WAWebUserSubtitle.react"), {
              contact: f,
              presence: C,
              chatstate: C.chatstate,
              location: "title",
              chatId: n.id,
            }),
          })),
          (t[13] = n.id),
          (t[14] = f),
          (t[15] = C),
          (t[16] = k))
        : (k = t[16]);
      var I;
      t[17] !== E || t[18] !== k
        ? ((I = u.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: L,
            grow: 1,
            children: [E, k],
          })),
          (t[17] = E),
          (t[18] = k),
          (t[19] = I))
        : (I = t[19]);
      var T;
      t[20] !== I || t[21] !== R
        ? ((T = u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            children: [R, I],
          })),
          (t[20] = I),
          (t[21] = R),
          (t[22] = T))
        : (T = t[22]);
      var D;
      t[23] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = u.jsx(r("WDSIconIcCallFilled.react"), {
            iconXstyle: d.callButtonMenuItemIcon,
          })),
          (t[23] = D))
        : (D = t[23]);
      var x;
      t[24] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = s._(/*BTDS*/ "Voice")), (t[24] = x))
        : (x = t[24]);
      var $;
      t[25] !== i || t[26] !== m || t[27] !== p || t[28] !== _
        ? (($ = function () {
            (m.clickAudioCall(
              o("WAWebWamEnumSubSurface").SUB_SURFACE.CALL_DROPDOWN_MENU,
            ),
              p(),
              i(!1),
              _());
          }),
          (t[25] = i),
          (t[26] = m),
          (t[27] = p),
          (t[28] = _),
          (t[29] = $))
        : ($ = t[29]);
      var P;
      t[30] !== l || t[31] !== $
        ? ((P = u.jsx(o("WAWebFlex.react").FlexItem, {
            grow: 1,
            xstyle: d.callButtonWrapper,
            children: u.jsx(
              o("WAWebCallDropdownMenuItems.react").CallButtonMenuItem,
              {
                optionId: "voice-call",
                testid: void 0,
                icon: D,
                disabled: l,
                label: x,
                onSelect: $,
              },
            ),
          })),
          (t[30] = l),
          (t[31] = $),
          (t[32] = P))
        : (P = t[32]);
      var N;
      t[33] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = u.jsx(r("WDSIconIcVideocamFilled.react"), {
            iconXstyle: d.callButtonMenuItemIcon,
          })),
          (t[33] = N))
        : (N = t[33]);
      var M;
      t[34] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = s._(/*BTDS*/ "Video")), (t[34] = M))
        : (M = t[34]);
      var w;
      t[35] !== i || t[36] !== m || t[37] !== p || t[38] !== _
        ? ((w = function () {
            (m.clickVideoCall(
              o("WAWebWamEnumSubSurface").SUB_SURFACE.CALL_DROPDOWN_MENU,
            ),
              p(),
              i(!0),
              _());
          }),
          (t[35] = i),
          (t[36] = m),
          (t[37] = p),
          (t[38] = _),
          (t[39] = w))
        : (w = t[39]);
      var A;
      t[40] !== l || t[41] !== w
        ? ((A = u.jsx(o("WAWebFlex.react").FlexItem, {
            grow: 1,
            xstyle: d.callButtonWrapper,
            children: u.jsx(
              o("WAWebCallDropdownMenuItems.react").CallButtonMenuItem,
              {
                optionId: "video-call",
                testid: void 0,
                icon: N,
                disabled: l,
                label: M,
                onSelect: w,
              },
            ),
          })),
          (t[40] = l),
          (t[41] = w),
          (t[42] = A))
        : (A = t[42]);
      var F;
      t[43] !== P || t[44] !== A
        ? ((F = u.jsxs(o("WAWebFlex.react").FlexRow, {
            xstyle: d.callButtonsRow,
            children: [P, A],
          })),
          (t[43] = P),
          (t[44] = A),
          (t[45] = F))
        : (F = t[45]);
      var O;
      t[46] !== n || t[47] !== a || t[48] !== m || t[49] !== p || t[50] !== _
        ? ((O =
            (!r("WAWebEnvironment").isWeb || a) &&
            u.jsxs(u.Fragment, {
              children: [
                u.jsx("div", {
                  className: "xjm9jq1 x3x0x6p xh8yej3 xav9cv8 x4tpdpg",
                }),
                u.jsxs(o("WAWebFlex.react").FlexColumn, {
                  xstyle: d.actionsContainer,
                  children: [
                    u.jsx(o("WAWebActionMenuItem.react").ActionMenuItem, {
                      optionId: "new-group-call",
                      detailLeft: u.jsx(
                        o("WAWebAddUserIcon.react").AddUserIcon,
                        { xstyle: d.actionItemIcon },
                      ),
                      primary: u.jsx(o("WAWebText.react").WAWebTextTitle, {
                        color: "secondary",
                        children: s._(/*BTDS*/ "New group call"),
                      }),
                      onSelect: function () {
                        (p(),
                          m.clickAddContact(
                            o("WAWebWamEnumSubSurface").SUB_SURFACE
                              .CALL_DROPDOWN_MENU,
                          ),
                          o("WAWebModalManager").ModalManager.open(
                            u.jsx(
                              r("WAWebVoipNewGroupCallContactPicker.react"),
                              { chat: n, showCallTypeButtons: !0 },
                            ),
                          ),
                          _());
                      },
                    }),
                    u.jsx(o("WAWebActionMenuItem.react").ActionMenuItem, {
                      optionId: "send-call-link",
                      detailLeft: u.jsx(r("WDSIconIcLink.react"), {
                        testid: void 0,
                        xstyle: d.actionItemIcon,
                      }),
                      primary: u.jsx(o("WAWebText.react").WAWebTextTitle, {
                        color: "secondary",
                        children: s._(/*BTDS*/ "Send call link"),
                      }),
                      onSelect: function () {
                        (p(),
                          m.clickCreateVideoCallLinkChatThread(
                            o("WAWebWamEnumSubSurface").SUB_SURFACE
                              .CALL_DROPDOWN_MENU,
                          ),
                          o("WAWebModalManager").ModalManager.open(
                            u.jsx(
                              o("WAWebVoipCreateCallLinksPopupLoadable.react")
                                .WAWebVoipCreateCallLinksPopupLoadable,
                              { targetChat: n },
                            ),
                          ),
                          _());
                      },
                    }),
                    u.jsx(o("WAWebActionMenuItem.react").ActionMenuItem, {
                      optionId: "schedule-call",
                      detailLeft: u.jsx(
                        o("WAWebCalendarFilledRefreshedIcon.react")
                          .CalendarFilledRefreshedIcon,
                        { xstyle: d.actionItemIcon },
                      ),
                      primary: u.jsx(o("WAWebText.react").WAWebTextTitle, {
                        color: "secondary",
                        children: s._(/*BTDS*/ "Schedule call"),
                      }),
                      onSelect: function () {
                        (p(),
                          m.clickCreateEventChatThread(
                            o("WAWebWamEnumSubSurface").SUB_SURFACE
                              .CALL_DROPDOWN_MENU,
                          ),
                          o(
                            "WAWebVoipCallsTabScheduleCallModal.react",
                          ).handleScheduleCallForChat(n),
                          _());
                      },
                    }),
                  ],
                }),
              ],
            })),
          (t[46] = n),
          (t[47] = a),
          (t[48] = m),
          (t[49] = p),
          (t[50] = _),
          (t[51] = O))
        : (O = t[51]);
      var B;
      return (
        t[52] !== T || t[53] !== F || t[54] !== O
          ? ((B = u.jsxs(o("WAWebFlex.react").FlexColumn, {
              xstyle: S,
              grow: 1,
              gap: 8,
              children: [T, F, O],
            })),
            (t[52] = T),
            (t[53] = F),
            (t[54] = O),
            (t[55] = B))
          : (B = t[55]),
        B
      );
    }
    l.default = m;
  },
  226,
);
