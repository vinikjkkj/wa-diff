__d(
  "useWAWebBizAdCreationOpenBillingWizard",
  [
    "CometRelay",
    "FBLogger",
    "WAWebBizAdCreationConfigContext",
    "WAWebBizAdCreationPaymentRefetchContext",
    "WAWebBizAdCreationSpecContext",
    "WAWebShowBillingWizard",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebBizAdCreationAdAccountUpdate",
    "useWAWebBizAdCreationMaybeOpenEmailOnboarding",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useContext;
    function u(e) {
      var t,
        a = s(r("WAWebBizAdCreationConfigContext")),
        i = s(r("WAWebBizAdCreationSpecContext")),
        l = o("CometRelay").useRelayEnvironment(),
        u =
          (t = i.currentValue.adAccountData) == null
            ? void 0
            : t.legacyAccountID,
        c = r("useWAWebBizAdCreationAdAccountUpdate")(u != null ? u : ""),
        d = o(
          "WAWebBizAdCreationPaymentRefetchContext",
        ).useWAWebBizAdCreationPaymentRefetch(),
        m = d.triggerBillingRefetch,
        p = r("useWAWebBizAdCreationMaybeOpenEmailOnboarding")(e);
      return (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, o) {
            var s, u;
            if (e.wizardName != null) {
              var d = (s = a == null ? void 0 : a.flowID) != null ? s : "",
                _ =
                  (u = i.currentValue.adAccountData) == null
                    ? void 0
                    : u.paymentAccountID;
              if (_ == null) {
                (r("FBLogger")("wa_ctwa_web").mustfix(
                  "paymentAccountID is null in openBillingWizard",
                ),
                  t("closed", {}));
                return;
              }
              var f = function (n, r) {
                  (c(), m(), t(n, r));
                },
                g = e.wizardName,
                h = e.wizardPropsJSON;
              p(function () {
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  var e = yield r("WAWebShowBillingWizard")({
                    relayEnvironment: l,
                    flowID: d,
                    onCloseCb: f,
                    paymentAccountID: _,
                    wizardName: g,
                    wizardPropsJSON: h,
                  });
                  e();
                })();
              }, o);
            }
          },
        );
        return function (t, n, r) {
          return e.apply(this, arguments);
        };
      })();
    }
    l.default = u;
  },
  98,
);
