__d(
  "useWAWebBizAdCreationNoticeActionOverrides",
  [
    "react",
    "react-compiler-runtime",
    "useWAWebBizAdCreationMaybeOpenEmailOnboarding",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useMemo;
    function u(e) {
      var t = o("react-compiler-runtime").c(2),
        n = r("useWAWebBizAdCreationMaybeOpenEmailOnboarding")(e),
        a;
      return (
        t[0] !== n
          ? ((a = {
              AdsLWIAdAccountWhatsAppOnboardingIncompleteValidationModule:
                function (t) {
                  n(t);
                },
            }),
            (t[0] = n),
            (t[1] = a))
          : (a = t[1]),
        a
      );
    }
    l.default = u;
  },
  98,
);
