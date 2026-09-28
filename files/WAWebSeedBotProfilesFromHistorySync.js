__d(
  "WAWebSeedBotProfilesFromHistorySync",
  [
    "WALogger",
    "WAWebBotStaticProfiles",
    "WAWebPersistBotProfiles",
    "WAWebSchemaBotProfile",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = new Map();
          t.forEach(function (e) {
            o("WAWebBotStaticProfiles").isStaticProfile(e.wid) ||
              n.set(e.wid.toString(), e);
          });
          var a = Array.from(n.values());
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
              (l.length > 0 &&
                (yield o("WAWebPersistBotProfiles").mergeBotSupportFieldsBatch(
                  l.map(function (e) {
                    var t = e.name,
                      n = e.wid;
                    return { fields: { name: t }, wid: n };
                  }),
                )),
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
        c.apply(this, arguments)
      );
    }
    l.seedBotProfilesFromHistorySync = u;
  },
  98,
);
