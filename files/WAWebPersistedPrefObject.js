__d(
  "WAWebPersistedPrefObject",
  ["WALogger", "WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, n, a) {
      var i = r("WAWebUserPrefsStore").getUser(t);
      if (i == null) return null;
      if (typeof i == "object") {
        var l = n(i);
        if (l != null) return l;
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
