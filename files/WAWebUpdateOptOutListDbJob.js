__d(
  "WAWebUpdateOptOutListDbJob",
  ["WALogger", "WAWebSchemaOptOutList", "asyncToGeneratorRuntime", "err"],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a = t.toString();
          try {
            n
              ? yield o("WAWebSchemaOptOutList")
                  .getOptOutListTable()
                  .createOrReplace({ id: a })
              : yield o("WAWebSchemaOptOutList").getOptOutListTable().remove(a);
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
        })),
        c.apply(this, arguments)
      );
    }
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            yield o("WAWebSchemaOptOutList").getOptOutListTable().clear();
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
        })),
        m.apply(this, arguments)
      );
    }
    ((l.updateOptOutListDbJob = u), (l.clearOptOutListDbJob = d));
  },
  98,
);
