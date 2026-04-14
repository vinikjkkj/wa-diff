__d(
  "WAWebVoipActionWriteCallLogEventUpdateJoinable",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebCallLogMsgData.flow",
    "WAWebCallLogUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebVoipActionWriteCallLogImpl",
    "WAWebVoipCallLogWriteMutex",
    "WAWebVoipJsonParserPayloads",
    "WAWebVoipOngoingCallCollection",
    "WAWebVoipWaCallEnums",
    "asyncToGeneratorRuntime",
    "compactMap",
    "err",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e) {
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
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = yield o(
            "WAWebVoipCallLogWriteMutex",
          ).WACallLogWriteMutex.acquire();
          try {
            var a = o(
              "WAWebVoipOngoingCallCollection",
            ).WAWebVoipOngoingCallCollection.getByCallId(t);
            if (a == null)
              throw r("err")(
                "cleanupJoinableCallLog: expected to find existing call log in DB",
              );
            yield _({
              CallId: t,
              CallCreatorDeviceJid: a.callCreator,
              Type: o("WAWebVoipJsonParserPayloads").UpdateJoinableCallLogType
                .Delete,
              InitialPeerJid: null,
              IsCaller: !1,
              VideoEnabled: a.isVideoCall,
              CallLinkToken: null,
              CallParticipantInfos: [],
              CallSummary: null,
              GroupJid: a.to,
              IsFromOffer: !1,
              IsLightweight: !1,
              NumParticipants: 0,
              Result: o("WAWebVoipWaCallEnums").CallLogResult.Connected,
              ScheduledId: null,
              LinkCreatorJid: null,
              SelfOtherDeviceConnected: !1,
            });
          } catch (t) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[cleanupJoinableCallLog] cleanup failed: ",
                    "",
                  ])),
                t,
              )
              .tags("nexus-voip")
              .sendLogs("cleanup-joinable-call-log-failed");
          } finally {
            n.release();
          }
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
            "WAWebVoipCallLogWriteMutex",
          ).WACallLogWriteMutex.acquire();
          try {
            yield _(e);
          } catch (e) {
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
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
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.CallCreatorDeviceJid,
            n = e.CallId,
            a = e.CallParticipantInfos,
            i = e.CallSummary,
            l = e.GroupJid,
            s = e.LinkCreatorJid,
            c = e.Result,
            d = e.Type,
            m = e.VideoEnabled;
          if (
            o("WAWebVoipJsonParserPayloads").UpdateJoinableCallLogType == null
          )
            throw r("err")(
              "WAWebVoipActionWriteCallLogEventUpdateJoinable: Expected UpdateJoinableCallLogType to be defined",
            );
          var p, _;
          if (
            d ===
            o("WAWebVoipJsonParserPayloads").UpdateJoinableCallLogType.Create
          ) {
            if (t == null)
              throw r("err")(
                "voip action write call log message: update joinable: Unexpected null call creator on create type event",
              );
            var f = o(
              "WAWebVoipOngoingCallCollection",
            ).WAWebVoipOngoingCallCollection.getByCallId(n);
            if (f != null)
              ((p = babelHelpers.extends({}, f.toJSON(), {
                callOutcome: o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing,
                isVideoCall: m,
                callParticipants: a.map(function (e) {
                  return { participant: e.jid, outcome: e.result };
                }),
              })),
                (_ = p.to));
            else {
              var g,
                h =
                  s != null
                    ? o("WAWebUserPrefsMeUser").isMeAccount(s)
                    : o("WAWebUserPrefsMeUser").isMeDevice(t) ||
                      o("WAWebUserPrefsMeUser").isMeAccount(t),
                y = yield o("WAWebCallLogUtils").getCallLogTargetDetails({
                  callCreatorWid: s != null ? s : t,
                  callId: n,
                  groupJid: l,
                  isCallLink: s != null,
                  participants: r("compactMap")(a, function (e) {
                    return e.jid;
                  }),
                }),
                C = y.callCreatorUserWid,
                b = y.chatId,
                v = y.msgKeyId,
                S = y.participant,
                R = y.viewMode;
              ((_ = b),
                (p = {
                  id: new (r("WAWebMsgKey"))({
                    remote: _,
                    participant: S,
                    fromMe: h,
                    id: v,
                  }),
                  type: o("WAWebMsgType").MSG_TYPE.CALL_LOG,
                  kind: o("WAWebMsgType").MsgKind.CallLog,
                  viewMode: R,
                  callOutcome: o("WAWebCallLogMsgData.flow").CallOutcome
                    .Ongoing,
                  isVideoCall: m,
                  isCallLink: !r("isStringNullOrEmpty")(e.CallLinkToken),
                  callLinkToken: (g = e.CallLinkToken) != null ? g : "",
                  callCreator: t,
                  from: C,
                  author: C,
                  t: o("WATimeUtils").unixTime(),
                  callParticipants: a.map(function (e) {
                    return { participant: e.jid, outcome: e.result };
                  }),
                  to: _,
                  selfOtherDeviceConnected: e.SelfOtherDeviceConnected,
                }));
            }
          } else {
            var L = o(
              "WAWebVoipOngoingCallCollection",
            ).WAWebVoipOngoingCallCollection.getByCallId(n);
            if (L == null)
              throw r("err")(
                "voip action write call log message: update joinable: Unexpected null ongoing call",
              );
            var E;
            if (
              d ===
              o("WAWebVoipJsonParserPayloads").UpdateJoinableCallLogType.Delete
            ) {
              var k;
              ((E = (k = L.callParticipants) != null ? k : []),
                i != null &&
                  i.Users &&
                  (E = E.map(function (e) {
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
              d ===
              o("WAWebVoipJsonParserPayloads").UpdateJoinableCallLogType.Update
                ? (E = a.map(function (e) {
                    return { participant: e.jid, outcome: e.result };
                  }))
                : (E = L.callParticipants);
            ((p = babelHelpers.extends({}, L.toJSON(), {
              callOutcome:
                d ===
                o("WAWebVoipJsonParserPayloads").UpdateJoinableCallLogType
                  .Delete
                  ? u(c)
                  : o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing,
              isVideoCall:
                L.isVideoCall || (i == null ? void 0 : i.IsVideo) || m,
              callDuration:
                i != null && i.CallDuration
                  ? Math.floor((i == null ? void 0 : i.CallDuration) / 1e3)
                  : L.callDuration,
              callParticipants: E,
              viewMode:
                L.viewMode === o("WAWebViewMode.flow").ViewModeType.HIDDEN &&
                E &&
                E.length > 0
                  ? o("WAWebViewMode.flow").ViewModeType
                      .CALL_LOG_AD_HOC_GROUP_CALL
                  : L.viewMode,
              selfOtherDeviceConnected: e.SelfOtherDeviceConnected,
            })),
              (_ = p.to));
          }
          r("isStringNullOrEmpty")(e.CallLinkToken) ||
            (p.viewMode =
              o("WAWebViewMode.flow").ViewModeType.CALL_LOG_AD_HOC_GROUP_CALL);
          var I = yield o(
            "WAWebVoipActionWriteCallLogImpl",
          ).writeVoipCallLogMessageImpl(_, p, !1);
          d ===
          o("WAWebVoipJsonParserPayloads").UpdateJoinableCallLogType.Delete
            ? o(
                "WAWebVoipOngoingCallCollection",
              ).WAWebVoipOngoingCallCollection.remove(p.id)
            : I &&
              (o("WAWebVoipActionWriteCallLogImpl").markCallIdProcessed(n),
              o(
                "WAWebVoipOngoingCallCollection",
              ).WAWebVoipOngoingCallCollection.add(I, { merge: !0 }));
        })),
        f.apply(this, arguments)
      );
    }
    ((l.cleanupJoinableCallLog = c),
      (l.generateCallLogFromEventUpdateJoinable = m));
  },
  98,
);
