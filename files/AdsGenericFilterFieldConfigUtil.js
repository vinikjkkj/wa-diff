__d(
  "AdsGenericFilterFieldConfigUtil",
  ["invariant", "AdsGenericFilterField"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t) {
      var n = u(e, t);
      return (n || s(0, 11818, t.toString()), n);
    }
    function u(e, t) {
      if (e == null) return null;
      for (var n of Object.keys(e)) {
        var r = e[n];
        if (r.field.toString() === t.toString()) return r;
      }
      return null;
    }
    function c(e, t) {
      var n;
      for (var r of Object.keys(e)) {
        var o;
        if (
          ((n = e[r]),
          n.field.name === t ||
            ((o = n.alternativeFieldNames) != null ? o : []).some(function (e) {
              return e === t;
            }))
        )
          return n;
      }
      s(0, 2233, t);
    }
    function d(e, t) {
      var n;
      for (var r of Object.keys(e)) {
        var o = e[r];
        if (o.field.name === t) {
          n = o.field.type;
          break;
        }
      }
      return (n || s(0, 2233, t), n);
    }
    function m(e, t) {
      for (var n of Object.keys(e)) {
        var r = e[n];
        if (r.field.name === t) return !0;
      }
      return !1;
    }
    function p(e, t) {
      return t
        ? t.values.some(function (t) {
            return t.field.key === e.key;
          })
        : !1;
    }
    function _(e, t) {
      for (var n of Object.keys(e)) {
        var r = e[n];
        if (r.field.name === t) return !!r.isLevelNeeded;
      }
      s(0, 2233, t);
    }
    function f(e, t, n) {
      var o = u(e, t);
      return !o || !o.isLevelNeeded
        ? t
        : new (r("AdsGenericFilterField"))(t.name, t.type, n);
    }
    function g(e, t, n) {
      n === void 0 && (n = !1);
      var r = null,
        o = 0;
      for (var a of Object.keys(e)) {
        var i = e[a],
          l = h(i, t, n);
        if (l) {
          var s =
            l.reduce(function (e, t) {
              return e + (t ? 1 : 0);
            }, 0) - 1;
          (!r || s < o) && ((r = l), (o = s));
        }
      }
      return r;
    }
    function h(e, t, n) {
      var r;
      n === void 0 && (n = !1);
      var o = (e.field && [e.field.name]) || [];
      if (n) {
        var a;
        ((a = e.alternativeFieldNames) != null ? a : []).forEach(function (e) {
          return o.push(e);
        });
      }
      var i = o.find(function (e) {
        return e && t.toLowerCase().endsWith(e.toLowerCase());
      });
      if (!i) return null;
      var l = t.substring(t.length - i.length),
        s = t.substring(0, t.length - l.length),
        u = (r = e.supportedPrefixes) != null ? r : [],
        c = u.map(function (e) {
          var t = e.prefixes,
            n =
              t.find(function (e) {
                return s.toLowerCase().startsWith(e.prefix.toLowerCase());
              }) || null,
            r = null;
          return (
            n && (r = n.prefix),
            r && ((r = s.substring(0, r.length)), (s = s.substring(r.length))),
            r
          );
        });
      return s !== "" ? null : (c.push(l), c);
    }
    var y = {
        convertFilterFieldToLevel: f,
        getConfigByDirtyFieldName: c,
        getConfigByField: e,
        getConfigByFieldOrNull: u,
        getTypeByFieldName: d,
        isValidFieldName: m,
        isFieldInFilterSet: p,
        isLevelNeeded: _,
        parsePrefixedField: g,
        parsePrefixesFromFieldConfig: h,
      },
      C = y;
    l.default = C;
  },
  98,
);
