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
    var e, s, u, c;
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return e.length === 0
            ? []
            : o("WAWebBotGating").isBotProfileGqlMigrationEnabled()
              ? p(e)
              : y(e);
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = [];
          for (var r of t) {
            var a = h(r.id, r.personaId);
            a != null &&
              a !== "" &&
              n.push({ fbid: a, id: r.id, isDefault: r.isDefault });
          }
          if (n.length === 0) return [];
          var i = n.map(function (e) {
              return e.fbid;
            }),
            l;
          try {
            l = yield o("WAWebFetchBotProfilesGQL").fetchBotProfilesGQL(i);
          } catch (t) {
            return (
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[requestBotProfiles] GQL fetch threw, returning empty",
                    ])),
                )
                .sendLogs("bot-profile-gql-fetch-exception"),
              []
            );
          }
          if (l.type !== "success")
            return (
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[requestBotProfiles] GQL fetch failed, returning empty",
                    ])),
                )
                .sendLogs("bot-profile-gql-fetch-failed"),
              []
            );
          var u = new Map(
              l.value.map(function (e) {
                return [e.personaId, e];
              }),
            ),
            c = [];
          for (var d of n) {
            var m = u.get(d.fbid);
            m != null &&
              c.push(f({ gqlProfile: m, isDefault: d.isDefault, wid: d.id }));
          }
          return c;
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
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
        posingAsProfessional: g(t.posingAsProfessional),
      };
    }
    function g(e) {
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
    function h(e, t) {
      if (t != null && t !== "") {
        var n = t.indexOf("$"),
          r = n === -1 ? t : t.substring(0, n);
        return r !== "" ? r : null;
      }
      return e.isFbidBot() ? e.user : null;
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            s = l.error.all || l.error.status;
          if (s)
            throw (
              o("WAWebContactSyncLogger").contactSyncLogger.logFailure(
                i,
                s.errorCode,
                l,
                o("WAWebContactSyncErrorCodes").BOT_PROFILE,
              ),
              new (o("WAWebBackendErrors").ServerStatusCodeError)(
                s.errorCode,
                s.errorText,
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
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "Bot ids ",
                      "",
                    ])),
                  m.join(", "),
                )
                .sendLogs("noStatusDataForBots"),
              o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(i, l),
              (c || (c = n("Promise"))).reject(
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
        C.apply(this, arguments)
      );
    }
    l.requestBotProfiles = d;
  },
  98,
);
