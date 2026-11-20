__d(
  "WAWebContactsAndGroupsTodoPanelPref",
  ["WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    var e = "WAContactsAndGroupsTodoPanelOpen",
      s = 2500;
    function u() {
      var t = r("WAWebUserPrefsStore").getUser(e);
      return typeof t == "boolean" ? t : null;
    }
    function c(t) {
      r("WAWebUserPrefsStore").setUser(e, t);
    }
    function d() {
      r("WAWebUserPrefsStore").setUser(e, null);
    }
    ((l.TODO_CAUGHT_UP_MS = s),
      (l.getTodoPanelOpenPref = u),
      (l.saveTodoPanelOpenPref = c),
      (l.clearTodoPanelOpenPref = d));
  },
  98,
);
