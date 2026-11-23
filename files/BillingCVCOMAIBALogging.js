__d(
  "BillingCVCOMAIBALogging",
  ["BillingCVCOMAIBATelemetryUUID"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      try {
        return r("BillingCVCOMAIBATelemetryUUID")();
      } catch (e) {
        return;
      }
    }
    function s(e, t) {
      return e === "CODE_ENTRY"
        ? "cvco_code_entry_help"
        : t === "PAYMENT_METHOD_UNVERIFIABLE"
          ? "cvco_terminal_pm_unverifiable"
          : t === "PROACTIVE_CVCO_3DS_RETRY"
            ? "cvco_terminal_proactive_3ds_retry"
            : t === "PROACTIVE_CVCO_ATTEMPTS_EXCEEDED"
              ? "cvco_terminal_proactive_attempts_exceeded"
              : t === "PROACTIVE_CVCO_SOFT_DESCRIPTOR_FAILED"
                ? "cvco_terminal_proactive_sdc_failed"
                : t === "PROACTIVE_CVCO_VERIFICATION_FAILED"
                  ? "cvco_terminal_proactive_verification_failed"
                  : t === "SFI_3DS_FAILURE_SDC_FALLBACK_ALLOWED"
                    ? "cvco_terminal_3ds_sdc_fallback_allowed"
                    : t === "SFI_3DS_FAILURE_SDC_FALLBACK_BLOCKED"
                      ? "cvco_terminal_3ds_sdc_fallback_blocked"
                      : t === "SFI_3DS_RETRY"
                        ? "cvco_terminal_sfi_3ds_retry"
                        : t === "VERIFICATION_CODE_SEND_FAILED"
                          ? "cvco_terminal_send_failed"
                          : t === "VERIFICATION_ATTEMPTS_EXCEEDED"
                            ? "cvco_terminal_attempts_exceeded"
                            : null;
    }
    function u(e, t) {
      try {
        if (e == null) return;
        var n = {
          entrypoint_tag: t.entrypointTag,
          funnel_milestone: t.milestone,
        };
        (t.milestone === "conversation_created" &&
          t.conversationID != null &&
          t.conversationID !== "" &&
          (n.conversation_id = t.conversationID),
          t.activationType != null && (n.activation_type = t.activationType),
          t.arm != null && (n.arm = t.arm),
          t.attemptNumber != null &&
            (n.attempt_number = String(t.attemptNumber)),
          t.failureReason != null && (n.failure_reason = t.failureReason),
          (n.interaction_id = t.interactionID),
          t.panelState != null && (n.panel_state = t.panelState),
          (t.milestone === "activation_attempt" ||
            t.milestone === "panel_open") &&
            t.routingLaunchStatus != null &&
            (n.routing_launch_status = t.routingLaunchStatus));
        var r =
          t.milestone === "activation_attempt"
            ? {
                event_action: "activate",
                event_result: "init",
                event_side: "client",
              }
            : t.milestone === "activation_timeout"
              ? {
                  event_action: "open",
                  event_result: "init",
                  event_side: "client",
                }
              : t.milestone === "conversation_created"
                ? {
                    event_action: "create",
                    event_result: "success",
                    event_side: "server",
                  }
                : t.milestone === "cta_clicked"
                  ? {
                      event_action: "click",
                      event_result: "atomic",
                      event_side: "user",
                    }
                  : t.milestone === "cta_rendered"
                    ? {
                        event_action: "render",
                        event_result: "display",
                        event_side: "client",
                      }
                    : t.milestone === "legacy_support_opened"
                      ? {
                          event_action: "click",
                          event_result: "success",
                          event_side: "client",
                        }
                      : t.milestone === "panel_open"
                        ? {
                            event_action: "open",
                            event_result:
                              t.result === "cancel"
                                ? "cancel"
                                : t.result === "fail"
                                  ? "fail"
                                  : "success",
                            event_side: "client",
                          }
                        : (function () {
                            throw Error(
                              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                t.milestone,
                            );
                          })();
        e.logEvent(
          babelHelpers.extends({}, r, {
            extra_data: n,
            target_name: "maiba_cvco_support",
          }),
        );
      } catch (e) {}
    }
    ((l.createCVCOMAIBAFunnelInteractionID = e),
      (l.getCVCOMAIBAEntrypointTag = s),
      (l.logCVCOMAIBAFunnelEvent = u));
  },
  98,
);
