__d(
  "WAWebUsernameUtils",
  ["WAWebContactCollection", "WAWebLidMigrationUtils", "WAWebUsernameTypes"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = new Uint8Array(4);
      self.crypto.getRandomValues(e);
      var t = Array.from(e, function (e) {
          return (e % 10).toString();
        }),
        n = t.join("");
      return o("WAWebUsernameTypes").asUsernameKey(n);
    }
    function s(e) {
      var t = o("WAWebContactCollection").ContactCollection.findFirst(
        function (t) {
          return t.username === e;
        },
      );
      if (!t || !t.id.isUser()) return null;
      var n = o("WAWebLidMigrationUtils").toUserLid(t.id);
      return n;
    }
    function u(e) {
      return e === "exists" || e === "key-required" || e === "already-contact";
    }
    ((l.generateUsernameKeySuggestion = e),
      (l.getLIDByUsername = s),
      (l.usernameInputStateIsValid = u));
  },
  98,
);
