__d(
  "WAWebBizProfileFacebookPagesJob",
  ["WAWebBizProfileFacebookPagesJobQuery.graphql", "WAWebRelayClient"],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t) {
      var r,
        a,
        i = await o("WAWebRelayClient").fetchQuery(
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
          profilePictureUri: (t = e.profile_picture) == null ? void 0 : t.uri,
        };
      });
    }
    l.queryFacebookPagesEligibleForLinking = s;
  },
  98,
);
