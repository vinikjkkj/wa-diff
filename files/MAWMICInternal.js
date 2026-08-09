__d(
  "MAWMICInternal",
  [
    "HiddenTabDataUtils",
    "IGDWebUtils",
    "MAWCurrentUser",
    "MAWMICSchema",
    "MWQPLJoinId",
    "MultipleTabsLogger",
    "QPLUserFlow",
    "QuickPerformanceLogger",
    "WAGetStorageQplAnnotations",
    "asyncToGeneratorRuntime",
    "err",
    "getSafeQplErrorMessage",
    "pageID",
    "performanceNavigationStart",
    "performanceNow",
    "qpl",
    "shouldUseMAWSharedWorker",
    "waitForMAWMIC",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c() {
      if (
        typeof self == "object" &&
        self != null &&
        "LockManager" in self &&
        "navigator" in self
      ) {
        var e = self.LockManager,
          t = self.navigator;
        if (typeof t == "object" && t != null && "locks" in t && e != null)
          return t.locks instanceof e;
      }
      return !1;
    }
    var d = !1,
      m = !1,
      p = "unknown",
      _ = !1,
      f = new Set(),
      g = new Map(),
      h = new Map(),
      y = new Set([
        (u = o("MAWMICSchema")).POINTS.ls_init_end,
        u.POINTS.maw_init_end,
        u.POINTS.process_offline_queue_end,
        u.POINTS.thread_mapping_end,
      ]);
    function C() {
      return y;
    }
    o("IGDWebUtils").isOnInstagramWeb() &&
      y.delete(o("MAWMICSchema").POINTS.thread_mapping_end);
    function b() {
      (A("workerAlreadySetup", !0),
        y.delete(o("MAWMICSchema").POINTS.process_offline_queue_end));
    }
    var v = {
      download_offline_queue_end: "download_offline_queue_start",
      process_offline_queue_end: "process_offline_queue_start",
    };
    function S(t) {
      ((m = !0), (p = t), q());
      var n = o("HiddenTabDataUtils").getHiddenTabDataForTimeInterval(
        0,
        (e || (e = r("performanceNow")))(),
      );
      (A("isHidden", n.isHidden()), F("totalHiddenTime", n.totalHiddenTime()));
      var a = n.firstTimeHidden();
      a != null && F("firstTimeHidden", a);
      var i = n.lastTimeHidden();
      i != null && F("lastTimeHidden", i);
    }
    function R() {
      return !m;
    }
    function L() {
      return p;
    }
    function E(e, t) {
      m ||
        !d ||
        (S("Cancel: " + e),
        t &&
          r("QPLUserFlow").markError(
            r("qpl")._(1056839232, "112"),
            "maw_ttrc_cancel_with_error",
            { error: t },
          ),
        r("QPLUserFlow").endCancel(r("qpl")._(1056839232, "112"), {
          annotations: { string: { cancelReason: e } },
        }),
        r("QPLUserFlow").addAnnotations(r("qpl")._(29818881, "6702"), {
          string: {
            maw_cancel_reason: e,
            maw_error_message: t == null ? void 0 : t.message,
          },
        }));
    }
    function k(e, t) {
      m ||
        (S("Fail: " + e),
        o("waitForMAWMIC").resolvable.reject(
          r("err")(
            "MAWMIC Failed. Error: " +
              ((t == null ? void 0 : t.message) || "") +
              ". Reason: " +
              e,
          ),
        ),
        B("errorDescription", (t == null ? void 0 : t.message) || ""),
        B("failReason", e),
        r("QPLUserFlow").endFailure(r("qpl")._(1056839232, "112"), e, {
          error: t,
        }),
        r("QPLUserFlow").addAnnotations(r("qpl")._(29818881, "6702"), {
          string: {
            maw_error_message: t == null ? void 0 : t.message,
            maw_fail_reason: e,
          },
        }));
    }
    function I(e) {
      m ||
        (S("Drop: " + e),
        o("waitForMAWMIC").resolvable.reject(
          r("err")("MAWMIC dropped due to: " + e),
        ),
        B("dropReason", e),
        (s || (s = r("QuickPerformanceLogger"))).markerDrop(
          r("qpl")._(1056839232, "112"),
        ));
    }
    function T(e, t) {
      d
        ? M(e, t)
        : g.has(e) ||
          g.set(
            e,
            t != null
              ? t
              : (s || (s = r("QuickPerformanceLogger"))).currentTimestamp(),
          );
    }
    var D = T;
    function x() {
      (h.forEach(function (e, t) {
        e === !0 || e === !1
          ? A(t, e)
          : Number.isInteger(e)
            ? F(t, Number(e))
            : B(t, String(e));
      }),
        h.clear());
    }
    function $() {
      (g.forEach(function (e, t) {
        return M(t, e);
      }),
        g.clear());
    }
    var P = function () {
      return document.visibilityState !== void 0
        ? document.visibilityState === "hidden"
        : document.hidden;
    };
    function N() {
      if (d) {
        _ || q();
        return;
      }
      var e = r("qpl")._(1056839232, "112");
      (r("QPLUserFlow").startFromNavStart(e, {
        annotations: {
          bool: {
            isInitiallyHidden: P(),
            isTlcPublicUser: o("MAWCurrentUser").isTlcPublicUser(),
            native_locks_supported: c(),
            useSharedWorker: o(
              "shouldUseMAWSharedWorker",
            ).shouldUseMAWSharedWorker(),
          },
          int: {
            timeNavStart: r("performanceNavigationStart")(),
            timeNow: Date.now(),
          },
          string: { hostname: window.location.hostname, pageID: r("pageID") },
        },
        joinOptions: o("MWQPLJoinId").allowJoinId
          ? { joinId: o("MWQPLJoinId").MWQPLJoinId }
          : void 0,
        onFlowTimeout__doNOTUSE: function () {
          return S("Timeout: flow timeout");
        },
      }),
        q(),
        o("MultipleTabsLogger").addAnnotationToQPLEvent(e),
        (d = !0),
        (p = "flow_not_ended_yet"),
        $(),
        x());
    }
    function M(e, t) {
      if (!m) {
        (f.add(e), y.delete(e));
        var n = t != null ? { timestamp: t } : void 0,
          o = v[e];
        (o != null &&
          !f.has(o) &&
          r("QPLUserFlow").addPoint(r("qpl")._(1056839232, "112"), o, n),
          r("QPLUserFlow").addPoint(r("qpl")._(1056839232, "112"), e, n),
          y.size === 0 && w());
      }
    }
    function w() {
      (S("Success: flow success"),
        o("waitForMAWMIC").resolvable.resolve(),
        r("QPLUserFlow").endSuccess(r("qpl")._(1056839232, "112")));
    }
    function A(e, t) {
      var n;
      if (!d) {
        h.set(e, t);
        return;
      }
      r("QPLUserFlow").addAnnotations(r("qpl")._(1056839232, "112"), {
        bool: ((n = {}), (n[e] = t), n),
      });
    }
    function F(e, t) {
      var n;
      if (!d) {
        h.set(e, t);
        return;
      }
      r("QPLUserFlow").addAnnotations(r("qpl")._(1056839232, "112"), {
        int: ((n = {}), (n[e] = t), n),
      });
    }
    function O(e, t) {
      var n;
      if (!d) {
        h.set(e, t);
        return;
      }
      r("QPLUserFlow").addAnnotations(r("qpl")._(1056839232, "112"), {
        int_array: ((n = {}), (n[e] = t), n),
      });
    }
    function B(e, t) {
      var n;
      if (!d) {
        h.set(e, t);
        return;
      }
      r("QPLUserFlow").addAnnotations(r("qpl")._(1056839232, "112"), {
        string: ((n = {}), (n[e] = t), n),
      });
    }
    function W(e, t) {
      var n;
      if (!d) {
        h.set(e, t);
        return;
      }
      r("QPLUserFlow").addAnnotations(r("qpl")._(1056839232, "112"), {
        string_array: ((n = {}), (n[e] = t), n),
      });
    }
    function q() {
      typeof navigator != "undefined" &&
        (o("WAGetStorageQplAnnotations")
          .getStorageQplAnnotations()
          .then(function (e) {
            return r("QPLUserFlow").addAnnotations(
              r("qpl")._(1056839232, "112"),
              babelHelpers.extends({}, e),
            );
          }),
        (_ = !0));
    }
    function U() {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (!o("waitForMAWMIC").resolvable.isSettled) return "pending";
          try {
            return (yield o("waitForMAWMIC").resolvable.promise, "success");
          } catch (e) {
            return (
              "failure_" + o("getSafeQplErrorMessage").getSafeQPLErrorMessage(e)
            );
          }
        })),
        V.apply(this, arguments)
      );
    }
    ((l.getRemainingRequiredEvents = C),
      (l.onConnectToExistingWorker = b),
      (l.duringMIC = R),
      (l.endReasonMIC = L),
      (l.cancel = E),
      (l.fail = k),
      (l.drop = I),
      (l.addPoint = T),
      (l.addPointOnce = D),
      (l.startMAWMICFlow = N),
      (l.addBoolAnnotation = A),
      (l.addIntAnnotation = F),
      (l.addIntArrayAnnotation = O),
      (l.addStringAnnotation = B),
      (l.addStringArrayAnnotation = W),
      (l.getState = U));
  },
  98,
);
