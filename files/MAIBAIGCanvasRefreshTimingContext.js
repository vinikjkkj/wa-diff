__d(
  "MAIBAIGCanvasRefreshTimingContext",
  [
    "MAIBACanvasChatDispatchStore",
    "MAIBAWorkspaceCanvasOpenTiming",
    "clearTimeout",
    "guid",
    "performanceAbsoluteNow",
    "performanceNow",
    "react",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.createContext,
      p = d.useCallback,
      _ = d.useContext,
      f = d.useLayoutEffect,
      g = d.useRef,
      h = d.useState,
      y = m(null);
    function C(e) {
      var t = e.children,
        n = e.logVisible;
      return c.jsx(y.Provider, { value: n, children: t });
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b() {
      return _(y);
    }
    function v(e, t, n, r) {
      if (t === "failure" || t === "timeout") {
        var o =
          t === "timeout"
            ? "canvas_refresh_visibility_timeout"
            : "canvas_refresh_render_failed";
        (e.logFetchDataError(
          "maiba_canvas_render",
          o,
          "Refreshed Canvas content did not become visible",
          "maiba_canvas_editor",
          void 0,
          n,
        ),
          r != null &&
            e.logFetchDataError(
              "maiba_canvas_render",
              o,
              "Refreshed Canvas content did not become visible",
              "maiba_canvas_editor",
              void 0,
              r,
            ));
      } else
        (e.logFetchDataSuccess(
          "maiba_canvas_render",
          "maiba_canvas_editor",
          void 0,
          n,
        ),
          r != null &&
            e.logFetchDataSuccess(
              "maiba_canvas_render",
              "maiba_canvas_editor",
              void 0,
              r,
            ));
    }
    function S(t, n, a, i, l) {
      var u = g(null),
        c = l == null ? void 0 : l.conversationID,
        d = l == null ? void 0 : l.entity,
        m = h(null),
        _ = m[0],
        y = m[1],
        C = g({ isCanvasOpen: n, logger: t, scope: i });
      (f(
        function () {
          var e = C.current;
          if (e.isCanvasOpen !== n || e.logger !== t || e.scope !== i) {
            var r;
            (r = u.current) == null || r.finish("cancelled");
          }
          C.current = { isCanvasOpen: n, logger: t, scope: i };
        },
        [n, t, i],
      ),
        f(function () {
          return function () {
            var e;
            (e = u.current) == null || e.finish("cancelled");
          };
        }, []));
      var b = p(function () {
          var e;
          (e = u.current) == null || e.finish("failure");
        }, []),
        S = p(
          function (a) {
            var i;
            if (t == null || !n) {
              var l;
              return ((l = u.current) == null || l.finish("cancelled"), null);
            }
            (i = u.current) == null || i.finish("superseded");
            var c = r("guid")(),
              d = (e || (e = r("performanceNow")))(),
              m = !1,
              p = !1,
              _ = function (i) {
                if (!m) {
                  ((m = !0),
                    r("clearTimeout")(g),
                    u.current === f && (u.current = null));
                  var n = {
                    canvas_attempt_id: c,
                    canvas_duration_ms: Math.max(
                      0,
                      Math.round((e || (e = r("performanceNow")))() - d),
                    ).toString(10),
                    canvas_is_silent: a.isSilent ? "true" : "false",
                    canvas_outcome: i,
                    canvas_refresh_source: a.source,
                  };
                  (a.conversationID != null &&
                    (n.conversation_id = a.conversationID),
                    a.requestID != null && (n.canvas_request_id = a.requestID),
                    a.workspaceVersion != null &&
                      (n.canvas_workspace_version =
                        a.workspaceVersion.toString(10)));
                  var l =
                      a.source === "workspace_version" && i !== "superseded"
                        ? o(
                            "MAIBACanvasChatDispatchStore",
                          ).claimMAIBACanvasChatDispatch(
                            a.conversationID,
                            a.requestID,
                            (s || (s = r("performanceAbsoluteNow")))(),
                          )
                        : null,
                    p =
                      l == null
                        ? null
                        : babelHelpers.extends({}, n, {
                            canvas_attempt_id: l.userMessageOTID,
                            canvas_duration_ms: Math.max(
                              0,
                              Math.round(
                                (s || (s = r("performanceAbsoluteNow")))() -
                                  l.startedAt,
                              ),
                            ).toString(10),
                            canvas_is_silent: "false",
                            canvas_refresh_source: "chat_send",
                          });
                  v(t, i, n, p);
                }
              },
              f = {
                attemptID: c,
                completeNetwork: function (t) {
                  m || p || ((p = !0), t != null ? _("failure") : y(f));
                },
                finish: _,
              },
              g = r("setTimeout")(function () {
                return _("timeout");
              }, 3e4);
            return ((u.current = f), f);
          },
          [n, t],
        ),
        R = p(
          function (e) {
            (n &&
              !a &&
              d != null &&
              e === "maiba_canvas_section" &&
              o("MAIBAWorkspaceCanvasOpenTiming").completeMAIBACanvasOpenTiming(
                c,
                d,
                "success",
              ),
              n &&
                !a &&
                _ != null &&
                u.current === _ &&
                e === "maiba_canvas_section" &&
                _.finish("success"));
          },
          [n, a, c, d, _],
        );
      return {
        failRefresh: b,
        logVisible: t != null && n ? R : null,
        startRefresh: S,
      };
    }
    ((l.MAIBAIGCanvasRefreshTimingProvider = C),
      (l.useMAIBAIGCanvasRefreshVisibleLogger = b),
      (l.useMAIBAIGCanvasRefreshTiming = S));
  },
  98,
);
