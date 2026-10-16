__d(
  "WAWebMusicParsingUtils",
  [
    "WABase64",
    "WALogger",
    "WALongInt",
    "WAWebAsISOCountryCode",
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
      _ = 2147483647,
      f = [".fbcdn.net", ".whatsapp.net"];
    function g(e) {
      var t = [];
      for (var n of e) t.push(n.charCodeAt(0), n.charCodeAt(1));
      return new Uint8Array(t).buffer;
    }
    function h(t) {
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
    function y(e) {
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
            countryBlocklist: s != null ? h(s) : new Set(),
          };
    }
    function C(e) {
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
        L = a.songId,
        E = a.title;
      if (y == null || L == null || f == null || E == null) return null;
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
      var k = S(C);
      return {
        musicContentMediaId: y,
        songId: L,
        author: f,
        title: E,
        songUri: v(i, "song"),
        artworkUri: v(r, "artwork"),
        style:
          (t = o(
            "WAWebProtobufsE2E.pb",
          ).Message$MusicMessage$MusicMessageStyle.cast(l)) != null
            ? t
            : void 0,
        songStartTimeMs: k != null ? k : void 0,
        clipDurationMs: (n = R(k, b)) != null ? n : void 0,
        isExplicit: h,
        countryBlocklist: g,
        artistAttribution: c,
        artworkDirectPath: d,
        artworkSha256: _,
        artworkEncSha256: m,
        artworkMediaKey: p,
      };
    }
    function b(e) {
      return (
        e != null &&
        e.style ===
          o("WAWebProtobufsE2E.pb").Message$MusicMessage$MusicMessageStyle
            .VINYL &&
        e.songUri != null &&
        o("WAWebMusicGatingUtils").isMusicOnChatsReceiverEnabled()
      );
    }
    function v(e, t) {
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
          !f.some(function (e) {
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
    function S(e) {
      if (e == null) return 0;
      var t = o("WALongInt").maybeNumber(e);
      return t == null || t < 0 || t > _
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
    function R(e, t) {
      if (e == null || t == null) return null;
      var n = o("WALongInt").maybeNumber(t);
      return n == null || n <= 0 || n > _ - e
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
    ((l.countryCodeSetToBuffer = g),
      (l.mapToCountryCode = h),
      (l.toMusicMetadata = y),
      (l.toMusicData = C),
      (l.canRenderMusicMessage = b),
      (l.toAllowedUri = v));
  },
  98,
);
