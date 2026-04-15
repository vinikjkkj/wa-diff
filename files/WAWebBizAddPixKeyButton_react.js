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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      var e = o("react-compiler-runtime").c(1),
        t = d,
        n;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = u.jsx(r("WDSButton.react"), {
              label: s._(/*BTDS*/ "Add Pix key"),
              onPress: function () {
                t();
              },
              variant: "filled",
              size: "medium",
              widthMode: "flexible",
            })),
            (e[0] = n))
          : (n = e[0]),
        n
      );
    }
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
        })),
        m.apply(this, arguments)
      );
    }
    l.default = c;
  },
  226,
);
