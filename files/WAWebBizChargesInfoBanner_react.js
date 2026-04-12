__d(
  "WAWebBizChargesInfoBanner.react",
  [
    "fbt",
    "WAWebBannerEventWamEvent",
    "WAWebBizPaymentsHomeManagementFlow.react",
    "WAWebDrawerManager",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore",
    "WAWebWamEnumBannerOperations",
    "WAWebWamEnumBannerTypes",
    "WDSBanner.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState;
    function d() {
      var e = c(function () {
          var e = r("WAWebUserPrefsStore").get(
            o("WAWebUserPrefsKeys").PaymentsBannerUserPrefs
              .ChargesInfoBannerDismissed,
          );
          return !e;
        }),
        t = e[0],
        n = e[1],
        a = function () {
          var e = new (o("WAWebBannerEventWamEvent").BannerEventWamEvent)({
            bannerOperation: o("WAWebWamEnumBannerOperations").BANNER_OPERATIONS
              .DISMISS,
            bannerType: o("WAWebWamEnumBannerTypes").BANNER_TYPES
              .PAYMENTS_HOME_MIGRATION_BANNER,
          });
          (e.commit(),
            n(!1),
            r("WAWebUserPrefsStore").set(
              o("WAWebUserPrefsKeys").PaymentsBannerUserPrefs
                .ChargesInfoBannerDismissed,
              !0,
            ));
        },
        i = function () {
          var e = new (o("WAWebBannerEventWamEvent").BannerEventWamEvent)({
            bannerOperation: o("WAWebWamEnumBannerOperations").BANNER_OPERATIONS
              .CLICK,
            bannerType: o("WAWebWamEnumBannerTypes").BANNER_TYPES
              .PAYMENTS_HOME_MIGRATION_BANNER,
          });
          (e.commit(),
            o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
              u.jsx(r("WAWebBizPaymentsHomeManagementFlow.react"), {
                isInitialStep: !1,
                referral: "from_charges",
              }),
            ));
        };
      return t
        ? u.jsx("div", {
            className: "x14mko6t x1uvdrpn x1ua1l7f xav9cv8 xdx6fka xvtqlqk",
            children: u.jsx(r("WDSBanner.react"), {
              type: "tip",
              body: s._(
                /*BTDS*/ "All the payment information for your business is now in",
              ),
              actionText: s._(/*BTDS*/ "Payments"),
              onAction: i,
              onDismiss: a,
            }),
          })
        : null;
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
