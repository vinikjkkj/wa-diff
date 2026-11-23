__d(
  "WAWebAgentTransitionUtils",
  ["WAWebUserPrefsIndexedDBStorage"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "WAMeSmbOffboardingState",
      s = "WAMeSmbParentCompanyName";
    async function u() {
      await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(e, !0);
    }
    function c() {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(e) === !0;
    }
    async function d() {
      (await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(e),
        await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(s));
    }
    async function m(e) {
      await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(s, e);
    }
    function p() {
      var e;
      return (e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(s)) !=
        null
        ? e
        : "";
    }
    ((l.storeMeSmbOffboardingState = u),
      (l.getMeSmbOffboardingState = c),
      (l.clearMeSmbOffboardingState = d),
      (l.storeMeSmbParentCompanyName = m),
      (l.getMeSmbParentCompanyName = p));
  },
  98,
);
