__d(
  "WAWebFetchUnjoinedGroupsProfilePicsAction",
  ["WAWebGroupGetProfilePicsJob", "WAWebProfilePicThumbCollection"],
  function (t, n, r, o, a, i, l) {
    async function e(e, t, n) {
      if (e.length) {
        var r = e.map(function (e) {
            var t = o(
              "WAWebProfilePicThumbCollection",
            ).ProfilePicThumbCollection.get(e.toString());
            return (
              t != null && (t.stale = !1),
              {
                groupId: e,
                photoId: t == null ? void 0 : t.tag,
                isParentGroup: !1,
              }
            );
          }),
          a = await o("WAWebGroupGetProfilePicsJob").getProfilePics(r, t, {
            subgroupHintId: n,
            type: o("WAWebGroupGetProfilePicsJob").ProfilePicsTypeEnum.PREVIEW,
            query: o("WAWebGroupGetProfilePicsJob").ProfilePicsQueryEnum.URL,
          });
        a.forEach(function (e) {
          e.updatePicture &&
            o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.add(
              {
                id: e.id,
                previewEurl: e.eurl,
                stale: !1,
                eurlStale: !1,
                tag: e.tag,
                timestamp: Date.now(),
              },
              { merge: !0 },
            );
        });
      }
    }
    l.fetchUnjoinedGroupsPicsBatched = e;
  },
  98,
);
