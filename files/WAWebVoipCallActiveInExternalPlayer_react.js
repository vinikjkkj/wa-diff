__d(
  "WAWebVoipCallActiveInExternalPlayer.react",
  [
    "fbt",
    "WAWebCallCollection",
    "WAWebCallParticipantInfo.react",
    "WAWebContactCollection",
    "WAWebFlex.react",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebOutgoingGroupCallParticipantInfo.react",
    "WAWebOutgoingGroupCallUtils",
    "WAWebVoipEventConstants",
    "WAWebVoipUiManager",
    "WAWebVoipWaCallEnums",
    "WDSButton.react",
    "WDSColorStyles.stylex",
    "WDSIconWdsIcPipExitTopRightToBottomLeft.react",
    "react",
    "react-compiler-runtime",
    "useWAWebEventTargetValue",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useMemo,
      d = {
        fullWidth: { width: "xh8yej3", $$css: !0 },
        surfaceElevated: {
          marginTop: "x1380le5",
          marginInlineStart: "x150mmf0",
          marginInlineEnd: "xqf2s3x",
          borderStartStartRadius: "x6nvzda",
          borderStartEndRadius: "x4i4b9w",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          $$css: !0,
        },
        moveCallHereContainer: { width: "x1m22und", $$css: !0 },
        moveCallHereButton: {
          alignItems: "x6s0dn4",
          borderStartStartRadius: "x6nvzda",
          borderStartEndRadius: "x4i4b9w",
          borderEndEndRadius: "xhl9efl",
          borderEndStartRadius: "xj65ea0",
          display: "x78zum5",
          justifyContent: "xl56j7k",
          minHeight: "x21xpn4",
          paddingBottom: "x12xbjc7",
          paddingTop: "x16ovd2e",
          $$css: !0,
        },
        participantInfoWrapper: {
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          minWidth: "xeuugli",
          $$css: !0,
        },
        buttonWrapper: { flexShrink: "x2lah0s", $$css: !0 },
      };
    function m() {
      (window.focus(),
        o("WAWebVoipUiManager").closeVoipUiPopoutWindow({ callEnded: !1 }));
    }
    function p(e) {
      var t,
        n,
        a,
        i,
        l = o("react-compiler-runtime").c(29),
        c = e.msg,
        p;
      l[0] !== c
        ? ((p = c != null ? o("WAWebFrontendMsgGetters").getChat(c) : null),
          (l[0] = c),
          (l[1] = p))
        : (p = l[1]);
      var g = p,
        h =
          (t = r("WAWebCallCollection").activeCall) == null
            ? void 0
            : t.callLinkCreatorJid,
        y =
          (n =
            (a = r("WAWebCallCollection").activeCall) == null
              ? void 0
              : a.isCallLink) != null
            ? n
            : !1,
        C;
      e: {
        if (!y || h == null) {
          C = null;
          break e;
        }
        var b;
        if (l[2] === Symbol.for("react.memo_cache_sentinel")) {
          var v = o("WAWebContactCollection").ContactCollection.get(h);
          ((b =
            v != null
              ? o("WAWebFrontendContactGetters").getDisplayName(v)
              : null),
            (l[2] = b));
        } else b = l[2];
        C = b;
      }
      var S = C,
        R = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          "change:state",
          f,
        ),
        L =
          R === o("WAWebVoipWaCallEnums").CallState.Calling ||
          R === o("WAWebVoipWaCallEnums").CallState.PreacceptReceived,
        E;
      l[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents
              .GROUP_CALL_PARTICIPANT_STATES,
          )),
          (l[3] = E))
        : (E = l[3]);
      var k = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          E,
          _,
        ),
        I = k[0],
        T;
      l[4] !== I || l[5] !== L
        ? ((T = o(
            "WAWebOutgoingGroupCallUtils",
          ).getOutgoingGroupCallNameOverride(L, I)),
          (l[4] = I),
          (l[5] = L),
          (l[6] = T))
        : (T = l[6]);
      var D = T,
        x;
      l[7] !== I || l[8] !== L
        ? ((x = o(
            "WAWebOutgoingGroupCallUtils",
          ).getOutgoingGroupCallParticipants(L, I)),
          (l[7] = I),
          (l[8] = L),
          (l[9] = x))
        : (x = l[9]);
      var $ = x,
        P;
      l[10] !== I
        ? ((P = o("WAWebOutgoingGroupCallUtils").getAdHocGroupCallNameOverride(
            I,
          )),
          (l[10] = I),
          (l[11] = P))
        : (P = l[11]);
      var N = P,
        M;
      l[12] !== I
        ? ((M = o("WAWebOutgoingGroupCallUtils").getAdHocGroupCallParticipants(
            I,
          )),
          (l[12] = I),
          (l[13] = M))
        : (M = l[13]);
      var w = M,
        A = D != null ? D : N,
        F = $ != null ? $ : w,
        O;
      l[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((O = s._(/*BTDS*/ "Viewing in another window")), (l[14] = O))
        : (O = l[14]);
      var B = O,
        W = (i = g == null ? void 0 : g.id) != null ? i : y ? h : null,
        q;
      l[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((q =
            y && S != null
              ? s._(/*BTDS*/ "{name}'s link", [s._param("name", S)])
              : null),
          (l[15] = q))
        : (q = l[15]);
      var U = q,
        V;
      if (F != null && F.length > 1) {
        var H;
        (l[16] !== F || l[17] !== A
          ? ((H = u.jsx(r("WAWebOutgoingGroupCallParticipantInfo.react"), {
              callStateText: B,
              compact: !0,
              nameText: A,
              participantWids: F,
            })),
            (l[16] = F),
            (l[17] = A),
            (l[18] = H))
          : (H = l[18]),
          (V = H));
      } else if (W != null) {
        var G = U != null ? U : A,
          z;
        (l[19] !== G || l[20] !== W
          ? ((z = u.jsx(r("WAWebCallParticipantInfo.react"), {
              userId: W,
              compact: !0,
              imageSize: "small",
              callStateText: B,
              xstyle: d.fullWidth,
              audioLevelType: "peer",
              nameOverride: G,
            })),
            (l[19] = G),
            (l[20] = W),
            (l[21] = z))
          : (z = l[21]),
          (V = z));
      } else {
        var j;
        (l[22] === Symbol.for("react.memo_cache_sentinel")
          ? ((j = u.jsx(r("WAWebCallParticipantInfo.react"), {
              showCallStateTextOnly: !0,
              callStateText: B,
              compact: !0,
              xstyle: d.fullWidth,
            })),
            (l[22] = j))
          : (j = l[22]),
          (V = j));
      }
      var K;
      l[23] === Symbol.for("react.memo_cache_sentinel")
        ? ((K = [
            d.moveCallHereContainer,
            d.surfaceElevated,
            o("WDSColorStyles.stylex").WDSBackgroundColorStyles
              .surfaceElevatedEmphasized,
          ]),
          (l[23] = K))
        : (K = l[23]);
      var Q;
      l[24] !== V
        ? ((Q = u.jsx(o("WAWebFlex.react").FlexItem, {
            grow: 1,
            shrink: 1,
            basis: 0,
            xstyle: d.participantInfoWrapper,
            children: V,
          })),
          (l[24] = V),
          (l[25] = Q))
        : (Q = l[25]);
      var X;
      l[26] === Symbol.for("react.memo_cache_sentinel")
        ? ((X = u.jsx(o("WAWebFlex.react").FlexItem, {
            shrink: 0,
            xstyle: d.buttonWrapper,
            children: u.jsx(r("WDSButton.react"), {
              size: "small",
              Icon: r("WDSIconWdsIcPipExitTopRightToBottomLeft.react"),
              label: s._(/*BTDS*/ "Move here"),
              xstyle: [
                d.moveCallHereButton,
                o("WDSColorStyles.stylex").WDSBackgroundColorStyles
                  .persistentAlwaysWhite,
              ],
              onPress: m,
            }),
          })),
          (l[26] = X))
        : (X = l[26]);
      var Y;
      return (
        l[27] !== Q
          ? ((Y = u.jsx(o("WAWebFlex.react").FlexItem, {
              align: "center",
              xstyle: K,
              children: u.jsxs(o("WAWebFlex.react").FlexRow, {
                padding: 8,
                gap: 16,
                align: "center",
                children: [Q, X],
              }),
            })),
            (l[27] = Q),
            (l[28] = Y))
          : (Y = l[28]),
        Y
      );
    }
    function _() {
      var e, t;
      return [
        (e =
          (t = r("WAWebCallCollection").activeCall) == null
            ? void 0
            : t.groupCallParticipants) != null
          ? e
          : [],
      ];
    }
    function f() {
      var e;
      return (e = r("WAWebCallCollection").activeCall) == null
        ? void 0
        : e.getState();
    }
    l.default = p;
  },
  226,
);
