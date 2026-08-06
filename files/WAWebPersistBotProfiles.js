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
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          (yield o("WAWebSchemaBotProfile")
            .getBotProfileTable()
            .bulkCreateOrMerge([babelHelpers.extends({ id: e.toString() }, t)]),
            o("WAWebBotProfileCollection").BotProfileCollection.gadd(
              babelHelpers.extends({ id: e }, t),
            ));
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return o("WAWebBotProfileCollection").BotProfileCollection.get(e) != null;
    }
    ((l.persistBotProfiles = s),
      (l.mergeBotSupportFields = c),
      (l.isBotProfileCached = m));
  },
  98,
);
