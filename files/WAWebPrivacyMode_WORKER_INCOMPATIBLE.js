__d(
  "WAWebPrivacyMode_WORKER_INCOMPATIBLE",
  ["WAWebContactCollection", "WAWebWid"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (r("WAWebWid").isUser(e)) {
        var t = o("WAWebContactCollection").ContactCollection.get(e);
        return t == null ? void 0 : t.privacyMode;
      }
    }
    l.getPrivacyModeFromModel = e;
  },
  98,
);
