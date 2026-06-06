__d(
  "WAWebPollAddOptionAddonMessageProcessor",
  [
    "WAWebAddonCreateMsgProcessor",
    "WAWebPollAddOptionFromHistorySyncMsg",
    "WAWebPollsGatingUtils",
    "WAWebProcessEncryptedPollAddOptionMsgs",
    "WAWebStorePollAddOptionDecryptedMsgs",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebAddonCreateMsgProcessor").createAddonMsgProcessor({
        isEnabled: o("WAWebPollsGatingUtils").isPollAddOptionReceivingEnabled,
        convert: {
          fromHistorySyncMsg: r("WAWebPollAddOptionFromHistorySyncMsg"),
        },
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
                  "WAWebProcessEncryptedPollAddOptionMsgs",
                ).processEncryptedPollAddOptionMsgs(e, n);
              return (
                yield o(
                  "WAWebStorePollAddOptionDecryptedMsgs",
                ).storePollAddOptionDecryptedMsgs(r),
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
