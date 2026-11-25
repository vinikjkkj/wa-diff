__d(
  "WAWebDateTimeFormatCache",
  [],
  function (t, n, r, o, a, i) {
    var e = 64,
      l = 1e3,
      s = 1,
      u = new Date(Date.UTC(2026, 0, 15)),
      c = new Date(Date.UTC(2026, 6, 15)),
      d = null,
      m = Number.NaN,
      p = Number.NaN,
      _ = Number.NaN;
    function f(e, t) {
      return C(g(), e, t);
    }
    function g() {
      if (d != null) return d;
      var e = {
        formatters: new Map(),
        locale: null,
        zone: null,
        zoneCheckedAt: Number.NEGATIVE_INFINITY,
        januaryOffset: Number.NaN,
        julyOffset: Number.NaN,
      };
      return ((d = e), h(), e);
    }
    function h() {
      typeof window != "undefined" &&
        (window.document.addEventListener("visibilitychange", y),
        window.addEventListener("focus", y));
    }
    function y() {
      d != null && (d.zoneCheckedAt = Number.NEGATIVE_INFINITY);
    }
    function C(t, n, r) {
      if (!b(t, n)) return Intl.DateTimeFormat(n, r);
      var o = JSON.stringify(r),
        a = t.formatters.get(o);
      if (a != null) return a;
      t.formatters.size >= e && t.formatters.clear();
      var i = Intl.DateTimeFormat(n, r);
      return (t.formatters.set(o, i), i);
    }
    function b(e, t) {
      t !== e.locale && (e.formatters.clear(), (e.locale = t));
      var n = self.performance.now(),
        r = n - e.zoneCheckedAt;
      if (
        (v(n),
        e.zone != null &&
          r >= 0 &&
          r < l &&
          p === e.januaryOffset &&
          _ === e.julyOffset)
      )
        return !0;
      var o = S();
      return (
        o !== e.zone && (e.formatters.clear(), (e.zone = o)),
        (e.zoneCheckedAt = n),
        (e.januaryOffset = p),
        (e.julyOffset = _),
        o != null
      );
    }
    function v(e) {
      var t = e - m;
      (t >= 0 && t < s) ||
        ((m = e), (p = u.getTimezoneOffset()), (_ = c.getTimezoneOffset()));
    }
    function S() {
      try {
        var e = Intl.DateTimeFormat().resolvedOptions(),
          t = e.timeZone;
        return t != null && t !== "" ? t : null;
      } catch (e) {
        return null;
      }
    }
    i.getCachedDateTimeFormat = f;
  },
  66,
);
