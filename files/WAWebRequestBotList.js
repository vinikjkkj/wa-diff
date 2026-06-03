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
          var t = yield o("WASmaxBotBotListRPC").sendBotListRPC({ botV: "2" });
          switch (t.name) {
            case "BotListResponseSuccessV2": {
              var n = t.value,
                r = n.botDefaultJid,
                a = n.botDefaultPersonaId,
                i = n.botSection,
                l = [];
              return (
                i.forEach(function (e) {
                  e.bot.forEach(function (e) {
                    var t = e.jid,
                      n = e.personaId;
                    l.push({
                      id: o("WAWebWidFactory").createWid(t),
                      isDefault: t === r,
                      personaId: n,
                    });
                  });
                }),
                l.some(function (e) {
                  return e.isDefault;
                }) ||
                  l.unshift({
                    id: o("WAWebWidFactory").createWid(r),
                    isDefault: !0,
                    personaId: a,
                  }),
                l
              );
            }
            case "BotListResponseSuccessV3": {
              var s = t.value,
                u = s.botDefault,
                c = s.botSection,
                d = [];
              return (
                c.forEach(function (e) {
                  e.bot.forEach(function (e) {
                    var t = e.jid,
                      n = e.personaId;
                    d.push({
                      id: o("WAWebWidFactory").createWid(t),
                      isDefault: t === (u == null ? void 0 : u.jid),
                      personaId: n,
                    });
                  });
                }),
                u != null &&
                  !d.some(function (e) {
                    return e.isDefault;
                  }) &&
                  d.unshift({
                    id: o("WAWebWidFactory").createWid(u.jid),
                    isDefault: !0,
                    personaId: u.personaId,
                  }),
                d
              );
            }
            case "BotListResponseError": {
              var m = t.value.errorBotListErrors.value,
                p = m.code,
                _ = m.text;
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
