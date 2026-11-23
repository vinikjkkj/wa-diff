__d(
  "WAWebFetchMusicConsumptionAvailability",
  [
    "WALogger",
    "WAWebACSNetwork",
    "WAWebL10nGetRenderedLocale",
    "WAWebMobilePlatforms",
    "WAWebNetworkStatus",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (656096963291760).toString(),
      u = (0x97e965c4439a).toString(),
      c = "25515047708128522",
      d = "https://acs.whatsapp.com/graphql";
    async function m(t, n) {
      await r("WAWebNetworkStatus").waitIfOffline();
      try {
        var a,
          i,
          l,
          s,
          u = p(n, t),
          c = await o("WAWebACSNetwork").fetchWithACSCredential({
            project: "WA_ChannelsMusic",
            url: d,
            data: u,
          });
        if (c == null)
          throw r("err")("Failed to fetch music consumption availability");
        var m = await c.json(),
          _ =
            (a =
              (i = m.data) == null || (i = i.music_consumption) == null
                ? void 0
                : i.items) != null
              ? a
              : [];
        if (_.length === 0)
          throw r("err")("No items returned in music consumption response");
        var f =
          (l =
            (s = _[0]) == null || (s = s.availability_info) == null
              ? void 0
              : s.is_available_for_consumption) != null
            ? l
            : !1;
        return f;
      } catch (t) {
        throw (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Failed to fetch music eligible countries",
              ])),
          ),
          t
        );
      }
    }
    function p(e, t) {
      var n = new FormData(),
        r = o("WAWebMobilePlatforms").isSMB() ? s : u,
        a = JSON.stringify({
          params: {
            context: {
              user_countries: [e],
              locale: o(
                "WAWebL10nGetRenderedLocale",
              ).WAWebL10nGetRenderedLocale(),
            },
            media: { media_id: t, media_type: "VIDEO_MEDIA" },
            product: "WA_CHANNELS",
          },
        });
      return (
        n.append("app_id", r),
        n.append("doc_id", c),
        n.append("variables", a),
        n
      );
    }
    l.fetchMusicConsumptionAvailability = m;
  },
  98,
);
