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
      m = new URL("https://acs.whatsapp.com/graphql"),
      p = (656096963291760).toString(),
      _ = (0x97e965c4439a).toString();
    async function f(t, n, r) {
      if ((r === void 0 && (r = !1), t.length === 0)) return [];
      var a = r ? d : c,
        i = new Headers();
      i.append("X-FB-Friendly-Name", a);
      try {
        var l = await o("WAWebOHAIClient").fetchOHAI({
          url: m,
          project: o("WAWebMusicOnChatsAcsProject").getMusicOnChatsAcsProject(
            o("WAWebACSTokenConfig").ACS_PROJECTS.WA_ChatsMusic,
          ),
          payload: g(Array.from(new Set(t)), n, a, r),
          headers: i,
        });
        if (!l.ok)
          return (
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[music] chats consumption fetch failed: HTTP ",
                    "",
                  ])),
                l.status,
              )
              .sendLogs("music-chats-consumption-fetch-failed"),
            null
          );
        var p = await l.json(),
          _ = h(p, r);
        return (
          _ == null &&
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[music] chats consumption answer has no items",
                  ])),
              )
              .sendLogs("music-chats-consumption-fetch-failed"),
          _
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
    function g(e, t, n, r) {
      var a = o("WAWebABProps").getABPropConfigValue(
          "music_on_chats_artwork_pixel_side_size",
        ),
        i = new FormData();
      (i.append("app_id", o("WAWebMobilePlatforms").isSMB() ? p : _),
        i.append("doc_id", n));
      var l = {
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
        a > 0 && (l.artwork_edge_size = a),
        r &&
          ((l.include_lyrics = !0),
          o("WAWebABProps").getABPropConfigValue(
            "music_on_chats_lyrics_word_by_word_offsets_enabled",
          ) && (l.include_word_offsets = !0)),
        i.append("variables", JSON.stringify(l)),
        i
      );
    }
    function h(e, t) {
      var n = S(v(v(e, "data"), "music_consumption"), "items");
      if (n == null) return null;
      var r = t && k(e, "errors") == null;
      return n
        .map(function (e) {
          var n = b(e);
          return n == null || !t
            ? n
            : babelHelpers.extends({}, n, {
                lyrics: r ? y(v(v(e, "audio_metadata"), "lyrics")) : null,
              });
        })
        .filter(Boolean);
    }
    function y(e) {
      var t,
        n = (t = S(e, "lines")) != null ? t : [];
      return L(e, "available") !== !0 || n.length === 0
        ? { available: !1 }
        : { available: !0, lines: n.map(C) };
    }
    function C(e) {
      var t, n;
      return {
        startTimeInMs: E(e, "start_time_in_ms"),
        endTimeInMs: E(e, "end_time_in_ms"),
        text: (t = R(v(e, "line"), "text")) != null ? t : "",
        wordOffsets: ((n = S(e, "word_offsets")) != null ? n : []).map(
          function (e) {
            return {
              startIndex: E(e, "start_index"),
              endIndex: E(e, "end_index"),
              startOffsetMs: E(e, "start_offset_ms"),
              endOffsetMs: E(e, "end_offset_ms"),
            };
          },
        ),
      };
    }
    function b(e) {
      var t,
        n,
        r = R(e, "media_id");
      if (r == null) return null;
      var o = v(e, "availability_info"),
        a = v(e, "audio_metadata"),
        i =
          (t =
            (n = S(a, "progressive_download")) == null
              ? void 0
              : n
                  .map(function (e) {
                    return R(e, "url");
                  })
                  .find(Boolean)) != null
            ? t
            : null;
      return {
        artworkUri: R(v(a, "display_image"), "downloadable_uri"),
        isAvailable: L(o, "is_available_for_consumption"),
        mediaId: r,
        songUri: i,
      };
    }
    function v(e, t) {
      var n = k(e, t);
      return n != null && typeof n == "object" && !Array.isArray(n) ? n : null;
    }
    function S(e, t) {
      var n = k(e, t);
      return Array.isArray(n) ? n : null;
    }
    function R(e, t) {
      var n = k(e, t);
      return typeof n == "string" && n !== "" ? n : null;
    }
    function L(e, t) {
      var n = k(e, t);
      return typeof n == "boolean" ? n : null;
    }
    function E(e, t) {
      var n = k(e, t);
      return typeof n == "number" ? n : void 0;
    }
    function k(e, t) {
      return e != null && typeof e == "object" && !Array.isArray(e)
        ? e[t]
        : void 0;
    }
    l.fetchMusicChatsConsumption = f;
  },
  98,
);
