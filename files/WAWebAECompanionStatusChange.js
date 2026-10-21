__d(
  "WAWebAECompanionStatusChange",
  [
    "WALogger",
    "WAWebAECompanionEligibilityReaders",
    "WAWebAECompanionOffboardMutation",
    "WAWebAECompanionOnboardMutation",
    "WAWebAECompanionResultToast.react",
    "WAWebCoexCanonicalMembership",
    "WAWebCoexProductStateStore",
    "WAWebCoexStateSyncCoordinator",
    "WAWebEventEmitter",
    "WAWebMobilePlatforms",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = 12e4,
      f = new (r("WAWebEventEmitter"))(),
      g = null,
      h = 0;
    function y() {
      return g;
    }
    function C(e) {
      return (
        f.on("change", e),
        function () {
          f.off("change", e);
        }
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!(!o("WAWebMobilePlatforms").isSMB() || g != null)) {
            if (!S(e)) {
              (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "changeAECompanionStatus: not allowed, turnOn=",
                    "",
                  ])),
                String(e),
              ),
                T() !== e && I(e, !1));
              return;
            }
            N({ type: "inFlight", turnOn: e });
            var t = yield R(e);
            (yield E(), t ? D(e) : M(), I(e, t));
          }
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return e
        ? o(
            "WAWebAECompanionEligibilityReaders",
          ).getAECompanionOnboardingRouteResult() === "presented"
        : o(
            "WAWebAECompanionEligibilityReaders",
          ).isAECompanionOffboardingAvailable();
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = e
              ? yield o("WAWebAECompanionOnboardMutation").onboardAECompanion()
              : yield o(
                  "WAWebAECompanionOffboardMutation",
                ).offboardAECompanion();
            return t.type === "failed"
              ? (t.reason !== "request_failed" &&
                  o("WALogger")
                    .WARN(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "changeAECompanionStatus: not sent, ",
                          ", turnOn=",
                          "",
                        ])),
                      t.reason,
                      String(e),
                    )
                    .sendLogs("ae-companion-status-change-not-sent"),
                !1)
              : (t.value ||
                  o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "changeAECompanionStatus: not applied, turnOn=",
                        "",
                      ])),
                    String(e),
                  ),
                t.value);
          } catch (t) {
            return (
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "changeAECompanionStatus: request failed, turnOn=",
                      "",
                    ])),
                  String(e),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("ae-companion-status-change-failed"),
              !1
            );
          }
        })),
        L.apply(this, arguments)
      );
    }
    function E() {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            yield o("WAWebCoexStateSyncCoordinator").requestCoexStateRefresh(
              "status_change",
            );
          } catch (e) {
            o("WALogger")
              .ERROR(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "changeAECompanionStatus: refresh failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("ae-companion-status-refresh-failed");
          }
        })),
        k.apply(this, arguments)
      );
    }
    function I(e, t) {
      o("WAWebAECompanionResultToast.react").openAECompanionResultToast(
        (function (e) {
          if (Array.isArray(e) && e.length === 2 && e[0] === !0 && e[1] === !0)
            return "turnedOn";
          if (Array.isArray(e) && e.length === 2 && e[0] === !1 && e[1] === !0)
            return "turnedOff";
          if (Array.isArray(e) && e.length === 2 && e[0] === !0 && e[1] === !1)
            return "turnOnFailed";
          if (Array.isArray(e) && e.length === 2 && e[0] === !1 && e[1] === !1)
            return "turnOffFailed";
          throw Error(
            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
              e,
          );
        })([e, t]),
      );
    }
    function T() {
      var e;
      return (
        ((e = o("WAWebCoexProductStateStore").getCoexProductState()) == null
          ? void 0
          : e.surfaces.includes(
              o("WAWebCoexCanonicalMembership").AE_SURFACE,
            )) === !0
      );
    }
    function D(t) {
      N({ type: "settling", turnOn: t });
      var n = h;
      (o("WAWebCoexProductStateStore").subscribeToCoexProductStateChanges(P),
        window.setTimeout(function () {
          n === h &&
            x(n, t).catch(function (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "changeAECompanionStatus: settle refresh threw",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("ae-companion-status-settle-refresh-threw");
            });
        }, _),
        P());
    }
    function x(e, t) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          (yield E(),
            o("WALogger")
              .WARN(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "changeAECompanionStatus: not settled in time, turnOn=",
                    ", caughtUp=",
                    "",
                  ])),
                String(t),
                String(T() === t),
              )
              .sendLogs("ae-companion-status-settle-timed-out"),
            e === h && M());
        })),
        $.apply(this, arguments)
      );
    }
    function P() {
      var e = g;
      (e == null ? void 0 : e.type) === "settling" && T() === e.turnOn && M();
    }
    function N(e) {
      ((h += 1),
        o("WAWebCoexProductStateStore").unsubscribeFromCoexProductStateChanges(
          P,
        ),
        (g = e),
        f.trigger("change"));
    }
    function M() {
      ((h += 1),
        o("WAWebCoexProductStateStore").unsubscribeFromCoexProductStateChanges(
          P,
        ),
        g != null && ((g = null), f.trigger("change")));
    }
    ((l.getAECompanionPendingChange = y),
      (l.subscribeToAECompanionPendingChange = C),
      (l.changeAECompanionStatus = b));
  },
  98,
);
