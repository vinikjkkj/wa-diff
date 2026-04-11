__d(
  "WAWebDBUpdateChatTable",
  [
    "WALogger",
    "WAWebDBChatValidation",
    "WAWebMiscErrors",
    "WAWebSchemaChat",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, n) {
      return (
        o("WAWebDBChatValidation").validateAccountLidInChatRow(
          n,
          "updateChatTable",
        ),
        o("WAWebSchemaChat")
          .getChatTable()
          .merge(t.toString(), n)
          .catch(function (t) {
            throw t instanceof o("WAWebMiscErrors").DbOnLogoutAbort
              ? t
              : (o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "updateChatTable: failed to update in storage",
                      ])),
                  )
                  .verbose()
                  .sendLogs("updateChatTable failed"),
                r("err")("updateChatTable failed"));
          })
      );
    }
    l.updateChatTable = s;
  },
  98,
);
