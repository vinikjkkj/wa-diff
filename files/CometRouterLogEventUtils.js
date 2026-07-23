__d(
  "CometRouterLogEventUtils",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l,
      s = (l = n("$InternalEnum"))({
        DEBUG: "debug",
        VERBOSE_DEBUG: "verbose_debug",
      }),
      u = l({
        NAVIGATION_START: "navigation_start",
        NAVIGATION_ACTION_RESOLVED: "navigation_action_resolved",
        NAVIGATION_ACTION_EXECUTED: "navigation_action_executed",
        NAVIGATION_ON_WINDOW: "navigation_on_window",
        PREFETCH_ROUTE_DEFINITION: "prefetch_route_definition",
        PREFETCH_ROUTE_QUERIES: "prefetch_route_queries",
        PRELOAD_ROUTE_CODE: "preload_route_code",
        NAVIGATION_ROUTER_STATE_UPDATE: "navigation_router_state_update",
        HISTORY_STATE_UPDATE: "history_state_update",
        LINK_OPEN: "link_open",
        INIT_ROUTER_START: "init_router_start",
        INIT_ROUTER_END: "init_router_end",
      }),
      c =
        ((e = {}),
        (e[s.DEBUG] = new Set([
          u.NAVIGATION_START,
          u.NAVIGATION_ACTION_EXECUTED,
          u.NAVIGATION_ON_WINDOW,
          u.PREFETCH_ROUTE_QUERIES,
          u.NAVIGATION_ROUTER_STATE_UPDATE,
          u.HISTORY_STATE_UPDATE,
          u.LINK_OPEN,
          u.INIT_ROUTER_START,
          u.INIT_ROUTER_END,
        ])),
        (e[s.VERBOSE_DEBUG] = new Set([
          u.NAVIGATION_ACTION_RESOLVED,
          u.PREFETCH_ROUTE_DEFINITION,
          u.PRELOAD_ROUTE_CODE,
        ])),
        e),
      d = l({
        GO: "go",
        GO_ASYNC: "goAsync",
        GO_TO: "goTo",
        GO_TO_ASYNC: "goToAsync",
        BACK: "back",
        POP_PUSH_VIEW: "popPushView",
      }),
      m = l({
        GO: "go",
        BACK: "back",
        FORWARD: "forward",
        PUSH_STATE: "pushState",
        REPLACE_STATE: "replaceState",
      });
    ((i.CometRouterLogLevels = s),
      (i.CometRouterLoggingEvent = u),
      (i.CometRouterLogEventLevels = c),
      (i.CometRouterTriggers = d),
      (i.HistoryStateUpdateTriggers = m));
  },
  66,
);
