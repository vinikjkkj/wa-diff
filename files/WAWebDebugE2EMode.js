__d(
  "WAWebDebugE2EMode",
  ["WAWebE2ETestRobots", "vulture"],
  function (t, n, r, o, a, i, l) {
    var e = null,
      s = 2e3;
    function u() {
      var e, t;
      r("vulture")("CeqAG_AOxCwvLyeR9Ttxc0VTM4Q=");
      var n =
        (e =
          (t = document.body) == null ? void 0 : t.classList.toggle("e2e")) !=
        null
          ? e
          : !1;
      (d(), n && c());
    }
    ((u.doc = "Toggles E2E debug mode"), (u.paramsToExecute = []));
    function c() {
      r("vulture")("cDJwztT_q3s-v2qmnrnGnJNjRRM=");
      var t = function () {
        r("vulture")("EOoZKub4gqXDQgq3d6sEfhBcSgE=");
        var e = document.querySelectorAll("[data-testid]");
        e.forEach(function (e) {
          r("vulture")("PQIAkNeeyM1VWJ9fGYNklMJCqZg=");
          var t = e.getAttribute("data-testid");
          if (t != null) {
            var n = o("WAWebE2ETestRobots").E2E_TEST_ROBOTS[t];
            n != null && e.setAttribute("data-testrobot", n);
          }
        });
      };
      (t(), (e = self.setInterval(t, s)));
    }
    function d() {
      r("vulture")("Pf2EFSkRiq_Ij1cXkEIQxUxqvo4=");
      var t = document.querySelectorAll("[data-testrobot]");
      (t.forEach(function (e) {
        (r("vulture")("px4rxueWEAkJv9dB0JV9Y7027Sk="),
          e.removeAttribute("data-testrobot"));
      }),
        e != null && (self.clearInterval(e), (e = null)));
    }
    l.toggleE2EDebugMode = u;
  },
  98,
);
