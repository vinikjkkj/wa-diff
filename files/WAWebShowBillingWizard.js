__d(
  "WAWebShowBillingWizard",
  [
    "BaseKeyCommandListener.react",
    "CometAccessibilityAlertProvider.react",
    "CometBackupPlaceholder.react",
    "CometRelay",
    "RelayHooks",
    "WAWebDrawerHeader.react",
    "WAWebLoadingModal.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebNoop",
    "react",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("requireDeferred")(
        "BillingWhatsAppWebWizardRoot.entrypoint",
      ).__setRef("WAWebShowBillingWizard");
    function c(e) {
      var t = e.entryPoint,
        n = e.flowID,
        a = e.onCloseCb,
        i = e.paymentAccountID,
        l = e.relayEnvironment,
        c = e.wizardName,
        d = e.wizardPropsJSON,
        m = {
          billingEntryPoint: t != null ? t : "whatsapp_ads_web",
          entryPointDetails: {
            entryPoint: t != null ? t : "whatsapp_ads_web",
            flowID: n,
          },
          isWhatsAppSMBForAndroid: !0,
          jsonProps: d,
          onClose: function () {
            (o("WAWebModalManager").ModalManager.close(),
              a.apply(void 0, arguments));
          },
          paymentAccountID: i,
          shouldShowXMDS: !1,
          surface: null,
          uplWizardSessionID: n,
          wizardName: c,
        };
      return u
        .load()
        .then(function (e) {
          var t = o("CometRelay").loadEntryPoint(
            {
              getEnvironment: function () {
                return l;
              },
            },
            e,
            m,
          );
          return function () {
            o("WAWebModalManager").ModalManager.open(
              s.jsx(r("CometBackupPlaceholder.react"), {
                fallback: s.jsx(r("WAWebLoadingModal.react"), {
                  error: !1,
                  theme: o("WAWebModal.react").ModalTheme.Box,
                  headerType: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE
                    .MODAL,
                }),
                children: s.jsx(o("RelayHooks").RelayEnvironmentProvider, {
                  environment: l,
                  children: s.jsx(r("CometAccessibilityAlertProvider.react"), {
                    children: s.jsx(r("BaseKeyCommandListener.react"), {
                      observersEnabled: !1,
                      children: s.jsx(o("CometRelay").EntryPointContainer, {
                        entryPointReference: t,
                        props: babelHelpers.extends({}, m),
                      }),
                    }),
                  }),
                }),
              }),
              { blockClose: !0 },
            );
          };
        })
        .catch(function (e) {
          return r("WAWebNoop");
        });
    }
    l.default = c;
  },
  98,
);
