__d(
  "WAWebBizAdCreationSuccessModal.react",
  [
    "fbt",
    "CometRelay",
    "WAWebBizAdCreationCurrencyUtils",
    "WAWebBizAdCreationLoggerContext",
    "WAWebBizAdCreationPaymentMethodLabel.react",
    "WAWebBizAdCreationSuccessModalQuery.graphql",
    "WAWebBizAdCreationSummaryContent.react",
    "WAWebBizAdLogger",
    "WAWebBizAdManagementLogger",
    "WAWebBizBoostingStatusUtils",
    "WAWebDivider.react",
    "WAWebFlex.react",
    "WAWebFlexBox.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebWdsIllAdsWaIcon.react",
    "WDSButton.react",
    "WDSText.react",
    "react",
    "useWAWebNativeAdsFlowIDContext",
    "withWAWebBizAdCreationSpecContext",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useContext,
      p = d.useEffect,
      _ = d.useRef,
      f = {
        container: {
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          rowGap: "x1j3ira4",
          $$css: !0,
        },
        illustrationContainer: {
          paddingTop: "x16ovd2e",
          paddingBottom: "x12xbjc7",
          alignSelf: "xkh2ocl",
          alignItems: "x6s0dn4",
          $$css: !0,
        },
        headerText: { textAlign: "x2b8uid", alignSelf: "xkh2ocl", $$css: !0 },
        details: {
          paddingInlineStart: "xdx6fka",
          paddingInlineEnd: "xvtqlqk",
          paddingLeft: null,
          paddingRight: null,
          paddingTop: "x1p57kb1",
          paddingBottom: "xscbp6u",
          width: "xh8yej3",
          boxSizing: "x9f619",
          rowGap: "x1f0uite",
          $$css: !0,
        },
        paymentMethodLabel: {
          rowGap: "x8a3fw1",
          columnGap: "x1aj3ljl",
          $$css: !0,
        },
      },
      g =
        e !== void 0
          ? e
          : (e = n("WAWebBizAdCreationSuccessModalQuery.graphql"));
    function h() {
      var e = r("useWAWebNativeAdsFlowIDContext")(),
        t = function () {
          (o("WAWebBizAdManagementLogger").logManageAdsEntryTap(
            o("WAWebBizAdManagementLogger").LWI_ENTRY_POINT.SMB_CREATED_AD,
            e.manageAdsFlowID,
            e.adCreationFlowID,
          ),
            o("WAWebModalManager").closeModalManager());
        };
      return c.jsx(r("WDSButton.react"), {
        testid: void 0,
        label: s._(/*BTDS*/ "OK"),
        variant: "filled",
        size: "medium",
        onPress: t,
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      var t,
        n = e.boostingStatus,
        a = e.currency,
        i = e.paymentAccountID,
        l = e.selectedBudget,
        u = e.selectedDurationInDays,
        d = m(r("WAWebBizAdCreationLoggerContext")),
        y = _(!1);
      p(
        function () {
          d != null &&
            !y.current &&
            ((y.current = !0),
            r("WAWebBizAdLogger").logCritical({
              event: "submit_flow_summary",
              loggerContext: d,
              action: "create",
              context: "ad",
              extra: { boosting_status: n },
            }));
        },
        [n, d],
      );
      var C = o("WAWebBizBoostingStatusUtils").getBoostingStatusDisplayText(n),
        b = r("WAWebBizAdCreationCurrencyUtils").getCurrencyOffset(a),
        v = l * u,
        S = o("CometRelay").useLazyLoadQuery(g, {
          asset_id: i,
          budget: b !== 0 ? { amount: (v / b).toString(), currency: a } : null,
        });
      return c.jsx(o("WAWebModal.react").Modal, {
        onOverlayClick: r("WAWebNoop"),
        actions: c.jsx(h, {}),
        type: o("WAWebModal.react").ModalTheme.BizToolsAdCreationSuccess,
        children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
          xstyle: f.container,
          children: [
            c.jsx(o("WAWebFlex.react").FlexColumn, {
              xstyle: f.illustrationContainer,
              children: c.jsx(o("WAWebWdsIllAdsWaIcon.react").WdsIllAdsWaIcon, {
                width: 180,
                height: 120,
              }),
            }),
            c.jsx(r("WDSText.react"), {
              type: "Headline1",
              colorName: "contentDefault",
              xstyle: f.headerText,
              children: s._(/*BTDS*/ "Your ad is being created"),
            }),
            c.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDeemphasized",
              textAlign: "center",
              children: s._(
                /*BTDS*/ "We'll let you know if it's approved within 24 hours or less.",
              ),
            }),
            c.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "stretch",
              xstyle: f.details,
              children: [
                C != null &&
                  c.jsxs(c.Fragment, {
                    children: [
                      c.jsxs(o("WAWebFlexBox.react").FlexRow, {
                        align: "center",
                        justify: "all",
                        children: [
                          c.jsx(r("WDSText.react"), {
                            colorName: "contentDeemphasized",
                            type: "Body2",
                            children: s._(/*BTDS*/ "Status"),
                          }),
                          c.jsx(r("WDSText.react"), {
                            colorName: "persistentAlwaysBranded",
                            type: "Body2",
                            children: C,
                          }),
                        ],
                      }),
                      c.jsx(r("WAWebDivider.react"), {
                        direction: "horizontal",
                      }),
                    ],
                  }),
                c.jsx(r("WAWebBizAdCreationSummaryContent.react"), {
                  rowGap: 12,
                  withDivider: !0,
                }),
                c.jsx(r("WAWebDivider.react"), { direction: "horizontal" }),
                c.jsxs(o("WAWebFlexBox.react").FlexRow, {
                  align: "center",
                  justify: "all",
                  children: [
                    c.jsx(r("WDSText.react"), {
                      colorName: "contentDeemphasized",
                      type: "Body2",
                      children: s._(/*BTDS*/ "Payment method"),
                    }),
                    c.jsx(r("WAWebBizAdCreationPaymentMethodLabel.react"), {
                      titleColor: "contentDeemphasized",
                      titleType: "Body2",
                      paymentSectionRef:
                        (t = S.billable_account_by_asset_id) == null ||
                        (t = t.billing_info) == null
                          ? void 0
                          : t.payment_section_details,
                      containerXstyle: f.paymentMethodLabel,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    var C = r("withWAWebBizAdCreationSpecContext")(y, function (e) {
      return {
        currency: e.adAccountData.currency,
        paymentAccountID: e.adAccountData.paymentAccountID,
        selectedBudget: e.budgetData.budget,
        selectedDurationInDays: e.durationData.durationInDays,
      };
    });
    l.default = C;
  },
  226,
);
