__d(
  "WAWebBizAiSmartComposerMode",
  ["WAWebChatGetters", "WAWebProtobufsE2E.pb"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s(
        o("WAWebChatGetters").getCapiThreadControl(e),
        o("WAWebChatGetters").getSuggestedRepliesEnabled(e),
      );
    }
    function s(e, t) {
      return e ===
        o("WAWebProtobufsE2E.pb")
          .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
          .CONTROL_TAKEN
        ? "ai_agent"
        : t === !0
          ? "suggestions"
          : "manual";
    }
    function u(e) {
      return e === "manual"
        ? { status: "MUTED", suggestedRepliesEnabled: !1 }
        : e === "suggestions"
          ? { status: "SUGGESTED_REPLIES", suggestedRepliesEnabled: !0 }
          : e === "ai_agent"
            ? { status: "UNMUTED" }
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    ((l.getSmartComposerMode = e),
      (l.resolveSmartComposerMode = s),
      (l.getStatusForMode = u));
  },
  98,
);
