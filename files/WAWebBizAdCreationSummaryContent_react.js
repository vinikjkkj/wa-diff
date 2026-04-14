__d(
  "WAWebBizAdCreationSummaryContent.react",
  [
    "CometPlaceholder.react",
    "CometRelay",
    "WAWebBizAdCreationCurrencyUtils",
    "WAWebBizAdCreationSummaryContentQuery.graphql",
    "WAWebBizAdCreationSummaryTotalAmountRow.react",
    "WAWebBizAdCreationSummaryTotalsLineItems.react",
    "WAWebBizShimmerRows.react",
    "WAWebDivider.react",
    "WAWebFlex.react",
    "react",
    "withWAWebBizAdCreationSpecContext",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c =
        e !== void 0
          ? e
          : (e = n("WAWebBizAdCreationSummaryContentQuery.graphql"));
    function d(e) {
      var t = e.withDivider,
        n = t === void 0 ? !0 : t;
      return u.jsxs(o("WAWebFlex.react").FlexColumn, {
        align: "stretch",
        gap: 12,
        children: [
          u.jsx(r("WAWebBizShimmerRows.react"), { count: 3, height: 20 }),
          n && u.jsx(r("WAWebDivider.react"), { direction: "horizontal" }),
          u.jsx(r("WAWebBizShimmerRows.react"), { count: 1, height: 20 }),
        ],
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t,
        n = e.rowGap,
        a = e.withDivider,
        l = a === void 0 ? !0 : a,
        s = e.currency,
        m = e.paymentAccountId,
        p = e.selectedBudget,
        _ = e.selectedDurationInDays,
        f = r("WAWebBizAdCreationCurrencyUtils").getCurrencyOffset(s),
        g = p * _,
        h = o("CometRelay").useLazyLoadQuery(
          c,
          {
            asset_id: m,
            budget:
              f !== 0 ? { amount: (g / f).toString(), currency: s } : null,
          },
          { fetchPolicy: "store-and-network" },
        ),
        y =
          (t = h.billable_account_by_asset_id) == null ||
          (t = t.billing_info) == null
            ? void 0
            : t.estimated_tax;
      return u.jsxs(r("CometPlaceholder.react"), {
        fallback: u.jsx(d, { withDivider: l }),
        name: i.id,
        children: [
          u.jsx(r("WAWebBizAdCreationSummaryTotalsLineItems.react"), {
            estimatedTaxRef: y,
            rowGap: n,
          }),
          l && u.jsx(r("WAWebDivider.react"), { direction: "horizontal" }),
          u.jsx(r("WAWebBizAdCreationSummaryTotalAmountRow.react"), {
            estimatedTaxRef: y,
          }),
        ],
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    var p = r("withWAWebBizAdCreationSpecContext")(m, function (e) {
      return {
        currency: e.adAccountData.currency,
        paymentAccountId: e.adAccountData.paymentAccountID,
        selectedBudget: e.budgetData.budget,
        selectedDurationInDays: e.durationData.durationInDays,
      };
    });
    l.default = p;
  },
  98,
);
