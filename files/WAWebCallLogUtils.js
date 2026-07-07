__d(
  "WAWebCallLogUtils",
  [
    "fbt",
    "WANullthrows",
    "WATimeUtils",
    "WAWebBotUtils",
    "WAWebCallCollection",
    "WAWebCallLogMsgData.flow",
    "WAWebCallTimer.react",
    "WAWebContactCollection",
    "WAWebContactExternalUserState",
    "WAWebContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebProfilePicThumbCollection",
    "WAWebUserPrefsMeUser",
    "WAWebVoipBackendCallLogTargetResolver",
    "WAWebVoipConnectingStatus.react",
    "WAWebVoipWaCallEnums",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
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
    function d(e, t, n, r, a) {
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
    function m(e, t) {
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
              ? u.jsx(r("WAWebVoipConnectingStatus.react"), {})
              : e === o("WAWebVoipWaCallEnums").CallState.CallActive
                ? u.jsx(r("WAWebCallTimer.react"), { callState: e })
                : e === o("WAWebVoipWaCallEnums").CallState.ConnectedLonely ||
                    e === o("WAWebVoipWaCallEnums").CallState.Rejoining
                  ? s._(/*BTDS*/ "Waiting for others...")
                  : e == null
                    ? s._(/*BTDS*/ "Call ended")
                    : e != null
                      ? o("WAWebVoipWaCallEnums").CallState.getName(e)
                      : "unknown";
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
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
    function _(e) {
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
    function f(e, t) {
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
            : o("WAWebCallLogMsgData.flow").CallOutcome.Missed;
        case o("WAWebVoipWaCallEnums").CallResult.Undefined:
          return o("WAWebCallLogMsgData.flow").CallOutcome.Unknown;
      }
    }
    function g(e, t) {
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
            : o("WAWebCallLogMsgData.flow").CallOutcome.Missed;
        case o("WAWebVoipWaCallEnums").CallLogResult.Failed:
          return o("WAWebCallLogMsgData.flow").CallOutcome.Failed;
        case o("WAWebVoipWaCallEnums").CallLogResult.Invalid:
          return o("WAWebCallLogMsgData.flow").CallOutcome.Unknown;
      }
    }
    function h(e) {
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
    function y(e) {
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
    function C(e, t) {
      return e != null && t != null && e.isSameAccountAndAddressingMode(t);
    }
    function b(e, t) {
      return e.length !== t.length
        ? !1
        : e.every(function (e) {
            return t.some(function (t) {
              return C(e, t);
            });
          });
    }
    function v(e) {
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
    function S(e, t) {
      if (
        e.isCallLink ||
        t.isCallLink ||
        !C(e.sender, t.sender) ||
        !C(e.to, t.to)
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
        b(e.participantWids, t.participantWids);
      return a;
    }
    function R(e, t) {
      return S(v(e), v(t));
    }
    function L(e) {
      if (e.length === 0) return [];
      var t = e.filter(function (e) {
        return (
          e.callOutcome !== o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing
        );
      });
      if (t.length === 0) return [];
      for (
        var n = t.map(function (e) {
            return r("WANullthrows")(
              o("WAWebFrontendMsgGetters").getAsCallLog(e),
              "[mergeCallRecords] record is not a call log record",
            );
          }),
          a = n.map(v),
          i = [],
          l = 0,
          s = [n[0].unsafe()],
          u = 1;
        u < n.length;
        u++
      )
        S(a[l], a[u])
          ? s.push(n[u].unsafe())
          : (i.push({ mergedMsgs: s }), (l = u), (s = [n[u].unsafe()]));
      return (i.push({ mergedMsgs: s }), i);
    }
    var E = 1e5,
      k = 1e4,
      I = 1e3,
      T = 100,
      D = 10,
      x = 1;
    function $(e, t) {
      var n = 0;
      (t.isCaller && (n += E), t.isBot && (n += k), t.isConnected && (n += I));
      var r = o("WAWebContactCollection").ContactCollection.get(e),
        a = (r == null ? void 0 : r.name) != null && r.name !== "";
      a
        ? (n += T)
        : r != null &&
          o("WAWebContactGetters").getNotifyName(r) != null &&
          (n += D);
      var i = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.get(
          e,
        ),
        l = (i == null ? void 0 : i.img) != null && i.img !== "";
      return (l && (n += x), n);
    }
    function P(e, t, n) {
      var r,
        o,
        a = (r = n == null ? void 0 : n.has(e.toString())) != null ? r : !1,
        i = (o = n == null ? void 0 : n.has(t.toString())) != null ? o : !1,
        l = $(e, { isCaller: !1, isConnected: a, isBot: !1 }),
        s = $(t, { isCaller: !1, isConnected: i, isBot: !1 });
      return s - l;
    }
    function N(e, t, n) {
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
              : P(
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
    function M(e) {
      var t,
        n = r("WAWebCallCollection").lastActiveCall;
      if ((n == null ? void 0 : n.userEndedCall) === !0) return !1;
      var a = (t = n == null ? void 0 : n.isGroup) != null ? t : !1,
        i = e != null ? o("WAWebMsgGetters").getCallOutcome(e) : null,
        l = a && i === o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing,
        s = (n == null ? void 0 : n.callFailedReason) != null;
      return s ? !0 : !l;
    }
    function w(e, t) {
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
    w.displayName = w.name + " [from " + i.id + "]";
    function A(e, t, n, r) {
      return (
        n === void 0 && (n = !0),
        e ? "return" : n && (t || r === !0) ? "join_here" : "join"
      );
    }
    function F(e, t) {
      return [].concat(e).sort(function (e, n) {
        var r = o("WAWebBotUtils").isMetaAiBot(e),
          a = o("WAWebBotUtils").isMetaAiBot(n);
        return r && !a ? -1 : !r && a ? 1 : P(e, n, t);
      });
    }
    function O(e) {
      var t = new Set(
          e.map(function (e) {
            return e.toString();
          }),
        ),
        n = F(e, t);
      return { sortedParticipants: n, connectedSet: t };
    }
    function B(e, t, n) {
      var r,
        a,
        i = (r = n == null ? void 0 : n.excludeSelf) != null ? r : !1,
        l = (a = n == null ? void 0 : n.excludeGuests) != null ? a : !1,
        s = e.some(function (e) {
          return e.isLid();
        }),
        u = s
          ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()
          : o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        c = o("WAWebMsgGetters").getIsSentByMe(t),
        d = c ? null : o("WAWebMsgGetters").getSender(t);
      return e
        .filter(function (e) {
          if (i && e.equals(u)) return !1;
          if (l) {
            var t = o("WAWebContactCollection").ContactCollection.get(e);
            if (t != null && W(t)) return !1;
          }
          return !0;
        })
        .sort(function (e, t) {
          if (d != null) {
            var n = e.equals(d),
              r = t.equals(d);
            if (n && !r) return -1;
            if (!n && r) return 1;
          }
          var a = e.equals(u),
            i = t.equals(u);
          if (a && !i) return -1;
          if (!a && i) return 1;
          var l = o("WAWebBotUtils").isMetaAiBot(e),
            s = o("WAWebBotUtils").isMetaAiBot(t);
          return l && !s ? -1 : !l && s ? 1 : P(e, t, null);
        });
    }
    function W(e) {
      return (
        e.externalUserState ===
        o("WAWebContactExternalUserState").ExternalUserState.GuestUser
      );
    }
    ((l.get1x1CallLidOrPnDestination = o(
      "WAWebVoipBackendCallLogTargetResolver",
    ).get1x1CallLidOrPnDestination),
      (l.getCallLogTargetDetails = o(
        "WAWebVoipBackendCallLogTargetResolver",
      ).getCallLogTargetDetails),
      (l.getIsSelfConnected = c),
      (l.getIsMissedCallOrNotConnected = d),
      (l.getCallStateText = m),
      (l.getCallOutcomeFromCallResultSyncProto = p),
      (l.getCallParticipantStateFromCallResultSyncProto = _),
      (l.getCallOutcomeFromCallResultNative = f),
      (l.getCallOutcomeFromCallLogResult = g),
      (l.getCallOutcomeFromCallState = h),
      (l.getCallSilenceReason = y),
      (l.shouldMergeCallLogRecords = R),
      (l.mergeCallRecords = L),
      (l.getParticipantSortScore = $),
      (l.sortCallParticipants = N),
      (l.shouldShowCallEndedScreen = M),
      (l.getCallResultText = w),
      (l.getJoinButtonTextType = A),
      (l.sortParticipantWidsByPriority = F),
      (l.sortConnectedParticipants = O),
      (l.sortCallParticipantWids = B));
  },
  226,
);
