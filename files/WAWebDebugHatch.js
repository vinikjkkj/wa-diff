__d(
  "WAWebDebugHatch",
  [
    "Promise",
    "WALogger",
    "WAWebHandleHatchMetadataSync",
    "WAWebHatchApprovalDebug",
    "WAWebHatchApprovalDialog.react",
    "WAWebHatchLinkedStatusManager",
    "WAWebHatchMinPrimaryVersions",
    "WAWebHatchPayloadDebugStore",
    "WAWebHatchReadinessDebug",
    "WAWebHatchSpacesDebug",
    "WAWebHatchSpacesManager",
    "WAWebMuseDefaultAssistantVariant",
    "WAWebPrimaryVersion",
    "WDSDialogBridge",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = p || (p = o("react")),
      f = "hitl.approval_record",
      g = [
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
      h = 20;
    function y(e) {
      var t = g[e % g.length],
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
    function C() {
      return r("WAWebHatchPayloadDebugStore").getRecords();
    }
    C.doc =
      "List the Hatch AIMetadataOperation payloads captured this session (inbound events/responses, outbound reqs) with their raw envelope, decoded form, and timestamps";
    function b() {
      r("WAWebHatchPayloadDebugStore").clear();
    }
    b.doc = "Clear the captured Hatch AIMetadataOperation payload list";
    var v = [
      { kind: "allow_once", labelText: "Allow once", alwaysScope: "" },
      { kind: "allow_always", labelText: "Always allow", alwaysScope: "" },
      { kind: "deny", labelText: "Deny", alwaysScope: "" },
    ];
    function S() {
      o("WDSDialogBridge").openWDSDialog(
        _.jsx(r("WAWebHatchApprovalDialog.react"), {
          decisionOptions: v,
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
          summary: _.jsx("span", {
            children: "Hatch wants to draft an email in Gmail",
          }),
        }),
      );
    }
    ((S.doc = "Opens the Hatch approval options dialog"),
      (S.paramsToExecute = []));
    function R(e) {
      e === void 0 && (e = 3);
      var t = Math.max(1, Math.min(e, h));
      return Array.from({ length: t }, function (e, t) {
        var n = y(t),
          r = {
            type: "event",
            requestId: null,
            event: {
              seq: null,
              timestamp: null,
              index: f,
              opKey: f,
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
    ((R.doc =
      "Inject N (1-20, default 3) synthetic HITL approvals as pending requests \u2014 pass a count to test the single-approval path, the multi-approval review dialog, and its scrolling with a long list"),
      (R.paramsToExecute = [3]));
    function L(e) {
      return o("WAWebHatchApprovalDebug").debugInjectHatchApprovalRequest(e);
    }
    L.doc =
      "Inject a synthetic Hatch HITL approval request through the real decode -> store -> UI pipeline (open a Hatch chat to see the composer swap to the approval bar). Returns the approvalId.";
    function E(e) {
      return o("WAWebHatchApprovalDebug").debugInjectHatchCheckout(e);
    }
    E.doc =
      "Inject a synthetic checkout approval: hatchInjectCheckout({kind, cards, items, funding}). kind: 'browser' (default) or 'shopify'. cards (default 2): 0 for no wallet and no funding card, 1 for the read-only payment details, 2+ for the wallet picker, 4+ to split it into two wallets; 10+ to push it past the height it scrolls at; max 24. items (default 3): Shopify cart size, ignored for a browser checkout; 20+ to scroll the cart, max 60. funding: 'offered' (default) funds the order with the first offered card, 'unmatched' funds it with one the wallet does not contain, so the picker opens with nothing ticked. Returns the approvalId for hatchResolveApproval.";
    function k(e) {
      return o("WAWebHatchApprovalDebug").debugInjectHatchNotification(e);
    }
    k.doc =
      "Inject a synthetic Hatch channel notification through the real decode -> bus -> banner pipeline: hatchInjectNotification({subjectId, deduplicationKey, title, body, notificationType, expiresAtMs, withApproval}). Every field is optional; both ids default to a fresh value per call, so repeated calls do not read as repeats of each other. Pass a deduplicationKey you have already used to see a repeat suppressed, or reuse a subjectId under a fresh key to see one approval re-raised. withApproval also injects a matching pending approval, so the banner has a card to open. Nothing appears if the banner is suppressed \u2014 the usual reasons are the Hatch chat being on screen, muted, archived or absent, notifications being off for it, and ai_hatch_approval_notification_enabled being off; `hatch-approval-notif:` console lines say which. notificationType other than 'approval_request' exercises the drop path; expiresAtMs: 1 exercises the expired path. Returns the subjectId.";
    function I() {
      return o("WAWebHatchSpacesDebug").debugInjectHatchSpaces();
    }
    ((I.doc =
      "Inject a synthetic Hatch Spaces snapshot through the real decode -> reduce -> manager pipeline. The Library that shows it needs ai_hatch_space_enabled (on dev-web, ?ai_hatch_space_enabled=true). The rows cover a favorite, a Space published on muse.ai, one built but never published, one that needs attention, one still building, and two never opened, so the catalog exercises every state and the full display order. One row declares an icon whose descriptor is synthetic, so it decodes but never downloads. A real snapshot replaces the injected catalog. Read the result with Debug.hatchSpaces(); call Debug.hatchInjectSpaces() again to replace the catalog. Returns the number of rows sent."),
      (I.paramsToExecute = []));
    function T() {
      o("WAWebHatchSpacesDebug").debugClearHatchSpaces();
    }
    ((T.doc =
      "Reset the Hatch Spaces catalog to its state before any snapshot"),
      (T.paramsToExecute = []));
    function D() {
      return r("WAWebHatchSpacesManager").getCatalog();
    }
    ((D.doc =
      "Report the Hatch Spaces catalog the client holds, in display order, with the icon descriptors each row can look itself up in"),
      (D.paramsToExecute = []));
    function x(e) {
      o("WAWebHatchApprovalDebug").debugResolveHatchApproval(e);
    }
    x.doc =
      "Resolve a pending Hatch HITL approval (synthetic decision echo) by id, clearing the approval bar";
    function $(e) {
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
          return (m || (m = n("Promise"))).resolve(t);
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
    (($.doc =
      "hatchSetLinked registers a debug fetcher for later linked-status requests.\nhatchSetLinked(true) returns an ACTIVE paired status.\nhatchSetLinked(false) returns a status with hasChannel and isPaired set to false.\nThe debug fetcher updates the composer and disconnect button after the request resolves.\nA 515 or 516 stream-error reconnect replaces the debug fetcher with the server fetcher.\nRegistering the debug fetcher during an active request invalidates that response and starts a replacement request.\nCalling hatchSetLinked again replaces the debug fetcher with the new return value.\nThe resolved linked or unlinked state is also stored for the connectors load check, so it outlives a reload until a later confirmed fetch replaces it, such as another hatchSetLinked call.\nhatchLinkedStatus still reports this session's state only."),
      ($.paramsToExecute = [!0]));
    function P(e) {
      e === void 0 && (e = 1);
      var t = o(
          "WAWebMuseDefaultAssistantVariant",
        ).overrideMuseDefaultAssistantVariantForDebug(e),
        n = o(
          "WAWebMuseDefaultAssistantVariant",
        ).getMuseDefaultAssistantVariant();
      return (
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[debugHatch] default assistant variant override ",
              " applied=",
              " effective=",
              "",
            ])),
          String(e),
          String(t),
          n,
        ),
        n
      );
    }
    ((P.doc =
      "hatchSetDefaultAssistantVariant pins ai_meta_ai_muse_default_assistant_variant in memory, debug builds only.\n0 is Meta AI, 1 is Muse once linked, 2 is Muse always; null clears the override. Unknown values read as 0.\nReturns the variant now in effect. The override is lost on reload."),
      (P.paramsToExecute = [1]));
    function N(e) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          e === void 0 &&
            (e = o(
              "WAWebHatchMinPrimaryVersions",
            ).HATCH_OCT_12_BUNDLE_MIN_PRIMARY_VERSION);
          var t =
            e != null
              ? e
              : yield o("WAWebPrimaryVersion").getPrimaryCurrentVersion();
          t != null &&
            (yield o("WAWebPrimaryVersion").storePrimaryCurrentVersion(t));
          var n = o("WAWebPrimaryVersion").getStoredPrimaryCurrentVersion();
          return (
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[debugHatch] stored primary version ",
                  "",
                ])),
              String(n),
            ),
            n
          );
        })),
        M.apply(this, arguments)
      );
    }
    ((N.doc =
      "hatchSetPrimaryVersion overwrites the stored primary version that the Hatch min-primary-version gates read.\nDefaults to " +
      o("WAWebHatchMinPrimaryVersions")
        .HATCH_OCT_12_BUNDLE_MIN_PRIMARY_VERSION +
      "; pass e.g. '2.26.40.75' to fall below it, or null to restore the version synced from the primary.\nThe value persists across reloads until the primary syncs a new version. Reload to re-render surfaces that already read the gates.\nReturns the version now stored."),
      (N.paramsToExecute = [
        o("WAWebHatchMinPrimaryVersions")
          .HATCH_OCT_12_BUNDLE_MIN_PRIMARY_VERSION,
      ]));
    function w() {
      return o("WAWebPrimaryVersion").getStoredPrimaryCurrentVersion();
    }
    ((w.doc =
      "Report the stored primary version that the Hatch min-primary-version gates read"),
      (w.paramsToExecute = []));
    function A() {
      var e;
      return {
        isLinked: (e = r("WAWebHatchLinkedStatusManager")).isLinked(),
        isUnlinked: e.isUnlinked(),
        linkedStatusState: e.getLinkedStatusState(),
        status: e.getLinkedStatus(),
      };
    }
    ((A.doc =
      "Report the latest Hatch linked-status fetch result and the last confirmed status."),
      (A.paramsToExecute = []));
    function F() {
      var e = o("WAWebHatchReadinessDebug").formatHatchReadinessReport(
        o("WAWebHatchReadinessDebug").collectHatchReadinessInputs(A()),
      );
      return (
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "[debugHatch] ",
              "",
            ])),
          e,
        ),
        e
      );
    }
    ((F.doc =
      "Explain why Muse cards may not show on this browser: a verdict line, the app version, the Muse link, the Hatch gates with their source, and the card capabilities your next Muse message from here declares. Read-only and logs no ABProp exposure. Ends with a one-line summary to paste into a thread; it holds no phone number, JID or ids."),
      (F.paramsToExecute = []));
    var O = {
      hatchClearPayloads: b,
      hatchClearSpaces: T,
      hatchLinkedStatus: A,
      hatchPrimaryVersion: w,
      hatchReadiness: F,
      hatchSetLinked: $,
      hatchSetDefaultAssistantVariant: P,
      hatchSetPrimaryVersion: N,
      hatchInjectApproval: L,
      hatchInjectCheckout: E,
      hatchInjectNotification: k,
      hatchInjectSpaces: I,
      hatchPayloads: C,
      hatchResolveApproval: x,
      hatchSpaces: D,
      injectHatchApprovals: R,
      openHatchApprovalDialog: S,
    };
    l.default = O;
  },
  98,
);
