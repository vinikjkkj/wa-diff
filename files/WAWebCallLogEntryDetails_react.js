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
      var t = e.callLogMsgs;
      if (t.length === 0)
        throw r("err")(
          "Call log entry details panel requires at least one call log msg",
        );
      var n = t[0],
        a = o("WAWebFrontendMsgGetters").getChat(n),
        i = o("WAWebMsgGetters").getIsGroupCall(n),
        l = o("useWAWebMsgValues").useMsgValues(n.id, [
          o("WAWebMsgGetters").getCallParticipants,
          o("WAWebMsgGetters").getCallLinkToken,
          o("WAWebMsgGetters").getIsVideoCall,
        ]),
        d = l[0],
        p = l[1],
        _ = l[2],
        f = [];
      d != null &&
        (f = d.map(function (e) {
          return e.participant;
        }));
      var g = t.reduce(function (e, t) {
          var n,
            r = o("WAWebClock").Clock.relativeDateStr(t.t);
          return (
            e.has(r.toString()) || e.set(r.toString(), []),
            (n = e.get(r.toString())) == null || n.push(t),
            e
          );
        }, new Map()),
        h = function () {
          r("WAWebVoipCallsTabPanelManager").trigger("closeCallLogInfoPanel");
        };
      return u.jsx(o("WAWebUimUie.react").UIE, {
        displayName: "CallLogEntryDetails",
        escapable: !0,
        requestDismiss: h,
        children: u.jsxs(r("WAWebDrawer.react"), {
          theme: "white-bg",
          xstyle: c.drawerWithBorder,
          tsNavigationData: {
            surface: "unknown",
            viewName: "call-log-details",
          },
          children: [
            u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              type: "tab",
              children: u.jsxs(o("WAWebFlexBox.react").FlexRow, {
                align: "center",
                justify: "all",
                children: [
                  s._(/*BTDS*/ "Call info"),
                  u.jsx(r("WDSMenuBarItem.react"), {
                    icon: o("WAWebXIcon.react").XIcon,
                    onClick: h,
                    testid: void 0,
                    title: s._(/*BTDS*/ "Close"),
                  }),
                ],
              }),
            }),
            u.jsx(r("WAWebDrawerBody.react"), {
              children: u.jsxs(r("WAWebDrawerSection.react"), {
                theme: "refresh-new",
                children: [
                  u.jsx(o("WAWebFlex.react").FlexColumn, {
                    xstyle: [c.topPanelWrapper, c.headerWrapper],
                    children: u.jsxs(o("WAWebFlexBox.react").FlexRow, {
                      align: "center",
                      justify: "all",
                      xstyle: [c.paddingAll12, c.panelHeader],
                      children: [
                        u.jsx(o("WAWebFlex.react").FlexItem, {
                          xstyle: [c.image, c.marginStart4, c.marginEnd8],
                          children: u.jsx(
                            r("WAWebCallLogEntryChatImage.react"),
                            { msg: n },
                          ),
                        }),
                        u.jsx(o("WAWebFlex.react").FlexItem, {
                          xstyle: c.marginHoriz4,
                          grow: 1,
                          children: u.jsx(r("WAWebCallLogTitle.react"), {
                            callLogMsg: n,
                            isCallInfoHeader: !0,
                          }),
                        }),
                        u.jsx(o("WAWebFlexBox.react").FlexRow, {
                          xstyle: c.callBtnsWrapper,
                          children: u.jsx(
                            o("WAWebVoipCallButtonsLoadable")
                              .WAWebCallButtonsLoadable,
                            {
                              callFromUI: i
                                ? o("WAWebWamEnumCallFromUi").CALL_FROM_UI
                                    .GROUP_CALL_INFO
                                : o("WAWebWamEnumCallFromUi").CALL_FROM_UI
                                    .CALL_INFO,
                              lobbyEntryPoint: o(
                                "WAWebWamEnumLobbyEntryPointType",
                              ).LOBBY_ENTRY_POINT_TYPE.NOT_OPENED,
                              surface: o("WAWebCallButtonsSurface")
                                .WAWebCallButtonsSurface.CallLogDetails,
                              chat: a,
                              participants: f,
                              callLinkCode: p != null ? p : "",
                              isCallLinkVideo: _ != null ? _ : !1,
                            },
                          ),
                        }),
                      ],
                    }),
                  }),
                  u.jsxs(o("WAWebFlex.react").FlexColumn, {
                    xstyle: [
                      c.bottomPanelWrapper,
                      c.paddingAll12,
                      c.paddingStart16,
                    ],
                    children: [
                      g.entries().map(function (e) {
                        var t = e[0],
                          n = e[1];
                        return u.jsx(m, { callLogMsgs: n, date: t }, t);
                      }),
                      i &&
                        d &&
                        d.length > 1 &&
                        u.jsx(o("WAWebFlex.react").FlexItem, {
                          xstyle: [c.marginTop16, c.participantsListContainer],
                          children: u.jsx(
                            r("WAWebCallLogParticipantsList.react"),
                            { callLogMsg: n },
                          ),
                        }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = e.callLogMsgs,
        n = e.date;
      return u.jsxs(o("WAWebFlex.react").FlexColumn, {
        xstyle: c.panelHeader,
        children: [
          u.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: c.marginVert8,
            children: u.jsx(o("WAWebText.react").WAWebTextMuted, {
              children: n,
            }),
          }),
          t.map(function (e) {
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
                      u.jsx(_, { msg: e }),
                    ],
                  }),
                  u.jsx(f, { msg: e }),
                ],
              },
              e.id.toString(),
            );
          }),
        ],
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    var p = n("$InternalEnum").Mirrored([
      "MISSED",
      "OUTGOING",
      "INCOMING",
      "CALLLINKVIDEO",
      "CALLLINKVOICE",
    ]);
    function _(e) {
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
        ? (m = p.MISSED)
        : d
          ? (m = l === !0 ? p.CALLLINKVIDEO : p.CALLLINKVOICE)
          : (m = i ? p.OUTGOING : p.INCOMING);
      var _;
      return (
        d ? (_ = "NONE") : l ? (_ = "VIDEO") : (_ = "VOICE"),
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
              s._enum(_, { VOICE: "voice", VIDEO: "video", NONE: "" }),
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
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t,
        n = e.msg,
        r = o("WAWebMsgGetters").getCallDuration(n),
        a =
          (t = o("WAWebMsgGetters").getCallOutcome(n)) != null
            ? t
            : o("WAWebCallLogMsgData.flow").CallOutcome.Unknown,
        i;
      return (
        r != null && a === o("WAWebCallLogMsgData.flow").CallOutcome.Completed
          ? o("WAWebMsgGetters").getIsGroupCall(n) &&
            o("WAWebMsgGetters").getIsSentByMe(n) &&
            !g(n)
            ? (i = s._(/*BTDS*/ "Unanswered"))
            : (i = o("WAWebClock").Clock.callDurationStr(r))
          : a === o("WAWebCallLogMsgData.flow").CallOutcome.AcceptedElsewhere
            ? (i = s._(/*BTDS*/ "Accepted on another device"))
            : a === o("WAWebCallLogMsgData.flow").CallOutcome.Completed ||
                a === o("WAWebCallLogMsgData.flow").CallOutcome.Unknown
              ? (i = s._(/*BTDS*/ "Unknown"))
              : a === o("WAWebCallLogMsgData.flow").CallOutcome.Missed &&
                  o("WAWebMsgGetters").getIsCallSilenced(n)
                ? (i = s._(/*BTDS*/ "Silenced"))
                : (i = s._(/*BTDS*/ "Unanswered")),
        u.jsx(o("WAWebText.react").WAWebTextMuted, { children: i })
      );
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
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
