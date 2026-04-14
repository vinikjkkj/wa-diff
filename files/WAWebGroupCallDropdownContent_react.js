__d(
  "WAWebGroupCallDropdownContent.react",
  [
    "fbt",
    "WAWebCallCollection",
    "WAWebModalManager",
    "WAWebVoipCallsTabScheduleCallModal.react",
    "WAWebVoipCreateCallLinksPopupLoadable.react",
    "WAWebVoipNewGroupCallContactPicker.react",
    "WAWebVoipStartCall",
    "WAWebWamEnumCallFromUi",
    "WAWebWamEnumLobbyEntryPointType",
    "WAWebWamEnumSubSurface",
    "WDSIconIcCalendarMonth.react",
    "WDSIconIcCall.react",
    "WDSIconIcHowToReg.react",
    "WDSIconIcLink.react",
    "WDSIconIcVideocam.react",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useEffect;
    function d(e) {
      var t = e.chat,
        n = e.isCallingDisabled,
        a = e.logger,
        i = e.onActionTaken,
        l = e.onClose;
      c(
        function () {
          var e = r("WAWebCallCollection").activeCall;
          (e != null &&
            e.shouldShowPostCallSurvey === !0 &&
            r("WAWebCallCollection").setActiveCall(null),
            a.clickCallDropdown(
              o("WAWebWamEnumSubSurface").SUB_SURFACE.CHAT_HEADER,
            ));
        },
        [a],
      );
      var d = function (n) {
        (n
          ? a.clickVideoCall(
              o("WAWebWamEnumSubSurface").SUB_SURFACE.CALL_DROPDOWN_MENU,
            )
          : a.clickAudioCall(
              o("WAWebWamEnumSubSurface").SUB_SURFACE.CALL_DROPDOWN_MENU,
            ),
          i(),
          o("WAWebVoipStartCall").startWAWebVoipGroupCallFromChat(
            t,
            n,
            o("WAWebWamEnumCallFromUi").CALL_FROM_UI.GROUP_CHAT_DIRECT,
            o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE
              .NOT_OPENED,
          ),
          l());
      };
      return u.jsxs(r("WDSMenu.react"), {
        children: [
          u.jsx(r("WDSMenuItem.react"), {
            Icon: r("WDSIconIcCall.react"),
            title: s._(/*BTDS*/ "Voice call"),
            disabled: n,
            testid: void 0,
            onPress: function () {
              return d(!1);
            },
          }),
          u.jsx(r("WDSMenuItem.react"), {
            Icon: r("WDSIconIcVideocam.react"),
            title: s._(/*BTDS*/ "Video call"),
            disabled: n,
            testid: void 0,
            onPress: function () {
              return d(!0);
            },
          }),
          u.jsx(r("WDSMenuItem.react"), { type: "separator" }),
          u.jsx(r("WDSMenuItem.react"), {
            Icon: r("WDSIconIcHowToReg.react"),
            title: s._(/*BTDS*/ "Select people"),
            disabled: n,
            testid: void 0,
            onPress: function () {
              (i(),
                a.clickAddContact(
                  o("WAWebWamEnumSubSurface").SUB_SURFACE.CALL_DROPDOWN_MENU,
                ),
                o("WAWebModalManager").ModalManager.open(
                  u.jsx(r("WAWebVoipNewGroupCallContactPicker.react"), {
                    chat: t,
                    showCallTypeButtons: !0,
                    isGroupMemberSelection: !0,
                  }),
                ),
                l());
            },
          }),
          u.jsx(r("WDSMenuItem.react"), {
            Icon: r("WDSIconIcLink.react"),
            title: s._(/*BTDS*/ "Send call link"),
            testid: void 0,
            onPress: function () {
              (i(),
                a.clickCreateVideoCallLinkChatThread(
                  o("WAWebWamEnumSubSurface").SUB_SURFACE.CALL_DROPDOWN_MENU,
                ),
                o("WAWebModalManager").ModalManager.open(
                  u.jsx(
                    o("WAWebVoipCreateCallLinksPopupLoadable.react")
                      .WAWebVoipCreateCallLinksPopupLoadable,
                    { targetChat: t },
                  ),
                ),
                l());
            },
          }),
          u.jsx(r("WDSMenuItem.react"), {
            Icon: r("WDSIconIcCalendarMonth.react"),
            title: s._(/*BTDS*/ "Schedule call"),
            testid: void 0,
            onPress: function () {
              (i(),
                a.clickCreateEventChatThread(
                  o("WAWebWamEnumSubSurface").SUB_SURFACE.CALL_DROPDOWN_MENU,
                ),
                o(
                  "WAWebVoipCallsTabScheduleCallModal.react",
                ).handleScheduleCallForChat(t),
                l());
            },
          }),
        ],
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
