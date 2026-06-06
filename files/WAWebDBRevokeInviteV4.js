__d(
  "WAWebDBRevokeInviteV4",
  [
    "WAWebApiGroupInviteV4Store",
    "WAWebBackendApi",
    "WAWebDBMsgUtils",
    "WAWebDBProcessMessage",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = e.expiration,
        n = e.from,
        r = e.groupId,
        a = e.to,
        i = await o("WAWebApiGroupInviteV4Store").revokeGroupInvites(
          n,
          a,
          r,
          t,
        ),
        l =
          (i == null
            ? void 0
            : i.map(function (e) {
                return e.id;
              })) || [],
        s = await o("WAWebDBMsgUtils").getMsgsByMsgKey(l, function (e) {
          e.inviteCodeExp = "0";
        }),
        u = [];
      for (var c of s)
        (o("WAWebBackendApi").frontendFireAndForget("expireGroupInviteV4", {
          inviteMsgId: c.id,
        }),
          u.push(
            o("WAWebDBProcessMessage").updateExistingMessages([c], c.id.remote),
          ));
      await Promise.all(u);
    }
    l.revokeGroupInviteV4 = e;
  },
  98,
);
