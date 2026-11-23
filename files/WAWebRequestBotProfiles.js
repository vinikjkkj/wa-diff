__d(
  "WAWebRequestBotProfiles",
  [
    "WALogger",
    "WAWebBotProfileCategory",
    "WAWebBotTypes",
    "WAWebFetchBotProfilesGQL",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    async function m(e) {
      return e.length === 0 ? [] : p(e);
    }
    async function p(t) {
      var n = f(t);
      if (n.length === 0) return _(t.length);
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
      if (i.type === "canonical-unavailable")
        return (
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[requestBotProfiles] canonical session unavailable",
              ])),
          ),
          Promise.reject(r("err")("canonical session unavailable"))
        );
      if (i.type !== "success")
        throw (
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[requestBotProfiles] GQL fetch failed",
                ])),
            )
            .sendLogs("bot-profile-gql-fetch-failed", { sampling: 0.01 }),
          i.type === "graphql-error"
            ? i.error
            : r("err")("bot profile GQL fetch failed")
        );
      var l = g(n, i.value);
      return l.length === 0 ? _(t.length) : l;
    }
    function _(e) {
      return (
        e === 1
          ? o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[requestBotProfiles] no profile for the requested bot",
                ])),
            )
          : o("WALogger")
              .WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[requestBotProfiles] no profile for any requested bot",
                  ])),
              )
              .sendLogs("bot-profile-no-status-data"),
        Promise.reject(r("err")("no status data returned for user"))
      );
    }
    function f(e) {
      var t = [];
      for (var n of e) {
        var r = C(n.id, n.personaId);
        r != null &&
          r !== "" &&
          t.push({ fbid: r, id: n.id, isDefault: n.isDefault });
      }
      return t;
    }
    function g(e, t) {
      var n = new Map(
          t.map(function (e) {
            return [e.personaId, e];
          }),
        ),
        r = [];
      for (var o of e) {
        var a = n.get(o.fbid);
        a != null &&
          r.push(h({ gqlProfile: a, isDefault: o.isDefault, wid: o.id }));
      }
      return r;
    }
    function h(e) {
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
        posingAsProfessional: y(t.posingAsProfessional),
      };
    }
    function y(e) {
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
    function C(e, t) {
      if (t != null && t !== "") {
        var n = t.indexOf("$"),
          r = n === -1 ? t : t.substring(0, n);
        return r !== "" ? r : null;
      }
      return e.isFbidBot() ? e.user : null;
    }
    l.requestBotProfiles = m;
  },
  98,
);
