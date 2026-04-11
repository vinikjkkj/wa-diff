__d(
  "WAWebVoipUiLobby.react",
  [
    "fbt",
    "WAWebCallLogUtils",
    "WAWebCallParticipantInfo.react",
    "WAWebFlex.react",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebOutgoingGroupCallUtils",
    "WAWebVoipConnectedParticipantsInfo.react",
    "WAWebVoipLobbyHeightUtils",
    "WAWebVoipLobbyUtils",
    "WAWebVoipUiParticipantPanel.react",
    "WAWebVoipUiVideoCallSelfPreview.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useEffect,
      p = c.useMemo,
      _ = c.useRef,
      f = c.useState,
      g = {
        lobbyOuterContainer: {
          position: "x1n2onr6",
          display: "x78zum5",
          height: "x5yr21d",
          width: "xh8yej3",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        lobbyInnerContainer: {
          position: "x10l6tqk",
          top: "x13vifvy",
          insetInlineStart: "x1o0tod",
          left: null,
          right: null,
          width: "xh8yej3",
          height: "x5yr21d",
          display: "x78zum5",
          $$css: !0,
        },
        contentContainer: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          alignItems: "x6s0dn4",
          height: "x5yr21d",
          width: "xh8yej3",
          paddingTop: "x16ovd2e",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x4tra6z",
          paddingInlineEnd: "x1j8ymqv",
          boxSizing: "x9f619",
          backgroundColor: "x1c7u0tx",
          $$css: !0,
        },
        participantInfoSection: {
          flexShrink: "x2lah0s",
          paddingTop: "x16ovd2e",
          paddingInlineEnd: "x1nzty39",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "x12w63v0",
          marginInlineStart: "x150mmf0",
          marginInlineEnd: "xqf2s3x",
          marginLeft: null,
          marginRight: null,
          backgroundColor: "x16w0wmm",
          borderStartStartRadius: "x6nvzda",
          borderStartEndRadius: "x4i4b9w",
          borderEndEndRadius: "xhl9efl",
          borderEndStartRadius: "xj65ea0",
          width: "x1unu1t6",
          boxSizing: "x9f619",
          $$css: !0,
        },
        selfPreviewContainer: {
          width: "xh8yej3",
          flexGrow: "x1iyjqo2",
          flexShrink: "xs83m0k",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          boxSizing: "x9f619",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          marginTop: "x1380le5",
          marginBottom: "xefnzgg",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          $$css: !0,
        },
        participantPanelWrapper: {
          flexGrow: "x1iyjqo2",
          flexShrink: "xs83m0k",
          alignSelf: "xkh2ocl",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        connectedParticipantsSection: {
          width: "xh8yej3",
          paddingInlineStart: "x12w63v0",
          paddingInlineEnd: "x1nzty39",
          paddingLeft: null,
          paddingRight: null,
          boxSizing: "x9f619",
          flexShrink: "x2lah0s",
          $$css: !0,
        },
        connectedParticipantsSectionAudioCall: {
          marginTop: "x1380le5",
          $$css: !0,
        },
      };
    function h(e) {
      var t = o("react-compiler-runtime").c(64),
        n = e.arePeersActive,
        a = e.callLogMsg,
        i = e.callState,
        l = e.isCallOutgoing,
        c = e.isInMiniPlayer,
        d = e.isSelfScreenSharing,
        p = e.isVideoCall,
        h = e.isVideoMuted,
        C = e.onRingParticipant,
        b = e.participantStates,
        v = e.participantsWithoutSelf,
        S = e.selfMicMuted,
        R = c === void 0 ? !1 : c,
        L = S === void 0 ? !1 : S,
        E;
      if (t[0] !== a || t[1] !== l) {
        e: {
          if (l || a == null) {
            E = void 0;
            break e;
          }
          var k = o("WAWebFrontendMsgGetters").getSenderObj(a);
          if (k == null) {
            E = void 0;
            break e;
          }
          E = o("WAWebFrontendContactGetters").getFormattedName(k);
        }
        ((t[0] = a), (t[1] = l), (t[2] = E));
      } else E = t[2];
      var I = E,
        T;
      t[3] !== I || t[4] !== a || t[5] !== i || t[6] !== l
        ? ((T = l
            ? o("WAWebCallLogUtils").getCallStateText(i, a)
            : o("WAWebVoipLobbyUtils").getLobbyParticipantInfoText(a, l, I, i)),
          (t[3] = I),
          (t[4] = a),
          (t[5] = i),
          (t[6] = l),
          (t[7] = T))
        : (T = t[7]);
      var D = T,
        x;
      t[8] !== a
        ? ((x = a != null ? o("WAWebFrontendMsgGetters").getChat(a) : null),
          (t[8] = a),
          (t[9] = x))
        : (x = t[9]);
      var $ = x,
        P = o("WAWebOutgoingGroupCallUtils").isAdHocGroupCall(),
        N;
      e: {
        if (!P) {
          N = void 0;
          break e;
        }
        var M;
        (t[10] !== v
          ? ((M = o(
              "WAWebOutgoingGroupCallUtils",
            ).getAdHocGroupCallNameOverride(v)),
            (t[10] = v),
            (t[11] = M))
          : (M = t[11]),
          (N = M));
      }
      var w = N,
        A;
      t[12] !== a
        ? ((A = a != null && o("WAWebMsgGetters").getIsCallLink(a) === !0),
          (t[12] = a),
          (t[13] = A))
        : (A = t[13]);
      var F = A,
        O;
      t[14] !== a || t[15] !== F
        ? ((O = F && a != null ? o("WAWebMsgGetters").getSender(a) : void 0),
          (t[14] = a),
          (t[15] = F),
          (t[16] = O))
        : (O = t[16]);
      var B = O,
        W;
      if (t[17] !== a || t[18] !== F) {
        e: {
          if (!F || a == null) {
            W = void 0;
            break e;
          }
          var q = o("WAWebFrontendMsgGetters").getSenderObj(a);
          if (q == null) {
            W = void 0;
            break e;
          }
          var U = o("WAWebFrontendContactGetters").getDisplayName(q);
          W = s._(/*BTDS*/ "{creator_name}'s link", [
            s._param("creator_name", U),
          ]);
        }
        ((t[17] = a), (t[18] = F), (t[19] = W));
      } else W = t[19];
      var V = W,
        H;
      e: {
        if (l) {
          var G;
          (t[20] === Symbol.for("react.memo_cache_sentinel")
            ? ((G = []), (t[20] = G))
            : (G = t[20]),
            (H = G));
          break e;
        }
        var z;
        (t[21] !== b || t[22] !== v
          ? ((z = o("WAWebVoipLobbyUtils").getConnectedParticipantsWithoutSelf(
              v,
              b,
            )),
            (t[21] = b),
            (t[22] = v),
            (t[23] = z))
          : (z = t[23]),
          (H = z));
      }
      var j = H,
        K = !l && j.length > 0,
        Q = f(!1),
        X = Q[0],
        Y = Q[1],
        J;
      t[24] === Symbol.for("react.memo_cache_sentinel")
        ? ((J = function () {
            Y(y);
          }),
          (t[24] = J))
        : (J = t[24]);
      var Z = J,
        ee = _(!1),
        te,
        ne;
      (t[25] !== j.length ||
      t[26] !== l ||
      t[27] !== X ||
      t[28] !== p ||
      t[29] !== v.length ||
      t[30] !== K
        ? ((te = function () {
            if (!l && v.length === 0) {
              o(
                "WAWebVoipLobbyHeightUtils",
              ).WAWebVoipLobbyPanelStateEmitter.trigger("panelStateChanged", {
                isExpanded: !1,
                connectedParticipantCount: 0,
                isVideoCall: p,
                hasNoParticipants: !0,
              });
              return;
            }
            if (K) {
              var e = ee.current;
              ee.current = X;
              var t = e !== X;
              if (!(!t && !X))
                return (
                  o(
                    "WAWebVoipLobbyHeightUtils",
                  ).WAWebVoipLobbyPanelStateEmitter.trigger(
                    "panelStateChanged",
                    {
                      isExpanded: X,
                      connectedParticipantCount: j.length,
                      isVideoCall: p,
                    },
                  ),
                  function () {
                    o(
                      "WAWebVoipLobbyHeightUtils",
                    ).WAWebVoipLobbyPanelStateEmitter.trigger(
                      "panelStateChanged",
                      {
                        isExpanded: !1,
                        connectedParticipantCount: 0,
                        isVideoCall: p,
                      },
                    );
                  }
                );
            }
          }),
          (ne = [K, l, p, X, j.length, v.length]),
          (t[25] = j.length),
          (t[26] = l),
          (t[27] = X),
          (t[28] = p),
          (t[29] = v.length),
          (t[30] = K),
          (t[31] = te),
          (t[32] = ne))
        : ((te = t[31]), (ne = t[32])),
        m(te, ne));
      var re;
      e: {
        if (F && B != null) {
          re = B;
          break e;
        }
        if (P) {
          re = void 0;
          break e;
        }
        re = $ == null ? void 0 : $.id;
      }
      var oe = !F && P && v.length > 0 ? v : void 0,
        ae = V != null ? V : w,
        ie;
      t[33] !== D || t[34] !== re || t[35] !== oe || t[36] !== ae
        ? ((ie = u.jsx(o("WAWebFlex.react").FlexItem, {
            align: "start",
            xstyle: g.participantInfoSection,
            children: u.jsx(r("WAWebCallParticipantInfo.react"), {
              userId: re,
              participantWids: oe,
              nameOverride: ae,
              imageSize: "small",
              textAlign: "start",
              callStateText: D,
              compact: !0,
            }),
          })),
          (t[33] = D),
          (t[34] = re),
          (t[35] = oe),
          (t[36] = ae),
          (t[37] = ie))
        : (ie = t[37]);
      var le;
      t[38] !== d || t[39] !== p || t[40] !== h || t[41] !== L
        ? ((le =
            p &&
            u.jsx(o("WAWebFlex.react").FlexItem, {
              xstyle: g.selfPreviewContainer,
              align: "stretch",
              children: u.jsx(
                o("WAWebVoipUiVideoCallSelfPreview.react")
                  .WAWebVoipUiVideoCallSelfPreviewFullWidth,
                {
                  isLobbyView: !0,
                  isSelfScreenSharing: d,
                  isVideoMuted: h,
                  nameOverride: s._(/*BTDS*/ "You"),
                  preserveVideoAspectRatio: !0,
                  selfMicMuted: L,
                },
              ),
            })),
          (t[38] = d),
          (t[39] = p),
          (t[40] = h),
          (t[41] = L),
          (t[42] = le))
        : (le = t[42]);
      var se;
      t[43] !== j || t[44] !== X || t[45] !== p || t[46] !== v || t[47] !== K
        ? ((se =
            K &&
            u.jsx(o("WAWebFlex.react").FlexItem, {
              xstyle: [
                g.connectedParticipantsSection,
                !p && g.connectedParticipantsSectionAudioCall,
              ],
              children: u.jsx(r("WAWebVoipConnectedParticipantsInfo.react"), {
                allParticipants: v,
                connectedParticipants: j,
                isExpanded: X,
                onToggle: Z,
              }),
            })),
          (t[43] = j),
          (t[44] = X),
          (t[45] = p),
          (t[46] = v),
          (t[47] = K),
          (t[48] = se))
        : (se = t[48]);
      var ue;
      t[49] !== n ||
      t[50] !== i ||
      t[51] !== l ||
      t[52] !== R ||
      t[53] !== X ||
      t[54] !== C ||
      t[55] !== b ||
      t[56] !== v ||
      t[57] !== K
        ? ((ue =
            v.length > 0 &&
            (X || !K) &&
            u.jsx(o("WAWebFlex.react").FlexItem, {
              xstyle: g.participantPanelWrapper,
              children: u.jsx(r("WAWebVoipUiParticipantPanel.react"), {
                arePeersActive: n,
                callState: i,
                onRingParticipant: C,
                participantsWithoutSelf: v,
                participantStates: b,
                showActionButton: l,
                surface: "lobby",
                transparentBackground: R,
              }),
            })),
          (t[49] = n),
          (t[50] = i),
          (t[51] = l),
          (t[52] = R),
          (t[53] = X),
          (t[54] = C),
          (t[55] = b),
          (t[56] = v),
          (t[57] = K),
          (t[58] = ue))
        : (ue = t[58]);
      var ce;
      return (
        t[59] !== ie || t[60] !== le || t[61] !== se || t[62] !== ue
          ? ((ce = u.jsx(o("WAWebFlex.react").FlexItem, {
              xstyle: g.lobbyOuterContainer,
              children: u.jsx(o("WAWebFlex.react").FlexItem, {
                xstyle: g.lobbyInnerContainer,
                children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
                  xstyle: g.contentContainer,
                  children: [ie, le, se, ue],
                }),
              }),
            })),
            (t[59] = ie),
            (t[60] = le),
            (t[61] = se),
            (t[62] = ue),
            (t[63] = ce))
          : (ce = t[63]),
        ce
      );
    }
    function y(e) {
      return !e;
    }
    l.default = h;
  },
  226,
);
