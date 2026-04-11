__d(
  "WAWebOpenNewsletterCreationFlow",
  [
    "WAWebModalManager",
    "WAWebNewsletterAdminFunnelLogging",
    "WAWebNewsletterGatingUtils",
    "WAWebPDFNGatingUtils",
    "WAWebPDFNModal.react",
    "WAWebWamEnumAdminFlowType",
    "WAWebWamEnumChannelAdminAction",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.tosAcceptCallback,
        n = new (o(
          "WAWebNewsletterAdminFunnelLogging",
        ).NewsletterAdminFunnelLogger)(
          o("WAWebWamEnumAdminFlowType").ADMIN_FLOW_TYPE.CREATION,
        );
      (n.logEvent(
        o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION
          .CHANNEL_CREATION_TAP,
      ),
        o("WAWebModalManager").ModalManager.open(
          s.jsx(r("WAWebPDFNModal.react"), {
            pdfnId: o(
              "WAWebPDFNGatingUtils",
            ).getNewsletterProducerDisclosureId(),
            verifyTosAccepted: o("WAWebNewsletterGatingUtils")
              .shouldHideProducerNewsletterDisclosure,
            runIfTosAccepted: function () {
              t(n);
            },
            onLoadError: function () {
              n.logEvent(
                o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION
                  .CHANNEL_CREATE_LAUNCH_ERROR,
              );
            },
          }),
        ));
    }
    l.openNewsletterCreationFlow = u;
  },
  98,
);
