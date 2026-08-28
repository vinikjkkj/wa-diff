__d(
  "bignumber-js-9.0.1",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {},
      l = { exports: e },
      s;
    function u() {
      (function (e) {
        var t,
          n = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
          r = Math.ceil,
          o = Math.floor,
          a = "[BigNumber Error] ",
          i = a + "Number primitive has more than 15 significant digits: ",
          u = 1e14,
          c = 14,
          d = 9007199254740991,
          m = [
            1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12,
            1e13,
          ],
          p = 1e7,
          _ = 1e9;
        function f(e) {
          var t,
            l,
            s,
            R = (A.prototype = {
              constructor: A,
              toString: null,
              valueOf: null,
            }),
            L = new A(1),
            E = 20,
            k = 4,
            I = -7,
            T = 21,
            D = -1e7,
            x = 1e7,
            $ = !1,
            P = 1,
            N = 0,
            M = {
              prefix: "",
              groupSize: 3,
              secondaryGroupSize: 0,
              groupSeparator: ",",
              decimalSeparator: ".",
              fractionGroupSize: 0,
              fractionGroupSeparator: "\xA0",
              suffix: "",
            },
            w = "0123456789abcdefghijklmnopqrstuvwxyz";
          function A(e, t) {
            var r,
              a,
              u,
              m,
              p,
              _,
              f,
              g,
              h = this;
            if (!(h instanceof A)) return new A(e, t);
            if (t == null) {
              if (e && e._isBigNumber === !0) {
                ((h.s = e.s),
                  !e.c || e.e > x
                    ? (h.c = h.e = null)
                    : e.e < D
                      ? (h.c = [(h.e = 0)])
                      : ((h.e = e.e), (h.c = e.c.slice())));
                return;
              }
              if ((_ = typeof e == "number") && e * 0 == 0) {
                if (((h.s = 1 / e < 0 ? ((e = -e), -1) : 1), e === ~~e)) {
                  for (m = 0, p = e; p >= 10; p /= 10, m++);
                  m > x ? (h.c = h.e = null) : ((h.e = m), (h.c = [e]));
                  return;
                }
                g = String(e);
              } else {
                if (!n.test((g = String(e)))) return s(h, g, _);
                h.s = g.charCodeAt(0) == 45 ? ((g = g.slice(1)), -1) : 1;
              }
              ((m = g.indexOf(".")) > -1 && (g = g.replace(".", "")),
                (p = g.search(/e/i)) > 0
                  ? (m < 0 && (m = p),
                    (m += +g.slice(p + 1)),
                    (g = g.substring(0, p)))
                  : m < 0 && (m = g.length));
            } else {
              if ((C(t, 2, w.length, "Base"), t == 10))
                return ((h = new A(e)), W(h, E + h.e + 1, k));
              if (((g = String(e)), (_ = typeof e == "number"))) {
                if (e * 0 != 0) return s(h, g, _, t);
                if (
                  ((h.s = 1 / e < 0 ? ((g = g.slice(1)), -1) : 1),
                  A.DEBUG && g.replace(/^0\.0*|\./, "").length > 15)
                )
                  throw Error(i + e);
              } else h.s = g.charCodeAt(0) === 45 ? ((g = g.slice(1)), -1) : 1;
              for (r = w.slice(0, t), m = p = 0, f = g.length; p < f; p++)
                if (r.indexOf((a = g.charAt(p))) < 0) {
                  if (a == ".") {
                    if (p > m) {
                      m = f;
                      continue;
                    }
                  } else if (
                    !u &&
                    ((g == g.toUpperCase() && (g = g.toLowerCase())) ||
                      (g == g.toLowerCase() && (g = g.toUpperCase())))
                  ) {
                    ((u = !0), (p = -1), (m = 0));
                    continue;
                  }
                  return s(h, String(e), _, t);
                }
              ((_ = !1),
                (g = l(g, t, 10, h.s)),
                (m = g.indexOf(".")) > -1
                  ? (g = g.replace(".", ""))
                  : (m = g.length));
            }
            for (p = 0; g.charCodeAt(p) === 48; p++);
            for (f = g.length; g.charCodeAt(--f) === 48; );
            if ((g = g.slice(p, ++f))) {
              if (((f -= p), _ && A.DEBUG && f > 15 && (e > d || e !== o(e))))
                throw Error(i + h.s * e);
              if ((m = m - p - 1) > x) h.c = h.e = null;
              else if (m < D) h.c = [(h.e = 0)];
              else {
                if (
                  ((h.e = m),
                  (h.c = []),
                  (p = (m + 1) % c),
                  m < 0 && (p += c),
                  p < f)
                ) {
                  for (p && h.c.push(+g.slice(0, p)), f -= c; p < f; )
                    h.c.push(+g.slice(p, (p += c)));
                  p = c - (g = g.slice(p)).length;
                } else p -= f;
                for (; p--; g += "0");
                h.c.push(+g);
              }
            } else h.c = [(h.e = 0)];
          }
          ((A.clone = f),
            (A.ROUND_UP = 0),
            (A.ROUND_DOWN = 1),
            (A.ROUND_CEIL = 2),
            (A.ROUND_FLOOR = 3),
            (A.ROUND_HALF_UP = 4),
            (A.ROUND_HALF_DOWN = 5),
            (A.ROUND_HALF_EVEN = 6),
            (A.ROUND_HALF_CEIL = 7),
            (A.ROUND_HALF_FLOOR = 8),
            (A.EUCLID = 9),
            (A.config = A.set =
              function (e) {
                var t, n;
                if (e != null)
                  if (typeof e == "object") {
                    if (
                      (e.hasOwnProperty((t = "DECIMAL_PLACES")) &&
                        ((n = e[t]), C(n, 0, _, t), (E = n)),
                      e.hasOwnProperty((t = "ROUNDING_MODE")) &&
                        ((n = e[t]), C(n, 0, 8, t), (k = n)),
                      e.hasOwnProperty((t = "EXPONENTIAL_AT")) &&
                        ((n = e[t]),
                        n && n.pop
                          ? (C(n[0], -_, 0, t),
                            C(n[1], 0, _, t),
                            (I = n[0]),
                            (T = n[1]))
                          : (C(n, -_, _, t), (I = -(T = n < 0 ? -n : n)))),
                      e.hasOwnProperty((t = "RANGE")))
                    )
                      if (((n = e[t]), n && n.pop))
                        (C(n[0], -_, -1, t),
                          C(n[1], 1, _, t),
                          (D = n[0]),
                          (x = n[1]));
                      else if ((C(n, -_, _, t), n)) D = -(x = n < 0 ? -n : n);
                      else throw Error(a + t + " cannot be zero: " + n);
                    if (e.hasOwnProperty((t = "CRYPTO")))
                      if (((n = e[t]), n === !!n))
                        if (n)
                          if (
                            typeof crypto != "undefined" &&
                            crypto &&
                            (crypto.getRandomValues || crypto.randomBytes)
                          )
                            $ = n;
                          else
                            throw (($ = !n), Error(a + "crypto unavailable"));
                        else $ = n;
                      else throw Error(a + t + " not true or false: " + n);
                    if (
                      (e.hasOwnProperty((t = "MODULO_MODE")) &&
                        ((n = e[t]), C(n, 0, 9, t), (P = n)),
                      e.hasOwnProperty((t = "POW_PRECISION")) &&
                        ((n = e[t]), C(n, 0, _, t), (N = n)),
                      e.hasOwnProperty((t = "FORMAT")))
                    )
                      if (((n = e[t]), typeof n == "object")) M = n;
                      else throw Error(a + t + " not an object: " + n);
                    if (e.hasOwnProperty((t = "ALPHABET")))
                      if (
                        ((n = e[t]),
                        typeof n == "string" &&
                          !/^.?$|[+\-.\s]|(.).*\1/.test(n))
                      )
                        w = n;
                      else throw Error(a + t + " invalid: " + n);
                  } else throw Error(a + "Object expected: " + e);
                return {
                  DECIMAL_PLACES: E,
                  ROUNDING_MODE: k,
                  EXPONENTIAL_AT: [I, T],
                  RANGE: [D, x],
                  CRYPTO: $,
                  MODULO_MODE: P,
                  POW_PRECISION: N,
                  FORMAT: M,
                  ALPHABET: w,
                };
              }),
            (A.isBigNumber = function (e) {
              if (!e || e._isBigNumber !== !0) return !1;
              if (!A.DEBUG) return !0;
              var t,
                n,
                r = e.c,
                i = e.e,
                l = e.s;
              e: if ({}.toString.call(r) == "[object Array]") {
                if ((l === 1 || l === -1) && i >= -_ && i <= _ && i === o(i)) {
                  if (r[0] === 0) {
                    if (i === 0 && r.length === 1) return !0;
                    break e;
                  }
                  if (
                    ((t = (i + 1) % c),
                    t < 1 && (t += c),
                    String(r[0]).length == t)
                  ) {
                    for (t = 0; t < r.length; t++)
                      if (((n = r[t]), n < 0 || n >= u || n !== o(n))) break e;
                    if (n !== 0) return !0;
                  }
                }
              } else if (
                r === null &&
                i === null &&
                (l === null || l === 1 || l === -1)
              )
                return !0;
              throw Error(a + "Invalid BigNumber: " + e);
            }),
            (A.maximum = A.max =
              function () {
                return O(arguments, R.lt);
              }),
            (A.minimum = A.min =
              function () {
                return O(arguments, R.gt);
              }),
            (A.random = (function () {
              var e = 9007199254740992,
                t =
                  (Math.random() * e) & 2097151
                    ? function () {
                        return o(Math.random() * e);
                      }
                    : function () {
                        return (
                          ((Math.random() * 1073741824) | 0) * 8388608 +
                          ((Math.random() * 8388608) | 0)
                        );
                      };
              return function (e) {
                var n,
                  i,
                  l,
                  s,
                  u,
                  d = 0,
                  p = [],
                  f = new A(L);
                if ((e == null ? (e = E) : C(e, 0, _), (s = r(e / c)), $))
                  if (crypto.getRandomValues) {
                    for (
                      n = crypto.getRandomValues(new Uint32Array((s *= 2)));
                      d < s;
                    )
                      ((u = n[d] * 131072 + (n[d + 1] >>> 11)),
                        u >= 9e15
                          ? ((i = crypto.getRandomValues(new Uint32Array(2))),
                            (n[d] = i[0]),
                            (n[d + 1] = i[1]))
                          : (p.push(u % 1e14), (d += 2)));
                    d = s / 2;
                  } else if (crypto.randomBytes) {
                    for (n = crypto.randomBytes((s *= 7)); d < s; )
                      ((u =
                        (n[d] & 31) * 281474976710656 +
                        n[d + 1] * 1099511627776 +
                        n[d + 2] * 4294967296 +
                        n[d + 3] * 16777216 +
                        (n[d + 4] << 16) +
                        (n[d + 5] << 8) +
                        n[d + 6]),
                        u >= 9e15
                          ? crypto.randomBytes(7).copy(n, d)
                          : (p.push(u % 1e14), (d += 7)));
                    d = s / 7;
                  } else throw (($ = !1), Error(a + "crypto unavailable"));
                if (!$)
                  for (; d < s; ) ((u = t()), u < 9e15 && (p[d++] = u % 1e14));
                for (
                  s = p[--d],
                    e %= c,
                    s && e && ((u = m[c - e]), (p[d] = o(s / u) * u));
                  p[d] === 0;
                  p.pop(), d--
                );
                if (d < 0) p = [(l = 0)];
                else {
                  for (l = -1; p[0] === 0; p.splice(0, 1), l -= c);
                  for (d = 1, u = p[0]; u >= 10; u /= 10, d++);
                  d < c && (l -= c - d);
                }
                return ((f.e = l), (f.c = p), f);
              };
            })()),
            (A.sum = function () {
              for (var e = 1, t = arguments, n = new A(t[0]); e < t.length; )
                n = n.plus(t[e++]);
              return n;
            }),
            (l = (function () {
              var e = "0123456789";
              function n(e, t, n, r) {
                for (var o, a = [0], i, l = 0, s = e.length; l < s; ) {
                  for (i = a.length; i--; a[i] *= t);
                  for (
                    a[0] += r.indexOf(e.charAt(l++)), o = 0;
                    o < a.length;
                    o++
                  )
                    a[o] > n - 1 &&
                      (a[o + 1] == null && (a[o + 1] = 0),
                      (a[o + 1] += (a[o] / n) | 0),
                      (a[o] %= n));
                }
                return a.reverse();
              }
              return function (r, o, a, i, l) {
                var s,
                  u,
                  c,
                  d,
                  m,
                  p,
                  _,
                  f,
                  g = r.indexOf("."),
                  y = E,
                  C = k;
                for (
                  g >= 0 &&
                    ((d = N),
                    (N = 0),
                    (r = r.replace(".", "")),
                    (f = new A(o)),
                    (p = f.pow(r.length - g)),
                    (N = d),
                    (f.c = n(S(h(p.c), p.e, "0"), 10, a, e)),
                    (f.e = f.c.length)),
                    _ = n(r, o, a, l ? ((s = w), e) : ((s = e), w)),
                    c = d = _.length;
                  _[--d] == 0;
                  _.pop()
                );
                if (!_[0]) return s.charAt(0);
                if (
                  (g < 0
                    ? --c
                    : ((p.c = _),
                      (p.e = c),
                      (p.s = i),
                      (p = t(p, f, y, C, a)),
                      (_ = p.c),
                      (m = p.r),
                      (c = p.e)),
                  (u = c + y + 1),
                  (g = _[u]),
                  (d = a / 2),
                  (m = m || u < 0 || _[u + 1] != null),
                  (m =
                    C < 4
                      ? (g != null || m) && (C == 0 || C == (p.s < 0 ? 3 : 2))
                      : g > d ||
                        (g == d &&
                          (C == 4 ||
                            m ||
                            (C == 6 && _[u - 1] & 1) ||
                            C == (p.s < 0 ? 8 : 7)))),
                  u < 1 || !_[0])
                )
                  r = m ? S(s.charAt(1), -y, s.charAt(0)) : s.charAt(0);
                else {
                  if (((_.length = u), m))
                    for (--a; ++_[--u] > a; )
                      ((_[u] = 0), u || (++c, (_ = [1].concat(_))));
                  for (d = _.length; !_[--d]; );
                  for (g = 0, r = ""; g <= d; r += s.charAt(_[g++]));
                  r = S(r, c, s.charAt(0));
                }
                return r;
              };
            })()),
            (t = (function () {
              function e(e, t, n) {
                var r,
                  o,
                  a,
                  i,
                  l = 0,
                  s = e.length,
                  u = t % p,
                  c = (t / p) | 0;
                for (e = e.slice(); s--; )
                  ((a = e[s] % p),
                    (i = (e[s] / p) | 0),
                    (r = c * a + i * u),
                    (o = u * a + (r % p) * p + l),
                    (l = ((o / n) | 0) + ((r / p) | 0) + c * i),
                    (e[s] = o % n));
                return (l && (e = [l].concat(e)), e);
              }
              function t(e, t, n, r) {
                var o, a;
                if (n != r) a = n > r ? 1 : -1;
                else
                  for (o = a = 0; o < n; o++)
                    if (e[o] != t[o]) {
                      a = e[o] > t[o] ? 1 : -1;
                      break;
                    }
                return a;
              }
              function n(e, t, n, r) {
                for (var o = 0; n--; )
                  ((e[n] -= o),
                    (o = e[n] < t[n] ? 1 : 0),
                    (e[n] = o * r + e[n] - t[n]));
                for (; !e[0] && e.length > 1; e.splice(0, 1));
              }
              return function (r, a, i, l, s) {
                var d,
                  m,
                  p,
                  _,
                  f,
                  h,
                  y,
                  C,
                  b,
                  v,
                  S,
                  R,
                  L,
                  E,
                  k,
                  I,
                  T,
                  D = r.s == a.s ? 1 : -1,
                  x = r.c,
                  $ = a.c;
                if (!x || !x[0] || !$ || !$[0])
                  return new A(
                    !r.s || !a.s || (x ? $ && x[0] == $[0] : !$)
                      ? NaN
                      : (x && x[0] == 0) || !$
                        ? D * 0
                        : D / 0,
                  );
                for (
                  C = new A(D),
                    b = C.c = [],
                    m = r.e - a.e,
                    D = i + m + 1,
                    s ||
                      ((s = u),
                      (m = g(r.e / c) - g(a.e / c)),
                      (D = (D / c) | 0)),
                    p = 0;
                  $[p] == (x[p] || 0);
                  p++
                );
                if (($[p] > (x[p] || 0) && m--, D < 0)) (b.push(1), (_ = !0));
                else {
                  for (
                    E = x.length,
                      I = $.length,
                      p = 0,
                      D += 2,
                      f = o(s / ($[0] + 1)),
                      f > 1 &&
                        (($ = e($, f, s)),
                        (x = e(x, f, s)),
                        (I = $.length),
                        (E = x.length)),
                      L = I,
                      v = x.slice(0, I),
                      S = v.length;
                    S < I;
                    v[S++] = 0
                  );
                  ((T = $.slice()),
                    (T = [0].concat(T)),
                    (k = $[0]),
                    $[1] >= s / 2 && k++);
                  do {
                    if (((f = 0), (d = t($, v, I, S)), d < 0)) {
                      if (
                        ((R = v[0]),
                        I != S && (R = R * s + (v[1] || 0)),
                        (f = o(R / k)),
                        f > 1)
                      )
                        for (
                          f >= s && (f = s - 1),
                            h = e($, f, s),
                            y = h.length,
                            S = v.length;
                          t(h, v, y, S) == 1;
                        )
                          (f--,
                            n(h, I < y ? T : $, y, s),
                            (y = h.length),
                            (d = 1));
                      else
                        (f == 0 && (d = f = 1),
                          (h = $.slice()),
                          (y = h.length));
                      if (
                        (y < S && (h = [0].concat(h)),
                        n(v, h, S, s),
                        (S = v.length),
                        d == -1)
                      )
                        for (; t($, v, I, S) < 1; )
                          (f++, n(v, I < S ? T : $, S, s), (S = v.length));
                    } else d === 0 && (f++, (v = [0]));
                    ((b[p++] = f),
                      v[0] ? (v[S++] = x[L] || 0) : ((v = [x[L]]), (S = 1)));
                  } while ((L++ < E || v[0] != null) && D--);
                  ((_ = v[0] != null), b[0] || b.splice(0, 1));
                }
                if (s == u) {
                  for (p = 1, D = b[0]; D >= 10; D /= 10, p++);
                  W(C, i + (C.e = p + m * c - 1) + 1, l, _);
                } else ((C.e = m), (C.r = +_));
                return C;
              };
            })()));
          function F(e, t, n, r) {
            var o, a, i, l, s;
            if ((n == null ? (n = k) : C(n, 0, 8), !e.c)) return e.toString();
            if (((o = e.c[0]), (i = e.e), t == null))
              ((s = h(e.c)),
                (s =
                  r == 1 || (r == 2 && (i <= I || i >= T))
                    ? v(s, i)
                    : S(s, i, "0")));
            else if (
              ((e = W(new A(e), t, n)),
              (a = e.e),
              (s = h(e.c)),
              (l = s.length),
              r == 1 || (r == 2 && (t <= a || a <= I)))
            ) {
              for (; l < t; s += "0", l++);
              s = v(s, a);
            } else if (((t -= i), (s = S(s, a, "0")), a + 1 > l)) {
              if (--t > 0) for (s += "."; t--; s += "0");
            } else if (((t += a - l), t > 0))
              for (a + 1 == l && (s += "."); t--; s += "0");
            return e.s < 0 && o ? "-" + s : s;
          }
          function O(e, t) {
            for (var n, r = 1, o = new A(e[0]); r < e.length; r++)
              if (((n = new A(e[r])), n.s)) t.call(o, n) && (o = n);
              else {
                o = n;
                break;
              }
            return o;
          }
          function B(e, t, n) {
            for (var r = 1, o = t.length; !t[--o]; t.pop());
            for (o = t[0]; o >= 10; o /= 10, r++);
            return (
              (n = r + n * c - 1) > x
                ? (e.c = e.e = null)
                : n < D
                  ? (e.c = [(e.e = 0)])
                  : ((e.e = n), (e.c = t)),
              e
            );
          }
          s = (function () {
            var e = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
              t = /^([^.]+)\.$/,
              n = /^\.([^.]+)$/,
              r = /^-?(Infinity|NaN)$/,
              o = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
            return function (i, l, s, u) {
              var c,
                d = s ? l : l.replace(o, "");
              if (r.test(d)) i.s = isNaN(d) ? null : d < 0 ? -1 : 1;
              else {
                if (
                  !s &&
                  ((d = d.replace(e, function (e, t, n) {
                    return (
                      (c =
                        (n = n.toLowerCase()) == "x" ? 16 : n == "b" ? 2 : 8),
                      !u || u == c ? t : e
                    );
                  })),
                  u && ((c = u), (d = d.replace(t, "$1").replace(n, "0.$1"))),
                  l != d)
                )
                  return new A(d, c);
                if (A.DEBUG)
                  throw Error(
                    a + "Not a" + (u ? " base " + u : "") + " number: " + l,
                  );
                i.s = null;
              }
              i.c = i.e = null;
            };
          })();
          function W(e, t, n, a) {
            var i,
              l,
              s,
              d,
              p,
              _,
              f,
              g = e.c,
              h = m;
            if (g) {
              e: {
                for (i = 1, d = g[0]; d >= 10; d /= 10, i++);
                if (((l = t - i), l < 0))
                  ((l += c),
                    (s = t),
                    (p = g[(_ = 0)]),
                    (f = ((p / h[i - s - 1]) % 10) | 0));
                else if (((_ = r((l + 1) / c)), _ >= g.length))
                  if (a) {
                    for (; g.length <= _; g.push(0));
                    ((p = f = 0), (i = 1), (l %= c), (s = l - c + 1));
                  } else break e;
                else {
                  for (p = d = g[_], i = 1; d >= 10; d /= 10, i++);
                  ((l %= c),
                    (s = l - c + i),
                    (f = s < 0 ? 0 : ((p / h[i - s - 1]) % 10) | 0));
                }
                if (
                  ((a =
                    a ||
                    t < 0 ||
                    g[_ + 1] != null ||
                    (s < 0 ? p : p % h[i - s - 1])),
                  (a =
                    n < 4
                      ? (f || a) && (n == 0 || n == (e.s < 0 ? 3 : 2))
                      : f > 5 ||
                        (f == 5 &&
                          (n == 4 ||
                            a ||
                            (n == 6 &&
                              ((l > 0 ? (s > 0 ? p / h[i - s] : 0) : g[_ - 1]) %
                                10) &
                                1) ||
                            n == (e.s < 0 ? 8 : 7)))),
                  t < 1 || !g[0])
                )
                  return (
                    (g.length = 0),
                    a
                      ? ((t -= e.e + 1),
                        (g[0] = h[(c - (t % c)) % c]),
                        (e.e = -t || 0))
                      : (g[0] = e.e = 0),
                    e
                  );
                if (
                  (l == 0
                    ? ((g.length = _), (d = 1), _--)
                    : ((g.length = _ + 1),
                      (d = h[c - l]),
                      (g[_] = s > 0 ? o((p / h[i - s]) % h[s]) * d : 0)),
                  a)
                )
                  for (;;)
                    if (_ == 0) {
                      for (l = 1, s = g[0]; s >= 10; s /= 10, l++);
                      for (s = g[0] += d, d = 1; s >= 10; s /= 10, d++);
                      l != d && (e.e++, g[0] == u && (g[0] = 1));
                      break;
                    } else {
                      if (((g[_] += d), g[_] != u)) break;
                      ((g[_--] = 0), (d = 1));
                    }
                for (l = g.length; g[--l] === 0; g.pop());
              }
              e.e > x ? (e.c = e.e = null) : e.e < D && (e.c = [(e.e = 0)]);
            }
            return e;
          }
          function q(e) {
            var t,
              n = e.e;
            return n === null
              ? e.toString()
              : ((t = h(e.c)),
                (t = n <= I || n >= T ? v(t, n) : S(t, n, "0")),
                e.s < 0 ? "-" + t : t);
          }
          return (
            (R.absoluteValue = R.abs =
              function () {
                var e = new A(this);
                return (e.s < 0 && (e.s = 1), e);
              }),
            (R.comparedTo = function (e, t) {
              return y(this, new A(e, t));
            }),
            (R.decimalPlaces = R.dp =
              function (e, t) {
                var n,
                  r,
                  o,
                  a = this;
                if (e != null)
                  return (
                    C(e, 0, _),
                    t == null ? (t = k) : C(t, 0, 8),
                    W(new A(a), e + a.e + 1, t)
                  );
                if (!(n = a.c)) return null;
                if (
                  ((r = ((o = n.length - 1) - g(this.e / c)) * c), (o = n[o]))
                )
                  for (; o % 10 == 0; o /= 10, r--);
                return (r < 0 && (r = 0), r);
              }),
            (R.dividedBy = R.div =
              function (e, n) {
                return t(this, new A(e, n), E, k);
              }),
            (R.dividedToIntegerBy = R.idiv =
              function (e, n) {
                return t(this, new A(e, n), 0, 1);
              }),
            (R.exponentiatedBy = R.pow =
              function (e, t) {
                var n,
                  i,
                  l,
                  s,
                  u,
                  d,
                  m,
                  p,
                  _,
                  f = this;
                if (((e = new A(e)), e.c && !e.isInteger()))
                  throw Error(a + "Exponent not an integer: " + q(e));
                if (
                  (t != null && (t = new A(t)),
                  (d = e.e > 14),
                  !f.c ||
                    !f.c[0] ||
                    (f.c[0] == 1 && !f.e && f.c.length == 1) ||
                    !e.c ||
                    !e.c[0])
                )
                  return (
                    (_ = new A(Math.pow(+q(f), d ? 2 - b(e) : +q(e)))),
                    t ? _.mod(t) : _
                  );
                if (((m = e.s < 0), t)) {
                  if (t.c ? !t.c[0] : !t.s) return new A(NaN);
                  ((i = !m && f.isInteger() && t.isInteger()),
                    i && (f = f.mod(t)));
                } else {
                  if (
                    e.e > 9 &&
                    (f.e > 0 ||
                      f.e < -1 ||
                      (f.e == 0
                        ? f.c[0] > 1 || (d && f.c[1] >= 24e7)
                        : f.c[0] < 8e13 || (d && f.c[0] <= 9999975e7)))
                  )
                    return (
                      (s = f.s < 0 && b(e) ? -0 : 0),
                      f.e > -1 && (s = 1 / s),
                      new A(m ? 1 / s : s)
                    );
                  N && (s = r(N / c + 2));
                }
                for (
                  d
                    ? ((n = new A(0.5)), m && (e.s = 1), (p = b(e)))
                    : ((l = Math.abs(+q(e))), (p = l % 2)),
                    _ = new A(L);
                  ;
                ) {
                  if (p) {
                    if (((_ = _.times(f)), !_.c)) break;
                    s
                      ? _.c.length > s && (_.c.length = s)
                      : i && (_ = _.mod(t));
                  }
                  if (l) {
                    if (((l = o(l / 2)), l === 0)) break;
                    p = l % 2;
                  } else if (((e = e.times(n)), W(e, e.e + 1, 1), e.e > 14))
                    p = b(e);
                  else {
                    if (((l = +q(e)), l === 0)) break;
                    p = l % 2;
                  }
                  ((f = f.times(f)),
                    s
                      ? f.c && f.c.length > s && (f.c.length = s)
                      : i && (f = f.mod(t)));
                }
                return i
                  ? _
                  : (m && (_ = L.div(_)), t ? _.mod(t) : s ? W(_, N, k, u) : _);
              }),
            (R.integerValue = function (e) {
              var t = new A(this);
              return (e == null ? (e = k) : C(e, 0, 8), W(t, t.e + 1, e));
            }),
            (R.isEqualTo = R.eq =
              function (e, t) {
                return y(this, new A(e, t)) === 0;
              }),
            (R.isFinite = function () {
              return !!this.c;
            }),
            (R.isGreaterThan = R.gt =
              function (e, t) {
                return y(this, new A(e, t)) > 0;
              }),
            (R.isGreaterThanOrEqualTo = R.gte =
              function (e, t) {
                return (t = y(this, new A(e, t))) === 1 || t === 0;
              }),
            (R.isInteger = function () {
              return !!this.c && g(this.e / c) > this.c.length - 2;
            }),
            (R.isLessThan = R.lt =
              function (e, t) {
                return y(this, new A(e, t)) < 0;
              }),
            (R.isLessThanOrEqualTo = R.lte =
              function (e, t) {
                return (t = y(this, new A(e, t))) === -1 || t === 0;
              }),
            (R.isNaN = function () {
              return !this.s;
            }),
            (R.isNegative = function () {
              return this.s < 0;
            }),
            (R.isPositive = function () {
              return this.s > 0;
            }),
            (R.isZero = function () {
              return !!this.c && this.c[0] == 0;
            }),
            (R.minus = function (e, t) {
              var n,
                r,
                o,
                a,
                i = this,
                l = i.s;
              if (((e = new A(e, t)), (t = e.s), !l || !t)) return new A(NaN);
              if (l != t) return ((e.s = -t), i.plus(e));
              var s = i.e / c,
                d = e.e / c,
                m = i.c,
                p = e.c;
              if (!s || !d) {
                if (!m || !p) return m ? ((e.s = -t), e) : new A(p ? i : NaN);
                if (!m[0] || !p[0])
                  return p[0]
                    ? ((e.s = -t), e)
                    : new A(m[0] ? i : k == 3 ? -0 : 0);
              }
              if (((s = g(s)), (d = g(d)), (m = m.slice()), (l = s - d))) {
                for (
                  (a = l < 0) ? ((l = -l), (o = m)) : ((d = s), (o = p)),
                    o.reverse(),
                    t = l;
                  t--;
                  o.push(0)
                );
                o.reverse();
              } else
                for (
                  r = (a = (l = m.length) < (t = p.length)) ? l : t, l = t = 0;
                  t < r;
                  t++
                )
                  if (m[t] != p[t]) {
                    a = m[t] < p[t];
                    break;
                  }
              if (
                (a && ((o = m), (m = p), (p = o), (e.s = -e.s)),
                (t = (r = p.length) - (n = m.length)),
                t > 0)
              )
                for (; t--; m[n++] = 0);
              for (t = u - 1; r > l; ) {
                if (m[--r] < p[r]) {
                  for (n = r; n && !m[--n]; m[n] = t);
                  (--m[n], (m[r] += u));
                }
                m[r] -= p[r];
              }
              for (; m[0] == 0; m.splice(0, 1), --d);
              return m[0]
                ? B(e, m, d)
                : ((e.s = k == 3 ? -1 : 1), (e.c = [(e.e = 0)]), e);
            }),
            (R.modulo = R.mod =
              function (e, n) {
                var r,
                  o,
                  a = this;
                return (
                  (e = new A(e, n)),
                  !a.c || !e.s || (e.c && !e.c[0])
                    ? new A(NaN)
                    : !e.c || (a.c && !a.c[0])
                      ? new A(a)
                      : (P == 9
                          ? ((o = e.s),
                            (e.s = 1),
                            (r = t(a, e, 0, 3)),
                            (e.s = o),
                            (r.s *= o))
                          : (r = t(a, e, 0, P)),
                        (e = a.minus(r.times(e))),
                        !e.c[0] && P == 1 && (e.s = a.s),
                        e)
                );
              }),
            (R.multipliedBy = R.times =
              function (e, t) {
                var n,
                  r,
                  o,
                  a,
                  i,
                  l,
                  s,
                  d,
                  m,
                  _,
                  f,
                  h,
                  y,
                  C,
                  b,
                  v = this,
                  S = v.c,
                  R = (e = new A(e, t)).c;
                if (!S || !R || !S[0] || !R[0])
                  return (
                    !v.s || !e.s || (S && !S[0] && !R) || (R && !R[0] && !S)
                      ? (e.c = e.e = e.s = null)
                      : ((e.s *= v.s),
                        !S || !R
                          ? (e.c = e.e = null)
                          : ((e.c = [0]), (e.e = 0))),
                    e
                  );
                for (
                  r = g(v.e / c) + g(e.e / c),
                    e.s *= v.s,
                    s = S.length,
                    _ = R.length,
                    s < _ &&
                      ((y = S), (S = R), (R = y), (o = s), (s = _), (_ = o)),
                    o = s + _,
                    y = [];
                  o--;
                  y.push(0)
                );
                for (C = u, b = p, o = _; --o >= 0; ) {
                  for (
                    n = 0, f = R[o] % b, h = (R[o] / b) | 0, i = s, a = o + i;
                    a > o;
                  )
                    ((d = S[--i] % b),
                      (m = (S[i] / b) | 0),
                      (l = h * d + m * f),
                      (d = f * d + (l % b) * b + y[a] + n),
                      (n = ((d / C) | 0) + ((l / b) | 0) + h * m),
                      (y[a--] = d % C));
                  y[a] = n;
                }
                return (n ? ++r : y.splice(0, 1), B(e, y, r));
              }),
            (R.negated = function () {
              var e = new A(this);
              return ((e.s = -e.s || null), e);
            }),
            (R.plus = function (e, t) {
              var n,
                r = this,
                o = r.s;
              if (((e = new A(e, t)), (t = e.s), !o || !t)) return new A(NaN);
              if (o != t) return ((e.s = -t), r.minus(e));
              var a = r.e / c,
                i = e.e / c,
                l = r.c,
                s = e.c;
              if (!a || !i) {
                if (!l || !s) return new A(o / 0);
                if (!l[0] || !s[0]) return s[0] ? e : new A(l[0] ? r : o * 0);
              }
              if (((a = g(a)), (i = g(i)), (l = l.slice()), (o = a - i))) {
                for (
                  o > 0 ? ((i = a), (n = s)) : ((o = -o), (n = l)), n.reverse();
                  o--;
                  n.push(0)
                );
                n.reverse();
              }
              for (
                o = l.length,
                  t = s.length,
                  o - t < 0 && ((n = s), (s = l), (l = n), (t = o)),
                  o = 0;
                t;
              )
                ((o = ((l[--t] = l[t] + s[t] + o) / u) | 0),
                  (l[t] = u === l[t] ? 0 : l[t] % u));
              return (o && ((l = [o].concat(l)), ++i), B(e, l, i));
            }),
            (R.precision = R.sd =
              function (e, t) {
                var n,
                  r,
                  o,
                  a = this;
                if (e != null && e !== !!e)
                  return (
                    C(e, 1, _),
                    t == null ? (t = k) : C(t, 0, 8),
                    W(new A(a), e, t)
                  );
                if (!(n = a.c)) return null;
                if (((o = n.length - 1), (r = o * c + 1), (o = n[o]))) {
                  for (; o % 10 == 0; o /= 10, r--);
                  for (o = n[0]; o >= 10; o /= 10, r++);
                }
                return (e && a.e + 1 > r && (r = a.e + 1), r);
              }),
            (R.shiftedBy = function (e) {
              return (C(e, -d, d), this.times("1e" + e));
            }),
            (R.squareRoot = R.sqrt =
              function () {
                var e,
                  n,
                  r,
                  o,
                  a,
                  i = this,
                  l = i.c,
                  s = i.s,
                  u = i.e,
                  c = E + 4,
                  d = new A("0.5");
                if (s !== 1 || !l || !l[0])
                  return new A(
                    !s || (s < 0 && (!l || l[0])) ? NaN : l ? i : 1 / 0,
                  );
                if (
                  ((s = Math.sqrt(+q(i))),
                  s == 0 || s == 1 / 0
                    ? ((n = h(l)),
                      (n.length + u) % 2 == 0 && (n += "0"),
                      (s = Math.sqrt(+n)),
                      (u = g((u + 1) / 2) - (u < 0 || u % 2)),
                      s == 1 / 0
                        ? (n = "5e" + u)
                        : ((n = s.toExponential()),
                          (n = n.slice(0, n.indexOf("e") + 1) + u)),
                      (r = new A(n)))
                    : (r = new A(s + "")),
                  r.c[0])
                ) {
                  for (u = r.e, s = u + c, s < 3 && (s = 0); ; )
                    if (
                      ((a = r),
                      (r = d.times(a.plus(t(i, a, c, 1)))),
                      h(a.c).slice(0, s) === (n = h(r.c)).slice(0, s))
                    )
                      if (
                        (r.e < u && --s,
                        (n = n.slice(s - 3, s + 1)),
                        n == "9999" || (!o && n == "4999"))
                      ) {
                        if (!o && (W(a, a.e + E + 2, 0), a.times(a).eq(i))) {
                          r = a;
                          break;
                        }
                        ((c += 4), (s += 4), (o = 1));
                      } else {
                        (!+n || (!+n.slice(1) && n.charAt(0) == "5")) &&
                          (W(r, r.e + E + 2, 1), (e = !r.times(r).eq(i)));
                        break;
                      }
                }
                return W(r, r.e + E + 1, k, e);
              }),
            (R.toExponential = function (e, t) {
              return (e != null && (C(e, 0, _), e++), F(this, e, t, 1));
            }),
            (R.toFixed = function (e, t) {
              return (
                e != null && (C(e, 0, _), (e = e + this.e + 1)),
                F(this, e, t)
              );
            }),
            (R.toFormat = function (e, t, n) {
              var r,
                o = this;
              if (n == null)
                e != null && t && typeof t == "object"
                  ? ((n = t), (t = null))
                  : e && typeof e == "object"
                    ? ((n = e), (e = t = null))
                    : (n = M);
              else if (typeof n != "object")
                throw Error(a + "Argument not an object: " + n);
              if (((r = o.toFixed(e, t)), o.c)) {
                var i,
                  l = r.split("."),
                  s = +n.groupSize,
                  u = +n.secondaryGroupSize,
                  c = n.groupSeparator || "",
                  d = l[0],
                  m = l[1],
                  p = o.s < 0,
                  _ = p ? d.slice(1) : d,
                  f = _.length;
                if (
                  (u && ((i = s), (s = u), (u = i), (f -= i)), s > 0 && f > 0)
                ) {
                  for (i = f % s || s, d = _.substr(0, i); i < f; i += s)
                    d += c + _.substr(i, s);
                  (u > 0 && (d += c + _.slice(i)), p && (d = "-" + d));
                }
                r = m
                  ? d +
                    (n.decimalSeparator || "") +
                    ((u = +n.fractionGroupSize)
                      ? m.replace(
                          new RegExp("\\d{" + u + "}\\B", "g"),
                          "$&" + (n.fractionGroupSeparator || ""),
                        )
                      : m)
                  : d;
              }
              return (n.prefix || "") + r + (n.suffix || "");
            }),
            (R.toFraction = function (e) {
              var n,
                r,
                o,
                i,
                l,
                s,
                u,
                d,
                p,
                _,
                f,
                g,
                y = this,
                C = y.c;
              if (
                e != null &&
                ((u = new A(e)),
                (!u.isInteger() && (u.c || u.s !== 1)) || u.lt(L))
              )
                throw Error(
                  a +
                    "Argument " +
                    (u.isInteger() ? "out of range: " : "not an integer: ") +
                    q(u),
                );
              if (!C) return new A(y);
              for (
                n = new A(L),
                  p = r = new A(L),
                  o = d = new A(L),
                  g = h(C),
                  l = n.e = g.length - y.e - 1,
                  n.c[0] = m[(s = l % c) < 0 ? c + s : s],
                  e = !e || u.comparedTo(n) > 0 ? (l > 0 ? n : p) : u,
                  s = x,
                  x = 1 / 0,
                  u = new A(g),
                  d.c[0] = 0;
                (_ = t(u, n, 0, 1)),
                  (i = r.plus(_.times(o))),
                  i.comparedTo(e) != 1;
              )
                ((r = o),
                  (o = i),
                  (p = d.plus(_.times((i = p)))),
                  (d = i),
                  (n = u.minus(_.times((i = n)))),
                  (u = i));
              return (
                (i = t(e.minus(r), o, 0, 1)),
                (d = d.plus(i.times(p))),
                (r = r.plus(i.times(o))),
                (d.s = p.s = y.s),
                (l = l * 2),
                (f =
                  t(p, o, l, k)
                    .minus(y)
                    .abs()
                    .comparedTo(t(d, r, l, k).minus(y).abs()) < 1
                    ? [p, o]
                    : [d, r]),
                (x = s),
                f
              );
            }),
            (R.toNumber = function () {
              return +q(this);
            }),
            (R.toPrecision = function (e, t) {
              return (e != null && C(e, 1, _), F(this, e, t, 2));
            }),
            (R.toString = function (e) {
              var t,
                n = this,
                r = n.s,
                o = n.e;
              return (
                o === null
                  ? r
                    ? ((t = "Infinity"), r < 0 && (t = "-" + t))
                    : (t = "NaN")
                  : (e == null
                      ? (t =
                          o <= I || o >= T ? v(h(n.c), o) : S(h(n.c), o, "0"))
                      : e === 10
                        ? ((n = W(new A(n), E + o + 1, k)),
                          (t = S(h(n.c), n.e, "0")))
                        : (C(e, 2, w.length, "Base"),
                          (t = l(S(h(n.c), o, "0"), 10, e, r, !0))),
                    r < 0 && n.c[0] && (t = "-" + t)),
                t
              );
            }),
            (R.valueOf = R.toJSON =
              function () {
                return q(this);
              }),
            (R._isBigNumber = !0),
            e != null && A.set(e),
            A
          );
        }
        function g(e) {
          var t = e | 0;
          return e > 0 || e === t ? t : t - 1;
        }
        function h(e) {
          for (var t, n, r = 1, o = e.length, a = e[0] + ""; r < o; ) {
            for (t = e[r++] + "", n = c - t.length; n--; t = "0" + t);
            a += t;
          }
          for (o = a.length; a.charCodeAt(--o) === 48; );
          return a.slice(0, o + 1 || 1);
        }
        function y(e, t) {
          var n,
            r,
            o = e.c,
            a = t.c,
            i = e.s,
            l = t.s,
            s = e.e,
            u = t.e;
          if (!i || !l) return null;
          if (((n = o && !o[0]), (r = a && !a[0]), n || r))
            return n ? (r ? 0 : -l) : i;
          if (i != l) return i;
          if (((n = i < 0), (r = s == u), !o || !a))
            return r ? 0 : !o ^ n ? 1 : -1;
          if (!r) return (s > u) ^ n ? 1 : -1;
          for (l = (s = o.length) < (u = a.length) ? s : u, i = 0; i < l; i++)
            if (o[i] != a[i]) return (o[i] > a[i]) ^ n ? 1 : -1;
          return s == u ? 0 : (s > u) ^ n ? 1 : -1;
        }
        function C(e, t, n, r) {
          if (e < t || e > n || e !== o(e))
            throw Error(
              a +
                (r || "Argument") +
                (typeof e == "number"
                  ? e < t || e > n
                    ? " out of range: "
                    : " not an integer: "
                  : " not a primitive number: ") +
                String(e),
            );
        }
        function b(e) {
          var t = e.c.length - 1;
          return g(e.e / c) == t && e.c[t] % 2 != 0;
        }
        function v(e, t) {
          return (
            (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) +
            (t < 0 ? "e" : "e+") +
            t
          );
        }
        function S(e, t, n) {
          var r, o;
          if (t < 0) {
            for (o = n + "."; ++t; o += n);
            e = o + e;
          } else if (((r = e.length), ++t > r)) {
            for (o = n, t -= r; --t; o += n);
            e += o;
          } else t < r && (e = e.slice(0, t) + "." + e.slice(t));
          return e;
        }
        ((t = f()),
          (t.default = t.BigNumber = t),
          typeof s == "function" && s.amd
            ? s(function () {
                return t;
              })
            : typeof l != "undefined" && l.exports
              ? (l.exports = t)
              : (e || (e = typeof self != "undefined" && self ? self : window),
                (e.BigNumber = t)));
      })(this);
    }
    var c = !1;
    function d() {
      return (c || ((c = !0), u()), l.exports);
    }
    function m(e) {
      switch (e) {
        case void 0:
          return d();
      }
    }
    a.exports = m;
  },
  null,
);
