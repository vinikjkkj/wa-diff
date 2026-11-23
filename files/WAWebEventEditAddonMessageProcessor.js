__d(
  "WAWebEventEditAddonMessageProcessor",
  [
    "WAArrayGroupBy",
    "WAWebAddonCreateMsgProcessor",
    "WAWebBoolFunc",
    "WAWebDBProcessEditProtocolMsgs",
    "WAWebGenerateEventEditSystemMessages",
    "WAWebProcessEncryptedEventEditMsgs",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebAddonCreateMsgProcessor").createAddonMsgProcessor({
        isEnabled: o("WAWebBoolFunc").returnTrue,
        convert: {
          fromHistorySyncMsg: function () {
            return Promise.resolve([]);
          },
        },
        updateCollection: async function () {},
        beforeUpsert: async function (t, n) {
          var e = n.parents,
            r = await o(
              "WAWebProcessEncryptedEventEditMsgs",
            ).processEncryptedEventEditMsgs(t, e),
            a = r.filter(function (e) {
              return e.isLatest;
            });
          await o("WAWebDBProcessEditProtocolMsgs").updateMessageEditsLocally(
            r,
            a,
          );
          var i = o("WAArrayGroupBy").groupBy(a, function (e) {
            return e.protocolMsg.id.remote.toString();
          });
          return (
            await o(
              "WAWebGenerateEventEditSystemMessages",
            ).generateEventEditSystemMessages(i),
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
