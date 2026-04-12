__d(
  "useWAWebBizAdCreationNoticeActionOverrides",
  ["react", "useWAWebBizAdCreationMaybeOpenEmailOnboarding"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useMemo;
    function u(e) {
      var t = r("useWAWebBizAdCreationMaybeOpenEmailOnboarding")(e);
      return s(
        function () {
          return {
            AdsLWIAdAccountWhatsAppOnboardingIncompleteValidationModule:
              function (n) {
                t(n);
              },
          };
        },
        [t],
      );
    }
    l.default = u;
  },
  98,
);
