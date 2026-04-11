__d(
  "areEqual",
  [],
  function (t, n, r, o, a, i) {
    var e = [],
      l = [];
    function s(t, n, r) {
      var o = e.length ? e.pop() : [],
        a = l.length ? l.pop() : [],
        i = u(t, n, o, a, r);
      return ((o.length = 0), (a.length = 0), e.push(o), l.push(a), i);
    }
    function u(e, t, n, r, o) {
      if (e === t) return e !== 0 || 1 / e == 1 / t;
      if (
        e == null ||
        t == null ||
        typeof e != "object" ||
        typeof t != "object"
      )
        return !1;
      var a = Object.prototype.toString,
        i = a.call(e);
      if (i != a.call(t)) return !1;
      switch (i) {
        case "[object String]":
          return e == String(t);
        case "[object Number]":
          return isNaN(e) || isNaN(t) ? !1 : e == Number(t);
        case "[object Date]":
        case "[object Boolean]":
          return +e == +t;
        case "[object RegExp]":
          return (
            e.source == t.source &&
            e.global == t.global &&
            e.multiline == t.multiline &&
            e.ignoreCase == t.ignoreCase
          );
      }
      for (var l = n.length; l--; ) if (n[l] == e) return r[l] == t;
      (n.push(e), r.push(t));
      try {
        var s = 0;
        if (i === "[object Array]") {
          if (((s = e.length), s !== t.length)) return !1;
          for (; s--; ) if (!u(e[s], t[s], n, r, o)) return !1;
        } else if (e instanceof Set) {
          if (e.size !== t.size) return !1;
          var c = Array.from(t.values());
          for (var d of e) {
            for (var m = !1, p = 0; p < c.length; p++) {
              var _ = c[p];
              if (u(d, _, n, r, o)) {
                ((m = !0), c.splice(p, 1));
                break;
              }
            }
            if (m === !1) return !1;
          }
          return !0;
        } else if (e instanceof Map) {
          if (e.size !== t.size) return !1;
          var f = Array.from(t);
          for (var g of e) {
            for (var h = !1, y = 0; y < f.length; y++) {
              var C = f[y];
              if (u(g, C, n, r, o)) {
                ((h = !0), f.splice(y, 1));
                break;
              }
            }
            if (h === !1) return !1;
          }
          return !0;
        } else {
          var b;
          if (
            ((b = o == null ? void 0 : o.constructorCheck) == null || b) &&
            e.constructor !== t.constructor
          )
            return !1;
          if (
            Object.prototype.hasOwnProperty.call(e, "valueOf") &&
            Object.prototype.hasOwnProperty.call(t, "valueOf")
          )
            return e.valueOf() == t.valueOf();
          var v = Object.keys(e);
          if (v.length !== Object.keys(t).length) return !1;
          for (var S = 0; S < v.length; S++)
            if (
              v[S] !== "_owner" &&
              (!Object.prototype.hasOwnProperty.call(t, v[S]) ||
                !u(e[v[S]], t[v[S]], n, r, o))
            )
              return !1;
        }
        return !0;
      } finally {
        (n.pop(), r.pop());
      }
    }
    i.default = s;
  },
  66,
);
