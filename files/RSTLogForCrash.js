__d(
  "RSTLogForCrash",
  [
    "$InternalEnum",
    "Deferred",
    "FBLogger",
    "getErrorSafe",
    "logForCrash",
    "logForCrashUtils",
    "nextCrashLoggingSpanId",
    "requireWeak",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = new (r("Deferred"))();
    d();
    function d() {
      var t = function () {
        e && s && u && c.resolve();
      };
      try {
        (r("requireWeak")("ResponsiveTrackerMainThread", function (n) {
          ((e = n), t());
        }),
          r("requireWeak")(
            "RSTExternalLoggingDataStoreMainThread",
            function (e) {
              ((s = e == null ? void 0 : e.loggingDataStore), t());
            },
          ),
          r("requireWeak")("RSTEvents", function (e) {
            ((u = e == null ? void 0 : e.RSTEvent), t());
          }));
      } catch (e) {
        r("FBLogger")("responsive-tracker")
          .catching(r("getErrorSafe")(e))
          .warn("Failed to load RST dependencies in RSTLogForCrash");
      }
    }
    var m = n("$InternalEnum")({
      VALID_UNTIL_NEXT_HEARTBEAT: 0,
      VALID_UNTIL_NEXT_WRITE: 1,
      VALID_FOR_5_SECONDS: 2,
      VALID_FOR_2_MINUTES: 3,
    });
    function p(t) {
      if (e == null) return null;
      switch (t) {
        case m.VALID_UNTIL_NEXT_HEARTBEAT:
          return null;
        case m.VALID_UNTIL_NEXT_WRITE:
          return null;
        case m.VALID_FOR_5_SECONDS:
          return Date.now() + 5 * 1e3;
        case m.VALID_FOR_2_MINUTES:
          return Date.now() + 120 * 1e3;
      }
      return null;
    }
    var _ = 0,
      f = 500;
    function g(t, n, a, i) {
      var l;
      if (
        (a === void 0 && (a = m.VALID_UNTIL_NEXT_HEARTBEAT),
        i === void 0 && (i = {}),
        a !== m.VALID_UNTIL_NEXT_HEARTBEAT && i.logForNativeReports !== !1)
      ) {
        var c = { isSystem: i.isSystem, isJSStackTrace: i.isJSStackTrace };
        (o("logForCrash").logForCrash(t, n, c),
          a === m.VALID_FOR_5_SECONDS
            ? window.setTimeout(function () {
                return o("logForCrash").clearCrashLog(t, c);
              }, 5e3)
            : a === m.VALID_FOR_2_MINUTES &&
              window.setTimeout(function () {
                return o("logForCrash").clearCrashLog(t, c);
              }, 120 * 1e3));
      }
      if (e != null) {
        var d = typeof n == "object" ? y(n) : n.toString();
        if (d != null) {
          var p =
            i.isJSStackTrace === !0
              ? r("logForCrashUtils").RST_JS_STACK_KEY_PREFIX + ":" + t
              : t;
          (l = s) == null || l.log(p, d, a);
          var g = Date.now();
          if (!(i.immediateFlush !== !0 || g - _ < f) && ((_ = g), u != null)) {
            var h;
            (h = e) == null || h.postEventLightweight(u.LOG_FLUSH);
          }
        }
      }
    }
    function h(e) {
      var t, n;
      return (t = (n = s) == null ? void 0 : n.isValidValue(e)) != null
        ? t
        : !1;
    }
    function y(e) {
      try {
        return JSON.stringify(e);
      } catch (e) {
        return (
          r("FBLogger")("responsive-tracker").mustfix(
            "Failed to stringify object for RST logging",
          ),
          null
        );
      }
    }
    var C = new Map(),
      b = new Map(),
      v = new Map();
    function S(t, n, r) {
      var a;
      r === void 0 && (r = {});
      var i = e != null,
        l = (a = r.logForNativeReports) != null ? a : !0;
      if (!i && !l) return -1;
      try {
        var u, c, d;
        if (b.has(t)) {
          var m = b.get(t);
          if (m != null) {
            if (i) {
              var p;
              (p = s) == null || p.logSpanEnd(m);
            }
            (C.delete(m), v.delete(m));
          }
          b.delete(t);
        }
        var _ =
            i && (u = (c = s) == null ? void 0 : c.logSpanStart(t, n)) != null
              ? u
              : -1,
          f = (d = r.isSystem) != null ? d : !1;
        if (l) {
          _ === -1 &&
            (_ = o("nextCrashLoggingSpanId").nextCrashLoggingSpanId());
          var g = "span:" + t;
          o("logForCrash").logForCrash(g, n, { isSystem: f });
        }
        return (_ !== -1 && (C.set(_, t), v.set(_, r), b.set(t, _)), _);
      } catch (e) {
        return -1;
      }
    }
    function R(t) {
      var n = e != null && t !== -1,
        r = t !== -1;
      if (!(!n && !r)) {
        var a = C.get(t);
        try {
          var i;
          if (n) {
            var l;
            (l = s) == null || l.logSpanEnd(t);
          }
          if (a == null) return;
          var u = (i = v.get(t)) != null ? i : {};
          if (r) {
            var c,
              d = (c = u.isSystem) != null ? c : !1,
              m = "span:" + a;
            o("logForCrash").clearCrashLog(m, { isSystem: d });
          }
        } finally {
          (a != null && b.delete(a), C.delete(t), v.delete(t));
        }
      }
    }
    function L(t) {
      var n = b.has(t),
        r = e != null && n,
        a = n;
      if (!(!r && !a)) {
        var i = b.get(t),
          l = {};
        try {
          if (i != null) {
            var u;
            if (((l = (u = v.get(i)) != null ? u : {}), r)) {
              var c;
              (c = s) == null || c.logSpanEnd(i);
            }
          }
          if (a) {
            var d,
              m = (d = l.isSystem) != null ? d : !1,
              p = "span:" + t;
            o("logForCrash").clearCrashLog(p, { isSystem: m });
          }
        } finally {
          (i != null && (C.delete(i), v.delete(i)), b.delete(t));
        }
      }
    }
    var E = 1e3,
      k = 100,
      I = new Map();
    function T(e, t) {
      if (!I.has(e)) {
        if (I.size >= E) return;
        I.set(e, new Set());
      }
      var n = I.get(e);
      if (!(n == null || n.size > k)) {
        n == null || n.add(t);
        var r = Array.from(n).sort(),
          o = "collection:" + e;
        g(o, JSON.stringify(r), m.VALID_UNTIL_NEXT_WRITE, { isSystem: !0 });
      }
    }
    ((l.logForCrashReadyPromise = c),
      (l.RSTLogMode = m),
      (l.getExpirationTime = p),
      (l.logForCrash = g),
      (l.isValidStringValue = h),
      (l.logSpanStart = S),
      (l.logSpanEnd = R),
      (l.logSpanEndForKey = L),
      (l.logElementInCollectionForCrash = T));
  },
  98,
);
