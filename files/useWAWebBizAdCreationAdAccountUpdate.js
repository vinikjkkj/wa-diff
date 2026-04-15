__d(
  "useWAWebBizAdCreationAdAccountUpdate",
  [
    "CometRelay",
    "FBLogger",
    "WAWebBizAdCreationBudgetUtils",
    "WAWebBizAdCreationConfigContext",
    "WAWebBizAdCreationSpecContext",
    "react",
    "react-compiler-runtime",
    "useWAWebBizAdCreationAdAccountUpdate_AdAccountDetailsQuery.graphql",
    "useWAWebBizAdCreationAdAccountUpdate_BudgetQuery.graphql",
    "useWAWebBizAdCreationSpecDispatcherContext",
    "waWebBizAdCreationAdAccountReducer",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = c.useCallback,
      m = c.useContext,
      p =
        e !== void 0
          ? e
          : (e = n(
              "useWAWebBizAdCreationAdAccountUpdate_AdAccountDetailsQuery.graphql",
            )),
      _ =
        s !== void 0
          ? s
          : (s = n("useWAWebBizAdCreationAdAccountUpdate_BudgetQuery.graphql"));
    function f(e) {
      var t,
        n,
        o = e.adAccount;
      if (o == null)
        return (
          r("FBLogger")("wa_ctwa_web").mustfix("ad_account response is null"),
          null
        );
      var a = o.id;
      if (a == null)
        return (
          r("FBLogger")("wa_ctwa_web").mustfix("ad_account id is null"),
          null
        );
      var i = o.legacyAccountID;
      if (i == null)
        return (
          r("FBLogger")("wa_ctwa_web").mustfix(
            "ad_account legacyAccountID id is null",
          ),
          null
        );
      var l = o.currencyCodeEnum;
      if (l == null)
        return (
          r("FBLogger")("wa_ctwa_web").mustfix(
            "currency code should not be null",
          ),
          null
        );
      var s = (t = o.paymentAccount) == null ? void 0 : t.id;
      return s == null
        ? (r("FBLogger")("wa_ctwa_web").mustfix(
            "payment_account.id should not be null",
          ),
          null)
        : {
            canSeeSAFRV3: (n = o.canSeeSAFRV3) != null ? n : !1,
            currency: l,
            id: a,
            legacyAccountID: i,
            name: o.name,
            paymentAccountID: s,
          };
    }
    function g(e) {
      var t,
        n,
        a = (t = e.lwi) == null ? void 0 : t.boostedComponent;
      return a == null
        ? (r("FBLogger")("wa_ctwa_web").mustfix(
            "boosted_component response is null",
          ),
          null)
        : o("WAWebBizAdCreationBudgetUtils").createBudgetSpec({
            offsetAmount:
              (n = a.spec) == null || (n = n.budget) == null
                ? void 0
                : n.offsetAmount,
            budgetOptions: a.boostedComponentOptions.budgetOptions,
          });
    }
    function h(e) {
      var t = o("react-compiler-runtime").c(7),
        n = o("CometRelay").useRelayEnvironment(),
        a = m(r("WAWebBizAdCreationSpecContext")),
        i = a.currentValue,
        l = m(r("WAWebBizAdCreationConfigContext")),
        s;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = [r("waWebBizAdCreationAdAccountReducer")]), (t[0] = s))
        : (s = t[0]);
      var u = r("useWAWebBizAdCreationSpecDispatcherContext")(s),
        c;
      return (
        t[1] !== e || t[2] !== l || t[3] !== u || t[4] !== n || t[5] !== i
          ? ((c = function () {
              var t = function (t) {
                  u({
                    adAccountData: t,
                    type: "ad_account_reducer.update_ad_account",
                  });
                },
                a = function (t, n) {
                  u({
                    adAccountData: t,
                    budgetData: n,
                    type: "ad_account_reducer.update_ad_account_with_currency_update",
                  });
                },
                s = function (t) {
                  return l == null
                    ? (r("FBLogger")("wa_ctwa_web").mustfix(
                        "Config context is null when trying to refetch budget",
                      ),
                      null)
                    : {
                        ad_account_id: t.legacyAccountID,
                        page_id: l.pageID,
                        product: l.product,
                        flow_id: l.flowID,
                      };
                },
                c = function (n, o) {
                  (r("FBLogger")("wa_ctwa_web")
                    .catching(n)
                    .mustfix(
                      "Error fetching budget after currency change, updating ad account only",
                    ),
                    t(o));
                },
                d = function (n, r) {
                  var e = g(n);
                  if (e == null) {
                    t(r);
                    return;
                  }
                  a(r, e);
                };
              o("CometRelay")
                .fetchQuery(n, p, { adAccountID: e })
                .subscribe({
                  error: y,
                  next: function (r) {
                    var e,
                      a = f(r);
                    if (a != null) {
                      var l =
                          (e = i.adAccountData) == null ? void 0 : e.currency,
                        u = a.currency,
                        m = u !== l;
                      if (!m) {
                        t(a);
                        return;
                      }
                      var p = s(a);
                      if (p == null) {
                        t(a);
                        return;
                      }
                      o("CometRelay")
                        .fetchQuery(n, _, { input: p })
                        .subscribe({
                          error: function (t) {
                            return c(t, a);
                          },
                          next: function (t) {
                            return d(t, a);
                          },
                        });
                    }
                  },
                });
            }),
            (t[1] = e),
            (t[2] = l),
            (t[3] = u),
            (t[4] = n),
            (t[5] = i),
            (t[6] = c))
          : (c = t[6]),
        c
      );
    }
    function y(e) {
      r("FBLogger")("wa_ctwa_web")
        .catching(e)
        .mustfix("Error fetching ad account after closing billing wizard");
    }
    l.default = h;
  },
  98,
);
