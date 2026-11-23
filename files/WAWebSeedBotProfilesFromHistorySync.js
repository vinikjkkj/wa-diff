__d(
  "WAWebSeedBotProfilesFromHistorySync",
  [
    "WALogger",
    "WAWebBotStaticProfiles",
    "WAWebPersistBotProfiles",
    "WAWebSchemaBotProfile",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t) {
      var n = new Map();
      t.forEach(function (e) {
        o("WAWebBotStaticProfiles").isStaticProfile(e.wid) ||
          n.set(e.wid.toString(), e);
      });
      var a = Array.from(n.values());
      if (a.length !== 0)
        try {
          var i = await o("WAWebSchemaBotProfile")
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
            (await o("WAWebPersistBotProfiles").mergeBotSupportFieldsBatch(
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
    }
    l.seedBotProfilesFromHistorySync = u;
  },
  98,
);
