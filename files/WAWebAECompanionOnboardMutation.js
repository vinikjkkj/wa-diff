__d(
  "WAWebAECompanionOnboardMutation",
  [
    "WAWebAECompanionOnboardMutation.graphql",
    "WAWebCoexBusinessRequest",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e !== void 0 ? e : (e = n("WAWebAECompanionOnboardMutation.graphql"));
    function u() {
      return o("WAWebCoexBusinessRequest").sendCoexBusinessRequest(
        (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t,
              n = e.phoneNumber,
              r = e.token,
              a = yield o("WAWebRelayClient").commitMutation(
                s,
                { phoneNumber: n },
                { environmentType: "facebook", accessToken: r },
              );
            return (
              (a == null ||
              (t = a.xfb_whatsapp_coexistence_process_native_onboarding) == null
                ? void 0
                : t.success) === !0
            );
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        "ae-companion-onboard-failed",
      );
    }
    l.onboardAECompanion = u;
  },
  98,
);
