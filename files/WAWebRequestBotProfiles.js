__d(
  "WAWebRequestBotProfiles",
  [
    "Promise",
    "WALogger",
    "WAWebBotProfileCategory",
    "WAWebBotTypes",
    "WAWebFetchBotProfilesGQL",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return e.length === 0 ? [] : m(e);
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
          var a = _(t);
          if (a.length === 0)
            return (u || (u = n("Promise"))).reject(
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
          var c = f(a, l.value);
          return c.length === 0
            ? (u || (u = n("Promise"))).reject(
                r("err")("no status data returned for user"),
              )
            : c;
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      var t = [];
      for (var n of e) {
        var r = y(n.id, n.personaId);
        r != null &&
          r !== "" &&
          t.push({ fbid: r, id: n.id, isDefault: n.isDefault });
      }
      return t;
    }
    function f(e, t) {
      var n = new Map(
          t.map(function (e) {
            return [e.personaId, e];
          }),
        ),
        r = [];
      for (var o of e) {
        var a = n.get(o.fbid);
        a != null &&
          r.push(g({ gqlProfile: a, isDefault: o.isDefault, wid: o.id }));
      }
      return r;
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
    l.requestBotProfiles = c;
  },
  98,
);
