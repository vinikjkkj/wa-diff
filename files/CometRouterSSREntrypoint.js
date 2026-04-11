__d(
  "CometRouterSSREntrypoint",
  ["CometSSREntrypoint"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = importNamespace("CometSSREntrypoint").processRootEntryPointData,
      l =
        importNamespace(
          "CometSSREntrypoint",
        ).processRootEntryPointDataWithExtraProps;
    ((i.processRootEntryPointData = e),
      (i.processRootEntryPointDataWithExtraProps = l));
  },
  66,
);
