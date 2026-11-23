__d(
  "MAIBAIssueContextKVIssues",
  [
    "A2UIBlockParser",
    "BSHIssueObservationPromptUtils",
    "filterNulls",
    "getMAIBAIssueContextIssueLabelText",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set([
        "ADS_REJECT",
        "HIT_DAILY_SPEND_LIMIT",
        "RISK_PAYMENT_DIRECT_DISABLE",
        "UNSETTLED_AD_ACCOUNT",
      ]),
      s = new Set(["ADS_REJECT", "HIT_DAILY_SPEND_LIMIT"]);
    function u(e, t) {
      var n,
        r,
        a,
        i = o("BSHIssueObservationPromptUtils").getValidBSHAdAccountID(
          e.asset_id,
        ),
        l = e.canonical_asset_id_source,
        s = e.entrypoint_diagnosis_hint_prompt_id,
        u = e.source_issue_type;
      if (
        i == null ||
        e.asset_type !== "AD_ACCOUNT" ||
        e.source_provider !== "IDS_V2" ||
        (l !== "lbd_asset_id_normalized" && l !== "ent_ad_account_id") ||
        (u !== "RISK_PAYMENT_DIRECT_DISABLE" && u !== "UNSETTLED_AD_ACCOUNT") ||
        (s !== "gp2_ads_risk_restriction_entrypoint" &&
          s !== "gp2_ads_unsettled_account_entrypoint") ||
        !(
          (u === "RISK_PAYMENT_DIRECT_DISABLE" &&
            s === "gp2_ads_risk_restriction_entrypoint") ||
          (u === "UNSETTLED_AD_ACCOUNT" &&
            s === "gp2_ads_unsettled_account_entrypoint")
        )
      )
        return null;
      var c = {
        assetType: "AD_ACCOUNT",
        canonicalAssetID: i,
        canonicalAssetIDSource: l,
        origin: "KV_SNAPSHOT",
        semanticPromptID: s,
        snapshotFetchedAtMs: (n = t.fetched_at_ms) != null ? n : null,
        snapshotGenerationID: (r = t.generation_id) != null ? r : null,
        sourceIssueType: u,
        sourceOccurrenceTimeMs:
          (a = e.source_occurrence_time_ms) != null ? a : null,
        sourceProvider: "IDS_V2",
      };
      return o("BSHIssueObservationPromptUtils").isValidBSHIssueObservation(c)
        ? c
        : null;
    }
    function c(e, t) {
      var n = e.canonical_asset_id_source;
      return !t ||
        e.asset_type !== "AD_ACCOUNT" ||
        e.source_provider !== "IDS_V2" ||
        (n !== "lbd_asset_id_normalized" && n !== "ent_ad_account_id")
        ? null
        : o("BSHIssueObservationPromptUtils").getValidBSHAdAccountID(
            e.asset_id,
          );
    }
    function d(e, t, n) {
      var r = e == null ? void 0 : e.schema_version;
      return (r === 2 && (t || n)) || (r === 1 && !t);
    }
    function m(t, n, o, a, i) {
      if (
        (n === void 0 && (n = !1),
        o === void 0 && (o = !1),
        i === void 0 && (i = !1),
        t == null || !d(t, o, i))
      )
        return [];
      var l = n,
        m = new Set();
      return r("filterNulls")(
        []
          .concat(t.issues)
          .sort(function (e, t) {
            var n,
              r,
              o = (n = e.priority) != null ? n : Number.MAX_SAFE_INTEGER,
              a = (r = t.priority) != null ? r : Number.MAX_SAFE_INTEGER;
            return o - a;
          })
          .map(function (i) {
            var d,
              p = i.asset_id,
              _ = i.asset_type,
              f = i.id,
              g = i.routine,
              h = i.user_label_key;
            if (
              f == null ||
              p == null ||
              _ == null ||
              g == null ||
              h == null ||
              (l && !e.has(i.source_issue_type))
            )
              return null;
            var y = u(i, t),
              C =
                (d = y == null ? void 0 : y.canonicalAssetID) != null
                  ? d
                  : c(i, o || (l && s.has(i.source_issue_type))),
              b =
                (a == null ? void 0 : a.mode) === "BILLING_DESKTOP_VIEWER_WIDE";
            if (
              (b && y == null) ||
              ((a == null ? void 0 : a.mode) === "SELECTED" &&
                (C == null || C !== a.adAccountID))
            )
              return null;
            var v = b ? f + ":" + (C != null ? C : "") : f;
            if (m.has(v)) return null;
            var S =
                b &&
                i.source_issue_type === "UNSETTLED_AD_ACCOUNT" &&
                i.entrypoint_diagnosis_hint_prompt_id ===
                  "gp2_ads_unsettled_account_entrypoint",
              R =
                !S &&
                _ === "AD_ACCOUNT" &&
                (h === "restricted_asset_review" ||
                  h === "dora_review_disabled_asset"),
              L = r("getMAIBAIssueContextIssueLabelText")(
                h,
                i.user_label_vars_json,
                C != null ? C : p,
                n,
                R,
                S,
              );
            return L == null
              ? null
              : (m.add(v),
                {
                  adAccountIDOverride: C,
                  assetID: p,
                  assetType: _,
                  id: f,
                  isBillingDesktopViewerWide: b,
                  isFailedPaymentAdAccount: S,
                  isRestrictedAdAccount: R,
                  issue: i,
                  issueIdentity: v,
                  issueObservation: y,
                  labelText: L,
                  routine: g,
                  userLabelKey: h,
                });
          }),
      );
    }
    function p(e, t) {
      return e === "BILLING_DESKTOP"
        ? { mode: "BILLING_DESKTOP_VIEWER_WIDE" }
        : e === "BILLING_MWEB"
          ? { adAccountID: t != null ? t : null, mode: "SELECTED" }
          : void 0;
    }
    var _ = 1;
    function f(e) {
      var t, n;
      try {
        n = JSON.parse(e);
      } catch (e) {
        return !1;
      }
      if (n == null || typeof n != "object" || Array.isArray(n)) return !1;
      var r = {};
      for (var a of Object.keys(n)) r[a] = n[a];
      return r.version !== _
        ? !1
        : o("A2UIBlockParser").parseA2UI(
            (t = JSON.stringify(r.spec)) != null ? t : "",
          ) != null;
    }
    function g(e) {
      var t,
        n =
          (t = e == null ? void 0 : e.a2ui_entrypoint_spec) != null ? t : null;
      return n != null && f(n) ? n : null;
    }
    function h(e) {
      return e === "CURRENT" || e === "STALE_SERVABLE";
    }
    function y(e, t, n) {
      if (
        (n === void 0 && (n = !1),
        !r("justknobx")._("5999") ||
          (e == null ? void 0 : e.state) === "DISABLED")
      )
        return !0;
      var o =
        t != null
          ? t
          : h(e == null ? void 0 : e.state)
            ? e == null
              ? void 0
              : e.issue_context
            : null;
      return n && (o == null ? void 0 : o.schema_version) === 1
        ? !0
        : o == null;
    }
    function C(e, t, n, r) {
      if ((n === void 0 && (n = !1), y(e, t, n))) return null;
      var o =
        t != null
          ? t
          : h(e == null ? void 0 : e.state)
            ? e == null
              ? void 0
              : e.issue_context
            : null;
      if (o == null) return null;
      var a = r === void 0 && (!n || o.schema_version === 2) && g(o) != null;
      return a || m(o, !0, n, r, !0).length > 0 ? o : null;
    }
    ((l.isSupportedIssueContextSchemaVersion = d),
      (l.getEligibleKVIssues = m),
      (l.getMAIBAIssueContextAdAccountScope = p),
      (l.getRenderableA2UIEntrypointSpec = g),
      (l.isRenderableIssueContextEnsureState = h),
      (l.shouldUseLBDPlanFallback = y),
      (l.getUsableKVIssueContext = C));
  },
  98,
);
