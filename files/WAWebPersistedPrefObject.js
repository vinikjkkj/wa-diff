__d(
  "WAWebPersistedPrefObject",
  ["WALogger", "WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, n, a, i) {
      var l = r("WAWebUserPrefsStore").getUser(t, i);
      if (l == null) return null;
      if (typeof l == "object") {
        var s = n(l);
        if (s != null) return s;
      }
      return (
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "WAWebPersistedPrefObject: malformed value for ",
                "; resetting",
              ])),
            t,
          )
          .sendLogs(a),
        r("WAWebUserPrefsStore").setUser(t, null),
        null
      );
    }
    function u(e, t) {
      r("WAWebUserPrefsStore").setUser(e, t);
    }
    ((l.readPersistedPrefObject = s), (l.writePersistedPrefObject = u));
  },
  98,
);
