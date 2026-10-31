__d(
  "WAWebA2UIRenderTiming",
  ["WAWebWamEnumBizAiRenderOutcomeType"],
  function (t, n, r, o, a, i, l) {
    var e = 8490,
      s = 4,
      u = 8,
      c = new Map(),
      d = new Map(),
      m = new Set(),
      p = 0;
    function _() {
      return ((p += 1), p);
    }
    var f = 256,
      g = new Set();
    function h(e) {
      return g.has(e) ? !1 : (E(g, e), !0);
    }
    function y(e) {
      g.delete(e);
    }
    function C(e, t) {
      c.set(e, t);
    }
    function b(e) {
      c.delete(e);
    }
    function v(t, n) {
      if (t === e && n[s] != null) {
        var r = n[u];
        if (typeof r == "string") {
          var o = c.get(r);
          o != null && (c.delete(r), o());
        }
      }
    }
    function S(e) {
      return m.has(e);
    }
    function R(e, t) {
      var n = d.get(e);
      return (
        n == null && ((n = new Set()), d.set(e, n)),
        n.add(t),
        function () {
          var n = d.get(e);
          (n == null || n.delete(t),
            (n == null ? void 0 : n.size) === 0 && d.delete(e));
        }
      );
    }
    function L(t, n) {
      var r;
      if (
        !(
          t !== e ||
          n[s] !==
            o("WAWebWamEnumBizAiRenderOutcomeType").BIZ_AI_RENDER_OUTCOME_TYPE
              .FALLBACK
        )
      ) {
        var a = n[u];
        typeof a == "string" &&
          (m.has(a) || E(m, a),
          (r = d.get(a)) == null ||
            r.forEach(function (e) {
              return e();
            }));
      }
    }
    function E(e, t) {
      if (e.size >= f) {
        var n = e.values().next().value;
        n != null && e.delete(n);
      }
      e.add(t);
    }
    ((l.nextA2UIRenderInstanceKey = _),
      (l.markA2UIRenderStartedIfAbsent = h),
      (l.clearA2UIRenderStarted = y),
      (l.registerA2UIRenderCallback = C),
      (l.unregisterA2UIRenderCallback = b),
      (l.maybeEndA2UIRenderMarkerFromFieldStat = v),
      (l.hasA2UIServerFallback = S),
      (l.subscribeA2UIServerFallback = R),
      (l.maybeNotifyA2UIServerFallbackFromFieldStat = L));
  },
  98,
);
