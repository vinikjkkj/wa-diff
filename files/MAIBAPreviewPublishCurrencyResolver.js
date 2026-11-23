__d(
  "MAIBAPreviewPublishCurrencyResolver",
  [
    "MAIBAL4AdAccountContext",
    "MAIBAPreviewPublishCurrencyResolverQuery.graphql",
    "MAIBAPreviewPublishReviewUtils",
    "RelayHooks",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = u.useEffect,
      d = u.useState,
      m =
        e !== void 0
          ? e
          : (e = n("MAIBAPreviewPublishCurrencyResolverQuery.graphql"));
    function p(e) {
      return {
        blocksTable:
          o("MAIBAPreviewPublishReviewUtils").collectDiffCurrencyFields(e)
            .length > 0,
        fields: o("MAIBAPreviewPublishReviewUtils").collectCurrencyFields(e),
      };
    }
    function _(e, t) {
      var n = o("MAIBAL4AdAccountContext").useMAIBAL4AdAccountContext(),
        r = n.selectedAdAccount,
        a = o("RelayHooks").useRelayEnvironment(),
        i = d({ accountID: "", currency: null, hasError: !1 }),
        l = i[0],
        s = i[1],
        u = r == null ? void 0 : r.currency,
        p = t != null && t !== "",
        _ = e.fields.length > 0 && u == null && p;
      if (
        (c(
          function () {
            if (!(!_ || t == null)) {
              var e = !0;
              return (
                o("RelayHooks")
                  .fetchQuery(a, m, { adAccountID: t })
                  .toPromise()
                  .then(function (n) {
                    if (e) {
                      var r;
                      s({
                        accountID: t,
                        currency:
                          n == null || (r = n.ad_account) == null
                            ? void 0
                            : r.currency,
                        hasError: !1,
                      });
                    }
                  })
                  .catch(function () {
                    e && s({ accountID: t, currency: null, hasError: !0 });
                  }),
                function () {
                  e = !1;
                }
              );
            }
          },
          [t, _, a],
        ),
        u != null)
      )
        return { hasError: !1, isLoading: !1, slice: u };
      var f = l.accountID === t;
      return {
        hasError: f && l.hasError,
        isLoading: e.blocksTable && e.fields.length > 0 && (!p || !f),
        slice: f ? l.currency : null,
      };
    }
    var f = {
        blocksTable: !0,
        collect: p,
        key: "ad_account_currency",
        useResolve: _,
      },
      g = f;
    l.default = g;
  },
  98,
);
