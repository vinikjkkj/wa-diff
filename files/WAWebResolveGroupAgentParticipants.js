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
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(e) {
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
    }
    async function u(e) {
      var t,
        n =
          e.isCag === !0 || e.isAnnouncementGroup === !0
            ? []
            : (t = e.groupAgentParticipants) != null
              ? t
              : [],
        r = n.length === 0 ? [] : await c(n);
      return {
        configuredGroupAgentParticipants: n,
        resolvedGroupAgentParticipants: r,
      };
    }
    async function c(e) {
      if (e.length === 0) return [];
      var t = await _(e);
      if (t == null) return [];
      var n = t.some(p),
        r = n && o("WAWebBotTos").hasAcceptedMuseGroupTos();
      return (
        o("WAWebBotTos").registerBotTosRequirements(
          t.flatMap(function (e) {
            var t;
            return e == null || p(e)
              ? []
              : (t = e.groupTosRequirements) != null
                ? t
                : [];
          }),
        ),
        e.filter(function (e, n) {
          var a = t[n];
          if (a == null || p(a)) return r;
          var i = a.groupTosRequirements;
          return i == null || o("WAWebBotTos").hasAcceptedBlockingBotTos(i);
        })
      );
    }
    async function d(e) {
      if (e.length === 0) return !1;
      var t = await _(e);
      return t != null && t.some(p);
    }
    async function m(e) {
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
      var n = await _([e]);
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
    }
    function p(e) {
      return (
        (e == null ? void 0 : e.product) == null ||
        o("WAWebBotProduct").usesMuseGroupTosNotice(e.product)
      );
    }
    async function _(t) {
      try {
        return await o("WAWebSchemaBotProfile")
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
    }
    ((l.resolveGroupAgentParticipants = s),
      (l.resolveGroupAgentFanoutForGroupSend = u),
      (l.resolveGroupAgentFanoutParticipants = c),
      (l.hasMuseNoticeGroupAgent = d),
      (l.isGroupAgentProfile = m));
  },
  98,
);
