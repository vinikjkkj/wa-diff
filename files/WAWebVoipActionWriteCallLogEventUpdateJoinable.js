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
            f,
            g;
          if (
            m ===
            o("WAWebVoipJsonParserPayloads").UpdateJoinableCallLogType.Create
          ) {
            if (t == null)
              throw r("err")(
                "voip action write call log message: update joinable: Unexpected null call creator on create type event",
              );
            var h = o(
              "WAWebVoipOngoingCallCollection",
            ).WAWebVoipOngoingCallCollection.getByCallId(n);
            if (h != null)
              ((f = babelHelpers.extends({}, h.toJSON(), {
                callOutcome: o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing,
                isVideoCall: p,
                callParticipants: a.map(function (e) {
                  return { participant: e.jid, outcome: e.result };
                }),
              })),
                (g = f.to));
            else {
              var y,
                C =
                  s != null
                    ? o("WAWebUserPrefsMeUser").isMeAccount(s)
                    : o("WAWebUserPrefsMeUser").isMeDevice(t) ||
                      o("WAWebUserPrefsMeUser").isMeAccount(t),
                b = yield o("WAWebCallLogUtils").getCallLogTargetDetails({
                  callCreatorWid: s != null ? s : t,
                  callId: n,
                  groupJid: l,
                  isCallLink: s != null || _,
                  participants: r("compactMap")(a, function (e) {
                    return e.jid;
                  }),
                }),
                v = b.callCreatorUserWid,
                S = b.chatId,
                R = b.msgKeyId,
                L = b.participant,
                E = b.viewMode;
              ((g = S),
                (f = {
                  id: new (r("WAWebMsgKey"))({
                    remote: g,
                    participant: L,
                    fromMe: C,
                    id: R,
                  }),
                  type: o("WAWebMsgType").MSG_TYPE.CALL_LOG,
                  kind: o("WAWebMsgType").MsgKind.CallLog,
                  viewMode: E,
                  callOutcome: o("WAWebCallLogMsgData.flow").CallOutcome
                    .Ongoing,
                  isVideoCall: p,
                  isCallLink: _,
                  callLinkToken: (y = e.CallLinkToken) != null ? y : "",
                  callCreator: t,
                  from: v,
                  author: v,
                  t: o(
                    "WAWebVoipCallLogTimestamp",
                  ).resolveCallLogTimestampFromOfferTime(e.OfferEpochTime),
                  callParticipants: a.map(function (e) {
                    return { participant: e.jid, outcome: e.result };
                  }),
                  to: g,
                  selfOtherDeviceConnected: e.SelfOtherDeviceConnected,
                }));
            }
          } else {
            var k = o(
              "WAWebVoipOngoingCallCollection",
            ).WAWebVoipOngoingCallCollection.getByCallId(n);
            if (k == null) {
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
            var I;
            if (
              m ===
              o("WAWebVoipJsonParserPayloads").UpdateJoinableCallLogType.Delete
            ) {
              var T;
              ((I = (T = k.callParticipants) != null ? T : []),
                i != null &&
                  i.Users &&
                  (I = I.map(function (e) {
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
                ? (I = a.map(function (e) {
                    return { participant: e.jid, outcome: e.result };
                  }))
                : (I = k.callParticipants);
            ((f = babelHelpers.extends({}, k.toJSON(), {
              callOutcome:
                m ===
                o("WAWebVoipJsonParserPayloads").UpdateJoinableCallLogType
                  .Delete
                  ? d(u)
                  : o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing,
              isVideoCall:
                k.isVideoCall || (i == null ? void 0 : i.IsVideo) || p,
              callDuration:
                i != null && i.CallDuration
                  ? Math.floor((i == null ? void 0 : i.CallDuration) / 1e3)
                  : k.callDuration,
              callParticipants: I,
              viewMode:
                k.viewMode === o("WAWebViewMode.flow").ViewModeType.HIDDEN &&
                I &&
                I.length > 0
                  ? o("WAWebViewMode.flow").ViewModeType
                      .CALL_LOG_AD_HOC_GROUP_CALL
                  : k.viewMode,
              selfOtherDeviceConnected: e.SelfOtherDeviceConnected,
            })),
              (g = f.to));
          }
          _ &&
            (f.viewMode =
              o("WAWebViewMode.flow").ViewModeType.CALL_LOG_AD_HOC_GROUP_CALL);
          var D = yield o(
            "WAWebVoipActionWriteCallLogImpl",
          ).writeVoipCallLogMessageImpl(g, f, !1);
          m ===
          o("WAWebVoipJsonParserPayloads").UpdateJoinableCallLogType.Delete
            ? (o("WAWebVoipActionWriteCallLogImpl").markCallIdProcessed(n),
              o(
                "WAWebVoipOngoingCallCollection",
              ).WAWebVoipOngoingCallCollection.remove(f.id))
            : D &&
              (o("WAWebVoipActionWriteCallLogImpl").markCallIdProcessed(n),
              o(
                "WAWebVoipOngoingCallCollection",
              ).WAWebVoipOngoingCallCollection.add(D, { merge: !0 }));
        })),
        h.apply(this, arguments)
      );
    }
    ((l.cleanupJoinableCallLog = m),
      (l.generateCallLogFromEventUpdateJoinable = _));
  },
  98,
);
