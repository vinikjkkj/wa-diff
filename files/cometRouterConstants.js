__d(
  "cometRouterConstants",
  ["ExecutionEnvironment"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = {
        INIT_ROUTE_KEY:
          ((s || (s = r("ExecutionEnvironment"))).canUseDOM
            ? (e = window) == null ||
              (e = e.history) == null ||
              (e = e.state) == null
              ? void 0
              : e.key
            : null) || "initial",
        NAVIGATION_COUNT_THRESHOLD: 50,
        POP_STATE_TIMEOUT: 500,
        REFRESH_ON_CLIENT_CONSISTENCY: !0,
        RELOAD_RESOURCE_THRESHOLD: 216e6,
        RESOURCE_LOAD_EPOCH: Date.now(),
      };
    l.default = u;
  },
  98,
);
