__d(
  "buildWAWebCometRoot",
  [
    "CometClientRootRendererUtils",
    "CometFullPageSimpleRouteDispatcher",
    "ExecutionEnvironment",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react"));
    function c(t, n) {
      var a = n.elementId;
      (e || (e = r("ExecutionEnvironment"))).canUseDOM &&
        o("CometClientRootRendererUtils").initReactRender({
          rootComponent: u.jsx(r("CometFullPageSimpleRouteDispatcher"), {
            children: u.jsx(t, {}),
          }),
          rootElementID: a,
        });
    }
    l.default = c;
  },
  98,
);
