__d(
  "WAWebBizProfileLinkedFacebookPageJob",
  ["WAWebBizProfileLinkedFacebookPageJobQuery.graphql", "WAWebRelayClient"],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t) {
      var r,
        a,
        i = await o("WAWebRelayClient").fetchQuery(
          e !== void 0
            ? e
            : (e = n("WAWebBizProfileLinkedFacebookPageJobQuery.graphql")),
          {},
          { accessToken: t, environmentType: "facebook" },
        ),
        l =
          i == null || (r = i.xfb_wa_biz_linked_accounts) == null
            ? void 0
            : r.linked_accounts;
      if (l == null) return { type: "unresolved" };
      var s = l.fb_page,
        u = s == null ? void 0 : s.id;
      if (s == null || u == null || u === "") return { type: "not_linked" };
      var c = (a = s.profile_picture) == null ? void 0 : a.url;
      return {
        page: {
          displayName: s.display_name,
          pageId: u,
          pictureUrl: c === "" ? null : c,
          shownOnProfile: s.shown_on_profile,
        },
        type: "linked",
      };
    }
    l.queryLinkedFacebookPage = s;
  },
  98,
);
