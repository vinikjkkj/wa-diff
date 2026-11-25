__d(
  "WAWebMusicCreationReporter",
  [
    "WALogger",
    "WAWebACSTokenConfig",
    "WAWebAsISOCountryCode",
    "WAWebL10nGetRenderedLocale",
    "WAWebMusicGatingUtils",
    "WAWebMusicGraphQLRequest",
    "WAWebMusicViewerCountry",
    "WAWebProtobufsE2E.pb",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = "9431011343674518",
      m = "25768196902809900",
      p = 150,
      _ = 4586008;
    async function f(t) {
      if (o("WAWebMusicGatingUtils").isMusicReportingStubbed())
        return (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[music] creation report stubbed",
              ])),
          ),
          {
            type: "reported",
            mediaId: o("WAWebMusicGatingUtils").MUSIC_REPORTING_STUB_MEDIA_ID,
            countryBlocklist: new Set(),
          }
        );
      var n = o("WAWebMusicViewerCountry").getMusicViewerCountry();
      if (n == null) return v("no_country");
      var r = await o("WAWebMusicGraphQLRequest").fetchMusicGraphQL({
        docId: d,
        project: o("WAWebACSTokenConfig").ACS_PROJECTS.WA_ChatsMusicReporting,
        variables: g(t, n),
        viaOhai: !0,
      });
      if (!r.ok) return h(r.error);
      var a = y(S(r.data, "xwa_music_creation_reporting")),
        i = r.errors.at(0);
      return i != null && (a == null || i.code === _)
        ? h({ type: "graphql", code: i.code })
        : a != null
          ? a
          : C(t.songId, n);
    }
    function g(e, t) {
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
    function h(e) {
      return e.type !== "graphql"
        ? v(e.type)
        : e.code === _
          ? { type: "song_unavailable" }
          : (o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[music] creation report failed: graphql ",
                    "",
                  ])),
                String(e.code),
              )
              .sendLogs("music-creation-report-graphql-error"),
            { type: "failed", reason: "graphql" });
    }
    function y(e) {
      var t = S(e, "music_content_media_id");
      if (typeof t != "string" || t === "") return null;
      var n = S(e, "country_blocklist");
      return {
        type: "reported",
        mediaId: t,
        countryBlocklist: b(Array.isArray(n) ? n : []),
      };
    }
    async function C(e, t) {
      var n = await o("WAWebMusicGraphQLRequest").fetchMusicGraphQL({
          docId: m,
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
            artwork_edge_size: p,
          },
          viaOhai: !1,
        }),
        r =
          n.ok && n.errors.length === 0 ? S(n.data, "music_song_batch") : null;
      return Array.isArray(r) && r.length === 0
        ? { type: "song_unavailable" }
        : v("empty_media_id");
    }
    function b(e) {
      var t = new Set();
      for (var n of e) {
        var r =
          typeof n == "string"
            ? o("WAWebAsISOCountryCode").asISOCountryCode(n)
            : null;
        r == null
          ? o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[music] creation report: ignored an invalid blocklist country",
                  ])),
              )
              .sendLogs("music-creation-report-invalid-country")
          : t.add(r);
      }
      return t;
    }
    function v(e) {
      return (
        o("WALogger").WARN(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "[music] creation report failed: ",
              "",
            ])),
          e,
        ),
        { type: "failed", reason: e }
      );
    }
    function S(e, t) {
      return e != null && typeof e == "object" && !Array.isArray(e)
        ? e[t]
        : void 0;
    }
    l.reportMusicCreation = f;
  },
  98,
);
