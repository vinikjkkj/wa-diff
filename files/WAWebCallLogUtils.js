__d(
  "WAWebCallLogUtils",
  [
    "fbt",
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
    "WAWebProfilePicThumbGetters",
    "WAWebUserPrefsMeUser",
    "WAWebUserUtils",
    "WAWebVoipBackendCallLogTargetResolver",
    "WAWebVoipConnectingStatus.react",
    "WAWebVoipTransferredCallRegistry",
    "WAWebVoipWaCallEnums",
    "WAWebWidFactory",
    "justknobx",
    "nullthrows",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      return e == null || e.length === 0
        ? !1
        : e.some(function (e) {
            var t = e.outcome,
              n = e.participant;
            return (
              t === o("WAWebVoipWaCallEnums").CallParticipantState.Connected &&
              o("WAWebUserUtils").isMeAccount(n)
            );
          });
    }
    function d(e) {
      return (
        !o("WAWebMsgGetters").getIsGroupCall(e) &&
        o("WAWebMsgGetters").getIsCallLink(e) !== !0
      );
    }
    function m(e) {
      return (
        e.isUser() ? o("WAWebWidFactory").asUserWidOrThrow(e) : e
      ).toString();
    }
    function p(e, t, n, r, a) {
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
    function _(e) {
      var t = o("WAWebMsgGetters").getCallOutcome(e),
        n = o("WAWebMsgGetters").getFinalCallOutcome(e),
        r =
          t === o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing &&
          n !== o("WAWebCallLogMsgData.flow").CallOutcome.Completed;
      return (
        !r &&
        p(
          o("WAWebMsgGetters").getIsMissedCall(e),
          c(o("WAWebMsgGetters").getCallParticipants(e)),
          o("WAWebMsgGetters").getIsSentByMe(e),
          t,
          n,
        )
      );
    }
    function f(e, t) {
      var n;
      return (e === o("WAWebVoipWaCallEnums").CallState.Calling ||
        e === o("WAWebVoipWaCallEnums").CallState.PreacceptReceived) &&
        o("WAWebVoipTransferredCallRegistry").isTransferredCallLive(
          (n = r("WAWebCallCollection").activeCall) == null ? void 0 : n.id,
        )
        ? u.jsx(r("WAWebVoipConnectingStatus.react"), {})
        : e === o("WAWebVoipWaCallEnums").CallState.Calling
          ? s._(/*BTDS*/ "")
          : e === o("WAWebVoipWaCallEnums").CallState.PreacceptReceived
            ? s._(/*BTDS*/ "")
            : e === o("WAWebVoipWaCallEnums").CallState.ReceivedCall ||
                e ===
                  o("WAWebVoipWaCallEnums").CallState.ReceivedCallWithoutOffer
              ? t != null && t.isVideoCall
                ? s._(/*BTDS*/ "")
                : s._(/*BTDS*/ "")
              : e === o("WAWebVoipWaCallEnums").CallState.Screening
                ? (t == null ? void 0 : t.id.fromMe) === !0
                  ? s._(/*BTDS*/ "")
                  : s._(/*BTDS*/ "")
                : e === o("WAWebVoipWaCallEnums").CallState.AcceptSent ||
                    e === o("WAWebVoipWaCallEnums").CallState.AcceptReceived
                  ? u.jsx(r("WAWebVoipConnectingStatus.react"), {})
                  : e === o("WAWebVoipWaCallEnums").CallState.CallActive
                    ? u.jsx(r("WAWebCallTimer.react"), { callState: e })
                    : e ===
                          o("WAWebVoipWaCallEnums").CallState.ConnectedLonely ||
                        e === o("WAWebVoipWaCallEnums").CallState.Rejoining
                      ? s._(/*BTDS*/ "")
                      : e == null
                        ? s._(/*BTDS*/ "")
                        : e != null
                          ? o("WAWebVoipWaCallEnums").CallState.getName(e)
                          : "unknown";
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
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
    function h(e) {
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
    function y(e, t) {
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
        case o("WAWebVoipWaCallEnums").CallLogResult.ScreenedElsewhere:
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
    function C(e) {
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
        case o("WAWebVoipWaCallEnums").CallState.Screening:
          return o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing;
      }
    }
    function b(e) {
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
    function v(e, t) {
      return e != null && t != null && e.isSameAccountAndAddressingMode(t);
    }
    function S(e, t) {
      return e.length !== t.length
        ? !1
        : e.every(function (e) {
            return t.some(function (t) {
              return v(e, t);
            });
          });
    }
    function R(e) {
      var t,
        n,
        r = e.unsafe();
      return {
        isCallLink:
          (t = o("WAWebMsgGetters").getIsCallLink(r)) != null ? t : !1,
        sender: o("WAWebMsgGetters").getSender(r),
        to: o("WAWebMsgGetters").getTo(r),
        isVideoCall: o("WAWebMsgGetters").getIsVideoCall(r),
        isSentByMe: o("WAWebMsgGetters").getIsSentByMe(r),
        isGroupCall: o("WAWebMsgGetters").getIsGroupCall(r),
        isMissedCall: o("WAWebMsgGetters").getIsMissedCall(r),
        isCallSilenced: o("WAWebMsgGetters").getIsCallSilenced(r),
        t: o("WAWebMsgGetters").getT(r),
        participantWids:
          (n = e.callParticipants) == null
            ? void 0
            : n.map(function (e) {
                return e.participant;
              }),
      };
    }
    function L(e, t) {
      if (
        e.isCallLink ||
        t.isCallLink ||
        !v(e.sender, t.sender) ||
        !v(e.to, t.to)
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
        S(e.participantWids, t.participantWids);
      return a;
    }
    function E(e, t) {
      return L(R(e), R(t));
    }
    function k(e) {
      if (e.length === 0) return [];
      var t = e.filter(function (e) {
        return (
          e.callOutcome !== o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing
        );
      });
      if (t.length === 0) return [];
      for (
        var n = t.map(function (e) {
            return r("nullthrows")(
              o("WAWebFrontendMsgGetters").getAsCallLog(e),
              "[mergeCallRecords] record is not a call log record",
            );
          }),
          a = n.map(R),
          i = [],
          l = 0,
          s = [n[0].unsafe()],
          u = 1;
        u < n.length;
        u++
      )
        L(a[l], a[u])
          ? s.push(n[u].unsafe())
          : (i.push({ mergedMsgs: s }), (l = u), (s = [n[u].unsafe()]));
      return (i.push({ mergedMsgs: s }), i);
    }
    var I = 1e5,
      T = 1e4,
      D = 1e3,
      x = 100,
      $ = 10,
      P = 1;
    function N(e, t) {
      var n = 0;
      (t.isCaller && (n += I), t.isBot && (n += T), t.isConnected && (n += D));
      var r = o("WAWebContactCollection").ContactCollection.get(e),
        a = (r == null ? void 0 : r.name) != null && r.name !== "";
      a
        ? (n += x)
        : r != null &&
          o("WAWebContactGetters").getNotifyName(r) != null &&
          (n += $);
      var i = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.get(
          e,
        ),
        l = o("WAWebProfilePicThumbGetters").getMaybeImg(i),
        s = l != null && l !== "";
      return (s && (n += P), n);
    }
    function M(e, t, n) {
      var r,
        o,
        a = (r = n == null ? void 0 : n.has(e.toString())) != null ? r : !1,
        i = (o = n == null ? void 0 : n.has(t.toString())) != null ? o : !1,
        l = N(e, { isCaller: !1, isConnected: a, isBot: !1 }),
        s = N(t, { isCaller: !1, isConnected: i, isBot: !1 });
      return s - l;
    }
    function w(e, t, n) {
      var r,
        a = (r = n == null ? void 0 : n.excludeSelf) != null ? r : !1,
        i = e.some(function (e) {
          return e.participant.isLid();
        }),
        l = i
          ? o("WAWebUserUtils").getMeLidUserOrThrow()
          : o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
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
              : M(
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
    function A(e) {
      var t,
        n = r("WAWebCallCollection").lastActiveCall;
      if ((n == null ? void 0 : n.userEndedCall) === !0) return !1;
      var a = (t = n == null ? void 0 : n.isGroup) != null ? t : !1,
        i = e != null ? o("WAWebMsgGetters").getCallOutcome(e) : null,
        l = a && i === o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing,
        s = (n == null ? void 0 : n.callFailedReason) != null;
      return s ? !0 : !l;
    }
    function F(e, t) {
      return (
        t === void 0 && (t = !1),
        e === o("WAWebVoipWaCallEnums").CallLogResult.Connected
          ? s._(/*BTDS*/ "")
          : e === o("WAWebVoipWaCallEnums").CallLogResult.Canceled ||
              e === o("WAWebVoipWaCallEnums").CallLogResult.Missed ||
              e === o("WAWebVoipWaCallEnums").CallLogResult.Rejected
            ? t
              ? s._(/*BTDS*/ "")
              : s._(/*BTDS*/ "")
            : e === o("WAWebVoipWaCallEnums").CallLogResult.AcceptedElsewhere
              ? s._(/*BTDS*/ "")
              : e === o("WAWebVoipWaCallEnums").CallLogResult.ScreenedElsewhere
                ? s._(/*BTDS*/ "")
                : e === o("WAWebVoipWaCallEnums").CallLogResult.Failed
                  ? r("justknobx")._("8427")
                    ? s._(/*BTDS*/ "")
                    : s._(/*BTDS*/ "")
                  : e ===
                        o("WAWebVoipWaCallEnums").CallLogResult
                          .ConnectedLonely ||
                      e ===
                        o("WAWebVoipWaCallEnums").CallLogResult.Unavailable ||
                      e === o("WAWebVoipWaCallEnums").CallLogResult.Invalid ||
                      e === null ||
                      e === void 0
                    ? s._(/*BTDS*/ "")
                    : (function () {
                        throw Error(
                          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                            e,
                        );
                      })()
      );
    }
    F.displayName = F.name + " [from " + i.id + "]";
    function O(e, t, n, r) {
      return (
        n === void 0 && (n = !0),
        e ? "return" : n && (t || r === !0) ? "join_here" : "join"
      );
    }
    function B(e, t) {
      return [].concat(e).sort(function (e, n) {
        var r = o("WAWebBotUtils").isMetaAiBot(e),
          a = o("WAWebBotUtils").isMetaAiBot(n);
        return r && !a ? -1 : !r && a ? 1 : M(e, n, t);
      });
    }
    function W(e) {
      var t = new Set(
          e.map(function (e) {
            return e.toString();
          }),
        ),
        n = B(e, t);
      return { sortedParticipants: n, connectedSet: t };
    }
    function q(e, t, n) {
      var r,
        a,
        i = (r = n == null ? void 0 : n.excludeSelf) != null ? r : !1,
        l = (a = n == null ? void 0 : n.excludeGuests) != null ? a : !1,
        s = e.some(function (e) {
          return e.isLid();
        }),
        u = s
          ? o("WAWebUserUtils").getMeLidUserOrThrow()
          : o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
        c = o("WAWebMsgGetters").getIsSentByMe(t),
        d = c ? null : o("WAWebMsgGetters").getSender(t);
      return e
        .filter(function (e) {
          if (i && e.equals(u)) return !1;
          if (l) {
            var t = o("WAWebContactCollection").ContactCollection.get(e);
            if (t != null && U(t)) return !1;
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
          return l && !s ? -1 : !l && s ? 1 : M(e, t, null);
        });
    }
    function U(e) {
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
      (l.getIsOneToOneCallLog = d),
      (l.getCallParticipantKey = m),
      (l.getIsMissedCallOrNotConnected = p),
      (l.getIsCallLogOutcomeMissed = _),
      (l.getCallStateText = f),
      (l.getCallOutcomeFromCallResultSyncProto = g),
      (l.getCallParticipantStateFromCallResultSyncProto = h),
      (l.getCallOutcomeFromCallLogResult = y),
      (l.getCallOutcomeFromCallState = C),
      (l.getCallSilenceReason = b),
      (l.shouldMergeCallLogRecords = E),
      (l.mergeCallRecords = k),
      (l.getParticipantSortScore = N),
      (l.sortCallParticipants = w),
      (l.shouldShowCallEndedScreen = A),
      (l.getCallResultText = F),
      (l.getJoinButtonTextType = O),
      (l.sortParticipantWidsByPriority = B),
      (l.sortConnectedParticipants = W),
      (l.sortCallParticipantWids = q));
  },
  226,
);
