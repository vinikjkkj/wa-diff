__d(
  "WAWebBizProfileFacebookPagesJob",
  [
    "WAWebBizProfileFacebookPagesJobQuery.graphql",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r,
            a,
            i = yield o("WAWebRelayClient").fetchQuery(
              e !== void 0
                ? e
                : (e = n("WAWebBizProfileFacebookPagesJobQuery.graphql")),
              {},
              { accessToken: t, environmentType: "facebook" },
            ),
            l =
              (r =
                i == null || (a = i.eligible_pages_for_whatsapp_linking) == null
                  ? void 0
                  : a.nodes) != null
                ? r
                : [];
          return l.map(function (e) {
            var t;
            return {
              followerCount: e.follower_count,
              id: e.id,
              isVerified: e.is_verified === !0,
              name: e.name,
              profilePictureUri:
                (t = e.profile_picture) == null ? void 0 : t.uri,
            };
          });
        })),
        u.apply(this, arguments)
      );
    }
    l.queryFacebookPagesEligibleForLinking = s;
  },
  98,
);
