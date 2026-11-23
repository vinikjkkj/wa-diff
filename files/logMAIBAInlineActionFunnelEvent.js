__d(
  "logMAIBAInlineActionFunnelEvent",
  ["CurrentUser", "MaibaAvpmInlineActionFunnelFalcoEvent"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o) {
      (o === void 0 && (o = {}),
        r("MaibaAvpmInlineActionFunnelFalcoEvent").log(function () {
          return {
            action_id: o.actionID,
            action_type: o.actionType,
            ad_account_id: o.adAccountID,
            attempt: o.attempt == null ? null : String(o.attempt),
            bot_response_id: o.botResponseID,
            elapsed_ms: o.elapsedMS == null ? null : String(o.elapsedMS),
            event_time_ms: String(Date.now()),
            external_conversation_id: o.externalConversationID,
            is_employee: r("CurrentUser").isEmployee(),
            is_from_history: o.isFromHistory,
            is_test_user: r("CurrentUser").isTestUser(),
            layer: t,
            outcome: n,
            reason: o.reason,
            source_message_otid: o.sourceMessageOTID,
            stage: e,
          };
        }));
    }
    l.logMAIBAInlineActionFunnelEvent = e;
  },
  98,
);
