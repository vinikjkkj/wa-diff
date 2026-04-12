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
        y,
        C,
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
        P = _(
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                yield $(e, r("WAWebNoop"));
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          [$],
        ),
        N =
          (t = x.billable_account_by_asset_id) == null ||
          (t = t.billing_info) == null
            ? void 0
            : t.payment_section_details,
        M =
          (a = x.billable_account_by_asset_id) == null ||
          (a = a.billing_info) == null
            ? void 0
            : a.required_action,
        w = M == null || (i = M.action) == null ? void 0 : i.wizard_name,
        A = w != null,
        F = M == null || (l = M.action) == null ? void 0 : l.wizard_props_json,
        O =
          (s = M == null || (u = M.message) == null ? void 0 : u.headline) !=
          null
            ? s
            : null,
        B =
          (c = M == null || (d = M.message) == null ? void 0 : d.body) != null
            ? c
            : null,
        W =
          (p = M == null || (y = M.action) == null ? void 0 : y.label) != null
            ? p
            : null,
        q = f(r("WAWebBizAdCreationLoggerContext")),
        U = f(r("WAWebBizAdCreationSpecContext")),
        V =
          U == null ||
          (C = U.currentValue) == null ||
          (C = C.adAccountData) == null
            ? void 0
            : C.id,
        H = h(!1),
        G = A && B != null;
      g(
        function () {
          G &&
            q != null &&
            !H.current &&
            ((H.current = !0),
            r("WAWebBizAdLogger").log({
              event: "payment_required_action_banner_impression",
              loggerContext: q,
              adAccountID: V,
            }));
        },
        [V, q, G],
      );
      var z = _(
        function () {
          (q != null &&
            r("WAWebBizAdLogger").log({
              event: "payment_required_action_banner_cta_click",
              loggerContext: q,
              adAccountID: V,
            }),
            w != null && P({ label: W, wizardName: w, wizardPropsJSON: F }));
        },
        [V, q, w, W, F, P],
      );
      return N == null
        ? null
        : m.jsxs(m.Fragment, {
            children: [
              m.jsx(r("WAWebBizAdCreationPaymentMethodRow.react"), {
                paymentSectionRef: N,
                openBillingWizard: P,
              }),
              m.jsx(r("WAWebBizAdCreationPaymentDescription.react"), {
                paymentSectionRef: N,
                openBillingWizard: P,
              }),
              G &&
                B != null &&
                m.jsx("div", {
                  className: "x1380le5 x14mko6t xefnzgg x1uvdrpn",
                  children: m.jsx(r("WDSBanner.react"), {
                    type: "error",
                    title: O,
                    body: B,
                    actionText: W != null ? W : void 0,
                    onAction: W != null ? z : void 0,
                  }),
                }),
            ],
          });
    }
    v.displayName = v.name + " [from " + i.id + "]";
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
      return m.jsxs(o("WAWebFlexBox.react").FlexRow, {
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
      });
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E(e) {
      var t,
        n,
        a,
        l = e.adAccountsRef,
        u = e.emailOnboardingDataRef,
        c = e.facebookProfileRef,
        d = o("CometRelay").useFragment(y, c),
        p = o("CometRelay").useFragment(C, l),
        _ =
          ((t =
            p == null || (n = p.wa_ctwa_ad_accounts) == null
              ? void 0
              : n.count) != null
            ? t
            : 0) > 1,
        b = r("useWAWebInfoButtonUtil")(
          r("WAWebBizAdCreationPaymentInfoModal.react"),
        ),
        v = f(r("WAWebBizAdCreationLoggerContext")),
        R = f(r("WAWebBizAdCreationSpecContext")),
        E =
          R == null ||
          (a = R.currentValue) == null ||
          (a = a.adAccountData) == null
            ? void 0
            : a.id,
        k = h(!1);
      return (
        g(
          function () {
            v != null &&
              !k.current &&
              ((k.current = !0),
              r("WAWebBizAdLogger").log({
                event: "payment_section_impression",
                loggerContext: v,
                adAccountID: E,
              }));
          },
          [E, v],
        ),
        m.jsx(r("WAWebBizAdCard.react"), {
          header: s._(/*BTDS*/ "Payment details"),
          titleAccessory: b,
          children: m.jsxs(o("WAWebFlex.react").FlexColumn, {
            align: "stretch",
            children: [
              m.jsx(r("WAWebBizAdCreationPaymentProfile.react"), {
                facebookProfileRef: d,
              }),
              _ &&
                m.jsx(r("WAWebBizAdCreationPaymentAdAccountRow.react"), {
                  adAccountsRef: p,
                }),
              m.jsx(r("CometPlaceholder.react"), {
                fallback: m.jsx(L, {}),
                name: i.id,
                children: m.jsx(S, { emailOnboardingDataRef: u }),
              }),
            ],
          }),
        })
      );
    }
    ((E.displayName = E.name + " [from " + i.id + "]"), (l.default = E));
  },
  226,
);
