__d(
  "WAWebHandleHostedNotification",
  [
    "WALogger",
    "WASmaxCoexistenceOffboardingNotificationRPC",
    "WASmaxCoexistenceOnboardingStatusNotificationRPC",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WAWebCTWADetectedOutcomeOnboardingStatusNotification",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
              s = l.parsedRequest;
            s.offboardingProductSurface === "automation" &&
              o(
                "WAWebCTWADetectedOutcomeOnboardingStatusNotification",
              ).handleCTWADetectedOutcomeOnboardingStatusNotification(!1);
            return;
          }
          throw (
            o("WALogger").ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "handleHostedNotification: unsupported hosted notification",
                ])),
            ),
            new (o("WASmaxParsingFailure").SmaxParsingFailure)(
              "handleHostedNotification: unsupported hosted notification",
            )
          );
        })),
        u.apply(this, arguments)
      );
    }
    l.handleHostedNotification = s;
  },
  98,
);
