__d(
  "intlList",
  ["fbt", "invariant", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = n("react")),
      c = { AND: "AND", NONE: "NONE", OR: "OR" },
      d = { BULLET: "BULLET", COMMA: "COMMA", SEMICOLON: "SEMICOLON" },
      m = function (t, n, r) {
        var e = t.filter(Boolean),
          o = e.length;
        if (o === 0) return "";
        if (o === 1) return e[0];
        for (var a = e[o - 1], i = e[0], s = 1; s < o - 1; ++s)
          switch (r) {
            case d.SEMICOLON:
              i = l._(/*BTDS*/ "{previous items}; {following items}", [
                l._param("previous items", i),
                l._param("following items", e[s]),
              ]);
              break;
            case d.BULLET:
              i = l._(/*BTDS*/ "{previous items} \u2022 {following items}", [
                l._param("previous items", i),
                l._param("following items", e[s]),
              ]);
              break;
            default:
              i = l._(/*BTDS*/ "{previous items}, {following items}", [
                l._param("previous items", i),
                l._param("following items", e[s]),
              ]);
          }
        return p(i, a, n || c.AND, r || d.COMMA);
      };
    function p(e, t, n, r) {
      switch (n) {
        case c.AND:
          return l._(/*BTDS*/ "{list of items} and {last item}", [
            l._param("list of items", e),
            l._param("last item", t),
          ]);
        case c.OR:
          return l._(/*BTDS*/ "{list of items} or {last item}", [
            l._param("list of items", e),
            l._param("last item", t),
          ]);
        case c.NONE:
          switch (r) {
            case d.SEMICOLON:
              return l._(/*BTDS*/ "{previous items}; {last item}", [
                l._param("previous items", e),
                l._param("last item", t),
              ]);
            case d.BULLET:
              return l._(/*BTDS*/ "{list of items} \u2022 {last item}", [
                l._param("list of items", e),
                l._param("last item", t),
              ]);
            default:
              return l._(/*BTDS*/ "{list of items}, {last item}", [
                l._param("list of items", e),
                l._param("last item", t),
              ]);
          }
        default:
          s(0, 568, n);
      }
    }
    ((m.DELIMITERS = d), (m.CONJUNCTIONS = c));
    var _ = m;
    a.exports = _;
  },
  130,
);
