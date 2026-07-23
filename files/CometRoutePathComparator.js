__d(
  "CometRoutePathComparator",
  ["$InternalEnum", "EnumType", "FBLogger", "nullthrows", "routeBuilderUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum").Mirrored([
      "TAIL",
      "NUMERIC",
      "ASCII",
      "TOKEN",
      "ENUM",
    ]);
    function s(e, t, n, r) {
      var o = u(e, n),
        a = u(t, r);
      return c(o, a);
    }
    function u(t, n) {
      var a = t.replace(/^\/|\/$/g, "");
      if (a === "") return [];
      var i = null,
        l = null,
        s = o("routeBuilderUtils")
          .getPathParts(a)
          .map(function (t, o) {
            if (
              (t.isToken && t.optional ? i === null && (i = o) : (l = o),
              !t.isToken)
            )
              return d(e.ASCII, t.part, !1);
            if (t.catchAll) return d(e.TAIL, t.token, t.optional);
            var s = n[t.token];
            if (s == null)
              return (
                r("FBLogger")("comet_infra").mustfix(
                  'CometRoutePathComparator is unable to find param "%s" for path "%s"',
                  t.token,
                  a,
                ),
                d(e.TOKEN, t.token, t.optional)
              );
            var u = s.coercibleType;
            if (u != null) {
              var c = r("EnumType").cast(s.enumType);
              if (u === "INT" || u === "FLOAT" || u === "FBID" || c === 0)
                return d(e.NUMERIC, t.token, t.optional);
              if (u === "ENUM") return d(e.ENUM, t.token, t.optional);
            }
            return d(e.TOKEN, t.token, t.optional);
          });
      if (i !== null && l !== null && i < l) {
        var u = 1,
          c = 10,
          m = { rank: 0, str: "", type: e.TOKEN };
        for (var p of s.slice(i))
          ((m.str += p.str + "/"),
            p.type !== e.ENUM && ((m.rank += p.rank / u), (u *= c)));
        (m.rank === 0 && (m.rank = 0.5), (s = s.slice(0, i)), s.push(m));
      }
      return s;
    }
    function c(t, n) {
      for (
        var o = t.toReversed(), a = n.toReversed();
        o.length > 0 && a.length > 0;
      ) {
        var i = r("nullthrows")(o.pop()),
          l = r("nullthrows")(a.pop());
        if (!(i.str === l.str && i.type === l.type && i.rank === l.rank)) {
          var s = i.rank - l.rank;
          if (s !== 0) return Math.sign(s);
          if (i.type === e.ASCII && l.type === e.ASCII) {
            var u = m(i.str + "/", l.str + "/");
            if (u !== 0) return u;
          }
        }
      }
      var c = o.length - a.length;
      if (c !== 0) return c;
      var d = t
          .map(function (e) {
            return e.str;
          })
          .join("/"),
        p = n
          .map(function (e) {
            return e.str;
          })
          .join("/");
      return m(d, p);
    }
    function d(t, n, r) {
      var o = 0,
        a = r ? -0.1 : 0;
      switch (t) {
        case e.TAIL:
          o = 3 + a;
          break;
        case e.TOKEN:
          o = 2 + a;
          break;
        case e.NUMERIC:
          o = 1 + a;
          break;
        case e.ENUM:
          o = 0.5;
          break;
        case e.ASCII:
          o = 0;
          break;
      }
      return { rank: o, str: n, type: t };
    }
    function m(e, t) {
      return e < t ? -1 : e > t ? 1 : 0;
    }
    ((l.PathPartType = e),
      (l.compare = s),
      (l.buildParts = u),
      (l.compareParts = c));
  },
  98,
);
