__d(
  "WAWebUICustomizationStore",
  ["WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var o = r("WAWebUserPrefsStore").getUser(e);
      if (o != null) {
        var a = t(o);
        if (a != null) return a;
      }
      return n;
    }
    function s(e, t) {
      r("WAWebUserPrefsStore").setUser(e, t);
    }
    ((l.getCustomization = e), (l.saveCustomization = s));
  },
  98,
);
