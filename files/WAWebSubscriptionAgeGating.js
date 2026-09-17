__d(
  "WAWebSubscriptionAgeGating",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebBotBaseGating",
    "WAWebL10NCountryCodes",
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
      d = ["US", "BR"],
      m = 86400,
      p = 120,
      _ = 1440 * 60,
      f = null,
      g = 0,
      h = 0,
      y = 0;
    function C() {
      return Math.min(p * Math.pow(2, h++), _);
    }
    function b() {
      var e,
        t = o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(
          (e = o("WAWebUserPrefsMeUser").getMaybeMePnUser()) == null
            ? void 0
            : e.user,
        );
      return t === "" || d.includes(t);
    }
    function v() {
      if (!b()) return !0;
      var e = o("WAWebSubscriptionAgeGatingPrefs").getSubscriptionAgeVerdict();
      return e == null || e.expiresAtSec <= o("WATimeUtils").unixTime()
        ? (S(), !1)
        : e.isEligible;
    }
    function S(t) {
      if ((t === void 0 && (t = {}), f != null && t.force !== !0)) return f;
      if (t.force !== !0 && o("WATimeUtils").unixTime() < g)
        return (c || (c = n("Promise"))).resolve();
      var a = ++y,
        i = R()
          .then(
            (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  if (a === y) {
                    if (e == null) {
                      g = o("WATimeUtils").unixTime() + C();
                      return;
                    }
                    ((g = 0),
                      (h = 0),
                      yield o(
                        "WAWebSubscriptionAgeGatingPrefs",
                      ).setSubscriptionAgeVerdict(e),
                      a !== y &&
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
            (a === y && (g = o("WATimeUtils").unixTime() + C()),
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
            f === i && (f = null);
          });
      return ((f = i), i);
    }
    function R() {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (!b()) return null;
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
                  expiresAtSec: o("WATimeUtils").unixTime() + m,
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
        L.apply(this, arguments)
      );
    }
    function E() {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (!(!o("WAWebBotBaseGating").isAiSubscriptionEnabled() || !b()))
            try {
              yield o(
                "WAWebSubscriptionAgeGatingPrefs",
              ).initSubscriptionAgeVerdictStore();
              var e = o(
                "WAWebSubscriptionAgeGatingPrefs",
              ).getSubscriptionAgeVerdict();
              if (e != null && e.expiresAtSec > o("WATimeUtils").unixTime())
                return;
              yield S();
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
        k.apply(this, arguments)
      );
    }
    function I() {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (y++, (g = 0), (h = 0), (f = null));
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
        T.apply(this, arguments)
      );
    }
    ((l.isInGatedCountry = b),
      (l.isEligibleForSubscriptionsByAge = v),
      (l.refreshSubscriptionAgeVerdict = S),
      (l.maybeWarmSubscriptionAgeVerdict = E),
      (l.invalidateSubscriptionAgeVerdict = I));
  },
  98,
);
