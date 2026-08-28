__d(
  "BillingHubHelpTrayActions",
  [
    "fbt",
    "BillingHubHelpTrayActionsUtils",
    "ConstUriUtils",
    "JSResourceForInteraction",
    "XPaymentsCareAdsPaymentsUnicornSupportControllerRouteBuilder",
    "cr:3294",
    "err",
    "getSafeQplErrorMessage",
    "gkx",
    "goForceFullPageRedirectTo",
    "nullthrows",
    "promiseDone",
    "react",
    "react-compiler-runtime",
    "useBillingSurfaceUPLogger",
    "useBizKitOpenHelpTray",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = (u || (u = o("react"))).useCallback,
      d = r("JSResourceForInteraction")("adsToggleHelpTray").__setRef(
        "BillingHubHelpTrayActions",
      ),
      m = r("JSResourceForInteraction")("AdsHelpTrayUIActions").__setRef(
        "BillingHubHelpTrayActions",
      ),
      p = s
        ._(
          /*BTDS*/ "Detected issue: Support for disabled ad account issues or restricted credentials",
        )
        .toString(),
      _ = s
        ._(/*BTDS*/ "Detected issue: Support for failed payment issues")
        .toString(),
      f = {
        detectedIssue: p,
        isReadOnly: !0,
        lbdIssueId: o("BillingHubHelpTrayActionsUtils")
          .DISABLED_AD_ACCOUNT_LBD_ISSUE_ID,
        shouldPreSelectAsset: !0,
      },
      g = {
        detectedIssue: _,
        isReadOnly: !0,
        lbdIssueId: o("BillingHubHelpTrayActionsUtils")
          .FAILED_PAYMENT_LBD_ISSUE_ID,
        shouldPreSelectAsset: !0,
        shouldSkipGranularAssetSelection: !0,
      },
      h = r("gkx")("21034"),
      y = s._(/*BTDS*/ "Detected issue: Verify payment method").toString(),
      C = {
        detectedIssue: y,
        isReadOnly: !0,
        lbdIssueId: o("BillingHubHelpTrayActionsUtils")
          .VERIFY_PAYMENT_METHOD_LBD_ISSUE_ID,
        shouldPreSelectAsset: !0,
      },
      b = {
        detectedIssue: "",
        isReadOnly: !1,
        lbdIssueId: o("BillingHubHelpTrayActionsUtils")
          .UNAUTHORIZED_CHARGES_LBD_ISSUE_ID,
        shouldPreSelectAsset: !0,
      },
      v =
        ((e = {}),
        (e.risk_disabled_help_tray = f),
        (e.risk_disabled_help_tray_cvco = f),
        (e.ato_restricted_help_tray = f),
        (e.ads_creation_restricted_help_tray = f),
        (e.verify_payment_method_help_tray = C),
        (e.unauthorized_charges_help_tray = b),
        (e.pay_now = g),
        (e.contact_support = f),
        (e.help_tray_empty = {
          detectedIssue: null,
          isReadOnly: !1,
          lbdIssueId: null,
          shouldPreSelectAsset: !1,
        }),
        e);
    function S(e) {
      return e != null && e in v;
    }
    function R(e) {
      var t = v[e];
      if (t == null)
        throw r("err")("No Help Tray configuration found for context: " + e);
      return t;
    }
    function L(e, t) {
      var n = s
        ._(/*BTDS*/ "Asset ID: {assetID}", [s._param("assetID", t)])
        .toString();
      return e.detectedIssue != null ? n + "\n" + e.detectedIssue : n;
    }
    function E() {
      if (n("cr:3294") != null) {
        var e = n("cr:3294").toFluxSelector(),
          t = e(),
          o = (t == null ? void 0 : t.isTrayOpen) === !0;
        o &&
          r("promiseDone")(
            d.load().then(function (e) {
              e(!1);
            }),
          );
      }
    }
    function k(e, t, a, i, l) {
      var s = r("gkx")("22968"),
        u = s ? "msite" : "desktop";
      if (s) {
        var c,
          p = r("nullthrows")(
            (c = r(
              "XPaymentsCareAdsPaymentsUnicornSupportControllerRouteBuilder",
            )
              .buildUri({
                ad_account_id: t,
                entrypoint: "billing_wizard",
                support_topic: "FAILED_PAYMENT",
              })
              .qualifyDomain(
                o("ConstUriUtils").getUri("https://m.facebook.com/"),
              )) == null
              ? void 0
              : c.toString(),
          );
        (o("BillingHubHelpTrayActionsUtils").logHelpTrayDispatchEvent(
          e,
          l,
          null,
          null,
          u,
          a,
          i,
        ),
          r("goForceFullPageRedirectTo")(p));
      } else {
        var _ = R(e);
        if (n("cr:3294") == null) {
          o("BillingHubHelpTrayActionsUtils").logHelpTrayFailureEvent(
            e,
            l,
            "AdsHelpTrayUIProvider must be provided for web",
            u,
            a,
            i,
          );
          return;
        }
        var f = e === "help_tray_empty" ? null : L(_, t),
          g = n("cr:3294").toFluxSelector(),
          h = g(),
          y = (h == null ? void 0 : h.isTrayOpen) === !0;
        (o("BillingHubHelpTrayActionsUtils").logHelpTrayDispatchEvent(
          e,
          l,
          f,
          null,
          u,
          a,
          i,
        ),
          y
            ? (r("promiseDone")(
                d.load().then(function (e) {
                  e(!1);
                }),
              ),
              window.setTimeout(function () {
                r("promiseDone")(
                  m
                    .load()
                    .then(function (e) {
                      var n;
                      e.openContactSupportForm(
                        a,
                        t,
                        _.lbdIssueId,
                        !1,
                        _.shouldPreSelectAsset,
                        "HELP_TRAY_BILLING_HUB",
                        f,
                        _.isReadOnly,
                        (n = _.shouldSkipGranularAssetSelection) != null
                          ? n
                          : !1,
                      );
                    })
                    .catch(function (t) {
                      o(
                        "BillingHubHelpTrayActionsUtils",
                      ).logHelpTrayFailureEvent(
                        e,
                        l,
                        o("getSafeQplErrorMessage").getSafeQPLErrorMessage(t),
                        u,
                        a,
                        i,
                      );
                    }),
                );
              }, 50))
            : r("promiseDone")(
                m
                  .load()
                  .then(function (e) {
                    var n;
                    e.openContactSupportForm(
                      a,
                      t,
                      _.lbdIssueId,
                      !1,
                      _.shouldPreSelectAsset,
                      "HELP_TRAY_BILLING_HUB",
                      f,
                      _.isReadOnly,
                      (n = _.shouldSkipGranularAssetSelection) != null ? n : !1,
                    );
                  })
                  .catch(function (t) {
                    o("BillingHubHelpTrayActionsUtils").logHelpTrayFailureEvent(
                      e,
                      l,
                      o("getSafeQplErrorMessage").getSafeQPLErrorMessage(t),
                      u,
                      a,
                      i,
                    );
                  }),
              ));
      }
    }
    function I(e) {
      var t = o("react-compiler-runtime").c(2),
        n;
      t[0] !== e
        ? ((n = function (n) {
            e(n);
          }),
          (t[0] = e),
          (t[1] = n))
        : (n = t[1]);
      var a = n,
        i = r("useBizKitOpenHelpTray")(a);
      return h ? i : a;
    }
    function T(e) {
      var t = o("react-compiler-runtime").c(3),
        n = r("useBillingSurfaceUPLogger")(),
        a;
      t[0] !== e || t[1] !== n
        ? ((a = function (r) {
            var t = r.eventContext,
              o = r.paymentAccountID,
              a = r.source;
            k(t, o, a, n, e);
          }),
          (t[0] = e),
          (t[1] = n),
          (t[2] = a))
        : (a = t[2]);
      var i = a;
      return I(i);
    }
    ((l.shouldTriggerHelpTray = S),
      (l.getHelpTrayConfig = R),
      (l.closeHelpTray = E),
      (l.openHelpTray = k),
      (l.useBillingHubHelpTrayGeneric = I),
      (l.useBillingHubHelpTray = T));
  },
  226,
);
