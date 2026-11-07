__d(
  "WAWebBrPixPaymentsHomeDeepLink",
  [
    "JSResourceForInteraction",
    "WALogger",
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
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = null,
      d = 0;
    function m(e) {
      if ((_(), !f())) return !1;
      if (o("WAWebBizFrontendGatingUtils").isPixOnWebEnabled())
        return (g(e), !0);
      if (
        o("WAWebPrimaryFeaturesModel").PrimaryFeatures
          .customPaymentMethodsSyncSupport
      )
        return !1;
      var t = function () {
        (o("WAWebPrimaryFeaturesModel").PrimaryFeatures.off(
          "change:features",
          t,
        ),
          queueMicrotask(function () {
            c === t &&
              (_(),
              f() &&
                o("WAWebBizFrontendGatingUtils").isPixOnWebEnabled() &&
                g(e));
          }));
      };
      return (
        (c = t),
        o("WAWebPrimaryFeaturesModel").PrimaryFeatures.on("change:features", t),
        !1
      );
    }
    function p() {
      _();
      var e = d;
      return function () {
        return d === e;
      };
    }
    function _() {
      (d++,
        c != null &&
          (o("WAWebPrimaryFeaturesModel").PrimaryFeatures.off(
            "change:features",
            c,
          ),
          (c = null)));
    }
    function f() {
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
    function g(t) {
      (o("WAWebCmd").Cmd.closeStatusViewer(),
        o("WAWebDrawerManager")
          .DrawerManager.openDrawerLeftAsync(
            u.jsx(y, { isInitialStep: !0, referral: "deeplink" }),
            { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
          )
          .then(function (e) {
            e && (t == null || t());
          })
          .catch(function (t) {
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "br_pix_payments_home_deeplink: onOpened failed: ",
                    "",
                  ])),
                r("getErrorSafe")(t).name,
              )
              .sendLogs("br-pix-payments-home-deeplink-on-opened-failed");
          }));
    }
    var h = r("WAWebLazyLoadedRetriable")(function () {
        return r("JSResourceForInteraction")(
          "WAWebBizPaymentsHomeManagementFlow.react",
        )
          .__setRef("WAWebBrPixPaymentsHomeDeepLink")
          .load();
      }, "BrPixPaymentsHome"),
      y = r("WAWebLoadable")({
        loader: h,
        loading: function (t) {
          return u.jsx(r("WAWebLoadingDrawer.react"), { error: !!t.error });
        },
      });
    ((l.openBrPixPaymentsHomeDeepLink = m),
      (l.reserveBrPixPaymentsHomeDeepLink = p),
      (l.cancelPendingBrPixPaymentsHomeDeepLink = _));
  },
  98,
);
