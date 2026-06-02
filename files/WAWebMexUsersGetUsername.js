__d(
  "WAWebMexUsersGetUsername",
  ["WAWebMexUsync"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = await o("WAWebMexUsync").mexUsyncQuery({
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
            : { username: (t = e.username_info) == null ? void 0 : t.username };
        });
    }
    async function s(t) {
      var n = await e([t]);
      return n == null ? void 0 : n[0].username;
    }
    l.getMexUserUsername = s;
  },
  98,
);
