__d(
  "WAWebDBRevokeInviteV4",
  [
    "Promise",
    "WAWebApiGroupInviteV4Store",
    "WAWebBackendApi",
    "WAWebDBMsgUtils",
    "WAWebDBProcessMessage",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = t.expiration,
            a = t.from,
            i = t.groupId,
            l = t.to,
            s = yield o("WAWebApiGroupInviteV4Store").revokeGroupInvites(
              a,
              l,
              i,
              r,
            ),
            u =
              (s == null
                ? void 0
                : s.map(function (e) {
                    return e.id;
                  })) || [],
            c = yield o("WAWebDBMsgUtils").getMsgsByMsgKey(u, function (e) {
              e.inviteCodeExp = "0";
            }),
            d = [];
          for (var m of c)
            (o("WAWebBackendApi").frontendFireAndForget("expireGroupInviteV4", {
              inviteMsgId: m.id,
            }),
              d.push(
                o("WAWebDBProcessMessage").updateExistingMessages(
                  [m],
                  m.id.remote,
                ),
              ));
          yield (e || (e = n("Promise"))).all(d);
        })),
        u.apply(this, arguments)
      );
    }
    l.revokeGroupInviteV4 = s;
  },
  98,
);
