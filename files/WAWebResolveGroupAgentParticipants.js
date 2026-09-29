__d(
  "WAWebResolveGroupAgentParticipants",
  [
    "WALogger",
    "WAWebBotGroupGatingUtils",
    "WAWebBotProduct",
    "WAWebBotStaticProfiles",
    "WAWebBotTos",
    "WAWebBotUtils",
    "WAWebSchemaBotProfile",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e
            .filter(function (e) {
              return e.endsWith("@bot");
            })
            .map(function (e) {
              return o("WAWebWidFactory").createUserWidOrThrow(e);
            })
            .filter(function (e) {
              return (
                !o("WAWebBotUtils").isWidOpenGroupMetaBotFbidWid(e) &&
                !o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e)
              );
            });
          return t.length === 0 ||
            !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
            ? []
            : t;
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length === 0) return [];
          var t = yield f(e);
          return t == null
            ? e
            : (o("WAWebBotTos").registerBotTosRequirements(
                t.flatMap(function (e) {
                  var t;
                  return _(e)
                    ? []
                    : (t = e == null ? void 0 : e.groupTosRequirements) != null
                      ? t
                      : [];
                }),
              ),
              e.filter(function (e, n) {
                var r = t[n];
                if (r == null) return !0;
                if (_(r)) return o("WAWebBotTos").hasAcceptedMuseGroupTos();
                var a = r.groupTosRequirements;
                return (
                  a == null || o("WAWebBotTos").hasAcceptedBlockingBotTos(a)
                );
              }));
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled() ||
            !e.isBot()
          )
            return !1;
          var t = o("WAWebBotStaticProfiles").getStaticBotSupportInput(e);
          if (t != null)
            return o("WAWebBotGroupGatingUtils").isGroupAgent(
              babelHelpers.extends({}, t, { isSynced: !1 }),
              o("WAWebBotGroupGatingUtils").BotGroupContext.GROUP,
            );
          var n = yield f([e]);
          if (n == null) return !1;
          var r = n[0];
          return r == null
            ? !1
            : o("WAWebBotGroupGatingUtils").isGroupAgent(
                {
                  product: r.product,
                  isDeprecated: r.isDeprecated,
                  isDeleted: r.isDeleted,
                  isSynced: !0,
                },
                o("WAWebBotGroupGatingUtils").BotGroupContext.GROUP,
              );
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return (
        o("WAWebBotProduct").botProductFromServerValue(
          e == null ? void 0 : e.product,
        ) === o("WAWebBotProduct").BotProduct.MUSE
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            return yield o("WAWebSchemaBotProfile")
              .getBotProfileTable()
              .bulkGet(
                t.map(function (e) {
                  return e.toString();
                }),
              );
          } catch (t) {
            return (
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[resolveGroupAgentParticipants] bot profile read failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("group-agent-profile-read-failed"),
              null
            );
          }
        })),
        g.apply(this, arguments)
      );
    }
    ((l.resolveGroupAgentParticipants = s),
      (l.resolveGroupAgentFanoutParticipants = c),
      (l.isGroupAgentProfile = m));
  },
  98,
);
