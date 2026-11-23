__d(
  "MAIBAWorkspaceCanvasRenderedLifecycleContext",
  [
    "MAIBAObservabilityUtils",
    "MAIBAWorkspaceCanvasLifecycleLogger",
    "MAIBAWorkspaceCanvasOpenTiming",
    "clearTimeout",
    "guid",
    "performanceNow",
    "react",
    "setTimeout",
    "useMAIBAIGCanvasLogger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.createContext,
      m = c.useCallback,
      p = c.useContext,
      _ = c.useEffect,
      f = c.useEffectEvent,
      g = c.useLayoutEffect,
      h = c.useMemo,
      y = c.useRef,
      C = c.useState,
      b = {
        logIGCanvasTap: function () {},
        logIGCanvasView: null,
        startIGCanvasOperation: function () {
          return function () {};
        },
        markCanvasFailed: function () {},
        markCanvasRendered: function () {},
        markCanvasSectionFailed: function () {},
      },
      v = d(b);
    function S(e, t, n, r, o) {
      var a = {};
      return (
        o != null &&
          (a.canvas_section = o === "budget_schedule" ? "budget_duration" : o),
        t != null && (a.conversation_id = t),
        e != null && (a.canvas_request_id = e),
        n != null && (a.canvas_workspace_id = n),
        r != null && (a.canvas_workspace_version = r.toString(10)),
        a
      );
    }
    function R(t) {
      var n = t.botResponseId,
        a = t.children,
        i = t.conversationId,
        l = t.isCanvasOpen,
        s = t.product,
        c = t.workspaceInstanceId,
        d = t.workspaceType,
        p = t.workspaceVersion,
        f = r("useMAIBAIGCanvasLogger")(s, i),
        C = m(
          function (e) {
            return S(n, i, c, p, e);
          },
          [n, i, c, p],
        ),
        b = m(
          function (e, t) {
            f == null ||
              f.logActionError(
                "maiba_canvas_render",
                e,
                "Canvas content could not render",
                "maiba_canvas_editor",
                void 0,
                C(t),
              );
          },
          [C, f],
        ),
        R = JSON.stringify([
          n != null ? n : "",
          i != null ? i : "",
          c != null ? c : "",
          d != null ? d : "",
          p != null ? p : null,
        ]),
        L = y(R),
        E = y(l),
        k = m(
          function (e, t) {
            !l ||
              !E.current ||
              f == null ||
              f.logTapComponent(e, "maiba_canvas_editor", void 0, C(t));
          },
          [C, f, l],
        ),
        I = m(
          function (t, n, o) {
            if (f == null || !l || !E.current) return function () {};
            var a = C(n != null ? n : void 0),
              i = r("guid")(),
              s = (e || (e = r("performanceNow")))(),
              u = !1,
              c = function (l) {
                var n = babelHelpers.extends({}, a, {
                  canvas_attempt_id: i,
                  canvas_duration_ms: Math.max(
                    0,
                    Math.round((e || (e = r("performanceNow")))() - s),
                  ).toString(10),
                  canvas_is_silent: "false",
                  canvas_outcome: l,
                  canvas_refresh_source: o,
                });
                e: {
                  if (l === "started") {
                    f.logStartStepSuccess("maiba_canvas_editor", void 0, n);
                    break e;
                  }
                  if (l === "failure" || l === "timeout") {
                    (f.logActionError(
                      t,
                      "canvas_operation_" + l,
                      "Canvas operation did not complete",
                      "maiba_canvas_editor",
                      void 0,
                      n,
                    ),
                      f.logFinishStepError(
                        "Canvas operation did not complete",
                        "maiba_canvas_editor",
                        void 0,
                        n,
                      ));
                    break e;
                  }
                  if (l === "cancelled" || l === "superseded") {
                    f.logCancel("maiba_canvas_editor", void 0, n);
                    break e;
                  }
                  if (l === "success" || l === "acknowledged" || l === "noop") {
                    (l !== "noop" &&
                      f.logActionSuccess(
                        t,
                        "maiba_canvas_editor",
                        void 0,
                        void 0,
                        n,
                      ),
                      f.logFinishStepSuccess(
                        "maiba_canvas_editor",
                        void 0,
                        void 0,
                        n,
                      ));
                    break e;
                  }
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      l,
                  );
                }
              };
            return (
              c("started"),
              function (e) {
                u || ((u = !0), c(e));
              }
            );
          },
          [C, f, l],
        ),
        T = y(new Set()),
        D = m(
          function (e, t) {
            if (!(f == null || !l || !E.current)) {
              var n = JSON.stringify([R, e, t != null ? t : null]);
              T.current.has(n) ||
                (T.current.add(n),
                f.logViewComponent(e, "maiba_canvas_editor", void 0, C(t)));
            }
          },
          [C, f, l, R],
        ),
        x = y(l),
        $ = y(null),
        P = y(new Set()),
        N = y(new Map()),
        M = m(function () {
          for (var e of N.current.values()) r("clearTimeout")(e);
          N.current.clear();
        }, []),
        w = m(
          function (e) {
            if (!(!l || !E.current)) {
              var t = R + ":" + e;
              P.current.has(t) ||
                (P.current.add(t),
                b(e),
                o(
                  "MAIBAWorkspaceCanvasOpenTiming",
                ).completeMAIBACanvasOpenTiming(
                  i,
                  {
                    request_id: n,
                    version: p,
                    workspace_id: c,
                    workspace_type: d,
                  },
                  "failure",
                ),
                o("MAIBAObservabilityUtils").failMAIBAWorkspaceLoadInteraction(
                  e,
                ),
                o(
                  "MAIBAWorkspaceCanvasLifecycleLogger",
                ).logMAIBAWorkspaceCanvasLifecycle({
                  botResponseId: n,
                  conversationId: i,
                  outcome: "error",
                  product: s,
                  reason: e,
                  stage: "canvas_failed",
                  surface: "workspace_canvas",
                  workspaceInstanceId: c,
                  workspaceType: d,
                  workspaceVersion: p,
                }));
            }
          },
          [n, i, l, b, s, R, c, d, p],
        ),
        A = m(
          function () {
            !l ||
              !E.current ||
              $.current === R ||
              (($.current = R),
              M(),
              o("MAIBAObservabilityUtils").addMAIBAWorkspaceLoadMarkerPoint(
                "first_section_committed",
              ),
              o(
                "MAIBAWorkspaceCanvasLifecycleLogger",
              ).logMAIBAWorkspaceCanvasLifecycle({
                botResponseId: n,
                conversationId: i,
                outcome: "success",
                product: s,
                reason: "first_section_committed",
                stage: "canvas_rendered",
                surface: "workspace_canvas",
                workspaceInstanceId: c,
                workspaceType: d,
                workspaceVersion: p,
              }));
          },
          [n, M, i, l, s, R, c, d, p],
        ),
        F = m(
          function (e, t) {
            if (!(!l || !E.current)) {
              if (t != null) {
                var n = "section:" + R + ":" + t;
                P.current.has(n) ||
                  (P.current.add(n), b("canvas_card_render_crash", t));
              }
              var o = R + ":" + e;
              if (!($.current === R || P.current.has(o) || N.current.has(o))) {
                var a = r("setTimeout")(function () {
                  (N.current.delete(o),
                    L.current === R && $.current !== R && w(e));
                }, 0);
                N.current.set(o, a);
              }
            }
          },
          [l, b, w, R],
        );
      (g(
        function () {
          var e = x.current;
          ((L.current = R),
            (E.current = l),
            (x.current = l),
            l
              ? e ||
                (($.current = null), P.current.clear(), T.current.clear(), M())
              : M());
        },
        [M, l, R],
      ),
        _(
          function () {
            return M;
          },
          [M],
        ));
      var O = h(
        function () {
          return {
            logIGCanvasTap: k,
            logIGCanvasView: f != null && l ? D : null,
            startIGCanvasOperation: I,
            markCanvasFailed: w,
            markCanvasRendered: A,
            markCanvasSectionFailed: F,
          };
        },
        [f, l, k, D, w, A, F, I],
      );
      return u.jsx(v.Provider, { value: O, children: a });
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L() {
      return p(v).logIGCanvasView;
    }
    function E() {
      return p(v).logIGCanvasTap;
    }
    function k() {
      return p(v).markCanvasRendered;
    }
    function I() {
      return p(v).markCanvasFailed;
    }
    function T() {
      return p(v).markCanvasSectionFailed;
    }
    function D(e, t, n, o) {
      var a = C(null),
        i = a[0],
        l = a[1],
        s = y(null),
        u = f(o);
      return (
        _(
          function () {
            if (!(!t || s.current === n)) {
              var o = r("setTimeout")(function () {
                ((s.current = n), l(n), u());
              }, e);
              return function () {
                r("clearTimeout")(o);
              };
            }
          },
          [e, t, n],
        ),
        t && i === n
      );
    }
    function x(e) {
      var t = e.reason,
        n = I();
      return (
        _(
          function () {
            n(t);
          },
          [n, t],
        ),
        null
      );
    }
    x.displayName = x.name + " [from " + i.id + "]";
    function $() {
      return p(v).startIGCanvasOperation;
    }
    ((l.MAIBAWorkspaceCanvasRenderedLifecycleProvider = R),
      (l.useMAIBAIGCanvasViewLogger = L),
      (l.useMAIBAIGCanvasTapLogger = E),
      (l.useMarkMAIBAWorkspaceCanvasRendered = k),
      (l.useMarkMAIBAWorkspaceCanvasFailed = I),
      (l.useMarkMAIBAWorkspaceCanvasSectionFailed = T),
      (l.useMAIBAWorkspaceCanvasLifecycleFailureDetection = D),
      (l.MAIBAWorkspaceCanvasFailureBeacon = x),
      (l.useMAIBAIGCanvasOperationLogger = $));
  },
  98,
);
