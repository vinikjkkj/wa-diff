__d(
  "intlList",
  ["fbt", "invariant", "react"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = e || (e = o("react")),
      d = { AND: "AND", NONE: "NONE", OR: "OR" },
      m = { BULLET: "BULLET", COMMA: "COMMA", SEMICOLON: "SEMICOLON" },
      p = function (t, n, r) {
        var e = t.filter(Boolean),
          o = e.length;
        if (o === 0) return "";
        if (o === 1) return e[0];
        for (var a = e[o - 1], i = e[0], l = 1; l < o - 1; ++l)
          switch (r) {
            case m.SEMICOLON:
              i = s._(/*BTDS*/ "{previous items}; {following items}", [
                s._param("previous items", i),
                s._param("following items", e[l]),
              ]);
              break;
            case m.BULLET:
              i = s._(/*BTDS*/ "{previous items} \u2022 {following items}", [
                s._param("previous items", i),
                s._param("following items", e[l]),
              ]);
              break;
            default:
              i = s._(/*BTDS*/ "{previous items}, {following items}", [
                s._param("previous items", i),
                s._param("following items", e[l]),
              ]);
          }
        return _(i, a, n || d.AND, r || m.COMMA);
      };
    function _(e, t, n, r) {
      switch (n) {
        case d.AND:
          return s._(/*BTDS*/ "{list of items} and {last item}", [
            s._param("list of items", e),
            s._param("last item", t),
          ]);
        case d.OR:
          return s._(/*BTDS*/ "{list of items} or {last item}", [
            s._param("list of items", e),
            s._param("last item", t),
          ]);
        case d.NONE:
          switch (r) {
            case m.SEMICOLON:
              return s._(/*BTDS*/ "{previous items}; {last item}", [
                s._param("previous items", e),
                s._param("last item", t),
              ]);
            case m.BULLET:
              return s._(/*BTDS*/ "{list of items} \u2022 {last item}", [
                s._param("list of items", e),
                s._param("last item", t),
              ]);
            default:
              return s._(/*BTDS*/ "{list of items}, {last item}", [
                s._param("list of items", e),
                s._param("last item", t),
              ]);
          }
        default:
          u(0, 568, n);
      }
    }
    ((p.DELIMITERS = m), (p.CONJUNCTIONS = d));
    var f = p;
    i.exports = f;
  },
  162,
);
