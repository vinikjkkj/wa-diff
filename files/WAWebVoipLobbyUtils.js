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
      if (e.length !== 2) return null;
      var t = m(e);
      return t.length === 1 ? t[0] : null;
    }
    function m(e) {
      return e.filter(function (e) {
        return !o("WAWebUserPrefsMeUser").isMeAccount(e);
      });
    }
    function p(e, t) {
      return e.filter(function (e) {
        if (o("WAWebUserPrefsMeUser").isMeAccount(e)) return !1;
        var n = t.get(e.toString());
        return n === o("WAWebVoipWaCallEnums").CallParticipantState.Connected;
      });
    }
    function _(e, t) {
      var n = p(e, t);
      return n.length >= 1;
    }
    function f(e, t) {
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
    function g(e, t, n, r) {
      var a = o("WAWebVoipCallStateUtils").isCallConnecting(r);
      return e || a ? t : n;
    }
    function h(e, t, n, a) {
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
    ((h.displayName = h.name + " [from " + i.id + "]"),
      (l.isLobbyApplicableForCallState = c),
      (l.getSolePeerInGroupCall = d),
      (l.getParticipantsWithoutSelf = m),
      (l.getConnectedParticipantsWithoutSelf = p),
      (l.getArePeersActiveInCall = _),
      (l.getLobbyButtonDisplayProps = f),
      (l.getLobbyNegativeButtonHandler = g),
      (l.getLobbyParticipantInfoText = h));
  },
  226,
);
