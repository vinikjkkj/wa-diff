__d(
  "WAWebFetchCommunityProfilePic",
  ["WAWebGroupGetProfilePicsJob"],
  function (t, n, r, o, a, i, l) {
    async function e(e, t, n) {
      var r,
        a,
        i,
        l,
        s,
        u = { id: e },
        c = {
          groupId: e,
          photoId: n != null ? String(n) : null,
          isParentGroup: e.equals(t),
        },
        d = await Promise.all([
          o("WAWebGroupGetProfilePicsJob").getProfilePics([c], t, {
            type: o("WAWebGroupGetProfilePicsJob").ProfilePicsTypeEnum.IMAGE,
          }),
          o("WAWebGroupGetProfilePicsJob").getProfilePics([c], t, {
            type: o("WAWebGroupGetProfilePicsJob").ProfilePicsTypeEnum.PREVIEW,
          }),
        ]),
        m = d[0],
        p = d[1];
      return !p[0] || !p[0].updatePicture || !m[0] || !m[0].updatePicture
        ? u
        : babelHelpers.extends({}, u, {
            eurl: (r = m[0].eurl) != null ? r : void 0,
            fullDirectPath: (a = m[0].directPath) != null ? a : void 0,
            previewEurl: (i = p[0].eurl) != null ? i : void 0,
            previewDirectPath: (l = p[0].directPath) != null ? l : void 0,
            tag: (s = m[0].tag) != null ? s : void 0,
            timestamp: Date.now(),
            eurlStale: !1,
            stale: !1,
          });
    }
    l.fetchCommunityProfilePic = e;
  },
  98,
);
