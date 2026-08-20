__d(
  "VideoPlayerNextgendashRetryLogic",
  ["VideoPlayerNextgendashStateMachine"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = e.initialDelayMs * Math.pow(e.backoffMultiplier, t),
        r = Math.min(n, e.maxDelayMs),
        o = (Math.random() * 2 - 1) * e.jitterPercent,
        a = r * (1 + o);
      return Math.max(0, Math.round(a));
    }
    var s = o("VideoPlayerNextgendashStateMachine").defineStateMachine(
      null,
      function (e) {
        var t = e.args,
          n = t.retryConfig,
          r = t.retryReason;
        return babelHelpers.extends({}, n, {
          retryReason: r,
          state: "waiting_schedule_retry",
        });
      },
      function (t) {
        var n = t.args,
          r = n.onAttempt,
          o = n.onExhausted,
          a = n.retryConfig,
          i = n.retryReason,
          l = t.env,
          s = t.event,
          u = t.eventClock,
          c = t.sendToSelf,
          d = t.state,
          m = t.unexpectedEvent;
        switch (d.state) {
          case "waiting_schedule_retry":
            switch (s.type) {
              case "schedule_retry":
                switch (d.retryBehavior) {
                  case "linear": {
                    var p = d.retryState,
                      _ =
                        p != null
                          ? p
                          : {
                              retryCountRemaining: d.retryCount,
                              retryIndex: -1,
                              retryLastAttemptedClock: void 0,
                              retryLastScheduledClock: void 0,
                              retryTimerID: void 0,
                            };
                    if (
                      (l.host.timers.clearTimeout(_.retryTimerID),
                      _.retryCountRemaining > 0)
                    ) {
                      var f = l.host.timers.setTimeout(function () {
                          c({ type: "_attempt" });
                        }, d.retryDelayMs),
                        g = babelHelpers.extends({}, _, {
                          retryCountRemaining: _.retryCountRemaining - 1,
                          retryIndex: _.retryIndex + 1,
                          retryLastScheduledClock: u,
                          retryTimerID: f,
                        });
                      return babelHelpers.extends({}, d, {
                        retryState: g,
                        state: "waiting_attempt",
                      });
                    } else
                      return babelHelpers.extends({}, d, {
                        retryState: babelHelpers.extends({}, _, {
                          retryTimerID: void 0,
                        }),
                        state: "exhausted",
                      });
                  }
                  case "exponential": {
                    var h = d.retryState,
                      y =
                        h != null
                          ? h
                          : {
                              retryCountRemaining: d.retryCount,
                              retryIndex: -1,
                              retryLastAttemptedClock: void 0,
                              retryLastScheduledClock: void 0,
                              retryTimerID: void 0,
                            };
                    if (
                      (l.host.timers.clearTimeout(y.retryTimerID),
                      y.retryCountRemaining > 0)
                    ) {
                      var C = y.retryIndex + 1,
                        b = {
                          backoffMultiplier: d.backoffMultiplier,
                          initialDelayMs: d.initialDelayMs,
                          jitterPercent: d.jitterPercent,
                          maxDelayMs: d.maxDelayMs,
                          retryBehavior: "exponential",
                          retryCount: d.retryCount,
                        },
                        v = e(b, C),
                        S = l.host.timers.setTimeout(function () {
                          c({ type: "_attempt" });
                        }, v),
                        R = babelHelpers.extends({}, y, {
                          retryCountRemaining: y.retryCountRemaining - 1,
                          retryIndex: C,
                          retryLastScheduledClock: u,
                          retryTimerID: S,
                        });
                      return babelHelpers.extends({}, d, {
                        retryState: R,
                        state: "waiting_attempt",
                      });
                    } else
                      return babelHelpers.extends({}, d, {
                        retryState: babelHelpers.extends({}, y, {
                          retryTimerID: void 0,
                        }),
                        state: "exhausted",
                      });
                  }
                  default:
                    d.retryBehavior;
                    return;
                }
              case "_attempt":
                throw m("throw", "Unexpected retry attempt");
              default: {
                s.type;
                return;
              }
            }
          case "waiting_attempt":
            switch (s.type) {
              case "schedule_retry":
                throw m();
              case "_attempt":
                switch (d.retryBehavior) {
                  case "linear": {
                    var L = d.retryState;
                    if (L != null && L.retryTimerID != null) {
                      l.host.timers.clearTimeout(L.retryTimerID);
                      var E = babelHelpers.extends({}, L, {
                        retryLastAttemptedClock: u,
                        retryTimerID: void 0,
                      });
                      return (
                        r({ retryConfig: a, retryReason: i, retryState: E }),
                        L.retryCountRemaining > 0
                          ? babelHelpers.extends({}, d, {
                              retryState: E,
                              state: "waiting_schedule_retry",
                            })
                          : babelHelpers.extends({}, d, {
                              retryState: E,
                              state: "exhausted",
                            })
                      );
                    } else throw m("throw", "Missing retryTimerID");
                  }
                  case "exponential": {
                    var k = d.retryState;
                    if (k != null && k.retryTimerID != null) {
                      l.host.timers.clearTimeout(k.retryTimerID);
                      var I = babelHelpers.extends({}, k, {
                        retryLastAttemptedClock: u,
                        retryTimerID: void 0,
                      });
                      return (
                        r({ retryConfig: a, retryReason: i, retryState: I }),
                        k.retryCountRemaining > 0
                          ? babelHelpers.extends({}, d, {
                              retryState: I,
                              state: "waiting_schedule_retry",
                            })
                          : babelHelpers.extends({}, d, {
                              retryState: I,
                              state: "exhausted",
                            })
                      );
                    } else throw m("throw", "Missing retryTimerID");
                  }
                  default:
                    d.retryBehavior;
                    return;
                }
              default: {
                s.type;
                return;
              }
            }
          case "exhausted":
            switch (s.type) {
              case "__enter": {
                c({ reason: "exhausted", type: "__dispose" });
                return;
              }
              case "__exception":
                return;
              case "__dispose":
                return;
              default:
                throw m();
            }
          case "__disposed__": {
            switch (s.type) {
              case "__enter": {
                var T = s.prevState;
                switch (T.retryBehavior) {
                  case "linear": {
                    var D;
                    l.host.timers.clearTimeout(
                      (D = T.retryState) == null ? void 0 : D.retryTimerID,
                    );
                    break;
                  }
                  case "exponential": {
                    var x;
                    l.host.timers.clearTimeout(
                      (x = T.retryState) == null ? void 0 : x.retryTimerID,
                    );
                    break;
                  }
                  default:
                    T.retryBehavior;
                    break;
                }
                o();
              }
            }
            return;
          }
          default:
            d.state;
        }
      },
    );
    ((l.calculateExponentialDelayWithJitter = e),
      (l.VideoPlayerNextgendashRetryLogicSM = s));
  },
  98,
);
