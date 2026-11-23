__d(
  "logMAIBAResumeAdEntityActionFunnelEvent",
  ["CurrentUser", "MaibaResumeAdEntityActionFunnelFalcoEvent"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e === "AGENT_CHANGES_BLOCKED"
        ? "agent_changes_blocked"
        : e === "ERROR"
          ? "error"
          : e == null
            ? null
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function s(t, n, o, a) {
      (a === void 0 && (a = {}),
        r("MaibaResumeAdEntityActionFunnelFalcoEvent").log(function () {
          return {
            action_id: a.actionID,
            ad_account_id: a.adAccountID,
            attempt: a.attempt == null ? null : String(a.attempt),
            blockers: a.blockers,
            elapsed_ms: a.elapsedMS == null ? null : String(a.elapsedMS),
            entity_id: a.entityID,
            entity_type: a.entityType,
            event_time_ms: String(Date.now()),
            external_conversation_id: a.externalConversationID,
            is_employee: r("CurrentUser").isEmployee(),
            is_from_history: a.isFromHistory,
            is_test_user: r("CurrentUser").isTestUser(),
            layer: n,
            outcome: o,
            reason: e(a.failureReason),
            result_status: a.resultStatus,
            source_message_otid: a.sourceMessageOTID,
            stage: t,
          };
        }));
    }
    l.logMAIBAResumeAdEntityActionFunnelEvent = s;
  },
  98,
);
