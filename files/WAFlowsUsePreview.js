__d(
  "WAFlowsUsePreview",
  [
    "ReactRouterDOM",
    "WAFlowsEntryPointControllerContext.react",
    "WAFlowsStateProvider.react",
    "WAFlowsWELJActionCreators",
    "WAFlowsWebPreviewActionHandler",
    "react",
    "useCurrentScreenMeta",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useContext;
    function d() {
      var e,
        t = c(o("WAFlowsStateProvider.react").FlowStateDispatchContext),
        n = o("ReactRouterDOM").useHistory(),
        a = o(
          "WAFlowsEntryPointControllerContext.react",
        ).useWAFlowsEntryPointController(),
        i = a.invoke,
        l = r("useCurrentScreenMeta")(),
        s = (e = l == null ? void 0 : l.id) != null ? e : "",
        d = u(
          function (e, r) {
            var a = new (o(
                "WAFlowsWebPreviewActionHandler",
              ).WAFlowsWebPreviewActionHandler)(i),
              l = o("WAFlowsWELJActionCreators").createWELJNavigateAction(
                s,
                e,
                r,
                !0,
              );
            t(a.navigateActionHandler(l, n, !0));
          },
          [s, t, n, i],
        );
      return { navigate: d };
    }
    l.useFlowsWebPreview = d;
  },
  98,
);
