__d(
  "XFBAdTargetGeoLocations-ad-object_spec-resolver",
  [
    "AdTargetGeoLocationsSpecUtils",
    "RelayHooks",
    "XFBAdTargetGeoLocationsAdObjectSpecResolver.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var r = o("RelayHooks").readFragment(
        e !== void 0
          ? e
          : (e = n("XFBAdTargetGeoLocationsAdObjectSpecResolver.graphql")),
        t,
      );
      return o("AdTargetGeoLocationsSpecUtils").coerceGeoLocations(r);
    }
    l.geo_locations = s;
  },
  98,
);
