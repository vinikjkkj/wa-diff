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
    "react-compiler-runtime",
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
      var e = o("react-compiler-runtime").c(6),
        t = r("useWAWebNativeAdsFlowIDContext")(),
        n;
      e[0] !== t.adCreationFlowID || e[1] !== t.manageAdsFlowID
        ? ((n = function () {
            (o("WAWebBizAdManagementLogger").logManageAdsEntryTap(
              o("WAWebBizAdManagementLogger").LWI_ENTRY_POINT.SMB_CREATED_AD,
              t.manageAdsFlowID,
              t.adCreationFlowID,
            ),
              o("WAWebModalManager").closeModalManager());
          }),
          (e[0] = t.adCreationFlowID),
          (e[1] = t.manageAdsFlowID),
          (e[2] = n))
        : (n = e[2]);
      var a = n,
        i;
      e[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = s._(/*BTDS*/ "OK")), (e[3] = i))
        : (i = e[3]);
      var l;
      return (
        e[4] !== a
          ? ((l = c.jsx(r("WDSButton.react"), {
              testid: void 0,
              label: i,
              variant: "filled",
              size: "medium",
              onPress: a,
            })),
            (e[4] = a),
            (e[5] = l))
          : (l = e[5]),
        l
      );
    }
    function y(e) {
      var t,
        n = o("react-compiler-runtime").c(20),
        a = e.boostingStatus,
        i = e.currency,
        l = e.paymentAccountID,
        u = e.selectedBudget,
        d = e.selectedDurationInDays,
        y = m(r("WAWebBizAdCreationLoggerContext")),
        C = _(!1),
        b,
        v;
      (n[0] !== a || n[1] !== y
        ? ((b = function () {
            y != null &&
              !C.current &&
              ((C.current = !0),
              r("WAWebBizAdLogger").logCritical({
                event: "submit_flow_summary",
                loggerContext: y,
                action: "create",
                context: "ad",
                extra: { boosting_status: a },
              }));
          }),
          (v = [a, y]),
          (n[0] = a),
          (n[1] = y),
          (n[2] = b),
          (n[3] = v))
        : ((b = n[2]), (v = n[3])),
        p(b, v));
      var S;
      n[4] !== a
        ? ((S = o("WAWebBizBoostingStatusUtils").getBoostingStatusDisplayText(
            a,
          )),
          (n[4] = a),
          (n[5] = S))
        : (S = n[5]);
      var R = S,
        L = r("WAWebBizAdCreationCurrencyUtils").getCurrencyOffset(i),
        E = u * d,
        k = o("CometRelay").useLazyLoadQuery(g, {
          asset_id: l,
          budget: L !== 0 ? { amount: (E / L).toString(), currency: i } : null,
        }),
        I;
      n[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = c.jsx(h, {})), (n[6] = I))
        : (I = n[6]);
      var T;
      n[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = c.jsx(o("WAWebFlex.react").FlexColumn, {
            xstyle: f.illustrationContainer,
            children: c.jsx(o("WAWebWdsIllAdsWaIcon.react").WdsIllAdsWaIcon, {
              width: 180,
              height: 120,
            }),
          })),
          (n[7] = T))
        : (T = n[7]);
      var D;
      n[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = c.jsx(r("WDSText.react"), {
            type: "Headline1",
            colorName: "contentDefault",
            xstyle: f.headerText,
            children: s._(/*BTDS*/ "Your ad is being created"),
          })),
          (n[8] = D))
        : (D = n[8]);
      var x;
      n[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = c.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: "contentDeemphasized",
            textAlign: "center",
            children: s._(
              /*BTDS*/ "We'll let you know if it's approved within 24 hours or less.",
            ),
          })),
          (n[9] = x))
        : (x = n[9]);
      var $;
      n[10] !== R
        ? (($ =
            R != null &&
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
                      children: R,
                    }),
                  ],
                }),
                c.jsx(r("WAWebDivider.react"), { direction: "horizontal" }),
              ],
            })),
          (n[10] = R),
          (n[11] = $))
        : ($ = n[11]);
      var P, N;
      n[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = c.jsx(r("WAWebBizAdCreationSummaryContent.react"), {
            rowGap: 12,
            withDivider: !0,
          })),
          (P = c.jsx(r("WAWebDivider.react"), { direction: "horizontal" })),
          (n[12] = P),
          (n[13] = N))
        : ((P = n[12]), (N = n[13]));
      var M;
      n[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = c.jsx(r("WDSText.react"), {
            colorName: "contentDeemphasized",
            type: "Body2",
            children: s._(/*BTDS*/ "Payment method"),
          })),
          (n[14] = M))
        : (M = n[14]);
      var w =
          (t = k.billable_account_by_asset_id) == null ||
          (t = t.billing_info) == null
            ? void 0
            : t.payment_section_details,
        A;
      n[15] !== w
        ? ((A = c.jsxs(o("WAWebFlexBox.react").FlexRow, {
            align: "center",
            justify: "all",
            children: [
              M,
              c.jsx(r("WAWebBizAdCreationPaymentMethodLabel.react"), {
                titleColor: "contentDeemphasized",
                titleType: "Body2",
                paymentSectionRef: w,
                containerXstyle: f.paymentMethodLabel,
              }),
            ],
          })),
          (n[15] = w),
          (n[16] = A))
        : (A = n[16]);
      var F;
      return (
        n[17] !== A || n[18] !== $
          ? ((F = c.jsx(o("WAWebModal.react").Modal, {
              onOverlayClick: r("WAWebNoop"),
              actions: I,
              type: o("WAWebModal.react").ModalTheme.BizToolsAdCreationSuccess,
              children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
                xstyle: f.container,
                children: [
                  T,
                  D,
                  x,
                  c.jsxs(o("WAWebFlex.react").FlexColumn, {
                    align: "stretch",
                    xstyle: f.details,
                    children: [$, N, P, A],
                  }),
                ],
              }),
            })),
            (n[17] = A),
            (n[18] = $),
            (n[19] = F))
          : (F = n[19]),
        F
      );
    }
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
