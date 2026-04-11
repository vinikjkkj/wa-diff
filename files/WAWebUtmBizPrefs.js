__d(
  "WAWebUtmBizPrefs",
  ["WAWebUserPrefsKeys", "WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = c(),
        a = Date.now();
      ((n[e] = babelHelpers.extends({ addedTime: a }, t)),
        r("WAWebUserPrefsStore").setUser(
          o("WAWebUserPrefsKeys").KEYS.CHAT_UTM,
          JSON.stringify(n),
        ));
    }
    function s(e) {
      var t = c();
      (delete t[e],
        r("WAWebUserPrefsStore").setUser(
          o("WAWebUserPrefsKeys").KEYS.CHAT_UTM,
          JSON.stringify(t),
        ));
    }
    function u(e) {
      var t = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.CHAT_UTM,
      );
      if (t == null) return null;
      try {
        return JSON.parse(t)[e];
      } catch (e) {
        return null;
      }
    }
    function c() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.CHAT_UTM,
      );
      if (e == null) return {};
      try {
        var t;
        return (t = JSON.parse(e)) != null ? t : {};
      } catch (e) {
        return {};
      }
    }
    function d() {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.CHAT_UTM,
        JSON.stringify({}),
      );
    }
    ((l.persistUtmtoLocalStorage = e),
      (l.removeUtmFromLocalStorage = s),
      (l.getUtmFromLocalStorage = u),
      (l.getAllUtmsFromLocalStorage = c),
      (l.clearAllUtmFromLocalStorage = d));
  },
  98,
);
