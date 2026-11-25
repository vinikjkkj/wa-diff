__d(
  "WAWebMusicParsingUtils",
  [
    "WABase64",
    "WALogger",
    "WALongInt",
    "WAWebABProps",
    "WAWebAsISOCountryCode",
    "WAWebMusicClip",
    "WAWebMusicGatingUtils",
    "WAWebProtobufsE2E.pb",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f = 2147483647,
      g = [".fbcdn.net", ".whatsapp.net"];
    function h(e) {
      var t = [];
      for (var n of e) t.push(n.charCodeAt(0), n.charCodeAt(1));
      return new Uint8Array(t).buffer;
    }
    function y(t) {
      for (
        var n = Array.from(new Uint8Array(t)).map(function (e) {
            return String.fromCharCode(e);
          }),
          r = new Set(),
          a = new Set(),
          i = 0;
        i < n.length - 1;
        i += 2
      ) {
        var l = ("" + n[i] + n[i + 1]).toUpperCase(),
          s = o("WAWebAsISOCountryCode").asISOCountryCode(l);
        s != null ? r.add(s) : a.add(l);
      }
      return (
        a.size > 0 &&
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[music] invalid country codes",
                ])),
            )
            .sendLogs("music-invalid-country-codes"),
        r
      );
    }
    function C(e) {
      var t = e.artistAttribution,
        n = e.artworkDirectPath,
        r = e.artworkEncSha256,
        a = e.artworkMediaKey,
        i = e.artworkSha256,
        l = e.author,
        s = e.countryBlocklist,
        u = e.isExplicit,
        c = e.musicContentMediaId,
        d = e.songId,
        m = e.title;
      return c == null || d == null || l == null || m == null
        ? null
        : {
            musicContentMediaId: c,
            songId: d,
            author: l,
            title: m,
            artworkDirectPath: n,
            artworkSha256: i != null ? o("WABase64").encodeB64(i) : void 0,
            artworkEncSha256: r != null ? o("WABase64").encodeB64(r) : void 0,
            artworkMediaKey: a != null ? o("WABase64").encodeB64(a) : void 0,
            isExplicit: !!u,
            artistAttribution: t,
            countryBlocklist: s != null ? y(s) : new Set(),
          };
    }
    function b(e) {
      var t,
        n,
        r = e.artworkUri,
        a = e.embeddedMusic,
        i = e.songUri,
        l = e.style;
      if (a == null) return null;
      var c = a.artistAttribution,
        d = a.artworkDirectPath,
        m = a.artworkEncSha256,
        p = a.artworkMediaKey,
        _ = a.artworkSha256,
        f = a.author,
        g = a.countryBlocklist,
        h = a.isExplicit,
        y = a.musicContentMediaId,
        C = a.musicSongStartTimeInMs,
        b = a.overlapDurationInMs,
        v = a.songId,
        S = a.title;
      if (y == null || v == null || f == null || S == null) return null;
      (i == null &&
        o("WALogger").WARN(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[music] music message has no song uri",
            ])),
        ),
        r == null &&
          o("WALogger").WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[music] music message has no artwork uri",
              ])),
          ));
      var R = E(C);
      return {
        musicContentMediaId: y,
        songId: v,
        author: f,
        title: S,
        songUri: L(i, "song"),
        artworkUri: L(r, "artwork"),
        style:
          (t = o(
            "WAWebProtobufsE2E.pb",
          ).Message$MusicMessage$MusicMessageStyle.cast(l)) != null
            ? t
            : void 0,
        songStartTimeMs: R != null ? R : void 0,
        clipDurationMs: (n = k(R, b)) != null ? n : void 0,
        isExplicit: h,
        countryBlocklist: g,
        artistAttribution: c,
        artworkDirectPath: d,
        artworkSha256: _,
        artworkEncSha256: m,
        artworkMediaKey: p,
      };
    }
    function v(e) {
      return (
        e != null &&
        e.songUri != null &&
        o("WAWebMusicGatingUtils").isMusicOnChatsReceiverEnabled() &&
        S(e.style) != null
      );
    }
    function S(e) {
      return e ===
        o("WAWebProtobufsE2E.pb").Message$MusicMessage$MusicMessageStyle.VINYL
        ? o("WAWebProtobufsE2E.pb").Message$MusicMessage$MusicMessageStyle.VINYL
        : e ===
            o("WAWebProtobufsE2E.pb").Message$MusicMessage$MusicMessageStyle
              .MESSAGE_BUBBLE
          ? o("WAWebABProps").getABPropConfigValue(
              "music_on_chats_style_message_bubble_receiver_enabled",
            )
            ? o("WAWebProtobufsE2E.pb").Message$MusicMessage$MusicMessageStyle
                .MESSAGE_BUBBLE
            : null
          : e ===
                o("WAWebProtobufsE2E.pb").Message$MusicMessage$MusicMessageStyle
                  .LYRICS &&
              o("WAWebABProps").getABPropConfigValue(
                "music_on_chats_style_lyrics_receiver_enabled",
              )
            ? o("WAWebProtobufsE2E.pb").Message$MusicMessage$MusicMessageStyle
                .LYRICS
            : null;
    }
    function R(e) {
      var t = [
        o("WAWebProtobufsE2E.pb").Message$MusicMessage$MusicMessageStyle.VINYL,
      ];
      return (
        S(
          o("WAWebProtobufsE2E.pb").Message$MusicMessage$MusicMessageStyle
            .MESSAGE_BUBBLE,
        ) != null &&
          o("WAWebABProps").getABPropConfigValue(
            "music_on_chats_style_message_bubble_producer_enabled",
          ) &&
          t.push(
            o("WAWebProtobufsE2E.pb").Message$MusicMessage$MusicMessageStyle
              .MESSAGE_BUBBLE,
          ),
        e &&
          S(
            o("WAWebProtobufsE2E.pb").Message$MusicMessage$MusicMessageStyle
              .LYRICS,
          ) != null &&
          o("WAWebABProps").getABPropConfigValue(
            "music_on_chats_style_lyrics_producer_enabled",
          ) &&
          t.push(
            o("WAWebProtobufsE2E.pb").Message$MusicMessage$MusicMessageStyle
              .LYRICS,
          ),
        t
      );
    }
    function L(e, t) {
      if (e != null) {
        var n;
        try {
          n = new URL(e);
        } catch (e) {
          o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[music] dropped unparseable ",
                  " uri",
                ])),
              t,
            )
            .sendLogs("music-uri-not-allowed");
          return;
        }
        var r = n,
          a = r.hostname,
          i = r.protocol;
        if (
          i !== "https:" ||
          !g.some(function (e) {
            return a.endsWith(e);
          })
        ) {
          o("WALogger")
            .ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[music] dropped ",
                  " uri on ",
                  "//",
                  "",
                ])),
              t,
              i,
              a,
            )
            .sendLogs("music-uri-not-allowed");
          return;
        }
        return e;
      }
    }
    function E(e) {
      if (e == null) return 0;
      var t = o("WALongInt").maybeNumber(e);
      return t == null || t < 0 || t > f
        ? (o("WALogger").WARN(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[music] song start time out of range: ",
                "",
              ])),
            String(e),
          ),
          null)
        : t;
    }
    function k(e, t) {
      if (e == null || t == null) return null;
      var n = I(o("WALongInt").maybeNumber(t));
      return n == null || n <= 0 || n > f - e
        ? (o("WALogger").WARN(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "[music] clip duration out of range: ",
                "",
              ])),
            String(t),
          ),
          null)
        : n;
    }
    function I(e) {
      return e == null || e <= o("WAWebMusicClip").MAX_CLIP_MS
        ? e
        : (o("WALogger").WARN(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[music] clip duration clamped: ",
                "",
              ])),
            String(e),
          ),
          o("WAWebMusicClip").MAX_CLIP_MS);
    }
    ((l.countryCodeSetToBuffer = h),
      (l.mapToCountryCode = y),
      (l.toMusicMetadata = C),
      (l.toMusicData = b),
      (l.canRenderMusicMessage = v),
      (l.renderableMusicStyle = S),
      (l.getProducibleStyles = R),
      (l.toAllowedUri = L));
  },
  98,
);
