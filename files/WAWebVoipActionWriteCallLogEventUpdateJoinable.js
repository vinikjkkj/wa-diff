__d(
  "WAWebVoipActionWriteCallLogEventUpdateJoinable",
  [
    "WALogger",
    "WAWebCallLogMsgData.flow",
    "WAWebCallLogUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebVoipActionWriteCallLogImpl",
    "WAWebVoipCallLogTimestamp",
    "WAWebVoipCallLogWriteMutex",
    "WAWebVoipJsonParserPayloads",
    "WAWebVoipOngoingCallCollection",
    "WAWebVoipVoiceChatUtils",
    "WAWebVoipWaCallEnums",
    "asyncToGeneratorRuntime",
    "compactMap",
    "err",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c;
    function d(e) {
      switch (e) {
        case o("WAWebVoipWaCallEnums").CallLogResult.AcceptedElsewhere:
          return o("WAWebCallLogMsgData.flow").CallOutcome.AcceptedElsewhere;
        case o("WAWebVoipWaCallEnums").CallLogResult.Rejected:
        case o("WAWebVoipWaCallEnums").CallLogResult.Unavailable:
        case o("WAWebVoipWaCallEnums").CallLogResult.Canceled:
        case o("WAWebVoipWaCallEnums").CallLogResult.Missed:
          return o("WAWebCallLogMsgData.flow").CallOutcome.Missed;
        case o("WAWebVoipWaCallEnums").CallLogResult.Failed:
          return o("WAWebCallLogMsgData.flow").CallOutcome.Failed;
        default:
          return o("WAWebCallLogMsgData.flow").CallOutcome.Completed;
      }
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = yield o(
            "WAWebVoipCallLogWriteMutex",
          ).WACallLogWriteMutex.acquire();
          try {
            var r = o(
              "WAWebVoipOngoingCallCollection",
            ).WAWebVoipOngoingCallCollection.getByCallId(t);
            if (r == null) {
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[cleanupJoinableCallLog] no call for ",
                    ", cleaned",
                  ])),
                t,
              );
              return;
            }
            yield g({
              CallId: t,
              CallCreatorDeviceJid: r.callCreator,
              Type: o("WAWebVoipJsonParserPayloads").UpdateJoinableCallLogType
                .Delete,
              InitialPeerJid: null,
              IsCaller: !1,
              VideoEnabled: r.isVideoCall,
              CallLinkToken: null,
              CallParticipantInfos: [],
              CallSummary: null,
              GroupJid: r.to,
              IsFromOffer: !1,
              IsLightweight: !1,
              NumParticipants: 0,
              Result: o("WAWebVoipWaCallEnums").CallLogResult.Connected,
              ScheduledId: null,
              LinkCreatorJid: null,
              SelfOtherDeviceConnected: !1,
              OfferEpochTime: 0,
            });
          } catch (e) {
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[cleanupJoinableCallLog] cleanup failed: ",
                    "",
                  ])),
                e,
              )
              .tags("nexus-voip")
              .sendLogs("cleanup-joinable-call-log-failed");
          } finally {
            n.release();
          }
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
            "WAWebVoipCallLogWriteMutex",
          ).WACallLogWriteMutex.acquire();
          try {
            yield g(e);
          } catch (e) {
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[generateCallLogFromEventUpdateJoinable] write failed: ",
                    "",
                  ])),
                e,
              )
              .tags("nexus-voip")
              .sendLogs("generate-call-log-event=update-joinable");
          } finally {
            t.release();
          }
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.CallCreatorDeviceJid,
            n = e.CallId,
            a = e.CallParticipantInfos,
            i = e.CallSummary,
            l = e.GroupJid,
            s = e.LinkCreatorJid,
            u = e.Result,
            m = e.Type,
            p = e.VideoEnabled;
          if (
            o("WAWebVoipJsonParserPayloads").UpdateJoinableCallLogType == null
          )
            throw r("err")(
              "WAWebVoipActionWriteCallLogEventUpdateJoinable: Expected UpdateJoinableCallLogType to be defined",
            );
          var _ = !r("isStringNullOrEmpty")(e.CallLinkToken),
            f =
              e.IsLightweight ||
              o("WAWebVoipVoiceChatUtils").isVoiceChatOfferSilenceReason(
                e.SilenceReason,
              )
                ? { isVoiceChat: !0 }
                : {},
            g,
            h;
          if (
            m ===
            o("WAWebVoipJsonParserPayloads").UpdateJoinableCallLogType.Create
          ) {
            if (t == null)
              throw r("err")(
                "voip action write call log message: update joinable: Unexpected null call creator on create type event",
              );
            var y = o(
              "WAWebVoipOngoingCallCollection",
            ).WAWebVoipOngoingCallCollection.getByCallId(n);
            if (y != null)
              ((g = babelHelpers.extends(
                {},
                y.toJSON(),
                {
                  callOutcome: o("WAWebCallLogMsgData.flow").CallOutcome
                    .Ongoing,
                  isVideoCall: p,
                  callParticipants: a.map(function (e) {
                    return { participant: e.jid, outcome: e.result };
                  }),
                },
                f,
              )),
                (h = g.to));
            else {
              var C,
                b =
                  s != null
                    ? o("WAWebUserPrefsMeUser").isMeAccount(s)
                    : o("WAWebUserPrefsMeUser").isMeDevice(t) ||
                      o("WAWebUserPrefsMeUser").isMeAccount(t),
                v = yield o("WAWebCallLogUtils").getCallLogTargetDetails({
                  callCreatorWid: s != null ? s : t,
                  callId: n,
                  groupJid: l,
                  isCallLink: s != null || _,
                  participants: r("compactMap")(a, function (e) {
                    return e.jid;
                  }),
                }),
                S = v.callCreatorUserWid,
                R = v.chatId,
                L = v.msgKeyId,
                E = v.participant,
                k = v.viewMode;
              ((h = R),
                (g = babelHelpers.extends(
                  {
                    id: new (r("WAWebMsgKey"))({
                      remote: h,
                      participant: E,
                      fromMe: b,
                      id: L,
                    }),
                    type: o("WAWebMsgType").MSG_TYPE.CALL_LOG,
                    kind: o("WAWebMsgType").MsgKind.CallLog,
                    viewMode: k,
                    callOutcome: o("WAWebCallLogMsgData.flow").CallOutcome
                      .Ongoing,
                    isVideoCall: p,
                    isCallLink: _,
                    callLinkToken: (C = e.CallLinkToken) != null ? C : "",
                    callCreator: t,
                    from: S,
                    author: S,
                    t: o(
                      "WAWebVoipCallLogTimestamp",
                    ).resolveCallLogTimestampFromOfferTime(e.OfferEpochTime),
                    callParticipants: a.map(function (e) {
                      return { participant: e.jid, outcome: e.result };
                    }),
                    to: h,
                    selfOtherDeviceConnected: e.SelfOtherDeviceConnected,
                  },
                  f,
                )));
            }
          } else {
            var I = o(
              "WAWebVoipOngoingCallCollection",
            ).WAWebVoipOngoingCallCollection.getByCallId(n);
            if (I == null) {
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[generateCallLogFromEventUpdateJoinable] no call ",
                    " ",
                    "",
                  ])),
                n,
                m,
              );
              return;
            }
            var T;
            if (
              m ===
              o("WAWebVoipJsonParserPayloads").UpdateJoinableCallLogType.Delete
            ) {
              var D;
              ((T = (D = I.callParticipants) != null ? D : []),
                i != null &&
                  i.Users &&
                  (T = T.map(function (e) {
                    var t = i.Users.find(function (t) {
                      return t.Jid != null && t.Jid.equals(e.participant);
                    });
                    return t
                      ? babelHelpers.extends({}, e, {
                          outcome:
                            t.State ===
                            o("WAWebVoipWaCallEnums").CallSummaryUserState
                              .Connected
                              ? o("WAWebVoipWaCallEnums").CallParticipantState
                                  .Connected
                              : o("WAWebVoipWaCallEnums").CallParticipantState
                                  .Invited,
                        })
                      : e;
                  })));
            } else
              m ===
              o("WAWebVoipJsonParserPayloads").UpdateJoinableCallLogType.Update
                ? (T = a.map(function (e) {
                    return { participant: e.jid, outcome: e.result };
                  }))
                : (T = I.callParticipants);
            ((g = babelHelpers.extends({}, I.toJSON(), {
              callOutcome:
                m ===
                o("WAWebVoipJsonParserPayloads").UpdateJoinableCallLogType
                  .Delete
                  ? d(u)
                  : o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing,
              isVideoCall:
                I.isVideoCall || (i == null ? void 0 : i.IsVideo) || p,
              callDuration:
                i != null && i.CallDuration
                  ? Math.floor((i == null ? void 0 : i.CallDuration) / 1e3)
                  : I.callDuration,
              callParticipants: T,
              viewMode:
                I.viewMode === o("WAWebViewMode.flow").ViewModeType.HIDDEN &&
                T &&
                T.length > 0
                  ? o("WAWebViewMode.flow").ViewModeType
                      .CALL_LOG_AD_HOC_GROUP_CALL
                  : I.viewMode,
              selfOtherDeviceConnected: e.SelfOtherDeviceConnected,
            })),
              (h = g.to));
          }
          _ &&
            (g.viewMode =
              o("WAWebViewMode.flow").ViewModeType.CALL_LOG_AD_HOC_GROUP_CALL);
          var x = yield o(
            "WAWebVoipActionWriteCallLogImpl",
          ).writeVoipCallLogMessageImpl(h, g, !1);
          m ===
          o("WAWebVoipJsonParserPayloads").UpdateJoinableCallLogType.Delete
            ? (o("WAWebVoipActionWriteCallLogImpl").markCallIdProcessed(n),
              o(
                "WAWebVoipOngoingCallCollection",
              ).WAWebVoipOngoingCallCollection.remove(g.id))
            : x &&
              (o("WAWebVoipActionWriteCallLogImpl").markCallIdProcessed(n),
              o(
                "WAWebVoipOngoingCallCollection",
              ).WAWebVoipOngoingCallCollection.add(x, { merge: !0 }));
        })),
        h.apply(this, arguments)
      );
    }
    ((l.cleanupJoinableCallLog = m),
      (l.generateCallLogFromEventUpdateJoinable = _));
  },
  98,
);
