__d(
  "WAWebSubscriptionAgeGatingDebug",
  [
    "WATimeUtils",
    "WAWebL10NCountryCodes",
    "WAWebSubscriptionAgeGating",
    "WAWebSubscriptionAgeGatingPrefs",
    "WAWebSubscriptionWaffleAgeCheck",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 3600;
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e;
          yield o(
            "WAWebSubscriptionAgeGatingPrefs",
          ).initSubscriptionAgeVerdictStore();
          var t = o(
              "WAWebSubscriptionAgeGatingPrefs",
            ).getSubscriptionAgeVerdict(),
            n = o("WAWebSubscriptionAgeGating").isInGatedCountry();
          return {
            countryCode: o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(
              (e = o("WAWebUserPrefsMeUser").getMaybeMePnUser()) == null
                ? void 0
                : e.user,
            ),
            branch: yield o(
              "WAWebSubscriptionWaffleAgeCheck",
            ).getSubscriptionAgeBranch(),
            isEligible:
              !n ||
              (t != null &&
                t.expiresAtSec > o("WATimeUtils").unixTime() &&
                t.isEligible),
            isInGatedCountry: n,
            secondsUntilExpiry:
              t != null ? t.expiresAtSec - o("WATimeUtils").unixTime() : null,
            verdict: t,
          };
        })),
        u.apply(this, arguments)
      );
    }
    s.doc =
      "Dump the subscription age gate: country, whether it is gated, the cached verdict and how long it has left.";
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return (
            yield o(
              "WAWebSubscriptionAgeGatingPrefs",
            ).initSubscriptionAgeVerdictStore(),
            yield o("WAWebSubscriptionAgeGating").refreshSubscriptionAgeVerdict(
              { force: !0 },
            ),
            s()
          );
        })),
        d.apply(this, arguments)
      );
    }
    c.doc =
      "Re-fetch the age signal now (WAFFLE if a linked account exists, WOAS if not) and return the resulting state.";
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return (
            yield o(
              "WAWebSubscriptionAgeGatingPrefs",
            ).initSubscriptionAgeVerdictStore(),
            yield o(
              "WAWebSubscriptionAgeGating",
            ).invalidateSubscriptionAgeVerdict(),
            s()
          );
        })),
        p.apply(this, arguments)
      );
    }
    m.doc =
      "Drop the cached verdict, simulating a cold cache. The gate fails closed until the next refresh lands.";
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          yield o(
            "WAWebSubscriptionAgeGatingPrefs",
          ).initSubscriptionAgeVerdictStore();
          var n = yield o(
              "WAWebSubscriptionWaffleAgeCheck",
            ).getSubscriptionAgeBranch(),
            r = n === "waffle" ? "waffle" : "woas";
          return (
            yield o(
              "WAWebSubscriptionAgeGating",
            ).invalidateSubscriptionAgeVerdict(),
            yield o(
              "WAWebSubscriptionAgeGatingPrefs",
            ).setSubscriptionAgeVerdict({
              expiresAtSec: o("WATimeUtils").unixTime() + e,
              isEligible: t,
              source: r,
            }),
            s()
          );
        })),
        f.apply(this, arguments)
      );
    }
    _.doc =
      "Force the age verdict for one hour, e.g. overrideSubscriptionAgeVerdict(false) to act as an under-18 user.";
    var g = {
      clearSubscriptionAgeVerdict: m,
      getSubscriptionAgeGatingState: s,
      overrideSubscriptionAgeVerdict: _,
      refreshSubscriptionAgeVerdict: c,
    };
    l.default = g;
  },
  98,
);
