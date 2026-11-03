__d(
  "WAWebDebugUsername",
  [
    "WAWebMexGetUsernameJob",
    "WAWebMexSetUsernameJob",
    "WAWebMexUsernameAvailability",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    async function e() {
      r("vulture")("AxsWtMyvYNwEQx88sMMnsmesHZg=");
      var e = await o("WAWebMexGetUsernameJob").mexGetUsernameQueryJob();
      return e;
    }
    ((e.doc = "Get the current username and its state (ACTIVE/RESERVED)"),
      (e.paramsToExecute = []));
    async function s(e) {
      r("vulture")("_QXznNN3DNoGECf3RhYM74d-AKs=");
      var t = "debug",
        n = await o(
          "WAWebMexUsernameAvailability",
        ).mexCheckUsernameAvailabilityQueryJob(e, t);
      return n;
    }
    s.doc =
      'Check if a username is available. Usage: usernameCheckDebug("my_username")';
    async function u(e) {
      var t = e.reserved,
        n = e.sessionId,
        a = e.source,
        i = e.username;
      r("vulture")("hdO39F9GgrONCIoufldf4lcvH9w=");
      var l = await o("WAWebMexSetUsernameJob").mexSetUsernameQueryJob({
        input: i,
        reserved: t,
        source: a,
        session_id: n,
      });
      return l;
    }
    u.doc =
      'Set/delete a username. Usage: usernameSetDebug({username: "my_username", reserved: false, source: "USER_INPUT"}) or usernameSetDebug({username: null}) to delete';
    async function c(e, t) {
      r("vulture")("MJ9QoqLtfWG96xpGaIA6cPcMpiY=");
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
