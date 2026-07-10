__d(
  "WebBloksnumUtils",
  ["WebBloksInt64"],
  function (t, n, r, o, a, i, l) {
    var e = 2147483648,
      s = 9223372036854776e3;
    function u(e) {
      return typeof e == "boolean" ? (e ? 1 : 0) : Number(e);
    }
    function c(e) {
      if (
        typeof e == "string" ||
        typeof e == "boolean" ||
        e instanceof r("WebBloksInt64")
      )
        return !1;
      var t = Number(e);
      return (
        Number.isNaN(t) ||
        !Number.isFinite(t) ||
        t >= s ||
        t < -s ||
        Math.floor(t) !== t
      );
    }
    function d(t) {
      var n = u(t);
      return n >= e || n < -e;
    }
    function m(t, n, r) {
      return c(t) || c(n) ? !1 : d(t) || d(n) || Math.abs(r) >= e;
    }
    function p(e) {
      return e instanceof r("WebBloksInt64")
        ? e
        : typeof e == "boolean"
          ? e
            ? r("WebBloksInt64").ONE
            : r("WebBloksInt64").ZERO
          : typeof e == "number"
            ? r("WebBloksInt64").fromNumber(e)
            : r("WebBloksInt64").fromString(String(e));
    }
    function _(t) {
      var n = t.toNumber();
      return n >= e || n < -e ? t.toString() : n;
    }
    function f(e, t, n, r) {
      return m(e, t, n) ? _(r(p(e), p(t))) : n;
    }
    function g(e, t) {
      if (t.isNegative()) return Math.pow(e.toNumber(), t.toNumber());
      if (e.isZero())
        return t.isZero()
          ? _(r("WebBloksInt64").ONE)
          : _(r("WebBloksInt64").ZERO);
      if (e.equals(r("WebBloksInt64").ONE)) return _(r("WebBloksInt64").ONE);
      if (e.equals(r("WebBloksInt64").NEG_ONE))
        return _(
          t.isOdd() ? r("WebBloksInt64").NEG_ONE : r("WebBloksInt64").ONE,
        );
      for (
        var n = r("WebBloksInt64").ONE, o = r("WebBloksInt64").ZERO;
        o.lessThan(t);
        o = o.add(r("WebBloksInt64").ONE)
      ) {
        var a = n.multiply(e);
        if (!a.div(e).equals(n)) return Math.pow(e.toNumber(), t.toNumber());
        n = a;
      }
      return _(n);
    }
    function h(e, t) {
      return f(e, t, u(e) + u(t), function (e, t) {
        return e.add(t);
      });
    }
    function y(e, t) {
      return f(e, t, u(e) - u(t), function (e, t) {
        return e.subtract(t);
      });
    }
    function C(e, t) {
      return f(e, t, u(e) * u(t), function (e, t) {
        return e.multiply(t);
      });
    }
    function b(e, t) {
      var n = Math.pow(u(e), u(t));
      return m(e, t, n) ? g(p(e), p(t)) : n;
    }
    ((l.numAdd = h), (l.numSub = y), (l.numMul = C), (l.numPow = b));
  },
  98,
);
