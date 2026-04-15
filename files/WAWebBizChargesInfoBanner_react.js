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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState;
    function d() {
      var e = o("react-compiler-runtime").c(3),
        t = c(p),
        n = t[0],
        a = t[1],
        i;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = function () {
            var e = new (o("WAWebBannerEventWamEvent").BannerEventWamEvent)({
              bannerOperation: o("WAWebWamEnumBannerOperations")
                .BANNER_OPERATIONS.DISMISS,
              bannerType: o("WAWebWamEnumBannerTypes").BANNER_TYPES
                .PAYMENTS_HOME_MIGRATION_BANNER,
            });
            (e.commit(),
              a(!1),
              r("WAWebUserPrefsStore").set(
                o("WAWebUserPrefsKeys").PaymentsBannerUserPrefs
                  .ChargesInfoBannerDismissed,
                !0,
              ));
          }),
          (e[0] = i))
        : (i = e[0]);
      var l = i,
        d = m;
      if (!n) return null;
      var _;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = {
            className: "x14mko6t x1uvdrpn x1ua1l7f xav9cv8 xdx6fka xvtqlqk",
          }),
          (e[1] = _))
        : (_ = e[1]);
      var f;
      return (
        e[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = u.jsx(
              "div",
              babelHelpers.extends({}, _, {
                children: u.jsx(r("WDSBanner.react"), {
                  type: "tip",
                  body: s._(
                    /*BTDS*/ "All the payment information for your business is now in",
                  ),
                  actionText: s._(/*BTDS*/ "Payments"),
                  onAction: d,
                  onDismiss: l,
                }),
              }),
            )),
            (e[2] = f))
          : (f = e[2]),
        f
      );
    }
    function m() {
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
    }
    function p() {
      var e = r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").PaymentsBannerUserPrefs
          .ChargesInfoBannerDismissed,
      );
      return !e;
    }
    l.default = d;
  },
  226,
);
