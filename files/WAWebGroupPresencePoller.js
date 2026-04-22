__d(
  "WAWebGroupPresencePoller",
  [
    "WAWebContactPresenceBridge",
    "WAWebGroupPresenceUtils",
    "WAWebPresenceCollection",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 3e4,
      s = new Map(),
      u = new Map();
    function c(e) {
      if (
        !o("WAWebGroupPresenceUtils").isLargeGroupPresenceEnabled() ||
        !o("WAWebGroupPresenceUtils").isGroupEligibleForPresence(e)
      )
        return !1;
      var t = e.groupMetadata;
      if (t == null) return !1;
      var n = t.participants.length;
      return (
        n > o("WAWebGroupPresenceUtils").getSmallGroupPresenceThreshold() &&
        n <= o("WAWebGroupPresenceUtils").WEB_LARGE_MAX
      );
    }
    function d(e) {
      o("WAWebContactPresenceBridge").subscribePresence(e, null);
    }
    function m(e, t) {
      var n = function () {
        e.chatActive === !1 && _(t);
      };
      (e.on("change:chatActive", n),
        u.set(t, function () {
          e.off("change:chatActive", n);
        }));
    }
    function p(t) {
      if (c(t)) {
        var n = t.id.toString();
        if (!s.has(n)) {
          d(n);
          var r = self.setInterval(function () {
            return d(n);
          }, e);
          s.set(n, r);
          var a = o("WAWebPresenceCollection").PresenceCollection.get(n);
          a != null && m(a, n);
        }
      }
    }
    function _(e) {
      var t = e,
        n = s.get(t);
      n != null && (self.clearInterval(n), s.delete(t));
      var r = u.get(t);
      r != null && (r(), u.delete(t));
    }
    function f() {
      for (var e of s.values()) self.clearInterval(e);
      s.clear();
      for (var t of u.values()) t();
      u.clear();
    }
    function g(e) {
      return s.has(e);
    }
    ((l.LARGE_GROUP_POLL_INTERVAL_MS = e),
      (l.startLargeGroupPresencePoll = p),
      (l.stopLargeGroupPresencePoll = _),
      (l.stopAllLargeGroupPresencePolls = f),
      (l.hasActivePollForTesting = g));
  },
  98,
);
