__d(
  "WAWebRequestBotProfiles",
  [
    "Promise",
    "WALogger",
    "WAWebBackendErrors",
    "WAWebBotGating",
    "WAWebBotProfileCategory",
    "WAWebBotTypes",
    "WAWebContactSyncErrorCodes",
    "WAWebContactSyncLogger",
    "WAWebFetchBotProfilesGQL",
    "WAWebUsync",
    "WAWebUsyncUser",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return e.length === 0
            ? []
            : o("WAWebBotGating").isBotProfileGqlMigrationEnabled()
              ? m(e)
              : h(e);
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = [];
          for (var r of t) {
            var a = g(r.id, r.personaId);
            a != null &&
              a !== "" &&
              n.push({ fbid: a, id: r.id, isDefault: r.isDefault });
          }
          if (n.length === 0) return [];
          var i = n.map(function (e) {
              return e.fbid;
            }),
            l = yield o("WAWebFetchBotProfilesGQL").fetchBotProfilesGQL(i);
          if (l.type !== "success")
            return (
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[requestBotProfiles] GQL fetch failed, returning empty",
                  ])),
              ),
              []
            );
          var s = new Map(
              l.value.map(function (e) {
                return [e.personaId, e];
              }),
            ),
            u = [];
          for (var c of n) {
            var d = s.get(c.fbid);
            d != null &&
              u.push(_({ gqlProfile: d, isDefault: c.isDefault, wid: c.id }));
          }
          return u;
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      var t = e.gqlProfile,
        n = e.isDefault,
        r = e.wid;
      return {
        id: r,
        name: t.name,
        attrs: "",
        description: t.description,
        category: o("WAWebBotProfileCategory").BotProfileCategory.SYNTHETIC,
        isDefault: n,
        prompts: t.prompts.map(function (e) {
          return { emoji: "", text: e };
        }),
        personaId: t.personaId,
        commands: [],
        commandsDescription: "",
        isMetaCreated: t.isMetaCreated,
        creatorName: t.creatorName,
        creatorProfileUrl: t.creatorProfileUrl,
        lastUpdateTs: Date.now(),
        posingAsProfessional: f(t.posingAsProfessional),
      };
    }
    function f(e) {
      return e == null
        ? null
        : (function (e) {
            if (e === "yes")
              return o("WAWebBotTypes").BotPosingAsProfessionalType.YES;
            if (e === "no")
              return o("WAWebBotTypes").BotPosingAsProfessionalType.NO;
            {
              var t = e;
              return o("WAWebBotTypes").BotPosingAsProfessionalType.UNKNOWN;
            }
          })(e.toLowerCase());
    }
    function g(e, t) {
      if (t != null && t !== "") {
        var n = t.indexOf("$"),
          r = n === -1 ? t : t.substring(0, n);
        return r !== "" ? r : null;
      }
      return e.isFbidBot() ? e.user : null;
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            a = new (o("WAWebUsync").USyncQuery)()
              .withContext("interactive")
              .withMode("query")
              .withBotProfileProtocol();
          e.forEach(function (e) {
            var t = e.id,
              n = e.personaId;
            a.withUser(
              new (o("WAWebUsyncUser").USyncUser)().withId(t).withPersonaId(n),
            );
          });
          var i = (t = o(
              "WAWebContactSyncLogger",
            )).contactSyncLogger.createEventContext({
              syncType: t.getSyncTypeString("interactive", "query"),
              requestOrigin: t.SYNC_REQUEST_ORIGIN.BOT_REQUEST,
              requestedCount: e.length,
              protocols: a.protocols,
            }),
            l = yield t.contactSyncLogger.executeWithLogging(
              i,
              function () {
                return a.execute();
              },
              o("WAWebContactSyncErrorCodes").BOT_PROFILE,
            ),
            c = l.error.all || l.error.status;
          if (c)
            throw (
              o("WAWebContactSyncLogger").contactSyncLogger.logFailure(
                i,
                c.errorCode,
                l,
                o("WAWebContactSyncErrorCodes").BOT_PROFILE,
              ),
              new (o("WAWebBackendErrors").ServerStatusCodeError)(
                c.errorCode,
                c.errorText,
              )
            );
          var d = l.list;
          if (!d.length) {
            var m = e.map(function (e) {
              return e.id.toString();
            });
            return (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "Bot ids ",
                      "",
                    ])),
                  m.join(", "),
                )
                .sendLogs("noStatusDataForBots"),
              o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(i, l),
              (u || (u = n("Promise"))).reject(
                r("err")("no status data returned for user"),
              )
            );
          }
          return (
            o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(i, l),
            d.map(function (e) {
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
        y.apply(this, arguments)
      );
    }
    l.requestBotProfiles = c;
  },
  98,
);
