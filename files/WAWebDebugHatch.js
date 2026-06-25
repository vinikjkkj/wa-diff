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
          approvalId: "connector-40f9a240-c871-4204-b136-fb6d802026cf",
          reason: 'Allow Hatch to perform "Move emails to trash" in Gmail?',
          shortExplanation: "Move the latest email to trash",
          richExplanation:
            "You asked to trash the latest email\u2014the RADAR Bot code-review notification. This will move it to your Gmail trash folder so you can recover it later if needed.",
          displayName: "Gmail",
          actionLabel: "Move emails to trash",
        },
        {
          approvalId: "connector-334ccacd-4013-4fe2-ab2b-65ff49a37bf2",
          reason: 'Allow Hatch to perform "Create documents" in Google Docs?',
          shortExplanation: 'Create a Google Doc called "birds"',
          richExplanation:
            'You asked to create a new Google Doc titled "birds". This will create a blank document in your Google Docs and give it that title.',
          displayName: "Google Docs",
          actionLabel: "Create documents",
        },
        {
          approvalId: "connector-9cabc5f6-ceec-4672-b249-452154d8959c",
          reason: 'Allow Hatch to perform "Update files" in Google Drive?',
          shortExplanation: 'Delete the "birds" Google Doc',
          richExplanation:
            'You asked to delete the "birds" Google Doc that was just created. This will move it to Trash in your Google Drive.',
          displayName: "Google Drive",
          actionLabel: "Update files",
        },
      ];
    function m() {
      return r("WAWebHatchPayloadDebugStore").getRecords();
    }
    m.doc =
      "List the Hatch AIMetadataOperation payloads captured this session (inbound events/responses, outbound reqs) with their raw envelope, decoded form, and timestamps";
    function p() {
      r("WAWebHatchPayloadDebugStore").clear();
    }
    p.doc = "Clear the captured Hatch AIMetadataOperation payload list";
    function _() {
      o("WDSDialogBridge").openWDSDialog(
        u.jsx(r("WAWebHatchApprovalDialog.react"), {
          richDescription: "Create an email draft to xyz@meta.com",
          serviceName: "Gmail",
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
    ((_.doc = "Opens the Hatch approval options dialog"),
      (_.paramsToExecute = []));
    function f(e) {
      e === void 0 && (e = d.length);
      var t = Math.max(1, Math.min(e, d.length));
      return d.slice(0, t).map(function (e) {
        var t = {
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
                approval_id: e.approvalId,
                reason: e.reason,
                short_explanation: e.shortExplanation,
                rich_explanation: e.richExplanation,
                display_name: e.displayName,
                action_label: e.actionLabel,
              },
            },
            sessionId: null,
          },
        };
        return (
          o("WAWebHandleHatchMetadataSync").handleHatchMetadataSync(
            t,
            "debug-" + e.approvalId,
          ),
          e.approvalId
        );
      });
    }
    ((f.doc =
      "Inject N (1-3, default 3) sample HITL approvals (P2384347284) as pending requests \u2014 pass a count to test the single- vs multi-approval review dialog"),
      (f.paramsToExecute = [d.length]));
    function g(e) {
      return o("WAWebHatchApprovalDebug").debugInjectHatchApprovalRequest(e);
    }
    g.doc =
      "Inject a synthetic Hatch HITL approval request through the real decode -> store -> UI pipeline (open a Hatch chat to see the composer swap to the approval bar). Returns the approvalId.";
    function h(e) {
      o("WAWebHatchApprovalDebug").debugResolveHatchApproval(e);
    }
    h.doc =
      "Resolve a pending Hatch HITL approval (synthetic decision echo) by id, clearing the approval bar";
    var y = {
      hatchClearPayloads: p,
      hatchInjectApproval: g,
      hatchPayloads: m,
      hatchResolveApproval: h,
      injectHatchApprovals: f,
      openHatchApprovalDialog: _,
    };
    l.default = y;
  },
  98,
);
