__d(
  "WAWebDebugUsername",
  [
    "WAWebMexGetUsernameJob",
    "WAWebMexSetUsernameJob",
    "WAWebMexUsernameAvailability",
  ],
  function (t, n, r, o, a, i, l) {
    async function e() {
      var e = await o("WAWebMexGetUsernameJob").mexGetUsernameQueryJob();
      return e;
    }
    ((e.doc = "Get the current username and its state (ACTIVE/RESERVED)"),
      (e.paramsToExecute = []));
    async function s(e) {
      var t = "debug",
        n = await o(
          "WAWebMexUsernameAvailability",
        ).mexCheckUsernameAvailabilityQueryJob(e, t);
      return n;
    }
    s.doc =
      'Check if a username is available. Usage: usernameCheckDebug("my_username")';
    async function u(e, t, n, r) {
      var a = await o("WAWebMexSetUsernameJob").mexSetUsernameQueryJob({
        input: e,
        reserved: t,
        source: n,
        session_id: r,
      });
      return a;
    }
    u.doc =
      'Set/delete a username. Usage: usernameSetDebug("my_username", false, "USER_INPUT") or usernameSetDebug(null) to delete';
    async function c(e, t) {
      var n = await o("WAWebMexSetUsernameJob").mexSetUsernameQueryJob({
        input: e,
        reserved: !0,
        source: t,
      });
      return n;
    }
    c.doc =
      'Reserve a username without activating it. Usage: usernameReserveDebug("my_username", "FB")';
    var d = {
      usernameGetDebug: e,
      usernameCheckDebug: s,
      usernameSetDebug: u,
      usernameReserveDebug: c,
    };
    l.default = d;
  },
  98,
);
