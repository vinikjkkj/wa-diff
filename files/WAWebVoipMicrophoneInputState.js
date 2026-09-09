__d(
  "WAWebVoipMicrophoneInputState",
  ["WALogger", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = -75,
      u = 3,
      c = 100,
      d = 1e3,
      m = 500,
      p = -65,
      _ = -20,
      f = 0.72,
      g = 20;
    function h(e, t) {
      return Math.max(K(e), t * f);
    }
    var y = new Set();
    function C() {
      return {
        status: "inactive",
        failureReason: null,
        level: 0,
        isLevelStale: !0,
        levelFreshSinceAt: null,
        hasCredibleSignal: !1,
        lastCredibleSignalAt: null,
        streamGeneration: 0,
        streamChangeReason: null,
        streamStartedAt: null,
        nativeSilenceCount: 0,
      };
    }
    function b() {
      return {
        snapshot: C(),
        consecutiveCredibleWindows: 0,
        lastLevelAt: null,
        smoothedLevel: 0,
      };
    }
    var v = b(),
      S = null,
      R = null;
    function L() {
      return v.snapshot;
    }
    function E() {
      return self.performance.now();
    }
    function k() {
      return v.snapshot.level;
    }
    function I() {
      return v.snapshot.status;
    }
    function T() {
      return v.snapshot.hasCredibleSignal;
    }
    function D(e) {
      return (
        y.add(e),
        function () {
          y.delete(e);
        }
      );
    }
    function x(e) {
      var t = E(),
        n = A(v, e, t);
      if (n !== v) {
        var r = n.snapshot !== v.snapshot;
        if (((v = n), P(t), !!r))
          for (var o of Array.from(y))
            try {
              o();
            } catch (e) {
              $(e);
            }
      }
    }
    function $(t) {
      var n = v.snapshot.streamGeneration;
      R !== n &&
        ((R = n),
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [MicInputState] subscriber threw",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("voip-mic-input-subscriber-threw"));
    }
    function P(e) {
      if (
        (S != null && (self.clearTimeout(S), (S = null)),
        !(v.snapshot.isLevelStale || v.lastLevelAt == null))
      ) {
        var t = Math.max(0, v.lastLevelAt + d - e);
        S = self.setTimeout(function () {
          ((S = null), x({ type: "level-stale" }));
        }, t);
      }
    }
    function N() {
      (S != null && (self.clearTimeout(S), (S = null)),
        (v = b()),
        y.clear(),
        (R = null));
    }
    function M(e) {
      return w(v, e);
    }
    function w(e, t) {
      return e.lastLevelAt == null || t - e.lastLevelAt >= d;
    }
    function A(e, t, n) {
      return (function (t) {
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "capture-started" &&
          "reason" in t
        ) {
          var r = t.reason;
          return {
            snapshot: babelHelpers.extends({}, e.snapshot, {
              status: "active",
              failureReason: null,
              level: 0,
              isLevelStale: !0,
              levelFreshSinceAt: null,
              hasCredibleSignal: !1,
              lastCredibleSignalAt: null,
              streamGeneration: e.snapshot.streamGeneration + 1,
              streamChangeReason: r,
              streamStartedAt: n,
            }),
            consecutiveCredibleWindows: 0,
            lastLevelAt: null,
            smoothedLevel: 0,
          };
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "capture-switching"
        )
          return q(e);
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "capture-stopped"
        )
          return F(e);
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "level" &&
          "rmsDbfs" in t
        ) {
          var o = t.rmsDbfs;
          return V(e, o, n);
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "level-stale"
        )
          return B(e);
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "input-unavailable" &&
          "reason" in t
        ) {
          var a = t.reason;
          return O(e, a);
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "input-recovered"
        )
          return U(e);
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "native-silence"
        )
          return W(e);
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      })(t);
    }
    function F(e) {
      return e.snapshot.status === "inactive"
        ? e
        : {
            snapshot: babelHelpers.extends({}, C(), {
              streamGeneration: e.snapshot.streamGeneration,
              nativeSilenceCount: e.snapshot.nativeSilenceCount,
            }),
            consecutiveCredibleWindows: 0,
            lastLevelAt: null,
            smoothedLevel: 0,
          };
    }
    function O(e, t) {
      return e.snapshot.status === "inactive" ||
        (e.snapshot.status === "unavailable" && e.snapshot.failureReason === t)
        ? e
        : {
            snapshot: babelHelpers.extends({}, e.snapshot, {
              status: "unavailable",
              failureReason: t,
              level: 0,
              hasCredibleSignal: !1,
            }),
            consecutiveCredibleWindows: 0,
            lastLevelAt: e.lastLevelAt,
            smoothedLevel: 0,
          };
    }
    function B(e) {
      return e.snapshot.isLevelStale
        ? e
        : babelHelpers.extends({}, e, {
            consecutiveCredibleWindows: 0,
            snapshot: babelHelpers.extends({}, e.snapshot, {
              isLevelStale: !0,
              levelFreshSinceAt: null,
              level: 0,
              hasCredibleSignal: !1,
            }),
            smoothedLevel: 0,
          });
    }
    function W(e) {
      return e.snapshot.status === "inactive"
        ? e
        : babelHelpers.extends({}, e, {
            snapshot: babelHelpers.extends({}, e.snapshot, {
              nativeSilenceCount: e.snapshot.nativeSilenceCount + 1,
            }),
          });
    }
    function q(e) {
      return e.snapshot.status === "inactive" ||
        e.snapshot.status === "switching"
        ? e
        : {
            snapshot: babelHelpers.extends({}, e.snapshot, {
              status: "switching",
              failureReason: null,
              level: 0,
              hasCredibleSignal: !1,
            }),
            consecutiveCredibleWindows: 0,
            lastLevelAt: e.lastLevelAt,
            smoothedLevel: 0,
          };
    }
    function U(e) {
      return e.snapshot.status !== "unavailable"
        ? e
        : babelHelpers.extends({}, e, {
            snapshot: babelHelpers.extends({}, e.snapshot, {
              status: "active",
              failureReason: null,
            }),
          });
    }
    function V(e, t, n) {
      var r = e.snapshot;
      if (r.status === "inactive" || r.status === "switching") return e;
      var o = t >= s ? e.consecutiveCredibleWindows + 1 : 0,
        a = o >= u,
        i = h(t, e.smoothedLevel),
        l = H(r, a, i, n);
      return {
        consecutiveCredibleWindows: o,
        lastLevelAt: n,
        smoothedLevel: i,
        snapshot: j(r, l) ? r : l,
      };
    }
    function H(e, t, n, r) {
      var o = t && e.status === "unavailable",
        a = e.status === "unavailable" && !o;
      return babelHelpers.extends({}, e, {
        status: o ? "active" : e.status,
        failureReason: o ? null : e.failureReason,
        level: a ? 0 : G(n),
        isLevelStale: !1,
        levelFreshSinceAt: e.isLevelStale ? r : e.levelFreshSinceAt,
        hasCredibleSignal: t,
        lastCredibleSignalAt: z(e.lastCredibleSignalAt, t, r),
      });
    }
    function G(e) {
      return Math.round(e * g) / g;
    }
    function z(e, t, n) {
      return t && (e == null || n - e >= m) ? n : e;
    }
    function j(e, t) {
      return (
        e.status === t.status &&
        e.failureReason === t.failureReason &&
        e.level === t.level &&
        e.isLevelStale === t.isLevelStale &&
        e.levelFreshSinceAt === t.levelFreshSinceAt &&
        e.hasCredibleSignal === t.hasCredibleSignal &&
        e.lastCredibleSignalAt === t.lastCredibleSignalAt
      );
    }
    function K(e) {
      return Number.isFinite(e)
        ? Math.max(0, Math.min(1, (e - p) / (_ - p)))
        : 0;
    }
    ((l.CREDIBLE_SIGNAL_THRESHOLD_DBFS = s),
      (l.CREDIBLE_SIGNAL_WINDOWS = u),
      (l.LEVEL_REPORT_INTERVAL_MS = c),
      (l.LEVEL_STALE_AFTER_MS = d),
      (l.computeSmoothedVisualLevel = h),
      (l.createInitialMicrophoneInputReducerState = b),
      (l.getMicrophoneInputSnapshot = L),
      (l.getMicrophoneInputNow = E),
      (l.getMicrophoneInputLevel = k),
      (l.getMicrophoneInputStatus = I),
      (l.getMicrophoneInputHasCredibleSignal = T),
      (l.subscribeToMicrophoneInput = D),
      (l.dispatchMicrophoneInputEvent = x),
      (l.resetMicrophoneInputStateForTesting = N),
      (l.isMicrophoneLevelStale = M),
      (l.isReducerLevelStale = w),
      (l.reduceMicrophoneInputState = A),
      (l.quantizeLevel = G));
  },
  98,
);
