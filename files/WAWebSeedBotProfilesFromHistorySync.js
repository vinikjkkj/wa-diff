__d(
  "WAWebSeedBotProfilesFromHistorySync",
  [
    "Promise",
    "WALogger",
    "WAWebBotStaticProfiles",
    "WAWebPersistBotProfiles",
    "WAWebSchemaBotProfile",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.filter(function (e) {
            var t = e.wid;
            return !o("WAWebBotStaticProfiles").isStaticProfile(t);
          });
          if (a.length !== 0)
            try {
              var i = yield o("WAWebSchemaBotProfile")
                  .getBotProfileTable()
                  .bulkGet(
                    a.map(function (e) {
                      var t = e.wid;
                      return t.toString();
                    }),
                  ),
                l = a.filter(function (e, t) {
                  return i[t] == null;
                });
              (yield (u || (u = n("Promise"))).all(
                l.map(function (e) {
                  var t = e.name,
                    n = e.wid;
                  return o("WAWebPersistBotProfiles").mergeBotSupportFields(n, {
                    name: t,
                  });
                }),
              ),
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] seeded ",
                      " bot profile names",
                    ])),
                  l.length,
                ));
            } catch (e) {
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] seeding bot profile names failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("history-sync-seed-bot-profile-failed");
            }
        })),
        d.apply(this, arguments)
      );
    }
    l.seedBotProfilesFromHistorySync = c;
  },
  98,
);
