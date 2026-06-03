__d(
  "WAWebUpdateTextStatusJob",
  [
    "WALogger",
    "WAWebMexExperiment",
    "WAWebMexUpdateTextStatusJob",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t, n) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
          var a,
            i = new (o("WAWebMexExperiment").GraphQlPerfTracker)(
              "update-text-status",
            );
          (i.start(), i.toUseGraphQL());
          var l = yield o("WAWebMexUpdateTextStatusJob").mexUpdateTextStatus(
              t,
              n,
              r,
            ),
            s = (a = l.xwa2_update_text_status) == null ? void 0 : a.result;
          return (
            i.stop(),
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "updateTextStatus success",
                ])),
            ),
            { result: s }
          );
        })),
        u.apply(this, arguments)
      );
    }
    l.updateTextStatus = s;
  },
  98,
);
