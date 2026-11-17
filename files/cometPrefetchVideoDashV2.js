__d(
  "cometPrefetchVideoDashV2",
  [
    "CometDASHPrefetchCacheManager",
    "UserAgent",
    "cometVideoDashPrefetchVCHold",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = (t == null ? void 0 : t.nativeOnly) === !0,
        a = window;
      a.__comet_ssr_is_server_env_DO_NOT_USE !== !0 &&
        r("CometDASHPrefetchCacheManager") != null &&
        e != null &&
        Array.isArray(e) &&
        e.forEach(function (e) {
          if (e != null && e.video_id != null) {
            var t = String(e.video_id),
              a = [],
              i =
                (typeof e.nextgendash == "boolean" && e.nextgendash === !0) ||
                r("gkx")("7137");
            if (
              (Array.isArray(e.representations) &&
                e.representations.forEach(function (e) {
                  var t = [],
                    n =
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
                    var r = {
                      bandwidth: e.bandwidth,
                      baseURL: e.base_url,
                      codecs: e.codecs,
                      height: e.height,
                      mimeType: e.mime_type,
                      playbackResolutionCSVQM: n,
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
                      t.length > 0 && ((r.segments = t), a.push(r)));
                  }
                }),
              a.length === 0)
            )
              return;
            var l = function () {
              n
                ? r("CometDASHPrefetchCacheManager").fetchUsingNextgendashOnly(
                    t,
                    a,
                  )
                : i
                  ? r("CometDASHPrefetchCacheManager").fetchUsingNextgendash(
                      t,
                      a,
                    )
                  : (!r("UserAgent").isPlatform("iOS") &&
                        r("gkx")("15065") &&
                        r("gkx")("5113") === !0) ||
                      r("gkx")("10233") ||
                      r("gkx")("11869") ||
                      r("gkx")("17440")
                    ? r("CometDASHPrefetchCacheManager").schedulePrefetchTask(
                        t,
                        a,
                      )
                    : r("CometDASHPrefetchCacheManager").fetch(t, a);
            };
            e.wait_for_vc === !0
              ? o("cometVideoDashPrefetchVCHold").holdVideoDashPrefetchUntilVC(
                  t,
                  l,
                )
              : l();
          }
        });
    }
    l.default = e;
  },
  98,
);
