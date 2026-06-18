__d(
  "WAWebMexUsersGetUsername",
  [
    "WAWebABProps",
    "WAWebApiContactUsernameFields",
    "WAWebMexUsync",
    "WAWebUsernameTypes",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t =
              o("WAWebABProps").getABPropConfigValue(
                "username_antiscraping_send_cached_un",
              ) === !0
                ? yield o(
                    "WAWebApiContactUsernameFields",
                  ).bulkGetContactToUsernameInfoMap([].concat(e))
                : null,
            n = e.map(function (e) {
              var n,
                r = o("WAWebUsernameTypes").serializeMaybeUsername(
                  t == null || (n = t.get(e.toJid())) == null
                    ? void 0
                    : n.username,
                );
              return babelHelpers.extends(
                { jid: e.toJid() },
                r != null ? { client_known_username: r } : null,
              );
            }),
            r = yield o("WAWebMexUsync").mexUsyncQuery({
              users: n,
              telemetry: { context: "INTERACTIVE" },
              fetch: { username: !0 },
            }),
            a = r.response;
          if (a != null)
            return a.map(function (e) {
              var t;
              return e.username_info == null
                ? { error: !0, username: null }
                : {
                    username: o("WAWebUsernameTypes").asMaybeUsername(
                      (t = e.username_info) == null ? void 0 : t.username,
                    ),
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
