__d(
  "WAWebDebugHatch",
  [
    "Promise",
    "WALogger",
    "WAWebHandleHatchMetadataSync",
    "WAWebHatchApprovalDebug",
    "WAWebHatchApprovalDialog.react",
    "WAWebHatchLinkedStatusManager",
    "WAWebHatchPayloadDebugStore",
    "WDSDialogBridge",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = c || (c = o("react")),
      m = "hitl.approval_record",
      p = [
        {
          target: "Gmail",
          action: "move emails to trash",
          summary: "move the latest email to your Gmail trash folder",
          payloadType: "connector",
          detailLabel: "Mailbox",
          detailValue: "Inbox",
        },
        {
          target: "Google Docs",
          action: "create documents",
          summary: "create a new Google Doc",
          payloadType: "connector",
          detailLabel: "Document",
          detailValue: "Untitled document",
        },
        {
          target: "Google Calendar",
          action: "create events",
          summary: "add a 30-minute event to your calendar",
          payloadType: "connector",
          detailLabel: "When",
          detailValue: "Tomorrow, 10:00\u201310:30",
        },
        {
          target: "Google Drive",
          action: "update files",
          summary: "move a file to your Drive trash",
          payloadType: "connector",
          detailLabel: "File",
          detailValue: "quarterly-plan.pdf",
        },
        {
          target: "Google Sheets",
          action: "update spreadsheets",
          summary: "append a row to a tracking spreadsheet",
          payloadType: "connector",
          detailLabel: "Sheet",
          detailValue: "Tracking / Q3",
        },
        {
          target: "walla.co.il",
          action: "access walla.co.il",
          summary: "fetch the walla.co.il homepage so Hatch can summarize it",
          payloadType: "network",
          detailLabel: "URL",
          detailValue: "https://walla.co.il",
        },
      ],
      _ = 20;
    function f(e) {
      var t = p[e % p.length],
        n = e + 1;
      return {
        approvalId: o("WAWebHatchApprovalDebug").nextDebugApprovalId(),
        permissionQuestion:
          "#" + n + ": Allow {assistant} to " + t.action + "?",
        purposeSummary: "Task #" + n + " \xB7 " + t.target + ": " + t.summary,
        richExplanation:
          "You asked Hatch to " +
          t.summary +
          ". This is sample approval #" +
          n +
          ", injected to exercise the approval UI.",
        payloadType: t.payloadType,
        detailLabel: t.detailLabel,
        detailValue: t.detailValue,
      };
    }
    function g() {
      return r("WAWebHatchPayloadDebugStore").getRecords();
    }
    g.doc =
      "List the Hatch AIMetadataOperation payloads captured this session (inbound events/responses, outbound reqs) with their raw envelope, decoded form, and timestamps";
    function h() {
      r("WAWebHatchPayloadDebugStore").clear();
    }
    h.doc = "Clear the captured Hatch AIMetadataOperation payload list";
    var y = [
      { kind: "allow_once", labelText: "Allow once", alwaysScope: "" },
      { kind: "allow_always", labelText: "Always allow", alwaysScope: "" },
      { kind: "deny", labelText: "Deny", alwaysScope: "" },
    ];
    function C() {
      o("WDSDialogBridge").openWDSDialog(
        d.jsx(r("WAWebHatchApprovalDialog.react"), {
          decisionOptions: y,
          description: "Create an email draft to xyz@meta.com",
          isConnector: !0,
          onDecide: function (n) {
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[debugHatch] Hatch approval option selected: ",
                  "",
                ])),
              n.kind,
            ),
              o("WDSDialogBridge").closeWDSDialog());
          },
          onDismiss: o("WDSDialogBridge").closeWDSDialog,
          summary: d.jsx("span", {
            children: "Hatch wants to draft an email in Gmail",
          }),
        }),
      );
    }
    ((C.doc = "Opens the Hatch approval options dialog"),
      (C.paramsToExecute = []));
    function b(e) {
      e === void 0 && (e = 3);
      var t = Math.max(1, Math.min(e, _));
      return Array.from({ length: t }, function (e, t) {
        var n = f(t),
          r = {
            type: "event",
            requestId: null,
            event: {
              seq: null,
              timestamp: null,
              index: m,
              opKey: m,
              operation: "SET",
              payload: {
                lifecycle: "pending",
                record: {
                  approval_id: n.approvalId,
                  display: {
                    permission_question: { text: n.permissionQuestion },
                    purpose_summary: n.purposeSummary,
                    rich_explanation: n.richExplanation,
                    detail_rows: [
                      { label: n.detailLabel, value: n.detailValue },
                    ],
                    presentation_kind: "generic",
                  },
                  payload: { type: n.payloadType },
                  decision_options: [
                    { kind: "allow_once", label_text: "Allow once" },
                    {
                      kind: "allow_always",
                      label_text: "Always allow",
                      label: { scope: "destination_domain" },
                    },
                    { kind: "deny", label_text: "Deny" },
                  ],
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
    ((b.doc =
      "Inject N (1-20, default 3) synthetic HITL approvals as pending requests \u2014 pass a count to test the single-approval path, the multi-approval review dialog, and its scrolling with a long list"),
      (b.paramsToExecute = [3]));
    function v(e) {
      return o("WAWebHatchApprovalDebug").debugInjectHatchApprovalRequest(e);
    }
    v.doc =
      "Inject a synthetic Hatch HITL approval request through the real decode -> store -> UI pipeline (open a Hatch chat to see the composer swap to the approval bar). Returns the approvalId.";
    function S(e) {
      return o("WAWebHatchApprovalDebug").debugInjectHatchCheckout(e);
    }
    S.doc =
      "Inject a synthetic checkout approval: hatchInjectCheckout({kind, cards, items, funding}). kind: 'browser' (default) or 'shopify'. cards (default 2): 0 for no wallet and no funding card, 1 for the read-only payment details, 2+ for the wallet picker, 4+ to split it into two wallets; 10+ to push it past the height it scrolls at; max 24. items (default 3): Shopify cart size, ignored for a browser checkout; 20+ to scroll the cart, max 60. funding: 'offered' (default) funds the order with the first offered card, 'unmatched' funds it with one the wallet does not contain, so the picker opens with nothing ticked. Returns the approvalId for hatchResolveApproval.";
    function R(e) {
      return o("WAWebHatchApprovalDebug").debugInjectHatchNotification(e);
    }
    R.doc =
      "Inject a synthetic Hatch channel notification through the real decode -> bus -> banner pipeline: hatchInjectNotification({subjectId, deduplicationKey, title, body, notificationType, expiresAtMs, withApproval}). Every field is optional; both ids default to a fresh value per call, so repeated calls do not read as repeats of each other. Pass a deduplicationKey you have already used to see a repeat suppressed, or reuse a subjectId under a fresh key to see one approval re-raised. withApproval also injects a matching pending approval, so the banner has a card to open. Nothing appears if the banner is suppressed \u2014 the usual reasons are the Hatch chat being on screen, muted, archived or absent, notifications being off for it, and ai_hatch_approval_notification_enabled being off; `hatch-approval-notif:` console lines say which. notificationType other than 'approval_request' exercises the drop path; expiresAtMs: 1 exercises the expired path. Returns the subjectId.";
    function L(e) {
      o("WAWebHatchApprovalDebug").debugResolveHatchApproval(e);
    }
    L.doc =
      "Resolve a pending Hatch HITL approval (synthetic decision echo) by id, clearing the approval bar";
    function E(e) {
      e === void 0 && (e = !0);
      var t = e
        ? {
            hasChannel: !0,
            isPaired: !0,
            status: "ACTIVE",
            channelFbid: "debug-hatch-channel",
          }
        : { hasChannel: !1, isPaired: !1, status: null, channelFbid: null };
      return (
        r("WAWebHatchLinkedStatusManager").registerFetcher(function () {
          return (u || (u = n("Promise"))).resolve(t);
        }),
        r("WAWebHatchLinkedStatusManager").fetchAndUpdateStatus(),
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[debugHatch] pinned Hatch linked status to ",
              "",
            ])),
          String(e),
        ),
        t
      );
    }
    ((E.doc =
      "Pin the Hatch linked status: hatchSetLinked(true) reports an ACTIVE paired channel, hatchSetLinked(false) reports none. Notifies subscribers, so the composer and the disconnect button update without a reload. Holds across later re-fetches, but only until the backend restarts (a 515/516 stream-error reconnect re-registers the real fetcher) \u2014 and a fetch already in flight when you call this can still land after it. Call it again to re-pin."),
      (E.paramsToExecute = [!0]));
    function k() {
      var e;
      return {
        isKnownLinked: (e = r("WAWebHatchLinkedStatusManager")).isKnownLinked(),
        isLinked: e.isLinked(),
        isOptimisticallyUnlinked: e.isOptimisticallyUnlinked(),
        status: e.getLinkedStatus(),
      };
    }
    ((k.doc =
      "Report the Hatch linked state: the fetched status plus what the three readers make of it. `isLinked` fails open and answers true while the status is still unknown \u2014 the composer and the disconnect button read it. `isKnownLinked` fails closed and gates the channel.bootstrap send. `isOptimisticallyUnlinked` is true between a local unlink and the next fetch, and only the disconnect button reads it."),
      (k.paramsToExecute = []));
    var I = {
      hatchClearPayloads: h,
      hatchLinkedStatus: k,
      hatchSetLinked: E,
      hatchInjectApproval: v,
      hatchInjectCheckout: S,
      hatchInjectNotification: R,
      hatchPayloads: g,
      hatchResolveApproval: L,
      injectHatchApprovals: b,
      openHatchApprovalDialog: C,
    };
    l.default = I;
  },
  98,
);
