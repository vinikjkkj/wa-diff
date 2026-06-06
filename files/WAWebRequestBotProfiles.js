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
              : v(e);
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
          var a = g(t);
          if (a.length === 0)
            return (d || (d = n("Promise"))).reject(
              r("err")("no status data returned for user"),
            );
          var i = a.map(function (e) {
              return e.fbid;
            }),
            l;
          try {
            l = yield o("WAWebFetchBotProfilesGQL").fetchBotProfilesGQL(i);
          } catch (t) {
            throw (
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[requestBotProfiles] GQL fetch threw",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("bot-profile-gql-fetch-exception"),
              t
            );
          }
          if (l.type !== "success")
            throw (
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[requestBotProfiles] GQL fetch failed",
                    ])),
                )
                .sendLogs("bot-profile-gql-fetch-failed"),
              l.type === "graphql-error"
                ? l.error
                : r("err")("bot profile GQL fetch failed")
            );
          var u = h(a, l.value);
          return u.length === 0
            ? (d || (d = n("Promise"))).reject(
                r("err")("no status data returned for user"),
              )
            : u;
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      var t = [];
      for (var n of e) {
        var r = b(n.id, n.personaId);
        r != null &&
          r !== "" &&
          t.push({ fbid: r, id: n.id, isDefault: n.isDefault });
      }
      return t;
    }
    function h(e, t) {
      var n = new Map(
          t.map(function (e) {
            return [e.personaId, e];
          }),
        ),
        r = [];
      for (var o of e) {
        var a = n.get(o.fbid);
        a != null &&
          r.push(y({ gqlProfile: a, isDefault: o.isDefault, wid: o.id }));
      }
      return r;
    }
    function y(e) {
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
        posingAsProfessional: C(t.posingAsProfessional),
      };
    }
    function C(e) {
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
    function b(e, t) {
      if (t != null && t !== "") {
        var n = t.indexOf("$"),
          r = n === -1 ? t : t.substring(0, n);
        return r !== "" ? r : null;
      }
      return e.isFbidBot() ? e.user : null;
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        S.apply(this, arguments)
      );
    }
    l.requestBotProfiles = m;
  },
  98,
);
