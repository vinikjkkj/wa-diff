__d(
  "WAWebSharableEventPresetCoversJob",
  [
    "WATimeUtils",
    "WAWebRelayClient",
    "WAWebSharableEventPresetCoversJobQuery.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebSharableEventPresetCoversJobQuery.graphql")),
      u = 3600 * 1e3,
      c = null;
    function d() {
      var e = o("WATimeUtils").unixTimeMs();
      if (c != null && e < c.expiresAtMs) return c.promise;
      var t = m(),
        n = { promise: t, expiresAtMs: e + u };
      return (
        (c = n),
        t.catch(function () {
          c === n && (c = null);
        }),
        t
      );
    }
    async function m() {
      var e,
        t,
        n = await o("WAWebRelayClient").fetchQuery(
          s,
          { input: {} },
          { environmentType: "whatsapp_web" },
        ),
        r = (
          (e =
            n == null || (t = n.xwa_event_list_preset_cover_images) == null
              ? void 0
              : t.preset_images) != null
            ? e
            : []
        ).flatMap(function (e) {
          var t,
            n,
            r,
            o = e == null ? void 0 : e.cover_image_handle,
            a = e == null || (t = e.cover_image) == null ? void 0 : t.uri;
          return o == null || a == null
            ? []
            : [
                {
                  handle: o,
                  category:
                    (n = e == null ? void 0 : e.category) != null ? n : "",
                  displayOrder:
                    (r = e == null ? void 0 : e.display_order) != null ? r : 0,
                  url: a,
                },
              ];
        });
      return r.sort(function (e, t) {
        return e.displayOrder - t.displayOrder;
      });
    }
    l.listSharableEventPresetCovers = d;
  },
  98,
);
