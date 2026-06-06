__d(
  "WAWebProfilePicThumbBridgeApi",
  ["WAWebProfilePicThumbCollection"],
  function (t, n, r, o, a, i, l) {
    var e = {
      removeProfilePicThumb: function (t) {
        var e = t.wid,
          n = o(
            "WAWebProfilePicThumbCollection",
          ).ProfilePicThumbCollection.gadd(e);
        n.set({
          tag: void 0,
          eurl: void 0,
          previewEurl: void 0,
          previewDirectPath: void 0,
          fullDirectPath: void 0,
          filehash: void 0,
        });
      },
      markProfilePicStale: function (t) {
        var e = t.profilePicThumbWid,
          n = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.get(
            e,
          );
        n && n.markStale();
      },
      setProfilePicThumb: async function (t) {
        var e = t.wid,
          n = o(
            "WAWebProfilePicThumbCollection",
          ).ProfilePicThumbCollection.gadd(e);
        await o(
          "WAWebProfilePicThumbCollection",
        ).ProfilePicThumbCollection.update(n.id);
      },
    };
    l.ProfilePicThumbBridgeApi = e;
  },
  98,
);
