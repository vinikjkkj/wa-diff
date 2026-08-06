__d(
  "CometRouterDebugUtils",
  ["RouterDevToolRouterTypes", "safeStringify"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set(),
      s = {},
      u = {},
      c,
      d = [],
      m,
      p = {},
      _ = [],
      f = {
        addLogListener: function (n) {
          e.add(n);
        },
        addToRouterDebugLogs: function (t) {
          _.push(t);
        },
        getCometRouterDebugLogs: function () {
          var e = [];
          return (
            _.forEach(function (t) {
              var n = {};
              for (var a of Object.keys(t)) {
                var i = t[a];
                ((a === "prevRouterState" || a === "routerState") &&
                  (i = o(
                    "RouterDevToolRouterTypes",
                  ).convertToDevToolRouterState(i)),
                  (n[a] =
                    i == null || typeof i != "object"
                      ? i
                      : r("safeStringify")(i)));
              }
              e.push(r("safeStringify")(n));
            }),
            e
          );
        },
        getCurrentStateKey: function () {
          var e;
          return (e = m.getState()) == null ? void 0 : e.key;
        },
        getHistoryStack: function () {
          return d.map(function (e) {
            return e.params[0].key;
          });
        },
        getKeyToRouteStateMap: function () {
          var e = {};
          for (var t of Object.keys(u))
            e[t] = r("safeStringify")(
              o("RouterDevToolRouterTypes").convertToDevToolRouterState(u[t]),
            );
          return r("safeStringify")(e);
        },
        getMaintainedTabs: function () {
          return p;
        },
        informMaintainedTabs: function (n, r) {
          e.forEach(function (e) {
            e("maintained", { informType: r, routeKey: s[n] });
          });
        },
        navigatePreviousState: function (t) {
          m.go(t);
        },
        navigateURL: function (t, n) {
          var e;
          (e = c) == null || e.go(t, n);
        },
        registerDispatcher: function (t) {
          c = t;
        },
        registerHistoryManager: function (t) {
          m = t;
        },
        registerHistoryStack: function (t) {
          d = t;
        },
        removeLogListener: function (n) {
          e.delete(n);
        },
        setAllMaps: function (t) {
          u = t;
        },
        setTabKeyToRouteKeyMap: function (t, n) {
          s[t] = n;
        },
        updateAndInformMaintainedTabs: function (t, n, r) {
          ((p = t), f.informMaintainedTabs(r, n));
        },
        updateInfo: function (n) {
          var t = r("safeStringify")(
              o("RouterDevToolRouterTypes").convertToDevToolRouterState(u[n]),
            ),
            a = f.getHistoryStack(),
            i = f.getCometRouterDebugLogs();
          e.forEach(function (e) {
            (e("log_status", { state: t }),
              e("history_stack", a),
              e("debug_logs", i));
          });
        },
      },
      g = f;
    l.default = g;
  },
  98,
);
