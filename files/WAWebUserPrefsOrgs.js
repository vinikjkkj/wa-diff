__d(
  "WAWebUserPrefsOrgs",
  ["WAWebUserPrefsIndexedDBStorage", "WAWebUserPrefsKeys"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").KEYS.WA_WEB_ORG_LIST_FETCHED_TS,
      );
    }
    function s(e) {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").KEYS.WA_WEB_ORG_LIST_FETCHED_TS,
        e,
      );
    }
    ((l.getOrgListFetchedTs = e), (l.setOrgListFetchedTs = s));
  },
  98,
);
