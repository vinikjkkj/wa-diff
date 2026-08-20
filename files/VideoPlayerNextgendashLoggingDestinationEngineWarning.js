__d(
  "VideoPlayerNextgendashLoggingDestinationEngineWarning",
  ["VideoPlayerNextgendashEngineErrors", "nextgendasherr"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return {
        displayName: "VideoPlayerNextgendashLoggingDestinationEngineWarning",
        log: function (n, r) {
          switch (r.type) {
            case "generic_error": {
              e(
                o(
                  "VideoPlayerNextgendashEngineErrors",
                ).createVideoPlayerErrorFromNextgendashEngine(
                  n,
                  o("nextgendasherr").nextgendasherrFromCause(
                    n,
                    r.error,
                    "VideoPlayerNextgendashLogError",
                  ),
                  "nextgendash_warning_from_" + r.type,
                  r.format,
                  r.params,
                ),
              );
              break;
            }
            case "generic_error_as_warning": {
              e(
                o(
                  "VideoPlayerNextgendashEngineErrors",
                ).createVideoPlayerErrorFromNextgendashEngine(
                  n,
                  o("nextgendasherr").nextgendasherrFromCause(
                    n,
                    r.error,
                    "VideoPlayerNextgendashLogErrorAsWarning",
                  ),
                  "nextgendash_warning_from_" + r.type,
                  r.format,
                  r.params,
                ),
              );
              break;
            }
            case "generic_warning": {
              var t;
              e(
                o(
                  "VideoPlayerNextgendashEngineErrors",
                ).createVideoPlayerErrorFromNextgendashEngine(
                  n,
                  o("nextgendasherr").nextgendasherr.apply(
                    void 0,
                    [n, "VideoPlayerNextgendashLogWarning", r.format].concat(
                      (t = r.params) != null ? t : [],
                    ),
                  ),
                  "nextgendash_warning_from_" + r.type,
                ),
              );
              break;
            }
          }
        },
      };
    }
    l.createVideoPlayerNextgendashLoggingDestinationEngineWarning = e;
  },
  98,
);
