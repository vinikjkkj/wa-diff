__d(
  "WAWebGuestMessagingFetchProfilePicAction",
  [
    "WALogger",
    "WAWebGetProfilePicJob",
    "WAWebGuestMessagingProfilePicApi",
    "WAWebProfilePicConstants",
    "WAWebSubscribePushManagerAction",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 6048e5;
    async function u(t, n) {
      if (n !== !0) {
        var r = await o(
          "WAWebGuestMessagingProfilePicApi",
        ).fetchProfilePicFromDB(t);
        if (r != null) {
          var a = r.fullDirectPath,
            i = r.timestamp,
            l = i != null && Date.now() - i > s;
          if (!l && a != null)
            return (
              "https://" + o("WAWebProfilePicConstants").DEFAULT_HOSTNAME + a
            );
        }
      }
      var u;
      try {
        u = await o("WAWebGetProfilePicJob").getProfilePic(
          o("WAWebWidFactory").createWid(t),
          {},
        );
      } catch (t) {
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "failed to fetch inviter profile pic ",
                  "",
                ])),
              t,
            )
            .tags("guest"),
          null
        );
      }
      return (
        await o("WAWebGuestMessagingProfilePicApi").persistProfilePic({
          id: t,
          tag: u.tag,
          eurl: u.eurl,
          previewEurl: null,
          timestamp: Date.now(),
          previewDirectPath: null,
          fullDirectPath: u.directPath,
          filehash: u.filehash,
        }),
        o("WAWebSubscribePushManagerAction").updatePushManager(),
        "https://" +
          o("WAWebProfilePicConstants").DEFAULT_HOSTNAME +
          u.directPath
      );
    }
    l.fetchProfilePic = u;
  },
  98,
);
