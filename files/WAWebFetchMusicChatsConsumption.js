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
      s = "37530667723245709",
      u = "39555726347375671",
      c = new URL("https://acs.whatsapp.com/graphql"),
      d = (656096963291760).toString(),
      m = (0x97e965c4439a).toString();
    async function p(t, n, r) {
      if ((r === void 0 && (r = !1), t.length === 0)) return [];
      var a = r ? u : s,
        i = new Headers();
      i.append("X-FB-Friendly-Name", a);
      try {
        var l = await o("WAWebOHAIClient").fetchOHAI({
          url: c,
          project: o("WAWebMusicOnChatsAcsProject").getMusicOnChatsAcsProject(
            o("WAWebACSTokenConfig").ACS_PROJECTS.WA_ChatsMusic,
          ),
          payload: _(Array.from(new Set(t)), n, a, r),
          headers: i,
        });
        if (!l.ok) return null;
        var d = await l.json();
        return f(d, r);
      } catch (t) {
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[music] chats consumption fetch failed",
                ])),
            )
            .sendLogs("music-chats-consumption-fetch-failed"),
          null
        );
      }
    }
    function _(e, t, n, r) {
      var a = o("WAWebABProps").getABPropConfigValue(
          "music_on_chats_artwork_pixel_side_size",
        ),
        i = new FormData();
      (i.append("app_id", o("WAWebMobilePlatforms").isSMB() ? d : m),
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
    function f(e, t) {
      var n = b(C(C(e, "data"), "music_consumption"), "items");
      if (n == null) return null;
      var r = t && L(e, "errors") == null;
      return n
        .map(function (e) {
          var n = y(e);
          return n == null || !t
            ? n
            : babelHelpers.extends({}, n, {
                lyrics: r ? g(C(C(e, "audio_metadata"), "lyrics")) : null,
              });
        })
        .filter(Boolean);
    }
    function g(e) {
      var t,
        n = (t = b(e, "lines")) != null ? t : [];
      return S(e, "available") !== !0 || n.length === 0
        ? { available: !1 }
        : { available: !0, lines: n.map(h) };
    }
    function h(e) {
      var t, n;
      return {
        startTimeInMs: R(e, "start_time_in_ms"),
        endTimeInMs: R(e, "end_time_in_ms"),
        text: (t = v(C(e, "line"), "text")) != null ? t : "",
        wordOffsets: ((n = b(e, "word_offsets")) != null ? n : []).map(
          function (e) {
            return {
              startIndex: R(e, "start_index"),
              endIndex: R(e, "end_index"),
              startOffsetMs: R(e, "start_offset_ms"),
              endOffsetMs: R(e, "end_offset_ms"),
            };
          },
        ),
      };
    }
    function y(e) {
      var t,
        n,
        r = v(e, "media_id");
      if (r == null) return null;
      var o = C(e, "availability_info"),
        a = C(e, "audio_metadata"),
        i =
          (t =
            (n = b(a, "progressive_download")) == null
              ? void 0
              : n
                  .map(function (e) {
                    return v(e, "url");
                  })
                  .find(Boolean)) != null
            ? t
            : null;
      return {
        artworkUri: v(C(a, "display_image"), "downloadable_uri"),
        isAvailable: S(o, "is_available_for_consumption"),
        mediaId: r,
        songUri: i,
      };
    }
    function C(e, t) {
      var n = L(e, t);
      return n != null && typeof n == "object" && !Array.isArray(n) ? n : null;
    }
    function b(e, t) {
      var n = L(e, t);
      return Array.isArray(n) ? n : null;
    }
    function v(e, t) {
      var n = L(e, t);
      return typeof n == "string" && n !== "" ? n : null;
    }
    function S(e, t) {
      var n = L(e, t);
      return typeof n == "boolean" ? n : null;
    }
    function R(e, t) {
      var n = L(e, t);
      return typeof n == "number" ? n : void 0;
    }
    function L(e, t) {
      return e != null && typeof e == "object" && !Array.isArray(e)
        ? e[t]
        : void 0;
    }
    l.fetchMusicChatsConsumption = p;
  },
  98,
);
