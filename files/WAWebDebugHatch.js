__d(
  "WAWebDebugHatch",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebDebugUtils",
    "WAWebHandleHatchMetadataSync",
    "WAWebHatchApprovalDebug",
    "WAWebHatchApprovalDialog.react",
    "WAWebHatchLinkedStatusManager",
    "WAWebHatchMinPrimaryVersions",
    "WAWebHatchPayloadDebugStore",
    "WAWebHatchReadinessDebug",
    "WAWebHatchSpacesDebug",
    "WAWebHatchSpacesManager",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebPrimaryFeatures",
    "WAWebPrimaryFeaturesModel",
    "WAWebPrimaryVersion",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsMeUser",
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
      _,
      f,
      g = f || (f = o("react")),
      h = "hitl.approval_record",
      y = [
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
      C = 20;
    function b(e) {
      var t = y[e % y.length],
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
    function v() {
      return r("WAWebHatchPayloadDebugStore").getRecords();
    }
    v.doc =
      "List the Hatch AIMetadataOperation payloads captured this session (inbound events/responses, outbound reqs) with their raw envelope, decoded form, and timestamps";
    function S() {
      r("WAWebHatchPayloadDebugStore").clear();
    }
    S.doc = "Clear the captured Hatch AIMetadataOperation payload list";
    var R = [
      { kind: "allow_once", labelText: "Allow once", alwaysScope: "" },
      { kind: "allow_always", labelText: "Always allow", alwaysScope: "" },
      { kind: "deny", labelText: "Deny", alwaysScope: "" },
    ];
    function L() {
      o("WDSDialogBridge").openWDSDialog(
        g.jsx(r("WAWebHatchApprovalDialog.react"), {
          decisionOptions: R,
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
          summary: g.jsx("span", {
            children: "Hatch wants to draft an email in Gmail",
          }),
        }),
      );
    }
    ((L.doc = "Opens the Hatch approval options dialog"),
      (L.paramsToExecute = []));
    function E(e) {
      e === void 0 && (e = 3);
      var t = Math.max(1, Math.min(e, C));
      return Array.from({ length: t }, function (e, t) {
        var n = b(t),
          r = {
            type: "event",
            requestId: null,
            event: {
              seq: null,
              timestamp: null,
              index: h,
              opKey: h,
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
    ((E.doc =
      "Inject N (1-20, default 3) synthetic HITL approvals as pending requests \u2014 pass a count to test the single-approval path, the multi-approval review dialog, and its scrolling with a long list"),
      (E.paramsToExecute = [3]));
    function k(e) {
      return o("WAWebHatchApprovalDebug").debugInjectHatchApprovalRequest(e);
    }
    k.doc =
      "Inject a synthetic Hatch HITL approval request through the real decode -> store -> UI pipeline (open a Hatch chat to see the composer swap to the approval bar). Returns the approvalId.";
    function I(e) {
      return o("WAWebHatchApprovalDebug").debugInjectHatchCheckout(e);
    }
    I.doc =
      "Inject a synthetic checkout approval: hatchInjectCheckout({kind, cards, items, funding}). kind: 'browser' (default) or 'shopify'. cards (default 2): 0 for no wallet and no funding card, 1 for the read-only payment details, 2+ for the wallet picker, 4+ to split it into two wallets; 10+ to push it past the height it scrolls at; max 24. items (default 3): Shopify cart size, ignored for a browser checkout; 20+ to scroll the cart, max 60. funding: 'offered' (default) funds the order with the first offered card, 'unmatched' funds it with one the wallet does not contain, so the picker opens with nothing ticked. Returns the approvalId for hatchResolveApproval.";
    function T(e) {
      return o("WAWebHatchApprovalDebug").debugInjectHatchNotification(e);
    }
    T.doc =
      "Inject a synthetic Hatch channel notification through the real decode -> bus -> banner pipeline: hatchInjectNotification({subjectId, deduplicationKey, title, body, notificationType, expiresAtMs, withApproval}). Every field is optional; both ids default to a fresh value per call, so repeated calls do not read as repeats of each other. Pass a deduplicationKey you have already used to see a repeat suppressed, or reuse a subjectId under a fresh key to see one approval re-raised. withApproval also injects a matching pending approval, so the banner has a card to open. Nothing appears if the banner is suppressed \u2014 the usual reasons are the Hatch chat being on screen, muted, archived or absent, notifications being off for it, and ai_hatch_approval_notification_enabled being off; `hatch-approval-notif:` console lines say which. notificationType other than 'approval_request' exercises the drop path; expiresAtMs: 1 exercises the expired path. Returns the subjectId.";
    function D() {
      return o("WAWebHatchSpacesDebug").debugInjectHatchSpaces();
    }
    ((D.doc =
      "Inject a synthetic Hatch Spaces snapshot through the real decode -> reduce -> manager pipeline. The Library that shows it needs ai_hatch_space_enabled (on dev-web, ?ai_hatch_space_enabled=true). The rows cover a favorite, a Space published on muse.ai, one built but never published, one that needs attention, one still building, and two never opened, so the catalog exercises every state and the full display order. One row declares an icon whose descriptor is synthetic, so it decodes but never downloads. A real snapshot replaces the injected catalog. Read the result with Debug.hatchSpaces(); call Debug.hatchInjectSpaces() again to replace the catalog. Returns the number of rows sent."),
      (D.paramsToExecute = []));
    function x() {
      o("WAWebHatchSpacesDebug").debugClearHatchSpaces();
    }
    ((x.doc =
      "Reset the Hatch Spaces catalog to its state before any snapshot"),
      (x.paramsToExecute = []));
    function $() {
      return r("WAWebHatchSpacesManager").getCatalog();
    }
    (($.doc =
      "Report the Hatch Spaces catalog the client holds, in display order, with the icon descriptors each row can look itself up in"),
      ($.paramsToExecute = []));
    function P(e) {
      o("WAWebHatchApprovalDebug").debugResolveHatchApproval(e);
    }
    P.doc =
      "Resolve a pending Hatch HITL approval (synthetic decision echo) by id, clearing the approval bar";
    function N(e) {
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
          return (_ || (_ = n("Promise"))).resolve(t);
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
    ((N.doc =
      "hatchSetLinked registers a debug fetcher for later linked-status requests.\nhatchSetLinked(true) returns an ACTIVE paired status.\nhatchSetLinked(false) returns a status with hasChannel and isPaired set to false.\nThe debug fetcher updates the composer and disconnect button after the request resolves.\nA 515 or 516 stream-error reconnect replaces the debug fetcher with the server fetcher.\nRegistering the debug fetcher during an active request invalidates that response and starts a replacement request.\nCalling hatchSetLinked again replaces the debug fetcher with the new return value.\nThe resolved linked or unlinked state is also stored for the connectors load check, so it outlives a reload until a later confirmed fetch replaces it, such as another hatchSetLinked call.\nhatchLinkedStatus still reports this session's state only."),
      (N.paramsToExecute = [!0]));
    function M(e) {
      e === void 0 && (e = "ios");
      var t = o("WAWebDebugUtils").getSelectedChat(),
        n =
          e === "ios"
            ? "itms-apps://itunes.apple.com/us/app/muse-from-meta/id6760173601?qp_h=debug"
            : e === "android"
              ? "whatsapp://hatch"
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })(),
        a = new (o("WAWebMsgModel").Msg)({
          id: new (r("WAWebMsgKey"))({
            fromMe: !1,
            remote: t.id,
            id: "DEBUG_MUSE_PSA_" + Date.now().toString(36),
          }),
          t: o("WATimeUtils").unixTime(),
          from: t.id,
          to: o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
          type: o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
          caption:
            "*New: Meet Muse, your personal AI agent*\nHand off everyday tasks like managing your email, booking reservations, and tracking prices right from WhatsApp.\n\nJust download the Muse app and add WhatsApp as a messaging channel.",
          interactiveType: r("WAWebInteractiveMessageType").NATIVE_FLOW,
          nativeFlowName: r("WAWebInteractiveMessagesNativeFlowName").CTA_URL,
          nativeFlowInteractiveMsg: !0,
          interactivePayload: {
            messageVersion: 1,
            buttons: [
              {
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                  display_text: "Try Muse",
                  url: n,
                  webview_interaction: !0,
                }),
              },
            ],
          },
        });
      return (
        t.msgs.add(a),
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[debugHatch] injected the Muse PSA (",
              " CTA) into the open chat",
            ])),
          e,
        ),
        n
      );
    }
    ((M.doc =
      "hatchInjectMusePsa adds the Muse PSA to the open chat, in memory only: the \"Try Muse\" button carries the link the PSA campaign sends to the given primary.\n'ios' (default) is the Muse App Store link, 'android' is whatsapp://hatch. Tapping the button shows the page Web opens instead. Gone after a reload."),
      (M.paramsToExecute = ["ios"]));
    function w(e) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        A.apply(this, arguments)
      );
    }
    ((w.doc =
      "hatchSetPrimaryVersion overwrites the stored primary version that the Hatch min-primary-version gates read.\nDefaults to " +
      o("WAWebHatchMinPrimaryVersions")
        .HATCH_OCT_12_BUNDLE_MIN_PRIMARY_VERSION +
      "; pass e.g. '2.26.40.75' to fall below it, or null to restore the version synced from the primary.\nThe value persists across reloads until the primary syncs a new version. Reload to re-render surfaces that already read the gates.\nReturns the version now stored."),
      (w.paramsToExecute = [
        o("WAWebHatchMinPrimaryVersions")
          .HATCH_OCT_12_BUNDLE_MIN_PRIMARY_VERSION,
      ]));
    function F() {
      return o("WAWebPrimaryVersion").getStoredPrimaryCurrentVersion();
    }
    ((F.doc =
      "Report the stored primary version that the Hatch min-primary-version gates read"),
      (F.paramsToExecute = []));
    var O = {
      ai_hatch_integration_enabled: !0,
      ai_hatch_ideas_enabled: !0,
      ai_hatch_video_avatars_enabled: !0,
      ai_hatch_theme_enabled: !0,
      ai_hatch_response_ux_parity_enabled: !0,
      ai_hatch_connectors_enabled: !0,
      ai_hatch_secure_credentials_enabled: !0,
      ai_hatch_browser_enabled: !0,
      ai_hatch_space_enabled: !0,
      ai_hatch_activity_enabled: !0,
      ai_hatch_vm_capability_sync_enabled: !0,
      ai_hatch_media_enabled: !0,
      ai_hatch_revoke_enabled: !0,
      ai_hatch_manage_subscription_enabled: !0,
      ai_hatch_avatar_working_video_enabled: !0,
      ai_hatch_approval_notification_enabled: !0,
      ai_meta_ai_muse_default_assistant_variant_1: !0,
      ai_meta_ai_muse_default_assistant_variant_2: !0,
      ai_meta_ai_muse_default_assistant_variant_3: !0,
    };
    function B(e, t) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n;
          t === void 0 && (t = !0);
          var r = e == null || e === "all" ? Object.keys(O) : [e],
            a = new Set(
              (n = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
                o("WAWebUserPrefsKeys").KEYS.PRIMARY_FEATURES,
              )) != null
                ? n
                : [],
            );
          for (var i of r) t ? a.add(i) : a.delete(i);
          yield o("WAWebPrimaryFeatures").setPrimaryFeatures(Array.from(a));
          var l = r.filter(function (e) {
            return o("WAWebPrimaryFeatures").primaryFeatureEnabled(e) !== t;
          });
          l.length > 0 &&
            o("WALogger").WARN(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[debugHatch] ",
                  " kept ",
                  " by the primary_features_enabled / primary_features_disabled URL params",
                ])),
              l.join(", "),
              t ? "off" : "on",
            );
          var s = Object.keys(O).filter(function (e) {
            return o("WAWebPrimaryFeatures").primaryFeatureEnabled(e);
          });
          return (
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[debugHatch] Hatch primary features on: ",
                  "",
                ])),
              s.join(", "),
            ),
            s
          );
        })),
        W.apply(this, arguments)
      );
    }
    ((B.doc =
      "hatchSetPrimaryFeature turns a Hatch primary feature on or off in the stored primary feature list, as if the primary had advertised it.\nhatchSetPrimaryFeature('ai_hatch_integration_enabled', false) turns one off; pass null or 'all' as the feature to set every Hatch primary feature at once.\nOnly the Hatch features change: the rest of the list stays as the primary sent it, so the primary_features_enabled / primary_features_disabled URL params are not saved into it. Those params still win over this command, which warns when they do.\nThe list persists across reloads until the primary's next feature sync overwrites it. Reload to re-render surfaces that already read the gates.\nReturns the Hatch primary features now in effect."),
      (B.paramsToExecute = ["all", !0]));
    function q() {
      return Object.keys(O).filter(function (e) {
        return o("WAWebPrimaryFeaturesModel").PrimaryFeatures.hasFeature(e);
      });
    }
    ((q.doc =
      "Report which Hatch primary features are in effect, including URL param overrides"),
      (q.paramsToExecute = []));
    function U() {
      var e;
      return {
        isLinked: (e = r("WAWebHatchLinkedStatusManager")).isLinked(),
        isUnlinked: e.isUnlinked(),
        linkedStatusState: e.getLinkedStatusState(),
        status: e.getLinkedStatus(),
      };
    }
    ((U.doc =
      "Report the latest Hatch linked-status fetch result and the last confirmed status."),
      (U.paramsToExecute = []));
    function V() {
      var e = o("WAWebHatchReadinessDebug").formatHatchReadinessReport(
        o("WAWebHatchReadinessDebug").collectHatchReadinessInputs(U()),
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
    ((V.doc =
      "Explain why Muse cards may not show on this browser: a verdict line, the app version, the Muse link, the Hatch gates with their source, and the card capabilities your next Muse message from here declares. Read-only and logs no ABProp exposure. Ends with a one-line summary to paste into a thread; it holds no phone number, JID or ids."),
      (V.paramsToExecute = []));
    var H = {
      hatchClearPayloads: S,
      hatchClearSpaces: x,
      hatchLinkedStatus: U,
      hatchPrimaryFeatures: q,
      hatchPrimaryVersion: F,
      hatchReadiness: V,
      hatchSetLinked: N,
      hatchSetPrimaryFeature: B,
      hatchSetPrimaryVersion: w,
      hatchInjectApproval: k,
      hatchInjectCheckout: I,
      hatchInjectMusePsa: M,
      hatchInjectNotification: T,
      hatchInjectSpaces: D,
      hatchPayloads: v,
      hatchResolveApproval: P,
      hatchSpaces: $,
      injectHatchApprovals: E,
      openHatchApprovalDialog: L,
    };
    l.default = H;
  },
  98,
);
