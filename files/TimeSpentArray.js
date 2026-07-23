__d(
  "TimeSpentArray",
  [
    "Banzai",
    "TimeSlice",
    "clearTimeout",
    "pageID",
    "setTimeoutAcrossTransitions",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 2,
      s = e * 32,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b = {},
      v,
      S = null,
      R = null;
    function L() {
      return { timeoutDelayMap: b, nextDelay: v, timeoutInSeconds: p };
    }
    function E() {
      if (u) {
        var e = Date.now();
        e > f && (h = Math.min(s, Math.ceil(e / 1e3 - _)));
        var t = x();
        t && u(t, v);
      }
      D();
    }
    function k() {
      (I(),
        (m = r("setTimeoutAcrossTransitions")(
          r("TimeSlice").guard(E, "TimeSpentArray Timeout", {
            propagationType: r("TimeSlice").PropagationType.ORPHAN,
          }),
          p * 1e3,
        )));
    }
    function I() {
      m && (r("clearTimeout")(m), (m = null));
    }
    function T(t, n) {
      ((_ = t), (f = _ * 1e3), (g = [1]));
      for (var r = 1; r < e; r++) g.push(0);
      ((h = 1), (y += 1), (C += 1));
      var o = C.toString() + "_delay";
      ((v = b[o]), v === void 0 && (v = b.delay));
      var a = C.toString() + "_timeout",
        i = b[a];
      (i === void 0 && (i = b.timeout),
        (i = Math.min(i, s)),
        (p = i || s),
        (S = d ? d() : null),
        (R = n),
        k());
    }
    function D() {
      (I(), (g = null));
    }
    function x() {
      return g
        ? {
            tos_id: r("pageID"),
            start_time: _,
            tos_array: g.slice(0),
            tos_len: h,
            tos_seq: C,
            tos_cum: y,
            start_endpoint: S,
            start_event: R,
          }
        : null;
    }
    function $(e, t) {
      (e >= f && e - f < 1e3) || (c && c(e), P(Math.floor(e / 1e3), t));
    }
    function P(e, t) {
      var n = e - _;
      ((n < 0 || n >= s) && E(),
        g
          ? ((g[n >> 5] |= 1 << (n & 31)), (h = n + 1), (y += 1), (f = e * 1e3))
          : T(e, t));
    }
    function N(e, t, n, o, a) {
      ((y = 0),
        (C = -1),
        (u = e),
        (c = o),
        (d = a),
        typeof t == "object" && t !== null ? (b = t) : (b = {}),
        T(Math.floor((n == null || n === 0 ? Date.now() : n) / 1e3), "init"),
        r("Banzai").subscribe(r("Banzai").SHUTDOWN, E));
    }
    function M(e, t) {
      $(e, t != null ? t : "unknown");
    }
    function w() {
      return x();
    }
    function A() {
      E();
    }
    function F() {
      D();
    }
    function O() {
      return L();
    }
    ((l.init = N),
      (l.update = M),
      (l.get = w),
      (l.ship = A),
      (l.reset = F),
      (l.testState = O));
  },
  98,
);
