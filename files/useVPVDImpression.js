__d(
  "useVPVDImpression",
  [
    "CometVPVDUserActivityMonitor",
    "cr:921407",
    "isIntersectionObserverEntryVPVDVisible",
    "isIntersectionObserverEntryVPVDVisiblePct",
    "react",
    "react-compiler-runtime",
    "useVisibilityObserver",
    "vpvdConstants",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useCallback;
    function u(e) {
      var t = o("react-compiler-runtime").c(21),
        a = e.activityMonitorOverride,
        i = e.isLite,
        l = e.minVisiblePct,
        s = e.minVisiblePx,
        u = e.minVisibleTimeMs,
        c = e.onIntersection,
        d = e.onVPVDEnd,
        m = e.onVPVDStart,
        p = s === void 0 ? o("vpvdConstants").DEFAULT_MIN_VISIBLE_PX : s,
        _ = u === void 0 ? o("vpvdConstants").DEFAULT_MIN_VISIBLE_TIME_MS : u,
        f = n("cr:921407")(),
        g = f[0],
        h = f[1],
        y;
      t[0] !== _ || t[1] !== d
        ? ((y = function (t) {
            t.visibleDuration < _ || d(t);
          }),
          (t[0] = _),
          (t[1] = d),
          (t[2] = y))
        : (y = t[2]);
      var C = y,
        b = i === !0 ? 1 : p,
        v;
      t[3] !== b || t[4] !== l
        ? ((v = function (t) {
            return l != null
              ? r("isIntersectionObserverEntryVPVDVisiblePct")(t, l)
              : r("isIntersectionObserverEntryVPVDVisible")(t, b);
          }),
          (t[3] = b),
          (t[4] = l),
          (t[5] = v))
        : (v = t[5]);
      var S = v,
        R;
      t[6] !== i
        ? ((R = i === !0 ? null : { thresholdOverride: "EXPENSIVE" }),
          (t[6] = i),
          (t[7] = R))
        : (R = t[7]);
      var L = R,
        E = a != null ? a : r("CometVPVDUserActivityMonitor"),
        k;
      t[8] !== S || t[9] !== E || t[10] !== L
        ? ((k = babelHelpers.extends(
            { activityMonitorOverride: E, isEntryInViewport: S },
            L,
          )),
          (t[8] = S),
          (t[9] = E),
          (t[10] = L),
          (t[11] = k))
        : (k = t[11]);
      var I = k,
        T;
      t[12] !== C || t[13] !== c || t[14] !== m || t[15] !== I || t[16] !== h
        ? ((T = {
            onHidden: C,
            onIntersection: c,
            onVisibilityDurationUpdated: h,
            onVisible: m,
            options: I,
          }),
          (t[12] = C),
          (t[13] = c),
          (t[14] = m),
          (t[15] = I),
          (t[16] = h),
          (t[17] = T))
        : (T = t[17]);
      var D = r("useVisibilityObserver")(T),
        x;
      return (
        t[18] !== D || t[19] !== g
          ? ((x = [D, g]), (t[18] = D), (t[19] = g), (t[20] = x))
          : (x = t[20]),
        x
      );
    }
    l.default = u;
  },
  98,
);
