__d(
  "WAWebBizAddPixKeyButton.react",
  [
    "fbt",
    "WAWebBannerEventWamEvent",
    "WAWebBizFrontendGatingUtils",
    "WAWebModalManager",
    "WAWebPaymentOnboardingFlowLoadable",
    "WAWebWamEnumBannerOperations",
    "WAWebWamEnumBannerTypes",
    "WDSButton.react",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      var e = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = new (o("WAWebBannerEventWamEvent").BannerEventWamEvent)({
            bannerOperation: o("WAWebWamEnumBannerOperations").BANNER_OPERATIONS
              .CLICK,
            bannerType: o("WAWebWamEnumBannerTypes").BANNER_TYPES
              .PAYMENTS_HOME_NUX_BANNER,
          });
          (e.commit(),
            o("WAWebBizFrontendGatingUtils").isPixOnWebEnabled() &&
              o("WAWebModalManager").ModalManager.open(
                u.jsx(
                  o("WAWebPaymentOnboardingFlowLoadable")
                    .PaymentOnboardingFlowLoadable,
                  {
                    previousScreen: "payment_home",
                    referral: "payment_home.nux_banner",
                  },
                ),
                { transition: "modal-flow" },
              ));
        });
        return function () {
          return e.apply(this, arguments);
        };
      })();
      return u.jsx(r("WDSButton.react"), {
        label: s._(/*BTDS*/ "Add Pix key"),
        onPress: function () {
          e();
        },
        variant: "filled",
        size: "medium",
        widthMode: "flexible",
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
