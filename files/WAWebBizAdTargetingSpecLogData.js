__d(
  "WAWebBizAdTargetingSpecLogData",
  ["WAWebBizAdTargetingSpecUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n = e == null ? void 0 : e.geo_locations,
        r = e == null ? void 0 : e.age_min,
        a = e == null ? void 0 : e.age_max,
        i = e == null ? void 0 : e.genders,
        l =
          e == null || (t = e.flexible_spec) == null || (t = t[0]) == null
            ? void 0
            : t.interests,
        s = n == null ? void 0 : n.countries,
        u = s != null && s.length > 0 ? s.join(", ") : null,
        c = r != null && a != null ? r + "-" + a : null,
        d = null;
      i != null &&
        i.length === 1 &&
        (i[0] === o("WAWebBizAdTargetingSpecUtils").GENDER_CODE_MALE
          ? (d = "M")
          : i[0] === o("WAWebBizAdTargetingSpecUtils").GENDER_CODE_FEMALE &&
            (d = "F"));
      var m =
        l != null && l.length > 0
          ? l
              .map(function (e) {
                return e.name;
              })
              .join(", ")
          : "";
      return { location: u, age: c, gender: d, interests: m };
    }
    l.default = e;
  },
  98,
);
