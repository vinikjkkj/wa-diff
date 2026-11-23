__d(
  "WAWebPollAddOptionAddonMessageProcessor",
  [
    "WAWebAddonCreateMsgProcessor",
    "WAWebApplyPollAddOptionTCValidation",
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
            ).processEncryptedPollAddOptionMsgs(t, e),
            a = await o(
              "WAWebApplyPollAddOptionTCValidation",
            ).applyPollAddOptionTCValidation(r, "live-add-option"),
            i = a.accepted;
          return (
            await o(
              "WAWebStorePollAddOptionDecryptedMsgs",
            ).storePollAddOptionDecryptedMsgs(i),
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
