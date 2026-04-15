__d(
  "WAWebCallLogParticipantsList.react",
  [
    "fbt",
    "WAWebCallLogUtils",
    "WAWebContactCollection",
    "WAWebDetailImage.react",
    "WAWebFlex.react",
    "WAWebFrontendContactGetters",
    "WAWebMsgGetters",
    "WAWebName.react",
    "WAWebNoop",
    "WAWebText.react",
    "WAWebVoipActionRequestOpenChat",
    "WAWebVoipGatingUtils",
    "WAWebVoipStartCall",
    "WAWebVoipWaCallEnums",
    "WAWebWamEnumCallFromUi",
    "WAWebWamEnumLobbyEntryPointType",
    "WDSIconIcCall.react",
    "WDSIconIcMoreVert.react",
    "WDSIconIcVideocam.react",
    "WDSIconWdsIcChat.react",
    "WDSMenu.react",
    "WDSMenuBarItem.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useMemo,
      d = {
        participantItem: {
          width: "xh8yej3",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        avatar: {
          width: "x100vrsf",
          height: "x1vqgdyp",
          flexShrink: "x2lah0s",
          $$css: !0,
        },
        participantInfo: {
          minWidth: "xeuugli",
          flexGrow: "x1iyjqo2",
          flexShrink: "xs83m0k",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        participantName: {
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          textOverflow: "xlyipyv",
          whiteSpace: "xuxw1ft",
          lineHeight: "x1fc57z9",
          minHeight: "xisnujt",
          minWidth: "xeuugli",
          $$css: !0,
        },
        callStatus: {
          fontSize: "x1nxh6w3",
          lineHeight: "xd4r4e8",
          minHeight: "xvrgn94",
          marginTop: "xfl633f",
          $$css: !0,
        },
        marginBottom8: { marginBottom: "xefnzgg", $$css: !0 },
        marginEnd12: { marginInlineEnd: "x14mko6t", $$css: !0 },
        paddingHoriz4: {
          paddingInlineStart: "x181vq82",
          paddingInlineEnd: "x1uc92m",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        sectionHeader: {
          paddingBottom: "x1nbhmlj",
          width: "xh8yej3",
          $$css: !0,
        },
        paddingVert8: {
          paddingTop: "x16ovd2e",
          paddingBottom: "x12xbjc7",
          $$css: !0,
        },
      };
    function m(e) {
      var t = o("react-compiler-runtime").c(15),
        n = e.callLogMsg,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = [o("WAWebMsgGetters").getCallParticipants]), (t[0] = r))
        : (r = t[0]);
      var a = o("useWAWebMsgValues").useMsgValues(n.id, r),
        i = a[0];
      if (!i || i.length === 0) return null;
      var l, c, m, g;
      if (t[1] !== n || t[2] !== i) {
        g = Symbol.for("react.early_return_sentinel");
        e: {
          var h = o("WAWebCallLogUtils").sortCallParticipants(i, n, {
            excludeSelf: !0,
          });
          if (h.length === 0) {
            g = null;
            break e;
          }
          var y = o("WAWebVoipGatingUtils").isCallInfoOptimizationsEnabled();
          if (!y) {
            var C;
            t[7] === Symbol.for("react.memo_cache_sentinel")
              ? ((C = [d.marginBottom8, d.paddingHoriz4]), (t[7] = C))
              : (C = t[7]);
            var b;
            t[8] === Symbol.for("react.memo_cache_sentinel")
              ? ((b = u.jsx(o("WAWebFlex.react").FlexItem, {
                  xstyle: C,
                  children: u.jsx(o("WAWebText.react").WAWebTextMuted, {
                    children: s._(/*BTDS*/ "Participants"),
                  }),
                })),
                (t[8] = b))
              : (b = t[8]);
            var v;
            (t[9] !== n
              ? ((v = function (t) {
                  return u.jsx(
                    f,
                    { participant: t, callLogMsg: n },
                    t.participant.toString(),
                  );
                }),
                (t[9] = n),
                (t[10] = v))
              : (v = t[10]),
              (g = u.jsxs(o("WAWebFlex.react").FlexColumn, {
                children: [b, h.map(v)],
              })));
            break e;
          }
          var S = h.filter(_),
            R = h.filter(p);
          ((l = o("WAWebFlex.react").FlexColumn),
            (c =
              S.length > 0 &&
              u.jsxs(u.Fragment, {
                children: [
                  u.jsxs(o("WAWebFlex.react").FlexRow, {
                    align: "center",
                    justify: "all",
                    xstyle: d.sectionHeader,
                    children: [
                      u.jsx(o("WAWebFlex.react").FlexItem, {
                        children: u.jsx(o("WAWebText.react").WAWebTextMuted, {
                          children: s._(/*BTDS*/ "Joined"),
                        }),
                      }),
                      u.jsx(o("WAWebText.react").WAWebTextMuted, {
                        children: s._(
                          /*BTDS*/ '_j{"*":"{number} people","_1":"1 person"}',
                          [s._plural(S.length, "number")],
                        ),
                      }),
                    ],
                  }),
                  S.map(function (e) {
                    return u.jsx(
                      f,
                      { participant: e, callLogMsg: n },
                      e.participant.toString(),
                    );
                  }),
                ],
              })),
            (m =
              R.length > 0 &&
              u.jsxs(u.Fragment, {
                children: [
                  u.jsxs(o("WAWebFlex.react").FlexRow, {
                    align: "center",
                    justify: "all",
                    xstyle: d.sectionHeader,
                    children: [
                      u.jsx(o("WAWebFlex.react").FlexItem, {
                        children: u.jsx(o("WAWebText.react").WAWebTextMuted, {
                          children: s._(/*BTDS*/ "Did not join"),
                        }),
                      }),
                      u.jsx(o("WAWebText.react").WAWebTextMuted, {
                        children: s._(
                          /*BTDS*/ '_j{"*":"{number} people","_1":"1 person"}',
                          [s._plural(R.length, "number")],
                        ),
                      }),
                    ],
                  }),
                  R.map(function (e) {
                    return u.jsx(
                      f,
                      { participant: e, callLogMsg: n },
                      e.participant.toString(),
                    );
                  }),
                ],
              })));
        }
        ((t[1] = n),
          (t[2] = i),
          (t[3] = l),
          (t[4] = c),
          (t[5] = m),
          (t[6] = g));
      } else ((l = t[3]), (c = t[4]), (m = t[5]), (g = t[6]));
      if (g !== Symbol.for("react.early_return_sentinel")) return g;
      var L;
      return (
        t[11] !== l || t[12] !== c || t[13] !== m
          ? ((L = u.jsxs(l, { children: [c, m] })),
            (t[11] = l),
            (t[12] = c),
            (t[13] = m),
            (t[14] = L))
          : (L = t[14]),
        L
      );
    }
    function p(e) {
      return (
        e.outcome !== o("WAWebVoipWaCallEnums").CallParticipantState.Connected
      );
    }
    function _(e) {
      return (
        e.outcome === o("WAWebVoipWaCallEnums").CallParticipantState.Connected
      );
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(46),
        n = e.callLogMsg,
        a = e.participant,
        i,
        l,
        c,
        m;
      t[0] !== n || t[1] !== a.outcome || t[2] !== a.participant
        ? ((i = o("WAWebContactCollection").ContactCollection.gadd(
            a.participant,
          )),
          (l = function () {
            var e = !o("WAWebMsgGetters").getIsSentByMe(n),
              t = o("WAWebMsgGetters").getSender(n),
              r = e && t != null && a.participant.equals(t);
            return r
              ? s._(/*BTDS*/ "Called you")
              : o("WAWebVoipGatingUtils").isCallInfoOptimizationsEnabled()
                ? null
                : a.outcome ===
                    o("WAWebVoipWaCallEnums").CallParticipantState.Connected
                  ? s._(/*BTDS*/ "Joined")
                  : null;
          }),
          (c = a.participant),
          (m =
            i != null
              ? o("WAWebFrontendContactGetters").getDisplayName(i)
              : c.toString()),
          (t[0] = n),
          (t[1] = a.outcome),
          (t[2] = a.participant),
          (t[3] = i),
          (t[4] = l),
          (t[5] = c),
          (t[6] = m))
        : ((i = t[3]), (l = t[4]), (c = t[5]), (m = t[6]));
      var p = m,
        _;
      t[7] !== c ? ((_ = c.isBot()), (t[7] = c), (t[8] = _)) : (_ = t[8]);
      var f = _,
        g;
      t[9] !== p
        ? ((g = u.jsx(
            r("WDSMenuItem.react"),
            { type: "groupHeader", title: p },
            "header",
          )),
          (t[9] = p),
          (t[10] = g))
        : (g = t[10]);
      var h;
      t[11] !== c
        ? ((h = function () {
            return o("WAWebVoipActionRequestOpenChat").requestOpenChat(c);
          }),
          (t[11] = c),
          (t[12] = h))
        : (h = t[12]);
      var y;
      t[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = s._(/*BTDS*/ "Message")), (t[13] = y))
        : (y = t[13]);
      var C;
      t[14] !== h
        ? ((C = u.jsx(
            r("WDSMenuItem.react"),
            { onPress: h, Icon: r("WDSIconWdsIcChat.react"), title: y },
            "message",
          )),
          (t[14] = h),
          (t[15] = C))
        : (C = t[15]);
      var b;
      t[16] !== f || t[17] !== c
        ? ((b =
            !f &&
            u.jsxs(u.Fragment, {
              children: [
                u.jsx(
                  r("WDSMenuItem.react"),
                  {
                    onPress: function () {
                      o("WAWebVoipStartCall")
                        .startWAWebVoipCall(
                          c,
                          !0,
                          o("WAWebWamEnumCallFromUi").CALL_FROM_UI
                            .CALLS_TAB_BOTTOM_SHEET,
                          o("WAWebWamEnumLobbyEntryPointType")
                            .LOBBY_ENTRY_POINT_TYPE.NOT_OPENED,
                        )
                        .catch(r("WAWebNoop"));
                    },
                    Icon: r("WDSIconIcVideocam.react"),
                    title: s._(/*BTDS*/ "Video call"),
                  },
                  "video",
                ),
                u.jsx(
                  r("WDSMenuItem.react"),
                  {
                    onPress: function () {
                      o("WAWebVoipStartCall")
                        .startWAWebVoipCall(
                          c,
                          !1,
                          o("WAWebWamEnumCallFromUi").CALL_FROM_UI
                            .CALLS_TAB_BOTTOM_SHEET,
                          o("WAWebWamEnumLobbyEntryPointType")
                            .LOBBY_ENTRY_POINT_TYPE.NOT_OPENED,
                        )
                        .catch(r("WAWebNoop"));
                    },
                    Icon: r("WDSIconIcCall.react"),
                    title: s._(/*BTDS*/ "Voice call"),
                  },
                  "voice",
                ),
              ],
            })),
          (t[16] = f),
          (t[17] = c),
          (t[18] = b))
        : (b = t[18]);
      var v;
      t[19] !== g || t[20] !== C || t[21] !== b
        ? ((v = u.jsxs(r("WDSMenu.react"), { children: [g, C, b] })),
          (t[19] = g),
          (t[20] = C),
          (t[21] = b),
          (t[22] = v))
        : (v = t[22]);
      var S = v,
        R;
      t[23] !== l ? ((R = l()), (t[23] = l), (t[24] = R)) : (R = t[24]);
      var L = R,
        E;
      t[25] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = [d.participantItem, d.paddingVert8, d.paddingHoriz4]),
          (t[25] = E))
        : (E = t[25]);
      var k;
      t[26] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = [d.avatar, d.marginEnd12]), (t[26] = k))
        : (k = t[26]);
      var I;
      t[27] !== a.participant
        ? ((I = u.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: k,
            children: u.jsx(o("WAWebDetailImage.react").DetailImage, {
              id: a.participant,
              size: 40,
            }),
          })),
          (t[27] = a.participant),
          (t[28] = I))
        : (I = t[28]);
      var T;
      t[29] !== i
        ? ((T = u.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: d.participantName,
            children: u.jsx(o("WAWebText.react").WAWebTextTitle, {
              textWrap: "ellipsis",
              children: u.jsx(o("WAWebName.react").Name, {
                contact: i,
                showNotifyName: !0,
                elevatedPushNamesEnabled: !0,
              }),
            }),
          })),
          (t[29] = i),
          (t[30] = T))
        : (T = t[30]);
      var D;
      t[31] !== L
        ? ((D =
            L != null &&
            u.jsx(o("WAWebFlex.react").FlexItem, {
              xstyle: d.callStatus,
              children: u.jsx(o("WAWebText.react").WAWebTextMuted, {
                children: L,
              }),
            })),
          (t[31] = L),
          (t[32] = D))
        : (D = t[32]);
      var x;
      t[33] !== T || t[34] !== D
        ? ((x = u.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: d.participantInfo,
            children: [T, D],
          })),
          (t[33] = T),
          (t[34] = D),
          (t[35] = x))
        : (x = t[35]);
      var $;
      t[36] !== a.participant
        ? (($ = a.participant.toString()), (t[36] = a.participant), (t[37] = $))
        : ($ = t[37]);
      var P = "participant-more-" + $,
        N;
      t[38] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = s._(/*BTDS*/ "More options")), (t[38] = N))
        : (N = t[38]);
      var M;
      t[39] !== S || t[40] !== P
        ? ((M = u.jsx(r("WDSMenuBarItem.react"), {
            testid: void 0,
            icon: r("WDSIconIcMoreVert.react"),
            title: N,
            wdsMenuToRender: S,
            menuAlign: "end",
            menuPosition: "below",
          })),
          (t[39] = S),
          (t[40] = P),
          (t[41] = M))
        : (M = t[41]);
      var w;
      return (
        t[42] !== I || t[43] !== x || t[44] !== M
          ? ((w = u.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              xstyle: E,
              children: [I, x, M],
            })),
            (t[42] = I),
            (t[43] = x),
            (t[44] = M),
            (t[45] = w))
          : (w = t[45]),
        w
      );
    }
    l.default = m;
  },
  226,
);
