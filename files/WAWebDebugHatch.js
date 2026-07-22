__d(
  "WAWebDebugHatch",
  [
    "WALogger",
    "WAWebHandleHatchMetadataSync",
    "WAWebHatchApprovalDebug",
    "WAWebHatchApprovalDialog.react",
    "WAWebHatchPayloadDebugStore",
    "WDSDialogBridge",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = "hitl.approval",
      d = [
        {
          displayName: "Gmail",
          actionLabel: "Move emails to trash",
          summary: "move the latest email to your Gmail trash folder",
        },
        {
          displayName: "Google Docs",
          actionLabel: "Create documents",
          summary: "create a new Google Doc",
        },
        {
          displayName: "Google Calendar",
          actionLabel: "Create events",
          summary: "add a 30-minute event to your calendar",
        },
        {
          displayName: "Google Drive",
          actionLabel: "Update files",
          summary: "move a file to your Drive trash",
        },
        {
          displayName: "Google Sheets",
          actionLabel: "Update spreadsheets",
          summary: "append a row to a tracking spreadsheet",
        },
        {
          displayName: "walla.co.il",
          actionLabel: "Open website",
          summary: "fetch the walla.co.il homepage so Hatch can summarize it",
          scheme: "https",
          host: "walla.co.il",
          path: "walla.co.il:443",
        },
      ],
      m = 20;
    function p(e) {
      var t = d[e % d.length],
        n = e + 1;
      return {
        approvalId: "debug-approval-" + n,
        reason:
          "#" +
          n +
          ': Allow Hatch to perform "' +
          t.actionLabel +
          '" in ' +
          t.displayName +
          "?",
        shortExplanation: "Task #" + n + ": " + t.summary,
        richExplanation:
          "You asked Hatch to " +
          t.summary +
          ". This is sample approval #" +
          n +
          ", injected to exercise the approval UI.",
        displayName: t.displayName,
        actionLabel: t.actionLabel,
        payloadPreview:
          '{\n  "task": ' +
          n +
          ',\n  "action": "' +
          t.actionLabel +
          '",\n  "service": "' +
          t.displayName +
          '"\n}',
        scheme: t.scheme,
        host: t.host,
        path: t.path,
      };
    }
    function _() {
      return r("WAWebHatchPayloadDebugStore").getRecords();
    }
    _.doc =
      "List the Hatch AIMetadataOperation payloads captured this session (inbound events/responses, outbound reqs) with their raw envelope, decoded form, and timestamps";
    function f() {
      r("WAWebHatchPayloadDebugStore").clear();
    }
    f.doc = "Clear the captured Hatch AIMetadataOperation payload list";
    function g() {
      o("WDSDialogBridge").openWDSDialog(
        u.jsx(r("WAWebHatchApprovalDialog.react"), {
          richDescription: "Create an email draft to xyz@meta.com",
          title: "Hatch wants to use draft email from Gmail",
          onConfirm: function (n) {
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[debugHatch] Hatch approval option selected: ",
                  "",
                ])),
              String(n),
            ),
              o("WDSDialogBridge").closeWDSDialog());
          },
          onDismiss: o("WDSDialogBridge").closeWDSDialog,
        }),
      );
    }
    ((g.doc = "Opens the Hatch approval options dialog"),
      (g.paramsToExecute = []));
    function h(e) {
      e === void 0 && (e = 3);
      var t = Math.max(1, Math.min(e, m));
      return Array.from({ length: t }, function (e, t) {
        var n = p(t),
          r = {
            type: "event",
            requestId: null,
            event: {
              seq: null,
              timestamp: null,
              index: c,
              opKey: c,
              operation: "SET",
              payload: {
                approval: {
                  approval_id: n.approvalId,
                  reason: n.reason,
                  short_explanation: n.shortExplanation,
                  rich_explanation: n.richExplanation,
                  display_name: n.displayName,
                  action_label: n.actionLabel,
                  payload_preview: n.payloadPreview,
                  scheme: n.scheme,
                  host: n.host,
                  path: n.path,
                },
              },
              sessionId: null,
            },
          };
        return (
          o("WAWebHandleHatchMetadataSync").handleHatchMetadataSync(
            r,
            "debug-" + n.approvalId,
          ),
          n.approvalId
        );
      });
    }
    ((h.doc =
      "Inject N (1-20, default 3) synthetic HITL approvals as pending requests \u2014 pass a count to test the single-approval path, the multi-approval review dialog, and its scrolling with a long list"),
      (h.paramsToExecute = [3]));
    function y(e) {
      return o("WAWebHatchApprovalDebug").debugInjectHatchApprovalRequest(e);
    }
    y.doc =
      "Inject a synthetic Hatch HITL approval request through the real decode -> store -> UI pipeline (open a Hatch chat to see the composer swap to the approval bar). Returns the approvalId.";
    function C(e) {
      o("WAWebHatchApprovalDebug").debugResolveHatchApproval(e);
    }
    C.doc =
      "Resolve a pending Hatch HITL approval (synthetic decision echo) by id, clearing the approval bar";
    var b = {
      hatchClearPayloads: f,
      hatchInjectApproval: y,
      hatchPayloads: _,
      hatchResolveApproval: C,
      injectHatchApprovals: h,
      openHatchApprovalDialog: g,
    };
    l.default = b;
  },
  98,
);
