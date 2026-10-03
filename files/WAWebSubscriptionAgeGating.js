__d(
  "WAWebSubscriptionAgeGating",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebBotBaseGating",
    "WAWebMexGetWoasAgeSignal",
    "WAWebSubscriptionAgeGatingPrefs",
    "WAWebSubscriptionWaffleAgeCheck",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = 86400,
      m = 120,
      p = 1440 * 60,
      _ = null,
      f = 0,
      g = 0,
      h = 0;
    function y() {
      return Math.min(m * Math.pow(2, g++), p);
    }
    function C() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_consumer_subscription_u18_gating_enabled",
      );
    }
    function b() {
      if (!C()) return !0;
      var e = o("WAWebSubscriptionAgeGatingPrefs").getSubscriptionAgeVerdict();
      return e == null || e.expiresAtSec <= o("WATimeUtils").unixTime()
        ? (v(), !1)
        : e.isEligible;
    }
    function v(t) {
      if ((t === void 0 && (t = {}), _ != null && t.force !== !0)) return _;
      if (t.force !== !0 && o("WATimeUtils").unixTime() < f)
        return (c || (c = n("Promise"))).resolve();
      var a = ++h,
        i = S()
          .then(
            (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  if (a === h) {
                    if (e == null) {
                      f = o("WATimeUtils").unixTime() + y();
                      return;
                    }
                    ((f = 0),
                      (g = 0),
                      yield o(
                        "WAWebSubscriptionAgeGatingPrefs",
                      ).setSubscriptionAgeVerdict(e),
                      a !== h &&
                        (yield o(
                          "WAWebSubscriptionAgeGatingPrefs",
                        ).clearSubscriptionAgeVerdict()));
                  }
                },
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
          )
          .catch(function (t) {
            (a === h && (f = o("WATimeUtils").unixTime() + y()),
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[age-gating] verdict refresh failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("subscription-age-gating-refresh-failed", {
                  sampling: 0.01,
                }));
          })
          .finally(function () {
            _ === i && (_ = null);
          });
      return ((_ = i), i);
    }
    function S() {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (!C()) return null;
          yield o(
            "WAWebSubscriptionAgeGatingPrefs",
          ).initSubscriptionAgeVerdictStore();
          var e = yield o(
            "WAWebSubscriptionWaffleAgeCheck",
          ).getSubscriptionAgeBranch();
          if (e === "pending") return null;
          if (e === "waffle") {
            var t = yield o(
              "WAWebSubscriptionWaffleAgeCheck",
            ).fetchWaffleAgeCheck();
            return t == null
              ? null
              : {
                  expiresAtSec: o("WATimeUtils").unixTime() + d,
                  isEligible: t,
                  source: "waffle",
                };
          }
          var n = o("WAWebUserPrefsMeUser").getMaybeMeLidUser();
          if (n == null) return null;
          var r = yield o("WAWebMexGetWoasAgeSignal").fetchWoasAgeSignal(n);
          return r == null
            ? null
            : {
                expiresAtSec: o("WATimeUtils").unixTime() + r.ttlSec,
                isEligible:
                  r.value === o("WAWebMexGetWoasAgeSignal").WOAS_OVER_18_VALUE,
                source: "woas",
              };
        })),
        R.apply(this, arguments)
      );
    }
    function L() {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (!(!o("WAWebBotBaseGating").isAiSubscriptionEnabled() || !C()))
            try {
              yield o(
                "WAWebSubscriptionAgeGatingPrefs",
              ).initSubscriptionAgeVerdictStore();
              var e = o(
                "WAWebSubscriptionAgeGatingPrefs",
              ).getSubscriptionAgeVerdict();
              if (e != null && e.expiresAtSec > o("WATimeUtils").unixTime())
                return;
              yield v();
            } catch (e) {
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[age-gating] verdict warm failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("subscription-age-gating-warm-failed", {
                  sampling: 0.01,
                });
            }
        })),
        E.apply(this, arguments)
      );
    }
    function k() {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (h++, (f = 0), (g = 0), (_ = null));
          try {
            yield o(
              "WAWebSubscriptionAgeGatingPrefs",
            ).clearSubscriptionAgeVerdict();
          } catch (e) {
            o("WALogger")
              .WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[age-gating] verdict invalidation failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("subscription-age-gating-invalidate-failed", {
                sampling: 0.01,
              });
          }
        })),
        I.apply(this, arguments)
      );
    }
    ((l.isInGatedCountry = C),
      (l.isEligibleForSubscriptionsByAge = b),
      (l.refreshSubscriptionAgeVerdict = v),
      (l.maybeWarmSubscriptionAgeVerdict = L),
      (l.invalidateSubscriptionAgeVerdict = k));
  },
  98,
);
