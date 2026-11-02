__d(
  "WAWebVoipOutgoingCallBlockedLog",
  ["WALogger", "WAWebRuntimeEnvironmentUtils", "WAWebVoipCappedVisibleClock"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 6e4,
      u = 1e4;
    function c(e) {
      if (!o("WAWebRuntimeEnvironmentUtils").isWorker()) {
        var t = !1,
          n = o("WAWebVoipCappedVisibleClock").startCappedVisibleTimer(
            s,
            function () {
              ((t = !0), m("hung", "none"));
            },
          );
        e.then(
          function (e) {
            (n.cancel(), t || d(e, n.getVisibleMs()));
          },
          function () {
            return n.cancel();
          },
        );
      }
    }
    function d(e, t) {
      if (e.status !== "ready") {
        var n = e.notReady,
          r = n.reason,
          o = n.reloadReason;
        if (r !== "duplicate_start")
          e: {
            if (r === "reload_required") {
              m("reload_required", o != null ? o : "unknown");
              break e;
            }
            if (r === "init_failed") {
              m("init_failed", "none");
              break e;
            }
            if (r === "user_cancelled") {
              t >= u && m("cancelled_waiting", "none");
              break e;
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                r,
            );
          }
      }
    }
    function m(t, n) {
      o("WALogger")
        .LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "voip: outgoing call blocked state=",
              " reason=",
              "",
            ])),
          t,
          n,
        )
        .tags("non-sad", "state:" + t, "reason:" + n)
        .sendLogs("voip-outgoing-call-blocked", {
          sampling: 0,
          sendLogsType: o("WALogger").SendLogsType.COUNTING_STAT,
        });
    }
    l.logOutgoingCallBlockedWhenNotReady = c;
  },
  98,
);
