__d(
  "WAWebHatchApprovalDebug",
  ["WAWebHandleHatchMetadataSync"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "hitl.approval_record",
      s = 1;
    function u() {
      return "debug-approval-" + s++;
    }
    function c(e) {
      var t,
        n = (t = e == null ? void 0 : e.approvalId) != null ? t : u();
      return (m(n, null, e), n);
    }
    function d(e, t) {
      (t === void 0 && (t = "allow_once"), m(e, t));
    }
    function m(t, n, r) {
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
              record: babelHelpers.extends(
                { approval_id: t },
                n != null ? { decision: n } : null,
                {
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
              ),
            },
            sessionId: null,
          },
        };
      o("WAWebHandleHatchMetadataSync").handleHatchMetadataSync(
        s,
        "debug-" + t,
      );
    }
    ((l.nextDebugApprovalId = u),
      (l.debugInjectHatchApprovalRequest = c),
      (l.debugResolveHatchApproval = d));
  },
  98,
);
