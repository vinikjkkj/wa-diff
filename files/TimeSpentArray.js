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
      R = null,
      L,
      E = 0;
    function k() {
      return L == null ? Date.now() : L.now();
    }
    function I() {
      return { timeoutDelayMap: b, nextDelay: v, timeoutInSeconds: p };
    }
    function T() {
      var e = u;
      if (e) {
        var t = k();
        t > f && (h = Math.min(s, Math.ceil(t / 1e3 - _)));
        var n = N();
        n && e(n, v);
      }
      P();
    }
    function D() {
      (x(),
        (m = r("setTimeoutAcrossTransitions")(
          r("TimeSlice").guard(T, "TimeSpentArray Timeout", {
            propagationType: r("TimeSlice").PropagationType.ORPHAN,
          }),
          p * 1e3,
        )));
    }
    function x() {
      m != null && m !== 0 && (r("clearTimeout")(m), (m = null));
    }
    function $(t, n) {
      var r, o;
      ((_ = t),
        (E =
          (r = (o = L) == null ? void 0 : o.getOffsetMillis()) != null ? r : 0),
        (f = _ * 1e3));
      for (var a = [1], i = 1; i < e; i++) a.push(0);
      ((g = a), (h = 1), (y += 1), (C += 1));
      var l = C.toString() + "_delay";
      ((v = b[l]), v === void 0 && (v = b.delay));
      var u = C.toString() + "_timeout",
        c = b[u];
      (c === void 0 && (c = b.timeout),
        (c = Math.min(c, s)),
        (p = c || s),
        (S = d ? d() : null),
        (R = n),
        D());
    }
    function P() {
      (x(), (g = null));
    }
    function N() {
      var e = g;
      return e == null
        ? null
        : {
            tos_id: r("pageID"),
            start_time: Math.floor(_ - E / 1e3),
            tos_array: e.slice(0),
            tos_len: h,
            tos_seq: C,
            tos_cum: y,
            start_endpoint: S,
            start_event: R,
          };
    }
    function M(e, t) {
      (e >= f && e - f < 1e3) || (c && c(e), w(Math.floor(e / 1e3), t));
    }
    function w(e, t) {
      var n = e - _;
      ((n < 0 || n >= s) && T(),
        g
          ? ((g[n >> 5] |= 1 << (n & 31)), (h = n + 1), (y += 1), (f = e * 1e3))
          : $(e, t));
    }
    function A(e, t, n, o, a, i) {
      ((y = 0),
        (C = -1),
        (u = e),
        (c = o),
        (d = a),
        (L = i),
        typeof t == "object" && t !== null ? (b = t) : (b = {}),
        $(Math.floor((n == null || n === 0 ? k() : n) / 1e3), "init"),
        r("Banzai").subscribe(r("Banzai").SHUTDOWN, T));
    }
    function F(e, t) {
      M(e, t != null ? t : "unknown");
    }
    function O() {
      return N();
    }
    function B() {
      T();
    }
    function W() {
      P();
    }
    function q() {
      return I();
    }
    ((l.init = A),
      (l.update = F),
      (l.get = O),
      (l.ship = B),
      (l.reset = W),
      (l.testState = q));
  },
  98,
);
