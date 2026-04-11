__d(
  "WAWebDBUpdateMessageTable",
  ["WALogger", "WAWebSchemaMessage"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, n) {
      return o("WAWebSchemaMessage")
        .getMessageTable()
        .merge(t.toString(), n)
        .catch(function (t) {
          throw (
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "updateMessageTable: failed to update in storage",
                  ])),
              )
              .verbose()
              .sendLogs("updateMessageTable failed"),
            t
          );
        });
    }
    l.updateMessageTable = s;
  },
  98,
);
