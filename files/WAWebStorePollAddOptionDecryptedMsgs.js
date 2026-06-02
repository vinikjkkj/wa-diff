__d(
  "WAWebStorePollAddOptionDecryptedMsgs",
  [
    "WAWebApplyPollAddOptionToParent",
    "WAWebBackendApi",
    "WAWebStoreMsgs",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      if (e.length !== 0) {
        await o("WAWebApplyPollAddOptionToParent").applyPollAddOptionsToParent(
          e,
        );
        var t = new Map();
        for (var n of e) {
          var r = n.parentMsg.id.remote.toString(),
            a = t.get(r);
          a != null ? a.push(n) : t.set(r, [n]);
        }
        await Promise.all(
          Array.from(t.entries()).map(async function (e) {
            var t = e[0],
              n = e[1],
              r = o("WAWebWidFactory").createWid(t),
              a = n.map(function (e) {
                return e.decryptedAddOption;
              });
            (await o("WAWebBackendApi").frontendSendAndReceive(
              "processMultipleMessages",
              {
                chatId: r,
                msgObjs: a,
                meta: { add: "after", isHistory: !1 },
                processMessagesOrigin: "pollAddOptionMessage",
              },
            ),
              await o("WAWebStoreMsgs").storeMsgs(a));
          }),
        );
      }
    }
    l.storePollAddOptionDecryptedMsgs = e;
  },
  98,
);
