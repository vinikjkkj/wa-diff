__d(
  "WebBloksRsaTimelockSolver",
  [
    "WebBloksRsaTimelockMontgomeryArithmetic",
    "WebBloksRsaTimelockNativeArithmetic",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 1024,
      s = 1024,
      u = 0,
      c = 1,
      d = 2,
      m = 4,
      p = 5,
      _ = 6;
    function f(t) {
      return t.length > 0 && t.length <= e && /^[0-9a-f]+$/i.test(t);
    }
    function g(e) {
      var t = e.replace(/^0+/, "").toUpperCase() || "0";
      return t !== "0" && t.length % 2 !== 0 ? "0" + t : t;
    }
    function h(e, t) {
      return Math.floor((t() - e) * 1e3);
    }
    function y(e, t, n, r, o) {
      var a = babelHelpers.extends({}, e);
      return (
        t !== n && (a.requested_iterations = t),
        r !== o && (a.requested_max_time_ms = r),
        JSON.stringify(a)
      );
    }
    function C(e, t, n, r, o) {
      return {
        error: e,
        completed_iterations: t,
        elapsed_us: h(r, o),
        result_hex: n,
      };
    }
    function b(e, t, n, r, o, a, i, l) {
      return y(C(e, t, "", n, r), o, a, i, l);
    }
    function v(e, t) {
      return r("WebBloksRsaTimelockNativeArithmetic").isSupported()
        ? r("WebBloksRsaTimelockNativeArithmetic").create(e, t)
        : r("WebBloksRsaTimelockMontgomeryArithmetic")(e, t);
    }
    function S(e, t, n, r, o, a, i) {
      var l = i(),
        h = n < 0 ? Number.MAX_SAFE_INTEGER : Math.min(n, o),
        S = Math.max(1, Math.min(r, a));
      if (!f(e)) return b(c, 0, l, i, n, h, r, S);
      if (!f(t)) return b(d, 0, l, i, n, h, r, S);
      if (h === 0) return y(C(u, 0, g(t), l, i), n, h, r, S);
      var R;
      try {
        R = v(e, t);
      } catch (e) {
        return b(m, 0, l, i, n, h, r, S);
      }
      var L = 0,
        E = !1;
      try {
        for (; L < h; L++) {
          if (L % s === s - 1 && i() - l >= S) {
            E = !0;
            break;
          }
          R.square();
        }
      } catch (e) {
        return b(m, L, l, i, n, h, r, S);
      }
      var k;
      try {
        k = g(R.toHex());
      } catch (e) {
        return b(p, L, l, i, n, h, r, S);
      }
      return y(C(E ? _ : u, L, k, l, i), n, h, r, S);
    }
    l.default = S;
  },
  98,
);
