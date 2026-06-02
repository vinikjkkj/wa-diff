__d(
  "WAWebFeatureControlCache",
  ["WATimeUtils", "WAWebUserPrefsIndexedDBStorage"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "WAAuthorizedAgentFeatureControlPolicy";
    function s() {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(e);
    }
    function u() {
      var e;
      return (e = s()) == null ? void 0 : e.policy;
    }
    function c() {
      var e;
      return (e = s()) == null ? void 0 : e.lastFetchedAt;
    }
    function d() {
      var e;
      return ((e = s()) == null ? void 0 : e.isUserAA) === !0;
    }
    async function m(t) {
      var n = {
        policy: t,
        lastFetchedAt: o("WATimeUtils").unixTimeMs(),
        isUserAA: !0,
      };
      await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(e, n);
    }
    async function p() {
      var t,
        n,
        r = s();
      if ((r == null ? void 0 : r.isUserAA) !== !0) {
        var a = {
          policy: (t = r == null ? void 0 : r.policy) != null ? t : null,
          lastFetchedAt:
            (n = r == null ? void 0 : r.lastFetchedAt) != null ? n : null,
          isUserAA: !0,
        };
        await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(e, a);
      }
    }
    async function _() {
      await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(e);
    }
    ((l.getPolicy = u),
      (l.getPolicyLastFetchedAt = c),
      (l.getUserIsAA = d),
      (l.setPolicy = m),
      (l.markUserAsAA = p),
      (l.clearPolicy = _));
  },
  98,
);
