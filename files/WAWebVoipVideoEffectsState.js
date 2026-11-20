__d(
  "WAWebVoipVideoEffectsState",
  [
    "WALogger",
    "WAWebUserPrefsVoip",
    "WAWebVoipBackgroundBlurLevel",
    "WAWebVoipBackgroundBlurStrength",
    "WAWebVoipVideoEffectsODS",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d, m, p;
    function _(e) {
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
    var f = 12e4,
      g = 6e4,
      h = null,
      y = null,
      C = null,
      b = !1,
      v = new Set(),
      S = new Set();
    function R() {
      return (
        h == null &&
          (h = V({
            blur: U(),
            image: o("WAWebUserPrefsVoip").getBackgroundImagePreference(),
            requested: o("WAWebUserPrefsVoip").getVideoEffectsEnabled(),
            status: "off",
          })),
        h
      );
    }
    function L() {
      return R().requested;
    }
    function E(e) {
      B(e, e ? "turned_on" : "turned_off");
    }
    function k() {
      B(!0, "turned_back_on");
    }
    function I(e) {
      var t = R(),
        n =
          t.requested && t.image != null
            ? babelHelpers.extends({}, t, { blur: e })
            : babelHelpers.extends({}, t, {
                blur: e,
                image: null,
                requested: e > 0,
              });
      (n.requested !== t.requested &&
        (t.image != null &&
          o("WAWebUserPrefsVoip").setBackgroundImagePreference(null),
        W(t, n.requested, n.requested ? "turned_on" : "turned_off")),
        G(n));
    }
    function T() {
      var e = R(),
        t = e.blur,
        n = e.image;
      q(t, n);
    }
    function D(e) {
      var t = R(),
        n = t.requested ? t.blur : 0;
      (q(n, e),
        W(t, !0, "turned_on"),
        G(babelHelpers.extends({}, t, { blur: n, image: e, requested: !0 })));
    }
    function x() {
      var e = R(),
        t = e.requested && e.blur > 0;
      (q(e.blur, null),
        t || W(e, !1, "turned_off"),
        G(babelHelpers.extends({}, e, { image: null, requested: t })));
    }
    function $() {
      var e = R(),
        t = Math.max(
          e.blur,
          o("WAWebVoipBackgroundBlurStrength").DEFAULT_BLUR_STRENGTH,
        );
      (q(t, null), G(babelHelpers.extends({}, e, { blur: t, image: null })));
    }
    function P(e) {
      G(babelHelpers.extends({}, R(), { status: e }));
    }
    function N(t, n) {
      var a = n === void 0 ? {} : n,
        i = a.isRepeat,
        l = i === void 0 ? !1 : i,
        u = R();
      if (u.requested) {
        H();
        var c =
          _(t) &&
          (l ||
            (!b &&
              o("WAWebUserPrefsVoip").getVideoEffectsOnMsSinceKeptChoice() ==
                null));
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [effects] turned off: ",
              "",
              "",
            ])),
          t,
          c ? ", choice kept" : "",
        ),
          o("WAWebVoipVideoEffectsODS").logVideoEffects(
            t === "start_timeout"
              ? "stopped_start_timeout"
              : t === "start_error"
                ? "stopped_start_error"
                : t === "start_failed"
                  ? "stopped_start_failed"
                  : t === "failed"
                    ? "stopped_failed"
                    : t === "overloaded"
                      ? "stopped_overloaded"
                      : t === "too_slow"
                        ? "stopped_too_slow"
                        : (function () {
                            throw Error(
                              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                t,
                            );
                          })(),
          ));
        try {
          c
            ? l || o("WAWebUserPrefsVoip").setVideoEffectsOnMsSinceKeptChoice(0)
            : o("WAWebUserPrefsVoip").setVideoEffectsEnabled(!1);
        } catch (e) {
          ((b = b || c),
            o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [effects] could not store the stop",
                  ])),
              )
              .catching(r("getErrorSafe")(e)));
        }
        ((y = { atMs: self.performance.now(), keptChoice: c, reason: t }),
          G(babelHelpers.extends({}, u, { requested: !1, status: "off" })),
          S.forEach(function (e) {
            return z(function () {
              return e(t);
            });
          }));
      }
    }
    function M() {
      return o("WAWebUserPrefsVoip").getVideoEffectsEnabled() !== R().requested;
    }
    function w() {
      var e = R(),
        t = o("WAWebUserPrefsVoip").getVideoEffectsEnabled();
      t !== e.requested &&
        (o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [effects] requested=",
              ", as remembered",
            ])),
          String(t),
        ),
        o("WAWebVoipVideoEffectsODS").logVideoEffects("restored"),
        (y = null),
        G(babelHelpers.extends({}, e, { requested: t })));
    }
    function A() {
      var e = y;
      return (
        (y = null),
        e == null || self.performance.now() - e.atMs > f
          ? null
          : { keptChoice: e.keptChoice, reason: e.reason }
      );
    }
    function F(e) {
      return (
        v.add(e),
        function () {
          v.delete(e);
        }
      );
    }
    function O(e) {
      return (
        S.add(e),
        function () {
          S.delete(e);
        }
      );
    }
    function B(e, t) {
      var n = R();
      (W(n, e, t), G(babelHelpers.extends({}, n, { requested: e })));
    }
    function W(e, t, n) {
      (o("WALogger").LOG(
        c ||
          (c = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [effects] requested=",
            "",
          ])),
        String(t),
      ),
        (y = null),
        t !== e.requested && o("WAWebVoipVideoEffectsODS").logVideoEffects(n),
        o("WAWebUserPrefsVoip").setVideoEffectsEnabled(t));
    }
    function q(e, t) {
      (o("WALogger").LOG(
        d ||
          (d = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [effects] blur=",
            ", image=",
            "",
          ])),
        e,
        t != null ? t : "none",
      ),
        o("WAWebUserPrefsVoip").setBackgroundBlurStrengthPreference(e),
        o("WAWebUserPrefsVoip").setBackgroundImagePreference(t));
    }
    function U() {
      var e,
        t = o("WAWebVoipBackgroundBlurStrength").parseBlurStrength(
          o("WAWebUserPrefsVoip").getBackgroundBlurStrengthPreference(),
        );
      return t != null
        ? t
        : o("WAWebUserPrefsVoip").getBackgroundImagePreference() != null
          ? 0
          : o("WAWebVoipBackgroundBlurStrength").getBlurLevelStrength(
              (e = o("WAWebVoipBackgroundBlurLevel").parseBackgroundBlurLevel(
                o("WAWebUserPrefsVoip").getBackgroundBlurLevelPreference(),
              )) != null
                ? e
                : o("WAWebVoipBackgroundBlurLevel")
                    .DEFAULT_BACKGROUND_BLUR_LEVEL,
            );
    }
    function V(e) {
      return e.requested && e.image == null && e.blur === 0
        ? babelHelpers.extends({}, e, {
            blur: o("WAWebVoipBackgroundBlurStrength").DEFAULT_BLUR_STRENGTH,
          })
        : e;
    }
    function H() {
      var e = C;
      if (e != null) {
        C = null;
        var t = o("WAWebUserPrefsVoip").getVideoEffectsOnMsSinceKeptChoice();
        if (t != null) {
          var n = t + self.performance.now() - e;
          try {
            o("WAWebUserPrefsVoip").setVideoEffectsOnMsSinceKeptChoice(
              n >= g ? null : n,
            );
          } catch (e) {
            o("WALogger")
              .WARN(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [effects] could not store the time on",
                  ])),
              )
              .catching(r("getErrorSafe")(e));
          }
        }
      }
    }
    function G(e) {
      var t = V(e),
        n = R();
      (n.blur === t.blur &&
        n.image === t.image &&
        n.requested === t.requested &&
        n.status === t.status) ||
        (n.status !== "on" && t.status === "on"
          ? (C = self.performance.now())
          : n.status === "on" && t.status !== "on" && H(),
        (h = t),
        v.forEach(function (e) {
          return z(e);
        }));
    }
    function z(e) {
      try {
        e();
      } catch (e) {
        o("WALogger")
          .ERROR(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [effects] a listener failed",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("voip-effects-listener-failed");
      }
    }
    ((l.isVideoEffectsStopTemporary = _),
      (l.getVideoEffectsSnapshot = R),
      (l.isVideoEffectsRequested = L),
      (l.setVideoEffectsRequested = E),
      (l.turnVideoEffectsBackOn = k),
      (l.setBackgroundBlurStrength = I),
      (l.rememberBackgroundBlurStrength = T),
      (l.chooseBackgroundImage = D),
      (l.chooseNoBackground = x),
      (l.blurInsteadOfBackgroundImage = $),
      (l.setVideoEffectsStatus = P),
      (l.stopVideoEffects = N),
      (l.hasVideoEffectsChoiceToRestore = M),
      (l.restoreRememberedVideoEffectsChoice = w),
      (l.takeUnseenVideoEffectsStop = A),
      (l.subscribeToVideoEffects = F),
      (l.subscribeToVideoEffectsStop = O));
  },
  98,
);
