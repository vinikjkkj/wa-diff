__d(
  "WAWebSendKeyDistributionMsgAction",
  [
    "WAWebGroupMetadataCollection",
    "WAWebMsgKey",
    "WAWebSendMsgJob",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      if (!e.isGroup())
        return Promise.reject(
          r("err")(
            "[messaging] sendKeyDistributionMsg: only group chats are supported`",
          ),
        );
      var t = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        n = new (r("WAWebMsgKey"))({
          from: t,
          to: e,
          id: await r("WAWebMsgKey").newId(),
          participant: o("WAWebWidFactory").asUserWidOrThrow(t),
          selfDir: "out",
        });
      return (
        await r("WAWebGroupMetadataCollection").find(e),
        o("WAWebSendMsgJob").encryptAndSendKeyDistributionMsg(n)
      );
    }
    l.sendKeyDistributionMsg = e;
  },
  98,
);
