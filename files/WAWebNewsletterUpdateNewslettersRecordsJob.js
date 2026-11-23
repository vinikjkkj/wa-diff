__d(
  "WAWebNewsletterUpdateNewslettersRecordsJob",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebModelStorageUtils",
    "WAWebOrchestratorNonPersistedJob",
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
                .lock(["chat"], async function (e) {
                  var n = e[0],
                    r = await n.bulkGet(
                      t.map(function (e) {
                        var t = e.id;
                        return t;
                      }),
                      !1,
                    );
                  await n.bulkCreateOrMerge(
                    t.map(function (e, t) {
                      return r[t] == null
                        ? babelHelpers.extends({ unreadCount: 0 }, e)
                        : e;
                    }),
                  );
                });
            },
            { priority: o("WAJobOrchestratorTypes").JobPriority.UI_ACTION },
          )
          .waitUntilCompleted()
      );
    }
    l.updateNewsletterChatRecords = s;
  },
  98,
);
