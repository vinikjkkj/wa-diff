__d(
  "RouterDevToolRouterTypes",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = function (t) {
        var e, n, r, o, a, i, l;
        return babelHelpers.extends({}, t, {
          hostableView: t.hostableView
            ? babelHelpers.extends({}, t.hostableView, {
                allResources: t.hostableView.allResources.map(function (e) {
                  return e.getModuleId();
                }),
                entryPoint:
                  (e = t.hostableView) == null || (e = e.entryPoint) == null
                    ? void 0
                    : e.getModuleId(),
                resource:
                  (n =
                    (r = t.hostableView) == null || (r = r.resource) == null
                      ? void 0
                      : r.getModuleId()) != null
                    ? n
                    : "",
              })
            : void 0,
          rootView: babelHelpers.extends({}, t.rootView, {
            allResources: t.rootView.allResources.map(function (e) {
              return e.getModuleId();
            }),
            entryPoint:
              (o = t.rootView.entryPoint) == null ? void 0 : o.getModuleId(),
            resource: t.rootView.resource.getModuleId(),
          }),
          secondaryRootView: t.secondaryRootView
            ? babelHelpers.extends({}, t.secondaryRootView, {
                allResources: t.secondaryRootView.allResources.map(
                  function (e) {
                    return e.getModuleId();
                  },
                ),
                entryPoint:
                  (a = t.secondaryRootView) == null ||
                  (a = a.entryPoint) == null
                    ? void 0
                    : a.getModuleId(),
                resource:
                  (i =
                    (l = t.secondaryRootView) == null ||
                    (l = l.resource) == null
                      ? void 0
                      : l.getModuleId()) != null
                    ? i
                    : "",
              })
            : void 0,
        });
      },
      l = function (n) {
        if (n == null) return null;
        var t = babelHelpers.extends({}, n, {
          hosted:
            n.hosted != null
              ? babelHelpers.extends({}, n.hosted, { route: e(n.hosted.route) })
              : void 0,
          main: babelHelpers.extends({}, n.main, { route: e(n.main.route) }),
          pushViewStack:
            n.pushViewStack != null
              ? n.pushViewStack.map(function (t) {
                  return babelHelpers.extends({}, t, { route: e(t.route) });
                })
              : void 0,
        });
        return t;
      };
    i.convertToDevToolRouterState = l;
  },
  66,
);
