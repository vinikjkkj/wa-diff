__d(
  "WAWebHatchApprovalDebug",
  ["WAWebHandleHatchMetadataSync"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "hitl.approval",
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
        s,
        u,
        c = {
          type: "event",
          requestId: null,
          event: {
            seq: null,
            timestamp: null,
            index: e,
            opKey: e,
            operation: "SET",
            payload: {
              approval: {
                approval_id: t,
                decision: n,
                reason:
                  (a = r == null ? void 0 : r.reason) != null
                    ? a
                    : "Hatch wants to use Gmail",
                short_explanation:
                  (i = r == null ? void 0 : r.shortExplanation) != null
                    ? i
                    : "Send an email on your behalf",
                rich_explanation:
                  (l = r == null ? void 0 : r.richExplanation) != null
                    ? l
                    : "Create an email draft to your teammate",
                display_name:
                  (s = r == null ? void 0 : r.displayName) != null
                    ? s
                    : "Gmail",
                action_label:
                  (u = r == null ? void 0 : r.actionLabel) != null
                    ? u
                    : "Send email",
              },
            },
            sessionId: null,
          },
        };
      o("WAWebHandleHatchMetadataSync").handleHatchMetadataSync(
        c,
        "debug-" + t,
      );
    }
    ((l.debugInjectHatchApprovalRequest = u),
      (l.debugResolveHatchApproval = c));
  },
  98,
);
