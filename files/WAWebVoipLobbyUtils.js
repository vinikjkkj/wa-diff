__d(
  "WAWebVoipLobbyUtils",
  [
    "fbt",
    "WAWebFbtIntlList",
    "WAWebUserPrefsMeUser",
    "WAWebVoipCallStateUtils",
    "WAWebVoipWaCallEnums",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t) {
      return e
        ? t === o("WAWebVoipWaCallEnums").CallState.Rejoining ||
          t === o("WAWebVoipWaCallEnums").CallState.ReceivedCall ||
          t === o("WAWebVoipWaCallEnums").CallState.AcceptSent ||
          t === o("WAWebVoipWaCallEnums").CallState.ReceivedCallWithoutOffer
          ? !0
          : t === o("WAWebVoipWaCallEnums").CallState.Link
        : !1;
    }
    function u(e) {
      if (e.length !== 2) return null;
      var t = c(e);
      return t.length === 1 ? t[0] : null;
    }
    function c(e) {
      return e.filter(function (e) {
        return !o("WAWebUserPrefsMeUser").isMeAccount(e);
      });
    }
    function d(e, t) {
      return e.filter(function (e) {
        if (o("WAWebUserPrefsMeUser").isMeAccount(e)) return !1;
        var n = t.get(e.toString());
        return n === o("WAWebVoipWaCallEnums").CallParticipantState.Connected;
      });
    }
    function m(e, t) {
      var n = d(e, t);
      return n.length >= 1;
    }
    function p(e, t) {
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
    function _(e, t, n, r) {
      var a = o("WAWebVoipCallStateUtils").isCallConnecting(r);
      return e || a ? t : n;
    }
    function f(e, t, n, a) {
      if (
        (t === void 0 && (t = !1),
        o("WAWebVoipCallStateUtils").isCallConnecting(a))
      )
        return s._(/*BTDS*/ "Connecting...");
      if (e != null) {
        var i = e.isVideoCall,
          l = i ? s._(/*BTDS*/ "Video call") : s._(/*BTDS*/ "Voice call");
        if (!t && n != null) {
          var u = s._(/*BTDS*/ "From {call_creator_name}", [
            s._param("call_creator_name", n),
          ]);
          return r("WAWebFbtIntlList")(
            [l, u],
            r("WAWebFbtIntlList").CONJUNCTIONS.NONE,
            r("WAWebFbtIntlList").DELIMITERS.BULLET,
          );
        }
        return l;
      }
      return s._(/*BTDS*/ "Group call");
    }
    ((l.isLobbyApplicableForCallState = e),
      (l.getSolePeerInGroupCall = u),
      (l.getParticipantsWithoutSelf = c),
      (l.getConnectedParticipantsWithoutSelf = d),
      (l.getArePeersActiveInCall = m),
      (l.getLobbyButtonDisplayProps = p),
      (l.getLobbyNegativeButtonHandler = _),
      (l.getLobbyParticipantInfoText = f));
  },
  226,
);
