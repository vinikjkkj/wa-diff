__d(
  "WAWebL10NEnumeration.react",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t) {
      if ((t === void 0 && (t = !1), e.length === 0)) return "";
      var n = e[0];
      if (e.length === 1) {
        var r = s._(/*BTDS*/ '"{A}"', [s._param("A", n)]);
        return t ? r.toString() : r;
      }
      var o = e[e.length - 1];
      if (e.length === 2) return u(n, o, t);
      var a = e.slice(0, e.length - 2),
        i = e[e.length - 2];
      return c({ asString: t, firstItems: a, lastItem: o, penultimateItem: i });
    }
    function u(e, t, n) {
      n === void 0 && (n = !1);
      var r = s._(/*BTDS*/ '"{A}" & "{B}"', [
        s._param("A", e),
        s._param("B", t),
      ]);
      return n ? r.toString() : r;
    }
    function c(e) {
      var t = e.asString,
        n = t === void 0 ? !1 : t,
        r = e.firstItems,
        o = e.lastItem,
        a = e.penultimateItem,
        i = function (t, n) {
          return s._(/*BTDS*/ '"{A}," {B}', [
            s._param("A", n),
            s._param("B", t),
          ]);
        },
        l = r.reverse(),
        u = n
          ? l.reduce(function (e, t) {
              return i(e, t).toString();
            }, "")
          : l.reduce(function (e, t) {
              return i(e, t);
            }, null),
        c = s._(/*BTDS*/ '{A}"{B}" & "{C}"', [
          s._param("A", u),
          s._param("B", a),
          s._param("C", o),
        ]);
      return n ? c.toString() : c;
    }
    l.default = e;
  },
  226,
);
