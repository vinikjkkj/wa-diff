__d(
  "WAWebChatListAiStatusFilterPills",
  [
    "fbt",
    "WAWebBizAiAgentGating",
    "WAWebBizAiAgentStatusUtils",
    "WAWebChatListAiStatusFilterPills.stylex",
    "WAWebChatSearchFilters",
    "WAWebListIcon.react",
    "WAWebListUtils",
    "WAWebMobilePlatforms",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        id: "ai-handoff-filter",
        filter: o("WAWebChatSearchFilters").SearchFilters.AI_HANDOFF,
        getLabel: function () {
          return s._(/*BTDS*/ "AI handoff");
        },
        testid: "ai-handoff-filter",
        color: "var(--WDS-secondary-negative)",
        count: 0,
      },
      d = {
        id: "ai-responding-filter",
        filter: o("WAWebChatSearchFilters").SearchFilters.AI_RESPONDING,
        getLabel: function () {
          return s._(/*BTDS*/ "AI responding");
        },
        testid: "ai-responding-filter",
        color: "var(--WDS-secondary-positive)",
        count: 0,
      };
    function m() {
      return o("WAWebMobilePlatforms").isSMB()
        ? o("WAWebBizAiAgentGating").isAiRespondingChipEnabled()
          ? o("WAWebBizAiAgentStatusUtils").hasOnboardedAiAgent()
            ? [c, d]
            : []
          : []
        : [];
    }
    function p(e) {
      return (
        e === o("WAWebChatSearchFilters").SearchFilters.AI_HANDOFF ||
        e === o("WAWebChatSearchFilters").SearchFilters.AI_RESPONDING
      );
    }
    function _(e) {
      return e === o("WAWebChatSearchFilters").SearchFilters.AI_HANDOFF
        ? o("WAWebChatListAiStatusFilterPills.stylex").aiStatusFilterDotStyles
            .ai_handoff
        : e === o("WAWebChatSearchFilters").SearchFilters.AI_RESPONDING
          ? o("WAWebChatListAiStatusFilterPills.stylex").aiStatusFilterDotStyles
              .ai_responding
          : null;
    }
    function f(e) {
      return p(e.filter)
        ? u.jsx(r("WAWebListIcon.react"), { size: 10, xstyle: _(e.filter) })
        : o("WAWebListUtils").shouldShowListIcon(e.listType, e.color)
          ? u.jsx(r("WAWebListIcon.react"), { color: e.color, size: 10 })
          : null;
    }
    ((l.getAiStatusFilterPills = m),
      (l.isAiStatusFilter = p),
      (l.renderPillStartIcon = f));
  },
  226,
);
