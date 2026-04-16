__d(
  "WAWebRequestBotProfiles",
  [
    "Promise",
    "WALogger",
    "WAWebBackendErrors",
    "WAWebBotProfileCategory",
    "WAWebContactSyncErrorCodes",
    "WAWebContactSyncLogger",
    "WAWebUsync",
    "WAWebUsyncUser",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (t.length === 0) return (s || (s = n("Promise"))).resolve([]);
          var a = new (o("WAWebUsync").USyncQuery)()
            .withContext("interactive")
            .withMode("query")
            .withBotProfileProtocol();
          t.forEach(function (e) {
            var t = e.id,
              n = e.personaId;
            a.withUser(
              new (o("WAWebUsyncUser").USyncUser)().withId(t).withPersonaId(n),
            );
          });
          var i = o(
              "WAWebContactSyncLogger",
            ).contactSyncLogger.createEventContext({
              syncType: o("WAWebContactSyncLogger").getSyncTypeString(
                "interactive",
                "query",
              ),
              requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN
                .BOT_REQUEST,
              requestedCount: t.length,
              protocols: a.protocols,
            }),
            l = yield o(
              "WAWebContactSyncLogger",
            ).contactSyncLogger.executeWithLogging(
              i,
              function () {
                return a.execute();
              },
              o("WAWebContactSyncErrorCodes").BOT_PROFILE,
            ),
            u = l.error.all || l.error.status;
          if (u)
            throw (
              o("WAWebContactSyncLogger").contactSyncLogger.logFailure(
                i,
                u.errorCode,
                l,
                o("WAWebContactSyncErrorCodes").BOT_PROFILE,
              ),
              new (o("WAWebBackendErrors").ServerStatusCodeError)(
                u.errorCode,
                u.errorText,
              )
            );
          var c = l.list;
          if (!c.length) {
            var d = t.map(function (e) {
              return e.id.toString();
            });
            return (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Bot ids ",
                      "",
                    ])),
                  d.join(", "),
                )
                .sendLogs("noStatusDataForBots"),
              o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(i, l),
              (s || (s = n("Promise"))).reject(
                r("err")("no status data returned for user"),
              )
            );
          }
          return (
            o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(i, l),
            c.map(function (e) {
              var t,
                n = e.bot,
                r = e.id;
              return {
                id: r,
                name: n.name,
                attrs: n.attributes,
                description: n.description,
                category:
                  (t = o("WAWebBotProfileCategory").BotProfileCategory.cast(
                    n.category,
                  )) != null
                    ? t
                    : o("WAWebBotProfileCategory").BotProfileCategory.SYNTHETIC,
                isDefault: n.isDefault,
                prompts: n.prompts,
                personaId: n.personaId,
                commands: n.commands,
                commandsDescription: n.commandsDescription,
                isMetaCreated: n.isMetaCreated,
                creatorName: n.creatorName,
                creatorProfileUrl: n.creatorProfileUrl,
                posingAsProfessional: n.posingAsProfessional,
                lastUpdateTs: Date.now(),
              };
            })
          );
        })),
        c.apply(this, arguments)
      );
    }
    l.requestBotProfiles = u;
  },
  98,
);
