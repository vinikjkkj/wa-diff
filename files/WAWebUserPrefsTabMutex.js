__d(
  "WAWebUserPrefsTabMutex",
  [
    "WANullthrows",
    "WAWebLocalStorage",
    "WAWebPermanentStorage",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "x" + Math.round(Math.random() * 1e9);
    function s() {
      return r("WAWebUserPrefsStore").getPSIgnoringCache(
        o("WAWebUserPrefsKeys").KEYS.WHATSAPP_MUTEX,
      );
    }
    function u(t) {
      var n = t && e + ":" + t;
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").KEYS.WHATSAPP_MUTEX,
        n,
        { storage: r("WAWebPermanentStorage") },
      );
    }
    function c() {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").KEYS.WHATSAPP_MUTEX,
        null,
        { storage: r("WAWebPermanentStorage") },
      );
    }
    function d(e) {
      var t = e ? JSON.parse(e) : "";
      return t && t.toString().split(/:/).pop();
    }
    function m(t) {
      if (t.key !== o("WAWebUserPrefsKeys").KEYS.WHATSAPP_MUTEX) return !1;
      var n = t.newValue || "";
      return !n.includes(e);
    }
    function p() {
      return (s() || "").includes(e);
    }
    function _() {
      var t = { wa_tab_src: e };
      (r("WANullthrows")(r("WAWebLocalStorage")).setItem(
        o("WAWebUserPrefsKeys").KEYS.LOCAL_TAKEOVER_OK,
        JSON.stringify(t),
      ),
        r("WANullthrows")(r("WAWebLocalStorage")).removeItem(
          o("WAWebUserPrefsKeys").KEYS.LOCAL_TAKEOVER_OK,
        ));
    }
    function f(t) {
      if (t.key !== o("WAWebUserPrefsKeys").KEYS.LOCAL_TAKEOVER_OK) return !1;
      var n = t.newValue || "";
      return !n.includes(e);
    }
    function g(e) {
      r("WAWebUserPrefsStore").setTS(
        o("WAWebUserPrefsKeys").KEYS.NO_TAKEOVER,
        e,
      );
    }
    function h() {
      return !!r("WAWebUserPrefsStore").getTS(
        o("WAWebUserPrefsKeys").KEYS.NO_TAKEOVER,
      );
    }
    ((l.THIS_TAB = e),
      (l.getMutex = s),
      (l.setMutex = u),
      (l.removeMutex = c),
      (l.parseMutex = d),
      (l.mutexFilter = m),
      (l.currentTabHasMutex = p),
      (l.localTakeoverSuccess = _),
      (l.takeoverFilter = f),
      (l.setNoTakeover = g),
      (l.getNoTakeover = h));
  },
  98,
);
