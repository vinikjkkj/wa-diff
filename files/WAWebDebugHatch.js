__d(
  "WAWebDebugHatch",
  [
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
    "react",
    "vulture",
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
      f = _ || (_ = o("react")),
      g = "hitl.approval_record",
      h = [
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
      y = 20;
    function C(e) {
      r("vulture")("wlq-zwElmIwiAD9YMcv4TZNeQmQ=");
      var t = h[e % h.length],
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
    function b() {
      return (
        r("vulture")("MWJEMl4OYzvNLyAtiZD_VTkzbYI="),
        r("WAWebHatchPayloadDebugStore").getRecords()
      );
    }
    b.doc =
      "List the Hatch AIMetadataOperation payloads captured this session (inbound events/responses, outbound reqs) with their raw envelope, decoded form, and timestamps";
    function v() {
      (r("vulture")("jqvyLtSwU24JepcnNM987KnS-Ac="),
        r("WAWebHatchPayloadDebugStore").clear());
    }
    v.doc = "Clear the captured Hatch AIMetadataOperation payload list";
    var S = [
      { kind: "allow_once", labelText: "Allow once", alwaysScope: "" },
      { kind: "allow_always", labelText: "Always allow", alwaysScope: "" },
      { kind: "deny", labelText: "Deny", alwaysScope: "" },
    ];
    function R() {
      (r("vulture")("m7UsmatbglVakxVfJ8-k1GyY_4s="),
        o("WDSDialogBridge").openWDSDialog(
          f.jsx(r("WAWebHatchApprovalDialog.react"), {
            decisionOptions: S,
            description: "Create an email draft to xyz@meta.com",
            isConnector: !0,
            onDecide: function (n) {
              (r("vulture")("bYxMm1k7jUB__1BNNnDCU5wbveA="),
                o("WALogger").LOG(
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
            summary: f.jsx("span", {
              children: "Hatch wants to draft an email in Gmail",
            }),
          }),
        ));
    }
    ((R.doc = "Opens the Hatch approval options dialog"),
      (R.paramsToExecute = []));
    function L(e) {
      (e === void 0 && (e = 3), r("vulture")("IBxTcDCDXbpdYM_QQNXWUQws1Zo="));
      var t = Math.max(1, Math.min(e, y));
      return Array.from({ length: t }, function (e, t) {
        r("vulture")("_GtiTIikZI9O83uy7DgmchMXSNM=");
        var n = C(t),
          a = {
            type: "event",
            requestId: null,
            event: {
              seq: null,
              timestamp: null,
              index: g,
              opKey: g,
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
            a,
            "debug-" + n.approvalId,
          ),
          n.approvalId
        );
      });
    }
    ((L.doc =
      "Inject N (1-20, default 3) synthetic HITL approvals as pending requests \u2014 pass a count to test the single-approval path, the multi-approval review dialog, and its scrolling with a long list"),
      (L.paramsToExecute = [3]));
    function E(e) {
      return (
        r("vulture")("5ORDg_05NFrejpN0hf_D5QcD4Mk="),
        o("WAWebHatchApprovalDebug").debugInjectHatchApprovalRequest(e)
      );
    }
    E.doc =
      "Inject a synthetic Hatch HITL approval request through the real decode -> store -> UI pipeline (open a Hatch chat to see the composer swap to the approval bar). Returns the approvalId.";
    function k(e) {
      return (
        r("vulture")("_B2U79t1elZcCY5OZdW5h7puTBE="),
        o("WAWebHatchApprovalDebug").debugInjectHatchCheckout(e)
      );
    }
    k.doc =
      "Inject a synthetic checkout approval: hatchInjectCheckout({kind, cards, items, funding}). kind: 'browser' (default) or 'shopify'. cards (default 2): 0 for no wallet and no funding card, 1 for the read-only payment details, 2+ for the wallet picker, 4+ to split it into two wallets; 10+ to push it past the height it scrolls at; max 24. items (default 3): Shopify cart size, ignored for a browser checkout; 20+ to scroll the cart, max 60. funding: 'offered' (default) funds the order with the first offered card, 'unmatched' funds it with one the wallet does not contain, so the picker opens with nothing ticked. Returns the approvalId for hatchResolveApproval.";
    function I(e) {
      return o("WAWebHatchApprovalDebug").debugInjectHatchNotification(e);
    }
    I.doc =
      "Inject a synthetic Hatch channel notification through the real decode -> bus -> banner pipeline: hatchInjectNotification({subjectId, deduplicationKey, title, body, notificationType, expiresAtMs, withApproval}). Every field is optional; both ids default to a fresh value per call, so repeated calls do not read as repeats of each other. Pass a deduplicationKey you have already used to see a repeat suppressed, or reuse a subjectId under a fresh key to see one approval re-raised. withApproval also injects a matching pending approval, so the banner has a card to open. Nothing appears if the banner is suppressed \u2014 the usual reasons are the Hatch chat being on screen, muted, archived or absent, notifications being off for it, and ai_hatch_approval_notification_enabled being off; `hatch-approval-notif:` console lines say which. notificationType other than 'approval_request' exercises the drop path; expiresAtMs: 1 exercises the expired path. Returns the subjectId.";
    function T() {
      return (
        r("vulture")("KGTZL7_YPz4COByCyQeBvhUryAw="),
        o("WAWebHatchSpacesDebug").debugInjectHatchSpaces()
      );
    }
    ((T.doc =
      "Inject a synthetic Hatch Spaces snapshot through the real decode -> reduce -> manager pipeline. The Library that shows it needs ai_hatch_space_enabled (on dev-web, ?ai_hatch_space_enabled=true). The rows cover a favorite, a Space published on muse.ai, one built but never published, one that needs attention, one still building, and two never opened, so the catalog exercises every state and the full display order. One row declares an icon whose descriptor is synthetic, so it decodes but never downloads. A real snapshot replaces the injected catalog. Read the result with Debug.hatchSpaces(); call Debug.hatchInjectSpaces() again to replace the catalog. Returns the number of rows sent."),
      (T.paramsToExecute = []));
    function D() {
      (r("vulture")("nBQ5SwFxY0Qs8tZdinzEMIpdnwE="),
        o("WAWebHatchSpacesDebug").debugClearHatchSpaces());
    }
    ((D.doc =
      "Reset the Hatch Spaces catalog to its state before any snapshot"),
      (D.paramsToExecute = []));
    function x() {
      return (
        r("vulture")("lcvMeAG9CCArUpl9gSzrkC7GGFM="),
        r("WAWebHatchSpacesManager").getCatalog()
      );
    }
    ((x.doc =
      "Report the Hatch Spaces catalog the client holds, in display order, with the icon descriptors each row can look itself up in"),
      (x.paramsToExecute = []));
    function $(e) {
      (r("vulture")("m2OPMU8aplfWhVKrxBV5-NQCdVE="),
        o("WAWebHatchApprovalDebug").debugResolveHatchApproval(e));
    }
    $.doc =
      "Resolve a pending Hatch HITL approval (synthetic decision echo) by id, clearing the approval bar";
    function P(e) {
      (e === void 0 && (e = !0), r("vulture")("waL_S9CJn9jVoH7Zxp7pvOYpFpc="));
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
          return Promise.resolve(t);
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
    ((P.doc = `hatchSetLinked registers a debug fetcher for later linked-status requests.
hatchSetLinked(true) returns an ACTIVE paired status.
hatchSetLinked(false) returns a status with hasChannel and isPaired set to false.
The debug fetcher updates the composer and disconnect button after the request resolves.
A 515 or 516 stream-error reconnect replaces the debug fetcher with the server fetcher.
Registering the debug fetcher during an active request invalidates that response and starts a replacement request.
Calling hatchSetLinked again replaces the debug fetcher with the new return value.
The resolved linked or unlinked state is also stored for the connectors load check, so it outlives a reload until a later confirmed fetch replaces it, such as another hatchSetLinked call.
hatchLinkedStatus still reports this session's state only.`),
      (P.paramsToExecute = [!0]));
    function N(e) {
      (e === void 0 && (e = "ios"),
        r("vulture")("nDj6ZijYJdwVvf2U3Kiijasdozw="));
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
          caption: `*New: Meet Muse, your personal AI agent*
Hand off everyday tasks like managing your email, booking reservations, and tracking prices right from WhatsApp.

Just download the Muse app and add WhatsApp as a messaging channel.`,
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
    ((N.doc = `hatchInjectMusePsa adds the Muse PSA to the open chat, in memory only: the "Try Muse" button carries the link the PSA campaign sends to the given primary.
'ios' (default) is the Muse App Store link, 'android' is whatsapp://hatch. Tapping the button shows the page Web opens instead. Gone after a reload.`),
      (N.paramsToExecute = ["ios"]));
    async function M(e) {
      (e === void 0 &&
        (e = o(
          "WAWebHatchMinPrimaryVersions",
        ).HATCH_OCT_12_BUNDLE_MIN_PRIMARY_VERSION),
        r("vulture")("3UqZCxLVFzNUdi9R1eAB0VJF4i8="));
      var t =
        e != null
          ? e
          : await o("WAWebPrimaryVersion").getPrimaryCurrentVersion();
      t != null &&
        (await o("WAWebPrimaryVersion").storePrimaryCurrentVersion(t));
      var n = o("WAWebPrimaryVersion").getStoredPrimaryCurrentVersion();
      return (
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "[debugHatch] stored primary version ",
              "",
            ])),
          String(n),
        ),
        n
      );
    }
    ((M.doc =
      `hatchSetPrimaryVersion overwrites the stored primary version that the Hatch min-primary-version gates read.
Defaults to ` +
      o("WAWebHatchMinPrimaryVersions")
        .HATCH_OCT_12_BUNDLE_MIN_PRIMARY_VERSION +
      `; pass e.g. '2.26.40.75' to fall below it, or null to restore the version synced from the primary.
The value persists across reloads until the primary syncs a new version. Reload to re-render surfaces that already read the gates.
Returns the version now stored.`),
      (M.paramsToExecute = [
        o("WAWebHatchMinPrimaryVersions")
          .HATCH_OCT_12_BUNDLE_MIN_PRIMARY_VERSION,
      ]));
    function w() {
      return (
        r("vulture")("f0-7_HNyVvdpHy7eLns_q3cO2CQ="),
        o("WAWebPrimaryVersion").getStoredPrimaryCurrentVersion()
      );
    }
    ((w.doc =
      "Report the stored primary version that the Hatch min-primary-version gates read"),
      (w.paramsToExecute = []));
    var A = {
      ai_hatch_integration_enabled: !0,
      ai_hatch_ideas_enabled: !0,
      ai_hatch_video_avatars_enabled: !0,
      ai_hatch_theme_enabled: !0,
      ai_hatch_response_ux_parity_enabled: !0,
      ai_hatch_connectors_enabled: !0,
      ai_hatch_permission_enable: !0,
      ai_hatch_secure_credentials_enabled: !0,
      ai_hatch_custom_connectors_enabled: !0,
      ai_hatch_browser_enabled: !0,
      ai_hatch_space_enabled: !0,
      ai_hatch_activity_enabled: !0,
      ai_hatch_vm_capability_sync_enabled: !0,
      ai_hatch_cvm_enabled: !0,
      ai_hatch_media_enabled: !0,
      ai_hatch_revoke_enabled: !0,
      ai_hatch_manage_subscription_enabled: !0,
      ai_hatch_in_app_subscriptions_enabled: !0,
      ai_hatch_avatar_working_video_enabled: !0,
      ai_hatch_approval_notification_enabled: !0,
      ai_hatch_identity_enabled: !0,
      ai_hatch_data_controls_enabled: !0,
      ai_hatch_scheduled_tasks_enabled: !0,
      ai_hatch_approval_history_enabled: !0,
      ai_meta_ai_muse_default_assistant_variant_1: !0,
      ai_meta_ai_muse_default_assistant_variant_2: !0,
      ai_meta_ai_muse_default_assistant_variant_3: !0,
    };
    async function F(e, t) {
      var n;
      (t === void 0 && (t = !0), r("vulture")("hgA_uhNK_Zt4I9ulb8TWA08T94w="));
      var a = e == null || e === "all" ? Object.keys(A) : [e],
        i = new Set(
          (n = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
            o("WAWebUserPrefsKeys").KEYS.PRIMARY_FEATURES,
          )) != null
            ? n
            : [],
        );
      for (var l of a) t ? i.add(l) : i.delete(l);
      await o("WAWebPrimaryFeatures").setPrimaryFeatures(Array.from(i));
      var s = a.filter(function (e) {
        return o("WAWebPrimaryFeatures").primaryFeatureEnabled(e) !== t;
      });
      s.length > 0 &&
        o("WALogger").WARN(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "[debugHatch] ",
              " kept ",
              " by the primary_features_enabled / primary_features_disabled URL params",
            ])),
          s.join(", "),
          t ? "off" : "on",
        );
      var u = Object.keys(A).filter(function (e) {
        return o("WAWebPrimaryFeatures").primaryFeatureEnabled(e);
      });
      return (
        o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "[debugHatch] Hatch primary features on: ",
              "",
            ])),
          u.join(", "),
        ),
        u
      );
    }
    ((F.doc = `hatchSetPrimaryFeature turns a Hatch primary feature on or off in the stored primary feature list, as if the primary had advertised it.
hatchSetPrimaryFeature('ai_hatch_integration_enabled', false) turns one off; pass null or 'all' as the feature to set every Hatch primary feature at once.
Only the Hatch features change: the rest of the list stays as the primary sent it, so the primary_features_enabled / primary_features_disabled URL params are not saved into it. Those params still win over this command, which warns when they do.
The list persists across reloads until the primary's next feature sync overwrites it. Reload to re-render surfaces that already read the gates.
Returns the Hatch primary features now in effect.`),
      (F.paramsToExecute = ["all", !0]));
    function O() {
      return (
        r("vulture")("lzsj6Pisurtc24JYt5hzFK7_6tg="),
        Object.keys(A).filter(function (e) {
          return o("WAWebPrimaryFeaturesModel").PrimaryFeatures.hasFeature(e);
        })
      );
    }
    ((O.doc =
      "Report which Hatch primary features are in effect, including URL param overrides"),
      (O.paramsToExecute = []));
    function B() {
      var e;
      return {
        isLinked: (e = r("WAWebHatchLinkedStatusManager")).isLinked(),
        isUnlinked: e.isUnlinked(),
        linkedStatusState: e.getLinkedStatusState(),
        status: e.getLinkedStatus(),
      };
    }
    ((B.doc =
      "Report the latest Hatch linked-status fetch result and the last confirmed status."),
      (B.paramsToExecute = []));
    function W() {
      var e = o("WAWebHatchReadinessDebug").formatHatchReadinessReport(
        o("WAWebHatchReadinessDebug").collectHatchReadinessInputs(B()),
      );
      return (
        o("WALogger").LOG(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "[debugHatch] ",
              "",
            ])),
          e,
        ),
        e
      );
    }
    ((W.doc =
      "Explain why Muse cards may not show on this browser: a verdict line, the app version, the Muse link, the Hatch gates with their source, and the card capabilities your next Muse message from here declares. Read-only and logs no ABProp exposure. Ends with a one-line summary to paste into a thread; it holds no phone number, JID or ids."),
      (W.paramsToExecute = []));
    var q = {
      hatchClearPayloads: v,
      hatchClearSpaces: D,
      hatchLinkedStatus: B,
      hatchPrimaryFeatures: O,
      hatchPrimaryVersion: w,
      hatchReadiness: W,
      hatchSetLinked: P,
      hatchSetPrimaryFeature: F,
      hatchSetPrimaryVersion: M,
      hatchInjectApproval: E,
      hatchInjectCheckout: k,
      hatchInjectMusePsa: N,
      hatchInjectNotification: I,
      hatchInjectSpaces: T,
      hatchPayloads: b,
      hatchResolveApproval: $,
      hatchSpaces: x,
      injectHatchApprovals: L,
      openHatchApprovalDialog: R,
    };
    l.default = q;
  },
  98,
);
