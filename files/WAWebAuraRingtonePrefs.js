__d(
  "WAWebAuraRingtonePrefs",
  ["WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "AuraSelectedRingtoneId",
      s = "AuraChatRingtone_",
      u = "__default__",
      c = "__none__";
    function d() {
      return typeof r("WAWebUserPrefsStore").getUser(e) == "string";
    }
    function m() {
      var t = r("WAWebUserPrefsStore").getUser(e);
      return typeof t == "string" ? t : u;
    }
    function p(t) {
      r("WAWebUserPrefsStore").setUser(e, t);
    }
    function _() {
      r("WAWebUserPrefsStore").setUser(e, u);
    }
    function f(e) {
      var t = s + e.toString(),
        n = r("WAWebUserPrefsStore").getUser(t);
      return typeof n == "string" ? n : null;
    }
    function g(e, t) {
      r("WAWebUserPrefsStore").setUser(s + e.toString(), t);
    }
    ((l.DEFAULT_RINGTONE_ID = u),
      (l.NONE_RINGTONE_ID = c),
      (l.hasExplicitRingtoneSelection = d),
      (l.getSelectedRingtoneId = m),
      (l.saveSelectedRingtoneId = p),
      (l.resetToDefaultRingtone = _),
      (l.getChatRingtoneId = f),
      (l.saveChatRingtoneId = g));
  },
  98,
);
