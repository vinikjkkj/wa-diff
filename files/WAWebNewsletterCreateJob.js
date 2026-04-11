__d(
  "WAWebNewsletterCreateJob",
  [
    "WABase64",
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebCreateChat",
    "WAWebNewsletterCreateQueryJob",
    "WAWebNewsletterMetadataJob",
    "WAWebNewsletterModelUtils",
    "WAWebNewsletterStorageUtils",
    "WAWebNewsletterSystemMessages",
    "WAWebNewsletterUpdateMsgsRecordsJob",
    "WAWebNewsletterUpdateNewslettersRecordsJob",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebURLUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "createNewsletter",
          function () {
            return o("WAWebNewsletterCreateQueryJob")
              .createNewsletterQuery(t)
              .then(
                (function () {
                  var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (t) {
                      if (t == null) return null;
                      var n = o(
                          "WAWebNewsletterModelUtils",
                        ).mapNewsletterToModels(t),
                        r = n.chat,
                        a = n.metadata;
                      try {
                        var i = o(
                          "WAWebNewsletterSystemMessages",
                        ).genNewsletterCreationSystemMessages({
                          id: r.id,
                          name: r.name,
                          t: a.creationTime,
                          role: a.membershipType,
                        });
                        return (
                          yield o(
                            "WAWebNewsletterUpdateNewslettersRecordsJob",
                          ).updateNewsletterChatRecords([
                            o(
                              "WAWebCreateChat",
                            ).createNewsletterObjectForStorage(r),
                          ]),
                          yield o(
                            "WAWebNewsletterUpdateMsgsRecordsJob",
                          ).addNewsletterMsgsRecords(i),
                          yield o(
                            "WAWebNewsletterMetadataJob",
                          ).updateNewsletterMetadata(
                            o(
                              "WAWebNewsletterStorageUtils",
                            ).createNewsletterMetadataObjectForStorage(a),
                          ),
                          { newsletter: t, msgs: i }
                        );
                      } catch (t) {
                        o("WALogger")
                          .ERROR(
                            e ||
                              (e = babelHelpers.taggedTemplateLiteralLoose([
                                "[newsletter][join-notif] db update failed",
                              ])),
                          )
                          .tags("newsletter")
                          .sendLogs("newsletter-join-notification-db-fail");
                      }
                    },
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              );
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    function u(e) {
      if (e == null) return null;
      var t = r("WAWebURLUtils").parseDataURL(e).data,
        n = o("WABase64").decodeB64(t);
      return new Uint8Array(n);
    }
    ((l.createNewsletter = s), (l.encodePicture = u));
  },
  98,
);
