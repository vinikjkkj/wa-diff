__d(
  "WAWebAECompanionStatusChange",
  [
    "WALogger",
    "WAWebAECompanionEligibilityReaders",
    "WAWebAECompanionJourneyLogging",
    "WAWebAECompanionOffboardMutation",
    "WAWebAECompanionOnboardMutation",
    "WAWebAECompanionResultToast.react",
    "WAWebCoexCanonicalMembership",
    "WAWebCoexProductStateStore",
    "WAWebCoexStateSyncCoordinator",
    "WAWebEventEmitter",
    "WAWebMobilePlatforms",
    "WAWebWamEnumAutomaticEventsTargetComponentEnum",
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
    async function b(t, n) {
      if (!(!o("WAWebMobilePlatforms").isSMB() || g != null)) {
        if (!v(t)) {
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "changeAECompanionStatus: not allowed, turnOn=",
                "",
              ])),
            String(t),
          ),
            E() !== t && L(t, !1));
          return;
        }
        (D({ type: "inFlight", turnOn: t }),
          o("WAWebAECompanionJourneyLogging").logAECompanionJourneyApi(
            n,
            t
              ? o("WAWebWamEnumAutomaticEventsTargetComponentEnum")
                  .AUTOMATIC_EVENTS_TARGET_COMPONENT_ENUM.AE_ONBOARDING_START
              : o("WAWebWamEnumAutomaticEventsTargetComponentEnum")
                  .AUTOMATIC_EVENTS_TARGET_COMPONENT_ENUM.AE_OFFBOARDING_START,
          ));
        var r = await S(t);
        o("WAWebAECompanionJourneyLogging").logAECompanionJourneyApi(
          n,
          t
            ? o("WAWebWamEnumAutomaticEventsTargetComponentEnum")
                .AUTOMATIC_EVENTS_TARGET_COMPONENT_ENUM.AE_ONBOARDING_FINISH
            : o("WAWebWamEnumAutomaticEventsTargetComponentEnum")
                .AUTOMATIC_EVENTS_TARGET_COMPONENT_ENUM.AE_OFFBOARDING_FINISH,
          r.type === "success"
            ? { result: "success" }
            : { result: "fail", error: r.reason },
        );
        var a = r.type === "success";
        (await R(), a ? k(t) : x(), L(t, a));
      }
    }
    function v(e) {
      return e
        ? o(
            "WAWebAECompanionEligibilityReaders",
          ).getAECompanionOnboardingRouteResult() === "presented"
        : o(
            "WAWebAECompanionEligibilityReaders",
          ).isAECompanionOffboardingAvailable();
    }
    async function S(e) {
      try {
        var t = e
          ? await o("WAWebAECompanionOnboardMutation").onboardAECompanion()
          : await o("WAWebAECompanionOffboardMutation").offboardAECompanion();
        return t.type === "failed"
          ? (t.reason !== "request_failed" &&
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "changeAECompanionStatus: not sent, ",
                      ", turnOn=",
                      "",
                    ])),
                  t.reason,
                  String(e),
                )
                .sendLogs("ae-companion-status-change-not-sent"),
            { type: "failed", reason: t.reason })
          : t.value
            ? { type: "success" }
            : (o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "changeAECompanionStatus: not applied, turnOn=",
                    "",
                  ])),
                String(e),
              ),
              { type: "failed", reason: "not_applied" });
      } catch (t) {
        return (
          o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "changeAECompanionStatus: request failed, turnOn=",
                  "",
                ])),
              String(e),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("ae-companion-status-change-failed"),
          { type: "failed", reason: "threw" }
        );
      }
    }
    async function R() {
      try {
        await o("WAWebCoexStateSyncCoordinator").requestCoexStateRefresh(
          "status_change",
        );
      } catch (e) {
        o("WALogger")
          .ERROR(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "changeAECompanionStatus: refresh failed",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("ae-companion-status-refresh-failed");
      }
    }
    function L(e, t) {
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
    function E() {
      var e;
      return (
        ((e = o("WAWebCoexProductStateStore").getCoexProductState()) == null
          ? void 0
          : e.surfaces.includes(
              o("WAWebCoexCanonicalMembership").AE_SURFACE,
            )) === !0
      );
    }
    function k(e) {
      D({ type: "settling", turnOn: e });
      var t = h;
      (o("WAWebCoexProductStateStore").subscribeToCoexProductStateChanges(T),
        window.setTimeout(function () {
          t === h &&
            I(t, e).catch(function (e) {
              o("WALogger")
                .ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "changeAECompanionStatus: settle refresh threw",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("ae-companion-status-settle-refresh-threw");
            });
        }, _),
        T());
    }
    async function I(e, t) {
      (await R(),
        o("WALogger")
          .WARN(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "changeAECompanionStatus: not settled in time, turnOn=",
                ", caughtUp=",
                "",
              ])),
            String(t),
            String(E() === t),
          )
          .sendLogs("ae-companion-status-settle-timed-out"),
        e === h && x());
    }
    function T() {
      var e = g;
      (e == null ? void 0 : e.type) === "settling" && E() === e.turnOn && x();
    }
    function D(e) {
      ((h += 1),
        o("WAWebCoexProductStateStore").unsubscribeFromCoexProductStateChanges(
          T,
        ),
        (g = e),
        f.trigger("change"));
    }
    function x() {
      ((h += 1),
        o("WAWebCoexProductStateStore").unsubscribeFromCoexProductStateChanges(
          T,
        ),
        g != null && ((g = null), f.trigger("change")));
    }
    ((l.getAECompanionPendingChange = y),
      (l.subscribeToAECompanionPendingChange = C),
      (l.changeAECompanionStatus = b));
  },
  98,
);
