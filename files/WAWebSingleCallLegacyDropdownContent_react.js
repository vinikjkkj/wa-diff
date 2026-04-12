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
      var t,
        n = e.chat,
        a = e.enableWebGroupCalling,
        i = e.handleCall,
        l = e.isCallingDisabled,
        m = e.logger,
        p = e.onActionTaken,
        _ = e.onClose,
        f = n.contact,
        g = o("WAWebFrontendContactGetters").getFormattedUser(f),
        h = o("WAWebFrontendChatGetters").getPresence(n);
      return (
        c(
          function () {
            var e = r("WAWebCallCollection").activeCall;
            (e != null &&
              e.shouldShowPostCallSurvey === !0 &&
              r("WAWebCallCollection").setActiveCall(null),
              m.clickCallDropdown(
                o("WAWebWamEnumSubSurface").SUB_SURFACE.CHAT_HEADER,
              ));
          },
          [m],
        ),
        u.jsxs((t = o("WAWebFlex.react")).FlexColumn, {
          xstyle: [d.paddingAll8, d.dropdownContainer],
          grow: 1,
          gap: 8,
          children: [
            u.jsxs(t.FlexRow, {
              align: "center",
              children: [
                u.jsx(r("WAWebContactImage.react"), {
                  contact: f,
                  size: 40,
                  loadPicture: !0,
                }),
                u.jsxs(t.FlexColumn, {
                  xstyle: [d.paddingStart12, d.contactTextContainer],
                  grow: 1,
                  children: [
                    u.jsx(t.FlexItem, {
                      children: u.jsx(o("WAWebText.react").WAWebTextTitle, {
                        textWrap: "ellipsis",
                        children: g,
                      }),
                    }),
                    u.jsx(t.FlexItem, {
                      children: u.jsx(r("WAWebUserSubtitle.react"), {
                        contact: f,
                        presence: h,
                        chatstate: h.chatstate,
                        location: "title",
                        chatId: n.id,
                      }),
                    }),
                  ],
                }),
              ],
            }),
            u.jsxs(t.FlexRow, {
              xstyle: d.callButtonsRow,
              children: [
                u.jsx(t.FlexItem, {
                  grow: 1,
                  xstyle: d.callButtonWrapper,
                  children: u.jsx(
                    o("WAWebCallDropdownMenuItems.react").CallButtonMenuItem,
                    {
                      optionId: "voice-call",
                      testid: void 0,
                      icon: u.jsx(r("WDSIconIcCallFilled.react"), {
                        iconXstyle: d.callButtonMenuItemIcon,
                      }),
                      disabled: l,
                      label: s._(/*BTDS*/ "Voice"),
                      onSelect: function () {
                        (m.clickAudioCall(
                          o("WAWebWamEnumSubSurface").SUB_SURFACE
                            .CALL_DROPDOWN_MENU,
                        ),
                          p(),
                          i(!1),
                          _());
                      },
                    },
                  ),
                }),
                u.jsx(o("WAWebFlex.react").FlexItem, {
                  grow: 1,
                  xstyle: d.callButtonWrapper,
                  children: u.jsx(
                    o("WAWebCallDropdownMenuItems.react").CallButtonMenuItem,
                    {
                      optionId: "video-call",
                      testid: void 0,
                      icon: u.jsx(r("WDSIconIcVideocamFilled.react"), {
                        iconXstyle: d.callButtonMenuItemIcon,
                      }),
                      disabled: l,
                      label: s._(/*BTDS*/ "Video"),
                      onSelect: function () {
                        (m.clickVideoCall(
                          o("WAWebWamEnumSubSurface").SUB_SURFACE
                            .CALL_DROPDOWN_MENU,
                        ),
                          p(),
                          i(!0),
                          _());
                      },
                    },
                  ),
                }),
              ],
            }),
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
              }),
          ],
        })
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
