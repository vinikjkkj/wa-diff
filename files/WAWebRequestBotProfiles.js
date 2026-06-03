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
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return e.length === 0
            ? []
            : o("WAWebBotGating").isBotProfileGqlMigrationEnabled()
              ? _(e)
              : C(e);
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = [];
          for (var r of t) {
            var a = y(r.id, r.personaId);
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
              c.push(g({ gqlProfile: m, isDefault: d.isDefault, wid: d.id }));
          }
          return c;
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
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
        posingAsProfessional: h(t.posingAsProfessional),
      };
    }
    function h(e) {
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
    function y(e, t) {
      if (t != null && t !== "") {
        var n = t.indexOf("$"),
          r = n === -1 ? t : t.substring(0, n);
        return r !== "" ? r : null;
      }
      return e.isFbidBot() ? e.user : null;
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new (o("WAWebUsync").USyncQuery)()
            .withContext("interactive")
            .withMode("query")
            .withBotProfileProtocol();
          e.forEach(function (e) {
            var n = e.id,
              r = e.personaId;
            t.withUser(
              new (o("WAWebUsyncUser").USyncUser)().withId(n).withPersonaId(r),
            );
          });
          var a = o(
              "WAWebContactSyncLogger",
            ).contactSyncLogger.createEventContext({
              syncType: o("WAWebContactSyncLogger").getSyncTypeString(
                "interactive",
                "query",
              ),
              requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN
                .BOT_REQUEST,
              requestedCount: e.length,
              protocols: t.protocols,
            }),
            i;
          try {
            i = yield o(
              "WAWebContactSyncLogger",
            ).contactSyncLogger.executeWithLogging(
              a,
              function () {
                return t.execute();
              },
              o("WAWebContactSyncErrorCodes").BOT_PROFILE,
            );
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[bot] requestBotProfiles usync error",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("bot-profile-usync-parse-error"),
              e
            );
          }
          var l = i.error.all || i.error.status;
          if (l)
            throw (
              o("WAWebContactSyncLogger").contactSyncLogger.logFailure(
                a,
                l.errorCode,
                i,
                o("WAWebContactSyncErrorCodes").BOT_PROFILE,
              ),
              new (o("WAWebBackendErrors").ServerStatusCodeError)(
                l.errorCode,
                l.errorText,
              )
            );
          var s = i.list;
          if (!s.length) {
            var m = e.map(function (e) {
              return e.id.toString();
            });
            return (
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "Bot ids ",
                      "",
                    ])),
                  m.join(", "),
                )
                .sendLogs("noStatusDataForBots"),
              o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(a, i),
              (d || (d = n("Promise"))).reject(
                r("err")("no status data returned for user"),
              )
            );
          }
          return (
            o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(a, i),
            s.map(function (e) {
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
        b.apply(this, arguments)
      );
    }
    l.requestBotProfiles = m;
  },
  98,
);
