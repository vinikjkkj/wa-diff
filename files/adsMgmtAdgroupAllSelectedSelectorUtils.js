__d(
  "adsMgmtAdgroupAllSelectedSelectorUtils",
  ["AdFLEXSelectRowCheckboxHeaderConfig", "AdsObjectTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        o,
        a =
          (n =
            (o = r("AdFLEXSelectRowCheckboxHeaderConfig").get()) == null ||
            o.getEligibleSelectAllAdObjects == null
              ? void 0
              : o.getEligibleSelectAllAdObjects(
                  r("AdsObjectTypes").ADGROUP,
                  t,
                )) != null
            ? n
            : t;
      return a.length !== 0 && e.size === a.length;
    }
    l.adsMgmtAdgroupAllSelected = e;
  },
  98,
);
