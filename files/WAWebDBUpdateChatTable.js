__d(
  "WAWebDBUpdateChatTable",
  [
    "Promise",
    "WALogger",
    "WAWebDBChatValidation",
    "WAWebDbErrors",
    "WAWebSchemaChat",
    "err",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t, a) {
      return (
        o("WAWebDBChatValidation").validateAccountLidInChatRow(
          a,
          "updateChatTable",
        ),
        Object.keys(a).length === 0 && r("gkx")("27857")
          ? (s || (s = n("Promise"))).resolve()
          : o("WAWebSchemaChat")
              .getChatTable()
              .merge(t.toString(), a)
              .catch(function (t) {
                throw t instanceof o("WAWebDbErrors").DbOnLogoutAbort
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
    l.updateChatTable = u;
  },
  98,
);
