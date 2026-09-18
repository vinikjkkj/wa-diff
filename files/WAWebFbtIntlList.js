__d(
  "WAWebFbtIntlList",
  ["fbt", "invariant", "err", "react"],
  function (t, n, r, o, a, i, l, s, u) {
    var e,
      c = e || (e = o("react")),
      d = { AND: "AND", NONE: "NONE", OR: "OR" },
      m = { BULLET: "BULLET", COMMA: "COMMA", SEMICOLON: "SEMICOLON" },
      p = 500,
      _ = function (t, n, r) {
        var e = t.filter(Boolean),
          o = e.length;
        if (o === 0) return "";
        if (o === 1) return e[0];
        for (var a = e[o - 1], i = e[0], l = 0, u = 1; u < o - 1; ++u) {
          if (u >= p) {
            l = o - u;
            break;
          }
          e: {
            if (r === m.SEMICOLON) {
              i = s._(/*BTDS*/ "{previous-items}; {following-items}", [
                s._param("previous-items", i),
                s._param("following-items", e[u]),
              ]);
              break e;
            }
            if (r === m.BULLET) {
              i = s._(/*BTDS*/ "{previous-items} \u2022 {following-items}", [
                s._param("previous-items", i),
                s._param("following-items", e[u]),
              ]);
              break e;
            }
            if (r === m.COMMA || r === null || r === void 0) {
              i = f(i, e[u]);
              break e;
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                r,
            );
          }
        }
        return l > 0
          ? g(i, l, n || d.AND, r || m.COMMA)
          : h({
              conjunction: n || d.AND,
              delimiter: r || m.COMMA,
              lastItem: a,
              list: i,
            });
      };
    function f(e, t) {
      return s._(/*BTDS*/ "{previous-items}, {following-items}", [
        s._param("previous-items", e),
        s._param("following-items", t),
      ]);
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e, t, n, r) {
      if (r === m.COMMA)
        switch (n) {
          case d.AND:
            return s._(
              /*BTDS*/ "{previous-items} & {overflow-item-count} more",
              [
                s._param("previous-items", e),
                s._param("overflow-item-count", t),
              ],
            );
          case d.OR:
            return s._(
              /*BTDS*/ "{previous-items} or {overflow-item-count} more",
              [
                s._param("previous-items", e),
                s._param("overflow-item-count", t),
              ],
            );
          case d.NONE:
            return s._(
              /*BTDS*/ "{previous-items}, {overflow-item-count} more",
              [
                s._param("previous-items", e),
                s._param("overflow-item-count", t),
              ],
            );
        }
      return s._(/*BTDS*/ "{previous-items} ...", [
        s._param("previous-items", e),
      ]);
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      var t = e.conjunction,
        n = e.delimiter,
        o = e.lastItem,
        a = e.list;
      switch (t) {
        case d.AND:
          return s._(/*BTDS*/ "{list-of-items} & {last-item}", [
            s._param("list-of-items", a),
            s._param("last-item", o),
          ]);
        case d.OR:
          return s._(/*BTDS*/ "{list-of-items} or {last-item}", [
            s._param("list-of-items", a),
            s._param("last-item", o),
          ]);
        case d.NONE:
          switch (n) {
            case m.SEMICOLON:
              return s._(/*BTDS*/ "{previous-items}; {last-item}", [
                s._param("previous-items", a),
                s._param("last-item", o),
              ]);
            case m.BULLET:
              return s._(/*BTDS*/ "{list-of-items} \u2022 {last-item}", [
                s._param("list-of-items", a),
                s._param("last-item", o),
              ]);
            default:
              return f(a, o);
          }
        default:
          throw r("err")(
            "[intlList] Invalid conjunction " + t + " provided to intlList",
          );
      }
    }
    ((_.DELIMITERS = m), (_.CONJUNCTIONS = d));
    var y = _,
      C = y;
    l.default = C;
  },
  226,
);
