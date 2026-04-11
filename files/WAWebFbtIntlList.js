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
              i = s._(/*BTDS*/ "{previous-items}, {following-items}", [
                s._param("previous-items", i),
                s._param("following-items", e[u]),
              ]);
              break e;
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                r,
            );
          }
        }
        return l > 0
          ? f(i, l, n || d.AND, r || m.COMMA)
          : g(i, a, n || d.AND, r || m.COMMA);
      };
    function f(e, t, n, r) {
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
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e, t, n, o) {
      switch (n) {
        case d.AND:
          return s._(/*BTDS*/ "{list-of-items} & {last-item}", [
            s._param("list-of-items", e),
            s._param("last-item", t),
          ]);
        case d.OR:
          return s._(/*BTDS*/ "{list-of-items} or {last-item}", [
            s._param("list-of-items", e),
            s._param("last-item", t),
          ]);
        case d.NONE:
          switch (o) {
            case m.SEMICOLON:
              return s._(/*BTDS*/ "{previous-items}; {last-item}", [
                s._param("previous-items", e),
                s._param("last-item", t),
              ]);
            case m.BULLET:
              return s._(/*BTDS*/ "{list-of-items} \u2022 {last-item}", [
                s._param("list-of-items", e),
                s._param("last-item", t),
              ]);
            default:
              return s._(/*BTDS*/ "{list-of-items}, {last-item}", [
                s._param("list-of-items", e),
                s._param("last-item", t),
              ]);
          }
        default:
          throw r("err")(
            "[intlList] Invalid conjunction " + n + " provided to intlList",
          );
      }
    }
    ((_.DELIMITERS = m), (_.CONJUNCTIONS = d));
    var h = _,
      y = h;
    l.default = y;
  },
  226,
);
