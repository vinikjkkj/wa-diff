__d(
  "WAWebRequestBotProfiles",
  [
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
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    async function d(e) {
      return e.length === 0
        ? []
        : o("WAWebBotGating").isBotProfileGqlMigrationEnabled()
          ? m(e)
          : y(e);
    }
    async function m(t) {
      var n = p(t);
      if (n.length === 0)
        return Promise.reject(r("err")("no status data returned for user"));
      var a = n.map(function (e) {
          return e.fbid;
        }),
        i;
      try {
        i = await o("WAWebFetchBotProfilesGQL").fetchBotProfilesGQL(a);
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
      if (i.type !== "success")
        throw (
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[requestBotProfiles] GQL fetch failed",
                ])),
            )
            .sendLogs("bot-profile-gql-fetch-failed"),
          i.type === "graphql-error"
            ? i.error
            : r("err")("bot profile GQL fetch failed")
        );
      var l = _(n, i.value);
      return l.length === 0
        ? Promise.reject(r("err")("no status data returned for user"))
        : l;
    }
    function p(e) {
      var t = [];
      for (var n of e) {
        var r = h(n.id, n.personaId);
        r != null &&
          r !== "" &&
          t.push({ fbid: r, id: n.id, isDefault: n.isDefault });
      }
      return t;
    }
    function _(e, t) {
      var n = new Map(
          t.map(function (e) {
            return [e.personaId, e];
          }),
        ),
        r = [];
      for (var o of e) {
        var a = n.get(o.fbid);
        a != null &&
          r.push(f({ gqlProfile: a, isDefault: o.isDefault, wid: o.id }));
      }
      return r;
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
    async function y(e) {
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
      var n = o("WAWebContactSyncLogger").contactSyncLogger.createEventContext({
          syncType: o("WAWebContactSyncLogger").getSyncTypeString(
            "interactive",
            "query",
          ),
          requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN
            .BOT_REQUEST,
          requestedCount: e.length,
          protocols: t.protocols,
        }),
        a;
      try {
        a = await o(
          "WAWebContactSyncLogger",
        ).contactSyncLogger.executeWithLogging(
          n,
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
      var i = a.error.all || a.error.status;
      if (i)
        throw (
          o("WAWebContactSyncLogger").contactSyncLogger.logFailure(
            n,
            i.errorCode,
            a,
            o("WAWebContactSyncErrorCodes").BOT_PROFILE,
          ),
          new (o("WAWebBackendErrors").ServerStatusCodeError)(
            i.errorCode,
            i.errorText,
          )
        );
      var l = a.list;
      if (!l.length) {
        var s = e.map(function (e) {
          return e.id.toString();
        });
        return (
          o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose(["Bot ids ", ""])),
              s.join(", "),
            )
            .sendLogs("noStatusDataForBots"),
          o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(n, a),
          Promise.reject(r("err")("no status data returned for user"))
        );
      }
      return (
        o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(n, a),
        l.map(function (e) {
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
    }
    l.requestBotProfiles = d;
  },
  98,
);
