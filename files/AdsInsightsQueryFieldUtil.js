__d(
  "AdsInsightsQueryFieldUtil",
  ["AdsInsightsQueryField", "GraphAPIFieldUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      t === void 0 && (t = !1);
      var n = {};
      return (
        t
          ? e.forEach(function (e) {
              if (typeof e == "string") n[e.split(".")[0]] = e;
              else {
                var t = s(e.subfields);
                n[e.field.split(".")[0]] = o(
                  "GraphAPIFieldUtils",
                ).getFieldWithSubfields(e.field, t);
              }
            })
          : e.forEach(function (e) {
              if (typeof e == "string") n[e] = e;
              else {
                var t = s(e.subfields);
                n[e.field] = o("GraphAPIFieldUtils").getFieldWithSubfields(
                  e.field,
                  t,
                );
              }
            }),
        n
      );
    }
    function s(e) {
      var t = e.map(function (e) {
        if (typeof e == "string") return e;
        var t = s(e.subfields);
        return o("GraphAPIFieldUtils").getFieldWithSubfields(e.field, t);
      });
      return (t.sort(), t);
    }
    function u(e) {
      var t = Object.keys(e);
      return (
        t.sort(),
        t.map(function (t) {
          var n = e[t];
          return n instanceof o("AdsInsightsQueryField").QueryFieldMap
            ? o("GraphAPIFieldUtils").getFieldWithSubfields(t, u(n))
            : t;
        })
      );
    }
    function c(e) {
      var t = Object.keys(e),
        n = {};
      return (
        t.forEach(function (e) {
          n[e] = null;
        }),
        n
      );
    }
    ((l.toAPIFieldsMap = e),
      (l.toAPIFields = s),
      (l.toAPIParam = u),
      (l.normalizeFields = c));
  },
  98,
);
