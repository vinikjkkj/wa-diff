__d(
  "CometAIHTSIGAccountSearchDataSource.query",
  ["CometAIHTSIGAccountSearchDataSourceQuery.graphql"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("CometAIHTSIGAccountSearchDataSourceQuery.graphql"));
    function u(e) {
      var t = e == null ? void 0 : e.xig_search_users;
      return t == null
        ? []
        : t
            .map(function (e) {
              var t;
              if (e == null) return null;
              var n = e.fbid_v2,
                r = e.username;
              return n == null || r == null
                ? null
                : {
                    key: n,
                    label: r,
                    rawData: {
                      category: null,
                      fanCount: null,
                      iconSize: 32,
                      iconUrl: (t = e.profile_image_uri) != null ? t : "",
                      verifiedStatus: null,
                    },
                    type: "entry",
                  };
            })
            .filter(Boolean);
    }
    ((l.query = s), (l.normalize = u));
  },
  98,
);
