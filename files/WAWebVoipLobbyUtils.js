__d(
  "WAWebVoipLobbyUtils",
  [
    "fbt",
    "WAWebFbtIntlList",
    "WAWebUserPrefsMeUser",
    "WAWebVoipCallStateUtils",
    "WAWebVoipConnectingStatus.react",
    "WAWebVoipWaCallEnums",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e, t) {
      return e
        ? t === o("WAWebVoipWaCallEnums").CallState.Rejoining ||
          t === o("WAWebVoipWaCallEnums").CallState.ReceivedCall ||
          t === o("WAWebVoipWaCallEnums").CallState.AcceptSent ||
          t === o("WAWebVoipWaCallEnums").CallState.ReceivedCallWithoutOffer
          ? !0
          : t === o("WAWebVoipWaCallEnums").CallState.Link
        : !1;
    }
    function d(e) {
      var t = e.callState,
        n = e.isCallLinkLobbyConnecting,
        r = e.showSurveyUI,
        o = t != null || n;
      return o && !r;
    }
    function m(e) {
      if (e.length !== 2) return null;
      var t = p(e);
      return t.length === 1 ? t[0] : null;
    }
    function p(e) {
      return e.filter(function (e) {
        return !o("WAWebUserPrefsMeUser").isMeAccount(e);
      });
    }
    function _(e, t) {
      return e.filter(function (e) {
        if (o("WAWebUserPrefsMeUser").isMeAccount(e)) return !1;
        var n = t.get(e.toString());
        return n === o("WAWebVoipWaCallEnums").CallParticipantState.Connected;
      });
    }
    function f(e, t) {
      var n = _(e, t);
      return n.length >= 1;
    }
    function g(e, t) {
      e === void 0 && (e = !1);
      var n = o("WAWebVoipCallStateUtils").isCallConnecting(t);
      return {
        positiveButton: { labelKey: "join", shouldShow: !e && !n },
        negativeButton:
          e || n
            ? {
                labelKey: "end",
                shouldShow: !0,
                showLabel: !1,
                styleType: "filled",
              }
            : { labelKey: "ignore", shouldShow: !0, styleType: "borderless" },
      };
    }
    function h(e) {
      var t = e.callState,
        n = e.isCallOutgoing,
        r = e.onEnd,
        a = e.onReject,
        i = o("WAWebVoipCallStateUtils").isCallConnecting(t);
      return n || i ? r : a;
    }
    function y(e, t, n, a) {
      if (
        (t === void 0 && (t = !1),
        o("WAWebVoipCallStateUtils").isCallConnecting(a))
      )
        return u.jsx(r("WAWebVoipConnectingStatus.react"), {});
      if (e != null) {
        var i = e.isVideoCall,
          l = i ? s._(/*BTDS*/ "Video call") : s._(/*BTDS*/ "Voice call");
        if (!t && n != null) {
          var c = s._(/*BTDS*/ "From {call_creator_name}", [
            s._param("call_creator_name", n),
          ]);
          return r("WAWebFbtIntlList")(
            [l, c],
            r("WAWebFbtIntlList").CONJUNCTIONS.NONE,
            r("WAWebFbtIntlList").DELIMITERS.BULLET,
          );
        }
        return l;
      }
      return s._(/*BTDS*/ "Group call");
    }
    ((y.displayName = y.name + " [from " + i.id + "]"),
      (l.isLobbyApplicableForCallState = c),
      (l.shouldShowCallControls = d),
      (l.getSolePeerInGroupCall = m),
      (l.getParticipantsWithoutSelf = p),
      (l.getConnectedParticipantsWithoutSelf = _),
      (l.getArePeersActiveInCall = f),
      (l.getLobbyButtonDisplayProps = g),
      (l.getLobbyNegativeButtonHandler = h),
      (l.getLobbyParticipantInfoText = y));
  },
  226,
);
