__d(
  "WAWebPollEditAddonMessageProcessor",
  [
    "WAWebAddonCreateMsgProcessor",
    "WAWebDBProcessEditProtocolMsgs",
    "WAWebPollEditFromHistorySyncMsg",
    "WAWebPollsGatingUtils",
    "WAWebProcessEncryptedPollEditMsgs",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebAddonCreateMsgProcessor").createAddonMsgProcessor({
        isEnabled: o("WAWebPollsGatingUtils").isPollCreatorEditReceivingEnabled,
        convert: { fromHistorySyncMsg: r("WAWebPollEditFromHistorySyncMsg") },
        updateCollection: async function () {},
        beforeUpsert: async function (t, n) {
          var e = n.parents,
            r = await o(
              "WAWebProcessEncryptedPollEditMsgs",
            ).processEncryptedPollEditMsgs(t, e),
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
