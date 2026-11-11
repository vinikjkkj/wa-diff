__d(
  "WAWebFetchMusicLyrics",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebACSTokenConfig",
    "WAWebAsISOCountryCode",
    "WAWebL10NCountryCodes",
    "WAWebL10nGetRenderedLocale",
    "WAWebMusicGraphQLRequest",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = "24217912891242463",
      c = "40015884884663230";
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
            n =
              t != null
                ? o("WAWebAsISOCountryCode").asISOCountryCode(
                    o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(
                      t.user,
                    ),
                  )
                : null;
          if (n == null) return { status: "unavailable" };
          var r = o("WAWebABProps").getABPropConfigValue(
              "music_on_chats_lyrics_word_by_word_offsets_enabled",
            ),
            a = yield o("WAWebMusicGraphQLRequest").fetchMusicGraphQL({
              docId: r ? c : u,
              project: o("WAWebACSTokenConfig").ACS_PROJECTS.WA_ChatsMusic,
              variables: babelHelpers.extends(
                {
                  available_countries: [n],
                  id: e,
                  params: {
                    locale: o(
                      "WAWebL10nGetRenderedLocale",
                    ).WAWebL10nGetRenderedLocale(),
                    product: "WA_CHATS",
                  },
                },
                r ? { include_word_offsets: !0 } : {},
              ),
              viaOhai: !1,
            });
          if (!a.ok) return { status: "failed" };
          var i = g(a.data, "music_song_batch");
          if (!Array.isArray(i)) return { status: "failed" };
          var l = g(i[0], "lyrics"),
            s = p(l, r);
          return s != null
            ? { status: "available", lines: s }
            : l == null && a.errors.length > 0
              ? { status: "failed" }
              : { status: "unavailable" };
        })),
        m.apply(this, arguments)
      );
    }
    function p(t, n) {
      var r = g(t, "lines");
      if (g(t, "available") !== !0 || !Array.isArray(r)) return null;
      var a = r.map(function (e) {
        return _(e, n);
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
    function _(e, t) {
      var n = g(e, "start_time_in_ms"),
        r = g(e, "end_time_in_ms"),
        o = g(g(e, "line"), "text");
      return typeof n != "number" ||
        typeof r != "number" ||
        typeof o != "string"
        ? null
        : {
            startTimeMs: n,
            endTimeMs: r,
            text: o,
            wordOffsets: t ? f(g(e, "word_offsets")) : [],
          };
    }
    function f(e) {
      if (!Array.isArray(e)) return [];
      var t = e.map(function (e) {
        var t = g(e, "start_index"),
          n = g(e, "end_index"),
          r = g(e, "start_offset_ms"),
          o = g(e, "end_offset_ms");
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
    function g(e, t) {
      return e != null && typeof e == "object" && !Array.isArray(e)
        ? e[t]
        : void 0;
    }
    l.fetchMusicLyrics = d;
  },
  98,
);
