__d(
  "WAWebBlockedParticipantWarningAction",
  [
    "WAWebChatGetters",
    "WAWebContactCollection",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsStore",
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (!o("WAWebChatGetters").getIsGroup(e) || e.groupMetadata == null)
        return [];
      var t = e.groupMetadata.participants.toArray(),
        n = [];
      for (var r of t)
        if (!o("WAWebUserPrefsMeUser").isMeAccount(r.id)) {
          var a = o("WAWebContactCollection").ContactCollection.get(r.id);
          a != null && a.isContactBlocked && n.push(a);
        }
      return n;
    }
    var s = "blocked_participant_warning_acknowledged";
    function u() {
      var e = r("WAWebUserPrefsStore").getUser(s);
      if (e != null && typeof e == "object" && !Array.isArray(e)) {
        var t = {};
        for (var n of Object.keys(e)) {
          var o = e[n];
          typeof o == "string"
            ? (t[n] = o)
            : o instanceof r("WAWebWid")
              ? (t[n] = o.toString())
              : o === !0 && (t[n] = "");
        }
        return t;
      }
      return {};
    }
    function c(e) {
      return e
        .map(function (e) {
          return e.id.toString();
        })
        .sort()
        .join(",");
    }
    function d(e, t) {
      var n = u(),
        r = n[e.toString()];
      return r == null ? !1 : r === c(t);
    }
    function m(e, t) {
      var n = u();
      ((n[e.toString()] = c(t)), r("WAWebUserPrefsStore").setUser(s, n));
    }
    function p(e) {
      var t = u(),
        n = e.toString();
      t[n] != null && (delete t[n], r("WAWebUserPrefsStore").setUser(s, t));
    }
    ((l.getBlockedParticipantsInGroup = e),
      (l.hasAcknowledgedWarning = d),
      (l.markWarningAcknowledged = m),
      (l.clearAcknowledgedWarning = p));
  },
  98,
);
