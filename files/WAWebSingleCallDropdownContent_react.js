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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useEffect;
    function d(e) {
      var t = o("react-compiler-runtime").c(31),
        n = e.chat,
        a = e.enableWebGroupCalling,
        i = e.handleCall,
        l = e.isCallingDisabled,
        d = e.logger,
        m = e.onActionTaken,
        p = e.onClose,
        _,
        f;
      (t[0] !== d
        ? ((_ = function () {
            var e = r("WAWebCallCollection").activeCall;
            (e != null &&
              e.shouldShowPostCallSurvey === !0 &&
              r("WAWebCallCollection").setActiveCall(null),
              d.clickCallDropdown(
                o("WAWebWamEnumSubSurface").SUB_SURFACE.CHAT_HEADER,
              ));
          }),
          (f = [d]),
          (t[0] = d),
          (t[1] = _),
          (t[2] = f))
        : ((_ = t[1]), (f = t[2])),
        c(_, f));
      var g;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = s._(/*BTDS*/ "Voice call")), (t[3] = g))
        : (g = t[3]);
      var h;
      t[4] !== i || t[5] !== d || t[6] !== m || t[7] !== p
        ? ((h = function () {
            (d.clickAudioCall(
              o("WAWebWamEnumSubSurface").SUB_SURFACE.CALL_DROPDOWN_MENU,
            ),
              m(),
              i(!1),
              p());
          }),
          (t[4] = i),
          (t[5] = d),
          (t[6] = m),
          (t[7] = p),
          (t[8] = h))
        : (h = t[8]);
      var y;
      t[9] !== l || t[10] !== h
        ? ((y = u.jsx(r("WDSMenuItem.react"), {
            Icon: r("WDSIconIcCall.react"),
            title: g,
            disabled: l,
            testid: void 0,
            onPress: h,
          })),
          (t[9] = l),
          (t[10] = h),
          (t[11] = y))
        : (y = t[11]);
      var C;
      t[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = s._(/*BTDS*/ "Video call")), (t[12] = C))
        : (C = t[12]);
      var b;
      t[13] !== i || t[14] !== d || t[15] !== m || t[16] !== p
        ? ((b = function () {
            (d.clickVideoCall(
              o("WAWebWamEnumSubSurface").SUB_SURFACE.CALL_DROPDOWN_MENU,
            ),
              m(),
              i(!0),
              p());
          }),
          (t[13] = i),
          (t[14] = d),
          (t[15] = m),
          (t[16] = p),
          (t[17] = b))
        : (b = t[17]);
      var v;
      t[18] !== l || t[19] !== b
        ? ((v = u.jsx(r("WDSMenuItem.react"), {
            Icon: r("WDSIconIcVideocam.react"),
            title: C,
            disabled: l,
            testid: void 0,
            onPress: b,
          })),
          (t[18] = l),
          (t[19] = b),
          (t[20] = v))
        : (v = t[20]);
      var S;
      t[21] !== n || t[22] !== a || t[23] !== d || t[24] !== m || t[25] !== p
        ? ((S =
            a &&
            u.jsxs(u.Fragment, {
              children: [
                u.jsx(r("WDSMenuItem.react"), { type: "separator" }),
                u.jsx(r("WDSMenuItem.react"), {
                  Icon: r("WDSIconIcPersonAdd.react"),
                  title: s._(/*BTDS*/ "New group call"),
                  testid: void 0,
                  onPress: function () {
                    (m(),
                      d.clickAddContact(
                        o("WAWebWamEnumSubSurface").SUB_SURFACE
                          .CALL_DROPDOWN_MENU,
                      ),
                      o("WAWebModalManager").ModalManager.open(
                        u.jsx(r("WAWebVoipNewGroupCallContactPicker.react"), {
                          chat: n,
                          showCallTypeButtons: !0,
                        }),
                      ),
                      p());
                  },
                }),
                u.jsx(r("WDSMenuItem.react"), {
                  Icon: r("WDSIconIcLink.react"),
                  title: s._(/*BTDS*/ "Send call link"),
                  testid: void 0,
                  onPress: function () {
                    (m(),
                      d.clickCreateVideoCallLinkChatThread(
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
                      p());
                  },
                }),
                u.jsx(r("WDSMenuItem.react"), {
                  Icon: r("WDSIconIcCalendarMonth.react"),
                  title: s._(/*BTDS*/ "Schedule call"),
                  testid: void 0,
                  onPress: function () {
                    (m(),
                      d.clickCreateEventChatThread(
                        o("WAWebWamEnumSubSurface").SUB_SURFACE
                          .CALL_DROPDOWN_MENU,
                      ),
                      o(
                        "WAWebVoipCallsTabScheduleCallModal.react",
                      ).handleScheduleCallForChat(n),
                      p());
                  },
                }),
              ],
            })),
          (t[21] = n),
          (t[22] = a),
          (t[23] = d),
          (t[24] = m),
          (t[25] = p),
          (t[26] = S))
        : (S = t[26]);
      var R;
      return (
        t[27] !== y || t[28] !== v || t[29] !== S
          ? ((R = u.jsxs(r("WDSMenu.react"), { children: [y, v, S] })),
            (t[27] = y),
            (t[28] = v),
            (t[29] = S),
            (t[30] = R))
          : (R = t[30]),
        R
      );
    }
    l.default = d;
  },
  226,
);
