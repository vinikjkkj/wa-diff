__d(
  "AdsPEFilterSetUtil",
  ["AdsGenericFilterSet", "AdsPEFilterSetToAPIUtil", "isIDFilter"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e == null
        ? []
        : e instanceof r("AdsGenericFilterSet")
          ? e.toAPI()
          : e;
    }
    function s(e) {
      if (e == null) return [];
      var t = e.toAPI();
      return o("AdsPEFilterSetToAPIUtil").transformToAPISpec(t);
    }
    function u(t) {
      var n = e(t),
        o = n.filter(r("isIDFilter"))[0];
      return !!(o && o.value.length === 0);
    }
    ((l.normalizeToFilterSetAPIObject = e),
      (l.toMultiLevelAPISpec = s),
      (l.hasEmptyIDFilter = u));
  },
  98,
);
