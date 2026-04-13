__d(
  "WAWebVoipUiParticipantPanel.react",
  [
    "fbt",
    "WAWebCallLogUtils",
    "WAWebContactCollection",
    "WAWebContactImage.react",
    "WAWebFlex.react",
    "WAWebName.react",
    "WAWebNoop",
    "WAWebVoipUiPopoutWindowContext",
    "WAWebVoipWaCallEnums",
    "WDSButton.react",
    "WDSIconIcMoreHoriz.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useContext,
      m = c.useMemo,
      p = 0.5,
      _ = "xxodl7o-B",
      f = {
        participantPanelContainer: {
          backgroundColor: "x1od0jb8",
          borderStartStartRadius: "x6nvzda",
          borderStartEndRadius: "x4i4b9w",
          borderEndEndRadius: "xhl9efl",
          borderEndStartRadius: "xj65ea0",
          height: "x5yr21d",
          width: "xh8yej3",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        transparentBackground: { backgroundColor: "xjbqb8w", $$css: !0 },
        participantPanel: {
          height: "x5yr21d",
          width: "xh8yej3",
          overflowX: "x6ikm8r",
          overflowY: "x1odjw0f",
          paddingInlineEnd: "x1nzty39",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "x12w63v0",
          paddingTop: "xexx8yu",
          boxSizing: "x9f619",
          $$css: !0,
        },
        participantPanelStatic: {
          width: "xh8yej3",
          paddingInlineEnd: "x1nzty39",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "x12w63v0",
          paddingTop: "xexx8yu",
          boxSizing: "x9f619",
          $$css: !0,
        },
        participantPanelContainerStatic: {
          height: "xt7dq6l",
          overflowX: "x1plvlek",
          overflowY: "xryxfnj",
          $$css: !0,
        },
        sectionHeader: {
          paddingBottom: "x1nbhmlj",
          paddingTop: "x16ovd2e",
          paddingInlineStart: "x12w63v0",
          textAlign: "x1yc453h",
          flexShrink: "x2lah0s",
          $$css: !0,
        },
        participantRow: {
          justifyContent: "x1qughib",
          minWidth: "xeuugli",
          paddingTop: "x16ovd2e",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "x12w63v0",
          paddingInlineEnd: "x1nzty39",
          paddingLeft: null,
          paddingRight: null,
          flexShrink: "x2lah0s",
          minHeight: "x1wjjzik",
          $$css: !0,
        },
        participantTextContainer: { minWidth: "xeuugli", $$css: !0 },
        profilePicContainer: { flexShrink: "x2lah0s", $$css: !0 },
        disabled: { pointerEvents: "x47corl", $$css: !0 },
        dimmedAppearance: { opacity: "xbyyjgo", $$css: !0 },
        flashingIcon: {
          animationName: "x1g4v8gx",
          animationDuration: "xmg6eyc",
          animationIterationCount: "xa4qsjk",
          animationTimingFunction: "x4hg4is",
          pointerEvents: "x47corl",
          $$css: !0,
        },
        rightActions: {
          marginInlineStart: "xvc5jky",
          flexShrink: "x2lah0s",
          minWidth: "x46jg8d",
          justifyContent: "xl56j7k",
          $$css: !0,
        },
      };
    function g(e) {
      var t = o("react-compiler-runtime").c(27),
        n = e.isConnected,
        a = e.isDisabled,
        i = e.isLoading,
        l = e.isRinging,
        c = e.onRingParticipant,
        m = e.participantJid,
        p = e.showActionButton,
        _ = e.showConnectedIndicator,
        g = n === void 0 ? !1 : n,
        h = i === void 0 ? !1 : i,
        y = _ === void 0 ? !0 : _,
        C = d(r("WAWebVoipUiPopoutWindowContext")),
        b = C.isContextInPopoutWindow,
        v;
      t[0] !== m
        ? ((v = o("WAWebContactCollection").ContactCollection.get(
            m.toString(),
          )),
          (t[0] = m),
          (t[1] = v))
        : (v = t[1]);
      var S = v;
      if (S == null) return null;
      var R;
      t[2] !== c || t[3] !== m
        ? ((R = function () {
            c == null || c(m);
          }),
          (t[2] = c),
          (t[3] = m),
          (t[4] = R))
        : (R = t[4]);
      var L = R,
        E = a && f.disabled,
        k = a && f.dimmedAppearance,
        I;
      t[5] !== E || t[6] !== k
        ? ((I = [f.participantTextContainer, E, k]),
          (t[5] = E),
          (t[6] = k),
          (t[7] = I))
        : (I = t[7]);
      var T;
      t[8] !== S
        ? ((T = u.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: f.profilePicContainer,
            children: u.jsx(r("WAWebContactImage.react"), {
              contact: S,
              size: 36,
              loadPicture: !0,
            }),
          })),
          (t[8] = S),
          (t[9] = T))
        : (T = t[9]);
      var D;
      t[10] !== S
        ? ((D = u.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: f.participantTextContainer,
            children: u.jsx(r("WDSText.react"), {
              type: "Body1",
              colorName: "contentDefault",
              maxLines: 1,
              children: u.jsx(o("WAWebName.react").Name, { contact: S }),
            }),
          })),
          (t[10] = S),
          (t[11] = D))
        : (D = t[11]);
      var x;
      t[12] !== D || t[13] !== I || t[14] !== T
        ? ((x = u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            columnGap: 16,
            grow: 1,
            xstyle: I,
            children: [T, D],
          })),
          (t[12] = D),
          (t[13] = I),
          (t[14] = T),
          (t[15] = x))
        : (x = t[15]);
      var $;
      t[16] !== L ||
      t[17] !== g ||
      t[18] !== b ||
      t[19] !== h ||
      t[20] !== l ||
      t[21] !== p ||
      t[22] !== y
        ? (($ =
            (g || (!h && p)) &&
            u.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              columnGap: 8,
              xstyle: f.rightActions,
              children: [
                g &&
                  y &&
                  u.jsx("div", {
                    className:
                      "x1fsd2vl x170jfvy x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1qe8gl4 x2lah0s",
                  }),
                !h &&
                  p &&
                  u.jsx(o("WAWebFlex.react").FlexItem, {
                    xstyle: l && f.flashingIcon,
                    children: l
                      ? u.jsx(r("WDSButton.react"), {
                          variant: "borderless",
                          type: "default",
                          size: "small",
                          Icon: r("WDSIconIcMoreHoriz.react"),
                          onPress: r("WAWebNoop"),
                        })
                      : u.jsx(r("WDSButton.react"), {
                          variant: "filled",
                          type: b ? "media" : "default",
                          size: "small",
                          label: s._(/*BTDS*/ "Ring"),
                          onPress: L,
                        }),
                  }),
              ],
            })),
          (t[16] = L),
          (t[17] = g),
          (t[18] = b),
          (t[19] = h),
          (t[20] = l),
          (t[21] = p),
          (t[22] = y),
          (t[23] = $))
        : ($ = t[23]);
      var P;
      return (
        t[24] !== x || t[25] !== $
          ? ((P = u.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              alignSelf: "stretch",
              columnGap: 16,
              xstyle: f.participantRow,
              children: [x, $],
            })),
            (t[24] = x),
            (t[25] = $),
            (t[26] = P))
          : (P = t[26]),
        P
      );
    }
    function h(e) {
      var t = o("react-compiler-runtime").c(24),
        n = e.arePeersActive,
        a = e.callState,
        i = e.onRingParticipant,
        l = e.participantStates,
        c = e.participantsWithoutSelf,
        d = e.showActionButton,
        m = e.showConnectedIndicator,
        p = e.surface,
        _ = e.transparentBackground,
        h = d === void 0 ? !1 : d,
        y = m === void 0 ? !0 : m,
        C = p === void 0 ? "modal" : p,
        b = _ === void 0 ? !1 : _,
        v;
      if (t[0] !== l || t[1] !== c) {
        var S = new Set();
        for (var R of c) {
          var L = l.get(R.toString());
          L === o("WAWebVoipWaCallEnums").CallParticipantState.Connected &&
            S.add(R.toString());
        }
        var E = o("WAWebCallLogUtils").sortParticipantWidsByPriority(c, S),
          k = [],
          I = [],
          T = [];
        for (var D of E) {
          var x = l.get(D.toString()),
            $ = x == null,
            P =
              x === o("WAWebVoipWaCallEnums").CallParticipantState.Receipt ||
              x === o("WAWebVoipWaCallEnums").CallParticipantState.Incoming,
            N = { jid: D, isRinging: P, isLoading: $ };
          (T.push(N),
            x === o("WAWebVoipWaCallEnums").CallParticipantState.Connected
              ? k.push(N)
              : I.push(N));
        }
        ((v = {
          allParticipants: T,
          connectedParticipants: k,
          nonConnectedParticipants: I,
        }),
          (t[0] = l),
          (t[1] = c),
          (t[2] = v));
      } else v = t[2];
      var M = v,
        w = M.allParticipants,
        A = M.connectedParticipants,
        F = M.nonConnectedParticipants,
        O = C === "lobby",
        B = n && !O,
        W =
          O &&
          (a === o("WAWebVoipWaCallEnums").CallState.Rejoining ||
            a === o("WAWebVoipWaCallEnums").CallState.ReceivedCall),
        q;
      t[3] !== w ||
      t[4] !== A ||
      t[5] !== F ||
      t[6] !== i ||
      t[7] !== l ||
      t[8] !== h ||
      t[9] !== y ||
      t[10] !== W ||
      t[11] !== B
        ? ((q = function () {
            return B
              ? u.jsxs(u.Fragment, {
                  children: [
                    A.length > 0 &&
                      u.jsxs(u.Fragment, {
                        children: [
                          u.jsx(o("WAWebFlex.react").FlexItem, {
                            xstyle: f.sectionHeader,
                            children: u.jsx(r("WDSText.react"), {
                              type: "Body2Emphasized",
                              colorName: "contentDeemphasized",
                              children: s._(/*BTDS*/ "In this call"),
                            }),
                          }),
                          A.map(function (e) {
                            return u.jsx(
                              g,
                              {
                                isConnected: !0,
                                isDisabled: !1,
                                isLoading: e.isLoading,
                                isRinging: e.isRinging,
                                onRingParticipant: i,
                                participantJid: e.jid,
                                showActionButton: !1,
                                showConnectedIndicator: y,
                              },
                              e.jid.toString(),
                            );
                          }),
                        ],
                      }),
                    F.length > 0 &&
                      u.jsxs(u.Fragment, {
                        children: [
                          u.jsx(o("WAWebFlex.react").FlexItem, {
                            xstyle: f.sectionHeader,
                            children: u.jsx(r("WDSText.react"), {
                              type: "Body2Emphasized",
                              colorName: "contentDeemphasized",
                              children: s._(/*BTDS*/ "Invited"),
                            }),
                          }),
                          F.map(function (e) {
                            return u.jsx(
                              g,
                              {
                                isDisabled: !0,
                                isLoading: e.isLoading,
                                isRinging: e.isRinging,
                                onRingParticipant: i,
                                participantJid: e.jid,
                                showActionButton: h,
                              },
                              e.jid.toString(),
                            );
                          }),
                        ],
                      }),
                  ],
                })
              : W
                ? A.map(function (e) {
                    return u.jsx(
                      g,
                      {
                        isConnected: !0,
                        isDisabled: !1,
                        isLoading: e.isLoading,
                        isRinging: e.isRinging,
                        onRingParticipant: i,
                        participantJid: e.jid,
                        showActionButton: h,
                      },
                      e.jid.toString(),
                    );
                  })
                : w.map(function (e) {
                    var t =
                      l.get(e.jid.toString()) ===
                      o("WAWebVoipWaCallEnums").CallParticipantState.Connected;
                    return u.jsx(
                      g,
                      {
                        isConnected: t,
                        isDisabled: !t,
                        isLoading: e.isLoading,
                        isRinging: e.isRinging,
                        onRingParticipant: i,
                        participantJid: e.jid,
                        showActionButton: h,
                      },
                      e.jid.toString(),
                    );
                  });
          }),
          (t[3] = w),
          (t[4] = A),
          (t[5] = F),
          (t[6] = i),
          (t[7] = l),
          (t[8] = h),
          (t[9] = y),
          (t[10] = W),
          (t[11] = B),
          (t[12] = q))
        : (q = t[12]);
      var U = q,
        V = b && f.transparentBackground,
        H = C === "drawer" && f.participantPanelContainerStatic,
        G;
      t[13] !== V || t[14] !== H
        ? ((G = [f.participantPanelContainer, V, H]),
          (t[13] = V),
          (t[14] = H),
          (t[15] = G))
        : (G = t[15]);
      var z = C === "drawer" ? f.participantPanelStatic : f.participantPanel,
        j;
      t[16] !== U ? ((j = U()), (t[16] = U), (t[17] = j)) : (j = t[17]);
      var K;
      t[18] !== z || t[19] !== j
        ? ((K = u.jsx(o("WAWebFlex.react").FlexColumn, {
            xstyle: z,
            children: j,
          })),
          (t[18] = z),
          (t[19] = j),
          (t[20] = K))
        : (K = t[20]);
      var Q;
      return (
        t[21] !== K || t[22] !== G
          ? ((Q = u.jsx(o("WAWebFlex.react").FlexItem, {
              xstyle: G,
              children: K,
            })),
            (t[21] = K),
            (t[22] = G),
            (t[23] = Q))
          : (Q = t[23]),
        Q
      );
    }
    l.default = h;
  },
  226,
);
