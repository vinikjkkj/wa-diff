__d(
  "WAWebCallLogEntryCell.react",
  [
    "fbt",
    "WAWebBoolFunc",
    "WAWebCallLogEntryChatImage.react",
    "WAWebCallLogTitle.react",
    "WAWebCallLogUtils",
    "WAWebChatCell.react",
    "WAWebChatSendMessages",
    "WAWebChatTimestamp.react",
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "WAWebFrontendMsgGetters",
    "WAWebKeyboardHotKeys.react",
    "WAWebL10N",
    "WAWebModalManager",
    "WAWebMsgGetters",
    "WAWebVoipActionRequestOpenChat",
    "WAWebVoipCallsTabPanelManager",
    "WAWebVoipCoexCallingPermissionDisabledModal.react",
    "WAWebVoipGatingUtils",
    "WAWebVoipStartCall",
    "WAWebWamEnumCallFromUi",
    "WAWebWamEnumLobbyEntryPointType",
    "WDSIconIcCall.react",
    "WDSIconIcChat.react",
    "WDSIconIcDelete.react",
    "WDSIconIcLink.react",
    "WDSIconIcPhoneCallbackFilled.react",
    "WDSIconIcVideocam.react",
    "WDSIconWdsIcCallVideoMadeFilled.react",
    "WDSIconWdsIcCallVideoReceivedFilled.react",
    "WDSIconWdsIcPhoneCallMadeFilled.react",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime",
    "useWAWebActiveSelection",
    "useWAWebMsgValues",
    "useWAWebVoipCanStartCall",
    "useWDSMenu",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = ["msg", "testid"],
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useMemo,
      _ = d.useRef,
      f = {
        miss: { color: "x30a034", $$css: !0 },
        ongoing: { color: "x1v5yvga", $$css: !0 },
      };
    function g(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.iconHeight,
        a = e.isCallLink,
        i = e.isFromMe,
        l = e.isMissedCall,
        s = e.isOngoingCall,
        u = e.isVideoCall,
        d = e.xstyle,
        m = s === void 0 ? !1 : s,
        p;
      a === !0
        ? (p = r("WDSIconIcLink.react"))
        : i
          ? (p = r(
              u
                ? "WDSIconWdsIcCallVideoMadeFilled.react"
                : "WDSIconWdsIcPhoneCallMadeFilled.react",
            ))
          : (p = r(
              u
                ? "WDSIconWdsIcCallVideoReceivedFilled.react"
                : "WDSIconIcPhoneCallbackFilled.react",
            ));
      var _;
      m ? (_ = f.ongoing) : l && (_ = f.miss);
      var g;
      p === r("WDSIconWdsIcCallVideoReceivedFilled.react")
        ? (g = "video-call-incoming-filled")
        : p === r("WDSIconWdsIcCallVideoMadeFilled.react")
          ? (g = "video-call-outgoing-filled")
          : p === r("WDSIconIcPhoneCallbackFilled.react")
            ? (g = "voice-call-incoming-filled")
            : p === r("WDSIconWdsIcPhoneCallMadeFilled.react") &&
              (g = "voice-call-outgoing-filled");
      var h;
      t[0] !== _ || t[1] !== d
        ? ((h = [d, _]), (t[0] = _), (t[1] = d), (t[2] = h))
        : (h = t[2]);
      var y;
      return (
        t[3] !== p || t[4] !== n || t[5] !== h || t[6] !== g
          ? ((y = c.jsx(p, { height: n, xstyle: h, testid: void 0 })),
            (t[3] = p),
            (t[4] = n),
            (t[5] = h),
            (t[6] = g),
            (t[7] = y))
          : (y = t[7]),
        y
      );
    }
    function h(e) {
      var t = o("react-compiler-runtime").c(13),
        n = e.count,
        a = e.isCallLink,
        i = e.isCallSilenced,
        l = e.isFromMe,
        u = e.isMissedCall,
        d;
      if (a === !0) {
        var m;
        (t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = s._(/*BTDS*/ "Call link")), (t[0] = m))
          : (m = t[0]),
          (d = m));
      } else if (l) {
        var p;
        (t[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = s._(/*BTDS*/ "Outgoing")), (t[1] = p))
          : (p = t[1]),
          (d = p));
      } else if (u)
        if (i) {
          var _;
          (t[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((_ = s._(/*BTDS*/ "Missed (silenced)")), (t[2] = _))
            : (_ = t[2]),
            (d = _));
        } else {
          var g;
          (t[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((g = s._(/*BTDS*/ "Missed")), (t[3] = g))
            : (g = t[3]),
            (d = g));
        }
      else {
        var h;
        (t[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = s._(/*BTDS*/ "Incoming")), (t[4] = h))
          : (h = t[4]),
          (d = h));
      }
      if (n > 1) {
        var y;
        if (t[5] !== d || t[6] !== n) {
          var C;
          (t[8] !== n
            ? ((C = r("WAWebL10N").n(n)), (t[8] = n), (t[9] = C))
            : (C = t[9]),
            (y = s._(
              /*BTDS*/ "{call-log-entry-text} ({call-logs-merged-count})",
              [
                s._param("call-log-entry-text", d),
                s._param("call-logs-merged-count", C),
              ],
            )),
            (t[5] = d),
            (t[6] = n),
            (t[7] = y));
        } else y = t[7];
        d = y;
      }
      var b = u && !l && f.miss,
        v;
      return (
        t[10] !== d || t[11] !== b
          ? ((v = c.jsx(o("WAWebEmojiText.react").EmojiText, {
              text: d,
              direction: "auto",
              ellipsify: !0,
              xstyle: b,
            })),
            (t[10] = d),
            (t[11] = b),
            (t[12] = v))
          : (v = t[12]),
        v
      );
    }
    function y(e, t, n, a, i, l) {
      var u = o("WAWebVoipGatingUtils").isCallInfoOptimizationsEnabled(),
        d = u && !t && !n,
        m = function (t) {
          if (!l) {
            o("WAWebModalManager").ModalManager.open(
              c.jsx(r("WAWebVoipCoexCallingPermissionDisabledModal.react"), {}),
            );
            return;
          }
          i.length > 1
            ? o("WAWebVoipStartCall").startWAWebVoipGroupCallFromWids(
                i,
                t,
                o("WAWebWamEnumCallFromUi").CALL_FROM_UI.CALLS_TAB_BOTTOM_SHEET,
                o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE
                  .NOT_OPENED,
              )
            : a.groupType === void 0
              ? o("WAWebVoipStartCall").startWAWebVoipCall(
                  a.contact.id,
                  t,
                  o("WAWebWamEnumCallFromUi").CALL_FROM_UI
                    .CALLS_TAB_BOTTOM_SHEET,
                  o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE
                    .NOT_OPENED,
                )
              : o("WAWebVoipStartCall").startWAWebVoipGroupCallFromChat(
                  a,
                  t,
                  o("WAWebWamEnumCallFromUi").CALL_FROM_UI
                    .CALLS_TAB_BOTTOM_SHEET,
                  o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE
                    .NOT_OPENED,
                );
        };
      return c.jsxs(r("WDSMenu.react"), {
        children: [
          d &&
            c.jsx(
              r("WDSMenuItem.react"),
              {
                onPress: function () {
                  return o("WAWebVoipActionRequestOpenChat").requestOpenChat(
                    a.id,
                  );
                },
                Icon: r("WDSIconIcChat.react"),
                title: s._(/*BTDS*/ "Message"),
              },
              "message",
            ),
          u &&
            c.jsx(
              r("WDSMenuItem.react"),
              {
                onPress: function () {
                  return m(!0);
                },
                Icon: r("WDSIconIcVideocam.react"),
                title: s._(/*BTDS*/ "Video call"),
              },
              "video-call",
            ),
          u &&
            c.jsx(
              r("WDSMenuItem.react"),
              {
                onPress: function () {
                  return m(!1);
                },
                Icon: r("WDSIconIcCall.react"),
                title: s._(/*BTDS*/ "Voice call"),
              },
              "voice-call",
            ),
          u && c.jsx(r("WDSMenuItem.react"), { type: "separator" }),
          c.jsx(
            r("WDSMenuItem.react"),
            {
              onPress: function () {
                return C(e);
              },
              testid: void 0,
              destructive: !0,
              Icon: r("WDSIconIcDelete.react"),
              title: s._(/*BTDS*/ "Delete"),
            },
            "delete-call-log",
          ),
        ],
      });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      if (e.length !== 0) {
        var t = o("WAWebFrontendMsgGetters").getChat(e[0]);
        o("WAWebChatSendMessages")
          .sendDeleteMsgs(t, { type: "message", list: e }, !1)
          .then(function () {
            (r("WAWebVoipCallsTabPanelManager").trigger(
              "closeCallLogInfoPanel",
            ),
              r("WAWebVoipCallsTabPanelManager").trigger(
                "onWriteCallLogMessage",
              ));
          })
          .catch(function () {
            r("WAWebVoipCallsTabPanelManager").trigger("onWriteCallLogMessage");
          });
      }
    }
    function b(t) {
      var n = o("react-compiler-runtime").c(72),
        a,
        i,
        l;
      n[0] !== t
        ? ((a = t.msg),
          (l = t.testid),
          (i = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i),
          (n[3] = l))
        : ((a = n[1]), (i = n[2]), (l = n[3]));
      var s = i,
        u = s.filterPreset,
        d = s.mergedMsgs,
        p = d.length,
        f;
      if (n[4] === Symbol.for("react.memo_cache_sentinel")) {
        var C;
        ((f = [
          (C = o("WAWebMsgGetters")).getId,
          C.getIsSentByMe,
          C.getIsVideoCall,
          C.getIsMissedCall,
          C.getIsCallSilenced,
          C.getIsCallLink,
          C.getIsAdHocGroupCall,
          C.getCallOutcome,
          C.getCallParticipants,
          C.getFinalCallOutcome,
        ]),
          (n[4] = f));
      } else f = n[4];
      var b = o("useWAWebMsgValues").useMsgValues(a.id, f),
        R = b[0],
        L = b[1],
        E = b[2],
        k = b[3],
        I = b[4],
        T = b[5],
        D = b[6],
        x = b[7],
        $ = b[8],
        P = b[9],
        N = o("WAWebCallLogUtils").getIsSelfConnected($),
        M = i.active,
        w;
      n[5] !== R ? ((w = R.toString()), (n[5] = R), (n[6] = w)) : (w = n[6]);
      var A = r("useWAWebActiveSelection")(M, w),
        F = A[0],
        O = A[1],
        B;
      n[7] !== a
        ? ((B = o("WAWebFrontendMsgGetters").getChat(a)),
          (n[7] = a),
          (n[8] = B))
        : (B = n[8]);
      var W = B,
        q;
      n[9] !== $
        ? ((q = $ != null ? $.map(S) : []), (n[9] = $), (n[10] = q))
        : (q = n[10]);
      var U = q,
        V = o(
          "useWAWebVoipCanStartCall",
        ).useWAWebVoipIsCapiCallingPermissionAllowed(W),
        H;
      n[11] !== W ||
      n[12] !== D ||
      n[13] !== T ||
      n[14] !== V ||
      n[15] !== d ||
      n[16] !== U
        ? ((H = y(d, D, T, W, U, V)),
          (n[11] = W),
          (n[12] = D),
          (n[13] = T),
          (n[14] = V),
          (n[15] = d),
          (n[16] = U),
          (n[17] = H))
        : (H = n[17]);
      var G = H,
        z = _(null),
        j;
      n[18] !== G
        ? ((j = { targetRef: z, menu: G }), (n[18] = G), (n[19] = j))
        : (j = n[19]);
      var K = r("useWDSMenu")(j),
        Q = K.closeMenu,
        X = K.isMenuOpen,
        Y = K.menuPortal,
        J = K.openMenu,
        Z,
        ee;
      (n[20] !== O || n[21] !== d
        ? ((Z = function () {
            O &&
              r("WAWebVoipCallsTabPanelManager").trigger(
                "updateActveCallLogInfo",
                d,
              );
          }),
          (ee = [d, O]),
          (n[20] = O),
          (n[21] = d),
          (n[22] = Z),
          (n[23] = ee))
        : ((Z = n[22]), (ee = n[23])),
        m(Z, ee));
      var te = v,
        ne;
      n[24] !== Q || n[25] !== X || n[26] !== J
        ? ((ne = function (t) {
            if (X) {
              Q();
              return;
            }
            (t.anchor instanceof HTMLElement && (z.current = t.anchor), J());
          }),
          (n[24] = Q),
          (n[25] = X),
          (n[26] = J),
          (n[27] = ne))
        : (ne = n[27]);
      var re = ne,
        oe = o("WAWebCallLogUtils").getIsMissedCallOrNotConnected(
          k,
          N,
          L,
          x,
          P,
        ),
        ae;
      n[28] !== a
        ? ((ae = c.jsx(r("WAWebChatTimestamp.react"), { msg: a })),
          (n[28] = a),
          (n[29] = ae))
        : (ae = n[29]);
      var ie = ae,
        le = T != null ? T : !1,
        se;
      n[30] !== oe || n[31] !== L || n[32] !== E || n[33] !== le
        ? ((se = c.jsx(g, {
            iconHeight: 16,
            isMissedCall: oe,
            isVideoCall: E,
            isFromMe: L,
            isCallLink: le,
          })),
          (n[30] = oe),
          (n[31] = L),
          (n[32] = E),
          (n[33] = le),
          (n[34] = se))
        : (se = n[34]);
      var ue = T != null ? T : !1,
        ce;
      n[35] !== p || n[36] !== I || n[37] !== oe || n[38] !== L || n[39] !== ue
        ? ((ce = c.jsx(h, {
            isCallSilenced: I,
            isFromMe: L,
            isMissedCall: oe,
            count: p,
            isCallLink: ue,
          })),
          (n[35] = p),
          (n[36] = I),
          (n[37] = oe),
          (n[38] = L),
          (n[39] = ue),
          (n[40] = ce))
        : (ce = n[40]);
      var de;
      n[41] !== se || n[42] !== ce
        ? ((de = c.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            children: [se, "\xA0", ce],
          })),
          (n[41] = se),
          (n[42] = ce),
          (n[43] = de))
        : (de = n[43]);
      var me = de,
        pe;
      n[44] !== d || n[45] !== i
        ? ((pe = function () {
            (i.onClick(),
              r("WAWebVoipCallsTabPanelManager").trigger(
                "openCallLogInfoPanel",
                d,
              ));
          }),
          (n[44] = d),
          (n[45] = i),
          (n[46] = pe))
        : (pe = n[46]);
      var _e = pe,
        fe;
      n[47] !== _e
        ? ((fe = { enter: _e, space: _e }), (n[47] = _e), (n[48] = fe))
        : (fe = n[48]);
      var ge;
      n[49] !== a
        ? ((ge = c.jsx(r("WAWebCallLogEntryChatImage.react"), { msg: a })),
          (n[49] = a),
          (n[50] = ge))
        : (ge = n[50]);
      var he;
      n[51] !== u || n[52] !== a
        ? ((he = c.jsx(r("WAWebCallLogTitle.react"), {
            callLogMsg: a,
            filterPreset: u,
          })),
          (n[51] = u),
          (n[52] = a),
          (n[53] = he))
        : (he = n[53]);
      var ye;
      n[54] !== O ||
      n[55] !== _e ||
      n[56] !== re ||
      n[57] !== X ||
      n[58] !== ie ||
      n[59] !== me ||
      n[60] !== ge ||
      n[61] !== he ||
      n[62] !== l
        ? ((ye = c.jsx(r("WAWebChatCell.react"), {
            contextEnabled: o("WAWebBoolFunc").returnTrue,
            contextMenu: X,
            onContext: re,
            active: O,
            image: ge,
            primary: he,
            primaryDetail: ie,
            secondary: me,
            onClick: _e,
            testid: void 0,
          })),
          (n[54] = O),
          (n[55] = _e),
          (n[56] = re),
          (n[57] = X),
          (n[58] = ie),
          (n[59] = me),
          (n[60] = ge),
          (n[61] = he),
          (n[62] = l),
          (n[63] = ye))
        : (ye = n[63]);
      var Ce;
      n[64] !== te || n[65] !== F || n[66] !== fe || n[67] !== ye
        ? ((Ce = c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
            handlers: fe,
            onFocus: te,
            ref: F,
            children: ye,
          })),
          (n[64] = te),
          (n[65] = F),
          (n[66] = fe),
          (n[67] = ye),
          (n[68] = Ce))
        : (Ce = n[68]);
      var be;
      return (
        n[69] !== Y || n[70] !== Ce
          ? ((be = c.jsxs(c.Fragment, { children: [Ce, Y] })),
            (n[69] = Y),
            (n[70] = Ce),
            (n[71] = be))
          : (be = n[71]),
        be
      );
    }
    function v(e) {
      (e.stopPropagation(), e.preventDefault());
    }
    function S(e) {
      return e.participant;
    }
    function R(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.mergedMsgs,
        r = e.testidPrefix;
      if (n.length === 0) return null;
      var a = n[0],
        i;
      t[0] !== a || t[1] !== r
        ? ((i = r == null ? void 0 : "chatlist-message-" + a.id.toString()),
          (t[0] = a),
          (t[1] = r),
          (t[2] = i))
        : (i = t[2]);
      var l;
      return (
        t[3] !== a || t[4] !== e || t[5] !== i
          ? ((l = c.jsx(
              b,
              babelHelpers.extends({}, e, { msg: a, testid: void 0 }),
            )),
            (t[3] = a),
            (t[4] = e),
            (t[5] = i),
            (t[6] = l))
          : (l = t[6]),
        l
      );
    }
    ((l.CallLogIcon = g), (l.CallLogEntryCell = R));
  },
  226,
);
