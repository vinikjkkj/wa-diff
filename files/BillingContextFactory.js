__d(
  "BillingContextFactory",
  [
    "BillingContextFactoryFragment_fragment.graphql",
    "BillingContextFactoryQuery.graphql",
    "BillingContextUtils",
    "BillingError",
    "BillingGKLogExposure",
    "BillingQELogExposure",
    "BillingWizardProductAppContext",
    "RelayHooks",
    "react",
    "react-compiler-runtime",
    "useBillingRelay",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.createContext,
      p = d.useContext,
      _ = d.useEffect,
      f = d.useMemo,
      g = d.useRef,
      h = d.useState,
      y = e !== void 0 ? e : (e = n("BillingContextFactoryQuery.graphql")),
      C =
        s !== void 0
          ? s
          : (s = n("BillingContextFactoryFragment_fragment.graphql"));
    function b(e) {
      var t,
        n,
        r,
        a,
        i,
        l = [].concat(
          (t =
            e == null || (n = e.billing_qe_fetch_all) == null
              ? void 0
              : n.results) != null
            ? t
            : [],
          (r =
            e == null || (a = e.qeInitCheckByBusiness) == null
              ? void 0
              : a.results) != null
            ? r
            : [],
        );
      return l.length === 0
        ? null
        : l.reduce(
            function (e, t) {
              var n;
              return t == null
                ? e
                : ((n = t.qe_results) != null ? n : []).reduce(function (e, t) {
                    var n,
                      r = t.universe_name,
                      o = (n = t.holdout) != null ? n : !1;
                    if (r != null) {
                      var a, i;
                      return babelHelpers.extends(
                        {},
                        e,
                        ((i = {}),
                        (i[r] = ((a = t.params) != null ? a : []).reduce(
                          function (e, t) {
                            var n = t.param_name;
                            if (n != null) {
                              var r,
                                o = t.value,
                                a =
                                  o === "true"
                                    ? !0
                                    : o === "false"
                                      ? !1
                                      : o != null
                                        ? o
                                        : null;
                              return babelHelpers.extends(
                                {},
                                e,
                                ((r = {}), (r[n] = a), r),
                              );
                            }
                            return e;
                          },
                          { holdout: o },
                        )),
                        i),
                      );
                    }
                    return e;
                  }, e);
            },
            {
              product: o(
                "BillingWizardProductAppContext",
              ).getProductFromTypename(
                (i = e.billable_account_by_asset_id) == null
                  ? void 0
                  : i.__typename,
              ),
            },
          );
    }
    function v(e) {
      var t,
        n,
        r =
          e == null || (t = e.billing_gk_fetch_all) == null
            ? void 0
            : t.results;
      if (r == null || r.length === 0) return null;
      var a = r[0];
      return a == null
        ? null
        : r.reduce(
            function (e, t) {
              var n;
              return t == null ||
                (t.payment_account_id == null && t.business_id == null)
                ? e
                : ((n = t.gk_results) != null ? n : []).reduce(function (e, t) {
                    var n = t.name;
                    if (n != null) {
                      var r, o;
                      return babelHelpers.extends(
                        {},
                        e,
                        ((o = {}),
                        (o[n] = { gkValue: (r = t.value) != null ? r : !1 }),
                        o),
                      );
                    }
                    return e;
                  }, e);
            },
            {
              product: o(
                "BillingWizardProductAppContext",
              ).getProductFromTypename(
                (n = e.billable_account_by_asset_id) == null
                  ? void 0
                  : n.__typename,
              ),
            },
          );
    }
    function S(e, t) {
      var n = m(null);
      function a(a) {
        var i = a.appType,
          l = a.billingEntryPoint,
          s = a.children,
          u = a.fragment,
          d = a.paymentAccountID,
          m = d === void 0 ? "" : d,
          p = r("useBillingRelay")(),
          y = p.commitMutation,
          S = o("RelayHooks").useRefetchableFragment(C, u),
          R = S[0],
          L = S[1],
          E = R.billable_account_by_asset_id,
          k = R.xfb_is_eligible_for_ads_manager_app_payment_hub_upsell,
          I = g(L);
        _(
          function () {
            I.current = L;
          },
          [L],
        );
        var T = h(m),
          D = T[0],
          x = T[1],
          $ = o("BillingQELogExposure").getLogQEExposure(e, D, y),
          P = o("BillingGKLogExposure").getLogGKExposure(t, D, y),
          N = f(
            function () {
              return v(R);
            },
            [R],
          ),
          M = f(
            function () {
              return b(R);
            },
            [R],
          ),
          w = f(
            function () {
              var n;
              return {
                getApp: function () {
                  return i != null ? i : "DEFAULT";
                },
                getBillingEntryPoint: function () {
                  return l != null ? l : "unknown";
                },
                getProduct: function () {
                  return o(
                    "BillingWizardProductAppContext",
                  ).getProductFromTypename(E == null ? void 0 : E.__typename);
                },
                gkContext: o("BillingContextUtils").buildGKContext(
                  t,
                  P,
                  N,
                  D,
                  x,
                ),
                qeContext: o("BillingContextUtils").buildQEContext(
                  e,
                  $,
                  M,
                  D,
                  x,
                ),
                updatePaymentAccountID: function (t) {
                  t !== D &&
                    (x(t),
                    I.current(
                      { paymentAccountID: t },
                      { fetchPolicy: "store-or-network" },
                    ));
                },
                upsells: {
                  adsManagerAppUpsell:
                    (n = k == null ? void 0 : k.enabled) != null ? n : !1,
                },
              };
            },
            [
              D,
              i,
              l,
              E == null ? void 0 : E.__typename,
              x,
              k == null ? void 0 : k.enabled,
              N,
              M,
            ],
          );
        return c.jsx(n.Provider, { value: w, children: s });
      }
      a.displayName = a.name + " [from " + i.id + "]";
      function l() {
        var e = p(n);
        if (e == null)
          throw new (r("BillingError"))(
            "BillingQEContext context is missing or null probably because paymentAccountID was empty",
            "required parameter is missing or invalid",
            { event_action: "unknown", event_side: "client_side" },
            { action: "unknown", document_name: "wizard" },
            "critical_error",
          );
        return e.qeContext;
      }
      function s() {
        var e = p(n);
        if (e == null)
          throw new (r("BillingError"))(
            "BillingGKContext context is missing or null probably because paymentAccountID was empty",
            "required parameter is missing or invalid",
            { event_action: "unknown", event_side: "client_side" },
            { action: "unknown", document_name: "wizard" },
            "critical_error",
          );
        return e.gkContext;
      }
      function u() {
        var e = p(n);
        return e == null ? d : e.getProduct;
      }
      function d() {
        return "DEFAULT";
      }
      function y() {
        var e = p(n);
        return e == null ? S : e.getBillingEntryPoint;
      }
      function S() {
        return "unknown";
      }
      function R() {
        var e = p(n);
        if (e == null) return E;
        var t = e.getProduct();
        return t === "WORKPLACE" || t === "WHATSAPP" || t === "CAM"
          ? L
          : e.getApp;
      }
      function L() {
        return "DEFAULT";
      }
      function E() {
        return "DEFAULT";
      }
      function k() {
        var e = o("react-compiler-runtime").c(1),
          t = p(n);
        if (t == null) {
          var r;
          return (
            e[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((r = { adsManagerAppUpsell: !1 }), (e[0] = r))
              : (r = e[0]),
            r
          );
        }
        return t.upsells;
      }
      return {
        BillingContext: n,
        BillingContextProvider: a,
        useBillingGK: s,
        useBillingQE: l,
        useBillingWizardApp: R,
        useBillingWizardEntryPoint: y,
        useBillingWizardProduct: u,
        useBillingWizardUpsells: k,
      };
    }
    ((l.BillingContextFactoryQuery = y),
      (l.buildInitCheckQESnapshotFromResponse = b),
      (l.buildInitCheckGKSnapshotFromResponse = v),
      (l.buildBillingContextFactory = S));
  },
  98,
);
