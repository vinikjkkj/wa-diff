__d(
  "WAWebRequestBotList",
  [
    "WALogger",
    "WASmaxBotBotListRPC",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield o("WASmaxBotBotListRPC").sendBotListRPC({ botV: "2" });
          switch (t.name) {
            case "BotListResponseSuccessV2": {
              var n = t.value,
                a = n.botDefaultJid,
                i = n.botSection,
                l = [];
              return (
                i.forEach(function (e) {
                  e.bot.forEach(function (e) {
                    var t = e.jid,
                      n = e.personaId;
                    l.push({
                      id: o("WAWebWidFactory").createWid(t),
                      isDefault: t === a,
                      personaId: n,
                    });
                  });
                }),
                l
              );
            }
            case "BotListResponseSuccessV3":
              throw r("err")(t.name + " is not implemented");
            case "BotListResponseError": {
              var s = t.value.errorBotListErrors.value,
                u = s.code,
                c = s.text;
              return (
                o("WALogger").ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[bot] requestBotList failed",
                    ])),
                ),
                []
              );
            }
          }
        })),
        u.apply(this, arguments)
      );
    }
    l.requestBotList = s;
  },
  98,
);
