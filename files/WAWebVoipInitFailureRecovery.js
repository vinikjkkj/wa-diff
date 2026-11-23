__d(
  "WAWebVoipInitFailureRecovery",
  [
    "Random",
    "WALogger",
    "WAWebVoipBackgroundWarmConditions",
    "WAWebVoipInitEventEmitter",
    "WAWebVoipInitFailureRecoveryODS",
    "WAWebVoipInitReliabilityGates",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = [12e4, 6e5, 18e5, 36e5, 72e5],
      c = 0.2,
      d = 1e4,
      m = [
        "aborted(",
        "bootload",
        "could not allocate memory",
        "out of memory",
        "unknown file path",
      ],
      p = "idle",
      _ = null;
    function f(e) {
      var t = (
        e instanceof Error ? e.name + ": " + e.message : String(e)
      ).toLowerCase();
      return !m.some(function (e) {
        return t.includes(e);
      });
    }
    function g(e) {
      p !== "idle" ||
        !y() ||
        (o("WAWebVoipInitFailureRecoveryODS").logCallVoipInitFailureRecovery(
          "armed",
        ),
        C(0, e));
    }
    function h() {
      (p !== "armed" && p !== "attempting") ||
        (_ != null && (self.clearTimeout(_), (_ = null)), R("unrecoverable"));
    }
    function y() {
      try {
        return o("WAWebVoipInitReliabilityGates").isVoipInitWorkerFixEnabled();
      } catch (t) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: init failure recovery gate unavailable",
                ])),
            )
            .catching(r("getErrorSafe")(t)),
          !1
        );
      }
    }
    function C(e, t) {
      var n = u[e];
      if (n == null) {
        R("exhausted");
        return;
      }
      ((p = "armed"),
        (_ = self.setTimeout(function () {
          ((_ = null),
            v(e, t).catch(function (e) {
              (o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: init failure recovery attempt failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e)),
                R("attempt_error"));
            }));
        }, b(n))));
    }
    function b(e) {
      return Math.round(e * (1 + (o("Random").random() * 2 - 1) * c));
    }
    async function v(e, t) {
      if (
        ((p = "attempting"),
        await o("WAWebVoipBackgroundWarmConditions").waitForIdleCallback(d),
        !!S())
      ) {
        if (
          o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited()
        ) {
          R("not_needed");
          return;
        }
        o("WAWebVoipInitFailureRecoveryODS").logCallVoipInitFailureRecovery(
          "attempt",
        );
        var n = await t(e + 1, S);
        (o("WAWebVoipInitFailureRecoveryODS").logCallVoipInitFailureRecovery(
          n ? "restart_init_success" : "restart_init_failure",
        ),
          n ? (p = "done") : S() && C(e + 1, t));
      }
    }
    function S() {
      return p === "attempting";
    }
    function R(e) {
      ((p = "done"),
        o("WAWebVoipInitFailureRecoveryODS").logCallVoipInitFailureRecovery(e));
    }
    ((l.isRecoverableVoipInitFailure = f),
      (l.armVoipInitFailureRecovery = g),
      (l.stopVoipInitFailureRecovery = h));
  },
  98,
);
