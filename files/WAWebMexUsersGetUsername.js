__d(
  "WAWebMexUsersGetUsername",
  ["WAWebMexUsync", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebMexUsync").mexUsyncQuery({
              users: e.map(function (e) {
                return { jid: e.toJid() };
              }),
              telemetry: { context: "INTERACTIVE" },
              fetch: { username: !0 },
            }),
            n = t.response;
          if (n != null)
            return n.map(function (e) {
              var t;
              return e.username_info == null
                ? { error: !0, username: null }
                : {
                    username:
                      (t = e.username_info) == null ? void 0 : t.username,
                  };
            });
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = yield e([t]);
          return n == null ? void 0 : n[0].username;
        })),
        c.apply(this, arguments)
      );
    }
    l.getMexUserUsername = u;
  },
  98,
);
