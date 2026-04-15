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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(6),
        n = e.withDivider,
        a = n === void 0 ? !0 : n,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = u.jsx(r("WAWebBizShimmerRows.react"), {
            count: 3,
            height: 20,
          })),
          (t[0] = i))
        : (i = t[0]);
      var l;
      t[1] !== a
        ? ((l =
            a && u.jsx(r("WAWebDivider.react"), { direction: "horizontal" })),
          (t[1] = a),
          (t[2] = l))
        : (l = t[2]);
      var s;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = u.jsx(r("WAWebBizShimmerRows.react"), {
            count: 1,
            height: 20,
          })),
          (t[3] = s))
        : (s = t[3]);
      var c;
      return (
        t[4] !== l
          ? ((c = u.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "stretch",
              gap: 12,
              children: [i, l, s],
            })),
            (t[4] = l),
            (t[5] = c))
          : (c = t[5]),
        c
      );
    }
    function m(e) {
      var t,
        n = o("react-compiler-runtime").c(14),
        a = e.rowGap,
        l = e.withDivider,
        s = e.currency,
        m = e.paymentAccountId,
        p = e.selectedBudget,
        _ = e.selectedDurationInDays,
        f = l === void 0 ? !0 : l,
        g = r("WAWebBizAdCreationCurrencyUtils").getCurrencyOffset(s),
        h = p * _,
        y = o("CometRelay").useLazyLoadQuery(
          c,
          {
            asset_id: m,
            budget:
              g !== 0 ? { amount: (h / g).toString(), currency: s } : null,
          },
          { fetchPolicy: "store-and-network" },
        ),
        C =
          (t = y.billable_account_by_asset_id) == null ||
          (t = t.billing_info) == null
            ? void 0
            : t.estimated_tax,
        b;
      n[0] !== f
        ? ((b = u.jsx(d, { withDivider: f })), (n[0] = f), (n[1] = b))
        : (b = n[1]);
      var v;
      n[2] !== C || n[3] !== a
        ? ((v = u.jsx(r("WAWebBizAdCreationSummaryTotalsLineItems.react"), {
            estimatedTaxRef: C,
            rowGap: a,
          })),
          (n[2] = C),
          (n[3] = a),
          (n[4] = v))
        : (v = n[4]);
      var S;
      n[5] !== f
        ? ((S =
            f && u.jsx(r("WAWebDivider.react"), { direction: "horizontal" })),
          (n[5] = f),
          (n[6] = S))
        : (S = n[6]);
      var R;
      n[7] !== C
        ? ((R = u.jsx(r("WAWebBizAdCreationSummaryTotalAmountRow.react"), {
            estimatedTaxRef: C,
          })),
          (n[7] = C),
          (n[8] = R))
        : (R = n[8]);
      var L;
      return (
        n[9] !== b || n[10] !== v || n[11] !== S || n[12] !== R
          ? ((L = u.jsxs(r("CometPlaceholder.react"), {
              fallback: b,
              name: i.id,
              children: [v, S, R],
            })),
            (n[9] = b),
            (n[10] = v),
            (n[11] = S),
            (n[12] = R),
            (n[13] = L))
          : (L = n[13]),
        L
      );
    }
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
