__d(
  "WAFlowsNavigationUtils",
  [
    "invariant",
    "ReactRouterDOM",
    "WAFlowsActionHandlerTypes",
    "WAFlowsBridgeEvents",
    "WAFlowsEntryPointControllerContext.react",
    "WAFlowsEnvContext.react",
    "WAFlowsHandleNavigation",
    "WAFlowsStateProvider.react",
    "WAFlowsWELJActionCreators",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = u.useCallback,
      d = u.useContext,
      m = u.useEffect,
      p = u.useState;
    function _() {
      var e = o("WAFlowsStateProvider.react").useWAFlowsState(),
        t = e.internal,
        n = t.navBarConfig.backButtonAction,
        a = t.screenHistory,
        i = d(o("WAFlowsStateProvider.react").FlowMetaContext),
        l = o("ReactRouterDOM").useHistory(),
        u = o("WAFlowsEnvContext.react").useWAFlowsEnv(),
        m = u.env,
        p = o(
          "WAFlowsEntryPointControllerContext.react",
        ).useWAFlowsEntryPointController(),
        _ = p.actionOverrides,
        g = d(o("WAFlowsStateProvider.react").FlowStateDispatchContext),
        h = f(),
        y = h[0];
      return c(
        function () {
          if (
            n ===
            o("WAFlowsActionHandlerTypes").NavBarBackButtonAction.CLOSE_OVERLAY
          ) {
            g(o("WAFlowsWELJActionCreators").createToggleOverlayAction(!1));
            return;
          }
          if (
            n ===
            o("WAFlowsActionHandlerTypes").NavBarBackButtonAction
              .CLOSE_NAVBAR_CONTEXT_MENU
          ) {
            g(
              o(
                "WAFlowsWELJActionCreators",
              ).createToggleNavBarContextMenuAction(!1),
            );
            return;
          }
          if (
            n ===
            o("WAFlowsActionHandlerTypes").NavBarBackButtonAction
              .CATEGORY_LIST_BACK
          ) {
            g(_.categoryListBackActionHandler(!0));
            return;
          }
          if (y.leadingBtn === "back") {
            (i != null || s(0, 73184),
              r("WAFlowsHandleNavigation")(g, l, i, a, m, _));
            return;
          }
          p.invoke({
            eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
              .WAFlowsClose,
            payload: null,
            fallBackDataForWeb: {},
            hasCallback: !1,
          });
        },
        [_, n, p, g, m, l, y.leadingBtn, i, a],
      );
    }
    function f() {
      var e,
        t = o(
          "WAFlowsEntryPointControllerContext.react",
        ).useWAFlowsEntryPointController(),
        n = t.flowInitData,
        r = n[0],
        a =
          (e = r == null ? void 0 : r.environment.is_flow_interactive) != null
            ? e
            : !0,
        i = o("WAFlowsStateProvider.react").useWAFlowsState(),
        l = i.internal,
        s = l.navBarConfig.backButtonAction,
        u = l.screenError,
        c = l.screenHistory,
        d = p({
          leadingBtn: "close",
          prevLeadingBtn: null,
          isLeadingBtnAnimating: !1,
        }),
        _ = d[0],
        f = d[1];
      return (
        m(
          function () {
            if (c.length) {
              var e = c.length < 2,
                t;
              if (u != null) t = "close";
              else if (s == null) t = e || !a ? "close" : "back";
              else
                switch (s) {
                  case o("WAFlowsActionHandlerTypes").NavBarBackButtonAction
                    .CLOSE_OVERLAY:
                  case o("WAFlowsActionHandlerTypes").NavBarBackButtonAction
                    .CLOSE_NAVBAR_CONTEXT_MENU:
                  case o("WAFlowsActionHandlerTypes").NavBarBackButtonAction
                    .CATEGORY_LIST_BACK:
                    t = "back";
                    break;
                  case o("WAFlowsActionHandlerTypes").NavBarBackButtonAction
                    .CLOSE_FLOW:
                    t = "close";
                    break;
                }
              f(function (e) {
                return {
                  prevLeadingBtn: e.leadingBtn,
                  leadingBtn: t,
                  isLeadingBtnAnimating: !0,
                };
              });
            }
          },
          [c, u, s, a],
        ),
        [_, f]
      );
    }
    ((l.useBackOrCloseNavigationClick = _), (l.useLeadingBtnState = f));
  },
  98,
);
