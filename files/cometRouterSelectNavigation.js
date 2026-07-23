__d(
  "cometRouterSelectNavigation",
  [
    "CometRouterLogEventUtils",
    "FBLogger",
    "cometRouterLogger",
    "getRootRouteInfo",
    "getSecondTopViewInfo",
    "getTopMostRoute",
    "isTransparentPushView",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o, a) {
      var i,
        l = (i = e.canBePushView) != null ? i : !1;
      if (n === "content")
        if (o.isCometRootContainer !== !0) {
          var s, u;
          r("FBLogger")("comet_infra").mustfix(
            "Asked for a target content but the current view isn't a container. From URL: %s\n        trace policy: %s, To: %s trace policy: %s",
            o.url,
            (s = o.tracePolicy) != null ? s : "",
            e.url,
            (u = e.tracePolicy) != null ? u : "",
          );
        } else {
          if (e.hostableView)
            return {
              action: "loadHosted",
              target: { route: e, view: e.hostableView },
            };
          var c, d;
          r("FBLogger")("comet_infra").mustfix(
            "Asked for a target content but the to route doesnt support a content view. From URL: %s\n          trace policy: %s, To: %s trace policy: %s",
            o.url,
            (c = o.tracePolicy) != null ? c : "",
            e.url,
            (d = e.tracePolicy) != null ? d : "",
          );
        }
      else if (n === "self")
        return t === "hostedView"
          ? { action: "loadHosted", target: { route: e, view: e.hostableView } }
          : t === "pushView" && l
            ? {
                action: "replacePushView",
                target: { route: e, view: e.rootView },
              }
            : { action: "loadTab", target: { route: e, view: e.rootView } };
      if (l) {
        if (e.replacePushViewOfSameTracePolicy === !0 && a.pushViewStack) {
          var m = a.pushViewStack[a.pushViewStack.length - 1];
          if ((m == null ? void 0 : m.route.tracePolicy) === e.tracePolicy)
            return {
              action: "replacePushView",
              target: { route: e, view: e.rootView },
            };
        }
        return {
          action: "addPushView",
          target: { route: e, view: e.rootView },
        };
      } else
        return { action: "loadTab", target: { route: e, view: e.rootView } };
    }
    function s(e, t, n, a, i, l) {
      var s = u(e, t, n, a, i, l);
      return (
        r("cometRouterLogger").log({
          action: s.action,
          eventName: o("CometRouterLogEventUtils").CometRouterLoggingEvent
            .NAVIGATION_ACTION_RESOLVED,
          nav: s,
        }),
        s
      );
    }
    function u(t, n, o, a, i, l) {
      var s,
        u,
        c = r("getRootRouteInfo")(a),
        d = c.route,
        m = t.backgroundRouteConfig,
        p = m == null ? void 0 : m.allowedTracePolicies,
        _ = n;
      n == null &&
        r("isTransparentPushView")(t) &&
        r("isTransparentPushView")(d) &&
        (_ = l);
      var f = e(t, o != null ? o : "rootView", _, d, a);
      if (m == null || p == null) return f;
      var g = m.defaultBackgroundUrl,
        h;
      switch (f.action) {
        case "addPushView":
        case "loadHosted":
          h = (s = r("getTopMostRoute")(a)) == null ? void 0 : s.tracePolicy;
          break;
        case "replacePushView":
          h =
            (u = r("getSecondTopViewInfo")(a)) == null ||
            (u = u.routeInfo) == null ||
            (u = u.route) == null
              ? void 0
              : u.tracePolicy;
          break;
      }
      if (h != null && p.includes(h)) return f;
      var y = i.getRoute(g);
      if (y == null || (y == null ? void 0 : y.type) !== "valid_route") {
        var C, b;
        return (
          r("FBLogger")("comet_infra").mustfix(
            "Background Route is not been fetched successfully. From URL:\n        %s trace policy: %s, To: %s trace policy: %s,\n        with default background URL %s",
            d.url,
            (C = d.tracePolicy) != null ? C : "",
            t.url,
            (b = t.tracePolicy) != null ? b : "",
            g,
          ),
          { action: "loadTab", target: { route: t, view: t.rootView } }
        );
      }
      return {
        action: "loadTab",
        modal: { route: t, view: t.rootView },
        target: { route: y, view: y.rootView },
      };
    }
    l.default = s;
  },
  98,
);
