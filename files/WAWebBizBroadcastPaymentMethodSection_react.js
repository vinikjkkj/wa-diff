__d(
  "WAWebBizBroadcastPaymentMethodSection.react",
  [
    "WAWebBizBroadcastBusinessInfoContext.react",
    "WAWebBizPaymentMethodLabelContent.react",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebFlex.react",
    "WDSBanner.react",
    "WDSButton.react",
    "WDSSpinner.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "useWAWebBizBroadcastBillingInfo",
    "useWAWebBizBroadcastBillingWizard",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useEffect,
      m = u.useRef,
      p = {
        container: { justifyContent: "x1qughib", width: "xh8yej3", $$css: !0 },
        disclaimerRow: { paddingTop: "x16ovd2e", $$css: !0 },
      };
    function _(e) {
      var t,
        n,
        a,
        i = o("react-compiler-runtime").c(56),
        l = e.entryPoint,
        u = e.onBillingInfoChanged,
        c = o(
          "WAWebBizBroadcastBusinessInfoContext.react",
        ).useWAWebBizBroadcastBusinessInfoContext(),
        _ = c.adAccountId,
        f = c.isLoading,
        g = _ != null ? _ : "",
        h;
      i[0] !== g ? ((h = { assetId: g }), (i[0] = g), (i[1] = h)) : (h = i[1]);
      var y = o(
          "useWAWebBizBroadcastBillingInfo",
        ).useWAWebBizBroadcastBillingInfo(h),
        C = y.billingInfo,
        b = y.isLoading,
        v = y.primaryAction,
        S = y.refetch,
        R = y.requiredAction,
        L = r("useWAWebBizBroadcastBillingWizard")(_, l),
        E = L.openBillingWizard,
        k = C == null || (t = C.required_action) == null ? void 0 : t.message,
        I = (n = k == null ? void 0 : k.body) != null ? n : null,
        T = (a = R == null ? void 0 : R.label) != null ? a : null,
        D = (R == null ? void 0 : R.wizardName) != null,
        x = D && I != null,
        $;
      i[2] !== l || i[3] !== u || i[4] !== S
        ? (($ = function (t) {
            if (l != null) {
              var e;
              o(
                "WAWebBusinessBroadcastUserJourneyLogger",
              ).BusinessBroadcastUserJourneyLogger.billingWizardCompleted(l, {
                phase: t.phase,
                result: t.success ? "success" : "failure",
                return_code: (e = t.returnCode) != null ? e : void 0,
              });
            }
            t.success && (S(), u == null || u());
          }),
          (i[2] = l),
          (i[3] = u),
          (i[4] = S),
          (i[5] = $))
        : ($ = i[5]);
      var P = $,
        N;
      i[6] !== l || i[7] !== P || i[8] !== E || i[9] !== v
        ? ((N = function () {
            v != null &&
              (l != null &&
                o(
                  "WAWebBusinessBroadcastUserJourneyLogger",
                ).BusinessBroadcastUserJourneyLogger.paymentMethodChangeClicked(
                  l,
                ),
              E(v, P));
          }),
          (i[6] = l),
          (i[7] = P),
          (i[8] = E),
          (i[9] = v),
          (i[10] = N))
        : (N = i[10]);
      var M = N,
        w;
      i[11] !== l || i[12] !== P || i[13] !== E || i[14] !== R
        ? ((w = function () {
            R != null &&
              (l != null &&
                o(
                  "WAWebBusinessBroadcastUserJourneyLogger",
                ).BusinessBroadcastUserJourneyLogger.paymentRequiredActionClicked(
                  l,
                ),
              E(R, P));
          }),
          (i[11] = l),
          (i[12] = P),
          (i[13] = E),
          (i[14] = R),
          (i[15] = w))
        : (w = i[15]);
      var A = w,
        F = C == null ? void 0 : C.payment_section_details,
        O = m(!1),
        B;
      i[16] !== l ||
      i[17] !== D ||
      i[18] !== b ||
      i[19] !== f ||
      i[20] !== (F == null ? void 0 : F.type) ||
      i[21] !== (v == null ? void 0 : v.label) ||
      i[22] !== (v == null ? void 0 : v.wizardName) ||
      i[23] !== (R == null ? void 0 : R.wizardName)
        ? ((B = function () {
            if (!f && !b && !O.current && l != null) {
              var e, t, n;
              ((O.current = !0),
                o(
                  "WAWebBusinessBroadcastUserJourneyLogger",
                ).BusinessBroadcastUserJourneyLogger.paymentMethodSectionViewed(
                  l,
                  {
                    has_primary_action: (v == null ? void 0 : v.label) != null,
                    has_required_action: D,
                    payment_section_type:
                      (e = F == null ? void 0 : F.type) != null ? e : void 0,
                    primary_action_wizard_name:
                      (t = v == null ? void 0 : v.wizardName) != null
                        ? t
                        : void 0,
                    required_action_wizard_name:
                      (n = R == null ? void 0 : R.wizardName) != null
                        ? n
                        : void 0,
                  },
                ));
            }
          }),
          (i[16] = l),
          (i[17] = D),
          (i[18] = b),
          (i[19] = f),
          (i[20] = F == null ? void 0 : F.type),
          (i[21] = v == null ? void 0 : v.label),
          (i[22] = v == null ? void 0 : v.wizardName),
          (i[23] = R == null ? void 0 : R.wizardName),
          (i[24] = B))
        : (B = i[24]);
      var W = R == null ? void 0 : R.wizardName,
        q;
      if (
        (i[25] !== l ||
        i[26] !== D ||
        i[27] !== b ||
        i[28] !== f ||
        i[29] !== F ||
        i[30] !== v ||
        i[31] !== W
          ? ((q = [f, b, l, v, D, F, W]),
            (i[25] = l),
            (i[26] = D),
            (i[27] = b),
            (i[28] = f),
            (i[29] = F),
            (i[30] = v),
            (i[31] = W),
            (i[32] = q))
          : (q = i[32]),
        d(B, q),
        f || b)
      ) {
        var U;
        return (
          i[33] === Symbol.for("react.memo_cache_sentinel")
            ? ((U = s.jsx("div", {
                className: "x6s0dn4 x78zum5 xl56j7k xbktkl8",
                children: s.jsx(r("WDSSpinner.react"), { size: 32 }),
              })),
              (i[33] = U))
            : (U = i[33]),
          U
        );
      }
      var V;
      i[34] !== F
        ? ((V =
            F != null
              ? { label: F.label, labelAx: F.label_ax, logos: F.logos }
              : null),
          (i[34] = F),
          (i[35] = V))
        : (V = i[35]);
      var H = V,
        G = F == null ? void 0 : F.description,
        z;
      i[36] !== H
        ? ((z = s.jsx(r("WAWebBizPaymentMethodLabelContent.react"), {
            data: H,
          })),
          (i[36] = H),
          (i[37] = z))
        : (z = i[37]);
      var j;
      i[38] !== M || i[39] !== v
        ? ((j =
            (v == null ? void 0 : v.label) != null &&
            s.jsx(r("WDSButton.react"), {
              variant: "borderless",
              size: "medium",
              label: v.label,
              onPress: M,
            })),
          (i[38] = M),
          (i[39] = v),
          (i[40] = j))
        : (j = i[40]);
      var K;
      i[41] !== z || i[42] !== j
        ? ((K = s.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: p.container,
            children: [z, j],
          })),
          (i[41] = z),
          (i[42] = j),
          (i[43] = K))
        : (K = i[43]);
      var Q;
      i[44] !== G
        ? ((Q =
            G != null &&
            s.jsx(o("WAWebFlex.react").FlexRow, {
              xstyle: p.disclaimerRow,
              children: s.jsx(r("WDSText.react"), {
                type: "Body3",
                colorName: "contentDeemphasized",
                children: G,
              }),
            })),
          (i[44] = G),
          (i[45] = Q))
        : (Q = i[45]);
      var X;
      i[46] !== T ||
      i[47] !== I ||
      i[48] !== A ||
      i[49] !== (k == null ? void 0 : k.headline) ||
      i[50] !== x
        ? ((X =
            x &&
            I != null &&
            s.jsx("div", {
              className: "x1380le5",
              children: s.jsx(r("WDSBanner.react"), {
                type: "error",
                title: k == null ? void 0 : k.headline,
                body: I,
                actionText: T != null ? T : void 0,
                onAction: T != null ? A : void 0,
              }),
            })),
          (i[46] = T),
          (i[47] = I),
          (i[48] = A),
          (i[49] = k == null ? void 0 : k.headline),
          (i[50] = x),
          (i[51] = X))
        : (X = i[51]);
      var Y;
      return (
        i[52] !== K || i[53] !== Q || i[54] !== X
          ? ((Y = s.jsxs(s.Fragment, { children: [K, Q, X] })),
            (i[52] = K),
            (i[53] = Q),
            (i[54] = X),
            (i[55] = Y))
          : (Y = i[55]),
        Y
      );
    }
    l.default = _;
  },
  98,
);
