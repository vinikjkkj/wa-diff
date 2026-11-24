__d(
  "WAWebFormatMuseAgentAddText",
  [
    "fbt",
    "WAWebBotGroupGatingUtils",
    "WAWebBotProduct",
    "WAWebBotProfileCollection",
    "WAWebBotUtils",
    "WAWebGroupAgentAddAttribution",
    "WAWebLidMigrationUtils",
    "WAWebSystemMessageGatingUtils",
    "WAWebSystemMessagesUtils",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t,
        n = e.agentClickable,
        r = e.attribution,
        a = e.author,
        i = e.authorClickable,
        l = e.recipients,
        u = l.length === 1 ? l[0] : null;
      if (
        u == null ||
        !o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(u) ||
        !o("WAWebBotGroupGatingUtils").isMuseGroupAgentRenderingEnabled()
      )
        return null;
      var c = o("WAWebBotProfileCollection").BotProfileCollection.get(u);
      if (
        !o("WAWebBotProduct").isMuseAgentProduct(
          u,
          o("WAWebBotProduct").botProductFromServerValue(
            c == null ? void 0 : c.product,
          ),
        )
      )
        return null;
      if (a == null)
        return o(
          "WAWebSystemMessageGatingUtils",
        ).systemMessageTerminalPeriodsEnabled()
          ? s._(/*BTDS*/ "", [s._param("agent_name", n)])
          : s._(/*BTDS*/ "", [s._param("agent_name", n)]);
      var d =
        r ===
          o("WAWebGroupAgentAddAttribution").GroupAgentAddAttribution.OWNER ||
        ((c == null ? void 0 : c.creatorLid) != null &&
          ((t = o("WAWebLidMigrationUtils").toUserLid(a)) == null
            ? void 0
            : t.user) === c.creatorLid);
      return o("WAWebSystemMessagesUtils").isMe(a)
        ? d
          ? (o(
              "WAWebSystemMessageGatingUtils",
            ).systemMessageTerminalPeriodsEnabled() &&
              s._(/*BTDS*/ "", [s._param("agent_name", n)])) ||
            s._(/*BTDS*/ "", [s._param("agent_name", n)])
          : (o(
              "WAWebSystemMessageGatingUtils",
            ).systemMessageTerminalPeriodsEnabled() &&
              s._(/*BTDS*/ "", [s._param("agent_name", n)])) ||
            s._(/*BTDS*/ "", [s._param("agent_name", n)])
        : i == null
          ? null
          : d
            ? (o(
                "WAWebSystemMessageGatingUtils",
              ).systemMessageTerminalPeriodsEnabled() &&
                s._(/*BTDS*/ "", [
                  s._param("owner_name", i),
                  s._param("agent_name", n),
                ])) ||
              s._(/*BTDS*/ "", [
                s._param("owner_name", i),
                s._param("agent_name", n),
              ])
            : (o(
                "WAWebSystemMessageGatingUtils",
              ).systemMessageTerminalPeriodsEnabled() &&
                s._(/*BTDS*/ "", [
                  s._param("user_name", i),
                  s._param("agent_name", n),
                ])) ||
              s._(/*BTDS*/ "", [
                s._param("user_name", i),
                s._param("agent_name", n),
              ]);
    }
    l.formatMuseAgentAddText = e;
  },
  226,
);
