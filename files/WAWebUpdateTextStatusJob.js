__d(
  "WAWebUpdateTextStatusJob",
  ["WALogger", "WAWebMexExperiment", "WAWebMexUpdateTextStatusJob"],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t, n, r) {
      var a,
        i = new (o("WAWebMexExperiment").GraphQlPerfTracker)(
          "update-text-status",
        );
      (i.start(), i.toUseGraphQL());
      var l = await o("WAWebMexUpdateTextStatusJob").mexUpdateTextStatus(
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
    }
    l.updateTextStatus = s;
  },
  98,
);
