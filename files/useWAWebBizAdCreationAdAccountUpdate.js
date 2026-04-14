__d(
  "useWAWebBizAdCreationAdAccountUpdate",
  [
    "CometRelay",
    "FBLogger",
    "WAWebBizAdCreationBudgetUtils",
    "WAWebBizAdCreationConfigContext",
    "WAWebBizAdCreationSpecContext",
    "react",
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
      var t = o("CometRelay").useRelayEnvironment(),
        n = m(r("WAWebBizAdCreationSpecContext")),
        a = n.currentValue,
        i = m(r("WAWebBizAdCreationConfigContext")),
        l = r("useWAWebBizAdCreationSpecDispatcherContext")([
          r("waWebBizAdCreationAdAccountReducer"),
        ]);
      return d(
        function () {
          var n = function (t) {
              l({
                adAccountData: t,
                type: "ad_account_reducer.update_ad_account",
              });
            },
            s = function (t, n) {
              l({
                adAccountData: t,
                budgetData: n,
                type: "ad_account_reducer.update_ad_account_with_currency_update",
              });
            },
            u = function (t) {
              return i == null
                ? (r("FBLogger")("wa_ctwa_web").mustfix(
                    "Config context is null when trying to refetch budget",
                  ),
                  null)
                : {
                    ad_account_id: t.legacyAccountID,
                    page_id: i.pageID,
                    product: i.product,
                    flow_id: i.flowID,
                  };
            },
            c = function (t, o) {
              (r("FBLogger")("wa_ctwa_web")
                .catching(t)
                .mustfix(
                  "Error fetching budget after currency change, updating ad account only",
                ),
                n(o));
            },
            d = function (t, r) {
              var e = g(t);
              if (e == null) {
                n(r);
                return;
              }
              s(r, e);
            };
          o("CometRelay")
            .fetchQuery(t, p, { adAccountID: e })
            .subscribe({
              error: function (t) {
                r("FBLogger")("wa_ctwa_web")
                  .catching(t)
                  .mustfix(
                    "Error fetching ad account after closing billing wizard",
                  );
              },
              next: function (r) {
                var e,
                  i = f(r);
                if (i != null) {
                  var l = (e = a.adAccountData) == null ? void 0 : e.currency,
                    s = i.currency,
                    m = s !== l;
                  if (!m) {
                    n(i);
                    return;
                  }
                  var p = u(i);
                  if (p == null) {
                    n(i);
                    return;
                  }
                  o("CometRelay")
                    .fetchQuery(t, _, { input: p })
                    .subscribe({
                      error: function (t) {
                        return c(t, i);
                      },
                      next: function (t) {
                        return d(t, i);
                      },
                    });
                }
              },
            });
        },
        [e, i, l, t, a],
      );
    }
    l.default = h;
  },
  98,
);
