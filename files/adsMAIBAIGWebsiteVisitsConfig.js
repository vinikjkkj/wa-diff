__d(
  "adsMAIBAIGWebsiteVisitsConfig",
  ["PolarisBoostObjectiveUtils", "gkx", "isValidURL"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return [].concat(
        r("gkx")("24094") ? [o("PolarisBoostObjectiveUtils").SEE_DETAILS] : [],
        [
          o("PolarisBoostObjectiveUtils").LEARN_MORE,
          o("PolarisBoostObjectiveUtils").SHOP_NOW,
          o("PolarisBoostObjectiveUtils").WATCH_MORE,
          o("PolarisBoostObjectiveUtils").CONTACT_US,
          o("PolarisBoostObjectiveUtils").SIGN_UP,
        ],
      );
    }
    function s() {
      return r("gkx")("24094")
        ? o("PolarisBoostObjectiveUtils").SEE_DETAILS
        : o("PolarisBoostObjectiveUtils").LEARN_MORE;
    }
    function u(t) {
      return (
        t != null &&
        e().some(function (e) {
          return e === t;
        })
      );
    }
    function c(e) {
      return e != null && r("isValidURL")(e);
    }
    ((l.getIGWebsiteVisitsCallToActions = e),
      (l.getDefaultIGWebsiteVisitsCallToAction = s),
      (l.isIGWebsiteVisitsCallToAction = u),
      (l.isIGWebsiteVisitsUrlValid = c));
  },
  98,
);
