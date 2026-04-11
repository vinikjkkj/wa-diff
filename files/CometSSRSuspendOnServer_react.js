__d(
  "CometSSRSuspendOnServer.react",
  ["CometSSRClientRender", "CometSSRRenderingStateHooks", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.children,
        n = o("CometSSRRenderingStateHooks").useIsServerRenderingOrHydrating();
      if (n)
        throw o("CometSSRClientRender").CometSSRClientRender(
          "CometSSRSuspendOnServer: This component is marked to be client rendered",
        );
      return t;
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
