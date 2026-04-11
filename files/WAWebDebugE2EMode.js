__d(
  "WAWebDebugE2EMode",
  ["WAWebE2ETestRobots"],
  function (t, n, r, o, a, i, l) {
    var e = null,
      s = 2e3;
    function u() {
      var e,
        t,
        n =
          (e =
            (t = document.body) == null ? void 0 : t.classList.toggle("e2e")) !=
          null
            ? e
            : !1;
      (d(), n && c());
    }
    ((u.doc = "Toggles E2E debug mode"), (u.paramsToExecute = []));
    function c() {
      var t = function () {
        var e = document.querySelectorAll("[data-testid]");
        e.forEach(function (e) {
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
      var t = document.querySelectorAll("[data-testrobot]");
      (t.forEach(function (e) {
        e.removeAttribute("data-testrobot");
      }),
        e != null && (self.clearInterval(e), (e = null)));
    }
    l.toggleE2EDebugMode = u;
  },
  98,
);
