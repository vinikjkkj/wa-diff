__d(
  "WAWebPollAddOptionAddonMessageProcessor",
  [
    "WAWebAddonCreateMsgProcessor",
    "WAWebPollAddOptionFromHistorySyncMsg",
    "WAWebPollsGatingUtils",
    "WAWebProcessEncryptedPollAddOptionMsgs",
    "WAWebStorePollAddOptionDecryptedMsgs",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebAddonCreateMsgProcessor").createAddonMsgProcessor({
        isEnabled: o("WAWebPollsGatingUtils").isPollAddOptionReceivingEnabled,
        convert: {
          fromHistorySyncMsg: r("WAWebPollAddOptionFromHistorySyncMsg"),
        },
        updateCollection: async function () {},
        beforeUpsert: async function (t, n) {
          var e = n.parents,
            r = await o(
              "WAWebProcessEncryptedPollAddOptionMsgs",
            ).processEncryptedPollAddOptionMsgs(t, e);
          return (
            await o(
              "WAWebStorePollAddOptionDecryptedMsgs",
            ).storePollAddOptionDecryptedMsgs(r),
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
