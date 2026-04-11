__d(
  "WAWebBizPaymentsHomeManagementPaymentMethodsSection.react",
  [
    "fbt",
    "WAWebBizFrontendGatingUtils",
    "WAWebBrazilPixKeyFormattingUtils",
    "WAWebConfirmPopup.react",
    "WAWebCustomPaymentMethods",
    "WAWebDrawerButton.react",
    "WAWebDrawerSection.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebPaymentOnboardingFlowLoadable",
    "WAWebPaymentsUserActionLogging",
    "WAWebPixLogoIcon.react",
    "WAWebPlusRoundedIcon.react",
    "WAWebRoundShape.react",
    "WAWebSyncdMdSyncFieldstatMeta",
    "WAWebUserPrefsCustomPaymentMethods",
    "WAWebWamEnumPaymentActionTargets",
    "WAWebWamEnumPaymentActionTypes",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebForceUpdate",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        paymentMethodsTextContainer: {
          paddingTop: "x1tiyuxx",
          paddingBottom: "x1nbhmlj",
          paddingInlineStart: "xdx6fka",
          paddingInlineEnd: "xvtqlqk",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        pixIconBackground: { fill: "xy6m8k3", $$css: !0 },
        pixIconPrimary: { fill: "x1h227xn", $$css: !0 },
        plusIconColor: { color: "x14ug900", $$css: !0 },
        reducedVerticalSpacing: { marginTop: "xfl633f", $$css: !0 },
        roundShapeCustomSize: {
          backgroundColor: "x1h3rtpe",
          height: "xc9qbxq",
          width: "x14qfxbe",
          $$css: !0,
        },
      },
      d = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: {
          surface: "unknown",
          viewName: "payments-home-methods",
        },
        title: s._(/*BTDS*/ "Feature not supported on web"),
        okText: r("WAWebFbtCommon")("OK"),
        onOK: o("WAWebModalManager").closeModalManager,
        children: u.jsx("div", {
          children: o("WAWebUserPrefsCustomPaymentMethods").isPIXValid()
            ? s._(
                /*BTDS*/ "To update or delete your Pix key, log into a mobile device.",
              )
            : s._(/*BTDS*/ "To add a Pix key, log into a mobile device."),
        }),
      }),
      m = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebUserPrefsCustomPaymentMethods").isPIXValid(),
            t = yield o(
              "WAWebSyncdMdSyncFieldstatMeta",
            ).MdSyncFieldStatsMeta.getMdSessionId();
          (o("WAWebPaymentsUserActionLogging").logPaymentsHomeEvent({
            actionTarget: o("WAWebWamEnumPaymentActionTargets")
              .PAYMENT_ACTION_TARGETS.PAYMENTS_HOME_PIX_KEY,
            paymentActionType: o("WAWebWamEnumPaymentActionTypes")
              .PAYMENT_ACTION_TYPES.CLICK,
            paymentsEventId: t,
            queryParams: JSON.stringify({ pixExists: e }),
          }),
            o("WAWebBizFrontendGatingUtils").isPixOnWebEnabled() &&
              o(
                "WAWebPaymentsUserActionLogging",
              ).logAddOrUpdatePixEntryPointEvent({
                actionTarget: o("WAWebUserPrefsCustomPaymentMethods").getPIX()
                  ? o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
                      .EDIT_BUTTON
                  : o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
                      .ADD_BUTTON,
                paymentsEventId: yield o(
                  "WAWebSyncdMdSyncFieldstatMeta",
                ).MdSyncFieldStatsMeta.getMdSessionId(),
                previousScreenName: "payment_home",
                referral: "payment_home.add_payment_method",
                screen: "add_non_native_p2m_payment_method",
              }),
            o("WAWebBizFrontendGatingUtils").isPixOnWebEnabled()
              ? o("WAWebModalManager").ModalManager.open(
                  u.jsx(
                    o("WAWebPaymentOnboardingFlowLoadable")
                      .PaymentOnboardingFlowLoadable,
                    {
                      previousScreen: "payment_home",
                      referral: "payment_home.add_payment_method",
                    },
                  ),
                  { transition: "modal-flow" },
                )
              : o("WAWebModalManager").ModalManager.open(d));
        });
        return function () {
          return e.apply(this, arguments);
        };
      })();
    function p() {
      if (o("WAWebUserPrefsCustomPaymentMethods").isPIXValid()) {
        var e, t, n;
        return o("WAWebBrazilPixKeyFormattingUtils").getFormattedPixKey(
          (e =
            (t = o("WAWebUserPrefsCustomPaymentMethods").getPIX()) == null
              ? void 0
              : t.key) != null
            ? e
            : "",
          (n = o("WAWebUserPrefsCustomPaymentMethods").getPIX()) == null
            ? void 0
            : n.key_type,
        );
      }
      return o("WAWebBizFrontendGatingUtils").isPixOnWebEnabled()
        ? null
        : s._(/*BTDS*/ "Feature not supported on web");
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _() {
      "use no forget";
      var e = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
      return (
        o("useWAWebListener").useListener(
          o("WAWebCustomPaymentMethods").CustomPaymentMethods,
          o("WAWebCustomPaymentMethods").CUSTOM_PAYMENT_METHODS_CHANGE_EVENT,
          e,
        ),
        o("WAWebBizFrontendGatingUtils").isCustomPaymentMethodsSyncEnabled()
          ? u.jsxs(r("WAWebDrawerSection.react"), {
              className: "x1280gxy x120ee7l x1q0q8m5",
              animation: !1,
              children: [
                u.jsx(r("WDSText.react"), {
                  xstyle: c.paymentMethodsTextContainer,
                  type: "Body2Emphasized",
                  colorName: "contentDeemphasized",
                  children: s._(/*BTDS*/ "Payment methods"),
                }),
                u.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
                  icon: u.jsx(r("WAWebRoundShape.react"), {
                    disabled: !0,
                    xstyle: c.roundShapeCustomSize,
                    children: o(
                      "WAWebUserPrefsCustomPaymentMethods",
                    ).isPIXValid()
                      ? u.jsx(o("WAWebPixLogoIcon.react").PixLogoIcon, {
                          height: 38,
                          width: 38,
                          innerStyles: {
                            background: c.pixIconBackground,
                            primary: c.pixIconPrimary,
                          },
                        })
                      : u.jsx(o("WAWebPlusRoundedIcon.react").PlusRoundedIcon, {
                          height: 22,
                          width: 22,
                          iconXstyle: c.plusIconColor,
                        }),
                  }),
                  testid: void 0,
                  color: "disabled",
                  onClick: m,
                  children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
                    children: [
                      u.jsx(r("WDSText.react"), {
                        type: "Body2",
                        colorName: "contentDefault",
                        children: s._(/*BTDS*/ "Pix key"),
                      }),
                      u.jsx(r("WDSText.react"), {
                        type: "Body2",
                        colorName: "contentDeemphasized",
                        xstyle: c.reducedVerticalSpacing,
                        children: p(),
                      }),
                    ],
                  }),
                }),
              ],
            })
          : null
      );
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
