__d(
  "CometAIHTSMemorializationLegacyContactDataSource.query",
  ["CometAIHTSMemorializationLegacyContactDataSourceQuery.graphql"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 32,
      u =
        e !== void 0
          ? e
          : (e = n(
              "CometAIHTSMemorializationLegacyContactDataSourceQuery.graphql",
            ));
    function c(e) {
      var t,
        n =
          e == null ||
          (t = e.fxcal_settings) == null ||
          (t = t.node) == null ||
          (t = t.eligible_legacy_contacts_for_account_v2) == null
            ? void 0
            : t.eligible_legacy_contacts;
      return n == null
        ? []
        : n
            .map(function (e) {
              var t;
              if (e == null) return null;
              var n = e.id,
                r = e.name;
              return n == null || r == null
                ? null
                : {
                    key: n,
                    label: r,
                    rawData: {
                      category: null,
                      fanCount: null,
                      iconSize: s,
                      iconUrl: (t = e.profile_picture_uri) != null ? t : "",
                      verifiedStatus: null,
                    },
                    type: "entry",
                  };
            })
            .filter(Boolean);
    }
    ((l.query = u), (l.normalize = c));
  },
  98,
);
