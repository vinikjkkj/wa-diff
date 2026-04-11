__d(
  "WAWebBizOrderManagementPaymentMethodsSection.react",
  [
    "fbt",
    "PixPaymentRequestFeature",
    "WAWebBizFrontendGatingUtils",
    "WAWebBizPaymentsBrazilAddPixModal.react",
    "WAWebBrazilPixKeyFormattingUtils",
    "WAWebConfirmPopup.react",
    "WAWebCustomPaymentMethods",
    "WAWebDrawerButton.react",
    "WAWebDrawerSection.react",
    "WAWebFbtCommon",
    "WAWebModalManager",
    "WAWebPaymentOnboardingFlowLoadable",
    "WAWebPaymentsUserActionLogging",
    "WAWebPixLogoIcon.react",
    "WAWebPlusIcon.react",
    "WAWebRoundShape.react",
    "WAWebSyncdMdSyncFieldstatMeta",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebUserPrefsCustomPaymentMethods",
    "WAWebWamEnumPaymentActionTargets",
    "asyncToGeneratorRuntime",
    "react",
    "stylex",
    "useWAWebForceUpdate",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        infoRow: {
          color: "x1mhprgp",
          fontSize: "x1f6kntn",
          fontWeight: "xk50ysn",
          lineHeight: "xa7kkou",
          $$css: !0,
        },
      },
      m = c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        title: s._(/*BTDS*/ "Feature not supported on web"),
        tsNavigationData: {
          surface: "unknown",
          viewName: "order-payment-methods",
        },
        okText: r("WAWebFbtCommon")("OK"),
        onOK: o("WAWebModalManager").closeModalManager,
        children: c.jsx("div", {
          children: o("WAWebUserPrefsCustomPaymentMethods").isPIXValid()
            ? s._(
                /*BTDS*/ "To update or delete your Pix key, log into a mobile device.",
              )
            : s._(/*BTDS*/ "To add a Pix key, log into a mobile device."),
        }),
      }),
      p = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (o("WAWebBizFrontendGatingUtils").isPixOnWebEnabled() &&
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
              previousScreenName: "orders_home",
              referral: "orders_home",
              screen: "custom_payment_method_settings",
            }),
            o("WAWebBizFrontendGatingUtils").isPixOnWebEnabled()
              ? o("PixPaymentRequestFeature").isPixPaymentRequestEnabled()
                ? o("WAWebModalManager").ModalManager.open(
                    c.jsx(
                      o("WAWebPaymentOnboardingFlowLoadable")
                        .PaymentOnboardingFlowLoadable,
                      {
                        previousScreen: "orders_home",
                        referral: "orders_home",
                      },
                    ),
                    { transition: "modal-flow" },
                  )
                : o("WAWebModalManager").ModalManager.open(
                    c.jsx(
                      o("WAWebBizPaymentsBrazilAddPixModal.react")
                        .WAWebBizPaymentsBrazilAddPixModal,
                      {
                        previousScreen: "orders_home",
                        referral: "orders_home",
                      },
                    ),
                  )
              : o("WAWebModalManager").ModalManager.open(m));
        });
        return function () {
          return e.apply(this, arguments);
        };
      })();
    function _() {
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
    _.displayName = _.name + " [from " + i.id + "]";
    function f() {
      "use no forget";
      var t = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
      return (
        o("useWAWebListener").useListener(
          o("WAWebCustomPaymentMethods").CustomPaymentMethods,
          o("WAWebCustomPaymentMethods").CUSTOM_PAYMENT_METHODS_CHANGE_EVENT,
          t,
        ),
        o("WAWebBizFrontendGatingUtils").isCustomPaymentMethodsSyncEnabled()
          ? c.jsxs(r("WAWebDrawerSection.react"), {
              className: "x1280gxy x120ee7l x1q0q8m5",
              animation: !1,
              children: [
                c.jsx(
                  "div",
                  babelHelpers.extends(
                    {},
                    (e || (e = r("stylex"))).props(
                      d.infoRow,
                      o("WAWebUISpacing").uiPadding.horiz16,
                      o("WAWebUISpacing").uiPadding.vert10,
                    ),
                    { children: s._(/*BTDS*/ "Payment methods") },
                  ),
                ),
                c.jsxs(o("WAWebDrawerButton.react").DrawerButtonSimple, {
                  icon: c.jsx(r("WAWebRoundShape.react"), {
                    disabled: !0,
                    children: o(
                      "WAWebUserPrefsCustomPaymentMethods",
                    ).isPIXValid()
                      ? c.jsx(o("WAWebPixLogoIcon.react").PixLogoIcon, {
                          height: 48,
                          width: 48,
                        })
                      : c.jsx(o("WAWebPlusIcon.react").PlusIcon, {}),
                  }),
                  testid: void 0,
                  color: "disabled",
                  onClick: p,
                  children: [
                    c.jsx(o("WAWebText.react").WAWebTextLarge, {
                      color: "secondaryLighter",
                      children: o(
                        "WAWebUserPrefsCustomPaymentMethods",
                      ).isPIXValid()
                        ? s._(/*BTDS*/ "Pix")
                        : s._(/*BTDS*/ "Accept Pix"),
                    }),
                    c.jsx(o("WAWebText.react").WAWebTextSmall, {
                      color: "secondaryLighter",
                      children: _(),
                    }),
                  ],
                }),
              ],
            })
          : null
      );
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
