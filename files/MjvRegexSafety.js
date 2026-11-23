__d(
  "MjvRegexSafety",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Set(),
      l = {},
      s = 4,
      u = 2e5,
      c = 64,
      d = {},
      m = 1e3,
      p = new Map(),
      _ = (function () {
        for (var e = [], t = 0; t < 128; t++) e.push(t);
        return (e.push(160, 233, 945, 8232, 12288, 19968, 65279, 65533), e);
      })();
    function f(e) {
      var t = p.get(e);
      if (t != null) return t;
      var n = g(e) || h(e);
      if (p.size >= m)
        for (var r of p.keys()) {
          p.delete(r);
          break;
        }
      return (p.set(e, n), n);
    }
    function g(e) {
      return !!(
        /\(\s*(?:\[\^?[^\]]+\]|\\[wWdDsS])[*+]\s*\)[*+]/.test(e) ||
        /\(\s*\w\s*[*+]\s*\)[*+]/.test(e) ||
        /\([^)]*\|[^)]*\)[*+{]/.test(e) ||
        /[*+]{2,}|\{[^}]+\}[*+{]/.test(e)
      );
    }
    function h(e) {
      if (!y(e)) return !1;
      try {
        return C(new w(e).parse());
      } catch (e) {
        return e !== l;
      }
    }
    function y(e) {
      if (/[*+]/.test(e)) return !0;
      for (var t of e.matchAll(/\{(\d+)(?:,(\d*))?\}/g)) {
        var n = Number(t[1]);
        if (
          (t[2] === "" ? (n = 1 / 0) : t[2] != null && (n = Number(t[2])),
          n >= s)
        )
          return !0;
      }
      return !1;
    }
    function C(e) {
      for (var t of e)
        if (t.kind === "group") {
          if (b(t)) return !0;
          for (var n of t.alternatives) if (C(n)) return !0;
        }
      return !1;
    }
    function b(e) {
      if (e.max < s) return !1;
      var t = e.alternatives;
      if (t.length > 1 && v(t)) return !0;
      if (!t.some(R)) return !1;
      if (t.some(k) || t.length > 1) return !0;
      for (var n = t[0], r = x(n), o = 0; o < n.length; o++) {
        var a = n[o];
        if (L(a)) {
          var i = n.slice(o + 1),
            l = k(i) ? N(x(i), r) : x(i);
          if (M(P(a), l)) return !0;
        }
      }
      return !1;
    }
    function v(e) {
      for (var t = e.map(S), n = 0; n < e.length; n++)
        for (var r = n + 1; r < e.length; r++) {
          var o = t[n],
            a = t[r];
          if (o == null || a == null) {
            if (M(x(e[n]), x(e[r]))) return !0;
            continue;
          }
          for (var i = !0, l = 0; l < Math.min(o.length, a.length); l++)
            if (!M(o[l], a[l])) {
              i = !1;
              break;
            }
          if (i) return !0;
        }
      return !1;
    }
    function S(e) {
      var t = [];
      for (var n of e) {
        if (n.kind !== "atom" || n.min !== n.max) return null;
        for (var r = 0; r < n.min; r++) {
          if (t.length >= c) return t;
          t.push(n.chars);
        }
      }
      return t;
    }
    function R(e) {
      return e.some(L);
    }
    function L(e) {
      if (e.max > e.min) return !0;
      if (e.kind === "atom" || e.max === 0) return !1;
      var t = E(e.alternatives[0]),
        n = t[0],
        r = t[1];
      return e.alternatives.some(function (e) {
        var t = E(e);
        return t[0] !== t[1] || t[0] !== n || t[1] !== r;
      });
    }
    function E(e) {
      var t = 0,
        n = 0;
      for (var r of e) {
        var o = 1,
          a = 1;
        if (r.kind === "group") {
          ((o = 1 / 0), (a = 0));
          for (var i of r.alternatives) {
            var l = E(i);
            ((o = Math.min(o, l[0])), (a = Math.max(a, l[1])));
          }
        }
        ((t += o * r.min), (n += r.max === 0 ? 0 : a * r.max));
      }
      return [t, n];
    }
    function k(e) {
      return e.every(function (e) {
        return e.min === 0 || I(e);
      });
    }
    function I(e) {
      return e.kind === "group" && e.alternatives.some(k);
    }
    var T = new WeakMap(),
      D = new WeakMap();
    function x(t) {
      var n = T.get(t);
      if (n != null) return n;
      var r = e;
      for (var o of t) if (((r = N(r, $(o))), o.min > 0 && !I(o))) break;
      return (T.set(t, r), r);
    }
    function $(t) {
      if (t.kind === "atom") return t.chars;
      var n = e;
      for (var r of t.alternatives) n = N(n, x(r));
      return n;
    }
    function P(t) {
      if (t.kind === "atom") return t.chars;
      var n = D.get(t);
      if (n != null) return n;
      var r = e;
      for (var o of t.alternatives) for (var a of o) r = N(r, P(a));
      return (D.set(t, r), r);
    }
    function N(e, t) {
      if (t.size === 0) return e;
      if (e.size === 0) return t;
      var n = new Set(e);
      for (var r of t) n.add(r);
      return n;
    }
    function M(e, t) {
      for (var n of e) if (t.has(n)) return !0;
      return !1;
    }
    var w = (function () {
      function e(e) {
        ((this.$1 = ""),
          (this.$2 = 0),
          (this.$3 = []),
          (this.$4 = new Map()),
          (this.$5 = 0),
          (this.$1 = e));
        for (var t = new Set(_), n = 0; n < e.length; n++)
          t.add(e.charCodeAt(n));
        for (var r of e.matchAll(/\\x([0-9a-fA-F]{2})|\\u([0-9a-fA-F]{4})/g)) {
          var o;
          t.add(parseInt((o = r[1]) != null ? o : r[2], 16));
        }
        this.$3 = Array.from(t);
      }
      var t = e.prototype;
      return (
        (t.parse = function () {
          var e = this.$6();
          if (this.$2 < this.$1.length) throw l;
          return e.length === 1
            ? e[0]
            : [{ kind: "group", alternatives: e, min: 1, max: 1 }];
        }),
        (t.$6 = function () {
          for (var e = [this.$7()]; this.$1[this.$2] === "|"; )
            (this.$2++, e.push(this.$7()));
          return e;
        }),
        (t.$7 = function () {
          for (var e = [], t = this.$1; this.$2 < t.length; ) {
            var n = t[this.$2];
            if (n === "|" || n === ")") break;
            var r = this.$8();
            r != null &&
              (this.$9(r),
              r.kind === "group" &&
              r.min === 1 &&
              r.max === 1 &&
              r.alternatives.length === 1
                ? e.push.apply(e, r.alternatives[0])
                : e.push(r));
          }
          return e;
        }),
        (t.$8 = function () {
          var e = this;
          return (function (t) {
            return t === "^" || t === "$"
              ? e.$10(1)
              : t === "("
                ? e.$11()
                : t === "["
                  ? e.$12()
                  : t === "\\"
                    ? e.$13()
                    : t === "*" || t === "+" || t === "?"
                      ? e.$14()
                      : t === "{"
                        ? e.$15()
                        : e.$16();
          })(this.$1[this.$2]);
        }),
        (t.$10 = function (t) {
          return ((this.$2 += t), null);
        }),
        (t.$14 = function () {
          throw l;
        }),
        (t.$12 = function () {
          var e = this.$1,
            t = this.$2,
            n = t + 1;
          for (
            e[n] === "^" && n++, e[n] === "]" && n++;
            n < e.length && e[n] !== "]";
          )
            n += e[n] === "\\" ? 2 : 1;
          if (n >= e.length) throw l;
          return ((this.$2 = n + 1), this.$17(e.slice(t, this.$2)));
        }),
        (t.$13 = function () {
          var e = this.$1,
            t = this.$2,
            n = e[t + 1];
          if (n == null) throw l;
          if (n === "b" || n === "B") return this.$10(2);
          if (n >= "1" && n <= "9") return ((this.$2 = t + 2), this.$17("."));
          var r = e.slice(t + 2),
            o = t + 2;
          return (
            n === "x" && /^[0-9a-fA-F]{2}/.test(r)
              ? (o = t + 4)
              : n === "u" && /^[0-9a-fA-F]{4}/.test(r)
                ? (o = t + 6)
                : n === "c" && /^[a-zA-Z]/.test(r) && (o = t + 3),
            (this.$2 = o),
            this.$17(e.slice(t, o))
          );
        }),
        (t.$15 = function () {
          if (/^\{\d+(,\d*)?\}/.test(this.$1.slice(this.$2))) throw l;
          return (this.$2++, this.$17("\\{"));
        }),
        (t.$16 = function () {
          var e = this.$1[this.$2];
          return (this.$2++, this.$17(e));
        }),
        (t.$11 = function () {
          var e = this.$1,
            t = this.$2 + 1,
            n = !1;
          if (e[t] === "?") {
            var r = e[t + 1];
            if (r === ":") t += 2;
            else if (r === "=" || r === "!") ((n = !0), (t += 2));
            else if (r === "<") {
              var o = e[t + 2];
              if (o === "=" || o === "!") ((n = !0), (t += 3));
              else {
                var a = e.indexOf(">", t);
                if (a === -1) throw l;
                t = a + 1;
              }
            } else throw l;
          }
          this.$2 = t;
          var i = this.$6();
          if (e[this.$2] !== ")") throw l;
          return (
            this.$2++,
            n
              ? { kind: "group", alternatives: i, min: 0, max: 0 }
              : { kind: "group", alternatives: i, min: 1, max: 1 }
          );
        }),
        (t.$9 = function (t) {
          var e = this.$1,
            n = e[this.$2],
            r = 1,
            o = 1;
          if (n === "*") ((r = 0), (o = 1 / 0), this.$2++);
          else if (n === "+") ((o = 1 / 0), this.$2++);
          else if (n === "?") ((r = 0), this.$2++);
          else if (n === "{") {
            var a = /^\{(\d+)(,(\d*))?\}/.exec(e.slice(this.$2));
            if (a == null) return;
            ((r = Number(a[1])),
              a[2] == null ? (o = r) : a[3] ? (o = Number(a[3])) : (o = 1 / 0),
              (this.$2 += a[0].length));
          } else return;
          (e[this.$2] === "?" && this.$2++,
            t.max !== 0 && ((t.min *= r), (t.max *= o)));
        }),
        (t.$17 = function (t) {
          var e = this.$4.get(t);
          if (e == null) {
            var n;
            try {
              n = new RegExp("^(?:" + t + ")$");
            } catch (e) {
              throw l;
            }
            if (((this.$5 += this.$3.length), this.$5 > u)) throw d;
            var r = new Set();
            for (var o of this.$3) n.test(String.fromCharCode(o)) && r.add(o);
            ((e = r), this.$4.set(t, e));
          }
          return { kind: "atom", chars: e, min: 1, max: 1 };
        }),
        e
      );
    })();
    i.isUnsafeRegexPattern = f;
  },
  66,
);
