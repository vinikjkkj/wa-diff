__d(
  "WAWebSingleCallDropdownContent.react",
  [
    "fbt",
    "WAWebCallCollection",
    "WAWebModalManager",
    "WAWebVoipCallsTabScheduleCallModal.react",
    "WAWebVoipCreateCallLinksPopupLoadable.react",
    "WAWebVoipNewGroupCallContactPicker.react",
    "WAWebWamEnumSubSurface",
    "WDSIconIcCalendarMonth.react",
    "WDSIconIcCall.react",
    "WDSIconIcLink.react",
    "WDSIconIcPersonAdd.react",
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
        n = e.enableWebGroupCalling,
        a = e.handleCall,
        i = e.isCallingDisabled,
        l = e.logger,
        d = e.onActionTaken,
        m = e.onClose;
      return (
        c(
          function () {
            var e = r("WAWebCallCollection").activeCall;
            (e != null &&
              e.shouldShowPostCallSurvey === !0 &&
              r("WAWebCallCollection").setActiveCall(null),
              l.clickCallDropdown(
                o("WAWebWamEnumSubSurface").SUB_SURFACE.CHAT_HEADER,
              ));
          },
          [l],
        ),
        u.jsxs(r("WDSMenu.react"), {
          children: [
            u.jsx(r("WDSMenuItem.react"), {
              Icon: r("WDSIconIcCall.react"),
              title: s._(/*BTDS*/ "Voice call"),
              disabled: i,
              testid: void 0,
              onPress: function () {
                (l.clickAudioCall(
                  o("WAWebWamEnumSubSurface").SUB_SURFACE.CALL_DROPDOWN_MENU,
                ),
                  d(),
                  a(!1),
                  m());
              },
            }),
            u.jsx(r("WDSMenuItem.react"), {
              Icon: r("WDSIconIcVideocam.react"),
              title: s._(/*BTDS*/ "Video call"),
              disabled: i,
              testid: void 0,
              onPress: function () {
                (l.clickVideoCall(
                  o("WAWebWamEnumSubSurface").SUB_SURFACE.CALL_DROPDOWN_MENU,
                ),
                  d(),
                  a(!0),
                  m());
              },
            }),
            n &&
              u.jsxs(u.Fragment, {
                children: [
                  u.jsx(r("WDSMenuItem.react"), { type: "separator" }),
                  u.jsx(r("WDSMenuItem.react"), {
                    Icon: r("WDSIconIcPersonAdd.react"),
                    title: s._(/*BTDS*/ "New group call"),
                    testid: void 0,
                    onPress: function () {
                      (d(),
                        l.clickAddContact(
                          o("WAWebWamEnumSubSurface").SUB_SURFACE
                            .CALL_DROPDOWN_MENU,
                        ),
                        o("WAWebModalManager").ModalManager.open(
                          u.jsx(r("WAWebVoipNewGroupCallContactPicker.react"), {
                            chat: t,
                            showCallTypeButtons: !0,
                          }),
                        ),
                        m());
                    },
                  }),
                  u.jsx(r("WDSMenuItem.react"), {
                    Icon: r("WDSIconIcLink.react"),
                    title: s._(/*BTDS*/ "Send call link"),
                    testid: void 0,
                    onPress: function () {
                      (d(),
                        l.clickCreateVideoCallLinkChatThread(
                          o("WAWebWamEnumSubSurface").SUB_SURFACE
                            .CALL_DROPDOWN_MENU,
                        ),
                        o("WAWebModalManager").ModalManager.open(
                          u.jsx(
                            o("WAWebVoipCreateCallLinksPopupLoadable.react")
                              .WAWebVoipCreateCallLinksPopupLoadable,
                            { targetChat: t },
                          ),
                        ),
                        m());
                    },
                  }),
                  u.jsx(r("WDSMenuItem.react"), {
                    Icon: r("WDSIconIcCalendarMonth.react"),
                    title: s._(/*BTDS*/ "Schedule call"),
                    testid: void 0,
                    onPress: function () {
                      (d(),
                        l.clickCreateEventChatThread(
                          o("WAWebWamEnumSubSurface").SUB_SURFACE
                            .CALL_DROPDOWN_MENU,
                        ),
                        o(
                          "WAWebVoipCallsTabScheduleCallModal.react",
                        ).handleScheduleCallForChat(t),
                        m());
                    },
                  }),
                ],
              }),
          ],
        })
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
