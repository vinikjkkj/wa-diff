__d(
  "adsDuplicationMaybeDispatchPromoAdsAlwaysOnToast",
  [
    "fbt",
    "AdsAddToastCardAction",
    "AdsDuplicationPromoAdsAlwaysOnNoticeStrings",
    "AdsManagerRelayEnvironment",
    "AdsScopeUtils",
    "FBJSON",
    "IncentivesAdsManagerUtils",
    "PromoAdsAdsManagerCouponCodeUtils",
    "PromoAdsAdsManagerGatingAndExperimentUtils",
    "adsDuplicationMaybeDispatchPromoAdsAlwaysOnToastQuery.graphql",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u =
        e !== void 0
          ? e
          : (e = n(
              "adsDuplicationMaybeDispatchPromoAdsAlwaysOnToastQuery.graphql",
            ));
    function c(e) {
      try {
        if (
          !o(
            "PromoAdsAdsManagerGatingAndExperimentUtils",
          ).shouldShowPromoAdsAlwaysOnNoticeInDuplicationDialog()
        )
          return;
        var t = Array.from(
          new Set(
            e.flatMap(function (e) {
              return e.ad_object_type === "ad" && e.source_ad_object_id != null
                ? [e.source_ad_object_id]
                : [];
            }),
          ),
        );
        if (t.length === 0) return;
        var n = o("AdsScopeUtils").getSelectedAccountID();
        if (n == null) return;
        o("relay-runtime")
          .fetchQuery(r("AdsManagerRelayEnvironment"), u, {
            accountID: String(n),
            adgroupIDs: t,
          })
          .toPromise()
          .then(function (e) {
            if (
              (e == null
                ? void 0
                : e.promo_ads_any_adgroup_always_on_eligible) === !0
            ) {
              var a = o(
                  "PromoAdsAdsManagerGatingAndExperimentUtils",
                ).isPromoAdsAlwaysOnEnabled(!0),
                l = o(
                  "PromoAdsAdsManagerGatingAndExperimentUtils",
                ).isEmailCaptureAlwaysOnEnabled(!0);
              if (a || l) {
                var u;
                (o("IncentivesAdsManagerUtils").logEvent(
                  o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
                    .PROMO_ADS_ALWAYS_ON_DUPLICATION_TOAST_IMPRESSION,
                  String(n),
                  String((u = t[0]) != null ? u : ""),
                  null,
                  o("FBJSON").stringify({
                    isEmailCaptureAlwaysOn: l,
                    isPromoAdsAlwaysOn: a,
                  }),
                ),
                  r("AdsAddToastCardAction").dispatch(
                    {
                      toastCard: {
                        bodyText: o(
                          "AdsDuplicationPromoAdsAlwaysOnNoticeStrings",
                        ).PROMO_ADS_ALWAYS_ON_NOTICE,
                        canDismiss: !0,
                        cardType: "success",
                        dismissTimer: 1e4,
                        header: s._(/*BTDS*/ "Your ad has been duplicated"),
                        id: "promo_ads_always_on_quick_duplication",
                      },
                    },
                    {
                      line: "96",
                      module:
                        "adsDuplicationMaybeDispatchPromoAdsAlwaysOnToast.js",
                      moduleID: i.id,
                    },
                  ));
              }
            }
          })
          .catch(function () {});
      } catch (e) {}
    }
    l.default = c;
  },
  226,
);
