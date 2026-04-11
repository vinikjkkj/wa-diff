__d(
  "WAWebSignupCTAExperiment",
  ["$InternalEnum", "WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({ SignUp: 1, GetOffers: 2 });
    function s() {
      var t;
      return (t = e.cast(
        o("WAWebABProps").getABPropConfigValue(
          "inapp_signup_agm_cta_experiment",
        ),
      )) != null
        ? t
        : e.SignUp;
    }
    ((l.SignupCTAExperiment = e), (l.getSignupCTAExperiment = s));
  },
  98,
);
