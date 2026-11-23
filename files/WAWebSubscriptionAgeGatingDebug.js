__d(
  "WAWebSubscriptionAgeGatingDebug",
  [
    "WATimeUtils",
    "WAWebL10NCountryCodes",
    "WAWebSubscriptionAgeGating",
    "WAWebSubscriptionAgeGatingPrefs",
    "WAWebSubscriptionWaffleAgeCheck",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 3600;
    async function s() {
      var e;
      await o(
        "WAWebSubscriptionAgeGatingPrefs",
      ).initSubscriptionAgeVerdictStore();
      var t = o("WAWebSubscriptionAgeGatingPrefs").getSubscriptionAgeVerdict(),
        n = o("WAWebSubscriptionAgeGating").isInGatedCountry();
      return {
        countryCode: o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(
          (e = o("WAWebUserPrefsMeUser").getMaybeMePnUser()) == null
            ? void 0
            : e.user,
        ),
        branch: await o(
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
    }
    s.doc =
      "Dump the subscription age gate: country, whether it is gated, the cached verdict and how long it has left.";
    async function u() {
      return (
        await o(
          "WAWebSubscriptionAgeGatingPrefs",
        ).initSubscriptionAgeVerdictStore(),
        await o("WAWebSubscriptionAgeGating").refreshSubscriptionAgeVerdict({
          force: !0,
        }),
        s()
      );
    }
    u.doc =
      "Re-fetch the age signal now (WAFFLE if a linked account exists, WOAS if not) and return the resulting state.";
    async function c() {
      return (
        await o(
          "WAWebSubscriptionAgeGatingPrefs",
        ).initSubscriptionAgeVerdictStore(),
        await o(
          "WAWebSubscriptionAgeGating",
        ).invalidateSubscriptionAgeVerdict(),
        s()
      );
    }
    c.doc =
      "Drop the cached verdict, simulating a cold cache. The gate fails closed until the next refresh lands.";
    async function d(t) {
      await o(
        "WAWebSubscriptionAgeGatingPrefs",
      ).initSubscriptionAgeVerdictStore();
      var n = await o(
          "WAWebSubscriptionWaffleAgeCheck",
        ).getSubscriptionAgeBranch(),
        r = n === "waffle" ? "waffle" : "woas";
      return (
        await o(
          "WAWebSubscriptionAgeGating",
        ).invalidateSubscriptionAgeVerdict(),
        await o("WAWebSubscriptionAgeGatingPrefs").setSubscriptionAgeVerdict({
          expiresAtSec: o("WATimeUtils").unixTime() + e,
          isEligible: t,
          source: r,
        }),
        s()
      );
    }
    d.doc =
      "Force the age verdict for one hour, e.g. overrideSubscriptionAgeVerdict(false) to act as an under-18 user.";
    var m = {
      clearSubscriptionAgeVerdict: c,
      getSubscriptionAgeGatingState: s,
      overrideSubscriptionAgeVerdict: d,
      refreshSubscriptionAgeVerdict: u,
    };
    l.default = m;
  },
  98,
);
