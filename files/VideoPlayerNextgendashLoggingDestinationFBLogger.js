__d(
  "VideoPlayerNextgendashLoggingDestinationFBLogger",
  ["nextgendasherr"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return {
        displayName: "VideoPlayerNextgendashLoggingDestinationFBLogger",
        log: function (t, n) {
          switch (n.type) {
            case "generic_error": {
              var e;
              (e = o("nextgendasherr")
                .nextgendasherrFBLogger(t)
                .catching(n.error)).mustfix.apply(
                e,
                [n.error.messageFormat].concat(n.error.messageParams),
              );
              break;
            }
            case "generic_error_as_warning": {
              var r;
              (r = o("nextgendasherr")
                .nextgendasherrFBLogger(t)
                .catching(n.error)).warn.apply(
                r,
                [n.error.messageFormat].concat(n.error.messageParams),
              );
              break;
            }
            case "generic_warning": {
              var a, i;
              (a = o("nextgendasherr").nextgendasherrFBLogger(t)).warn.apply(
                a,
                [n.format].concat(
                  ((i = n.params) != null ? i : []).map(function (e) {
                    return String(e);
                  }),
                ),
              );
              break;
            }
          }
        },
      };
    }
    l.createVideoPlayerNextgendashLoggingDestinationFBLogger = e;
  },
  98,
);
