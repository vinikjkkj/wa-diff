__d(
  "MAWInit",
  [
    "MAWCurrentUser",
    "MAWInitError",
    "MAWMIC",
    "MWQPLJoinId",
    "MultipleTabsLogger",
    "QPLUserFlow",
    "QuickPerformanceLogger",
    "WAGetStorageQplAnnotations",
    "asyncToGeneratorRuntime",
    "gkx",
    "qpl",
    "shouldUseMAWSharedWorker",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("qpl")._(25310776, "6155"),
      u = !1,
      c = [],
      d = [],
      m = !1;
    function p() {
      m ||
        ((m = !0),
        r("QPLUserFlow").addAnnotations(s, {
          bool: {
            armadillo_init_sync_api_improvements: r("gkx")("24025"),
            isTlcPublicUser: o("MAWCurrentUser").isTlcPublicUser(),
            useSharedWorker: o(
              "shouldUseMAWSharedWorker",
            ).shouldUseMAWSharedWorker(),
          },
        }));
    }
    var _ = !1,
      f = function () {
        return document.visibilityState !== void 0
          ? document.visibilityState === "hidden"
          : document.hidden;
      },
      g = function () {
        y("visibility_change_" + (f() ? "hidden" : "visible"));
      };
    function h() {
      _ ||
        (o("MAWMIC").addPoint("maw_init_start"),
        (_ = !0),
        r("QPLUserFlow").start(
          s,
          babelHelpers.extends(
            {
              annotations: {
                bool: { initiallyHidden: f() },
                string: { hostname: window.location.hostname },
              },
              cancelOnUnload: !0,
            },
            o("MWQPLJoinId").allowJoinId
              ? { joinOptions: { joinId: o("MWQPLJoinId").MWQPLJoinId } }
              : {},
          ),
        ),
        r("QPLUserFlow").addAlignmentPointForJoin(s, 0, {
          requestId: o("MWQPLJoinId").MWQPLJoinId,
        }),
        o("MultipleTabsLogger").addAnnotationToQPLEvent(s),
        o("WAGetStorageQplAnnotations")
          .getStorageQplAnnotations()
          .then(function (e) {
            r("QPLUserFlow").addAnnotations(s, e);
          }),
        p(),
        document.addEventListener("visibilitychange", g),
        c.forEach(function (e) {
          return e();
        }),
        d.forEach(function (e) {
          return e();
        }),
        c.splice(0, c.length),
        d.splice(0, d.length));
    }
    function y(t, n) {
      if (!_ || u) {
        if (!_ && n != null && n.allowEarlyLogPoints) {
          var o = (e || (e = r("QuickPerformanceLogger"))).currentTimestamp();
          d.push(function () {
            r("QPLUserFlow").addPoint(s, t, { timestamp: o });
          });
        }
        return;
      }
      (p(), r("QPLUserFlow").addPoint(s, t));
    }
    function C(e, t, n) {
      var o;
      if (!_ || u) {
        !_ &&
          n != null &&
          n.allowEarlyAnnotations &&
          c.push(function () {
            var n;
            r("QPLUserFlow").addAnnotations(s, {
              bool: ((n = {}), (n[e] = t), n),
            });
          });
        return;
      }
      r("QPLUserFlow").addAnnotations(s, { bool: ((o = {}), (o[e] = t), o) });
    }
    function b(e, t, n) {
      var o;
      if (!_ || u) {
        !_ &&
          n != null &&
          n.allowEarlyAnnotations &&
          c.push(function () {
            var n;
            r("QPLUserFlow").addAnnotations(s, {
              string: ((n = {}), (n[e] = t), n),
            });
          });
        return;
      }
      r("QPLUserFlow").addAnnotations(s, { string: ((o = {}), (o[e] = t), o) });
    }
    function v(e, t, n) {
      var o;
      if (!_ || u) {
        !_ &&
          n != null &&
          n.allowEarlyAnnotations &&
          c.push(function () {
            var n;
            r("QPLUserFlow").addAnnotations(s, {
              string_array: ((n = {}), (n[e] = t), n),
            });
          });
        return;
      }
      r("QPLUserFlow").addAnnotations(s, {
        string_array: ((o = {}), (o[e] = t), o),
      });
    }
    function S(e, t, n) {
      var o;
      if (!_ || u) {
        !_ &&
          n != null &&
          n.allowEarlyAnnotations &&
          c.push(function () {
            var n;
            r("QPLUserFlow").addAnnotations(s, {
              int: ((n = {}), (n[e] = t), n),
            });
          });
        return;
      }
      r("QPLUserFlow").addAnnotations(s, { int: ((o = {}), (o[e] = t), o) });
    }
    function R() {
      (p(),
        (u = !0),
        (m = !1),
        document.removeEventListener("visibilitychange", g));
    }
    function L(e, t) {
      R();
      var n =
        t instanceof o("MAWInitError").MAWInitError && t.error ? t.error : t;
      (r("QPLUserFlow").addAnnotations(s, {
        string: { errorDescription: n == null ? void 0 : n.message },
      }),
        r("QPLUserFlow").endFailure(s, e, { error: n }),
        o("MAWMIC").fail(e, n));
    }
    function E(e, t) {
      (R(),
        r("QPLUserFlow").addAnnotations(s, { string: { cancelReason: e } }),
        t &&
          r("QPLUserFlow").markError(s, "maw_init_cancel_with_error", {
            error: t,
          }),
        r("QPLUserFlow").endCancel(s),
        o("MAWMIC").addStringAnnotation("mawInitCancelReason", e),
        o("MAWMIC").cancel("maw_init_cancel", t),
        r("QPLUserFlow").addAnnotations(r("qpl")._(29818881, "6702"), {
          string: {
            maw_cancel_reason: e,
            maw_error_message: t == null ? void 0 : t.message,
          },
        }));
    }
    function k(t) {
      u ||
        (R(),
        o("MAWMIC").addStringAnnotation("mawInitDropReason", t),
        (e || (e = r("QuickPerformanceLogger"))).markerDrop(s));
    }
    function I() {
      (R(),
        r("QPLUserFlow").endSuccess(s),
        o("MAWMIC").addPoint("maw_init_end"));
    }
    function T(e, t) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e + "_start",
            r = e + "_end";
          y(n);
          var o = yield t();
          return (y(r), o);
        })),
        D.apply(this, arguments)
      );
    }
    var x = {
        isCompleted: function () {
          return u;
        },
      },
      $ = {
        addBoolAnnotation: C,
        addIntAnnotation: S,
        addStringAnnotation: b,
        addStringArrayAnnotation: v,
        cancel: E,
        drop: k,
        endSuccess: I,
        fail: L,
        logPoint: y,
        measurePerformance: T,
        start: h,
      };
    ((l.MAWInitState = x), (l.MAWInit = $));
  },
  98,
);
