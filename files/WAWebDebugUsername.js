__d(
  "WAWebDebugUsername",
  [
    "WAWebMexGetUsernameJob",
    "WAWebMexSetUsernameJob",
    "WAWebMexUsernameAvailability",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
            r = e.source,
            a = e.username,
            i = yield o("WAWebMexSetUsernameJob").mexSetUsernameQueryJob({
              input: a,
              reserved: t,
              source: r,
              session_id: n,
            });
          return i;
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
