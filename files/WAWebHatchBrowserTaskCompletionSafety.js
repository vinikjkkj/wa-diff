__d(
  "WAWebHatchBrowserTaskCompletionSafety",
  ["WAWebHatchBrowserTaskState"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 256,
      s = new Map(),
      u = new Map(),
      c = new Map(),
      d = new WeakMap(),
      m = new WeakMap(),
      p = new WeakMap(),
      _ = null,
      f = 0;
    function g(e, t, n, r, a) {
      return r == null
        ? "none"
        : n != null || P(t, r)
          ? "own"
          : M(a, r) ||
              M(
                N(
                  o("WAWebHatchBrowserTaskState").normalizedBrowserTaskID(e),
                  t,
                ),
                r,
              )
            ? "borrowed"
            : "refused";
    }
    function h(e, t) {
      var n = o("WAWebHatchBrowserTaskState").normalizedBrowserTaskID(e),
        r = s.get(n);
      if (!(t == null || (r != null && r >= t))) {
        if ((s.delete(n), s.set(n, t), $())) {
          F();
          return;
        }
        A(n);
      }
    }
    function y(e) {
      var t = s.get(o("WAWebHatchBrowserTaskState").normalizedBrowserTaskID(e));
      return t == null ? _ : _ == null ? t : Math.max(t, _);
    }
    function C() {
      (s.clear(), (_ = null), F());
    }
    function b() {
      (s.clear(),
        u.clear(),
        (_ = null),
        (m = new WeakMap()),
        (p = new WeakMap()),
        F());
    }
    function v(e, t) {
      var n = m.get(e);
      t != null && (n == null || t > n) && m.set(e, t);
    }
    function S(e, t, n) {
      var r = o("WAWebHatchBrowserTaskState").normalizedBrowserTaskID(e),
        a = u.get(r);
      (a == null && ((a = new Map()), u.set(r, a)), a.set(t, n), A(r));
    }
    function R(e, t) {
      var n = o("WAWebHatchBrowserTaskState").normalizedBrowserTaskID(e),
        r = u.get(n);
      r == null || !r.delete(t) || (r.size === 0 && u.delete(n), A(n));
    }
    function L(e, t) {
      var n = u.get(o("WAWebHatchBrowserTaskState").normalizedBrowserTaskID(e));
      if (n == null) return null;
      var r = null;
      for (var a of n) {
        var i = a[0],
          l = a[1];
        i !== t && (r == null || w(r.version, l.version)) && (r = l);
      }
      return r;
    }
    function E() {
      return f;
    }
    function k(e, t) {
      var n = o("WAWebHatchBrowserTaskState").normalizedBrowserTaskID(e),
        r = c.get(n);
      return (
        r == null && ((r = new Set()), c.set(n, r)),
        r.add(t),
        function () {
          var e = c.get(n);
          e != null && e.delete(t) && e.size === 0 && c.delete(n);
        }
      );
    }
    function I(e, t) {
      p.set(e, t);
    }
    function T(e) {
      p.delete(e);
    }
    function D(e) {
      var t;
      d.set(e, ((t = d.get(e)) != null ? t : 0) + 1);
    }
    function x(e) {
      var t,
        n = ((t = d.get(e)) != null ? t : 1) - 1;
      (d.set(e, n),
        !(n > 0) &&
          queueMicrotask(function () {
            var t;
            ((t = d.get(e)) != null ? t : 0) <= 0 && p.delete(e);
          }));
    }
    function $() {
      for (var t = !1; s.size > e; ) {
        var n = s.keys().next();
        if (n.done === !0) return t;
        var r = s.get(n.value);
        (s.delete(n.value),
          r != null && (_ == null || r > _) && ((_ = r), (t = !0)));
      }
      return t;
    }
    function P(e, t) {
      var n = e != null ? m.get(e) : null;
      return n != null && !w(t.version, n);
    }
    function N(e, t) {
      var n = t != null ? p.get(t) : null;
      if (n == null) return null;
      var r = y(e);
      return r != null && (n.version == null || r > n.version) ? null : n;
    }
    function M(e, t) {
      return e != null && e.state === t.state && !w(e.version, t.version);
    }
    function w(e, t) {
      return e != null && t != null && e < t;
    }
    function A(e) {
      (f++, O(c.get(e)));
    }
    function F() {
      f++;
      for (var e of Array.from(c.values())) O(e);
    }
    function O(e) {
      if (e != null) for (var t of Array.from(e)) t();
    }
    ((l.browserTaskCompletionAuthority = g),
      (l.raiseBrowserTaskVersionHighWater = h),
      (l.getBrowserTaskVersionHighWater = y),
      (l.clearBrowserTaskVersionHighWater = C),
      (l.resetBrowserTaskCompletionSafety = b),
      (l.markBrowserTaskOccurrenceObserved = v),
      (l.retainBrowserTaskCompletionSource = S),
      (l.releaseBrowserTaskCompletionSource = R),
      (l.getBrowserTaskCompletionSource = L),
      (l.getBrowserTaskLendingVersion = E),
      (l.subscribeToBrowserTaskCompletionSources = k),
      (l.latchBrowserTaskCompletion = I),
      (l.releaseBrowserTaskCompletion = T),
      (l.retainBrowserTaskTarget = D),
      (l.releaseBrowserTaskTarget = x));
  },
  98,
);
