__d(
  "MAIBAAsyncSupportLobbyStateStore",
  ["FBLogger", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useSyncExternalStore,
      u = new Map(),
      c = new Map(),
      d = new Map(),
      m = new Set(),
      p = Object.freeze([]),
      _ = "legacy:latest",
      f = "sac_remediation_publish";
    function g() {
      for (var e of m) e();
    }
    function h(e) {
      return e === "IN_PROGRESS" ? 0 : 1;
    }
    function y(e) {
      return e === "dora_failed_payment"
        ? 0
        : e === "sac_remediation_publish"
          ? 1
          : 2;
    }
    function C(e, t) {
      var n = /^\d+$/;
      return n.test(e) && n.test(t)
        ? e.length === t.length
          ? e.localeCompare(t)
          : e.length - t.length
        : e.localeCompare(t);
    }
    function b(e) {
      return e.operationType !== f
        ? _
        : e.remediationContextId != null
          ? "sac:" + e.remediationContextId
          : "sac-operation:" + e.operationId;
    }
    function v(e, t) {
      return (
        e.adAccountId === t.adAccountId &&
        e.adIds === t.adIds &&
        e.assetId === t.assetId &&
        e.assetType === t.assetType &&
        e.campaignGroupId === t.campaignGroupId &&
        e.content === t.content &&
        e.draftId === t.draftId &&
        e.fragmentId === t.fragmentId &&
        e.operationId === t.operationId &&
        e.operationType === t.operationType &&
        e.operationVersion === t.operationVersion &&
        e.publishId === t.publishId &&
        e.remediationContextId === t.remediationContextId &&
        e.stageKey === t.stageKey &&
        e.status === t.status &&
        e.terminalContinuationConsumed === t.terminalContinuationConsumed &&
        e.title === t.title
      );
    }
    function S(e, t) {
      var n = e[t];
      return typeof n == "string" ? n : null;
    }
    function R(e, t) {
      var n = e[t];
      return typeof n == "boolean"
        ? n
        : n === "true" || n === "1"
          ? !0
          : n === "false" || n === "0"
            ? !1
            : null;
    }
    function L(e) {
      var t = u.get(e);
      c.set(
        e,
        t == null
          ? []
          : Array.from(t.values()).sort(function (e, t) {
              var n = y(e.operationType) - y(t.operationType);
              return n !== 0 ? n : e.operationId.localeCompare(t.operationId);
            }),
      );
    }
    function E(e) {
      try {
        var t = JSON.parse(e);
        return t == null || typeof t != "object" || Array.isArray(t) ? null : t;
      } catch (e) {
        return (
          r("FBLogger")("maiba").warn(
            "async_support_lobby_payload_parse_failed",
            e instanceof Error ? e.message : String(e),
          ),
          null
        );
      }
    }
    function k(e, t) {
      var n;
      if (t.operationId !== "") {
        var r = u.get(e);
        r == null && ((r = new Map()), u.set(e, r));
        var o = b(t),
          a = r.get(o),
          i = babelHelpers.extends({}, t, {
            terminalContinuationConsumed:
              (n = t.terminalContinuationConsumed) != null
                ? n
                : a == null
                  ? void 0
                  : a.terminalContinuationConsumed,
          });
        (a != null &&
          a.operationId !== t.operationId &&
          C(a.operationId, t.operationId) > 0) ||
          (a != null &&
            a.operationId === t.operationId &&
            h(a.status) > h(t.status)) ||
          (a != null && v(a, i)) ||
          (r.set(o, i), L(e), g());
      }
    }
    function I(e, t) {
      var n,
        r,
        o,
        a,
        i,
        l,
        s,
        u,
        c,
        d,
        m,
        p,
        _,
        f,
        g,
        h,
        y,
        C = (n = S(t, "async_tool_request_id")) != null ? n : e;
      k(e, {
        adAccountId: (r = S(t, "ad_account_id")) != null ? r : void 0,
        adIds: (o = S(t, "ad_ids")) != null ? o : void 0,
        assetId: (a = S(t, "asset_id")) != null ? a : void 0,
        assetType: (i = S(t, "asset_type")) != null ? i : void 0,
        campaignGroupId: (l = S(t, "campaign_group_id")) != null ? l : void 0,
        content: (s = S(t, "content")) != null ? s : void 0,
        draftId: (u = S(t, "ad_draft_id")) != null ? u : void 0,
        fragmentId: (c = S(t, "fragment_id")) != null ? c : void 0,
        operationId: C,
        operationType:
          (d = S(t, "operation_type")) != null ? d : "dora_failed_payment",
        operationVersion: (m = S(t, "operation_version")) != null ? m : void 0,
        publishId: (p = S(t, "publish_id")) != null ? p : void 0,
        remediationContextId:
          (_ = S(t, "remediation_context_id")) != null ? _ : void 0,
        stageKey: (f = S(t, "stage_key")) != null ? f : "review_in_progress",
        status: (g = S(t, "status")) != null ? g : "IN_PROGRESS",
        terminalContinuationConsumed:
          (h = R(t, "terminal_continuation_consumed")) != null ? h : void 0,
        title: (y = S(t, "title")) != null ? y : void 0,
      });
    }
    function T(e, t) {
      var n = E(t);
      if (n == null) {
        var r = d.get(e) !== t;
        return (d.set(e, t), r && g(), !1);
      }
      var o = d.get(e) !== t;
      d.set(e, t);
      var a = n.operations;
      if (Array.isArray(a)) {
        for (var i of a) i != null && typeof i == "object" && I(e, i);
        return (o && g(), !0);
      }
      return (I(e, n), o && g(), !0);
    }
    function D(e) {
      var t = u.delete(e),
        n = c.delete(e),
        r = d.delete(e);
      (t || n || r) && g();
    }
    function x(e) {
      return (
        m.add(e),
        function () {
          m.delete(e);
        }
      );
    }
    function $(e) {
      if (e == null) return null;
      var t = c.get(e);
      return t == null || t.length === 0 ? null : t[0];
    }
    function P(e) {
      var t;
      return e == null ? p : (t = c.get(e)) != null ? t : p;
    }
    function N(e) {
      var t = o("react-compiler-runtime").c(2),
        n;
      return (
        t[0] !== e
          ? ((n = function () {
              return $(e);
            }),
            (t[0] = e),
            (t[1] = n))
          : (n = t[1]),
        s(x, n)
      );
    }
    function M(e) {
      var t = o("react-compiler-runtime").c(2),
        n;
      return (
        t[0] !== e
          ? ((n = function () {
              return P(e);
            }),
            (t[0] = e),
            (t[1] = n))
          : (n = t[1]),
        s(x, n)
      );
    }
    function w(e, t) {
      var n = o("react-compiler-runtime").c(3),
        r;
      return (
        n[0] !== e || n[1] !== t
          ? ((r = function () {
              return t == null || d.get(e) === t;
            }),
            (n[0] = e),
            (n[1] = t),
            (n[2] = r))
          : (r = n[2]),
        s(x, r)
      );
    }
    ((l.applyAsyncSupportLobbyState = k),
      (l.applyAsyncSupportLobbyStatePayload = T),
      (l.clearAsyncSupportLobbyState = D),
      (l.useSubscriptionAsyncSupportLobbyState = N),
      (l.useSubscriptionAsyncSupportLobbyStates = M),
      (l.useIsAsyncSupportLobbyStatePayloadApplied = w));
  },
  98,
);
