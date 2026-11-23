__d(
  "WAWebGuestMessagingProfilePicApi",
  ["WAWebSchemaProfilePicThumb"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      return o("WAWebSchemaProfilePicThumb").getProfilePicThumbTable().get(e);
    }
    async function s(e) {
      return o("WAWebSchemaProfilePicThumb")
        .getProfilePicThumbTable()
        .createOrReplace(e);
    }
    ((l.fetchProfilePicFromDB = e), (l.persistProfilePic = s));
  },
  98,
);
