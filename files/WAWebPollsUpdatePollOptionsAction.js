__d(
  "WAWebPollsUpdatePollOptionsAction",
  ["WAWebMsgCollection", "WAWebNoop"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      await Promise.all(
        e.map(async function (e) {
          var t,
            n,
            a = e.parentMsgKey,
            i = e.pollOptions;
          (await ((t =
            o("WAWebMsgCollection").MsgCollection.pendingAdd[a.remote]) == null
            ? void 0
            : t.catch(r("WAWebNoop"))),
            (n = o("WAWebMsgCollection").MsgCollection.get(a)) == null ||
              n.set({ pollOptions: i }));
        }),
      );
    }
    l.updatePollOptions = e;
  },
  98,
);
