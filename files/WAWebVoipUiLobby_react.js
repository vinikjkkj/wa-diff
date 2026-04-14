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
      var t = e.arePeersActive,
        n = e.callLogMsg,
        a = e.callState,
        i = e.isCallOutgoing,
        l = e.isInMiniPlayer,
        c = l === void 0 ? !1 : l,
        h = e.isSelfScreenSharing,
        y = e.isVideoCall,
        C = e.isVideoMuted,
        b = e.onRingParticipant,
        v = e.participantStates,
        S = e.participantsWithoutSelf,
        R = e.selfMicMuted,
        L = R === void 0 ? !1 : R,
        E = p(
          function () {
            if (!(i || n == null)) {
              var e = o("WAWebFrontendMsgGetters").getSenderObj(n);
              if (e != null)
                return o("WAWebFrontendContactGetters").getFormattedName(e);
            }
          },
          [i, n],
        ),
        k = i
          ? o("WAWebCallLogUtils").getCallStateText(a, n)
          : o("WAWebVoipLobbyUtils").getLobbyParticipantInfoText(n, i, E, a),
        I = p(
          function () {
            return n != null ? o("WAWebFrontendMsgGetters").getChat(n) : null;
          },
          [n],
        ),
        T = o("WAWebOutgoingGroupCallUtils").isAdHocGroupCall(),
        D = p(
          function () {
            if (T)
              return o(
                "WAWebOutgoingGroupCallUtils",
              ).getAdHocGroupCallNameOverride(S);
          },
          [T, S],
        ),
        x = n != null && o("WAWebMsgGetters").getIsCallLink(n) === !0,
        $ = x && n != null ? o("WAWebMsgGetters").getSender(n) : void 0,
        P = p(
          function () {
            if (!(!x || n == null)) {
              var e = o("WAWebFrontendMsgGetters").getSenderObj(n);
              if (e != null) {
                var t = o("WAWebFrontendContactGetters").getDisplayName(e);
                return s._(/*BTDS*/ "{creator_name}'s link", [
                  s._param("creator_name", t),
                ]);
              }
            }
          },
          [x, n],
        ),
        N = p(
          function () {
            return i
              ? []
              : o("WAWebVoipLobbyUtils").getConnectedParticipantsWithoutSelf(
                  S,
                  v,
                );
          },
          [i, S, v],
        ),
        M = !i && N.length > 0,
        w = f(!1),
        A = w[0],
        F = w[1],
        O = d(function () {
          F(function (e) {
            return !e;
          });
        }, []),
        B = _(!1),
        W = _(!1);
      return (
        m(
          function () {
            if (!i && S.length === 0) {
              (o(
                "WAWebVoipLobbyHeightUtils",
              ).WAWebVoipLobbyPanelStateEmitter.trigger("panelStateChanged", {
                isExpanded: !1,
                connectedParticipantCount: 0,
                isVideoCall: y,
                hasNoParticipants: !0,
              }),
                (W.current = !0));
              return;
            }
            if (M) {
              var e = B.current;
              B.current = A;
              var t = e !== A;
              if (!(W.current && !t && !A))
                return (
                  o(
                    "WAWebVoipLobbyHeightUtils",
                  ).WAWebVoipLobbyPanelStateEmitter.trigger(
                    "panelStateChanged",
                    {
                      isExpanded: A,
                      connectedParticipantCount: N.length,
                      isVideoCall: y,
                    },
                  ),
                  (W.current = !0),
                  function () {
                    o(
                      "WAWebVoipLobbyHeightUtils",
                    ).WAWebVoipLobbyPanelStateEmitter.trigger(
                      "panelStateChanged",
                      {
                        isExpanded: !1,
                        connectedParticipantCount: 0,
                        isVideoCall: y,
                      },
                    );
                  }
                );
            }
          },
          [M, i, y, A, N.length, S.length],
        ),
        u.jsx(o("WAWebFlex.react").FlexItem, {
          xstyle: g.lobbyOuterContainer,
          children: u.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: g.lobbyInnerContainer,
            children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
              xstyle: g.contentContainer,
              children: [
                u.jsx(o("WAWebFlex.react").FlexItem, {
                  align: "start",
                  xstyle: g.participantInfoSection,
                  children: u.jsx(r("WAWebCallParticipantInfo.react"), {
                    userId: (function () {
                      if (x && $ != null) return $;
                      if (!T) return I == null ? void 0 : I.id;
                    })(),
                    participantWids: !x && T && S.length > 0 ? S : void 0,
                    nameOverride: P != null ? P : D,
                    imageSize: "small",
                    textAlign: "start",
                    callStateText: k,
                    compact: !0,
                  }),
                }),
                y &&
                  u.jsx(o("WAWebFlex.react").FlexItem, {
                    xstyle: g.selfPreviewContainer,
                    align: "stretch",
                    children: u.jsx(
                      o("WAWebVoipUiVideoCallSelfPreview.react")
                        .WAWebVoipUiVideoCallSelfPreviewFullWidth,
                      {
                        isLobbyView: !0,
                        isSelfScreenSharing: h,
                        isVideoMuted: C,
                        nameOverride: s._(/*BTDS*/ "You"),
                        preserveVideoAspectRatio: !0,
                        selfMicMuted: L,
                      },
                    ),
                  }),
                M &&
                  u.jsx(o("WAWebFlex.react").FlexItem, {
                    xstyle: [
                      g.connectedParticipantsSection,
                      !y && g.connectedParticipantsSectionAudioCall,
                    ],
                    children: u.jsx(
                      r("WAWebVoipConnectedParticipantsInfo.react"),
                      {
                        allParticipants: S,
                        connectedParticipants: N,
                        isExpanded: A,
                        onToggle: O,
                      },
                    ),
                  }),
                S.length > 0 &&
                  (A || !M) &&
                  u.jsx(o("WAWebFlex.react").FlexItem, {
                    xstyle: g.participantPanelWrapper,
                    children: u.jsx(r("WAWebVoipUiParticipantPanel.react"), {
                      arePeersActive: t,
                      callState: a,
                      onRingParticipant: b,
                      participantsWithoutSelf: S,
                      participantStates: v,
                      showActionButton: i,
                      surface: "lobby",
                      transparentBackground: c,
                    }),
                  }),
              ],
            }),
          }),
        })
      );
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  226,
);
