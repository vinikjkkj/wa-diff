__d(
  "WAWebSetContactUsernameAction",
  [
    "WAWebCmd",
    "WAWebContactCollection",
    "WAWebSetUsernameJob",
    "WAWebUserPrefsUsername",
    "WAWebUsernameCreationActionLogger",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = o("WAWebContactCollection").ContactCollection.getMeContact();
      if (t == null) throw r("err")("Failed to retrieve self contact");
      var n = o(
          "WAWebUsernameCreationActionLogger",
        ).UsernameCreationActionLogger.getSessionId(),
        a = await o("WAWebSetUsernameJob").setUsernameQueryJob(e, n);
      if (a) {
        var i = e != null ? "ACTIVE" : null;
        (o("WAWebUserPrefsUsername").setUsernameState(i),
          o("WAWebCmd").Cmd.trigger("username_state_updated", i));
      }
      return a;
    }
    l.setMyUsername = e;
  },
  98,
);
