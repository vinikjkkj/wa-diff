__d(
  "WAWebEventEditAddonMessageProcessor",
  [
    "Promise",
    "WAArrayGroupBy",
    "WAWebAddonCreateMsgProcessor",
    "WAWebBoolFunc",
    "WAWebDBProcessEditProtocolMsgs",
    "WAWebGenerateEventEditSystemMessages",
    "WAWebProcessEncryptedEventEditMsgs",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = o("WAWebAddonCreateMsgProcessor").createAddonMsgProcessor({
        isEnabled: o("WAWebBoolFunc").returnTrue,
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
                  "WAWebProcessEncryptedEventEditMsgs",
                ).processEncryptedEventEditMsgs(e, n),
                a = r.filter(function (e) {
                  return e.isLatest;
                });
              yield o(
                "WAWebDBProcessEditProtocolMsgs",
              ).updateMessageEditsLocally(r, a);
              var i = o("WAArrayGroupBy").groupBy(a, function (e) {
                return e.protocolMsg.id.remote.toString();
              });
              return (
                yield o(
                  "WAWebGenerateEventEditSystemMessages",
                ).generateEventEditSystemMessages(i),
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
