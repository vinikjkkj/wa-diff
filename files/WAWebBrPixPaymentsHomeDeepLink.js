__d(
  "WAWebBrPixPaymentsHomeDeepLink",
  [
    "JSResourceForInteraction",
    "WAPhoneFindCC",
    "WAWebBizFrontendGatingUtils",
    "WAWebCmd",
    "WAWebDrawerManager",
    "WAWebKeyboardTabUtils",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingDrawer.react",
    "WAWebPaymentsGatingUtils",
    "WAWebPrimaryFeaturesModel",
    "WAWebUserPrefsMeUser",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = null;
    function c() {
      if ((d(), !m())) return !1;
      if (o("WAWebBizFrontendGatingUtils").isPixOnWebEnabled())
        return (p(), !0);
      if (
        o("WAWebPrimaryFeaturesModel").PrimaryFeatures
          .customPaymentMethodsSyncSupport
      )
        return !1;
      var e = function () {
        (o("WAWebPrimaryFeaturesModel").PrimaryFeatures.off(
          "change:features",
          e,
        ),
          queueMicrotask(function () {
            u === e &&
              (d(),
              m() &&
                o("WAWebBizFrontendGatingUtils").isPixOnWebEnabled() &&
                p());
          }));
      };
      return (
        (u = e),
        o("WAWebPrimaryFeaturesModel").PrimaryFeatures.on("change:features", e),
        !1
      );
    }
    function d() {
      u != null &&
        (o("WAWebPrimaryFeaturesModel").PrimaryFeatures.off(
          "change:features",
          u,
        ),
        (u = null));
    }
    function m() {
      var e, t;
      return (
        o("WAPhoneFindCC").findCC(
          (e =
            (t = o("WAWebUserPrefsMeUser").getMaybeMePnUser()) == null
              ? void 0
              : t.user) != null
            ? e
            : "",
        ) === "55" && o("WAWebPaymentsGatingUtils").paymentsHomeEnabled()
      );
    }
    function p() {
      (o("WAWebCmd").Cmd.closeStatusViewer(),
        o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
          s.jsx(f, { isInitialStep: !0, referral: "deeplink" }),
          { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
        ));
    }
    var _ = r("WAWebLazyLoadedRetriable")(function () {
        return r("JSResourceForInteraction")(
          "WAWebBizPaymentsHomeManagementFlow.react",
        )
          .__setRef("WAWebBrPixPaymentsHomeDeepLink")
          .load();
      }, "BrPixPaymentsHome"),
      f = r("WAWebLoadable")({
        loader: _,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingDrawer.react"), { error: !!t.error });
        },
      });
    ((l.openBrPixPaymentsHomeDeepLink = c),
      (l.cancelPendingBrPixPaymentsHomeDeepLink = d));
  },
  98,
);
