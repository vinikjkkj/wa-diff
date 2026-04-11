__d(
  "WAWebPollEditAddonMessageProcessor",
  [
    "WAWebAddonCreateMsgProcessor",
    "WAWebDBProcessEditProtocolMsgs",
    "WAWebPollEditFromHistorySyncMsg",
    "WAWebPollsGatingUtils",
    "WAWebProcessEncryptedPollEditMsgs",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebAddonCreateMsgProcessor").createAddonMsgProcessor({
        isEnabled: o("WAWebPollsGatingUtils").isPollCreatorEditReceivingEnabled,
        convert: { fromHistorySyncMsg: r("WAWebPollEditFromHistorySyncMsg") },
        updateCollection: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* () {},
          );
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        beforeUpsert: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              var n = t.parents,
                r = yield o(
                  "WAWebProcessEncryptedPollEditMsgs",
                ).processEncryptedPollEditMsgs(e, n),
                a = r.filter(function (e) {
                  return e.isLatest;
                });
              return (
                yield o(
                  "WAWebDBProcessEditProtocolMsgs",
                ).updateMessageEditsLocally(r, a),
                []
              );
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        afterUpsert: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* () {},
          );
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        manageNotifications: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* () {},
          );
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      }),
      s = e;
    l.default = s;
  },
  98,
);
