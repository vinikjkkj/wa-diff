__d(
  "WAWebCallLogUtils",
  [
    "fbt",
    "WALogger",
    "WANullthrows",
    "WATimeUtils",
    "WAWebBotUtils",
    "WAWebCallCollection",
    "WAWebCallLogMsgData.flow",
    "WAWebCallTimer.react",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebFindChatAction",
    "WAWebFrontendMsgGetters",
    "WAWebLid1X1MigrationGating",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebProfilePicThumbCollection",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebVoipConnectingStatus.react",
    "WAWebVoipWaCallEnums",
    "WAWebWaitForInitialChatsSynced",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react"));
    function d(e) {
      var t;
      if (e == null || e.length === 0) return !1;
      var n = e.some(function (e) {
          return e.participant.isLid();
        }),
        r = n
          ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()
          : o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
      return (
        ((t = e.find(function (e) {
          var t;
          return (t = e.participant) == null ? void 0 : t.equals(r);
        })) == null
          ? void 0
          : t.outcome) ===
        o("WAWebVoipWaCallEnums").CallParticipantState.Connected
      );
    }
    function m(e, t, n, r, a) {
      return (
        (e || !t) &&
        !n &&
        r !== o("WAWebCallLogMsgData.flow").CallOutcome.AcceptedElsewhere &&
        (a == null ||
          a === o("WAWebCallLogMsgData.flow").CallOutcome.Missed ||
          a === o("WAWebCallLogMsgData.flow").CallOutcome.Rejected ||
          a === o("WAWebCallLogMsgData.flow").CallOutcome.Canceled)
      );
    }
    function p(e, t) {
      return e === o("WAWebVoipWaCallEnums").CallState.Calling
        ? s._(/*BTDS*/ "Calling...")
        : e === o("WAWebVoipWaCallEnums").CallState.PreacceptReceived
          ? s._(/*BTDS*/ "Ringing...")
          : e === o("WAWebVoipWaCallEnums").CallState.ReceivedCall ||
              e === o("WAWebVoipWaCallEnums").CallState.ReceivedCallWithoutOffer
            ? t != null && t.isVideoCall
              ? s._(/*BTDS*/ "Video call")
              : s._(/*BTDS*/ "Voice call")
            : e === o("WAWebVoipWaCallEnums").CallState.AcceptSent ||
                e === o("WAWebVoipWaCallEnums").CallState.AcceptReceived
              ? c.jsx(r("WAWebVoipConnectingStatus.react"), {})
              : e === o("WAWebVoipWaCallEnums").CallState.CallActive
                ? c.jsx(r("WAWebCallTimer.react"), { callState: e })
                : e === o("WAWebVoipWaCallEnums").CallState.ConnectedLonely ||
                    e === o("WAWebVoipWaCallEnums").CallState.Rejoining
                  ? s._(/*BTDS*/ "Waiting for others...")
                  : e == null
                    ? s._(/*BTDS*/ "Call ended")
                    : e != null
                      ? o("WAWebVoipWaCallEnums").CallState.getName(e)
                      : "unknown";
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.callCreatorWid,
            a = t.callId,
            i = t.groupJid,
            l = t.isCallLink,
            s = t.peerWid,
            u = t.participants,
            c = u === void 0 ? [] : u,
            d,
            m,
            p = o("WAWebViewMode.flow").ViewModeType.VISIBLE,
            _ = yield g({
              callDestinationWid: o("WAWebWidFactory").asUserWidOrThrow(n),
            }),
            f = o("WAWebUserPrefsMeUser").isMeAccount(_),
            h = c.filter(function (e) {
              return e != null && !o("WAWebUserPrefsMeUser").isMeAccount(e);
            });
          if (i != null) ((d = i), (m = _));
          else if (!f) d = _;
          else if (h.length === 1 && l !== !0) {
            var y = h[0];
            d = yield g({
              callDestinationWid: o("WAWebWidFactory").asUserWidOrThrow(y),
            });
          } else
            s != null
              ? (d = yield g({
                  callDestinationWid: o("WAWebWidFactory").asUserWidOrThrow(s),
                }))
              : (o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[voip] getCallLogTargetDetails: msg -> self chat",
                    ])),
                ),
                (d = _),
                (p =
                  h.length > 0
                    ? o("WAWebViewMode.flow").ViewModeType
                        .CALL_LOG_AD_HOC_GROUP_CALL
                    : o("WAWebViewMode.flow").ViewModeType.HIDDEN));
          return {
            msgKeyId: a != null ? a : yield r("WAWebMsgKey").newId(),
            fromMe: f,
            callCreatorUserWid: _,
            chatId: d,
            participant: m,
            viewMode: p,
          };
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
          var t = e.callDestinationWid,
            n = e.groupJid,
            r = t,
            a =
              !r.isLid() &&
              o(
                "WAWebLid1X1MigrationGating",
              ).Lid1X1MigrationUtils.isLidMigrated(),
            i = !n && (r.isLid() || a);
          if (i) {
            yield o(
              "WAWebWaitForInitialChatsSynced",
            ).waitForInitialChatsSynced();
            var l = yield o("WAWebFindChatAction").findOrCreateLatestChat(
                t,
                "voipCallLog",
              ),
              s = l.chat;
            r = o("WAWebWidFactory").asUserWidOrThrow(s.id);
          }
          return r;
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      switch (e) {
        case 0:
          return o("WAWebCallLogMsgData.flow").CallOutcome.Completed;
        case 1:
          return o("WAWebCallLogMsgData.flow").CallOutcome.Rejected;
        case 2:
          return o("WAWebCallLogMsgData.flow").CallOutcome.Canceled;
        case 3:
          return o("WAWebCallLogMsgData.flow").CallOutcome.AcceptedElsewhere;
        case 4:
        case 6:
        case 9:
          return o("WAWebCallLogMsgData.flow").CallOutcome.Missed;
        case 5:
        case 7:
        case 8:
          return o("WAWebCallLogMsgData.flow").CallOutcome.Failed;
        case 10:
          return o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing;
        default:
          return o("WAWebCallLogMsgData.flow").CallOutcome.Unknown;
      }
    }
    function C(e) {
      switch (e) {
        case 0:
          return o("WAWebVoipWaCallEnums").CallParticipantState.Connected;
        case 1:
          return o("WAWebVoipWaCallEnums").CallParticipantState.Rejected;
        case 2:
          return o("WAWebVoipWaCallEnums").CallParticipantState.Terminated;
        case 4:
        case 6:
        case 9:
          return o("WAWebVoipWaCallEnums").CallParticipantState.Terminated;
        case 10:
          return o("WAWebVoipWaCallEnums").CallParticipantState.Connected;
        case 3:
        case 5:
        case 7:
        case 8:
          return o("WAWebVoipWaCallEnums").CallParticipantState.Invalid;
        default:
          return o("WAWebVoipWaCallEnums").CallParticipantState.Invalid;
      }
    }
    function b(e, t) {
      switch (e) {
        case o("WAWebVoipWaCallEnums").CallResult.Connected:
          return o("WAWebCallLogMsgData.flow").CallOutcome.Completed;
        case o("WAWebVoipWaCallEnums").CallResult.Missed:
        case o("WAWebVoipWaCallEnums").CallResult.MissedNotificationsMuted:
          return o("WAWebCallLogMsgData.flow").CallOutcome.Missed;
        case o("WAWebVoipWaCallEnums").CallResult.Declined:
          return o("WAWebCallLogMsgData.flow").CallOutcome.Rejected;
        case o("WAWebVoipWaCallEnums").CallResult.Canceled:
          return o("WAWebCallLogMsgData.flow").CallOutcome.Canceled;
        case o("WAWebVoipWaCallEnums").CallResult.AcceptedElsewhere:
          return o("WAWebCallLogMsgData.flow").CallOutcome.AcceptedElsewhere;
        case o("WAWebVoipWaCallEnums").CallResult.Unavailable:
          return t != null && t > 0
            ? o("WAWebCallLogMsgData.flow").CallOutcome.Failed
            : o("WAWebCallLogMsgData.flow").CallOutcome.Unknown;
        case o("WAWebVoipWaCallEnums").CallResult.Undefined:
          return o("WAWebCallLogMsgData.flow").CallOutcome.Unknown;
      }
    }
    function v(e, t) {
      switch (e) {
        case o("WAWebVoipWaCallEnums").CallLogResult.Connected:
        case o("WAWebVoipWaCallEnums").CallLogResult.ConnectedLonely:
          return o("WAWebCallLogMsgData.flow").CallOutcome.Completed;
        case o("WAWebVoipWaCallEnums").CallLogResult.Missed:
          return o("WAWebCallLogMsgData.flow").CallOutcome.Missed;
        case o("WAWebVoipWaCallEnums").CallLogResult.Rejected:
          return o("WAWebCallLogMsgData.flow").CallOutcome.Rejected;
        case o("WAWebVoipWaCallEnums").CallLogResult.Canceled:
          return o("WAWebCallLogMsgData.flow").CallOutcome.Canceled;
        case o("WAWebVoipWaCallEnums").CallLogResult.AcceptedElsewhere:
          return o("WAWebCallLogMsgData.flow").CallOutcome.AcceptedElsewhere;
        case o("WAWebVoipWaCallEnums").CallLogResult.Unavailable:
          return t != null && t > 0
            ? o("WAWebCallLogMsgData.flow").CallOutcome.Failed
            : o("WAWebCallLogMsgData.flow").CallOutcome.Unknown;
        case o("WAWebVoipWaCallEnums").CallLogResult.Failed:
          return o("WAWebCallLogMsgData.flow").CallOutcome.Failed;
        case o("WAWebVoipWaCallEnums").CallLogResult.Invalid:
          return o("WAWebCallLogMsgData.flow").CallOutcome.Unknown;
      }
    }
    function S(e) {
      switch (e) {
        case o("WAWebVoipWaCallEnums").CallState.None:
          return o("WAWebCallLogMsgData.flow").CallOutcome.Completed;
        case o("WAWebVoipWaCallEnums").CallState.CallActiveElseWhere:
          return o("WAWebCallLogMsgData.flow").CallOutcome.AcceptedElsewhere;
        case o("WAWebVoipWaCallEnums").CallState.Calling:
        case o("WAWebVoipWaCallEnums").CallState.PreacceptReceived:
        case o("WAWebVoipWaCallEnums").CallState.ReceivedCall:
        case o("WAWebVoipWaCallEnums").CallState.AcceptSent:
        case o("WAWebVoipWaCallEnums").CallState.AcceptReceived:
        case o("WAWebVoipWaCallEnums").CallState.CallActive:
        case o("WAWebVoipWaCallEnums").CallState.ReceivedCallWithoutOffer:
        case o("WAWebVoipWaCallEnums").CallState.Rejoining:
        case o("WAWebVoipWaCallEnums").CallState.Link:
        case o("WAWebVoipWaCallEnums").CallState.ConnectedLonely:
        case o("WAWebVoipWaCallEnums").CallState.PreCalling:
        case o("WAWebVoipWaCallEnums").CallState.CallStateEnding:
        case o("WAWebVoipWaCallEnums").CallState.CallBCallStarting:
          return o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing;
      }
    }
    function R(e) {
      switch (e) {
        case 1:
          return "scheduled";
        case 2:
          return "privacy";
        case 3:
          return "lightweight";
        case 4:
          return "screensharing";
        case 5:
          return "group_setting";
        case 6:
          return "vc_init";
        case 7:
          return "vc_wave";
        case 8:
          return "vc_wave_all";
        case 9:
          return "added_as_link_creator";
        case 10:
          return "added_for_device_switching";
        case 11:
          return "group_chat_add";
        default:
          return;
      }
    }
    function L(e, t) {
      return e != null && t != null && e.isSameAccountAndAddressingMode(t);
    }
    function E(e, t) {
      return e.length !== t.length
        ? !1
        : e.every(function (e) {
            return t.some(function (t) {
              return L(e, t);
            });
          });
    }
    function k(e) {
      var t, n;
      return {
        isCallLink:
          (t = o("WAWebMsgGetters").getIsCallLink(e)) != null ? t : !1,
        sender: o("WAWebMsgGetters").getSender(e),
        to: o("WAWebMsgGetters").getTo(e),
        isVideoCall: o("WAWebMsgGetters").getIsVideoCall(e),
        isSentByMe: o("WAWebMsgGetters").getIsSentByMe(e),
        isGroupCall: o("WAWebMsgGetters").getIsGroupCall(e),
        isMissedCall: o("WAWebMsgGetters").getIsMissedCall(e),
        isCallSilenced: o("WAWebMsgGetters").getIsCallSilenced(e),
        t: o("WAWebMsgGetters").getT(e),
        participantWids:
          (n = e.callParticipants) == null
            ? void 0
            : n.map(function (e) {
                return e.participant;
              }),
      };
    }
    function I(e, t) {
      if (
        e.isCallLink ||
        t.isCallLink ||
        !L(e.sender, t.sender) ||
        !L(e.to, t.to)
      )
        return !1;
      var n =
        e.isVideoCall === t.isVideoCall &&
        e.isSentByMe === t.isSentByMe &&
        e.isGroupCall === t.isGroupCall;
      if (!n || e.isMissedCall !== t.isMissedCall) return !1;
      var r =
        (e.isCallSilenced && !e.isSentByMe) ===
        (t.isCallSilenced && !t.isSentByMe);
      if (
        !r ||
        !o("WATimeUtils").sameDay(
          o("WATimeUtils").castToUnixTime(e.t),
          o("WATimeUtils").castToUnixTime(t.t),
        )
      )
        return !1;
      var a =
        e.participantWids != null &&
        t.participantWids != null &&
        E(e.participantWids, t.participantWids);
      return a;
    }
    function T(e, t) {
      return I(k(e), k(t));
    }
    function D(e) {
      if (e.length === 0) return [];
      for (
        var t = e.map(function (e) {
            return r("WANullthrows")(
              o("WAWebFrontendMsgGetters").getAsCallLog(e),
              "[mergeCallRecords] record is not a call log record",
            );
          }),
          n = t.map(k),
          a = [],
          i = 0,
          l = [t[0].unsafe()],
          s = 1;
        s < t.length;
        s++
      )
        I(n[i], n[s])
          ? l.push(t[s].unsafe())
          : (a.push({ mergedMsgs: l }), (i = s), (l = [t[s].unsafe()]));
      return (a.push({ mergedMsgs: l }), a);
    }
    var x = 1e5,
      $ = 1e4,
      P = 1e3,
      N = 100,
      M = 10,
      w = 1;
    function A(e, t) {
      var n = 0;
      (t.isCaller && (n += x), t.isBot && (n += $), t.isConnected && (n += P));
      var r = o("WAWebContactCollection").ContactCollection.get(e),
        a = (r == null ? void 0 : r.name) != null && r.name !== "";
      a
        ? (n += N)
        : r != null &&
          o("WAWebContactGetters").getNotifyName(r) != null &&
          (n += M);
      var i = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.get(
          e,
        ),
        l = (i == null ? void 0 : i.img) != null && i.img !== "";
      return (l && (n += w), n);
    }
    function F(e, t, n) {
      var r,
        o,
        a = (r = n == null ? void 0 : n.has(e.toString())) != null ? r : !1,
        i = (o = n == null ? void 0 : n.has(t.toString())) != null ? o : !1,
        l = A(e, { isCaller: !1, isConnected: a, isBot: !1 }),
        s = A(t, { isCaller: !1, isConnected: i, isBot: !1 });
      return s - l;
    }
    function O(e, t, n) {
      var r,
        a = (r = n == null ? void 0 : n.excludeSelf) != null ? r : !1,
        i = e.some(function (e) {
          return e.participant.isLid();
        }),
        l = i
          ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()
          : o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        s = o("WAWebMsgGetters").getIsSentByMe(t),
        u = s ? null : o("WAWebMsgGetters").getSender(t);
      return e
        .filter(function (e) {
          return a ? !e.participant.equals(l) : !0;
        })
        .sort(function (t, n) {
          var r = t.participant,
            a = n.participant;
          if (u != null) {
            var i = r.equals(u),
              s = a.equals(u);
            if (i && !s) return -1;
            if (!i && s) return 1;
          }
          var c = r.equals(l),
            d = a.equals(l);
          if (c && !d) return -1;
          if (!c && d) return 1;
          var m = o("WAWebBotUtils").isMetaAiBot(r),
            p = o("WAWebBotUtils").isMetaAiBot(a);
          return m && !p
            ? -1
            : !m && p
              ? 1
              : F(
                  r,
                  a,
                  new Set(
                    e
                      .filter(function (e) {
                        return (
                          e.outcome ===
                          o("WAWebVoipWaCallEnums").CallParticipantState
                            .Connected
                        );
                      })
                      .map(function (e) {
                        return e.participant.toString();
                      }),
                  ),
                );
        });
    }
    function B(e) {
      var t,
        n = r("WAWebCallCollection").lastActiveCall;
      if ((n == null ? void 0 : n.userEndedCall) === !0) return !1;
      var a = (t = n == null ? void 0 : n.isGroup) != null ? t : !1,
        i = e != null ? o("WAWebMsgGetters").getCallOutcome(e) : null,
        l = a && i === o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing,
        s = (n == null ? void 0 : n.callFailedReason) != null;
      return s ? !0 : !l;
    }
    function W(e, t) {
      return (
        t === void 0 && (t = !1),
        e === o("WAWebVoipWaCallEnums").CallLogResult.Connected
          ? s._(/*BTDS*/ "Call ended")
          : e === o("WAWebVoipWaCallEnums").CallLogResult.Canceled ||
              e === o("WAWebVoipWaCallEnums").CallLogResult.Missed ||
              e === o("WAWebVoipWaCallEnums").CallLogResult.Rejected
            ? t
              ? s._(/*BTDS*/ "No answer")
              : s._(/*BTDS*/ "Call ended")
            : e === o("WAWebVoipWaCallEnums").CallLogResult.AcceptedElsewhere
              ? s._(/*BTDS*/ "Answered elsewhere")
              : e === o("WAWebVoipWaCallEnums").CallLogResult.Failed
                ? s._(/*BTDS*/ "Call failed")
                : e ===
                      o("WAWebVoipWaCallEnums").CallLogResult.ConnectedLonely ||
                    e === o("WAWebVoipWaCallEnums").CallLogResult.Unavailable ||
                    e === o("WAWebVoipWaCallEnums").CallLogResult.Invalid ||
                    e === null ||
                    e === void 0
                  ? s._(/*BTDS*/ "Call ended")
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          e,
                      );
                    })()
      );
    }
    W.displayName = W.name + " [from " + i.id + "]";
    function q(e, t, n, r) {
      return (
        n === void 0 && (n = !0),
        e ? "return" : n && (t || r === !0) ? "join_here" : "join"
      );
    }
    function U(e, t) {
      return [].concat(e).sort(function (e, n) {
        var r = o("WAWebBotUtils").isMetaAiBot(e),
          a = o("WAWebBotUtils").isMetaAiBot(n);
        return r && !a ? -1 : !r && a ? 1 : F(e, n, t);
      });
    }
    function V(e) {
      var t = new Set(
          e.map(function (e) {
            return e.toString();
          }),
        ),
        n = U(e, t);
      return { sortedParticipants: n, connectedSet: t };
    }
    function H(e, t, n) {
      var r,
        a = (r = n == null ? void 0 : n.excludeSelf) != null ? r : !1,
        i = e.some(function (e) {
          return e.isLid();
        }),
        l = i
          ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()
          : o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        s = o("WAWebMsgGetters").getIsSentByMe(t),
        u = s ? null : o("WAWebMsgGetters").getSender(t);
      return e
        .filter(function (e) {
          return a ? !e.equals(l) : !0;
        })
        .sort(function (e, t) {
          if (u != null) {
            var n = e.equals(u),
              r = t.equals(u);
            if (n && !r) return -1;
            if (!n && r) return 1;
          }
          var a = e.equals(l),
            i = t.equals(l);
          if (a && !i) return -1;
          if (!a && i) return 1;
          var s = o("WAWebBotUtils").isMetaAiBot(e),
            c = o("WAWebBotUtils").isMetaAiBot(t);
          return s && !c ? -1 : !s && c ? 1 : F(e, t, null);
        });
    }
    ((l.getIsSelfConnected = d),
      (l.getIsMissedCallOrNotConnected = m),
      (l.getCallStateText = p),
      (l.getCallLogTargetDetails = _),
      (l.get1x1CallLidOrPnDestination = g),
      (l.getCallOutcomeFromCallResultSyncProto = y),
      (l.getCallParticipantStateFromCallResultSyncProto = C),
      (l.getCallOutcomeFromCallResultNative = b),
      (l.getCallOutcomeFromCallLogResult = v),
      (l.getCallOutcomeFromCallState = S),
      (l.getCallSilenceReason = R),
      (l.shouldMergeCallLogRecords = T),
      (l.mergeCallRecords = D),
      (l.getParticipantSortScore = A),
      (l.sortCallParticipants = O),
      (l.shouldShowCallEndedScreen = B),
      (l.getCallResultText = W),
      (l.getJoinButtonTextType = q),
      (l.sortParticipantWidsByPriority = U),
      (l.sortConnectedParticipants = V),
      (l.sortCallParticipantWids = H));
  },
  226,
);
