__d(
  "WAWebChatListAiStatusFilterPills",
  [
    "fbt",
    "WAWebBizAiAgentGating",
    "WAWebBizAiAgentStatusUtils",
    "WAWebChatListAiStatusFilterPills.stylex",
    "WAWebChatSearchFilters",
    "WAWebLabelCollection",
    "WAWebListIcon.react",
    "WAWebListUtils",
    "WAWebMobilePlatforms",
    "WAWebSchemaLabel",
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
      if (!o("WAWebMobilePlatforms").isSMB()) return [];
      if (!o("WAWebBizAiAgentGating").isAiRespondingChipEnabled()) return [];
      if (!o("WAWebBizAiAgentStatusUtils").hasOnboardedAiAgent()) return [];
      var e = [];
      return (
        p(o("WAWebSchemaLabel").ListType.AI_HANDOFF) || e.push(c),
        p(o("WAWebSchemaLabel").ListType.AI_RESPONDING) || e.push(d),
        e
      );
    }
    function p(e) {
      return o("WAWebLabelCollection")
        .LabelCollection.toArray()
        .some(function (t) {
          return t.type === e && t.isActive === !1;
        });
    }
    function _(e) {
      return (
        e === o("WAWebChatSearchFilters").SearchFilters.AI_HANDOFF ||
        e === o("WAWebChatSearchFilters").SearchFilters.AI_RESPONDING
      );
    }
    function f(e, t) {
      var n,
        r =
          t === o("WAWebSchemaLabel").ListType.AI_HANDOFF
            ? o("WAWebChatSearchFilters").SearchFilters.AI_HANDOFF
            : t === o("WAWebSchemaLabel").ListType.AI_RESPONDING
              ? o("WAWebChatSearchFilters").SearchFilters.AI_RESPONDING
              : null;
      return r == null
        ? null
        : (n = e.find(function (e) {
              return e.filter === r;
            })) != null
          ? n
          : null;
    }
    function g(e, t, n) {
      var r = new Set();
      for (var o of n) {
        var a = f(t, o);
        a != null && r.add(a);
      }
      return r.size === 0
        ? e
        : e.filter(function (e) {
            return !r.has(e);
          });
    }
    function h(e) {
      return e === o("WAWebChatSearchFilters").SearchFilters.AI_HANDOFF
        ? o("WAWebChatListAiStatusFilterPills.stylex").aiStatusFilterDotStyles
            .ai_handoff
        : e === o("WAWebChatSearchFilters").SearchFilters.AI_RESPONDING
          ? o("WAWebChatListAiStatusFilterPills.stylex").aiStatusFilterDotStyles
              .ai_responding
          : null;
    }
    function y(e) {
      return _(e.filter)
        ? u.jsx(r("WAWebListIcon.react"), { size: 10, xstyle: h(e.filter) })
        : o("WAWebListUtils").shouldShowListIcon(e.listType, e.color)
          ? u.jsx(r("WAWebListIcon.react"), { color: e.color, size: 10 })
          : null;
    }
    ((l.getAiStatusFilterPills = m),
      (l.isAiStatusFilter = _),
      (l.getAiPillForListType = f),
      (l.withoutRelocatedAiPills = g),
      (l.renderPillStartIcon = y));
  },
  226,
);
