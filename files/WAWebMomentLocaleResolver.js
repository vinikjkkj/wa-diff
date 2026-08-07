__d(
  "WAWebMomentLocaleResolver",
  ["WAWebLocaleToMomentResource", "WAWebParseLocaleSubtags"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = s(e),
        o = r("WAWebParseLocaleSubtags")(n),
        a = o.language,
        i = o.region,
        l = o.script,
        u = [n];
      if (a != null && a !== "en") {
        var c;
        if ((i != null && u.push(a + "-" + i), l != null)) {
          var d = r("WAWebLocaleToMomentResource")[(a + "-" + l).toLowerCase()];
          d != null && u.push(d);
        }
        u.push((c = r("WAWebLocaleToMomentResource")[a]) != null ? c : a);
      }
      return (u.push(s(t)), Array.from(new Set(u)));
    }
    function s(e) {
      return e.replace(/_/g, "-").toLowerCase();
    }
    l.getMomentLocalesToTry = e;
  },
  98,
);
