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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useEffect;
    function d(e) {
      var t = o("react-compiler-runtime").c(48),
        n = e.chat,
        a = e.isCallingDisabled,
        i = e.logger,
        l = e.onActionTaken,
        d = e.onClose,
        m,
        p;
      (t[0] !== i
        ? ((m = function () {
            var e = r("WAWebCallCollection").activeCall;
            (e != null &&
              e.shouldShowPostCallSurvey === !0 &&
              r("WAWebCallCollection").setActiveCall(null),
              i.clickCallDropdown(
                o("WAWebWamEnumSubSurface").SUB_SURFACE.CHAT_HEADER,
              ));
          }),
          (p = [i]),
          (t[0] = i),
          (t[1] = m),
          (t[2] = p))
        : ((m = t[1]), (p = t[2])),
        c(m, p));
      var _;
      t[3] !== n || t[4] !== i || t[5] !== l || t[6] !== d
        ? ((_ = function (t) {
            (t
              ? i.clickVideoCall(
                  o("WAWebWamEnumSubSurface").SUB_SURFACE.CALL_DROPDOWN_MENU,
                )
              : i.clickAudioCall(
                  o("WAWebWamEnumSubSurface").SUB_SURFACE.CALL_DROPDOWN_MENU,
                ),
              l(),
              o("WAWebVoipStartCall").startWAWebVoipGroupCallFromChat(
                n,
                t,
                o("WAWebWamEnumCallFromUi").CALL_FROM_UI.GROUP_CHAT_DIRECT,
                o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE
                  .NOT_OPENED,
              ),
              d());
          }),
          (t[3] = n),
          (t[4] = i),
          (t[5] = l),
          (t[6] = d),
          (t[7] = _))
        : (_ = t[7]);
      var f = _,
        g;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = s._(/*BTDS*/ "Voice call")), (t[8] = g))
        : (g = t[8]);
      var h;
      t[9] !== f
        ? ((h = function () {
            return f(!1);
          }),
          (t[9] = f),
          (t[10] = h))
        : (h = t[10]);
      var y;
      t[11] !== a || t[12] !== h
        ? ((y = u.jsx(r("WDSMenuItem.react"), {
            Icon: r("WDSIconIcCall.react"),
            title: g,
            disabled: a,
            testid: void 0,
            onPress: h,
          })),
          (t[11] = a),
          (t[12] = h),
          (t[13] = y))
        : (y = t[13]);
      var C;
      t[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = s._(/*BTDS*/ "Video call")), (t[14] = C))
        : (C = t[14]);
      var b;
      t[15] !== f
        ? ((b = function () {
            return f(!0);
          }),
          (t[15] = f),
          (t[16] = b))
        : (b = t[16]);
      var v;
      t[17] !== a || t[18] !== b
        ? ((v = u.jsx(r("WDSMenuItem.react"), {
            Icon: r("WDSIconIcVideocam.react"),
            title: C,
            disabled: a,
            testid: void 0,
            onPress: b,
          })),
          (t[17] = a),
          (t[18] = b),
          (t[19] = v))
        : (v = t[19]);
      var S;
      t[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = u.jsx(r("WDSMenuItem.react"), { type: "separator" })),
          (t[20] = S))
        : (S = t[20]);
      var R;
      t[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = s._(/*BTDS*/ "Select people")), (t[21] = R))
        : (R = t[21]);
      var L;
      t[22] !== n || t[23] !== i || t[24] !== l || t[25] !== d
        ? ((L = function () {
            (l(),
              i.clickAddContact(
                o("WAWebWamEnumSubSurface").SUB_SURFACE.CALL_DROPDOWN_MENU,
              ),
              o("WAWebModalManager").ModalManager.open(
                u.jsx(r("WAWebVoipNewGroupCallContactPicker.react"), {
                  chat: n,
                  showCallTypeButtons: !0,
                  isGroupMemberSelection: !0,
                }),
              ),
              d());
          }),
          (t[22] = n),
          (t[23] = i),
          (t[24] = l),
          (t[25] = d),
          (t[26] = L))
        : (L = t[26]);
      var E;
      t[27] !== a || t[28] !== L
        ? ((E = u.jsx(r("WDSMenuItem.react"), {
            Icon: r("WDSIconIcHowToReg.react"),
            title: R,
            disabled: a,
            testid: void 0,
            onPress: L,
          })),
          (t[27] = a),
          (t[28] = L),
          (t[29] = E))
        : (E = t[29]);
      var k;
      t[30] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = s._(/*BTDS*/ "Send call link")), (t[30] = k))
        : (k = t[30]);
      var I;
      t[31] !== n || t[32] !== i || t[33] !== l || t[34] !== d
        ? ((I = u.jsx(r("WDSMenuItem.react"), {
            Icon: r("WDSIconIcLink.react"),
            title: k,
            testid: void 0,
            onPress: function () {
              (l(),
                i.clickCreateVideoCallLinkChatThread(
                  o("WAWebWamEnumSubSurface").SUB_SURFACE.CALL_DROPDOWN_MENU,
                ),
                o("WAWebModalManager").ModalManager.open(
                  u.jsx(
                    o("WAWebVoipCreateCallLinksPopupLoadable.react")
                      .WAWebVoipCreateCallLinksPopupLoadable,
                    { targetChat: n },
                  ),
                ),
                d());
            },
          })),
          (t[31] = n),
          (t[32] = i),
          (t[33] = l),
          (t[34] = d),
          (t[35] = I))
        : (I = t[35]);
      var T;
      t[36] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = s._(/*BTDS*/ "Schedule call")), (t[36] = T))
        : (T = t[36]);
      var D;
      t[37] !== n || t[38] !== i || t[39] !== l || t[40] !== d
        ? ((D = u.jsx(r("WDSMenuItem.react"), {
            Icon: r("WDSIconIcCalendarMonth.react"),
            title: T,
            testid: void 0,
            onPress: function () {
              (l(),
                i.clickCreateEventChatThread(
                  o("WAWebWamEnumSubSurface").SUB_SURFACE.CALL_DROPDOWN_MENU,
                ),
                o(
                  "WAWebVoipCallsTabScheduleCallModal.react",
                ).handleScheduleCallForChat(n),
                d());
            },
          })),
          (t[37] = n),
          (t[38] = i),
          (t[39] = l),
          (t[40] = d),
          (t[41] = D))
        : (D = t[41]);
      var x;
      return (
        t[42] !== E || t[43] !== I || t[44] !== D || t[45] !== y || t[46] !== v
          ? ((x = u.jsxs(r("WDSMenu.react"), { children: [y, v, S, E, I, D] })),
            (t[42] = E),
            (t[43] = I),
            (t[44] = D),
            (t[45] = y),
            (t[46] = v),
            (t[47] = x))
          : (x = t[47]),
        x
      );
    }
    l.default = d;
  },
  226,
);
