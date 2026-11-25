__d(
  "WAWebMusicCreationReporter",
  [
    "WALogger",
    "WAWebACSTokenConfig",
    "WAWebAsISOCountryCode",
    "WAWebL10nGetRenderedLocale",
    "WAWebMusicGraphQLRequest",
    "WAWebMusicViewerCountry",
    "WAWebProtobufsE2E.pb",
    "cr:18770",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = "9431011343674518",
      d = "25768196902809900",
      m = 150,
      p = 4586008;
    async function _(e) {
      var t = o("WAWebMusicViewerCountry").getMusicViewerCountry();
      if (t == null) return b("no_country");
      var r = await o("WAWebMusicGraphQLRequest").fetchMusicGraphQL({
        docId: c,
        project: o("WAWebACSTokenConfig").ACS_PROJECTS.WA_ChatsMusicReporting,
        variables: f(e, t),
        viaOhai:
          (n("cr:18770") == null
            ? void 0
            : n("cr:18770").isDirectCreationReportingEnabled()) !== !0,
      });
      if (!r.ok) return g(r.error);
      var a = h(v(r.data, "xwa_music_creation_reporting")),
        i = r.errors.at(0);
      return i != null && (a == null || i.code === p)
        ? g({ type: "graphql", code: i.code })
        : a != null
          ? a
          : y(e.songId, t);
    }
    function f(e, t) {
      var n = e.clipDurationMs,
        r = e.songId,
        a = e.songStartTimeMs,
        i = e.style;
      return {
        music_song_usage: {
          music_song_id: r,
          music_song_start_time_in_ms: a,
          derived_content_start_time_in_ms: 0,
          overlap_duration_in_ms: n,
          lyrics_usage_type:
            i ===
            o("WAWebProtobufsE2E.pb").Message$MusicMessage$MusicMessageStyle
              .LYRICS
              ? "LYRICS_STICKER"
              : "NO_USAGE",
        },
        country: t,
        language_code: o("WAWebL10nGetRenderedLocale")
          .WAWebL10nGetRenderedLocale()
          .split("_")[0],
        product: "WA_CHATS",
        browse_session_id: crypto.randomUUID(),
      };
    }
    function g(t) {
      return t.type !== "graphql"
        ? b(t.type)
        : t.code === p
          ? { type: "song_unavailable" }
          : (o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[music] creation report failed: graphql ",
                    "",
                  ])),
                String(t.code),
              )
              .sendLogs("music-creation-report-graphql-error"),
            { type: "failed", reason: "graphql" });
    }
    function h(e) {
      var t = v(e, "music_content_media_id");
      if (typeof t != "string" || t === "") return null;
      var n = v(e, "country_blocklist");
      return {
        type: "reported",
        mediaId: t,
        countryBlocklist: C(Array.isArray(n) ? n : []),
      };
    }
    async function y(e, t) {
      var n = await o("WAWebMusicGraphQLRequest").fetchMusicGraphQL({
          docId: d,
          project: o("WAWebACSTokenConfig").ACS_PROJECTS.WA_ChatsMusic,
          variables: {
            params: {
              available_countries: [t],
              ids: [e],
              locale: o(
                "WAWebL10nGetRenderedLocale",
              ).WAWebL10nGetRenderedLocale(),
              product: "WA_CHATS",
            },
            artwork_edge_size: m,
          },
          viaOhai: !1,
        }),
        r =
          n.ok && n.errors.length === 0 ? v(n.data, "music_song_batch") : null;
      return Array.isArray(r) && r.length === 0
        ? { type: "song_unavailable" }
        : b("empty_media_id");
    }
    function C(e) {
      var t = new Set();
      for (var n of e) {
        var r =
          typeof n == "string"
            ? o("WAWebAsISOCountryCode").asISOCountryCode(n)
            : null;
        r == null
          ? o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[music] creation report: ignored an invalid blocklist country",
                  ])),
              )
              .sendLogs("music-creation-report-invalid-country")
          : t.add(r);
      }
      return t;
    }
    function b(e) {
      return (
        o("WALogger").WARN(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[music] creation report failed: ",
              "",
            ])),
          e,
        ),
        { type: "failed", reason: e }
      );
    }
    function v(e, t) {
      return e != null && typeof e == "object" && !Array.isArray(e)
        ? e[t]
        : void 0;
    }
    l.reportMusicCreation = _;
  },
  98,
);
