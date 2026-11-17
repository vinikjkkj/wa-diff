__d(
  "WAWebVoipVideoEffectsState",
  [
    "WALogger",
    "WAWebUserPrefsVoip",
    "WAWebVoipBackgroundBlurLevel",
    "WAWebVoipVideoEffectsODS",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d, m, p, _;
    function f(e) {
      return e === "start_timeout" ||
        e === "start_error" ||
        e === "failed" ||
        e === "overloaded"
        ? !0
        : e === "start_failed" || e === "too_slow"
          ? !1
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })();
    }
    var g = 12e4,
      h = 6e4,
      y = null,
      C = null,
      b = null,
      v = !1,
      S = new Set(),
      R = new Set();
    function L() {
      if (y == null) {
        var e;
        y = {
          image: o("WAWebUserPrefsVoip").getBackgroundImagePreference(),
          level:
            (e = o("WAWebVoipBackgroundBlurLevel").parseBackgroundBlurLevel(
              o("WAWebUserPrefsVoip").getBackgroundBlurLevelPreference(),
            )) != null
              ? e
              : o("WAWebVoipBackgroundBlurLevel").DEFAULT_BACKGROUND_BLUR_LEVEL,
          requested: o("WAWebUserPrefsVoip").getVideoEffectsEnabled(),
          status: "off",
        };
      }
      return y;
    }
    function E() {
      return L().requested;
    }
    function k(e) {
      O(e, e ? "turned_on" : "turned_off");
    }
    function I() {
      O(!0, "turned_back_on");
    }
    function T(t) {
      var n = L();
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [effects] level=",
            "",
          ])),
        t,
      ),
        o("WAWebUserPrefsVoip").setBackgroundBlurLevelPreference(t),
        W(babelHelpers.extends({}, n, { level: t })));
    }
    function D(e) {
      var t = L();
      (o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [effects] image=",
            "",
          ])),
        e != null ? e : "none",
      ),
        o("WAWebUserPrefsVoip").setBackgroundImagePreference(e),
        W(babelHelpers.extends({}, t, { image: e })));
    }
    function x(e) {
      W(babelHelpers.extends({}, L(), { status: e }));
    }
    function $(e, t) {
      var n = t === void 0 ? {} : t,
        a = n.isRepeat,
        i = a === void 0 ? !1 : a,
        l = L();
      if (l.requested) {
        B();
        var s =
          f(e) &&
          (i ||
            (!v &&
              o("WAWebUserPrefsVoip").getVideoEffectsOnMsSinceKeptChoice() ==
                null));
        (o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [effects] turned off: ",
              "",
              "",
            ])),
          e,
          s ? ", choice kept" : "",
        ),
          o("WAWebVoipVideoEffectsODS").logVideoEffects(
            e === "start_timeout"
              ? "stopped_start_timeout"
              : e === "start_error"
                ? "stopped_start_error"
                : e === "start_failed"
                  ? "stopped_start_failed"
                  : e === "failed"
                    ? "stopped_failed"
                    : e === "overloaded"
                      ? "stopped_overloaded"
                      : e === "too_slow"
                        ? "stopped_too_slow"
                        : (function () {
                            throw Error(
                              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                e,
                            );
                          })(),
          ));
        try {
          s
            ? i || o("WAWebUserPrefsVoip").setVideoEffectsOnMsSinceKeptChoice(0)
            : o("WAWebUserPrefsVoip").setVideoEffectsEnabled(!1);
        } catch (e) {
          ((v = v || s),
            o("WALogger")
              .WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [effects] could not store the stop",
                  ])),
              )
              .catching(r("getErrorSafe")(e)));
        }
        ((C = { atMs: self.performance.now(), keptChoice: s, reason: e }),
          W(babelHelpers.extends({}, l, { requested: !1, status: "off" })),
          R.forEach(function (t) {
            return q(function () {
              return t(e);
            });
          }));
      }
    }
    function P() {
      return o("WAWebUserPrefsVoip").getVideoEffectsEnabled() !== L().requested;
    }
    function N() {
      var e = L(),
        t = o("WAWebUserPrefsVoip").getVideoEffectsEnabled();
      t !== e.requested &&
        (o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [effects] requested=",
              ", as remembered",
            ])),
          String(t),
        ),
        o("WAWebVoipVideoEffectsODS").logVideoEffects("restored"),
        (C = null),
        W(babelHelpers.extends({}, e, { requested: t })));
    }
    function M() {
      var e = C;
      return (
        (C = null),
        e == null || self.performance.now() - e.atMs > g
          ? null
          : { keptChoice: e.keptChoice, reason: e.reason }
      );
    }
    function w(e) {
      return (
        S.add(e),
        function () {
          S.delete(e);
        }
      );
    }
    function A(e) {
      return (
        R.add(e),
        function () {
          R.delete(e);
        }
      );
    }
    function F() {
      ((y = null), (C = null), (b = null), (v = !1), S.clear(), R.clear());
    }
    function O(e, t) {
      var n = L();
      (o("WALogger").LOG(
        m ||
          (m = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [effects] requested=",
            "",
          ])),
        String(e),
      ),
        (C = null),
        e !== n.requested && o("WAWebVoipVideoEffectsODS").logVideoEffects(t),
        o("WAWebUserPrefsVoip").setVideoEffectsEnabled(e),
        W(babelHelpers.extends({}, n, { requested: e })));
    }
    function B() {
      var e = b;
      if (e != null) {
        b = null;
        var t = o("WAWebUserPrefsVoip").getVideoEffectsOnMsSinceKeptChoice();
        if (t != null) {
          var n = t + self.performance.now() - e;
          try {
            o("WAWebUserPrefsVoip").setVideoEffectsOnMsSinceKeptChoice(
              n >= h ? null : n,
            );
          } catch (e) {
            o("WALogger")
              .WARN(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [effects] could not store the time on",
                  ])),
              )
              .catching(r("getErrorSafe")(e));
          }
        }
      }
    }
    function W(e) {
      var t = L();
      (t.image === e.image &&
        t.level === e.level &&
        t.requested === e.requested &&
        t.status === e.status) ||
        (t.status !== "on" && e.status === "on"
          ? (b = self.performance.now())
          : t.status === "on" && e.status !== "on" && B(),
        (y = e),
        S.forEach(function (e) {
          return q(e);
        }));
    }
    function q(e) {
      try {
        e();
      } catch (e) {
        o("WALogger")
          .ERROR(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [effects] a listener failed",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("voip-effects-listener-failed");
      }
    }
    ((l.isVideoEffectsStopTemporary = f),
      (l.getVideoEffectsSnapshot = L),
      (l.isVideoEffectsRequested = E),
      (l.setVideoEffectsRequested = k),
      (l.turnVideoEffectsBackOn = I),
      (l.setBackgroundBlurLevel = T),
      (l.setBackgroundImage = D),
      (l.setVideoEffectsStatus = x),
      (l.stopVideoEffects = $),
      (l.hasVideoEffectsChoiceToRestore = P),
      (l.restoreRememberedVideoEffectsChoice = N),
      (l.takeUnseenVideoEffectsStop = M),
      (l.subscribeToVideoEffects = w),
      (l.subscribeToVideoEffectsStop = A),
      (l.resetVideoEffectsStateForTesting = F));
  },
  98,
);
