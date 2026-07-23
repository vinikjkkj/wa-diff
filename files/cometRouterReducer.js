__d(
  "cometRouterReducer",
  [
    "CometProductAttribution",
    "CometRouterLogEventUtils",
    "FBLogger",
    "cometRouterLogger",
    "getRootRouteInfo",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o, a) {
      var i = "pushView-key-" + r("uuidv4")();
      return babelHelpers.extends({}, t, {
        depth: 1,
        key: i,
        mutableState: {
          isPurged: function () {
            return o != null && o.has(i);
          },
          purgePushView:
            a != null
              ? function () {
                  return a(i);
                }
              : void 0,
        },
        productAttribution: n,
        route: e,
      });
    }
    function s(t, n, r, o, a, i, l, s) {
      var u = e(n, o, a, i, s),
        c = r.main,
        d = r.pushViewStack,
        m = (d || []).concat(u);
      return (
        l != null &&
          i != null &&
          m.slice(0, Math.max(m.length - l, 0)).forEach(function (e) {
            i.add(e.key);
          }),
        babelHelpers.extends({}, r, { main: c, pushViewStack: m, routeKey: t })
      );
    }
    function u(t, n, o, a, i, l) {
      var s = o.pushViewStack != null ? [].concat(o.pushViewStack) : [],
        u = s.length > 0;
      if (u) {
        var c = s[s.length - 1];
        s[s.length - 1] = babelHelpers.extends({}, i, {
          depth: a ? c.depth : c.depth + 1,
          key: c.key,
          mutableState: {},
          productAttribution: l,
          route: n,
        });
      } else
        (r("FBLogger")("comet_infra").mustfix(
          "replacePushView called without an existing push view",
        ),
          s.push(e(n, i, l)));
      return babelHelpers.extends({}, o, { pushViewStack: s, routeKey: t });
    }
    function c(e, t, n, o, a) {
      var i = r("getRootRouteInfo")(n).route;
      if (i.isCometRootContainer !== !0)
        throw r("FBLogger")("comet_infra").mustfixThrow(
          "Tried to load a content view into a non-root",
        );
      var l = t.hostableView;
      if (!l)
        throw r("FBLogger")("comet_infra").mustfixThrow(
          "Tried to load a content route without a contentView",
        );
      return babelHelpers.extends({}, n, {
        hosted: babelHelpers.extends({}, o, {
          mutableState: {},
          productAttribution: a,
          route: t,
        }),
        routeKey: e,
      });
    }
    function d(e, t, n, r) {
      return {
        main: babelHelpers.extends({}, n, {
          mutableState: {},
          productAttribution: r,
          route: t,
        }),
        routeKey: e,
      };
    }
    function m(e, t, n, r, a) {
      var i = o("CometProductAttribution").getRouteInfoForDispatch(t, a),
        l = i.productAttribution,
        s = r != null ? r : {},
        u = s.fromLink,
        c = s.linkContext,
        d = s.navChainContent,
        m = s.trackingNodes,
        p = o("CometProductAttribution").getProductAttributionFromRoute(
          e,
          u,
          i,
          c,
          m,
          n,
          d,
        );
      return (
        (u == null || c == null) &&
          (p = babelHelpers.extends({}, p, { 0: l == null ? void 0 : l[0] })),
        p
      );
    }
    function p(e, t, n, a, i) {
      var l = n.payload,
        p = l.dispatchedFrom,
        _ = l.productAttributionUpdateProps,
        f = l.routeInfoExtras,
        g = l.to,
        h = l.wasHistoryReplaced,
        y = m(g, t, h, _, p);
      switch (
        (r("cometRouterLogger").log({
          action: n,
          eventName: o("CometRouterLogEventUtils").CometRouterLoggingEvent
            .NAVIGATION_ACTION_EXECUTED,
        }),
        n.__type)
      ) {
        case "loadHosted":
          return c(e, g, t, f, y);
        case "replacePushView":
          return u(e, g, t, h, f, y);
        case "addPushView":
          return s(e, g, t, f, y, a, n.payload.pushViewStackLimit, i);
        case "loadTab":
          return d(e, g, f, y);
        default:
          throw r("FBLogger")("comet_infra").mustfixThrow(
            "Invalid action passed to cometRouterReducer: %s}",
            n.__type,
          );
      }
    }
    l.default = p;
  },
  98,
);
