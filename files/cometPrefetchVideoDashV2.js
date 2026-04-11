__d(
  "cometPrefetchVideoDashV2",
  ["CometDASHPrefetchCacheManager", "UserAgent", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = window;
      t.__comet_ssr_is_server_env_DO_NOT_USE !== !0 &&
        r("CometDASHPrefetchCacheManager") != null &&
        e != null &&
        Array.isArray(e) &&
        e.forEach(function (e) {
          if (e != null && e.video_id != null) {
            var t = String(e.video_id),
              n = [],
              o =
                (typeof e.nextgendash == "boolean" && e.nextgendash === !0) ||
                r("gkx")("7137");
            (Array.isArray(e.representations) &&
              e.representations.forEach(function (e) {
                var t = [],
                  r =
                    e != null &&
                    (e == null ? void 0 : e.playback_resolution_csvqm) !=
                      null &&
                    typeof e.playback_resolution_csvqm == "string"
                      ? e.playback_resolution_csvqm
                      : null;
                if (
                  e != null &&
                  Array.isArray(e.segments) &&
                  typeof e.representation_id == "string" &&
                  typeof e.mime_type == "string" &&
                  typeof e.codecs == "string" &&
                  typeof e.bandwidth == "number" &&
                  typeof e.width == "number" &&
                  typeof e.height == "number" &&
                  typeof e.base_url == "string" &&
                  typeof e.playback_resolution_mos == "string"
                ) {
                  var o = {
                    bandwidth: e.bandwidth,
                    baseURL: e.base_url,
                    codecs: e.codecs,
                    height: e.height,
                    mimeType: e.mime_type,
                    playbackResolutionCSVQM: r,
                    playbackResolutionMOS: e.playback_resolution_mos,
                    representationID: e.representation_id,
                    segments: [],
                    width: e.width,
                  };
                  (e.segments.forEach(function (e) {
                    e != null &&
                      typeof e.start == "number" &&
                      typeof e.end == "number" &&
                      t.push({ end: e.end, start: e.start });
                  }),
                    t.length > 0 && ((o.segments = t), n.push(o)));
                }
              }),
              n.length > 0 &&
                (o
                  ? r("CometDASHPrefetchCacheManager").fetchUsingNextgendash(
                      t,
                      n,
                    )
                  : (!r("UserAgent").isPlatform("iOS") &&
                        r("gkx")("15065") &&
                        r("gkx")("5113") === !0) ||
                      r("gkx")("10233") ||
                      r("gkx")("11869") ||
                      r("gkx")("17440")
                    ? r("CometDASHPrefetchCacheManager").schedulePrefetchTask(
                        t,
                        n,
                      )
                    : r("CometDASHPrefetchCacheManager").fetch(t, n)));
          }
        });
    }
    var s = e;
    l.default = s;
  },
  98,
);
