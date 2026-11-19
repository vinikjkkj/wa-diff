__d(
  "WAWebVoipActionWriteCallLogEventUpdateJoinable",
  [
    "WALogger",
    "WAWebCallLogMsgData.flow",
    "WAWebCallLogUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebUserUtils",
    "WAWebViewMode.flow",
    "WAWebVoipActionWriteCallLogImpl",
    "WAWebVoipAdHocCallLogs",
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
    "nullthrows",
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
          yield o(
            "WAWebVoipOngoingCallCollection",
          ).WAWebVoipOngoingCallCollection.waitUntilLoaded();
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
          yield o(
            "WAWebVoipOngoingCallCollection",
          ).WAWebVoipOngoingCallCollection.waitUntilLoaded();
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
            a = e.Type;
          if (
            o("WAWebVoipJsonParserPayloads").UpdateJoinableCallLogType == null
          )
            throw r("err")(
              "WAWebVoipActionWriteCallLogEventUpdateJoinable: Expected UpdateJoinableCallLogType to be defined",
            );
          var i = !r("isStringNullOrEmpty")(e.CallLinkToken),
            l =
              e.IsLightweight ||
              o("WAWebVoipVoiceChatUtils").isVoiceChatOfferSilenceReason(
                e.SilenceReason,
              )
                ? { isVoiceChat: !0 }
                : {};
          if (
            a ===
              o("WAWebVoipJsonParserPayloads").UpdateJoinableCallLogType
                .Create &&
            t == null
          )
            throw r("err")(
              "voip action write call log message: update joinable: Unexpected null call creator on create type event",
            );
          var s = o("WAWebVoipAdHocCallLogs").getCallLogMsgsForCall(n, {
              includeUntracked:
                a ===
                  o("WAWebVoipJsonParserPayloads").UpdateJoinableCallLogType
                    .Create &&
                e.GroupJid == null &&
                e.LinkCreatorJid == null &&
                !i,
            }),
            u;
          if (s.length > 0)
            u = s.map(function (t) {
              return a ===
                o("WAWebVoipJsonParserPayloads").UpdateJoinableCallLogType
                  .Create
                ? b(t, e, l)
                : R(t, e);
            });
          else if (
            a ===
            o("WAWebVoipJsonParserPayloads").UpdateJoinableCallLogType.Create
          )
            u = [yield v(e, r("nullthrows")(t), l)];
          else {
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[generateCallLogFromEventUpdateJoinable] no call ",
                  " ",
                  "",
                ])),
              n,
              a,
            );
            return;
          }
          yield o("WAWebVoipAdHocCallLogs").settleAllOrThrow(
            u.map(function (e) {
              return y(
                n,
                a,
                i
                  ? babelHelpers.extends({}, e, {
                      viewMode:
                        o("WAWebViewMode.flow").ViewModeType
                          .CALL_LOG_AD_HOC_GROUP_CALL,
                    })
                  : e,
              );
            }),
          );
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t, n) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield o(
            "WAWebVoipActionWriteCallLogImpl",
          ).writeVoipCallLogMessageImpl(n.to, n, !1);
          t ===
          o("WAWebVoipJsonParserPayloads").UpdateJoinableCallLogType.Delete
            ? (o("WAWebVoipActionWriteCallLogImpl").markCallIdProcessed(e),
              o(
                "WAWebVoipOngoingCallCollection",
              ).WAWebVoipOngoingCallCollection.remove(n.id))
            : r &&
              (o("WAWebVoipActionWriteCallLogImpl").markCallIdProcessed(e),
              o(
                "WAWebVoipOngoingCallCollection",
              ).WAWebVoipOngoingCallCollection.add(r, { merge: !0 }));
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t, n) {
      var r = t.CallParticipantInfos,
        a = t.SelfOtherDeviceConnected,
        i = t.VideoEnabled;
      return babelHelpers.extends(
        {},
        e.toJSON(),
        {
          callOutcome: o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing,
          isVideoCall: i,
          selfOtherDeviceConnected: a,
          callParticipants: r.map(function (e) {
            return { participant: e.jid, outcome: e.result };
          }),
        },
        n,
      );
    }
    function v(e, t, n) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a,
            i = e.CallId,
            l = e.CallParticipantInfos,
            s = e.GroupJid,
            u = e.LinkCreatorJid,
            c = e.VideoEnabled,
            d = !r("isStringNullOrEmpty")(e.CallLinkToken),
            m =
              u != null
                ? o("WAWebUserUtils").isMeAccount(u)
                : o("WAWebUserUtils").isMeDevice(t) ||
                  o("WAWebUserUtils").isMeAccount(t),
            p = yield o("WAWebCallLogUtils").getCallLogTargetDetails({
              callCreatorWid: u != null ? u : t,
              callId: i,
              groupJid: s,
              isCallLink: u != null || d,
              participants: r("compactMap")(l, function (e) {
                return e.jid;
              }),
            }),
            _ = p.callCreatorUserWid,
            f = p.chatId,
            g = p.msgKeyId,
            h = p.participant,
            y = p.viewMode;
          return babelHelpers.extends(
            {
              id: new (r("WAWebMsgKey"))({
                remote: f,
                participant: h,
                fromMe: m,
                id: g,
              }),
              type: o("WAWebMsgType").MSG_TYPE.CALL_LOG,
              kind: o("WAWebMsgType").MsgKind.CallLog,
              viewMode: y,
              callOutcome: o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing,
              isVideoCall: c,
              isCallLink: d,
              callLinkToken: (a = e.CallLinkToken) != null ? a : "",
              callCreator: t,
              from: _,
              author: _,
              t: o(
                "WAWebVoipCallLogTimestamp",
              ).resolveCallLogTimestampFromOfferTime(e.OfferEpochTime),
              callParticipants: l.map(function (e) {
                return { participant: e.jid, outcome: e.result };
              }),
              to: f,
              selfOtherDeviceConnected: e.SelfOtherDeviceConnected,
            },
            n,
          );
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      var n,
        r = t.CallParticipantInfos,
        a = t.CallSummary,
        i = t.Result,
        l = t.SelfOtherDeviceConnected,
        s = t.Type,
        u = t.VideoEnabled,
        c =
          s ===
          o("WAWebVoipJsonParserPayloads").UpdateJoinableCallLogType.Delete
            ? L((n = e.callParticipants) != null ? n : [], a)
            : s ===
                o("WAWebVoipJsonParserPayloads").UpdateJoinableCallLogType
                  .Update
              ? r.map(function (e) {
                  return { participant: e.jid, outcome: e.result };
                })
              : e.callParticipants;
      return babelHelpers.extends({}, e.toJSON(), {
        callOutcome:
          s ===
          o("WAWebVoipJsonParserPayloads").UpdateJoinableCallLogType.Delete
            ? d(i)
            : o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing,
        isVideoCall: e.isVideoCall || (a == null ? void 0 : a.IsVideo) || u,
        callDuration:
          a != null && a.CallDuration
            ? Math.floor((a == null ? void 0 : a.CallDuration) / 1e3)
            : e.callDuration,
        callParticipants: c,
        viewMode:
          e.viewMode === o("WAWebViewMode.flow").ViewModeType.HIDDEN &&
          c &&
          c.length > 0
            ? o("WAWebViewMode.flow").ViewModeType.CALL_LOG_AD_HOC_GROUP_CALL
            : e.viewMode,
        selfOtherDeviceConnected: l,
      });
    }
    function L(e, t) {
      var n = t == null ? void 0 : t.Users;
      if (n == null) return e;
      var a = function (t) {
          return [t.Jid, t.PhoneJid].filter(Boolean).map(function (e) {
            return o("WAWebCallLogUtils").getCallParticipantKey(e);
          });
        },
        i = e.map(function (e) {
          var t = o("WAWebCallLogUtils").getCallParticipantKey(e.participant),
            r = n.find(function (e) {
              return a(e).includes(t);
            });
          return r != null
            ? babelHelpers.extends({}, e, {
                outcome:
                  r.State ===
                  o("WAWebVoipWaCallEnums").CallSummaryUserState.Connected
                    ? o("WAWebVoipWaCallEnums").CallParticipantState.Connected
                    : o("WAWebVoipWaCallEnums").CallParticipantState.Invited,
              })
            : e;
        }),
        l = new Set(
          e.map(function (e) {
            var t = e.participant;
            return o("WAWebCallLogUtils").getCallParticipantKey(t);
          }),
        ),
        s = r("compactMap")(n, function (e) {
          var t = e.Jid;
          return t != null &&
            e.State ===
              o("WAWebVoipWaCallEnums").CallSummaryUserState.Connected &&
            !a(e).some(function (e) {
              return l.has(e);
            })
            ? {
                participant: t,
                outcome: o("WAWebVoipWaCallEnums").CallParticipantState
                  .Connected,
              }
            : null;
        });
      return [].concat(i, s);
    }
    ((l.cleanupJoinableCallLog = m),
      (l.generateCallLogFromEventUpdateJoinable = _));
  },
  98,
);
