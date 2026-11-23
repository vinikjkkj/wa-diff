__d(
  "WAWebSubscriptionAgeGating",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebBotBaseGating",
    "WAWebMexGetWoasAgeSignal",
    "WAWebSubscriptionAgeGatingPrefs",
    "WAWebSubscriptionWaffleAgeCheck",
    "WAWebUserPrefsMeUser",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = 86400,
      d = 120,
      m = 1440 * 60,
      p = null,
      _ = 0,
      f = 0,
      g = 0;
    function h() {
      return Math.min(d * Math.pow(2, f++), m);
    }
    function y() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_consumer_subscription_u18_gating_enabled",
      );
    }
    function C() {
      if (!y()) return !0;
      var e = o("WAWebSubscriptionAgeGatingPrefs").getSubscriptionAgeVerdict();
      return e == null || e.expiresAtSec <= o("WATimeUtils").unixTime()
        ? (b(), !1)
        : e.isEligible;
    }
    function b(t) {
      if ((t === void 0 && (t = {}), p != null && t.force !== !0)) return p;
      if (t.force !== !0 && o("WATimeUtils").unixTime() < _)
        return Promise.resolve();
      var n = ++g,
        a = v()
          .then(async function (e) {
            if (n === g) {
              if (e == null) {
                _ = o("WATimeUtils").unixTime() + h();
                return;
              }
              ((_ = 0),
                (f = 0),
                await o(
                  "WAWebSubscriptionAgeGatingPrefs",
                ).setSubscriptionAgeVerdict(e),
                n !== g &&
                  (await o(
                    "WAWebSubscriptionAgeGatingPrefs",
                  ).clearSubscriptionAgeVerdict()));
            }
          })
          .catch(function (t) {
            (n === g && (_ = o("WATimeUtils").unixTime() + h()),
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
            p === a && (p = null);
          });
      return ((p = a), a);
    }
    async function v() {
      if (!y()) return null;
      await o(
        "WAWebSubscriptionAgeGatingPrefs",
      ).initSubscriptionAgeVerdictStore();
      var e = await o(
        "WAWebSubscriptionWaffleAgeCheck",
      ).getSubscriptionAgeBranch();
      if (e === "pending") return null;
      if (e === "waffle") {
        var t = await o(
          "WAWebSubscriptionWaffleAgeCheck",
        ).fetchWaffleAgeCheck();
        return t == null
          ? null
          : {
              expiresAtSec: o("WATimeUtils").unixTime() + c,
              isEligible: t,
              source: "waffle",
            };
      }
      var n = o("WAWebUserPrefsMeUser").getMaybeMeLidUser();
      if (n == null) return null;
      var r = await o("WAWebMexGetWoasAgeSignal").fetchWoasAgeSignal(n);
      return r == null
        ? null
        : {
            expiresAtSec: o("WATimeUtils").unixTime() + r.ttlSec,
            isEligible:
              r.value === o("WAWebMexGetWoasAgeSignal").WOAS_OVER_18_VALUE,
            source: "woas",
          };
    }
    async function S() {
      if (
        !(!o("WAWebBotBaseGating").isAiSubscriptionPurchaseCtaEnabled() || !y())
      )
        try {
          await o(
            "WAWebSubscriptionAgeGatingPrefs",
          ).initSubscriptionAgeVerdictStore();
          var e = o(
            "WAWebSubscriptionAgeGatingPrefs",
          ).getSubscriptionAgeVerdict();
          if (e != null && e.expiresAtSec > o("WATimeUtils").unixTime()) return;
          await b();
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
    }
    async function R() {
      (g++, (_ = 0), (f = 0), (p = null));
      try {
        await o(
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
    }
    ((l.isInGatedCountry = y),
      (l.isEligibleForSubscriptionsByAge = C),
      (l.refreshSubscriptionAgeVerdict = b),
      (l.maybeWarmSubscriptionAgeVerdict = S),
      (l.invalidateSubscriptionAgeVerdict = R));
  },
  98,
);
