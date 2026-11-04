__d(
  "WAWebMusicGenerateMusicMessageProto",
  ["WALogger", "WAWebABProps", "WAWebMusicLyricsUtils", "WAWebProtobufsE2E.pb"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      var n = t.contextInfo,
        r = t.json,
        a = t.msgContext,
        i = r.musicData;
      if (i == null) return null;
      var l = a === "quoted";
      if (i.musicContentMediaId == null || i.musicContentMediaId === "")
        return (
          l ||
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[music] refused to generate a song without a media id",
                  ])),
              )
              .sendLogs("music-generate-no-media-id"),
          null
        );
      var s = u(i, n);
      return l
        ? { musicMessage: s }
        : {
            musicMessage: babelHelpers.extends({}, s, {
              embeddedMusic: babelHelpers.extends({}, s.embeddedMusic, {
                derivedContentStartTimeInMs: 0,
              }),
              lyrics: c(i),
            }),
          };
    }
    function u(e, t) {
      var n = e.style;
      return {
        embeddedMusic: {
          musicContentMediaId: e.musicContentMediaId,
          songId: e.songId,
          author: e.author,
          title: e.title,
          artistAttribution: e.artistAttribution,
          artworkDirectPath: e.artworkDirectPath,
          artworkSha256: e.artworkSha256,
          artworkEncSha256: e.artworkEncSha256,
          artworkMediaKey: e.artworkMediaKey,
          countryBlocklist: e.countryBlocklist,
          isExplicit: e.isExplicit,
          musicSongStartTimeInMs: e.songStartTimeMs,
          overlapDurationInMs: e.clipDurationMs,
        },
        songUri: e.songUri,
        artworkUri: e.artworkUri,
        style: n != null ? n : void 0,
        contextInfo: t,
      };
    }
    function c(e) {
      var t = e.clipDurationMs,
        n = e.lyrics,
        r = e.songStartTimeMs,
        a = e.style;
      if (
        a !==
          o("WAWebProtobufsE2E.pb").Message$MusicMessage$MusicMessageStyle
            .LYRICS ||
        n == null
      )
        return null;
      var i = n.map(d),
        l = o("WAWebMusicLyricsUtils").toMusicLyrics({ lines: i }, r, t);
      if (l == null) return null;
      var s =
        o("WAWebABProps").getABPropConfigValue(
          "music_on_chats_lyrics_word_by_word_offsets_enabled",
        ) &&
        l.every(function (e, t) {
          return e.wordOffsets.length === i[t].wordOffsets.length;
        });
      return {
        lines: s
          ? i
          : i.map(function (e) {
              return babelHelpers.extends({}, e, { wordOffsets: [] });
            }),
      };
    }
    function d(e) {
      var t = function (n) {
        return n > e.text.length ? n : Array.from(e.text.slice(0, n)).length;
      };
      return {
        startTimeInMs: e.startTimeMs,
        endTimeInMs: e.endTimeMs,
        text: e.text,
        wordOffsets: e.wordOffsets.map(function (e) {
          return {
            startIndex: t(e.startIndex),
            endIndex: t(e.endIndex),
            startOffsetMs: e.startOffsetMs,
            endOffsetMs: e.endOffsetMs,
          };
        }),
      };
    }
    l.default = s;
  },
  98,
);
