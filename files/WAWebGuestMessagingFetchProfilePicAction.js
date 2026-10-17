__d(
  "WAWebGuestMessagingFetchProfilePicAction",
  [
    "WALogger",
    "WAWebGetProfilePicJob",
    "WAWebGuestMessagingProfilePicApi",
    "WAWebProfilePicConstants",
    "WAWebSubscribePushManagerAction",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 6048e5;
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          if (n !== !0) {
            var r = yield o(
              "WAWebGuestMessagingProfilePicApi",
            ).fetchProfilePicFromDB(t);
            if (r != null) {
              var a = r.fullDirectPath,
                i = r.timestamp,
                l = i != null && Date.now() - i > s;
              if (!l && a != null)
                return (
                  "https://" +
                  o("WAWebProfilePicConstants").DEFAULT_HOSTNAME +
                  a
                );
            }
          }
          var u;
          try {
            u = yield o("WAWebGetProfilePicJob").getProfilePic(
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
            yield o("WAWebGuestMessagingProfilePicApi").persistProfilePic({
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
        })),
        c.apply(this, arguments)
      );
    }
    l.fetchProfilePic = u;
  },
  98,
);
