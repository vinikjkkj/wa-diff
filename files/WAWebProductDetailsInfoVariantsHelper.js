__d(
  "WAWebProductDetailsInfoVariantsHelper",
  ["isStringNullOrEmpty"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n,
        o,
        a,
        i,
        l = e.variantInfo;
      if (l == null) return null;
      var s = (t = l.availability) == null ? void 0 : t.listing;
      if (s == null) return null;
      var u = (n = l.types) == null ? void 0 : n[0],
        c = (o = l.types) == null ? void 0 : o[1];
      if (u == null) return null;
      var d = new Map(),
        m = new Map();
      ((a = u.options) == null ||
        a.forEach(function (e) {
          r("isStringNullOrEmpty")(e.value) || d.set(e.value, !1);
        }),
        c == null ||
          (i = c.options) == null ||
          i.forEach(function (e) {
            r("isStringNullOrEmpty")(e.value) || m.set(e.value, !1);
          }));
      var p = new Map(),
        _ = new Map();
      s.forEach(function (e) {
        var t = e.options || [],
          n = t.find(function (e) {
            return e.name === u.name;
          }),
          r = c
            ? t.find(function (e) {
                return e.name === c.name;
              })
            : null,
          o = n == null ? void 0 : n.value,
          a = r == null ? void 0 : r.value;
        if (o != null && (d.set(o, !0), e.is_available === !0)) {
          if ((a != null && m.set(a, !0), c != null && a != null)) {
            var i = p.get(o);
            (i == null && ((i = new Map()), p.set(o, i)), i.set(a, e));
          }
          _.set(o, e);
        }
      });
      var f = Array.from(d.entries())
          .filter(function (e) {
            var t = e[0],
              n = e[1];
            return n;
          })
          .map(function (e) {
            var t = e[0];
            return t;
          }),
        g = Array.from(m.entries())
          .filter(function (e) {
            var t = e[0],
              n = e[1];
            return n;
          })
          .map(function (e) {
            var t = e[0];
            return t;
          });
      return {
        firstType: u.name,
        secondType: c == null ? void 0 : c.name,
        firstTypeExistingOptions: f,
        secondTypeExistingOptions: g,
        firstTypeAvailableOptions: _,
        secondTypeAvailableOptions: p,
      };
    }
    function s(e, t) {
      var n, o;
      return r("isStringNullOrEmpty")(e)
        ? []
        : Array.from(
            (n = (o = t.get(e)) == null ? void 0 : o.keys()) != null ? n : [],
          );
    }
    function u(e, t) {
      var n = s(e, t);
      return n.length > 0 ? n[0] : null;
    }
    ((l.catalogVariantOptionsList = e),
      (l.getSecondTypeAvailableOptionsForSelectedFirstType = s),
      (l.selectDefaultSecondOption = u));
  },
  98,
);
