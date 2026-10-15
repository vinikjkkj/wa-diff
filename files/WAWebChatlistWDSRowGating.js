__d(
  "WAWebChatlistWDSRowGating",
  [
    "WAWebBizAiAgentStatusUtils",
    "WAWebChatAssignmentUtils",
    "WAWebFeatureFlagCollection",
    "WAWebFeatureFlagName",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return (
        o("WAWebBizAiAgentStatusUtils").shouldShowTertiaryRowForChat(e) ||
        e.archive === !0 ||
        o("WAWebBizAiAgentStatusUtils").isChatAiEnabled(e) ||
        (o("WAWebChatAssignmentUtils").canAssignChat(e) && t)
      );
    }
    function s(t) {
      var n = [
        e(t.chat, t.chatAssignmentVisibleToUser),
        t.hasTertiary,
        t.isSelectable,
        t.showChatAssignmentIcon,
      ];
      return n.some(Boolean) ? !1 : r("gkx")("22829");
    }
    function u() {
      var e;
      return (
        ((e = o("WAWebFeatureFlagCollection").FeatureFlagCollection.get(
          o("WAWebFeatureFlagName").FeatureFlagName.CHAT_ASSIGNMENT,
        )) == null
          ? void 0
          : e.enabled) === !0
      );
    }
    ((l.chatFallsBackToLegacyCell = e),
      (l.shouldUseWDSPreviewRow = s),
      (l.isChatAssignmentVisibleToUser = u));
  },
  98,
);
