__d(
  "WAWebDebugUsername",
  [
    "WAWebMexGetUsernameJob",
    "WAWebMexSetUsernameJob",
    "WAWebMexUsernameAvailability",
    "asyncToGeneratorRuntime",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          r("vulture")("AxsWtMyvYNwEQx88sMMnsmesHZg=");
          var e = yield o("WAWebMexGetUsernameJob").mexGetUsernameQueryJob();
          return e;
        })),
        s.apply(this, arguments)
      );
    }
    ((e.doc = "Get the current username and its state (ACTIVE/RESERVED)"),
      (e.paramsToExecute = []));
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          r("vulture")("_QXznNN3DNoGECf3RhYM74d-AKs=");
          var t = "debug",
            n = yield o(
              "WAWebMexUsernameAvailability",
            ).mexCheckUsernameAvailabilityQueryJob(e, t);
          return n;
        })),
        c.apply(this, arguments)
      );
    }
    u.doc =
      'Check if a username is available. Usage: usernameCheckDebug("my_username")';
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.reserved,
            n = e.sessionId,
            a = e.source,
            i = e.username;
          r("vulture")("hdO39F9GgrONCIoufldf4lcvH9w=");
          var l = yield o("WAWebMexSetUsernameJob").mexSetUsernameQueryJob({
            input: i,
            reserved: t,
            source: a,
            session_id: n,
          });
          return l;
        })),
        m.apply(this, arguments)
      );
    }
    d.doc =
      'Set/delete a username. Usage: usernameSetDebug({username: "my_username", reserved: false, source: "USER_INPUT"}) or usernameSetDebug({username: null}) to delete';
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          r("vulture")("MJ9QoqLtfWG96xpGaIA6cPcMpiY=");
          var n = yield o("WAWebMexSetUsernameJob").mexSetUsernameQueryJob({
            input: e,
            reserved: !0,
            source: t,
          });
          return n;
        })),
        _.apply(this, arguments)
      );
    }
    p.doc =
      'Reserve a username without activating it. Usage: usernameReserveDebug("my_username", "FB")';
    var f = {
      usernameGetDebug: e,
      usernameCheckDebug: u,
      usernameSetDebug: d,
      usernameReserveDebug: p,
    };
    l.default = f;
  },
  98,
);
