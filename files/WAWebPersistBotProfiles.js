__d(
  "WAWebPersistBotProfiles",
  [
    "WAWebBotProfileCollection",
    "WAWebSchemaBotProfile",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["commands", "id", "prompts"],
      s = ["name"];
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t.name,
            r = babelHelpers.objectWithoutPropertiesLoose(t, s),
            a =
              n != null && n !== ""
                ? babelHelpers.extends({}, r, { name: n })
                : r;
          (yield o("WAWebSchemaBotProfile")
            .getBotProfileTable()
            .bulkCreateOrMerge([babelHelpers.extends({ id: e.toString() }, a)]),
            o("WAWebBotProfileCollection").BotProfileCollection.gadd(
              babelHelpers.extends({ id: e }, a),
            ));
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return o("WAWebBotProfileCollection").BotProfileCollection.get(e) != null;
    }
    ((l.persistBotProfiles = u),
      (l.mergeBotSupportFields = d),
      (l.isBotProfileCached = p));
  },
  98,
);
