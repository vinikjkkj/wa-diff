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
          var t,
            n =
              e.isCag === !0 || e.isAnnouncementGroup === !0
                ? []
                : (t = e.groupAgentParticipants) != null
                  ? t
                  : [],
            r = n.length === 0 ? [] : yield m(n);
          return {
            configuredGroupAgentParticipants: n,
            resolvedGroupAgentParticipants: r,
          };
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
          if (e.length === 0) return [];
          var t = yield C(e);
          if (t == null) return [];
          var n = t.some(y),
            r = n && o("WAWebBotTos").hasAcceptedMuseGroupTos();
          return (
            o("WAWebBotTos").registerBotTosRequirements(
              t.flatMap(function (e) {
                var t;
                return e == null || y(e)
                  ? []
                  : (t = e.groupTosRequirements) != null
                    ? t
                    : [];
              }),
            ),
            e.filter(function (e, n) {
              var a = t[n];
              if (a == null || y(a)) return r;
              var i = a.groupTosRequirements;
              return i == null || o("WAWebBotTos").hasAcceptedBlockingBotTos(i);
            })
          );
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length === 0) return !1;
          var t = yield C(e);
          return t != null && t.some(y);
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
          var n = yield C([e]);
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
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return (
        (e == null ? void 0 : e.product) == null ||
        o("WAWebBotProduct").usesMuseGroupTosNotice(e.product)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
        b.apply(this, arguments)
      );
    }
    ((l.resolveGroupAgentParticipants = s),
      (l.resolveGroupAgentFanoutForGroupSend = c),
      (l.resolveGroupAgentFanoutParticipants = m),
      (l.hasMuseNoticeGroupAgent = _),
      (l.isGroupAgentProfile = g));
  },
  98,
);
