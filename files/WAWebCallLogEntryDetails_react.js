__d(
  "WAWebCallLogEntryDetails.react",
  [
    "fbt",
    "$InternalEnum",
    "WAWebCallButtonsSurface",
    "WAWebCallLogEntryCell.react",
    "WAWebCallLogEntryChatImage.react",
    "WAWebCallLogMsgData.flow",
    "WAWebCallLogParticipantsList.react",
    "WAWebCallLogTitle.react",
    "WAWebClock",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebFlex.react",
    "WAWebFlexBox.react",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebText.react",
    "WAWebUimUie.react",
    "WAWebVoipCallButtonsLoadable",
    "WAWebVoipCallsTabPanelManager",
    "WAWebVoipWaCallEnums",
    "WAWebWamEnumCallFromUi",
    "WAWebWamEnumLobbyEntryPointType",
    "WAWebXIcon.react",
    "WDSMenuBarItem.react",
    "err",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        drawerWithBorder: {
          borderInlineStartWidth: "xpilrb4",
          borderInlineStartStyle: "x1t7ytsu",
          borderInlineStartColor: "x1vb5itz",
          $$css: !0,
        },
        topPanelWrapper: {
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopColor: "xx42vgk",
          borderInlineEndColor: "xbogo7e",
          borderBottomColor: "x120ee7l",
          borderInlineStartColor: "x1vb5itz",
          borderStartStartRadius: "x1xn7y0n",
          borderStartEndRadius: "x1uxb8k9",
          $$css: !0,
        },
        bottomPanelWrapper: {
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopColor: "xx42vgk",
          borderInlineEndColor: "xbogo7e",
          borderBottomColor: "x120ee7l",
          borderInlineStartColor: "x1vb5itz",
          borderEndEndRadius: "x1vmbcc8",
          borderEndStartRadius: "x16xm01d",
          borderStartStartRadius: "x1bczwif",
          borderStartEndRadius: "x17un8ov",
          $$css: !0,
        },
        headerWrapper: { borderBottomStyle: "x1sy0etr", $$css: !0 },
        panelHeader: { width: "xh8yej3", boxSizing: "x9f619", $$css: !0 },
        image: { minWidth: "xayfy2v", $$css: !0 },
        callBtnsWrapper: { marginInlineStart: "xvc5jky", $$css: !0 },
        callLogRow: { width: "xh8yej3", $$css: !0 },
        participantsListContainer: {
          width: "xh8yej3",
          boxSizing: "x9f619",
          $$css: !0,
        },
        marginStart4: { marginInlineStart: "x1wbi8v6", $$css: !0 },
        marginEnd8: { marginInlineEnd: "xqf2s3x", $$css: !0 },
        marginHoriz4: {
          marginInlineStart: "x1wbi8v6",
          marginInlineEnd: "x7g7pl8",
          marginLeft: null,
          marginRight: null,
          $$css: !0,
        },
        marginTop16: { marginTop: "x98l61r", $$css: !0 },
        marginVert8: {
          marginTop: "x1380le5",
          marginBottom: "xefnzgg",
          $$css: !0,
        },
        paddingAll12: {
          paddingTop: "x1xrf6ya",
          paddingInlineEnd: "xde1mab",
          paddingBottom: "xscbp6u",
          paddingInlineStart: "x1iw51ew",
          $$css: !0,
        },
        paddingStart16: { paddingInlineStart: "xdx6fka", $$css: !0 },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(82),
        n = e.callLogMsgs;
      if (n.length === 0)
        throw r("err")(
          "Call log entry details panel requires at least one call log msg",
        );
      var a = n[0],
        i;
      t[0] !== a
        ? ((i = o("WAWebFrontendMsgGetters").getChat(a)),
          (t[0] = a),
          (t[1] = i))
        : (i = t[1]);
      var l = i,
        d;
      t[2] !== a
        ? ((d = o("WAWebMsgGetters").getIsGroupCall(a)), (t[2] = a), (t[3] = d))
        : (d = t[3]);
      var g = d,
        h;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = [
            o("WAWebMsgGetters").getCallParticipants,
            o("WAWebMsgGetters").getCallLinkToken,
            o("WAWebMsgGetters").getIsVideoCall,
          ]),
          (t[4] = h))
        : (h = t[4]);
      var y = o("useWAWebMsgValues").useMsgValues(a.id, h),
        C = y[0],
        b = y[1],
        v = y[2],
        S;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = []), (t[5] = S))
        : (S = t[5]);
      var R = S;
      if (C != null) {
        var L;
        (t[6] !== C ? ((L = C.map(f)), (t[6] = C), (t[7] = L)) : (L = t[7]),
          (R = L));
      }
      var E, k, I, T, D, x, $, P, N, M, w, A, F, O, B, W;
      if (
        t[8] !== b ||
        t[9] !== n ||
        t[10] !== l ||
        t[11] !== g ||
        t[12] !== v ||
        t[13] !== a ||
        t[14] !== R
      ) {
        var q = n.reduce(_, new Map()),
          U = p;
        ((D = o("WAWebUimUie.react").UIE),
          (N = "CallLogEntryDetails"),
          (M = !0),
          (w = U),
          (T = r("WAWebDrawer.react")),
          (W = "white-bg"),
          (x = c.drawerWithBorder),
          t[31] === Symbol.for("react.memo_cache_sentinel")
            ? (($ = { surface: "unknown", viewName: "call-log-details" }),
              (t[31] = $))
            : ($ = t[31]));
        var V;
        (t[32] === Symbol.for("react.memo_cache_sentinel")
          ? ((V = s._(/*BTDS*/ "Call info")), (t[32] = V))
          : (V = t[32]),
          t[33] === Symbol.for("react.memo_cache_sentinel")
            ? ((P = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
                type: "tab",
                children: u.jsxs(o("WAWebFlexBox.react").FlexRow, {
                  align: "center",
                  justify: "all",
                  children: [
                    V,
                    u.jsx(r("WDSMenuBarItem.react"), {
                      icon: o("WAWebXIcon.react").XIcon,
                      onClick: U,
                      testid: void 0,
                      title: s._(/*BTDS*/ "Close"),
                    }),
                  ],
                }),
              })),
              (t[33] = P))
            : (P = t[33]),
          (I = r("WAWebDrawerBody.react")),
          (k = r("WAWebDrawerSection.react")),
          (O = "refresh-new"));
        var H;
        t[34] === Symbol.for("react.memo_cache_sentinel")
          ? ((H = [c.topPanelWrapper, c.headerWrapper]), (t[34] = H))
          : (H = t[34]);
        var G;
        t[35] === Symbol.for("react.memo_cache_sentinel")
          ? ((G = [c.paddingAll12, c.panelHeader]), (t[35] = G))
          : (G = t[35]);
        var z;
        t[36] === Symbol.for("react.memo_cache_sentinel")
          ? ((z = [c.image, c.marginStart4, c.marginEnd8]), (t[36] = z))
          : (z = t[36]);
        var j;
        t[37] !== a
          ? ((j = u.jsx(o("WAWebFlex.react").FlexItem, {
              xstyle: z,
              children: u.jsx(r("WAWebCallLogEntryChatImage.react"), {
                msg: a,
              }),
            })),
            (t[37] = a),
            (t[38] = j))
          : (j = t[38]);
        var K;
        t[39] !== a
          ? ((K = u.jsx(o("WAWebFlex.react").FlexItem, {
              xstyle: c.marginHoriz4,
              grow: 1,
              children: u.jsx(r("WAWebCallLogTitle.react"), {
                callLogMsg: a,
                isCallInfoHeader: !0,
              }),
            })),
            (t[39] = a),
            (t[40] = K))
          : (K = t[40]);
        var Q = g
            ? o("WAWebWamEnumCallFromUi").CALL_FROM_UI.GROUP_CALL_INFO
            : o("WAWebWamEnumCallFromUi").CALL_FROM_UI.CALL_INFO,
          X = b != null ? b : "",
          Y = v != null ? v : !1,
          J;
        (t[41] !== l || t[42] !== R || t[43] !== Q || t[44] !== X || t[45] !== Y
          ? ((J = u.jsx(o("WAWebFlexBox.react").FlexRow, {
              xstyle: c.callBtnsWrapper,
              children: u.jsx(
                o("WAWebVoipCallButtonsLoadable").WAWebCallButtonsLoadable,
                {
                  callFromUI: Q,
                  lobbyEntryPoint: o("WAWebWamEnumLobbyEntryPointType")
                    .LOBBY_ENTRY_POINT_TYPE.NOT_OPENED,
                  surface: o("WAWebCallButtonsSurface").WAWebCallButtonsSurface
                    .CallLogDetails,
                  chat: l,
                  participants: R,
                  callLinkCode: X,
                  isCallLinkVideo: Y,
                },
              ),
            })),
            (t[41] = l),
            (t[42] = R),
            (t[43] = Q),
            (t[44] = X),
            (t[45] = Y),
            (t[46] = J))
          : (J = t[46]),
          t[47] !== j || t[48] !== K || t[49] !== J
            ? ((B = u.jsx(o("WAWebFlex.react").FlexColumn, {
                xstyle: H,
                children: u.jsxs(o("WAWebFlexBox.react").FlexRow, {
                  align: "center",
                  justify: "all",
                  xstyle: G,
                  children: [j, K, J],
                }),
              })),
              (t[47] = j),
              (t[48] = K),
              (t[49] = J),
              (t[50] = B))
            : (B = t[50]),
          (E = o("WAWebFlex.react").FlexColumn),
          t[51] === Symbol.for("react.memo_cache_sentinel")
            ? ((A = [c.bottomPanelWrapper, c.paddingAll12, c.paddingStart16]),
              (t[51] = A))
            : (A = t[51]),
          (F = q.entries().map(m)),
          (t[8] = b),
          (t[9] = n),
          (t[10] = l),
          (t[11] = g),
          (t[12] = v),
          (t[13] = a),
          (t[14] = R),
          (t[15] = E),
          (t[16] = k),
          (t[17] = I),
          (t[18] = T),
          (t[19] = D),
          (t[20] = x),
          (t[21] = $),
          (t[22] = P),
          (t[23] = N),
          (t[24] = M),
          (t[25] = w),
          (t[26] = A),
          (t[27] = F),
          (t[28] = O),
          (t[29] = B),
          (t[30] = W));
      } else
        ((E = t[15]),
          (k = t[16]),
          (I = t[17]),
          (T = t[18]),
          (D = t[19]),
          (x = t[20]),
          ($ = t[21]),
          (P = t[22]),
          (N = t[23]),
          (M = t[24]),
          (w = t[25]),
          (A = t[26]),
          (F = t[27]),
          (O = t[28]),
          (B = t[29]),
          (W = t[30]));
      var Z;
      t[52] !== g || t[53] !== a || t[54] !== C
        ? ((Z =
            g &&
            C &&
            C.length > 1 &&
            u.jsx(o("WAWebFlex.react").FlexItem, {
              xstyle: [c.marginTop16, c.participantsListContainer],
              children: u.jsx(r("WAWebCallLogParticipantsList.react"), {
                callLogMsg: a,
              }),
            })),
          (t[52] = g),
          (t[53] = a),
          (t[54] = C),
          (t[55] = Z))
        : (Z = t[55]);
      var ee;
      t[56] !== E || t[57] !== Z || t[58] !== A || t[59] !== F
        ? ((ee = u.jsxs(E, { xstyle: A, children: [F, Z] })),
          (t[56] = E),
          (t[57] = Z),
          (t[58] = A),
          (t[59] = F),
          (t[60] = ee))
        : (ee = t[60]);
      var te;
      t[61] !== k || t[62] !== ee || t[63] !== O || t[64] !== B
        ? ((te = u.jsxs(k, { theme: O, children: [B, ee] })),
          (t[61] = k),
          (t[62] = ee),
          (t[63] = O),
          (t[64] = B),
          (t[65] = te))
        : (te = t[65]);
      var ne;
      t[66] !== I || t[67] !== te
        ? ((ne = u.jsx(I, { children: te })),
          (t[66] = I),
          (t[67] = te),
          (t[68] = ne))
        : (ne = t[68]);
      var re;
      t[69] !== T ||
      t[70] !== x ||
      t[71] !== $ ||
      t[72] !== P ||
      t[73] !== ne ||
      t[74] !== W
        ? ((re = u.jsxs(T, {
            theme: W,
            xstyle: x,
            tsNavigationData: $,
            children: [P, ne],
          })),
          (t[69] = T),
          (t[70] = x),
          (t[71] = $),
          (t[72] = P),
          (t[73] = ne),
          (t[74] = W),
          (t[75] = re))
        : (re = t[75]);
      var oe;
      return (
        t[76] !== D || t[77] !== N || t[78] !== M || t[79] !== w || t[80] !== re
          ? ((oe = u.jsx(D, {
              displayName: N,
              escapable: M,
              requestDismiss: w,
              children: re,
            })),
            (t[76] = D),
            (t[77] = N),
            (t[78] = M),
            (t[79] = w),
            (t[80] = re),
            (t[81] = oe))
          : (oe = t[81]),
        oe
      );
    }
    function m(e) {
      var t = e[0],
        n = e[1];
      return u.jsx(g, { callLogMsgs: n, date: t }, t);
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p() {
      r("WAWebVoipCallsTabPanelManager").trigger("closeCallLogInfoPanel");
    }
    function _(e, t) {
      var n,
        r = o("WAWebClock").Clock.relativeDateStr(t.t);
      return (
        e.has(r.toString()) || e.set(r.toString(), []),
        (n = e.get(r.toString())) == null || n.push(t),
        e
      );
    }
    function f(e) {
      return e.participant;
    }
    function g(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.callLogMsgs,
        r = e.date,
        a;
      t[0] !== r
        ? ((a = u.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: c.marginVert8,
            children: u.jsx(o("WAWebText.react").WAWebTextMuted, {
              children: r,
            }),
          })),
          (t[0] = r),
          (t[1] = a))
        : (a = t[1]);
      var i;
      t[2] !== n ? ((i = n.map(h)), (t[2] = n), (t[3] = i)) : (i = t[3]);
      var l;
      return (
        t[4] !== a || t[5] !== i
          ? ((l = u.jsxs(o("WAWebFlex.react").FlexColumn, {
              xstyle: c.panelHeader,
              children: [a, i],
            })),
            (t[4] = a),
            (t[5] = i),
            (t[6] = l))
          : (l = t[6]),
        l
      );
    }
    function h(e) {
      var t;
      return u.jsxs(
        o("WAWebFlexBox.react").FlexRow,
        {
          align: "start",
          justify: "all",
          xstyle: [c.marginVert8, c.callLogRow],
          children: [
            u.jsxs(o("WAWebFlexBox.react").FlexRow, {
              align: "start",
              children: [
                u.jsx(o("WAWebCallLogEntryCell.react").CallLogIcon, {
                  iconHeight: 20,
                  isMissedCall: o("WAWebMsgGetters").getIsMissedCall(e),
                  isVideoCall: o("WAWebMsgGetters").getIsVideoCall(e),
                  isFromMe: o("WAWebMsgGetters").getIsSentByMe(e),
                  isCallLink:
                    (t = o("WAWebMsgGetters").getIsCallLink(e)) != null
                      ? t
                      : !1,
                  xstyle: c.marginEnd8,
                }),
                "\xA0",
                u.jsx(C, { msg: e }),
              ],
            }),
            u.jsx(b, { msg: e }),
          ],
        },
        e.id.toString(),
      );
    }
    h.displayName = h.name + " [from " + i.id + "]";
    var y = n("$InternalEnum").Mirrored([
      "MISSED",
      "OUTGOING",
      "INCOMING",
      "CALLLINKVIDEO",
      "CALLLINKVOICE",
    ]);
    function C(e) {
      var t,
        n,
        r = e.msg,
        a = (n = o("WAWebMsgGetters")).getIsMissedCall(r),
        i = n.getIsSentByMe(r),
        l = n.getIsVideoCall(r),
        c = n.getIsGroupCall(r),
        d = (t = o("WAWebMsgGetters").getIsCallLink(r)) != null ? t : !1,
        m;
      a
        ? (m = y.MISSED)
        : d
          ? (m = l === !0 ? y.CALLLINKVIDEO : y.CALLLINKVOICE)
          : (m = i ? y.OUTGOING : y.INCOMING);
      var p;
      return (
        d ? (p = "NONE") : l ? (p = "VIDEO") : (p = "VOICE"),
        u.jsx(o("WAWebText.react").WAWebTextMuted, {
          color: "primary",
          children: s._(
            /*BTDS*/ '_j{"MISSED":{"0":{"VOICE":{"*":"Missed voice call at {call-log-entry-time}"},"VIDEO":{"*":"Missed video call at {call-log-entry-time}"},"NONE":{"*":"Missed call at {call-log-entry-time}"}},"1":{"VOICE":{"*":"Missed group voice call at {call-log-entry-time}"},"VIDEO":{"*":"Missed group video call at {call-log-entry-time}"},"NONE":{"*":"Missed group call at {call-log-entry-time}"}}},"OUTGOING":{"0":{"VOICE":{"*":"Outgoing voice call at {call-log-entry-time}"},"VIDEO":{"*":"Outgoing video call at {call-log-entry-time}"},"NONE":{"*":"Outgoing call at {call-log-entry-time}"}},"1":{"VOICE":{"*":"Outgoing group voice call at {call-log-entry-time}"},"VIDEO":{"*":"Outgoing group video call at {call-log-entry-time}"},"NONE":{"*":"Outgoing group call at {call-log-entry-time}"}}},"INCOMING":{"0":{"VOICE":{"*":"Incoming voice call at {call-log-entry-time}"},"VIDEO":{"*":"Incoming video call at {call-log-entry-time}"},"NONE":{"*":"Incoming call at {call-log-entry-time}"}},"1":{"VOICE":{"*":"Incoming group voice call at {call-log-entry-time}"},"VIDEO":{"*":"Incoming group video call at {call-log-entry-time}"},"NONE":{"*":"Incoming group call at {call-log-entry-time}"}}},"CALLLINKVIDEO":{"0":{"VOICE":{"*":"Video voice call at {call-log-entry-time}"},"VIDEO":{"*":"Video video call at {call-log-entry-time}"},"NONE":{"*":"Video call at {call-log-entry-time}"}},"1":{"VOICE":{"*":"Video group voice call at {call-log-entry-time}"},"VIDEO":{"*":"Video group video call at {call-log-entry-time}"},"NONE":{"*":"Video group call at {call-log-entry-time}"}}},"CALLLINKVOICE":{"0":{"VOICE":{"*":"Voice voice call at {call-log-entry-time}"},"VIDEO":{"*":"Voice video call at {call-log-entry-time}"},"NONE":{"*":"Voice call at {call-log-entry-time}"}},"1":{"VOICE":{"*":"Voice group voice call at {call-log-entry-time}"},"VIDEO":{"*":"Voice group video call at {call-log-entry-time}"},"NONE":{"*":"Voice group call at {call-log-entry-time}"}}}}',
            [
              s._enum(m, {
                MISSED: "Missed",
                OUTGOING: "Outgoing",
                INCOMING: "Incoming",
                CALLLINKVIDEO: "Video",
                CALLLINKVOICE: "Voice",
              }),
              s._enum(c && !d ? 1 : 0, { 0: "", 1: " group " }),
              s._enum(p, { VOICE: "voice", VIDEO: "video", NONE: "" }),
              s._param(
                "call-log-entry-time",
                o("WAWebClock").Clock.timestampStr(r.t),
                [0, o("WAWebClock").Clock.timestampHour(r.t)],
              ),
            ],
          ),
        })
      );
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.msg,
        r;
      if (t[0] !== n) {
        var a,
          i = o("WAWebMsgGetters").getCallDuration(n),
          l =
            (a = o("WAWebMsgGetters").getCallOutcome(n)) != null
              ? a
              : o("WAWebCallLogMsgData.flow").CallOutcome.Unknown;
        if (
          i != null &&
          l === o("WAWebCallLogMsgData.flow").CallOutcome.Completed
        )
          if (
            o("WAWebMsgGetters").getIsGroupCall(n) &&
            o("WAWebMsgGetters").getIsSentByMe(n) &&
            !v(n)
          ) {
            var c;
            (t[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((c = s._(/*BTDS*/ "Unanswered")), (t[2] = c))
              : (c = t[2]),
              (r = c));
          } else r = o("WAWebClock").Clock.callDurationStr(i);
        else if (
          l === o("WAWebCallLogMsgData.flow").CallOutcome.AcceptedElsewhere
        ) {
          var d;
          (t[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((d = s._(/*BTDS*/ "Accepted on another device")), (t[3] = d))
            : (d = t[3]),
            (r = d));
        } else if (
          l === o("WAWebCallLogMsgData.flow").CallOutcome.Completed ||
          l === o("WAWebCallLogMsgData.flow").CallOutcome.Unknown
        ) {
          var m;
          (t[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((m = s._(/*BTDS*/ "Unknown")), (t[4] = m))
            : (m = t[4]),
            (r = m));
        } else if (
          l === o("WAWebCallLogMsgData.flow").CallOutcome.Missed &&
          o("WAWebMsgGetters").getIsCallSilenced(n)
        ) {
          var p;
          (t[5] === Symbol.for("react.memo_cache_sentinel")
            ? ((p = s._(/*BTDS*/ "Silenced")), (t[5] = p))
            : (p = t[5]),
            (r = p));
        } else {
          var _;
          (t[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((_ = s._(/*BTDS*/ "Unanswered")), (t[6] = _))
            : (_ = t[6]),
            (r = _));
        }
        ((t[0] = n), (t[1] = r));
      } else r = t[1];
      var f;
      return (
        t[7] !== r
          ? ((f = u.jsx(o("WAWebText.react").WAWebTextMuted, { children: r })),
            (t[7] = r),
            (t[8] = f))
          : (f = t[8]),
        f
      );
    }
    function v(e) {
      var t = o("WAWebMsgGetters").getCallParticipants(e);
      if (t == null) return !1;
      var n = t.filter(function (e) {
        return (
          e.outcome === o("WAWebVoipWaCallEnums").CallParticipantState.Connected
        );
      }).length;
      return n > 1;
    }
    l.default = d;
  },
  226,
);
