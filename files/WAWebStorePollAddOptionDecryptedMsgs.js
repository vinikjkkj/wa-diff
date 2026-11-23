__d(
  "WAWebStorePollAddOptionDecryptedMsgs",
  [
    "WAWebApplyPollAddOptionToParent",
    "WAWebBackendApi",
    "WAWebDBMessageSerialization",
    "WAWebSchemaMessage",
    "WAWebStoreMsgs",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      if (e.length !== 0) {
        var t = new Set(
            await o(
              "WAWebApplyPollAddOptionToParent",
            ).applyPollAddOptionsToParent(e),
          ),
          n = e.filter(function (e) {
            return !t.has(e);
          }),
          r = new Map();
        for (var a of n) {
          var i = a.parentMsg.id.remote.toString(),
            l = r.get(i);
          l != null ? l.push(a) : r.set(i, [a]);
        }
        (await Promise.all(
          Array.from(r.entries()).map(async function (e) {
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
        ),
          await o("WAWebApplyPollAddOptionToParent").removePollAddOptionMsgs(
            await s(n),
          ));
      }
    }
    async function s(e) {
      if (e.length === 0) return [];
      var t = Array.from(
          new Set(
            e.map(function (e) {
              var t = e.parentMsg;
              return t.id.toString();
            }),
          ),
        ),
        n = await o("WAWebSchemaMessage").getMessageTable().bulkGet(t),
        r = new Map();
      return (
        t.forEach(function (e, t) {
          var a = n[t];
          if (a != null) {
            var i;
            r.set(
              e,
              new Set(
                (i = o("WAWebDBMessageSerialization").messageFromDbRow(
                  a,
                ).pollOptions) == null
                  ? void 0
                  : i.map(function (e) {
                      return e.addOptionMsgKey;
                    }),
              ),
            );
          }
        }),
        e.flatMap(function (e) {
          var t = e.decryptedAddOption,
            n = e.parentMsg,
            o = r.get(n.id.toString()),
            a = t.id.toString();
          return o != null && !o.has(a) ? [a] : [];
        })
      );
    }
    l.storePollAddOptionDecryptedMsgs = e;
  },
  98,
);
