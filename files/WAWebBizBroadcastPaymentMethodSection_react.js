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
        i = e.entryPoint,
        l = e.onBillingInfoChanged,
        u = o(
          "WAWebBizBroadcastBusinessInfoContext.react",
        ).useWAWebBizBroadcastBusinessInfoContext(),
        _ = u.adAccountId,
        f = u.isLoading,
        g = o(
          "useWAWebBizBroadcastBillingInfo",
        ).useWAWebBizBroadcastBillingInfo({ assetId: _ != null ? _ : "" }),
        h = g.billingInfo,
        y = g.isLoading,
        C = g.primaryAction,
        b = g.refetch,
        v = g.requiredAction,
        S = r("useWAWebBizBroadcastBillingWizard")(_, i),
        R = S.openBillingWizard,
        L = h == null || (t = h.required_action) == null ? void 0 : t.message,
        E = (n = L == null ? void 0 : L.body) != null ? n : null,
        k = (a = v == null ? void 0 : v.label) != null ? a : null,
        I = (v == null ? void 0 : v.wizardName) != null,
        T = I && E != null,
        D = c(
          function (e) {
            if (i != null) {
              var t;
              o(
                "WAWebBusinessBroadcastUserJourneyLogger",
              ).BusinessBroadcastUserJourneyLogger.billingWizardCompleted(i, {
                phase: e.phase,
                result: e.success ? "success" : "failure",
                return_code: (t = e.returnCode) != null ? t : void 0,
              });
            }
            e.success && (b(), l == null || l());
          },
          [b, l, i],
        ),
        x = c(
          function () {
            C != null &&
              (i != null &&
                o(
                  "WAWebBusinessBroadcastUserJourneyLogger",
                ).BusinessBroadcastUserJourneyLogger.paymentMethodChangeClicked(
                  i,
                ),
              R(C, D));
          },
          [R, C, D, i],
        ),
        $ = c(
          function () {
            v != null &&
              (i != null &&
                o(
                  "WAWebBusinessBroadcastUserJourneyLogger",
                ).BusinessBroadcastUserJourneyLogger.paymentRequiredActionClicked(
                  i,
                ),
              R(v, D));
          },
          [R, v, D, i],
        ),
        P = h == null ? void 0 : h.payment_section_details,
        N = m(!1);
      if (
        (d(
          function () {
            if (!f && !y && !N.current && i != null) {
              var e, t, n;
              ((N.current = !0),
                o(
                  "WAWebBusinessBroadcastUserJourneyLogger",
                ).BusinessBroadcastUserJourneyLogger.paymentMethodSectionViewed(
                  i,
                  {
                    has_primary_action: (C == null ? void 0 : C.label) != null,
                    has_required_action: I,
                    payment_section_type:
                      (e = P == null ? void 0 : P.type) != null ? e : void 0,
                    primary_action_wizard_name:
                      (t = C == null ? void 0 : C.wizardName) != null
                        ? t
                        : void 0,
                    required_action_wizard_name:
                      (n = v == null ? void 0 : v.wizardName) != null
                        ? n
                        : void 0,
                  },
                ));
            }
          },
          [f, y, i, C, I, P, v == null ? void 0 : v.wizardName],
        ),
        f || y)
      )
        return s.jsx("div", {
          className: "x6s0dn4 x78zum5 xl56j7k xbktkl8",
          children: s.jsx(r("WDSSpinner.react"), { size: 32 }),
        });
      var M =
          P != null
            ? { label: P.label, labelAx: P.label_ax, logos: P.logos }
            : null,
        w = P == null ? void 0 : P.description;
      return s.jsxs(s.Fragment, {
        children: [
          s.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: p.container,
            children: [
              s.jsx(r("WAWebBizPaymentMethodLabelContent.react"), { data: M }),
              (C == null ? void 0 : C.label) != null &&
                s.jsx(r("WDSButton.react"), {
                  variant: "borderless",
                  size: "medium",
                  label: C.label,
                  onPress: x,
                }),
            ],
          }),
          w != null &&
            s.jsx(o("WAWebFlex.react").FlexRow, {
              xstyle: p.disclaimerRow,
              children: s.jsx(r("WDSText.react"), {
                type: "Body3",
                colorName: "contentDeemphasized",
                children: w,
              }),
            }),
          T &&
            E != null &&
            s.jsx("div", {
              className: "x1380le5",
              children: s.jsx(r("WDSBanner.react"), {
                type: "error",
                title: L == null ? void 0 : L.headline,
                body: E,
                actionText: k != null ? k : void 0,
                onAction: k != null ? $ : void 0,
              }),
            }),
        ],
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  98,
);
