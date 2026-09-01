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
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "createNewsletter",
          function () {
            return o("WAWebNewsletterCreateQueryJob")
              .createNewsletterQuery(e)
              .then(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      if (e == null) return null;
                      var n =
                          (t == null
                            ? void 0
                            : t.preserveServerResultOnLocalHydrationFailure) ===
                          !0,
                        r;
                      if (n)
                        try {
                          r = o(
                            "WAWebNewsletterModelUtils",
                          ).mapNewsletterToModels(e);
                        } catch (t) {
                          return (c(t), { newsletter: e, msgs: [] });
                        }
                      else
                        r = o(
                          "WAWebNewsletterModelUtils",
                        ).mapNewsletterToModels(e);
                      var a = r,
                        i = a.chat,
                        l = a.metadata,
                        s = [];
                      try {
                        ((s = o(
                          "WAWebNewsletterSystemMessages",
                        ).genNewsletterCreationSystemMessages({
                          id: i.id,
                          name: i.name,
                          t: l.creationTime,
                          role: l.membershipType,
                        })),
                          yield o(
                            "WAWebNewsletterUpdateNewslettersRecordsJob",
                          ).updateNewsletterChatRecords([
                            o(
                              "WAWebCreateChat",
                            ).createNewsletterObjectForStorage(i),
                          ]),
                          yield o(
                            "WAWebNewsletterUpdateMsgsRecordsJob",
                          ).addNewsletterMsgsRecords(s),
                          yield o(
                            "WAWebNewsletterMetadataJob",
                          ).updateNewsletterMetadata(
                            o(
                              "WAWebNewsletterStorageUtils",
                            ).createNewsletterMetadataObjectForStorage(l),
                          ));
                      } catch (e) {
                        if ((d(e), !n)) return null;
                        s = [];
                      }
                      return { newsletter: e, msgs: s };
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
        .waitUntilCompleted();
    }
    function c(t) {
      o("WALogger")
        .ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[newsletter][create] model hydration failed",
            ])),
        )
        .catching(r("getErrorSafe")(t))
        .tags("newsletter")
        .sendLogs("newsletter-create-model-hydration-fail");
    }
    function d(e) {
      o("WALogger")
        .ERROR(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[newsletter][create] local persistence failed",
            ])),
        )
        .catching(r("getErrorSafe")(e))
        .tags("newsletter")
        .sendLogs("newsletter-create-local-persistence-fail");
    }
    function m(e) {
      if (e == null) return null;
      var t = r("WAWebURLUtils").parseDataURL(e).data,
        n = o("WABase64").decodeB64(t);
      return new Uint8Array(n);
    }
    ((l.createNewsletter = u), (l.encodePicture = m));
  },
  98,
);
