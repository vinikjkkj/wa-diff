__d(
  "WAWebUpdateOptOutListDbJob",
  ["WALogger", "WAWebSchemaOptOutList", "err"],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t, n) {
      var a = t.toString();
      try {
        n
          ? await o("WAWebSchemaOptOutList")
              .getOptOutListTable()
              .createOrReplace({ id: a })
          : await o("WAWebSchemaOptOutList").getOptOutListTable().remove(a);
      } catch (t) {
        throw (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAWebUpdateOptOutListDbJob] updateOptOutListDbJob failed",
                ])),
            )
            .verbose()
            .sendLogs("Failed to update optoutlist db"),
          r("err")("updateOptOutListDbJob failed")
        );
      }
    }
    async function c() {
      try {
        await o("WAWebSchemaOptOutList").getOptOutListTable().clear();
      } catch (e) {
        throw (
          o("WALogger").ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[WAWebUpdateOptOutListDbJob] clearOptOutListDbJob failed",
              ])),
          ),
          r("err")("clearOptOutListDbJob failed")
        );
      }
    }
    ((l.updateOptOutListDbJob = u), (l.clearOptOutListDbJob = c));
  },
  98,
);
