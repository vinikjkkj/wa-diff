__d(
  "WAWebSchemaNewsletterQuestionResponses",
  [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder",
    "WAWebStorageSchema",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WAWebModelStorageUtils").getStorage(),
        t = o("WAWebStorageMutationBuilder").columnBuilder(e.config),
        n = t.addColumn,
        r = t.addEncryptedColumn,
        a = t.addIndex,
        i = t.addUserDefinedPrimaryKey;
      e.add("newsletter-question-responses")
        .version(
          o(
            "WAWebModelStorageVersions",
          ).newsletterQuestionResponsesCreateTable(),
          [
            i("msgKey"),
            n("parentMsgKey"),
            a("parentMsgKey"),
            n("parentServerId"),
            n("t"),
            n("ack"),
            n("sender"),
            n("read"),
            r(
              "msgRowOpaqueData",
              o("WAWebStorageSchema").EncryptedValueType.ARRAY_BUFFER,
            ),
            n("questionResponseInfo"),
          ],
        )
        .view(function (e) {
          return e;
        });
    }
    function s() {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .table("newsletter-question-responses");
    }
    function u() {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .doesLocalSchemaIncludeVersion(
          o(
            "WAWebModelStorageVersions",
          ).newsletterQuestionResponsesCreateTable(),
        );
    }
    ((l.addTable = e),
      (l.getTable = s),
      (l.canUseNewsletterQuestionResponsesTable = u));
  },
  98,
);
