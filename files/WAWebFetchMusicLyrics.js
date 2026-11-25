__d(
  "WAWebFetchMusicLyrics",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebACSTokenConfig",
    "WAWebL10nGetRenderedLocale",
    "WAWebMusicGraphQLRequest",
    "WAWebMusicViewerCountry",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = "24217912891242463",
      c = "40015884884663230";
    async function d(e) {
      var t = o("WAWebMusicViewerCountry").getMusicViewerCountry();
      if (t == null) return { status: "unavailable" };
      var n = o("WAWebABProps").getABPropConfigValue(
          "music_on_chats_lyrics_word_by_word_offsets_enabled",
        ),
        r = await o("WAWebMusicGraphQLRequest").fetchMusicGraphQL({
          docId: n ? c : u,
          project: o("WAWebACSTokenConfig").ACS_PROJECTS.WA_ChatsMusic,
          variables: babelHelpers.extends(
            {
              available_countries: [t],
              id: e,
              params: {
                locale: o(
                  "WAWebL10nGetRenderedLocale",
                ).WAWebL10nGetRenderedLocale(),
                product: "WA_CHATS",
              },
            },
            n ? { include_word_offsets: !0 } : {},
          ),
          viaOhai: !1,
        });
      if (!r.ok) return { status: "failed" };
      var a = f(r.data, "music_song_batch");
      if (!Array.isArray(a)) return { status: "failed" };
      var i = f(a[0], "lyrics"),
        l = m(i, n);
      return l != null
        ? { status: "available", lines: l }
        : i == null && r.errors.length > 0
          ? { status: "failed" }
          : { status: "unavailable" };
    }
    function m(t, n) {
      var r = f(t, "lines");
      if (f(t, "available") !== !0 || !Array.isArray(r)) return null;
      var a = r.map(function (e) {
        return p(e, n);
      });
      return a.length === 0
        ? null
        : a.some(function (e) {
              return e == null;
            })
          ? (o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[music] editor lyrics dropped: unreadable line, ",
                  " lines",
                ])),
              a.length,
            ),
            null)
          : a.filter(Boolean);
    }
    function p(e, t) {
      var n = f(e, "start_time_in_ms"),
        r = f(e, "end_time_in_ms"),
        o = f(f(e, "line"), "text");
      return typeof n != "number" ||
        typeof r != "number" ||
        typeof o != "string"
        ? null
        : {
            startTimeMs: n,
            endTimeMs: r,
            text: o,
            wordOffsets: t ? _(f(e, "word_offsets")) : [],
          };
    }
    function _(e) {
      if (!Array.isArray(e)) return [];
      var t = e.map(function (e) {
        var t = f(e, "start_index"),
          n = f(e, "end_index"),
          r = f(e, "start_offset_ms"),
          o = f(e, "end_offset_ms");
        return typeof t == "number" &&
          typeof n == "number" &&
          typeof r == "number" &&
          typeof o == "number"
          ? { startIndex: t, endIndex: n, startOffsetMs: r, endOffsetMs: o }
          : null;
      });
      return t.some(function (e) {
        return e == null;
      })
        ? (o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[music] editor lyrics word timing dropped",
              ])),
          ),
          [])
        : t.filter(Boolean);
    }
    function f(e, t) {
      return e != null && typeof e == "object" && !Array.isArray(e)
        ? e[t]
        : void 0;
    }
    l.fetchMusicLyrics = d;
  },
  98,
);
