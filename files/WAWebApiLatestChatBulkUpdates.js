__d(
  "WAWebApiLatestChatBulkUpdates",
  ["WALogger", "WAWebDBChatValidation", "WAWebSchemaChat"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      return (
        o("WALogger")
          .LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "latestChatBulkUpdates: bulkCreateOrMerge",
              ])),
          )
          .tags("missing-lid"),
        o("WAWebDBChatValidation").validateAccountLidInChatRows(
          t,
          "latestChatBulkUpdates",
        ),
        o("WAWebSchemaChat").getChatTable().bulkCreateOrMerge(t)
      );
    }
    l.latestChatBulkUpdates = s;
  },
  98,
);
