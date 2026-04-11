__d(
  "WAWebMusicParsingUtils",
  ["WABase64", "WALogger", "WAWebAsISOCountryCode"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      var t = [];
      for (var n of e) t.push(n.charCodeAt(0), n.charCodeAt(1));
      return new Uint8Array(t).buffer;
    }
    function u(t) {
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
    function c(e) {
      var t = e.artistAttribution,
        n = e.artworkDirectPath,
        r = e.artworkEncSha256,
        a = e.artworkMediaKey,
        i = e.artworkSha256,
        l = e.author,
        s = e.countryBlocklist,
        c = e.isExplicit,
        d = e.musicContentMediaId,
        m = e.songId,
        p = e.title;
      return d == null || m == null || l == null || p == null
        ? null
        : {
            musicContentMediaId: d,
            songId: m,
            author: l,
            title: p,
            artworkDirectPath: n,
            artworkSha256: i != null ? o("WABase64").encodeB64(i) : void 0,
            artworkEncSha256: r != null ? o("WABase64").encodeB64(r) : void 0,
            artworkMediaKey: a != null ? o("WABase64").encodeB64(a) : void 0,
            isExplicit: !!c,
            artistAttribution: t,
            countryBlocklist: s != null ? u(s) : new Set(),
          };
    }
    ((l.countryCodeSetToBuffer = s),
      (l.mapToCountryCode = u),
      (l.toMusicMetadata = c));
  },
  98,
);
