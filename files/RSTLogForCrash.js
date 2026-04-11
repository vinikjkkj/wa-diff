__d(
  "RSTLogForCrash",
  [
    "$InternalEnum",
    "Deferred",
    "FBLogger",
    "getErrorSafe",
    "justknobx",
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
    var m = r("justknobx")._("3831"),
      p = n("$InternalEnum")({
        VALID_UNTIL_NEXT_HEARTBEAT: 0,
        VALID_UNTIL_NEXT_WRITE: 1,
        VALID_FOR_5_SECONDS: 2,
        VALID_FOR_2_MINUTES: 3,
      });
    function _(t) {
      if (e == null) return null;
      switch (t) {
        case p.VALID_UNTIL_NEXT_HEARTBEAT:
          return null;
        case p.VALID_UNTIL_NEXT_WRITE:
          return null;
        case p.VALID_FOR_5_SECONDS:
          return Date.now() + 5 * 1e3;
        case p.VALID_FOR_2_MINUTES:
          return Date.now() + 120 * 1e3;
      }
      return null;
    }
    var f = 0,
      g = 500;
    function h(t, n, a, i) {
      var l;
      if (
        (a === void 0 && (a = p.VALID_UNTIL_NEXT_HEARTBEAT),
        i === void 0 && (i = {}),
        a !== p.VALID_UNTIL_NEXT_HEARTBEAT && i.logForNativeReports !== !1)
      ) {
        var c = { isSystem: i.isSystem, isJSStackTrace: i.isJSStackTrace };
        (o("logForCrash").logForCrash(t, n, c),
          a === p.VALID_FOR_5_SECONDS
            ? window.setTimeout(function () {
                return o("logForCrash").clearCrashLog(t, c);
              }, 5e3)
            : a === p.VALID_FOR_2_MINUTES &&
              window.setTimeout(function () {
                return o("logForCrash").clearCrashLog(t, c);
              }, 120 * 1e3));
      }
      if (!(!m || e == null)) {
        var d = typeof n == "object" ? C(n) : n.toString();
        if (d != null) {
          var _ =
            i.isJSStackTrace === !0
              ? r("logForCrashUtils").RST_JS_STACK_KEY_PREFIX + ":" + t
              : t;
          (l = s) == null || l.log(_, d, a);
          var h = Date.now();
          if (!(i.immediateFlush !== !0 || h - f < g) && ((f = h), u != null)) {
            var y;
            (y = e) == null || y.postEventLightweight(u.LOG_FLUSH);
          }
        }
      }
    }
    function y(e) {
      var t, n;
      return (t = (n = s) == null ? void 0 : n.isValidValue(e)) != null
        ? t
        : !1;
    }
    function C(e) {
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
    var b = new Map(),
      v = new Map(),
      S = new Map();
    function R(t, n, r) {
      var a;
      r === void 0 && (r = {});
      var i = m && e != null,
        l = (a = r.logForNativeReports) != null ? a : !0;
      if (!i && !l) return -1;
      try {
        var u, c, d;
        if (v.has(t)) {
          var p = v.get(t);
          if (p != null) {
            if (i) {
              var _;
              (_ = s) == null || _.logSpanEnd(p);
            }
            (b.delete(p), S.delete(p));
          }
          v.delete(t);
        }
        var f =
            i && (u = (c = s) == null ? void 0 : c.logSpanStart(t, n)) != null
              ? u
              : -1,
          g = (d = r.isSystem) != null ? d : !1;
        if (l) {
          f === -1 &&
            (f = o("nextCrashLoggingSpanId").nextCrashLoggingSpanId());
          var h = "span:" + t;
          o("logForCrash").logForCrash(h, n, { isSystem: g });
        }
        return (f !== -1 && (b.set(f, t), S.set(f, r), v.set(t, f)), f);
      } catch (e) {
        return -1;
      }
    }
    function L(t) {
      var n = e != null && t !== -1,
        r = t !== -1;
      if (!(!n && !r)) {
        var a = b.get(t);
        try {
          var i;
          if (n) {
            var l;
            (l = s) == null || l.logSpanEnd(t);
          }
          if (a == null) return;
          var u = (i = S.get(t)) != null ? i : {};
          if (r) {
            var c,
              d = (c = u.isSystem) != null ? c : !1,
              m = "span:" + a;
            o("logForCrash").clearCrashLog(m, { isSystem: d });
          }
        } finally {
          (a != null && v.delete(a), b.delete(t), S.delete(t));
        }
      }
    }
    function E(t) {
      var n = v.has(t),
        r = e != null && n,
        a = n;
      if (!(!r && !a)) {
        var i = v.get(t),
          l = {};
        try {
          if (i != null) {
            var u;
            if (((l = (u = S.get(i)) != null ? u : {}), r)) {
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
          (i != null && (b.delete(i), S.delete(i)), v.delete(t));
        }
      }
    }
    var k = 1e3,
      I = 100,
      T = new Map();
    function D(e, t) {
      if (!T.has(e)) {
        if (T.size >= k) return;
        T.set(e, new Set());
      }
      var n = T.get(e);
      if (!(n == null || n.size > I)) {
        n == null || n.add(t);
        var r = Array.from(n).sort(),
          o = "collection:" + e;
        h(o, JSON.stringify(r), p.VALID_UNTIL_NEXT_WRITE, { isSystem: !0 });
      }
    }
    ((l.logForCrashReadyPromise = c),
      (l.RSTLogMode = p),
      (l.getExpirationTime = _),
      (l.logForCrash = h),
      (l.isValidStringValue = y),
      (l.logSpanStart = R),
      (l.logSpanEnd = L),
      (l.logSpanEndForKey = E),
      (l.logElementInCollectionForCrash = D));
  },
  98,
);
