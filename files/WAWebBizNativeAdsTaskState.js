__d(
  "WAWebBizNativeAdsTaskState",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t) {
      return {
        creationFlowID: t,
        phase: "bootstrap",
        requestEpoch: 0,
        task: e,
      };
    }
    function l(e, t) {
      if (e.phase === "closed" || u(e, t)) return e;
      e: {
        var n = t;
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.type === "begin" &&
          "task" in n &&
          "creationFlowID" in n
        ) {
          var r = n.task,
            o = n.creationFlowID;
          return s(e, r, o);
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.type === "phase" &&
          "phase" in n
        ) {
          var a = n.phase;
          return babelHelpers.extends({}, e, { phase: a });
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.type === "suspend"
        )
          return babelHelpers.extends({}, e, {
            phase: "setup",
            requestEpoch: e.requestEpoch + 1,
          });
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.type === "return" &&
          "creationFlowID" in n
        ) {
          var i = n.creationFlowID;
          return e.task.kind === "manage"
            ? e
            : {
                creationFlowID: i,
                phase: "ready",
                requestEpoch: e.requestEpoch + 1,
                task: { kind: "manage" },
              };
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.type === "close"
        )
          return babelHelpers.extends({}, e, {
            phase: "closed",
            requestEpoch: e.requestEpoch + 1,
          });
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            n,
        );
      }
    }
    function s(e, t, n) {
      return e.task.kind !== "manage" || e.phase !== "ready"
        ? e
        : {
            creationFlowID: n,
            phase: "preparing",
            requestEpoch: e.requestEpoch + 1,
            task: t,
          };
    }
    function u(e, t) {
      return (
        t.type !== "begin" &&
        t.type !== "close" &&
        t.requestEpoch !== e.requestEpoch
      );
    }
    ((i.createNativeAdsTaskState = e), (i.transitionNativeAdsTaskState = l));
  },
  66,
);
