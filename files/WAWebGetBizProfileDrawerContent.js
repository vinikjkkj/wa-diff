__d(
  "WAWebGetBizProfileDrawerContent",
  [
    "WAWebBizProfileGatingUtils",
    "WAWebBizProfileTwoPhaseContainerLoadable",
    "WAWebBizRefreshedProfileDrawerLoadable",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e, t) {
      return o("WAWebBizProfileGatingUtils").isBizProfilePreloadEnabled()
        ? s.jsx(
            o("WAWebBizProfileTwoPhaseContainerLoadable")
              .WAWebBizProfileTwoPhaseContainerLoadable,
            { entryPoint: e, onClose: t },
          )
        : s.jsx(
            o("WAWebBizRefreshedProfileDrawerLoadable")
              .WAWebBizRefreshedProfileDrawerLoadable,
            { entryPoint: e, onClose: t },
          );
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
