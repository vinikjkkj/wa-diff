__d(
  "WAWebRestoreBotProfilesFromDb",
  [
    "WALogger",
    "WAWebBotProfileCollection",
    "WAWebSchemaBotProfile",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = ["commands", "id", "prompts"];
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield o("WAWebSchemaBotProfile").getBotProfileTable().all(),
            n = 0,
            r = 0;
          (t.forEach(function (t) {
            var a = t.commands,
              i = t.id,
              l = t.prompts,
              c = babelHelpers.objectWithoutPropertiesLoose(t, m),
              d;
            try {
              d = o("WAWebWidFactory").createUserWidOrThrow(i);
            } catch (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "restore-bot-profiles: invalid id",
                    ])),
                )
                .sendLogs("restore-bot-profiles: invalid id");
              return;
            }
            var p = [];
            if (l)
              try {
                ((p = JSON.parse(l)), Array.isArray(p) || ((p = []), n++));
              } catch (e) {
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "restore-bot-profiles: prompts parsing failed",
                      ])),
                  )
                  .sendLogs("restore-bot-profiles: prompts parsing failed");
              }
            var _ = [];
            if (a != null)
              try {
                ((_ = JSON.parse(a)), Array.isArray(_) || ((_ = []), r++));
              } catch (e) {
                o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "restore-bot-profiles: commands parsing failed",
                      ])),
                  )
                  .sendLogs("restore-bot-profiles: commands parsing failed");
              }
            o("WAWebBotProfileCollection").BotProfileCollection.gadd(
              babelHelpers.extends({ id: d, commands: _, prompts: p }, c),
            );
          }),
            n > 0 &&
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "restore-bot-profiles: ",
                      " prompts are not an array",
                    ])),
                  n,
                )
                .sendLogs("restore-bot-profiles: prompts are not an array"),
            r > 0 &&
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "restore-bot-profiles: ",
                      " commands are not an array",
                    ])),
                  r,
                )
                .sendLogs("restore-bot-profiles: commands are not an array"));
        })),
        _.apply(this, arguments)
      );
    }
    l.restoreBotProfilesFromDb = p;
  },
  98,
);
