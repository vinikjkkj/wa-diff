__d(
  "WAWebAuraRingtonePrefs",
  ["WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "AuraSelectedRingtoneId",
      s = "AuraChatRingtone_",
      u = "AuraRingtonePackVersion",
      c = "__default__",
      d = "__none__";
    function m() {
      return typeof r("WAWebUserPrefsStore").getUser(e) == "string";
    }
    function p() {
      var t = r("WAWebUserPrefsStore").getUser(e);
      return typeof t == "string" ? t : c;
    }
    function _(t) {
      r("WAWebUserPrefsStore").setUser(e, t);
    }
    function f() {
      r("WAWebUserPrefsStore").setUser(e, c);
    }
    function g(e) {
      var t = s + e.toString(),
        n = r("WAWebUserPrefsStore").getUser(t);
      return typeof n == "string" ? n : null;
    }
    function h(e, t) {
      r("WAWebUserPrefsStore").setUser(s + e.toString(), t);
    }
    function y() {
      var e = r("WAWebUserPrefsStore").getUser(u);
      return typeof e == "string" ? e : null;
    }
    function C(e) {
      r("WAWebUserPrefsStore").setUser(u, String(e));
    }
    function b() {
      r("WAWebUserPrefsStore").setUser(u, null);
    }
    ((l.DEFAULT_RINGTONE_ID = c),
      (l.NONE_RINGTONE_ID = d),
      (l.hasExplicitRingtoneSelection = m),
      (l.getSelectedRingtoneId = p),
      (l.saveSelectedRingtoneId = _),
      (l.resetToDefaultRingtone = f),
      (l.getChatRingtoneId = g),
      (l.saveChatRingtoneId = h),
      (l.getStoredPackVersion = y),
      (l.savePackVersion = C),
      (l.clearPackVersion = b));
  },
  98,
);
