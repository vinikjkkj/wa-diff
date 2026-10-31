__d(
  "WAWebVoipBootDecisionODS",
  ["WAWebODS"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      e: {
        if (e === "deferred") {
          r("WAWebODS").incr("web.call.voip_init.boot.decision.deferred");
          break e;
        }
        if (e === "eager_last_call_unreadable") {
          r("WAWebODS").incr(
            "web.call.voip_init.boot.decision.eager_last_call_unreadable",
          );
          break e;
        }
        if (e === "eager_no_longtask") {
          r("WAWebODS").incr(
            "web.call.voip_init.boot.decision.eager_no_longtask",
          );
          break e;
        }
        if (e === "eager_recent_caller") {
          r("WAWebODS").incr(
            "web.call.voip_init.boot.decision.eager_recent_caller",
          );
          break e;
        }
        if (e === "guest") {
          r("WAWebODS").incr("web.call.voip_init.boot.decision.guest");
          break e;
        }
        if (e === "prop_off") {
          r("WAWebODS").incr("web.call.voip_init.boot.decision.prop_off");
          break e;
        }
        if (e === "windows") {
          r("WAWebODS").incr("web.call.voip_init.boot.decision.windows");
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    l.logCallVoipBootDecision = e;
  },
  98,
);
