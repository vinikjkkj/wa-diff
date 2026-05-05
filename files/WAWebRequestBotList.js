__d(
  "WAWebRequestBotList",
  [
    "WALogger",
    "WASmaxBotBotListRPC",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield o("WASmaxBotBotListRPC").sendBotListRPC({ botV: "3" });
          switch (t.name) {
            case "BotListResponseSuccessV2": {
              var n = t.value,
                r = n.botDefaultJid,
                a = n.botSection,
                i = [];
              return (
                a.forEach(function (e) {
                  e.bot.forEach(function (e) {
                    var t = e.jid,
                      n = e.personaId;
                    i.push({
                      id: o("WAWebWidFactory").createWid(t),
                      isDefault: t === r,
                      personaId: n,
                    });
                  });
                }),
                i
              );
            }
            case "BotListResponseSuccessV3": {
              var l = t.value,
                s = l.botDefault,
                u = l.botSection,
                c = [];
              return (
                u.forEach(function (e) {
                  e.bot.forEach(function (e) {
                    var t = e.jid,
                      n = e.personaId;
                    c.push({
                      id: o("WAWebWidFactory").createWid(t),
                      isDefault: t === (s == null ? void 0 : s.jid),
                      personaId: n,
                    });
                  });
                }),
                c
              );
            }
            case "BotListResponseError": {
              var d = t.value.errorBotListErrors.value,
                m = d.code,
                p = d.text;
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
