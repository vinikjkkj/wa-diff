__d(
  "MAIBAGeoComponentMatchResolver",
  ["MAIBAGeoComponentMatchResolver_components.graphql", "RelayHooks", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (s || (s = o("react"))).useMemo,
      c =
        e !== void 0
          ? e
          : (e = n("MAIBAGeoComponentMatchResolver_components.graphql"));
    function d(e) {
      var t = new Map();
      for (var n of e != null ? e : [])
        n != null && n.__typename !== "%other" && t.set(n.__typename, n);
      return t;
    }
    function m(e) {
      var t = o("RelayHooks").useFragment(c, e);
      return u(
        function () {
          return d(t.content_components);
        },
        [t.content_components],
      );
    }
    ((l.buildComponentMatchResolution = d),
      (l.useMAIBAGeoComponentMatchResolution = m));
  },
  98,
);
