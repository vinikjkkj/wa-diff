__d(
  "WAWebHandleHostedNotification",
  [
    "WALogger",
    "WASmaxCoexistenceOffboardingNotificationRPC",
    "WASmaxCoexistenceOnboardingStatusNotificationRPC",
    "WASmaxCoexistenceSyncNotificationRPC",
    "WASmaxOutNotificationFallbackGenericNotificationResponseAck",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WAWebCTWADetectedOutcomeOnboardingStatusNotification",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = o("WASmaxParseUtils").flattenedChildWithTag(
            t,
            "onboarding_status",
          );
          if (n.success) {
            var r = o(
                "WASmaxCoexistenceOnboardingStatusNotificationRPC",
              ).receiveOnboardingStatusNotificationRPC(t),
              a = r.parsedRequest;
            a.onboardingStatusStatus === "completed" &&
              a.onboardingStatusProductSurfaceMixin.productSurface ===
                "automation" &&
              o(
                "WAWebCTWADetectedOutcomeOnboardingStatusNotification",
              ).handleCTWADetectedOutcomeOnboardingStatusNotification(!0);
            return;
          }
          var i = o("WASmaxParseUtils").flattenedChildWithTag(t, "offboarding");
          if (i.success) {
            var l = o(
                "WASmaxCoexistenceOffboardingNotificationRPC",
              ).receiveOffboardingNotificationRPC(t),
              u = l.parsedRequest;
            u.offboardingProductSurface === "automation" &&
              o(
                "WAWebCTWADetectedOutcomeOnboardingStatusNotification",
              ).handleCTWADetectedOutcomeOnboardingStatusNotification(!1);
            return;
          }
          var c = o("WASmaxParseUtils").flattenedChildWithTag(t, "sync");
          if (c.success)
            return (
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "handleHostedNotification: sync notification received",
                  ])),
              ),
              o(
                "WASmaxCoexistenceSyncNotificationRPC",
              ).receiveSyncNotificationRPC(t),
              o(
                "WASmaxOutNotificationFallbackGenericNotificationResponseAck",
              ).makeGenericNotificationResponseAck(t)
            );
          throw (
            o("WALogger").ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "handleHostedNotification: unsupported hosted notification",
                ])),
            ),
            new (o("WASmaxParsingFailure").SmaxParsingFailure)(
              "handleHostedNotification: unsupported hosted notification",
            )
          );
        })),
        c.apply(this, arguments)
      );
    }
    l.handleHostedNotification = u;
  },
  98,
);
