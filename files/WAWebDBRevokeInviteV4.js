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
    function s(e, t, n, r) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, r, a, i) {
            var l = yield o("WAWebApiGroupInviteV4Store").revokeGroupInvites(
                t,
                r,
                a,
                i,
              ),
              s =
                (l == null
                  ? void 0
                  : l.map(function (e) {
                      return e.id;
                    })) || [],
              u = yield o("WAWebDBMsgUtils").getMsgsByMsgKey(s, function (e) {
                e.inviteCodeExp = "0";
              }),
              c = [];
            for (var d of u)
              (o("WAWebBackendApi").frontendFireAndForget(
                "expireGroupInviteV4",
                { inviteMsgId: d.id },
              ),
                c.push(
                  o("WAWebDBProcessMessage").updateExistingMessages(
                    [d],
                    d.id.remote,
                  ),
                ));
            yield (e || (e = n("Promise"))).all(c);
          },
        )),
        u.apply(this, arguments)
      );
    }
    l.revokeGroupInviteV4 = s;
  },
  98,
);
