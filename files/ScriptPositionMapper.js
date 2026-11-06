__d(
  "ScriptPositionMapper",
  ["OneTraceSetup", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 5e3,
      c = 100,
      d =
        (e =
          (s = o("OneTraceSetup").getConfig()) == null ||
          (s = s.LoAF) == null ||
          (s = s.config) == null
            ? void 0
            : s.skip_script_position_conversion) != null
          ? e
          : [],
      m = new Map(),
      p = 1;
    function _(e) {
      var t = m.get(e);
      return (t != null || ((t = p++), m.set(e, t)), t);
    }
    var f = (function () {
        function e(e) {
          ((this.$1 = new Map()), (this.$2 = e));
        }
        var t = e.prototype;
        return (
          (t.get = function (t) {
            var e = this.$1.get(t);
            if (e != null) return (this.$1.delete(t), this.$1.set(t, e), e);
          }),
          (t.set = function (t, n) {
            if (
              (this.$1.has(t) && this.$1.delete(t),
              this.$1.set(t, n),
              this.$1.size > this.$2)
            ) {
              var e = this.$1.keys().next().value;
              e != null && this.$1.delete(e);
            }
          }),
          (t.delete = function (t) {
            this.$1.delete(t);
          }),
          e
        );
      })(),
      g = new f(u),
      h = new f(c);
    function y(e, t) {
      var n = h.get(e);
      return (
        n == null &&
          ((n = C(t).then(
            function (t) {
              return (t == null && h.delete(e), t);
            },
            function () {
              return (h.delete(e), null);
            },
          )),
          h.set(e, n)),
        n
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield fetch(e);
          if (!t.ok) return null;
          for (var n = yield t.text(), r = [0], o = n.indexOf("\n"); o !== -1; )
            (r.push(o + 1), (o = n.indexOf("\n", o + 1)));
          return { lineStarts: Uint32Array.from(r), textLength: n.length };
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = { line: -1, column: -1 };
          try {
            if (t === 0) return { line: 1, column: 0 };
            if (!Number.isInteger(t) || t < 0) return n;
            for (var r of d) if (r.test(e)) return n;
            var o = _(e),
              a = o + ":" + t,
              i = g.get(a);
            if (i) return i;
            var l = yield y(o, e);
            if (l == null || t > l.textLength) return n;
            for (var s = l.lineStarts, u = 0, c = s.length - 1; u < c; ) {
              var m = Math.ceil((u + c) / 2);
              s[m] <= t ? (u = m) : (c = m - 1);
            }
            var p = { line: u + 1, column: t - s[u] };
            return (g.set(a, p), p);
          } catch (e) {
            return n;
          }
        })),
        S.apply(this, arguments)
      );
    }
    ((l.MAX_POS_LRU_ENTRIES = u),
      (l.MAX_LINE_STARTS_LRU_ENTRIES = c),
      (l.BLOCKLIST_REGEXPS = d),
      (l.getLineAndColumnFromCharPosition = v));
  },
  98,
);
