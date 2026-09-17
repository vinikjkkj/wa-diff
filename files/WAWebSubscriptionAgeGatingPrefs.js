__d(
  "WAWebSubscriptionAgeGatingPrefs",
  ["WAWebUserPrefsIndexedDBStorage"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "WASubscriptionAgeVerdict";
    function s() {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.init();
    }
    function u() {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(e);
    }
    function c(t) {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(e, t);
    }
    function d() {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(e);
    }
    ((l.initSubscriptionAgeVerdictStore = s),
      (l.getSubscriptionAgeVerdict = u),
      (l.setSubscriptionAgeVerdict = c),
      (l.clearSubscriptionAgeVerdict = d));
  },
  98,
);
