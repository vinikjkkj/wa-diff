__d(
  "adsCampaignGroupAdCreationPackageConfigAccessorsFactory",
  ["AdsAdObjectsAccessorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return babelHelpers.extends(
        {},
        (n = o("AdsAdObjectsAccessorUtils")).baseFieldAccessorFactory(e, t),
        {
          id: n.basicFieldAccessorFactory(e, t, "id"),
          package_id: n.basicFieldAccessorFactory(e, t, "package_id"),
          api_version: n.basicFieldAccessorFactory(e, t, "api_version"),
          status: n.basicFieldAccessorFactory(e, t, "status"),
        },
      );
    }
    l.default = e;
  },
  98,
);
