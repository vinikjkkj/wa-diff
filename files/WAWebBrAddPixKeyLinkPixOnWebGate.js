__d(
  "WAWebBrAddPixKeyLinkPixOnWebGate",
  [
    "WAWebBizFrontendGatingUtils",
    "WAWebBrAddPixKeyOfferLoggerLoadable",
    "WAWebCmd",
    "WAWebMobilePlatforms",
    "WAWebPrimaryFeaturesModel",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 3e4;
    function s(t) {
      if (o("WAWebBizFrontendGatingUtils").isPixOnWebEnabled()) return t();
      if (
        !o("WAWebMobilePlatforms").isSMB() ||
        o("WAWebPrimaryFeaturesModel").PrimaryFeatures
          .customPaymentMethodsSyncSupport ||
        u()
      )
        return (
          o("WAWebBrAddPixKeyOfferLoggerLoadable").logAddPixKeyLinkDiscarded(
            "payments_unavailable",
            null,
          ),
          !1
        );
      var n = null,
        r = function () {
          (o("WAWebPrimaryFeaturesModel").PrimaryFeatures.off(
            "change:customPaymentMethodsSyncSupport",
            l,
          ),
            o("WAWebPrimaryFeaturesModel").PrimaryFeatures.off(
              "change:hasFreshSync",
              l,
            ),
            o("WAWebCmd").Cmd.off("offline_delivery_end_from_bridge", l),
            n != null && self.clearTimeout(n));
        },
        a = function () {
          (r(),
            o("WAWebBrAddPixKeyOfferLoggerLoadable").logAddPixKeyLinkDiscarded(
              "payments_unavailable",
              null,
            ));
        },
        i = function () {
          o("WAWebCmd").Cmd.isOfflineDeliveryEnd &&
            n == null &&
            (n = self.setTimeout(a, e));
        },
        l = function () {
          if (o("WAWebBizFrontendGatingUtils").isPixOnWebEnabled()) {
            (r(), t());
            return;
          }
          if (u()) {
            a();
            return;
          }
          i();
        };
      return (
        o("WAWebPrimaryFeaturesModel").PrimaryFeatures.on(
          "change:customPaymentMethodsSyncSupport",
          l,
        ),
        o("WAWebPrimaryFeaturesModel").PrimaryFeatures.on(
          "change:hasFreshSync",
          l,
        ),
        o("WAWebCmd").Cmd.on("offline_delivery_end_from_bridge", l),
        i(),
        !1
      );
    }
    function u() {
      var e, t;
      return (
        o("WAWebPrimaryFeaturesModel").PrimaryFeatures.hasFreshSync ||
        (o("WAWebCmd").Cmd.isOfflineDeliveryEnd &&
          ((e =
            (t = o("WAWebPrimaryFeaturesModel").PrimaryFeatures.features) ==
            null
              ? void 0
              : t.length) != null
            ? e
            : 0) > 0)
      );
    }
    l.openWhenPixOnWebAvailable = s;
  },
  98,
);
