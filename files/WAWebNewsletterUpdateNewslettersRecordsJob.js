__d(
  "WAWebNewsletterUpdateNewslettersRecordsJob",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebModelStorageUtils",
    "WAWebOrchestratorNonPersistedJob",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      return (
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "updateNewsletterChatRecords",
            ])),
        ),
        o("WAWebOrchestratorNonPersistedJob")
          .createNonPersistedJob(
            "updateNewsletterChatRecords",
            function () {
              return o("WAWebModelStorageUtils")
                .getStorage()
                .lock(
                  ["chat"],
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        var n = e[0],
                          r = yield n.bulkGet(
                            t.map(function (e) {
                              var t = e.id;
                              return t;
                            }),
                            !1,
                          );
                        yield n.bulkCreateOrMerge(
                          t.map(function (e, t) {
                            return r[t] == null
                              ? babelHelpers.extends({ unreadCount: 0 }, e)
                              : e;
                          }),
                        );
                      },
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                );
            },
            { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
          )
          .waitUntilCompleted()
      );
    }
    l.updateNewsletterChatRecords = s;
  },
  98,
);
