__d(
  "WAWebMessageEditAddonMessageProcessor",
  [
    "WAWebAddonCreateMsgProcessor",
    "WAWebDBProcessEditProtocolMsgs",
    "WAWebMessageEditGatingUtils",
    "WAWebProcessEncryptedMessageEditMsgs",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebAddonCreateMsgProcessor").createAddonMsgProcessor({
        isEnabled: function () {
          return o(
            "WAWebMessageEditGatingUtils",
          ).isMessageEditToMessageSecretReceiverEnabled();
        },
        convert: {
          fromHistorySyncMsg: function () {
            return Promise.resolve([]);
          },
        },
        updateCollection: async function () {},
        beforeUpsert: async function (t, n) {
          var e = n.parents,
            r = await o(
              "WAWebProcessEncryptedMessageEditMsgs",
            ).processEncryptedMessageEditMsgs(t, e),
            a = r.filter(function (e) {
              return e.isLatest;
            });
          return (
            await o("WAWebDBProcessEditProtocolMsgs").updateMessageEditsLocally(
              r,
              a,
            ),
            []
          );
        },
        afterUpsert: async function () {},
        manageNotifications: async function () {},
      }),
      s = e;
    l.default = s;
  },
  98,
);
