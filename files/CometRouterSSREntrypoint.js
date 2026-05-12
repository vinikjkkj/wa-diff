__d(
  "CometRouterSSREntrypoint",
  ["CometSSREntrypoint"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = importNamespace("CometSSREntrypoint").processRootEntryPointData,
      l =
        importNamespace(
          "CometSSREntrypoint",
        ).processRootEntryPointDataWithExtraProps,
      s =
        importNamespace(
          "CometSSREntrypoint",
        ).processRootEntryPointDataWithJSResources;
    ((i.processRootEntryPointData = e),
      (i.processRootEntryPointDataWithExtraProps = l),
      (i.processRootEntryPointDataWithJSResources = s));
  },
  66,
);
