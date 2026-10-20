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
    var e, s, u, c, d, m;
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return e.length === 0 ? [] : f(e);
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = y(e);
          if (t.length === 0) return h(e.length);
          var a = t.map(function (e) {
              return e.fbid;
            }),
            i;
          try {
            i = yield o("WAWebFetchBotProfilesGQL").fetchBotProfilesGQL(a);
          } catch (e) {
            throw (
              o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[requestBotProfiles] GQL fetch threw",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("bot-profile-gql-fetch-exception"),
              e
            );
          }
          if (i.type === "canonical-unavailable")
            return (
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[requestBotProfiles] canonical session unavailable",
                  ])),
              ),
              (m || (m = n("Promise"))).reject(
                r("err")("canonical session unavailable"),
              )
            );
          if (i.type !== "success")
            throw (
              o("WALogger")
                .WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[requestBotProfiles] GQL fetch failed",
                    ])),
                )
                .sendLogs("bot-profile-gql-fetch-failed", { sampling: 0.01 }),
              i.type === "graphql-error"
                ? i.error
                : r("err")("bot profile GQL fetch failed")
            );
          var l = C(t, i.value);
          return l.length === 0 ? h(e.length) : l;
        })),
        g.apply(this, arguments)
      );
    }
    function h(t) {
      return (
        t === 1
          ? o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[requestBotProfiles] no profile for the requested bot",
                ])),
            )
          : o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[requestBotProfiles] no profile for any requested bot",
                  ])),
              )
              .sendLogs("bot-profile-no-status-data"),
        (m || (m = n("Promise"))).reject(
          r("err")("no status data returned for user"),
        )
      );
    }
    function y(e) {
      var t = [];
      for (var n of e) {
        var r = S(n.id, n.personaId);
        r != null &&
          r !== "" &&
          t.push({ fbid: r, id: n.id, isDefault: n.isDefault });
      }
      return t;
    }
    function C(e, t) {
      var n = new Map(
          t.map(function (e) {
            return [e.personaId, e];
          }),
        ),
        r = [];
      for (var o of e) {
        var a = n.get(o.fbid);
        a != null &&
          r.push(b({ gqlProfile: a, isDefault: o.isDefault, wid: o.id }));
      }
      return r;
    }
    function b(e) {
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
        posingAsProfessional: v(t.posingAsProfessional),
      };
    }
    function v(e) {
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
    function S(e, t) {
      if (t != null && t !== "") {
        var n = t.indexOf("$"),
          r = n === -1 ? t : t.substring(0, n);
        return r !== "" ? r : null;
      }
      return e.isFbidBot() ? e.user : null;
    }
    l.requestBotProfiles = p;
  },
  98,
);
