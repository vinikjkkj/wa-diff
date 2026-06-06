__d(
  "WAWebMessageEditAddonMessageProcessor",
  [
    "Promise",
    "WAWebAddonCreateMsgProcessor",
    "WAWebDBProcessEditProtocolMsgs",
    "WAWebMessageEditGatingUtils",
    "WAWebProcessEncryptedMessageEditMsgs",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = o("WAWebAddonCreateMsgProcessor").createAddonMsgProcessor({
        isEnabled: function () {
          return o(
            "WAWebMessageEditGatingUtils",
          ).isMessageEditToMessageSecretReceiverEnabled();
        },
        convert: {
          fromHistorySyncMsg: function () {
            return (e || (e = n("Promise"))).resolve([]);
          },
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
                  "WAWebProcessEncryptedMessageEditMsgs",
                ).processEncryptedMessageEditMsgs(e, n),
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
      u = s;
    l.default = u;
  },
  98,
);
