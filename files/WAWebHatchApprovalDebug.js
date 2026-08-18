__d(
  "WAWebHatchApprovalDebug",
  ["WAWebHandleHatchMetadataSync"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "hitl.approval_record",
      s = 1;
    function u(e) {
      var t,
        n =
          (t = e == null ? void 0 : e.approvalId) != null
            ? t
            : "debug-approval-" + s++;
      return (d(n, null, e), n);
    }
    function c(e, t) {
      (t === void 0 && (t = "allow_once"), d(e, t));
    }
    function d(t, n, r) {
      var a,
        i,
        l,
        s = {
          type: "event",
          requestId: null,
          event: {
            seq: null,
            timestamp: null,
            index: e,
            opKey: e,
            operation: "SET",
            payload: {
              lifecycle: n != null ? "decided" : "pending",
              record: {
                approval_id: t,
                decision: n,
                display: {
                  permission_question: {
                    text:
                      (a = r == null ? void 0 : r.permissionQuestion) != null
                        ? a
                        : "{assistant} wants to send an email in Gmail",
                  },
                  purpose_summary:
                    (i = r == null ? void 0 : r.purposeSummary) != null
                      ? i
                      : "Send an email on your behalf",
                  rich_explanation:
                    (l = r == null ? void 0 : r.richExplanation) != null
                      ? l
                      : "Create an email draft to your teammate",
                  presentation_kind: "generic",
                },
                payload: { type: "connector" },
                decision_options: [
                  { kind: "allow_once", label_text: "Allow once" },
                  { kind: "allow_always", label_text: "Always allow" },
                  { kind: "deny", label_text: "Deny" },
                ],
              },
            },
            sessionId: null,
          },
        };
      o("WAWebHandleHatchMetadataSync").handleHatchMetadataSync(
        s,
        "debug-" + t,
      );
    }
    ((l.debugInjectHatchApprovalRequest = u),
      (l.debugResolveHatchApproval = c));
  },
  98,
);
