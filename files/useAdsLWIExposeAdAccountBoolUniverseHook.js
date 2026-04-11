__d(
  "useAdsLWIExposeAdAccountBoolUniverseHook",
  ["CometRelay", "useAdsLWIExposeAdAccountBoolUniverseHookQuery.graphql"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("useAdsLWIExposeAdAccountBoolUniverseHookQuery.graphql"));
    function u(e, t, n, r, a, i, l) {
      var u,
        c = a === void 0 ? !0 : a,
        d = i === void 0 ? null : i,
        m = l === void 0 ? !0 : l,
        p = o("CometRelay").useLazyLoadQuery(s, {
          account_id: e,
          default_value: d,
          expose_with_multiple_ad_accounts: m,
          log_exposure: c,
          param_name: n,
          should_fetch: r,
          universe_name: t,
        });
      return p == null || (u = p.lwi) == null
        ? void 0
        : u.expose_ad_account_for_qe_bool;
    }
    l.useAdsLWIExposeAdAccountBoolUniverseHook = u;
  },
  98,
);
