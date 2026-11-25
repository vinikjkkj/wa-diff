__d(
  "WAWebFetchMusicChatsConsumption",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebACSTokenConfig",
    "WAWebL10nGetRenderedLocale",
    "WAWebMobilePlatforms",
    "WAWebMusicOnChatsAcsProject",
    "WAWebOHAIClient",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = "37530667723245709",
      d = "39555726347375671",
      m = "29310047288635178",
      p = "PROVIDER",
      _ = new URL("https://acs.whatsapp.com/graphql"),
      f = (656096963291760).toString(),
      g = (0x97e965c4439a).toString();
    async function h(t, n, r) {
      if ((r === void 0 && (r = !1), t.length === 0)) return [];
      var a =
          r &&
          o("WAWebABProps").getABPropConfigValue(
            "music_on_chats_lyrics_word_by_word_offsets_enabled",
          ),
        i = y(r, a),
        l = new Headers();
      l.append("X-FB-Friendly-Name", i);
      try {
        var c = await o("WAWebOHAIClient").fetchOHAI({
          url: _,
          project: o("WAWebMusicOnChatsAcsProject").getMusicOnChatsAcsProject(
            o("WAWebACSTokenConfig").ACS_PROJECTS.WA_ChatsMusic,
          ),
          payload: C(Array.from(new Set(t)), n, i, r, a),
          headers: l,
        });
        if (!c.ok)
          return (
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[music] chats consumption fetch failed: HTTP ",
                    "",
                  ])),
                c.status,
              )
              .sendLogs("music-chats-consumption-fetch-failed"),
            null
          );
        var d = await c.json(),
          m = b(d, r);
        return (
          m == null &&
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[music] chats consumption answer has no items",
                  ])),
              )
              .sendLogs("music-chats-consumption-fetch-failed"),
          m
        );
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[music] chats consumption fetch failed",
                ])),
            )
            .sendLogs("music-chats-consumption-fetch-failed"),
          null
        );
      }
    }
    function y(e, t) {
      return t ? m : e ? d : c;
    }
    function C(e, t, n, r, a) {
      var i = o("WAWebABProps").getABPropConfigValue(
          "music_on_chats_artwork_pixel_side_size",
        ),
        l = new FormData();
      (l.append("app_id", o("WAWebMobilePlatforms").isSMB() ? f : g),
        l.append("doc_id", n));
      var s = {
        params: {
          context: {
            user_countries: [t],
            locale: o(
              "WAWebL10nGetRenderedLocale",
            ).WAWebL10nGetRenderedLocale(),
          },
          media: e.map(function (e) {
            return { media_id: e, media_type: "VIDEO_MEDIA" };
          }),
          product: "WA_CHATS",
        },
      };
      return (
        i > 0 && (s.artwork_edge_size = i),
        r && (s.include_lyrics = !0),
        a && (s.include_word_offsets = !0),
        l.append("variables", JSON.stringify(s)),
        l
      );
    }
    function b(e, t) {
      var n = E(L(L(e, "data"), "music_consumption"), "items");
      if (n == null) return null;
      var r = t && D(e, "errors") == null;
      return n
        .map(function (e) {
          var n = R(e);
          return n == null || !t
            ? n
            : babelHelpers.extends({}, n, {
                lyrics: r ? v(L(L(e, "audio_metadata"), "lyrics")) : null,
              });
        })
        .filter(Boolean);
    }
    function v(e) {
      var t,
        n = (t = E(e, "lines")) != null ? t : [];
      if (I(e, "available") !== !0 || n.length === 0) return { available: !1 };
      var r = k(e, "word_timing_source") === p;
      return {
        available: !0,
        lines: n.map(function (e) {
          return S(e, r);
        }),
      };
    }
    function S(e, t) {
      var n,
        r = t ? E(e, "word_offsets") : null;
      return {
        startTimeInMs: T(e, "start_time_in_ms"),
        endTimeInMs: T(e, "end_time_in_ms"),
        text: (n = k(L(e, "line"), "text")) != null ? n : "",
        wordOffsets: (r != null ? r : []).map(function (e) {
          return {
            startIndex: T(e, "start_index"),
            endIndex: T(e, "end_index"),
            startOffsetMs: T(e, "start_offset_ms"),
            endOffsetMs: T(e, "end_offset_ms"),
          };
        }),
      };
    }
    function R(e) {
      var t,
        n,
        r = k(e, "media_id");
      if (r == null) return null;
      var o = L(e, "availability_info"),
        a = L(e, "audio_metadata"),
        i =
          (t =
            (n = E(a, "progressive_download")) == null
              ? void 0
              : n
                  .map(function (e) {
                    return k(e, "url");
                  })
                  .find(Boolean)) != null
            ? t
            : null;
      return {
        artworkUri: k(L(a, "display_image"), "downloadable_uri"),
        isAvailable: I(o, "is_available_for_consumption"),
        mediaId: r,
        songUri: i,
      };
    }
    function L(e, t) {
      var n = D(e, t);
      return n != null && typeof n == "object" && !Array.isArray(n) ? n : null;
    }
    function E(e, t) {
      var n = D(e, t);
      return Array.isArray(n) ? n : null;
    }
    function k(e, t) {
      var n = D(e, t);
      return typeof n == "string" && n !== "" ? n : null;
    }
    function I(e, t) {
      var n = D(e, t);
      return typeof n == "boolean" ? n : null;
    }
    function T(e, t) {
      var n = D(e, t);
      return typeof n == "number" ? n : void 0;
    }
    function D(e, t) {
      return e != null && typeof e == "object" && !Array.isArray(e)
        ? e[t]
        : void 0;
    }
    l.fetchMusicChatsConsumption = h;
  },
  98,
);
