__d(
  "WAWebOutgoingGroupCallUtils",
  [
    "WAWebCallCollection",
    "WAWebCallLogUtils",
    "WAWebParticipantListUtils",
    "WAWebVoipLobbyUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        a = r("WAWebCallCollection").activeCall,
        i = (n = a == null ? void 0 : a.isGroup) != null ? n : !1,
        l = i && (a == null ? void 0 : a.groupJid) == null;
      if (!e || !l) return null;
      var s = o("WAWebVoipLobbyUtils").getParticipantsWithoutSelf(t);
      return s.length === 0 ? null : s;
    }
    function s() {
      var e = r("WAWebCallCollection").activeCall;
      return (
        (e == null ? void 0 : e.isGroup) === !0 &&
        (e == null ? void 0 : e.groupJid) == null
      );
    }
    function u(e) {
      if (!s()) return null;
      var t = o("WAWebVoipLobbyUtils").getParticipantsWithoutSelf(e);
      return t.length === 0 ? null : t;
    }
    function c(e) {
      var t = u(e);
      if (!(t == null || t.length === 0)) {
        var n = o("WAWebCallLogUtils").sortParticipantWidsByPriority(t, null);
        return o(
          "WAWebParticipantListUtils",
        ).formatParticipantWidsPreserveOrder(n, !0);
      }
    }
    function d(t, n) {
      var r = e(t, n);
      if (!(r == null || r.length === 0)) {
        var a = o("WAWebCallLogUtils").sortParticipantWidsByPriority(r, null);
        return o(
          "WAWebParticipantListUtils",
        ).formatParticipantWidsPreserveOrder(a, !0);
      }
    }
    ((l.getOutgoingGroupCallParticipants = e),
      (l.isAdHocGroupCall = s),
      (l.getAdHocGroupCallParticipants = u),
      (l.getAdHocGroupCallNameOverride = c),
      (l.getOutgoingGroupCallNameOverride = d));
  },
  98,
);
