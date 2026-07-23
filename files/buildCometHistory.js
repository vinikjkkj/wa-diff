__d(
  "buildCometHistory",
  ["CometRouterLogEventUtils", "cometRouterLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function () {
        return window.history.state;
      },
      s = function () {
        var t = "auto",
          n = null;
        window.addEventListener("popstate", function () {
          n == null || n();
        });
        var a = function (n, a) {
            (window.history.pushState(n, null, a),
              r("cometRouterLogger").log({
                eventName: o("CometRouterLogEventUtils").CometRouterLoggingEvent
                  .HISTORY_STATE_UPDATE,
                historyState: e(),
                trigger: o("CometRouterLogEventUtils")
                  .HistoryStateUpdateTriggers.PUSH_STATE,
              }));
          },
          i = function (n) {
            (window.history.go(n),
              r("cometRouterLogger").log({
                delta: n,
                eventName: o("CometRouterLogEventUtils").CometRouterLoggingEvent
                  .HISTORY_STATE_UPDATE,
                historyState: e(),
                trigger: o("CometRouterLogEventUtils")
                  .HistoryStateUpdateTriggers.GO,
              }));
          },
          l = function (n, a) {
            (window.history.replaceState(n, null, a),
              r("cometRouterLogger").log({
                eventName: o("CometRouterLogEventUtils").CometRouterLoggingEvent
                  .HISTORY_STATE_UPDATE,
                historyState: e(),
                trigger: o("CometRouterLogEventUtils")
                  .HistoryStateUpdateTriggers.REPLACE_STATE,
              }));
          },
          s = function () {
            var t = window.history.back();
            return (
              r("cometRouterLogger").log({
                eventName: o("CometRouterLogEventUtils").CometRouterLoggingEvent
                  .HISTORY_STATE_UPDATE,
                historyState: e(),
                trigger: o("CometRouterLogEventUtils")
                  .HistoryStateUpdateTriggers.BACK,
              }),
              t
            );
          },
          u = function () {
            var t = window.history.forward();
            return (
              r("cometRouterLogger").log({
                eventName: o("CometRouterLogEventUtils").CometRouterLoggingEvent
                  .HISTORY_STATE_UPDATE,
                historyState: e(),
                trigger: o("CometRouterLogEventUtils")
                  .HistoryStateUpdateTriggers.FORWARD,
              }),
              t
            );
          },
          c = function () {
            return window.history.length;
          },
          d = function () {
            return window.history.state;
          },
          m = function () {
            return "scrollRestoration" in window.history
              ? window.history.scrollRestoration
              : t;
          },
          p = function (n) {
            if ("scrollRestoration" in window.history) {
              window.history.scrollRestoration = n;
              return;
            }
            t = n;
          },
          _ = function (t) {
            n = t;
          },
          f = {
            back: s,
            forward: u,
            getLength: c,
            getScrollRestoration: m,
            getState: d,
            go: i,
            pushState: a,
            replaceState: l,
            setOnNavigationHandler: _,
            setScrollRestoration: p,
          };
        return f;
      },
      u = s;
    l.default = u;
  },
  98,
);
