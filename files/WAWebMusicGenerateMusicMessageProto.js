__d(
  "WAWebMusicGenerateMusicMessageProto",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      var t = e.contextInfo,
        n = e.json,
        r = n.musicData;
      if (r == null) return null;
      var o = r.style;
      return {
        musicMessage: {
          embeddedMusic: {
            musicContentMediaId: r.musicContentMediaId,
            songId: r.songId,
            author: r.author,
            title: r.title,
            artistAttribution: r.artistAttribution,
            artworkDirectPath: r.artworkDirectPath,
            artworkSha256: r.artworkSha256,
            artworkEncSha256: r.artworkEncSha256,
            artworkMediaKey: r.artworkMediaKey,
            countryBlocklist: r.countryBlocklist,
            isExplicit: r.isExplicit,
            musicSongStartTimeInMs: r.songStartTimeMs,
            overlapDurationInMs: r.clipDurationMs,
          },
          songUri: r.songUri,
          artworkUri: r.artworkUri,
          style: o != null ? o : void 0,
          contextInfo: t,
        },
      };
    }
    i.default = e;
  },
  66,
);
