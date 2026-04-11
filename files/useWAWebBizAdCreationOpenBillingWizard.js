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
    "react-compiler-runtime",
    "useWAWebBizAdCreationAdAccountUpdate",
    "useWAWebBizAdCreationMaybeOpenEmailOnboarding",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useContext;
    function u(e) {
      var t,
        a,
        i = o("react-compiler-runtime").c(7),
        l = s(r("WAWebBizAdCreationConfigContext")),
        u = s(r("WAWebBizAdCreationSpecContext")),
        c = o("CometRelay").useRelayEnvironment(),
        d =
          (t = u.currentValue.adAccountData) == null
            ? void 0
            : t.legacyAccountID,
        m = r("useWAWebBizAdCreationAdAccountUpdate")(d != null ? d : ""),
        p = o(
          "WAWebBizAdCreationPaymentRefetchContext",
        ).useWAWebBizAdCreationPaymentRefetch(),
        _ = p.triggerBillingRefetch,
        f = r("useWAWebBizAdCreationMaybeOpenEmailOnboarding")(e),
        g;
      if (
        i[0] !== (l == null ? void 0 : l.flowID) ||
        i[1] !== f ||
        i[2] !== c ||
        i[3] !==
          ((a = u.currentValue.adAccountData) == null
            ? void 0
            : a.paymentAccountID) ||
        i[4] !== _ ||
        i[5] !== m
      ) {
        var h;
        ((g = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, o) {
              var a, i;
              if (e.wizardName != null) {
                var s = (a = l == null ? void 0 : l.flowID) != null ? a : "",
                  d =
                    (i = u.currentValue.adAccountData) == null
                      ? void 0
                      : i.paymentAccountID;
                if (d == null) {
                  (r("FBLogger")("wa_ctwa_web").mustfix(
                    "paymentAccountID is null in openBillingWizard",
                  ),
                    t("closed", {}));
                  return;
                }
                var p = function (n, r) {
                    (m(), _(), t(n, r));
                  },
                  g = e.wizardName,
                  h = e.wizardPropsJSON;
                f(function () {
                  n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    var e = yield r("WAWebShowBillingWizard")({
                      relayEnvironment: c,
                      flowID: s,
                      onCloseCb: p,
                      paymentAccountID: d,
                      wizardName: g,
                      wizardPropsJSON: h,
                    });
                    e();
                  })();
                }, o);
              }
            },
          );
          return function (n, r, o) {
            return e.apply(this, arguments);
          };
        })()),
          (i[0] = l == null ? void 0 : l.flowID),
          (i[1] = f),
          (i[2] = c),
          (i[3] =
            (h = u.currentValue.adAccountData) == null
              ? void 0
              : h.paymentAccountID),
          (i[4] = _),
          (i[5] = m),
          (i[6] = g));
      } else g = i[6];
      return g;
    }
    l.default = u;
  },
  98,
);
