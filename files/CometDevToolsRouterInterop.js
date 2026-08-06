__d(
  "CometDevToolsRouterInterop",
  ["CometRouterDebugUtils", "refine"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e = o("refine")).jsonParser(
        e.object({
          eventTimestamp: e.optional(e.number()),
          force: e.optional(e.bool()),
          navigationType: e.optional(
            e.nullable(
              e.union(
                e.literal("initial"),
                e.literal("navigation"),
                e.literal("popstate"),
                e.literal("reload"),
              ),
            ),
          ),
          passthroughProps: e.optional(e.nullable(e.writableDict(e.mixed()))),
          productAttributionUpdateProps: e.optional(
            e.object({
              fromLink: e.optional(
                e.object({
                  bookmark_id: e.optional(e.nullable(e.string())),
                  bookmark_type_name: e.optional(e.nullable(e.string())),
                  tap_point: e.union(
                    e.literal("via_cold_start"),
                    e.literal("unexpected"),
                    e.literal("shortcut"),
                    e.literal("explore"),
                    e.literal("tap_tabbar"),
                    e.literal("logo"),
                    e.literal("tap_bookmark"),
                    e.literal("via_notification"),
                    e.literal("mega_menu"),
                    e.literal("create_jewel"),
                    e.literal("more"),
                    e.literal("topnav-link"),
                    e.literal("error"),
                    e.literal("blue"),
                    e.literal("cob_cold_start"),
                    e.literal("tap_rhc"),
                    e.literal("tap_community_panel_popover"),
                    e.literal("tap_community_panel_shortcuts"),
                    e.literal("tap_scoped_search_bar"),
                    e.literal("tap_search_bar"),
                    e.literal("tap_mega_menu_search_bar"),
                  ),
                }),
              ),
              linkContext: e.nullable(
                e.array(
                  e.union(
                    e.literal("topnav"),
                    e.literal("bookmarks"),
                    e.literal("communities"),
                    e.literal("search"),
                    e.literal("shortcuts"),
                    e.literal("notifications"),
                    e.literal("more"),
                    e.literal("rhc"),
                  ),
                ),
              ),
              trackingNodes: e.optional(e.array(e.string())),
            }),
          ),
          replace: e.optional(e.bool()),
          skipNotifyServer: e.optional(e.bool()),
          target: e.optional(
            e.nullable(e.union(e.literal("content"), e.literal("self"))),
          ),
          traceParams: e.optional(
            e.nullable(e.writableDict(e.or(e.number(), e.string()))),
          ),
        }),
      ),
      u = "router";
    function c(e) {
      var t = function (n, r) {
        e.postMessage(n, r);
      };
      (r("CometRouterDebugUtils").addLogListener(t),
        e.onMessage(function (t, n) {
          switch (t) {
            case "connected": {
              var o;
              e.postMessage("init", {
                debugLogs: (o = r(
                  "CometRouterDebugUtils",
                )).getCometRouterDebugLogs(),
                historyStack: o.getHistoryStack(),
                stateMap: o.getKeyToRouteStateMap(),
              });
              var a = o.getMaintainedTabs();
              if (a != null)
                for (var i of Object.keys(a))
                  r("CometRouterDebugUtils").informMaintainedTabs(i, "start");
              break;
            }
            case "navigate":
              if (n != null && typeof n == "object") {
                var l = s(String(n.extraConfig));
                r("CometRouterDebugUtils").navigateURL(
                  String(n.url),
                  l != null ? l : {},
                );
              }
              break;
            case "jump": {
              if (n === r("CometRouterDebugUtils").getCurrentStateKey()) break;
              var u = r("CometRouterDebugUtils").getHistoryStack(),
                c =
                  u.indexOf(n) -
                  u.indexOf(r("CometRouterDebugUtils").getCurrentStateKey());
              r("CometRouterDebugUtils").navigatePreviousState(c);
              break;
            }
            default:
              break;
          }
        }),
        e.onDisconnected(function () {
          r("CometRouterDebugUtils").removeLogListener(t);
        }));
    }
    ((l.namespace = u), (l.onConnection = c));
  },
  98,
);
