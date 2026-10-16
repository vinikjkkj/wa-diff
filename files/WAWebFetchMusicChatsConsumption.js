__d(
  "WAWebFetchMusicChatsConsumption",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebACSTokenConfig",
    "WAWebL10nGetRenderedLocale",
    "WAWebMobilePlatforms",
    "WAWebOHAIClient",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "37530667723245709",
      u = new URL("https://acs.whatsapp.com/graphql"),
      c = (656096963291760).toString(),
      d = (0x97e965c4439a).toString();
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          if (t.length === 0) return [];
          var r = new Headers();
          r.append("X-FB-Friendly-Name", s);
          try {
            var a = yield o("WAWebOHAIClient").fetchOHAI({
              url: u,
              project: o("WAWebACSTokenConfig").ACS_PROJECTS.WA_ChatsMusic,
              payload: _(Array.from(new Set(t)), n),
              headers: r,
            });
            if (!a.ok) return null;
            var i = yield a.json();
            return f(i);
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
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t) {
      var n = o("WAWebABProps").getABPropConfigValue(
          "music_on_chats_artwork_pixel_side_size",
        ),
        r = new FormData();
      return (
        r.append("app_id", o("WAWebMobilePlatforms").isSMB() ? c : d),
        r.append("doc_id", s),
        r.append(
          "variables",
          JSON.stringify(
            babelHelpers.extends(
              {
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
              },
              n > 0 ? { artwork_edge_size: n } : {},
            ),
          ),
        ),
        r
      );
    }
    function f(e) {
      var t = y(h(h(e, "data"), "music_consumption"), "items");
      return t == null ? null : t.map(g).filter(Boolean);
    }
    function g(e) {
      var t,
        n,
        r = C(e, "media_id");
      if (r == null) return null;
      var o = h(e, "availability_info"),
        a = h(e, "audio_metadata"),
        i =
          (t =
            (n = y(a, "progressive_download")) == null
              ? void 0
              : n
                  .map(function (e) {
                    return C(e, "url");
                  })
                  .find(Boolean)) != null
            ? t
            : null;
      return {
        artworkUri: C(h(a, "display_image"), "downloadable_uri"),
        isAvailable: b(o, "is_available_for_consumption"),
        mediaId: r,
        songUri: i,
      };
    }
    function h(e, t) {
      var n = v(e, t);
      return n != null && typeof n == "object" && !Array.isArray(n) ? n : null;
    }
    function y(e, t) {
      var n = v(e, t);
      return Array.isArray(n) ? n : null;
    }
    function C(e, t) {
      var n = v(e, t);
      return typeof n == "string" && n !== "" ? n : null;
    }
    function b(e, t) {
      var n = v(e, t);
      return typeof n == "boolean" ? n : null;
    }
    function v(e, t) {
      return e != null && typeof e == "object" && !Array.isArray(e)
        ? e[t]
        : void 0;
    }
    l.fetchMusicChatsConsumption = m;
  },
  98,
);
