__d(
  "CometFRXProfileSelectionDataSource.query",
  ["CometFRXProfileSelectionDataSourceQuery.graphql", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = 32,
      d =
        e !== void 0
          ? e
          : (e = n("CometFRXProfileSelectionDataSourceQuery.graphql"));
    function m(e) {
      var t = e == null ? void 0 : e.cix_frx_evidence_profile_search;
      return t == null
        ? []
        : t
            .map(function (e) {
              var t;
              if (e == null) return null;
              var n = e.id,
                r = e.name,
                o = (t = e.profile_picture) == null ? void 0 : t.uri;
              return n == null || r == null || o == null
                ? null
                : {
                    key: n,
                    label: r,
                    rawData: {
                      category: e.category,
                      fanCount: e.fan_count,
                      iconSize: c,
                      iconUrl: o,
                      verifiedStatus: e.verified_status,
                    },
                    type: "entry",
                  };
            })
            .filter(Boolean);
    }
    ((l.ICON_SIZE = c), (l.query = d), (l.normalize = m));
  },
  98,
);
