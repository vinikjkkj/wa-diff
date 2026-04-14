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
    "WDSIconIcChat.react",
    "WDSIconIcMoreVert.react",
    "WDSIconIcVideocam.react",
    "WDSMenu.react",
    "WDSMenuBarItem.react",
    "WDSMenuItem.react",
    "react",
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
      var t = e.callLogMsg,
        n = o("useWAWebMsgValues").useMsgValues(t.id, [
          o("WAWebMsgGetters").getCallParticipants,
        ]),
        r = n[0];
      if (!r || r.length === 0) return null;
      var a = o("WAWebCallLogUtils").sortCallParticipants(r, t, {
        excludeSelf: !0,
      });
      if (a.length === 0) return null;
      var i = o("WAWebVoipGatingUtils").isCallInfoOptimizationsEnabled();
      if (!i)
        return u.jsxs(o("WAWebFlex.react").FlexColumn, {
          children: [
            u.jsx(o("WAWebFlex.react").FlexItem, {
              xstyle: [d.marginBottom8, d.paddingHoriz4],
              children: u.jsx(o("WAWebText.react").WAWebTextMuted, {
                children: s._(/*BTDS*/ "Participants"),
              }),
            }),
            a.map(function (e) {
              return u.jsx(
                p,
                { participant: e, callLogMsg: t },
                e.participant.toString(),
              );
            }),
          ],
        });
      var l = a.filter(function (e) {
          return (
            e.outcome ===
            o("WAWebVoipWaCallEnums").CallParticipantState.Connected
          );
        }),
        c = a.filter(function (e) {
          return (
            e.outcome !==
            o("WAWebVoipWaCallEnums").CallParticipantState.Connected
          );
        });
      return u.jsxs(o("WAWebFlex.react").FlexColumn, {
        children: [
          l.length > 0 &&
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
                        [s._plural(l.length, "number")],
                      ),
                    }),
                  ],
                }),
                l.map(function (e) {
                  return u.jsx(
                    p,
                    { participant: e, callLogMsg: t },
                    e.participant.toString(),
                  );
                }),
              ],
            }),
          c.length > 0 &&
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
                        [s._plural(c.length, "number")],
                      ),
                    }),
                  ],
                }),
                c.map(function (e) {
                  return u.jsx(
                    p,
                    { participant: e, callLogMsg: t },
                    e.participant.toString(),
                  );
                }),
              ],
            }),
        ],
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = e.callLogMsg,
        n = e.participant,
        a = o("WAWebContactCollection").ContactCollection.gadd(n.participant),
        i = function () {
          var e = !o("WAWebMsgGetters").getIsSentByMe(t),
            r = o("WAWebMsgGetters").getSender(t),
            a = e && r != null && n.participant.equals(r);
          return a
            ? s._(/*BTDS*/ "Called you")
            : o("WAWebVoipGatingUtils").isCallInfoOptimizationsEnabled()
              ? null
              : n.outcome ===
                  o("WAWebVoipWaCallEnums").CallParticipantState.Connected
                ? s._(/*BTDS*/ "Joined")
                : null;
        },
        l = n.participant,
        m =
          a != null
            ? o("WAWebFrontendContactGetters").getDisplayName(a)
            : l.toString(),
        p = l.isBot(),
        _ = c(
          function () {
            return u.jsxs(r("WDSMenu.react"), {
              children: [
                u.jsx(
                  r("WDSMenuItem.react"),
                  { type: "groupHeader", title: m },
                  "header",
                ),
                u.jsx(
                  r("WDSMenuItem.react"),
                  {
                    onPress: function () {
                      return o(
                        "WAWebVoipActionRequestOpenChat",
                      ).requestOpenChat(l);
                    },
                    Icon: r("WDSIconIcChat.react"),
                    title: s._(/*BTDS*/ "Message"),
                  },
                  "message",
                ),
                !p &&
                  u.jsxs(u.Fragment, {
                    children: [
                      u.jsx(
                        r("WDSMenuItem.react"),
                        {
                          onPress: function () {
                            o("WAWebVoipStartCall")
                              .startWAWebVoipCall(
                                l,
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
                                l,
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
                  }),
              ],
            });
          },
          [m, p, l],
        ),
        f = i();
      return u.jsxs(o("WAWebFlex.react").FlexRow, {
        align: "center",
        xstyle: [d.participantItem, d.paddingVert8, d.paddingHoriz4],
        children: [
          u.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: [d.avatar, d.marginEnd12],
            children: u.jsx(o("WAWebDetailImage.react").DetailImage, {
              id: n.participant,
              size: 40,
            }),
          }),
          u.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: d.participantInfo,
            children: [
              u.jsx(o("WAWebFlex.react").FlexItem, {
                xstyle: d.participantName,
                children: u.jsx(o("WAWebText.react").WAWebTextTitle, {
                  textWrap: "ellipsis",
                  children: u.jsx(o("WAWebName.react").Name, {
                    contact: a,
                    showNotifyName: !0,
                    elevatedPushNamesEnabled: !0,
                  }),
                }),
              }),
              f != null &&
                u.jsx(o("WAWebFlex.react").FlexItem, {
                  xstyle: d.callStatus,
                  children: u.jsx(o("WAWebText.react").WAWebTextMuted, {
                    children: f,
                  }),
                }),
            ],
          }),
          u.jsx(r("WDSMenuBarItem.react"), {
            testid: void 0,
            icon: r("WDSIconIcMoreVert.react"),
            title: s._(/*BTDS*/ "More options"),
            wdsMenuToRender: _,
            menuAlign: "end",
            menuPosition: "below",
          }),
        ],
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
