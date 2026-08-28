__d(
  "AdsAudioSwapReloadOnPublishReducerPlugin",
  [
    "AdDraftPublishStatuses",
    "AdsPEAdgroupSelectors",
    "AdsPECampaignGroupSelectors",
    "adsDraftGetFragmentStatusesFromPublishResponse",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = n.ancestorIDs,
            a = n.response;
          if (
            r("gkx")("1591") ||
            !r("gkx")("3697") ||
            a.status !== r("AdDraftPublishStatuses").SUCCEEDED
          )
            return t;
          var l = r("adsDraftGetFragmentStatusesFromPublishResponse")(a),
            s = l
              .filter(function (e) {
                return e.ad_object_type === "campaign";
              })
              .map(function (e) {
                return e.ad_object_id;
              }),
            u = l.some(function (e) {
              return e.ad_object_type === "ad_set";
            });
          if (u && e != null) {
            var c = o(
              "AdsPECampaignGroupSelectors",
            ).getAllCachedByFieldsSelector()(e.toArray(), { id: null }, i.id);
            for (var d of c.values()) {
              var m,
                p = (m = d.getValue()) == null ? void 0 : m.id;
              p != null && s.push(p);
            }
          }
          var _ = l
              .filter(function (e) {
                return e.ad_object_type === "ad";
              })
              .map(function (e) {
                return e.ad_object_id;
              }),
            f = o("AdsPEAdgroupSelectors").getAllByFieldsSelector()(
              _,
              { creative: null },
              i.id,
            ),
            g = [];
          return (
            f.forEach(function (e) {
              if (e.getValue() != null) {
                var t,
                  n = e.getValueEnforcing(),
                  r =
                    (t = n.creative) == null ||
                    (t = t.asset_feed_spec) == null ||
                    (t = t.audios) == null
                      ? void 0
                      : t.some(function (e) {
                          return e.is_audio_swap === !0;
                        });
                if (r === !0) {
                  var o,
                    a =
                      (o = n.creative) == null
                        ? void 0
                        : o.source_instagram_media_id;
                  a != null && g.push(a);
                }
              }
            }),
            { publishedIGMediaIDs: t.publishedIGMediaIDs.concat(g) }
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
