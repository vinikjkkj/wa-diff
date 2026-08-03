__d(
  "WAWebMomentLocaleResolver",
  ["WAWebLocaleToMomentResource", "bcp-47"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = s(e),
        a = o("bcp-47").parse(n),
        i = a.language,
        l = a.region,
        u = a.script,
        c = [n];
      if (i != null && i !== "en") {
        var d;
        if ((l != null && c.push(i + "-" + l), u != null)) {
          var m = r("WAWebLocaleToMomentResource")[(i + "-" + u).toLowerCase()];
          m != null && c.push(m);
        }
        c.push((d = r("WAWebLocaleToMomentResource")[i]) != null ? d : i);
      }
      return (c.push(s(t)), Array.from(new Set(c)));
    }
    function s(e) {
      return e.replace(/_/g, "-").toLowerCase();
    }
    l.getMomentLocalesToTry = e;
  },
  98,
);
