__d(
  "WAWebSetContactUsernameAction",
  [
    "WAWebCmd",
    "WAWebContactCollection",
    "WAWebSetUsernameJob",
    "WAWebUserPrefsUsername",
    "WAWebUsernameCreationActionLogger",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebContactCollection").ContactCollection.getMeContact();
          if (t == null) throw r("err")("Failed to retrieve self contact");
          var n = o(
              "WAWebUsernameCreationActionLogger",
            ).UsernameCreationActionLogger.getSessionId(),
            a = yield o("WAWebSetUsernameJob").setUsernameQueryJob(e, n);
          if (a) {
            var i = e != null ? "ACTIVE" : null;
            (o("WAWebUserPrefsUsername").setUsernameState(i),
              o("WAWebCmd").Cmd.trigger("username_state_updated", i));
          }
          return a;
        })),
        s.apply(this, arguments)
      );
    }
    l.setMyUsername = e;
  },
  98,
);
