__d(
  "WebBloksI18nUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = ["fb-AR", "fb-RL"],
      l = ["ar", "he", "ur", "fa", "sy", "yi", "ps", "cb"];
    function s(e) {
      var t,
        n,
        r = e.split(/[_-]/),
        o = ((t = r[0]) != null ? t : "").toLowerCase(),
        a = ((n = r[1]) != null ? n : "").toUpperCase();
      return { language: o, country: a };
    }
    function u(e) {
      var t = s(e);
      return t.country !== "" ? t.language + "-" + t.country : t.language;
    }
    function c(t) {
      var n;
      Array.isArray(t) ? (n = t[0]) : (n = t);
      var r = s(n);
      return l.includes(r.language) || e.includes(r.language + "-" + r.country);
    }
    ((i.parseLocale = s), (i.toBrowserLocaleFormat = u), (i.isLocaleRtl = c));
  },
  66,
);
