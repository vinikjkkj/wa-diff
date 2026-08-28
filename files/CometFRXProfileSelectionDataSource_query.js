__d(
  "CometFRXProfileSelectionDataSource.query",
  ["CometFRXProfileSelectionDataSourceQuery.graphql"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 32,
      u =
        e !== void 0
          ? e
          : (e = n("CometFRXProfileSelectionDataSourceQuery.graphql"));
    function c(e) {
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
                      iconSize: s,
                      iconUrl: o,
                      verifiedStatus: e.verified_status,
                    },
                    type: "entry",
                  };
            })
            .filter(Boolean);
    }
    ((l.ICON_SIZE = s), (l.query = u), (l.normalize = c));
  },
  98,
);
