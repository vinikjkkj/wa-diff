__d(
  "WAWebBizAdCreationPaymentSection.react",
  [
    "fbt",
    "CometPlaceholder.react",
    "CometRelay",
    "WAWebBaseShimmerComponents.react",
    "WAWebBizAdCard.react",
    "WAWebBizAdCreationCurrencyUtils",
    "WAWebBizAdCreationLoggerContext",
    "WAWebBizAdCreationPaymentAdAccountRow.react",
    "WAWebBizAdCreationPaymentDescription.react",
    "WAWebBizAdCreationPaymentInfoModal.react",
    "WAWebBizAdCreationPaymentMethodRow.react",
    "WAWebBizAdCreationPaymentProfile.react",
    "WAWebBizAdCreationPaymentRefetchContext",
    "WAWebBizAdCreationPaymentSectionQuery.graphql",
    "WAWebBizAdCreationPaymentSection_adAccounts.graphql",
    "WAWebBizAdCreationPaymentSection_facebookProfile.graphql",
    "WAWebBizAdCreationSpecContext",
    "WAWebBizAdLogger",
    "WAWebFlex.react",
    "WAWebFlexBox.react",
    "WAWebNoop",
    "WDSBanner.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebBizAdCreationOpenBillingWizard",
    "useWAWebInfoButtonUtil",
    "withWAWebBizAdCreationSpecContext",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d,
      m = d || (d = o("react")),
      p = d,
      _ = p.useCallback,
      f = p.useContext,
      g = p.useEffect,
      h = p.useRef,
      y =
        e !== void 0
          ? e
          : (e = n("WAWebBizAdCreationPaymentSection_facebookProfile.graphql")),
      C =
        u !== void 0
          ? u
          : (u = n("WAWebBizAdCreationPaymentSection_adAccounts.graphql")),
      b =
        c !== void 0
          ? c
          : (c = n("WAWebBizAdCreationPaymentSectionQuery.graphql"));
    function v(e) {
      var t,
        a,
        i,
        l,
        s,
        u,
        c,
        d,
        p,
        _,
        y,
        C = o("react-compiler-runtime").c(28),
        v = e.emailOnboardingDataRef,
        S = e.currency,
        R = e.paymentAccountID,
        L = e.selectedBudget,
        E = e.selectedDurationInDays,
        k = r("WAWebBizAdCreationCurrencyUtils").getCurrencyOffset(S),
        I = L * E,
        T = o(
          "WAWebBizAdCreationPaymentRefetchContext",
        ).useWAWebBizAdCreationPaymentRefetch(),
        D = T.billingFetchKey,
        x = o("CometRelay").useLazyLoadQuery(
          b,
          {
            asset_id: R,
            budget:
              k !== 0 ? { amount: (I / k).toString(), currency: S } : null,
          },
          { fetchKey: D, fetchPolicy: "network-only" },
        ),
        $ = r("useWAWebBizAdCreationOpenBillingWizard")(v),
        P;
      C[0] !== $
        ? ((P = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                yield $(e, r("WAWebNoop"));
              },
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })()),
          (C[0] = $),
          (C[1] = P))
        : (P = C[1]);
      var N = P,
        M =
          (t = x.billable_account_by_asset_id) == null ||
          (t = t.billing_info) == null
            ? void 0
            : t.payment_section_details,
        w =
          (a = x.billable_account_by_asset_id) == null ||
          (a = a.billing_info) == null
            ? void 0
            : a.required_action,
        A = w == null || (i = w.action) == null ? void 0 : i.wizard_name,
        F = A != null,
        O = w == null || (l = w.action) == null ? void 0 : l.wizard_props_json,
        B =
          (s = w == null || (u = w.message) == null ? void 0 : u.headline) !=
          null
            ? s
            : null,
        W =
          (c = w == null || (d = w.message) == null ? void 0 : d.body) != null
            ? c
            : null,
        q =
          (p = w == null || (_ = w.action) == null ? void 0 : _.label) != null
            ? p
            : null,
        U = f(r("WAWebBizAdCreationLoggerContext")),
        V = f(r("WAWebBizAdCreationSpecContext")),
        H =
          V == null ||
          (y = V.currentValue) == null ||
          (y = y.adAccountData) == null
            ? void 0
            : y.id,
        G = h(!1),
        z = F && W != null,
        j,
        K;
      (C[2] !== H || C[3] !== U || C[4] !== z
        ? ((j = function () {
            z &&
              U != null &&
              !G.current &&
              ((G.current = !0),
              r("WAWebBizAdLogger").log({
                event: "payment_required_action_banner_impression",
                loggerContext: U,
                adAccountID: H,
              }));
          }),
          (K = [H, U, z]),
          (C[2] = H),
          (C[3] = U),
          (C[4] = z),
          (C[5] = j),
          (C[6] = K))
        : ((j = C[5]), (K = C[6])),
        g(j, K));
      var Q;
      C[7] !== H ||
      C[8] !== q ||
      C[9] !== U ||
      C[10] !== N ||
      C[11] !== A ||
      C[12] !== O
        ? ((Q = function () {
            (U != null &&
              r("WAWebBizAdLogger").log({
                event: "payment_required_action_banner_cta_click",
                loggerContext: U,
                adAccountID: H,
              }),
              A != null && N({ label: q, wizardName: A, wizardPropsJSON: O }));
          }),
          (C[7] = H),
          (C[8] = q),
          (C[9] = U),
          (C[10] = N),
          (C[11] = A),
          (C[12] = O),
          (C[13] = Q))
        : (Q = C[13]);
      var X = Q;
      if (M == null) return null;
      var Y, J;
      C[14] !== N || C[15] !== M
        ? ((Y = m.jsx(r("WAWebBizAdCreationPaymentMethodRow.react"), {
            paymentSectionRef: M,
            openBillingWizard: N,
          })),
          (J = m.jsx(r("WAWebBizAdCreationPaymentDescription.react"), {
            paymentSectionRef: M,
            openBillingWizard: N,
          })),
          (C[14] = N),
          (C[15] = M),
          (C[16] = Y),
          (C[17] = J))
        : ((Y = C[16]), (J = C[17]));
      var Z;
      C[18] !== q || C[19] !== W || C[20] !== B || C[21] !== X || C[22] !== z
        ? ((Z =
            z &&
            W != null &&
            m.jsx("div", {
              className: "x1380le5 x14mko6t xefnzgg x1uvdrpn",
              children: m.jsx(r("WDSBanner.react"), {
                type: "error",
                title: B,
                body: W,
                actionText: q != null ? q : void 0,
                onAction: q != null ? X : void 0,
              }),
            })),
          (C[18] = q),
          (C[19] = W),
          (C[20] = B),
          (C[21] = X),
          (C[22] = z),
          (C[23] = Z))
        : (Z = C[23]);
      var ee;
      return (
        C[24] !== Y || C[25] !== J || C[26] !== Z
          ? ((ee = m.jsxs(m.Fragment, { children: [Y, J, Z] })),
            (C[24] = Y),
            (C[25] = J),
            (C[26] = Z),
            (C[27] = ee))
          : (ee = C[27]),
        ee
      );
    }
    var S = r("withWAWebBizAdCreationSpecContext")(v, function (e) {
        return {
          currency: e.adAccountData.currency,
          paymentAccountID: e.adAccountData.paymentAccountID,
          selectedBudget: e.budgetData.budget,
          selectedDurationInDays: e.durationData.durationInDays,
        };
      }),
      R = {
        fallback: {
          minHeight: "xbktkl8",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "x1qughib",
          $$css: !0,
        },
      };
    function L() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = m.jsxs(o("WAWebFlexBox.react").FlexRow, {
              xstyle: R.fallback,
              children: [
                m.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
                  height: 20,
                  width: 210,
                }),
                m.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
                  height: 40,
                  width: 80,
                }),
              ],
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function E(e) {
      var t,
        n,
        a,
        l = o("react-compiler-runtime").c(20),
        u = e.adAccountsRef,
        c = e.emailOnboardingDataRef,
        d = e.facebookProfileRef,
        p = o("CometRelay").useFragment(y, d),
        _ = o("CometRelay").useFragment(C, u),
        b =
          ((t =
            _ == null || (n = _.wa_ctwa_ad_accounts) == null
              ? void 0
              : n.count) != null
            ? t
            : 0) > 1,
        v = r("useWAWebInfoButtonUtil")(
          r("WAWebBizAdCreationPaymentInfoModal.react"),
        ),
        R = f(r("WAWebBizAdCreationLoggerContext")),
        E = f(r("WAWebBizAdCreationSpecContext")),
        k =
          E == null ||
          (a = E.currentValue) == null ||
          (a = a.adAccountData) == null
            ? void 0
            : a.id,
        I = h(!1),
        T,
        D;
      (l[0] !== k || l[1] !== R
        ? ((T = function () {
            R != null &&
              !I.current &&
              ((I.current = !0),
              r("WAWebBizAdLogger").log({
                event: "payment_section_impression",
                loggerContext: R,
                adAccountID: k,
              }));
          }),
          (D = [k, R]),
          (l[0] = k),
          (l[1] = R),
          (l[2] = T),
          (l[3] = D))
        : ((T = l[2]), (D = l[3])),
        g(T, D));
      var x;
      l[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = s._(/*BTDS*/ "Payment details")), (l[4] = x))
        : (x = l[4]);
      var $;
      l[5] !== p
        ? (($ = m.jsx(r("WAWebBizAdCreationPaymentProfile.react"), {
            facebookProfileRef: p,
          })),
          (l[5] = p),
          (l[6] = $))
        : ($ = l[6]);
      var P;
      l[7] !== _ || l[8] !== b
        ? ((P =
            b &&
            m.jsx(r("WAWebBizAdCreationPaymentAdAccountRow.react"), {
              adAccountsRef: _,
            })),
          (l[7] = _),
          (l[8] = b),
          (l[9] = P))
        : (P = l[9]);
      var N;
      l[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = m.jsx(L, {})), (l[10] = N))
        : (N = l[10]);
      var M;
      l[11] !== c
        ? ((M = m.jsx(r("CometPlaceholder.react"), {
            fallback: N,
            name: i.id,
            children: m.jsx(S, { emailOnboardingDataRef: c }),
          })),
          (l[11] = c),
          (l[12] = M))
        : (M = l[12]);
      var w;
      l[13] !== $ || l[14] !== P || l[15] !== M
        ? ((w = m.jsxs(o("WAWebFlex.react").FlexColumn, {
            align: "stretch",
            children: [$, P, M],
          })),
          (l[13] = $),
          (l[14] = P),
          (l[15] = M),
          (l[16] = w))
        : (w = l[16]);
      var A;
      return (
        l[17] !== v || l[18] !== w
          ? ((A = m.jsx(r("WAWebBizAdCard.react"), {
              header: x,
              titleAccessory: v,
              children: w,
            })),
            (l[17] = v),
            (l[18] = w),
            (l[19] = A))
          : (A = l[19]),
        A
      );
    }
    l.default = E;
  },
  226,
);
