__d(
  "CometDevToolsSSRStateManagerDebugStore",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        arrivedPayloads: [],
        currentState: "StartState",
        errorInfo: null,
        globalBoundaryErrorStatus: null,
        isTerminal: !1,
        ssrOutcome: "pending",
        ssrRenderPassStatuses: null,
        stateHistory: [],
        totalElapsedMs: 0,
      },
      l = e,
      s = 0,
      u = new Map();
    function c(e, t, n) {
      var r = e === "SSRSuccess" || e === "ClientRender",
        o = "pending";
      (e === "SSRSuccess"
        ? (o = "success")
        : e === "ClientRender"
          ? (o = "client_render")
          : e === "SSRDisabled" && (o = "disabled"),
        d({
          arrivedPayloads: n,
          currentState: e,
          errorInfo: null,
          globalBoundaryErrorStatus: null,
          isTerminal: r,
          ssrOutcome: o,
          ssrRenderPassStatuses: null,
          stateHistory: t.slice(),
          totalElapsedMs: t.length > 0 ? Date.now() - t[0].timestamp : 0,
        }));
    }
    function d(e) {
      ((l = e),
        u.size !== 0 &&
          u.forEach(function (e) {
            return e(l);
          }));
    }
    function m() {
      return l;
    }
    function p(e) {
      var t = s++;
      return (
        u.set(t, e),
        {
          release: function () {
            u.delete(t);
          },
        }
      );
    }
    ((i.recordStateChange = c), (i.getState = m), (i.subscribe = p));
  },
  66,
);
