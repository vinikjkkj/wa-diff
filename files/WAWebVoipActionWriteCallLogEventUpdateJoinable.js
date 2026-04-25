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
                    "[cleanupJoinableCallLog] no ongoing call for ",
                    ", already cleaned up",
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
          var _, f;
          if (
            m ===
            o("WAWebVoipJsonParserPayloads").UpdateJoinableCallLogType.Create
          ) {
            if (t == null)
              throw r("err")(
                "voip action write call log message: update joinable: Unexpected null call creator on create type event",
              );
            var g = o(
              "WAWebVoipOngoingCallCollection",
            ).WAWebVoipOngoingCallCollection.getByCallId(n);
            if (g != null)
              ((_ = babelHelpers.extends({}, g.toJSON(), {
                callOutcome: o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing,
                isVideoCall: p,
                callParticipants: a.map(function (e) {
                  return { participant: e.jid, outcome: e.result };
                }),
              })),
                (f = _.to));
            else {
              var h,
                y =
                  s != null
                    ? o("WAWebUserPrefsMeUser").isMeAccount(s)
                    : o("WAWebUserPrefsMeUser").isMeDevice(t) ||
                      o("WAWebUserPrefsMeUser").isMeAccount(t),
                C = yield o("WAWebCallLogUtils").getCallLogTargetDetails({
                  callCreatorWid: s != null ? s : t,
                  callId: n,
                  groupJid: l,
                  isCallLink: s != null,
                  participants: r("compactMap")(a, function (e) {
                    return e.jid;
                  }),
                }),
                b = C.callCreatorUserWid,
                v = C.chatId,
                S = C.msgKeyId,
                R = C.participant,
                L = C.viewMode;
              ((f = v),
                (_ = {
                  id: new (r("WAWebMsgKey"))({
                    remote: f,
                    participant: R,
                    fromMe: y,
                    id: S,
                  }),
                  type: o("WAWebMsgType").MSG_TYPE.CALL_LOG,
                  kind: o("WAWebMsgType").MsgKind.CallLog,
                  viewMode: L,
                  callOutcome: o("WAWebCallLogMsgData.flow").CallOutcome
                    .Ongoing,
                  isVideoCall: p,
                  isCallLink: !r("isStringNullOrEmpty")(e.CallLinkToken),
                  callLinkToken: (h = e.CallLinkToken) != null ? h : "",
                  callCreator: t,
                  from: b,
                  author: b,
                  t: o("WATimeUtils").unixTime(),
                  callParticipants: a.map(function (e) {
                    return { participant: e.jid, outcome: e.result };
                  }),
                  to: f,
                  selfOtherDeviceConnected: e.SelfOtherDeviceConnected,
                }));
            }
          } else {
            var E = o(
              "WAWebVoipOngoingCallCollection",
            ).WAWebVoipOngoingCallCollection.getByCallId(n);
            if (E == null) {
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[generateCallLogFromEventUpdateJoinable] no ongoing call for ",
                    " on ",
                    ", skipping",
                  ])),
                n,
                m,
              );
              return;
            }
            var k;
            if (
              m ===
              o("WAWebVoipJsonParserPayloads").UpdateJoinableCallLogType.Delete
            ) {
              var I;
              ((k = (I = E.callParticipants) != null ? I : []),
                i != null &&
                  i.Users &&
                  (k = k.map(function (e) {
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
                ? (k = a.map(function (e) {
                    return { participant: e.jid, outcome: e.result };
                  }))
                : (k = E.callParticipants);
            ((_ = babelHelpers.extends({}, E.toJSON(), {
              callOutcome:
                m ===
                o("WAWebVoipJsonParserPayloads").UpdateJoinableCallLogType
                  .Delete
                  ? d(u)
                  : o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing,
              isVideoCall:
                E.isVideoCall || (i == null ? void 0 : i.IsVideo) || p,
              callDuration:
                i != null && i.CallDuration
                  ? Math.floor((i == null ? void 0 : i.CallDuration) / 1e3)
                  : E.callDuration,
              callParticipants: k,
              viewMode:
                E.viewMode === o("WAWebViewMode.flow").ViewModeType.HIDDEN &&
                k &&
                k.length > 0
                  ? o("WAWebViewMode.flow").ViewModeType
                      .CALL_LOG_AD_HOC_GROUP_CALL
                  : E.viewMode,
              selfOtherDeviceConnected: e.SelfOtherDeviceConnected,
            })),
              (f = _.to));
          }
          r("isStringNullOrEmpty")(e.CallLinkToken) ||
            (_.viewMode =
              o("WAWebViewMode.flow").ViewModeType.CALL_LOG_AD_HOC_GROUP_CALL);
          var T = yield o(
            "WAWebVoipActionWriteCallLogImpl",
          ).writeVoipCallLogMessageImpl(f, _, !1);
          m ===
          o("WAWebVoipJsonParserPayloads").UpdateJoinableCallLogType.Delete
            ? o(
                "WAWebVoipOngoingCallCollection",
              ).WAWebVoipOngoingCallCollection.remove(_.id)
            : T &&
              (o("WAWebVoipActionWriteCallLogImpl").markCallIdProcessed(n),
              o(
                "WAWebVoipOngoingCallCollection",
              ).WAWebVoipOngoingCallCollection.add(T, { merge: !0 }));
        })),
        h.apply(this, arguments)
      );
    }
    ((l.cleanupJoinableCallLog = m),
      (l.generateCallLogFromEventUpdateJoinable = _));
  },
  98,
);
