__d(
  "WAWebChatAssignmentUtils",
  [
    "WAWebBizGatingUtils",
    "WAWebFeatureFlagName",
    "WAWebProtobufsE2E.pb",
    "WAWebSubscriptionFeatureFlagActions",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        o("WAWebBizGatingUtils").chatAssignmentEnabled() &&
        o(
          "WAWebSubscriptionFeatureFlagActions",
        ).isSubscriptionFeatureFlagEnabled(
          o("WAWebFeatureFlagName").FeatureFlagName.CHAT_ASSIGNMENT,
        )
      );
    }
    function s(e) {
      return e == null
        ? !1
        : e.every(function (e) {
            return u(e);
          });
    }
    function u(t) {
      return t == null
        ? !1
        : e() &&
            t.capiThreadControl !==
              o("WAWebProtobufsE2E.pb")
                .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
                .CONTROL_TAKEN;
    }
    function c(t) {
      return (
        t !== !0 && o("WAWebBizGatingUtils").chatAssignmentEnabled() && e()
      );
    }
    ((l.canAssignChats = e),
      (l.canAssignAllChats = s),
      (l.canAssignChat = u),
      (l.shouldUseChatAssignmentCTA = c));
  },
  98,
);
