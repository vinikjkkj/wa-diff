__d(
  "WAWebFetchMusicArtwork",
  [
    "WAWebACSTokenConfig",
    "WAWebMusicGraphQLRequest",
    "WAWebMusicParsingUtils",
    "WAWebMusicViewerCountry",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "25140458958880797";
    async function s(t, n) {
      var r,
        a = o("WAWebMusicViewerCountry").getMusicViewerCountry();
      if (a == null) return null;
      var i = await o("WAWebMusicGraphQLRequest").fetchMusicGraphQL({
        docId: e,
        project: o("WAWebACSTokenConfig").ACS_PROJECTS.WA_ChatsMusic,
        variables: {
          params: { available_countries: [a], ids: [t], product: "WA_CHATS" },
          width: n,
          height: n,
        },
        viaOhai: !1,
      });
      if (!i.ok) return null;
      var l = u(i.data, "music_song_batch"),
        s = Array.isArray(l)
          ? l.find(function (e) {
              return u(e, "display_id") === t;
            })
          : null,
        c = u(u(s, "cover_artwork"), "downloadable_uri");
      return typeof c == "string" &&
        (r = o("WAWebMusicParsingUtils").toAllowedUri(c, "artwork")) != null
        ? r
        : null;
    }
    function u(e, t) {
      return e != null && typeof e == "object" && !Array.isArray(e)
        ? e[t]
        : void 0;
    }
    l.fetchMusicArtwork = s;
  },
  98,
);
