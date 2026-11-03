__d(
  "FRXScreenTransitionQPL",
  ["Promise", "QuickPerformanceLogger", "qpl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = r("qpl")._(20974543, "3514"),
      c = 1,
      d = null,
      m = 0,
      p = null,
      _ = null,
      f = null,
      g = null,
      h = null,
      y = null;
    function C(e, t) {
      if (e == null) return null;
      try {
        var n,
          r = (n = JSON.parse(e)) == null ? void 0 : n[t];
        return typeof r == "string" ? r : null;
      } catch (e) {
        return null;
      }
    }
    function b(e) {
      var t = {},
        n = C(e, "reporting_ufo_key");
      n != null && (t.ufo_key = n);
      var r = C(e, "frx_flow_type");
      return (r != null && (t.frx_flow_type = r), t);
    }
    function v(e, t, n) {
      (t === void 0 && (t = null), n === void 0 && (n = null), O(), m++);
      var o = m;
      return (
        (d = o),
        (_ = t),
        (f = n),
        (s || (s = r("QuickPerformanceLogger"))).markerStart(u, c),
        s.markerAnnotate(
          u,
          { string: babelHelpers.extends({}, e, { system: "Comet" }) },
          { instanceKey: c },
        ),
        o
      );
    }
    function S(e, t) {
      var n,
        r = v(
          babelHelpers.extends(
            {
              flow_category:
                (n = t == null ? void 0 : t.flowCategory) != null ? n : "frx",
              screen_name: e,
            },
            b(t == null ? void 0 : t.context),
          ),
          t == null ? void 0 : t.screenDepth,
          t == null ? void 0 : t.screenStack,
        );
      return ((y = r), r);
    }
    function R(e, t) {
      F();
      var n = v(
        babelHelpers.extends(
          { flow_category: "frx", transition_type: "flow_open" },
          e != null ? { ufo_key: e } : {},
        ),
      );
      ((p = n),
        t == null ||
          t.load().catch(function () {
            d === n && E("load_error", "dialog_code");
          }));
    }
    function L(e) {
      return (R(null, e), !0);
    }
    function E(e, t) {
      d != null &&
        ((d = null),
        (s || (s = r("QuickPerformanceLogger"))).markerAnnotate(
          u,
          { string: { failure_reason: t, outcome: e } },
          { instanceKey: c },
        ),
        s.markerEnd(u, 3, c));
    }
    function k(e) {
      d == null || d !== p || E("error_screen", e);
    }
    function I(e, t, n) {
      var r;
      (v(
        babelHelpers.extends(
          {
            flow_category:
              (r = n == null ? void 0 : n.flowCategory) != null ? r : "frx",
            link_type: t,
            screen_name: e,
            transition_type: "external_link",
          },
          b(n == null ? void 0 : n.context),
        ),
      ),
        M());
    }
    function T() {
      ((d = null),
        (s || (s = r("QuickPerformanceLogger"))).markerAnnotate(
          u,
          { string: { outcome: "flow_closed" } },
          { instanceKey: c },
        ),
        s.markerEnd(u, 2, c));
    }
    function D(t) {
      if (t === d) {
        if (((y = null), h === t)) {
          T();
          return;
        }
        ((s || (s = r("QuickPerformanceLogger"))).markerPoint(u, "response", {
          instanceKey: c,
        }),
          (g = t),
          (e || (e = n("Promise"))).resolve().then(function () {
            g === t && (g = null);
          }));
      }
    }
    function x() {
      d != null && T();
    }
    function $() {
      var t = d;
      if (t != null) {
        if (g === t) {
          T();
          return;
        }
        ((h = t),
          (e || (e = n("Promise"))).resolve().then(function () {
            h === t && ((h = null), d === t && O());
          }));
      }
    }
    var P = 0;
    function N() {
      return (
        P++,
        function () {
          (P--,
            (e || (e = n("Promise"))).resolve().then(function () {
              P === 0 && $();
            }));
        }
      );
    }
    function M(e, t) {
      if (d != null) {
        if (_ != null && e != null && f === t) {
          if (e < _) {
            O();
            return;
          }
          if (e === _) return;
        }
        y !== d &&
          ((d = null),
          (s || (s = r("QuickPerformanceLogger"))).markerEnd(u, 2, c));
      }
    }
    function w(e, t) {
      e === d &&
        ((d = null),
        (s || (s = r("QuickPerformanceLogger"))).markerAnnotate(
          u,
          { string: { failure_reason: t.name, outcome: "nav_failure" } },
          { instanceKey: c },
        ),
        s.markerEnd(u, 3, c));
    }
    function A(e) {
      E("render_error", e.name);
    }
    function F() {
      d != null &&
        ((d = null), (s || (s = r("QuickPerformanceLogger"))).markerDrop(u, c));
    }
    function O() {
      d != null &&
        ((d = null),
        (s || (s = r("QuickPerformanceLogger"))).markerEnd(u, 4, c));
    }
    ((l.startScreenTransition = S),
      (l.startFlowOpenTransition = R),
      (l.startFRXReportOpen = L),
      (l.failActiveScreenTransition = E),
      (l.failFlowOpenTransition = k),
      (l.logExternalLinkOpen = I),
      (l.markScreenTransitionResponse = D),
      (l.endScreenTransitionFlowClosed = x),
      (l.closeScreenTransition = $),
      (l.trackFRXDialogMount = N),
      (l.endScreenTransition = M),
      (l.failScreenTransition = w),
      (l.failScreenTransitionOnRenderError = A),
      (l.dropScreenTransition = F),
      (l.cancelScreenTransition = O));
  },
  98,
);
