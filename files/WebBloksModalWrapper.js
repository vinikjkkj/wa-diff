__d(
  "WebBloksModalWrapper",
  [
    "WebBloksFocusScopeQueries",
    "WebBloksScreenHost",
    "WebBloksScreenWrapper",
    "WebBloksStyle",
    "react",
    "useWebBloksAccessibilityModule",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useState;
    function m(e) {
      var t = e.externalVariables,
        n = e.modal,
        a = r("useWebBloksAccessibilityModule")(),
        i = a.FocusRegion,
        l = d(n.value),
        u = l[0],
        m = l[1];
      c(
        function () {
          return (
            n.stateChangeListener.on(m),
            function () {
              n.stateChangeListener.off(m);
            }
          );
        },
        [n],
      );
      var _ = n.objectSet,
        f = n.options,
        g = f.initialTreeResources,
        h = f.loadingScreen,
        y = f.ownerContext,
        C =
          u.state === "ready"
            ? s.jsx(
                r("WebBloksScreenHost"),
                { screen: n, externalVariables: t },
                n.screenId,
              )
            : u.state === "loading" && h
              ? o("WebBloksScreenWrapper").renderLoadingNode(_, h, g, y)
              : null;
      return (
        n.options.outerScreenComponent
          ? (C = n.options.outerScreenComponent(C))
          : (C = s.jsx("div", { className: p.modalContainer, children: C })),
        s.jsx(i, {
          autoFocusQuery: o("WebBloksFocusScopeQueries").dialogScopeQuery,
          autoRestoreFocus: !0,
          containFocusQuery: o("WebBloksFocusScopeQueries").tabbableScopeQuery,
          children: s.jsx("div", {
            "aria-modal": !0,
            role: "dialog",
            children: C,
          }),
        })
      );
    }
    m.displayName = m.name + " [from " + i.id + "]";
    var p = o("WebBloksStyle").createStyles({
      modalContainer: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },
    });
    l.default = m;
  },
  98,
);
