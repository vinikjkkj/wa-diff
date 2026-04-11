__d(
  "WebBloksModalWrapper",
  [
    "WebBloksFocusScopeQueries",
    "WebBloksScreenHost",
    "WebBloksScreenWrapper",
    "WebBloksStyle",
    "react",
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(22),
        n = e.externalVariables,
        a = e.modal,
        i = r("useWebBloksAccessibilityModule")(),
        l = i.FocusRegion,
        u = d(a.value),
        m = u[0],
        _ = u[1],
        f;
      t[0] !== a.stateChangeListener
        ? ((f = function () {
            return (
              a.stateChangeListener.on(_),
              function () {
                a.stateChangeListener.off(_);
              }
            );
          }),
          (t[0] = a.stateChangeListener),
          (t[1] = f))
        : (f = t[1]);
      var g;
      (t[2] !== a ? ((g = [a]), (t[2] = a), (t[3] = g)) : (g = t[3]), c(f, g));
      var h = a.objectSet,
        y = a.options,
        C = y.initialTreeResources,
        b = y.loadingScreen,
        v = y.ownerContext,
        S;
      t[4] !== m.state ||
      t[5] !== n ||
      t[6] !== C ||
      t[7] !== b ||
      t[8] !== a ||
      t[9] !== h ||
      t[10] !== v
        ? ((S =
            m.state === "ready"
              ? s.jsx(
                  r("WebBloksScreenHost"),
                  { screen: a, externalVariables: n },
                  a.screenId,
                )
              : m.state === "loading" && b
                ? o("WebBloksScreenWrapper").renderLoadingNode(h, b, C, v)
                : null),
          (t[4] = m.state),
          (t[5] = n),
          (t[6] = C),
          (t[7] = b),
          (t[8] = a),
          (t[9] = h),
          (t[10] = v),
          (t[11] = S))
        : (S = t[11]);
      var R = S;
      if (a.options.outerScreenComponent) {
        var L;
        (t[12] !== a.options || t[13] !== R
          ? ((L = a.options.outerScreenComponent(R)),
            (t[12] = a.options),
            (t[13] = R),
            (t[14] = L))
          : (L = t[14]),
          (R = L));
      } else {
        var E;
        (t[15] !== R
          ? ((E = s.jsx("div", { className: p.modalContainer, children: R })),
            (t[15] = R),
            (t[16] = E))
          : (E = t[16]),
          (R = E));
      }
      var k;
      t[17] !== R
        ? ((k = s.jsx("div", {
            "aria-modal": !0,
            role: "dialog",
            children: R,
          })),
          (t[17] = R),
          (t[18] = k))
        : (k = t[18]);
      var I;
      return (
        t[19] !== l || t[20] !== k
          ? ((I = s.jsx(l, {
              autoFocusQuery: o("WebBloksFocusScopeQueries").dialogScopeQuery,
              autoRestoreFocus: !0,
              containFocusQuery: o("WebBloksFocusScopeQueries")
                .tabbableScopeQuery,
              children: k,
            })),
            (t[19] = l),
            (t[20] = k),
            (t[21] = I))
          : (I = t[21]),
        I
      );
    }
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
