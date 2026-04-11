__d(
  "WAWebBizAdTargetingSpecUtils",
  ["fbt", "WAWebCompactMapString", "WAWebCountriesNativeCountryNames"],
  function (t, n, r, o, a, i, l, s) {
    var e = ", ",
      u = 1,
      c = 2;
    function d(e) {
      var t = r("WAWebCountriesNativeCountryNames")[e];
      return t != null ? t : e;
    }
    function m(t) {
      var n,
        r = t.name;
      if (r == null) return null;
      var o = [r],
        a = t.region;
      a != null && !r.includes(a) && o.push(a);
      var i =
        (n = t.country_name) != null
          ? n
          : t.country != null
            ? d(t.country)
            : null;
      return (i != null && !r.includes(i) && o.push(i), o.join(e));
    }
    function p(t) {
      var n,
        r = t.name;
      if (r == null) return null;
      var o = [r],
        a =
          (n = t.country_name) != null
            ? n
            : t.country != null
              ? d(t.country)
              : null;
      return (a != null && !r.includes(a) && o.push(a), o.join(e));
    }
    function _(e) {
      var t;
      return (t = e.name) != null ? t : e.key;
    }
    function f(t) {
      var n,
        r,
        o,
        a = [],
        i = (n = t.name) != null ? n : t.address_string;
      (i != null && a.push(i),
        t.primary_city != null && a.push(t.primary_city),
        t.region != null && a.push(t.region));
      var l =
        (r =
          (o = t.country_name) != null
            ? o
            : t.country_code != null
              ? d(t.country_code)
              : null) != null
          ? r
          : t.country != null
            ? d(t.country)
            : null;
      if ((l != null && a.push(l), a.length === 0)) return null;
      var s = a.join(e);
      if (t.radius != null) {
        var u = t.distance_unit === "mile" ? "mi" : "km";
        s += e + "+" + t.radius + " " + u;
      }
      return s;
    }
    function g(t) {
      var n = t.name;
      if (n == null) return null;
      var r = [n];
      return (
        t.region != null && r.push(t.region),
        t.country_name != null && r.push(t.country_name),
        r.join(e)
      );
    }
    function h(t) {
      var n = t.name;
      if (n == null) return null;
      var r = [n];
      return (
        t.region != null && r.push(t.region),
        t.country_name != null && r.push(t.country_name),
        r.join(e)
      );
    }
    function y(e) {
      return e === u
        ? s._(/*BTDS*/ "Men")
        : e === c
          ? s._(/*BTDS*/ "Women")
          : null;
    }
    function C(t) {
      var n,
        r,
        o,
        a,
        i,
        l,
        s,
        u = t == null ? void 0 : t.geo_locations;
      if (u == null) return null;
      var c = [];
      return (
        (n = u.cities) == null ||
          n.forEach(function (e) {
            var t = m(e);
            t != null && c.push(t);
          }),
        (r = u.regions) == null ||
          r.forEach(function (e) {
            var t = p(e);
            t != null && c.push(t);
          }),
        (o = u.countries) == null ||
          o.forEach(function (e) {
            c.push(d(e));
          }),
        (a = u.country_groups) == null ||
          a.forEach(function (e) {
            var t = _(e);
            t != null && c.push(t);
          }),
        (i = u.custom_locations) == null ||
          i.forEach(function (e) {
            var t = f(e);
            t != null && c.push(t);
          }),
        (l = u.zips) == null ||
          l.forEach(function (e) {
            var t = g(e);
            t != null && c.push(t);
          }),
        (s = u.neighborhoods) == null ||
          s.forEach(function (e) {
            var t = h(e);
            t != null && c.push(t);
          }),
        c.length > 0 ? c.join(e) : null
      );
    }
    function b(t) {
      var n,
        o =
          t == null || (n = t.flexible_spec) == null || (n = n[0]) == null
            ? void 0
            : n.interests;
      if (o == null || o.length === 0) return null;
      var a = r("WAWebCompactMapString")(o, function (e) {
        return e.name;
      });
      return a.length > 0 ? a.join(e) : null;
    }
    ((l.GENDER_CODE_MALE = u),
      (l.GENDER_CODE_FEMALE = c),
      (l.getGenderLabel = y),
      (l.getLocationString = C),
      (l.getInterestsString = b));
  },
  226,
);
