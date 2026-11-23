__d(
  "MAIBASendClientContext",
  [
    "MAIBACampaignPlannerMode",
    "MAIBAClientContextUtils",
    "MAIBAR23CreationThreadStore",
    "applyAxonRoutingToEntrypointContext",
    "applyMAIBAPageIdentityToClientContext",
    "getCustomAnalyticsPagePromptID",
    "getPromptIdForEntrypoint",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      try {
        return r("MAIBAClientContextUtils").getClientContextSync(e, t);
      } catch (e) {
        return null;
      }
    }
    async function s(t, n, o, a) {
      o === void 0 && (o = !1);
      var i = e(t, n);
      return i != null
        ? i
        : o
          ? r("MAIBAClientContextUtils").getPartialClientContextSync(t, n)
          : await r("MAIBAClientContextUtils").getClientContext(t, n, a);
    }
    async function u(e) {
      var t = m(await s(e.adAccountID, e.messageType), e);
      return c(r("applyMAIBAPageIdentityToClientContext")(t));
    }
    function c(e) {
      var t = e.inlined_context,
        n = t == null ? void 0 : t.entrypoint_client_context,
        r = n == null ? void 0 : n.ad_object_ids;
      return t == null || n == null || r == null
        ? e
        : babelHelpers.extends({}, e, {
            inlined_context: babelHelpers.extends({}, t, {
              entrypoint_client_context: babelHelpers.extends({}, n, {
                ad_object_ids: r.filter(Boolean),
              }),
            }),
          });
    }
    function d(e) {
      var t, n, a;
      return (t =
        (n = (a = e.entrypointContext) == null ? void 0 : a.prompt_id) != null
          ? n
          : r("getPromptIdForEntrypoint")(e.entrypoint)) != null
        ? t
        : o("MAIBACampaignPlannerMode").isCampaignPlannerActive()
          ? o("MAIBAR23CreationThreadStore").MAIBA_R23_E2E_ENTRY_PROMPT_ID
          : null;
    }
    function m(e, t) {
      var n,
        a,
        i,
        l,
        s,
        u = e.inlined_context;
      if (u == null) return e;
      var c =
        ((n = t.entrypointContext) == null ? void 0 : n.prompt_id) == null
          ? r("getCustomAnalyticsPagePromptID")()
          : null;
      if (
        t.entrypointContext == null &&
        t.entrypoint == null &&
        !o("MAIBACampaignPlannerMode").isCampaignPlannerActive() &&
        c == null
      )
        return e;
      var m = r("applyAxonRoutingToEntrypointContext")(
        babelHelpers.extends({}, t.entrypointContext, {
          additional_info:
            (a =
              (i = t.entrypointContext) == null ? void 0 : i.additional_info) !=
            null
              ? a
              : (l = u.entrypoint_client_context) == null
                ? void 0
                : l.additional_info,
          entrypoint: t.entrypoint != null ? t.entrypoint : null,
          prompt_id: (s = d(t)) != null ? s : c,
        }),
        t.cmoAxonRoutingEnabled === !0,
      );
      return babelHelpers.extends({}, e, {
        inlined_context: babelHelpers.extends({}, u, {
          entrypoint_client_context: m,
        }),
      });
    }
    ((l.resolveClientContext = s),
      (l.resolveMAIBASendClientContext = u),
      (l.sanitizeClientContextAdObjectIDs = c),
      (l.resolveEntrypointPromptID = d),
      (l.applyEntrypointContextToClientContext = m));
  },
  98,
);
