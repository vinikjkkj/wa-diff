__d(
  "WAWebApiUserPrefs",
  ["WAWebSchemaUserPrefs"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebSchemaUserPrefs").getUserPrefsTable().createOrReplace(e);
    }
    function s(e) {
      return o("WAWebSchemaUserPrefs").getUserPrefsTable().remove(e);
    }
    function u(e) {
      return o("WAWebSchemaUserPrefs")
        .getUserPrefsTable()
        .bulkCreateOrReplace(e);
    }
    function c() {
      return o("WAWebSchemaUserPrefs").getUserPrefsTable().clear();
    }
    function d() {
      return o("WAWebSchemaUserPrefs").getUserPrefsTable().all();
    }
    ((l.createOrReplaceUserPref = e),
      (l.removeUserPref = s),
      (l.bulkCreateOrReplaceUserPrefs = u),
      (l.clearUserPrefs = c),
      (l.allUserPrefsIdb = d));
  },
  98,
);
