__d(
  "WAWebFetchMusicArtwork",
  [
    "WAWebACSTokenConfig",
    "WAWebAsISOCountryCode",
    "WAWebL10NCountryCodes",
    "WAWebMusicGraphQLRequest",
    "WAWebMusicParsingUtils",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "25140458958880797";
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r,
            a = o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
            i =
              a != null
                ? o("WAWebAsISOCountryCode").asISOCountryCode(
                    o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(
                      a.user,
                    ),
                  )
                : null;
          if (i == null) return null;
          var l = yield o("WAWebMusicGraphQLRequest").fetchMusicGraphQL({
            docId: e,
            project: o("WAWebACSTokenConfig").ACS_PROJECTS.WA_ChatsMusic,
            variables: {
              params: {
                available_countries: [i],
                ids: [t],
                product: "WA_CHATS",
              },
              width: n,
              height: n,
            },
            viaOhai: !1,
          });
          if (!l.ok) return null;
          var s = c(l.data, "music_song_batch"),
            u = Array.isArray(s)
              ? s.find(function (e) {
                  return c(e, "display_id") === t;
                })
              : null,
            d = c(c(u, "cover_artwork"), "downloadable_uri");
          return typeof d == "string" &&
            (r = o("WAWebMusicParsingUtils").toAllowedUri(d, "artwork")) != null
            ? r
            : null;
        })),
        u.apply(this, arguments)
      );
    }
    function c(e, t) {
      return e != null && typeof e == "object" && !Array.isArray(e)
        ? e[t]
        : void 0;
    }
    l.fetchMusicArtwork = s;
  },
  98,
);
