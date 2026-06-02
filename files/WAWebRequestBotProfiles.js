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
          : g(e);
    }
    async function m(t) {
      var n = [];
      for (var r of t) {
        var a = f(r.id, r.personaId);
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
        l = await o("WAWebFetchBotProfilesGQL").fetchBotProfilesGQL(i);
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
          c.push(p({ gqlProfile: m, isDefault: d.isDefault, wid: d.id }));
      }
      return c;
    }
    function p(e) {
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
        posingAsProfessional: _(t.posingAsProfessional),
      };
    }
    function _(e) {
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
    function f(e, t) {
      if (t != null && t !== "") {
        var n = t.indexOf("$"),
          r = n === -1 ? t : t.substring(0, n);
        return r !== "" ? r : null;
      }
      return e.isFbidBot() ? e.user : null;
    }
    async function g(e) {
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
