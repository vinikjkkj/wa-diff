__d(
  "WAWebPersistBotProfiles",
  [
    "WAWebBotProfileCollection",
    "WAWebSchemaBotProfile",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["commands", "id", "prompts"];
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          (yield o("WAWebSchemaBotProfile")
            .getBotProfileTable()
            .bulkCreateOrMerge(
              t.map(function (t) {
                var n = t.commands,
                  r = t.id,
                  o = t.prompts,
                  a = babelHelpers.objectWithoutPropertiesLoose(t, e);
                return babelHelpers.extends(
                  {
                    id: r.toString(),
                    prompts: JSON.stringify(o),
                    commands: JSON.stringify(n),
                  },
                  a,
                );
              }),
            ),
            t.forEach(function (e) {
              return o("WAWebBotProfileCollection").BotProfileCollection.gadd(
                babelHelpers.extends({ id: e.id }, e),
              );
            }));
        })),
        u.apply(this, arguments)
      );
    }
    l.persistBotProfiles = s;
  },
  98,
);
