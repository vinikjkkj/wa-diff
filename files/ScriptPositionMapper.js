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
          e
        );
      })(),
      g = new f(u),
      h = new f(c);
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = h.get(e);
          if (n == null) {
            var r = yield fetch(t);
            if (!r.ok) return null;
            ((n = yield r.text()), h.set(e, n));
          }
          return n;
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = { line: -1, column: -1 };
          if (t === 0) return { line: 1, column: 0 };
          for (var r of d) if (r.test(e)) return n;
          try {
            var o = _(e),
              a = o + ":" + t,
              i = g.get(a);
            if (i) return i;
            var l = yield y(o, e);
            if (l == null || t < 0 || t > l.length) return n;
            for (var s = l.split("\n"), u = 0, c = 0; c < s.length; c++) {
              var m = s[c].length + 1;
              if (u + m > t) {
                var p = t - u,
                  f = { line: c + 1, column: p };
                return (g.set(a, f), f);
              }
              u += m;
            }
            var h = { line: s.length, column: s[s.length - 1].length };
            return (g.set(a, h), h);
          } catch (e) {
            return n;
          }
        })),
        v.apply(this, arguments)
      );
    }
    ((l.MAX_POS_LRU_ENTRIES = u),
      (l.MAX_SCRIPT_TEXT_LRU_ENTRIES = c),
      (l.BLOCKLIST_REGEXPS = d),
      (l.getLineAndColumnFromCharPosition = b));
  },
  98,
);
