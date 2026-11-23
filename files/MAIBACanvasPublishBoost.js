__d(
  "MAIBACanvasPublishBoost",
  [
    "AdsInterfacesSessionConfig",
    "FBLogger",
    "MAIBAAdDraftEditorContext",
    "MAIBABoostPostPreviewSummaryCard_campaignGroup.graphql",
    "MAIBABoostPostPreviewSummaryCard_preview.graphql",
    "MAIBACanvasPublishBoost_paymentGate.graphql",
    "MAIBACanvasPublishSuccessContext",
    "MAIBAChatNavigationContext",
    "MAIBAIGCanvasPreviewButton_preview.graphql",
    "MAIBAIGCanvasPublishStrings",
    "MAIBAPaymentSummaryUtils",
    "MAIBAToastContext",
    "RelayHooks",
    "getMAIBABoostAdsSummaryDeeplinkInstruction",
    "react",
    "useBillingWizard",
    "useMAIBABoostLogger",
    "useMAIBABoostPostPublishAsync",
    "useMAIBASendMessageFromInsideChat",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = u.useCallback,
      d = u.useContext,
      m = u.useEffect,
      p = u.useMemo,
      _ = u.useRef;
    function f(e, t, n) {
      var r = new Set();
      e != null && r.add(e);
      for (var o of t) o != null && r.add(o);
      for (var a of n) a != null && r.add(a);
      return Array.from(r);
    }
    function g(e) {
      return (
        f(
          e.campaignGroupDraftFragmentID,
          e.campaignDraftFragmentIDs,
          e.adgroupDraftFragmentIDs,
        ).length > 0
      );
    }
    function h(e, t) {
      var n = r("FBLogger")("maiba_workspace");
      (e instanceof Error && n.catching(e), n.warn(t));
    }
    var y =
      e !== void 0 ? e : (e = n("MAIBACanvasPublishBoost_paymentGate.graphql"));
    function C(e) {
      var t,
        n,
        a,
        i,
        l,
        s,
        u,
        g,
        C = e.onTerminal,
        b = o(
          "MAIBAAdDraftEditorContext",
        ).useMAIBAAdDraftEditorContextRequired(),
        v = b.accountID,
        S = o("RelayHooks").useFragment(y, b.data.campaign_group),
        R = S == null ? void 0 : S.payment_summary,
        L = b.product === "ig",
        E = R == null ? null : R.payment_method_type != null,
        k = L
          ? R == null || (t = R.required_action) == null
            ? void 0
            : t.wizard_name
          : null,
        I = L
          ? o("MAIBAPaymentSummaryUtils").coerceMAIBABillingWizardName(k)
          : null,
        T = k != null && I == null,
        D = L ? I != null : E === !1,
        x = (n = R == null ? void 0 : R.payment_account_id) != null ? n : "",
        $ = p(
          function () {
            var e, t;
            return f(
              (e =
                (t = b.data.campaign_group) == null
                  ? void 0
                  : t.draft_fragment_id) != null
                ? e
                : null,
              b.data.campaigns.map(function (e) {
                var t, n;
                return (t =
                  (n = e.node) == null ? void 0 : n.draft_fragment_id) != null
                  ? t
                  : null;
              }),
              b.data.adgroups.map(function (e) {
                var t, n;
                return (t =
                  (n = e.node) == null ? void 0 : n.draft_fragment_id) != null
                  ? t
                  : null;
              }),
            );
          },
          [b.data.adgroups, b.data.campaign_group, b.data.campaigns],
        ),
        P =
          (a =
            (i = b.data.adgroups.find(function (e) {
              return e.node_id === b.adgroupID;
            })) == null || (i = i.node) == null
              ? void 0
              : i.creative_page_id) != null
            ? a
            : null,
        N = o("MAIBAChatNavigationContext").useMAIBAChatNavigationContext(),
        M = N.externalConversationId,
        w = r("useMAIBASendMessageFromInsideChat")(),
        A = o("MAIBAToastContext").useMAIBAShowToast(),
        F = d(
          o("MAIBACanvasPublishSuccessContext")
            .MAIBACanvasPublishSuccessContext,
        ),
        O = o("RelayHooks").useFragment(
          r("MAIBABoostPostPreviewSummaryCard_campaignGroup.graphql"),
          L ? b.data.campaign_group : null,
        ),
        B =
          (l = o("RelayHooks").useFragment(
            r("MAIBABoostPostPreviewSummaryCard_preview.graphql"),
            O,
          )) == null
            ? void 0
            : l.maiba_lwi_boost_post_preview,
        W =
          (s = o("RelayHooks").useFragment(
            r("MAIBAIGCanvasPreviewButton_preview.graphql"),
            B,
          )) == null
            ? void 0
            : s.instagram_media_igid,
        q = B == null ? void 0 : B.picture,
        U = p(
          function () {
            return "maiba-"
              .concat(M != null ? M : "")
              .concat("-")
              .concat(r("uuidv4")());
          },
          [M],
        ),
        V = r("useMAIBABoostLogger")({
          adAccountId: v,
          entryPoint: "maiba_draft_fragment_publish",
          flowId: U,
          fragmentIds: $.join(","),
          pageId: P,
          product: "boosted_post",
        }),
        H = _(!1),
        G = c(
          function () {
            var e = {
              externalConversationId: M != null ? M : "",
              hideUserMessage: !0,
              isSentFromOutOfChat: !1,
              message:
                "The ad has been successfully submitted for publishing. The ad will get published in the next few minutes. Congratulate the user and explain what to expect next including the review period, delivery start, learning phase, and how to monitor their ad. " +
                r("getMAIBABoostAdsSummaryDeeplinkInstruction")(P),
              originComponent: "MAIBACanvasPublishBoost",
              postback_payload: "boost_post_published_success",
            };
            if (!L) {
              (w(e), C(!0));
              return;
            }
            if (!H.current) {
              H.current = !0;
              try {
                F == null ||
                  F(U, {
                    mediaID: W != null ? W : null,
                    pictureURL: q != null ? q : null,
                  });
              } catch (e) {
                h(e, "Failed to show Canvas publish success.");
              } finally {
                C(!0);
              }
              try {
                w(
                  babelHelpers.extends({}, e, {
                    message:
                      "The publish mutation accepted the ad submission and scheduled its async creation request. Confirm that the ad was correctly sent for creation. Do not claim that ad creation has finished, that the ad is in review, or that it is live. Explain that the user can check its status in Instagram Ad tools.",
                  }),
                );
              } catch (e) {
                h(e, "Failed to send Canvas publish success to the assistant.");
              }
            }
          },
          [M, U, L, W, C, P, q, F, w],
        ),
        z = c(
          function () {
            var e = {
              externalConversationId: M != null ? M : "",
              hideUserMessage: !0,
              isSentFromOutOfChat: !1,
              message:
                "There was an error publishing the ad. Inform the user that the ad could not be published due to a technical issue and suggest they try again.",
              originComponent: "MAIBACanvasPublishBoost",
              postback_payload: "boost_post_published_failure",
            };
            if (!L) {
              (w(e), C(!1));
              return;
            }
            A({
              dismissTimer: 8e3,
              header: o("MAIBAIGCanvasPublishStrings").IG_CANVAS_PUBLISH_FAILED,
              status: o("MAIBAToastContext").ToastStatus.Error,
            });
            try {
              w(e);
            } catch (e) {
              h(e, "Failed to send Canvas publish outcome to the assistant.");
            } finally {
              C(!1);
            }
          },
          [M, L, C, A, w],
        ),
        j = r("useMAIBABoostPostPublishAsync")({
          adAccountId: v,
          flowId: U,
          fragmentIds: $,
          logPublishEvent: V,
          onComplete: G,
          onError: z,
        }),
        K = j.publish,
        Q = r("useBillingWizard")({
          entryPointDetails: {
            entryPoint: "maiba",
            flowID: r("AdsInterfacesSessionConfig").sessionID,
          },
          jsonProps:
            L &&
            (u =
              R == null || (g = R.required_action) == null
                ? void 0
                : g.wizard_props_json) != null
              ? u
              : void 0,
          onClose: function (t) {
            t === "complete"
              ? (V("payment_method_added", {
                  action: "add",
                  context: "payment",
                  side: "client_side",
                }),
                V("complete_payment_billing_wizard", {
                  action: "receive",
                  context: "payment",
                  side: "client_side",
                }),
                K())
              : (V("payments_flow_closed", {
                  action: "enter",
                  context: "payment",
                  side: "client_side",
                }),
                t === "closed" ? C(!1, !1, "cancelled") : C(!1));
          },
          paymentAccountID: x,
          wizardName: L ? (I != null ? I : "NONE") : "ADD_PM",
        }),
        X = _(!1);
      return (
        m(
          function () {
            if (!X.current) {
              if (((X.current = !0), T)) {
                (V("draft_publish_exception", {
                  extra_data: { error_source: "unsupported_billing_wizard" },
                }),
                  z());
                return;
              }
              if (D) {
                (V("open_payments_flow", {
                  action: "enter",
                  context: "payment",
                  side: "client_side",
                }),
                  Q());
                return;
              }
              K();
            }
          },
          [z, T, V, K, D, Q],
        ),
        null
      );
    }
    ((C.displayName = C.name + " [from " + i.id + "]"),
      (l.dispatchPublish = g),
      (l.MAIBACanvasPublishLifecycleTracker = C));
  },
  98,
);
