__d(
  "WAWebPersistBotProfiles",
  ["WAWebBotProfileCollection", "WAWebSchemaBotProfile"],
  function (t, n, r, o, a, i, l) {
    var e = ["commands", "id", "prompts"];
    async function s(t) {
      (await o("WAWebSchemaBotProfile")
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
    }
    l.persistBotProfiles = s;
  },
  98,
);
